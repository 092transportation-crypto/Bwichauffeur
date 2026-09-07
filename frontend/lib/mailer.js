/**
 * Email service for the Vercel serverless form endpoints.
 *
 * Ported from the original Python backend (backend/services/email_service.py),
 * which used Gmail SMTP. Configured via the same env vars so the existing
 * credentials can be reused:
 *   SMTP_HOST (default smtp.gmail.com)
 *   SMTP_PORT (default 587)
 *   SMTP_USER          - the Gmail address that sends mail
 *   SMTP_PASSWORD       - Gmail app password
 *   NOTIFICATION_EMAIL  - where admin notifications go (default 092transportation@gmail.com)
 */
const nodemailer = require("nodemailer");

const GOLD = "#D4AF37";

let cachedTransport = null;

/**
 * Env values pasted into dashboards often pick up stray whitespace, newlines,
 * or wrapping quotes. Gmail also displays app passwords in spaced groups
 * ("abcd efgh ijkl mnop") while SMTP AUTH requires the 16 chars unspaced.
 */
function cleanEnv(value) {
  return String(value || "").trim().replace(/^["']|["']$/g, "");
}

function smtpConfig() {
  const host = cleanEnv(process.env.SMTP_HOST) || "smtp.gmail.com";
  const port = parseInt(cleanEnv(process.env.SMTP_PORT) || "587", 10);
  const user = cleanEnv(process.env.SMTP_USER);
  let pass = cleanEnv(process.env.SMTP_PASSWORD);
  if (host.endsWith("gmail.com")) pass = pass.replace(/\s+/g, "");
  return { host, port, user, pass };
}

/** Safe-to-log summary of the SMTP config (never includes the password). */
function smtpDebugSummary() {
  const raw = String(process.env.SMTP_PASSWORD || "");
  const { host, port, user, pass } = smtpConfig();
  return (
    `host=${host} port=${port} user=${user || "(unset)"} ` +
    `passLen=${pass.length} rawPassHadWhitespace=${/\s/.test(raw)}`
  );
}

function getTransport() {
  if (cachedTransport) return cachedTransport;

  const { host, port, user, pass } = smtpConfig();

  if (!user || !pass) {
    throw new Error(
      "Email is not configured: set SMTP_USER and SMTP_PASSWORD environment variables. " +
        `(${smtpDebugSummary()})`
    );
  }

  cachedTransport = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // 465 = implicit TLS; 587 = STARTTLS
    auth: { user, pass },
  });
  return cachedTransport;
}

function fromAddress() {
  const user = smtpConfig().user || "no-reply@bwichauffeur.com";
  return `BWI Chauffeur <${user}>`;
}

/** Send one email. Returns the nodemailer info object. Throws on failure. */
async function sendEmail(to, subject, text, html) {
  const transport = getTransport();
  try {
    const info = await transport.sendMail({
      from: fromAddress(),
      to,
      subject,
      text,
      html,
    });
    // When using an Ethereal test account this exposes a preview URL.
    const preview = nodemailer.getTestMessageUrl && nodemailer.getTestMessageUrl(info);
    if (preview) console.log("Email preview URL:", preview);
    return info;
  } catch (err) {
    // Surface everything the SMTP server told us, plus a redacted config
    // summary, so production logs pinpoint the failure (auth vs network vs
    // recipient) without exposing credentials.
    console.error(
      "sendEmail failed:",
      JSON.stringify({
        to,
        subject,
        code: err.code,
        responseCode: err.responseCode,
        command: err.command,
        response: err.response,
        message: err.message,
        smtp: smtpDebugSummary(),
      })
    );
    throw err;
  }
}

// ----------------- Templates (ported from Python) -----------------

// Human-readable labels for the raw values the form submits. Includes legacy
// values (phone_text, cruise, group, ...) so older links/forms still render.
const SERVICE_LABELS = {
  airport: "Airport Transfer",
  corporate: "Corporate",
  wedding: "Wedding",
  special_event: "Special Event",
  hourly: "Hourly",
  cruise: "Cruise Port Transfer",
  group: "Group / Sprinter Van",
  tour: "City Tour",
  other: "Other",
};

const CONTACT_LABELS = {
  phone: "Phone",
  email: "Email",
  text: "Text",
  phone_text: "Phone / Text",
};

const VEHICLE_LABELS = {
  business_sedan: "Business Sedan (Mercedes E-Class)",
  first_class_sedan: "First Class Sedan (BMW 7 Series / Mercedes S-Class)",
  midsize_suv: "Midsize SUV (Lincoln Nautilus)",
  luxury_suv: "Luxury SUV (Chevrolet Suburban)",
  premium_suv: "Premium SUV (Cadillac Escalade)",
  sprinter_shuttle: "Sprinter Shuttle",
  sprinter_executive: "Sprinter Executive",
  sprinter_limo: "Sprinter Limo",
};

const HEARD_FROM_LABELS = {
  google: "Google Search",
  social: "Social Media",
  referral: "Referral",
  hotel: "Hotel Partner",
  other: "Other",
};

function serviceLabel(value) {
  return SERVICE_LABELS[value] || value || "";
}

function vehicleLabel(value) {
  return VEHICLE_LABELS[value] || value || "";
}

function heardFromLabel(value) {
  return HEARD_FROM_LABELS[value] || value || "";
}

function contactLabel(value) {
  return CONTACT_LABELS[value] || value || "";
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/**
 * Format a datetime-local value ("2026-10-21T17:32") as
 * "October 21, 2026 at 5:32 PM". Parsed from the string directly (no Date
 * object) so the customer's chosen local time is never shifted by the
 * server's timezone. Unrecognized values pass through unchanged.
 */
function formatDateTime(value) {
  const m = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(String(value || ""));
  if (!m) return value || "";
  const [, y, mo, d, h, mi] = m;
  const month = MONTHS[Number(mo) - 1];
  if (!month) return value;
  let hour = Number(h);
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${month} ${Number(d)}, ${y} at ${hour}:${mi} ${ampm}`;
}

const coordText = (lat, lng) =>
  lat != null && lng != null ? `${lat.toFixed(5)}, ${lng.toFixed(5)} (https://www.google.com/maps?q=${lat},${lng})` : "";

function row(label, value) {
  if (!value) return "";
  return (
    `<tr><td style="padding:8px 14px;border-bottom:1px solid #2a2a2a;color:#999;` +
    `font-size:13px;width:160px;">${label}</td>` +
    `<td style="padding:8px 14px;border-bottom:1px solid #2a2a2a;color:#fff;` +
    `font-size:14px;">${escapeHtml(value)}</td></tr>`
  );
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// ----------------- Pricing breakdown (instant quote) -----------------

const money = (n) => `$${Number(n || 0).toFixed(2)}`;

const CUSTOM_QUOTE_TEXT = "Custom quote requested — no instant price calculated";

/**
 * Label/value lines for the pricing section of the admin email. `p` is the
 * normalized `pricing` object built in api/quote-requests.js:
 *   { mode: "instant", vehicle_label, miles, base_fare, discount, surcharge,
 *     card_fee, total, paid, payment_intent }
 *   { mode: "custom", reason }
 * Returns null when no instant price was calculated.
 */
function pricingLines(p) {
  if (!p || p.mode !== "instant") return null;
  const lines = [
    { label: "Vehicle", value: p.vehicle_label || p.vehicle || "" },
    { label: "Distance", value: `${p.miles} miles` },
    { label: "Base fare", value: money(p.base_fare) },
    { label: "Discount (10%)", value: `-${money(p.discount)}`, tone: "discount" },
  ];
  if (Number(p.surcharge) > 0) {
    lines.push({
      label: "Short-notice surcharge (20%)",
      value: `+${money(p.surcharge)}`,
      tone: "surcharge",
    });
  }
  lines.push({ label: "Card fee (3%)", value: `+${money(p.card_fee)}` });
  lines.push({ label: "TOTAL", value: money(p.total), tone: "total" });
  lines.push({
    label: "Payment",
    value: p.paid
      ? `Paid online via Stripe${p.payment_intent ? ` (${p.payment_intent})` : ""}`
      : "Not paid online — instant quote only",
  });
  return lines;
}

function pricingHtml(p) {
  const lines = pricingLines(p);
  const heading =
    `<p style="margin:0 0 10px;color:${GOLD};font-size:12px;text-transform:uppercase;` +
    `letter-spacing:1px;">Pricing</p>`;
  let body;
  if (!lines) {
    const reason =
      p && p.reason ? ` <span style="color:#999;">(${escapeHtml(p.reason)})</span>` : "";
    body = `<p style="margin:0;color:#fff;font-size:14px;">${CUSTOM_QUOTE_TEXT}${reason}</p>`;
  } else {
    const color = { discount: "#34d399", surcharge: GOLD, total: GOLD };
    body =
      `<table style="width:100%;border-collapse:collapse;">` +
      lines
        .map((l) => {
          const isTotal = l.tone === "total";
          const c = color[l.tone] || "#fff";
          const size = isTotal ? "18px" : "14px";
          const weight = isTotal ? "bold" : "normal";
          const border = isTotal ? `border-top:1px solid ${GOLD};` : "";
          return (
            `<tr><td style="padding:6px 0;${border}color:#999;font-size:13px;">${escapeHtml(l.label)}</td>` +
            `<td style="padding:6px 0;${border}color:${c};font-size:${size};font-weight:${weight};` +
            `text-align:right;">${escapeHtml(l.value)}</td></tr>`
          );
        })
        .join("") +
      `</table>`;
  }
  return (
    `<div style="padding:18px 22px;background:#0a0a0a;border-top:1px solid #2a2a2a;">` +
    `${heading}${body}</div>`
  );
}

function pricingText(p) {
  const lines = pricingLines(p);
  if (!lines) {
    return `Pricing:\n  ${CUSTOM_QUOTE_TEXT}${p && p.reason ? ` (${p.reason})` : ""}`;
  }
  return ["Pricing:", ...lines.map((l) => `  ${l.label}: ${l.value}`)].join("\n");
}

function pricingSubjectSuffix(p) {
  if (!p || p.mode !== "instant") return "Custom quote";
  return `${money(p.total)}${p.paid ? " PAID" : ""}`;
}

function buildAdminQuoteEmail(q) {
  const paid = Boolean(q.pricing && q.pricing.paid);
  const subject =
    `${paid ? "New Booking (PAID)" : "New Quote Request"} — ` +
    `${q.full_name || "Unknown"} — ${pricingSubjectSuffix(q.pricing)}`;
  const rows = [
    row("Name", q.full_name),
    row("Phone", q.phone),
    row("Email", q.email),
    row("Preferred Contact", contactLabel(q.preferred_contact)),
    row("Service Type", serviceLabel(q.service_type)),
    row("Flight Number", q.flight_number),
    row("Vehicle Preference", vehicleLabel(q.vehicle_preference)),
    row("Pickup Location", q.pickup_location),
    q.pickup_lat != null ? row("Pickup Coordinates", coordText(q.pickup_lat, q.pickup_lng)) : "",
    row("Drop-off Location", q.dropoff_location),
    q.dropoff_lat != null ? row("Drop-off Coordinates", coordText(q.dropoff_lat, q.dropoff_lng)) : "",
    row("Date & Time", formatDateTime(q.pickup_datetime)),
    row("Passengers", String(q.passengers || "")),
    row("Heard About Us From", heardFromLabel(q.heard_from)),
    row("Notes / Special Requests", q.notes),
    row("Submitted", q.created_at),
  ].join("");
  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;background:#0a0a0a;padding:30px;">
      <div style="max-width:600px;margin:0 auto;background:#111;border:1px solid ${GOLD};border-radius:12px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,${GOLD},#F4E5C3);padding:20px;text-align:center;">
          <h1 style="margin:0;color:#000;font-size:22px;letter-spacing:1px;">BWI CHAUFFEUR</h1>
          <p style="margin:4px 0 0;color:#000;font-size:13px;">New Quote Request</p>
        </div>
        <table style="width:100%;border-collapse:collapse;">${rows}</table>
        ${pricingHtml(q.pricing)}
        <div style="padding:18px;text-align:center;background:#0a0a0a;">
          <a href="tel:${escapeHtml(q.phone || "")}" style="display:inline-block;padding:10px 22px;background:${GOLD};color:#000;font-weight:bold;text-decoration:none;border-radius:6px;">Call Customer Back</a>
        </div>
      </div>
    </div>`;
  const textLine = (label, value) => (value ? `${label}: ${value}` : "");
  const text = [
    "New Quote Request - BWI Chauffeur",
    "",
    textLine("Name", q.full_name),
    textLine("Phone", q.phone),
    textLine("Email", q.email),
    textLine("Preferred Contact", contactLabel(q.preferred_contact)),
    textLine("Service Type", serviceLabel(q.service_type)),
    textLine("Flight Number", q.flight_number),
    textLine("Vehicle Preference", vehicleLabel(q.vehicle_preference)),
    textLine("Pickup Location", q.pickup_location),
    q.pickup_lat != null ? textLine("Pickup Coordinates", coordText(q.pickup_lat, q.pickup_lng)) : "",
    textLine("Drop-off Location", q.dropoff_location),
    q.dropoff_lat != null ? textLine("Drop-off Coordinates", coordText(q.dropoff_lat, q.dropoff_lng)) : "",
    textLine("Date & Time", formatDateTime(q.pickup_datetime)),
    textLine("Passengers", String(q.passengers || "")),
    textLine("Heard About Us From", heardFromLabel(q.heard_from)),
    textLine("Notes / Special Requests", q.notes),
    textLine("Submitted", q.created_at),
  ]
    .filter((line, i) => i < 2 || line)
    .join("\n") +
    "\n\n" +
    pricingText(q.pricing);
  return { subject, text, html };
}

function buildCustomerQuoteEmail(q) {
  const name = (q.full_name || "there").split(" ")[0] || "there";
  const subject = "We received your BWI Chauffeur quote request";
  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;background:#0a0a0a;padding:30px;">
      <div style="max-width:600px;margin:0 auto;background:#111;border:1px solid ${GOLD};border-radius:12px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,${GOLD},#F4E5C3);padding:24px;text-align:center;">
          <h1 style="margin:0;color:#000;font-size:24px;letter-spacing:1px;">BWI CHAUFFEUR</h1>
          <p style="margin:6px 0 0;color:#000;font-size:13px;">Your Ride. Our Priority.</p>
        </div>
        <div style="padding:30px;color:#fff;">
          <h2 style="color:${GOLD};margin:0 0 16px;font-size:20px;">Hi ${escapeHtml(name)},</h2>
          <p style="line-height:1.6;color:#ddd;font-size:15px;">
            Thank you for choosing BWI Chauffeur. We&rsquo;ve received your quote request and a
            reservation specialist will reach out shortly with your custom quote.
          </p>
          <p style="line-height:1.6;color:#ddd;font-size:15px;">
            <strong style="color:${GOLD};">Need immediate assistance?</strong><br/>
            Call us 24/7 at <a href="tel:+18776091919" style="color:${GOLD};">877-609-1919</a>
          </p>
          <div style="margin:24px 0;padding:16px;background:#0a0a0a;border-left:3px solid ${GOLD};border-radius:4px;">
            <p style="margin:0;color:#999;font-size:13px;">Trip summary:</p>
            <p style="margin:6px 0 0;color:#fff;font-size:14px;">
              ${escapeHtml(q.pickup_location || "")} &rarr; ${escapeHtml(q.dropoff_location || "—")}<br/>
              ${escapeHtml(formatDateTime(q.pickup_datetime) || "")} &middot; ${escapeHtml(String(q.passengers || ""))} passenger(s)
            </p>
          </div>
          <p style="color:#666;font-size:12px;margin-top:30px;">
            BWI Chauffeur &middot; Serving Maryland, Delaware &amp; the DMV<br/>
            <a href="https://bwichauffeur.com" style="color:${GOLD};">bwichauffeur.com</a>
          </p>
        </div>
      </div>
    </div>`;
  const text =
    `Hi ${name},\n\n` +
    "Thank you for choosing BWI Chauffeur. We've received your quote request and " +
    "a reservation specialist will reach out shortly with your custom quote.\n\n" +
    "For immediate assistance, call us 24/7 at 877-609-1919.\n\n" +
    `Trip: ${q.pickup_location || ""} -> ${q.dropoff_location || "—"}\n` +
    `When: ${formatDateTime(q.pickup_datetime) || ""}\n` +
    `Passengers: ${q.passengers || ""}\n\n` +
    "— BWI Chauffeur\nbwichauffeur.com";
  return { subject, text, html };
}

function buildAdminContactEmail(m) {
  const subject = `New Contact Message — ${m.subject || "No subject"}`;
  const rows = [
    row("Name", m.full_name),
    row("Email", m.email),
    row("Phone", m.phone),
    row("Subject", m.subject),
    row("Submitted", m.created_at),
  ].join("");
  const messageHtml = escapeHtml(m.message || "").replace(/\n/g, "<br/>");
  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;background:#0a0a0a;padding:30px;">
      <div style="max-width:600px;margin:0 auto;background:#111;border:1px solid ${GOLD};border-radius:12px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,${GOLD},#F4E5C3);padding:20px;text-align:center;">
          <h1 style="margin:0;color:#000;font-size:22px;letter-spacing:1px;">BWI CHAUFFEUR</h1>
          <p style="margin:4px 0 0;color:#000;font-size:13px;">New Contact Message</p>
        </div>
        <table style="width:100%;border-collapse:collapse;">${rows}</table>
        <div style="padding:18px 22px;background:#0a0a0a;">
          <p style="margin:0 0 8px;color:#999;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Message</p>
          <div style="color:#fff;font-size:14px;line-height:1.6;border-left:3px solid ${GOLD};padding:10px 14px;background:#0f0f0f;border-radius:4px;">${messageHtml}</div>
        </div>
        <div style="padding:18px;text-align:center;background:#0a0a0a;">
          <a href="mailto:${escapeHtml(m.email || "")}" style="display:inline-block;padding:10px 22px;background:${GOLD};color:#000;font-weight:bold;text-decoration:none;border-radius:6px;">Reply to Customer</a>
        </div>
      </div>
    </div>`;
  const text = [
    "New Contact Message - BWI Chauffeur",
    "",
    `Name: ${m.full_name || ""}`,
    `Email: ${m.email || ""}`,
    `Phone: ${m.phone || ""}`,
    `Subject: ${m.subject || ""}`,
    `Submitted: ${m.created_at || ""}`,
    "",
    "Message:",
    m.message || "",
  ].join("\n");
  return { subject, text, html };
}

function buildCustomerContactEmail(m) {
  const name = (m.full_name || "there").split(" ")[0] || "there";
  const subject = "We received your message — BWI Chauffeur";
  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;background:#0a0a0a;padding:30px;">
      <div style="max-width:600px;margin:0 auto;background:#111;border:1px solid ${GOLD};border-radius:12px;overflow:hidden;">
        <div style="background:linear-gradient(135deg,${GOLD},#F4E5C3);padding:24px;text-align:center;">
          <h1 style="margin:0;color:#000;font-size:24px;letter-spacing:1px;">BWI CHAUFFEUR</h1>
          <p style="margin:6px 0 0;color:#000;font-size:13px;">Your Ride. Our Priority.</p>
        </div>
        <div style="padding:30px;color:#fff;">
          <h2 style="color:${GOLD};margin:0 0 16px;font-size:20px;">Hi ${escapeHtml(name)},</h2>
          <p style="line-height:1.6;color:#ddd;font-size:15px;">
            Thanks for reaching out. We&rsquo;ve received your message and a member of our
            team will get back to you within one business day.
          </p>
          <p style="line-height:1.6;color:#ddd;font-size:15px;">
            <strong style="color:${GOLD};">Need immediate assistance?</strong><br/>
            Call us 24/7 at <a href="tel:+18776091919" style="color:${GOLD};">877-609-1919</a>
          </p>
          <p style="color:#666;font-size:12px;margin-top:30px;">
            BWI Chauffeur &middot; Serving Maryland, Delaware &amp; the DMV<br/>
            <a href="https://bwichauffeur.com" style="color:${GOLD};">bwichauffeur.com</a>
          </p>
        </div>
      </div>
    </div>`;
  const text =
    `Hi ${name},\n\n` +
    "Thanks for reaching out. We've received your message and a member of our " +
    "team will get back to you within one business day.\n\n" +
    "For immediate assistance, call us 24/7 at 877-609-1919.\n\n" +
    "— BWI Chauffeur\nbwichauffeur.com";
  return { subject, text, html };
}

module.exports = {
  cleanEnv,
  sendEmail,
  pricingText,
  pricingHtml,
  buildAdminQuoteEmail,
  buildCustomerQuoteEmail,
  buildAdminContactEmail,
  buildCustomerContactEmail,
};
