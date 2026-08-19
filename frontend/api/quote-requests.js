/**
 * POST /api/quote-requests
 *
 * Replaces the old Python FastAPI endpoint. Validates a quote request, emails
 * the admin (NOTIFICATION_EMAIL) and the customer, and optionally saves to
 * MongoDB. Returns 201 with the created record (matching the old API shape) so
 * the existing frontend keeps working unchanged.
 */
const { readBody, applyCors, isEmail, uuid, nowIso } = require("../lib/http");
const { saveDoc } = require("../lib/db");
const {
  cleanEnv,
  sendEmail,
  buildAdminQuoteEmail,
  buildCustomerQuoteEmail,
} = require("../lib/mailer");

module.exports = async (req, res) => {
  applyCors(res);
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ detail: "Method not allowed" });

  const body = readBody(req);

  // Validate required fields. Name and email are optional so the compact
  // hero quick-quote form (pickup, dropoff, date, phone) can submit; we
  // always need a way to reach the customer plus a pickup location.
  const hasPhone = body.phone && String(body.phone).trim();
  const hasEmail = isEmail(body.email);
  const missing = [];
  if (!hasPhone && !hasEmail) missing.push("phone or email");
  if (!body.pickup_location || !String(body.pickup_location).trim()) missing.push("pickup_location");
  if (missing.length) {
    return res.status(400).json({ detail: `Missing or invalid fields: ${missing.join(", ")}` });
  }

  const doc = {
    id: uuid(),
    full_name: String(body.full_name || "").trim() || "Website Visitor",
    phone: String(body.phone || "").trim(),
    preferred_contact: String(body.preferred_contact || "").trim(),
    email: hasEmail ? String(body.email).toLowerCase().trim() : "",
    pickup_location: String(body.pickup_location).trim(),
    dropoff_location: String(body.dropoff_location || "").trim(),
    pickup_datetime: String(body.pickup_datetime || "").trim(),
    passengers: Number(body.passengers) || 1,
    service_type: String(body.service_type || "airport").trim(),
    vehicle_preference: String(body.vehicle_preference || "").trim(),
    flight_number: String(body.flight_number || "").trim(),
    heard_from: String(body.heard_from || "").trim(),
    notes: String(body.notes || "").trim(),
    created_at: nowIso(),
  };

  // Persist (optional / non-fatal) and notify in parallel.
  const saved = await saveDoc("quote_requests", doc);

  const notifyTo = cleanEnv(process.env.NOTIFICATION_EMAIL) || "092transportation@gmail.com";
  const admin = buildAdminQuoteEmail(doc);
  const customer = buildCustomerQuoteEmail(doc);

  const [adminResult, customerResult] = await Promise.allSettled([
    sendEmail(notifyTo, admin.subject, admin.text, admin.html),
    doc.email
      ? sendEmail(doc.email, customer.subject, customer.text, customer.html)
      : Promise.resolve(null),
  ]);

  if (adminResult.status === "rejected") {
    console.error("Admin quote email failed:", adminResult.reason && adminResult.reason.message);
  }
  if (customerResult.status === "rejected") {
    console.error("Customer quote email failed:", customerResult.reason && customerResult.reason.message);
  }

  // Only report success if the inquiry was captured somewhere (admin email or DB).
  if (adminResult.status !== "fulfilled" && !saved) {
    return res.status(502).json({
      detail:
        "We could not deliver your request right now. Please call us at 877-609-1919.",
    });
  }

  return res.status(201).json(doc);
};
