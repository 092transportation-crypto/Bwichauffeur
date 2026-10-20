/**
 * POST /api/chat
 *
 * Backs the floating chat widget (src/components/ChatWidget.jsx). Body:
 *   { messages: [{ role: "user" | "assistant", content: "..." }, ...] }
 * The frontend keeps conversation state and resends the full history every
 * turn (the API itself is stateless) — same shape Anthropic's Messages API
 * expects, so it's forwarded close to as-is.
 *
 * Calls the Anthropic Messages API directly via fetch (no SDK dependency).
 * If ANTHROPIC_API_KEY isn't set, or anything about the call fails, this
 * ALWAYS returns 200 with a friendly, honest fallback reply — a broken chat
 * widget should never look broken to a visitor.
 *
 * Two tools:
 *   - submit_booking_lead (always offered): collects name/phone/pickup/
 *     destination/date/time, dispatches an SMS + lead webhook (same
 *     fire-and-forget pattern as api/lead-capture.js), and returns a
 *     server-composed confirmation directly — no second Claude call.
 *   - get_instant_quote (offered because this repo's existing api/_pricing.js
 *     computeQuote + api/distance.js getDistanceMiles are cleanly reusable
 *     here): runs the real pricing math, then makes a second Claude call so
 *     the reply is phrased naturally around the real number.
 */
const { readBody, applyCors, isValidPhone, nowIso } = require("../lib/http");
const { sendSms } = require("../lib/sms");
const { notifyLeadWebhook } = require("../lib/leadWebhook");
const { computeQuote } = require("./_pricing.js");
const { getDistanceMiles } = require("./distance.js");

const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";
const MODEL = process.env.ANTHROPIC_CHAT_MODEL || "claude-haiku-5-5";

const PHONE_DISPLAY = "877-609-1919";

const FALLBACK_REPLY =
  `Live chat isn't available right now — please call us at ${PHONE_DISPLAY} ` +
  `(24/7) or use the booking form on this page, and a reservation specialist ` +
  `will get you a quote right away.`;

const clip = (v, max) => String(v == null ? "" : v).trim().slice(0, max);

// ---------------------------------------------------------------------------
// Real site facts — do not invent fleet names or policies. Kept in sync with
// src/components/Fleet.jsx (fleet) and FloatingCallButton.jsx (phone).
// ---------------------------------------------------------------------------

const FLEET_FACTS = `Our fleet (these are the only vehicles we offer — never invent others):
- Business Sedan — Mercedes-Benz E-Class or similar (3 passengers, 2 bags) — solo/business travel, airport transfers
- First Class Sedan — BMW 7 Series / Mercedes S-Class or similar (3 passengers, 2 bags) — top-tier sedan luxury
- Midsize SUV — Lincoln Nautilus or similar (3 passengers, 4 bags) — families / extra luggage
- Luxury SUV — Chevrolet Suburban or similar (5 passengers, 5 bags) — larger groups
- Premium SUV — Cadillac Escalade or similar (6 passengers, 5 bags) — premier SUV experience
- Sprinter Shuttle — Mercedes Sprinter or similar (13 passengers, 13 bags) — group transportation
- Sprinter Executive — Mercedes Sprinter, upgraded interior with mood lighting (13 passengers, 13 bags) — weddings, proms, corporate groups`;

// Maps the chat-facing / fleet-facing vehicle names to this repo's internal
// pricing keys (api/_pricing.js PRICING table) so get_instant_quote can
// compute a real fare. Case-insensitive lookup; unrecognized/omitted values
// default to the base vehicle.
const VEHICLE_ALIAS = {
  "business sedan": "Business Sedan",
  "first class sedan": "First Class",
  "first class": "First Class",
  "midsize suv": "Mid-Size SUV",
  "mid-size suv": "Mid-Size SUV",
  "mid size suv": "Mid-Size SUV",
  "luxury suv": "Luxury SUV",
  "premium suv": "Premium SUV",
  "sprinter shuttle": "Sprinter Van",
  "sprinter van": "Sprinter Van",
  "sprinter executive": "Sprinter Executive",
};
const DEFAULT_VEHICLE = "Business Sedan";

function resolveVehicle(value) {
  const key = String(value || "").trim().toLowerCase();
  return VEHICLE_ALIAS[key] || DEFAULT_VEHICLE;
}

function buildSystemPrompt(hasQuoteTool) {
  const pricingRule = hasQuoteTool
    ? `Pricing: NEVER state a specific dollar price yourself. Only state a price that comes from a get_instant_quote tool result. If that tool doesn't apply (custom services like weddings/hourly/tours, trips over 150 miles, or you don't yet have both a pickup and a destination) or it fails, explain that pricing depends on distance and vehicle, and offer to collect trip details so a dispatcher can send an exact quote.`
    : `Pricing: NEVER state a specific dollar price yourself — you have no pricing tool available. Always explain that pricing depends on distance and vehicle, and offer to collect trip details so a dispatcher can send an exact quote.`;

  return `You are the live chat assistant on bwichauffeur.com, BWI Chauffeur's website — a licensed (MD PSC Carrier No. 6325), 24/7 luxury chauffeur service serving BWI, DCA and IAD airports, Baltimore, Annapolis, Washington DC, and the greater Maryland / DMV / Delaware area.

Phone: ${PHONE_DISPLAY} (24/7).

${FLEET_FACTS}

How to book: the visitor can fill out the booking form at /booking, call ${PHONE_DISPLAY}, or you can collect their trip details yourself in this chat and submit a booking lead for them.

Rules you must always follow:
- ${pricingRule}
- Availability: you have no live calendar. Never claim to know real-time availability for a specific date. Say the fleet is large and availability is usually open, and offer to collect trip details so a dispatcher can confirm.
- Booking flow: after 2–3 exchanges, or as soon as the visitor shows booking interest, ask: "Would you like to book a ride? I can get you a quote right now." If they say yes, collect — ONE AT A TIME, never more than one piece of information per message — in this order: name, phone, pickup location, destination, date, and time. Once you have all six, call submit_booking_lead.
- Keep replies short, warm, and professional — this is a chat widget, not an email. Do not use markdown formatting.`;
}

function buildTools(hasQuoteTool) {
  const tools = [
    {
      name: "submit_booking_lead",
      description:
        "Submit a visitor's booking request once you have collected all six fields: name, phone, pickup, destination, date, and time. This alerts a human dispatcher who will follow up to confirm the ride and finalize pricing. Call this only once you have every field.",
      input_schema: {
        type: "object",
        properties: {
          name: { type: "string", description: "Visitor's full name" },
          phone: { type: "string", description: "Visitor's phone number" },
          pickup: { type: "string", description: "Pickup location or address" },
          destination: { type: "string", description: "Drop-off location or address" },
          date: { type: "string", description: "Requested pickup date, as the visitor gave it" },
          time: { type: "string", description: "Requested pickup time, as the visitor gave it" },
        },
        required: ["name", "phone", "pickup", "destination", "date", "time"],
      },
    },
  ];

  if (hasQuoteTool) {
    tools.push({
      name: "get_instant_quote",
      description:
        "Get a real instant price estimate for a specific trip from a pickup address and a destination address, and (optionally) a vehicle type. Use this whenever the visitor asks how much a specific trip would cost and you have at least a pickup and a destination. Never state a dollar amount unless it came from this tool's result.",
      input_schema: {
        type: "object",
        properties: {
          pickup: { type: "string", description: "Pickup address" },
          dropoff: { type: "string", description: "Drop-off / destination address" },
          vehicle: {
            type: "string",
            description:
              "Vehicle type: 'Business Sedan', 'First Class Sedan', 'Midsize SUV', 'Luxury SUV', 'Premium SUV', 'Sprinter Shuttle', or 'Sprinter Executive'. Optional — defaults to Business Sedan if omitted.",
          },
        },
        required: ["pickup", "dropoff"],
      },
    });
  }

  return tools;
}

// ---------------------------------------------------------------------------
// Anthropic call
// ---------------------------------------------------------------------------

async function callClaude(apiKey, { system, messages, tools }) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 25000);
  try {
    const res = await fetch(ANTHROPIC_URL, {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1024,
        system,
        messages,
        tools,
      }),
      signal: controller.signal,
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return { ok: false, status: res.status, text };
    }
    const data = await res.json();
    return { ok: true, data };
  } catch (err) {
    return { ok: false, error: err && err.message };
  } finally {
    clearTimeout(timeoutId);
  }
}

function textFrom(data) {
  const block = (data.content || []).find((b) => b.type === "text" && b.text);
  return block ? block.text.trim() : "";
}

// ---------------------------------------------------------------------------
// Tool handlers
// ---------------------------------------------------------------------------

async function handleBookingLead(input) {
  const name = clip(input && input.name, 120) || "there";
  const phoneRaw = clip(input && input.phone, 40);
  const pickup = clip(input && input.pickup, 300);
  const destination = clip(input && input.destination, 300);
  const date = clip(input && input.date, 60);
  const time = clip(input && input.time, 60);

  if (phoneRaw && !isValidPhone(phoneRaw)) {
    console.warn("chat submit_booking_lead: phone failed isValidPhone, forwarding anyway:", phoneRaw);
  }

  const submitted_at = nowIso();
  const smsBody =
    `New CHAT lead: ${name} — ${phoneRaw || "no phone given"} — ` +
    `${pickup || "pickup TBD"} to ${destination || "destination TBD"} ` +
    `on ${date || "date TBD"} at ${time || "time TBD"}`;
  const webhookPayload = {
    source: "chat_widget",
    name,
    phone: phoneRaw,
    pickup,
    destination,
    date,
    time,
    submitted_at,
  };

  // Never let SMS/webhook delivery block or fail the chat response.
  const results = await Promise.allSettled([
    sendSms(smsBody),
    notifyLeadWebhook(webhookPayload),
  ]);
  results.forEach((r, i) => {
    if (r.status === "rejected") {
      console.error(`chat booking-lead dispatch #${i} failed:`, r.reason && r.reason.message);
    }
  });

  const firstName = name.split(" ")[0] || "there";
  return (
    `Thanks, ${firstName}! I've sent your trip — ${pickup || "your pickup"} to ` +
    `${destination || "your destination"} on ${date || "your date"} at ${time || "your time"} — ` +
    `over to our dispatch team. Someone will reach out at ${phoneRaw || "the number you gave"} ` +
    `shortly to confirm the details and your exact quote. Anything else I can help with?`
  );
}

async function handleInstantQuote(input) {
  const pickup = clip(input && input.pickup, 300);
  const dropoff = clip(input && input.dropoff, 300);
  const vehicle = resolveVehicle(input && input.vehicle);

  if (!pickup || !dropoff) {
    return { available: false, reason: "Missing pickup or dropoff address" };
  }

  try {
    const { miles } = await getDistanceMiles(pickup, dropoff);
    const quote = computeQuote(miles, vehicle, false);
    if (!quote) {
      return { available: false, reason: "That vehicle has no instant pricing" };
    }
    if (quote.overLimit) {
      return {
        available: false,
        reason: `Trip is about ${quote.miles} miles, over the 150-mile instant-quote limit — a dispatcher can send a custom quote.`,
      };
    }
    return {
      available: true,
      vehicle,
      miles: quote.miles,
      total: quote.total,
      note:
        "This estimate already includes the standard online-quote discount and card fee. Final confirmation (and any short-notice surcharge) is set by dispatch.",
    };
  } catch (err) {
    console.error("chat get_instant_quote failed:", err && err.message);
    return { available: false, reason: "Could not calculate the distance for those addresses right now" };
  }
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------

module.exports = async (req, res) => {
  applyCors(res);
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ detail: "Method not allowed" });

  const body = readBody(req);
  const incoming = Array.isArray(body.messages) ? body.messages : [];
  const messages = incoming
    .filter(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim()
    )
    .slice(-40) // cap history so a long-running chat can't blow past context/cost budgets
    .map((m) => ({ role: m.role, content: m.content.slice(0, 4000) }));

  if (!messages.length) {
    return res.status(400).json({ detail: "messages is required" });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(200).json({ reply: FALLBACK_REPLY });
  }

  // api/_pricing.js + api/distance.js are both present and cleanly reusable
  // in this repo, so the instant-quote tool is always offered.
  const hasQuoteTool = true;
  const system = buildSystemPrompt(hasQuoteTool);
  const tools = buildTools(hasQuoteTool);

  try {
    const first = await callClaude(apiKey, { system, messages, tools });
    if (!first.ok) {
      console.error("chat: Claude API call failed", first.status, (first.text || first.error || "").slice(0, 300));
      return res.status(200).json({ reply: FALLBACK_REPLY });
    }

    const data = first.data;
    const toolUse = (data.content || []).find((b) => b.type === "tool_use");

    if (!toolUse) {
      return res.status(200).json({ reply: textFrom(data) || FALLBACK_REPLY });
    }

    if (toolUse.name === "submit_booking_lead") {
      const reply = await handleBookingLead(toolUse.input);
      return res.status(200).json({ reply, leadCaptured: true });
    }

    if (toolUse.name === "get_instant_quote" && hasQuoteTool) {
      const toolResult = await handleInstantQuote(toolUse.input);
      const followMessages = [
        ...messages,
        { role: "assistant", content: data.content },
        {
          role: "user",
          content: [
            {
              type: "tool_result",
              tool_use_id: toolUse.id,
              content: JSON.stringify(toolResult),
            },
          ],
        },
      ];
      const second = await callClaude(apiKey, { system, messages: followMessages, tools });
      if (!second.ok) {
        console.error(
          "chat: Claude follow-up call failed",
          second.status,
          (second.text || second.error || "").slice(0, 300)
        );
        return res.status(200).json({ reply: FALLBACK_REPLY });
      }
      return res.status(200).json({ reply: textFrom(second.data) || FALLBACK_REPLY });
    }

    // Unrecognized tool name — fall back gracefully rather than erroring out.
    return res.status(200).json({ reply: FALLBACK_REPLY });
  } catch (err) {
    console.error("chat handler crashed:", err && err.message);
    return res.status(200).json({ reply: FALLBACK_REPLY });
  }
};
