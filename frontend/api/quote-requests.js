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
  sendEmail,
  buildAdminQuoteEmail,
  buildCustomerQuoteEmail,
} = require("../lib/mailer");

module.exports = async (req, res) => {
  applyCors(res);
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ detail: "Method not allowed" });

  const body = readBody(req);

  // Validate required fields (mirrors the old Pydantic model).
  const missing = [];
  if (!body.full_name || !String(body.full_name).trim()) missing.push("full_name");
  if (!body.phone || !String(body.phone).trim()) missing.push("phone");
  if (!isEmail(body.email)) missing.push("email");
  if (!body.pickup_location || !String(body.pickup_location).trim()) missing.push("pickup_location");
  if (missing.length) {
    return res.status(400).json({ detail: `Missing or invalid fields: ${missing.join(", ")}` });
  }

  const doc = {
    id: uuid(),
    full_name: String(body.full_name).trim(),
    phone: String(body.phone).trim(),
    preferred_contact: String(body.preferred_contact || "").trim(),
    email: String(body.email).toLowerCase().trim(),
    pickup_location: String(body.pickup_location).trim(),
    dropoff_location: String(body.dropoff_location || "").trim(),
    pickup_datetime: String(body.pickup_datetime || "").trim(),
    passengers: Number(body.passengers) || 1,
    service_type: String(body.service_type || "airport").trim(),
    vehicle_preference: String(body.vehicle_preference || "").trim(),
    heard_from: String(body.heard_from || "").trim(),
    notes: String(body.notes || "").trim(),
    created_at: nowIso(),
  };

  // Persist (optional / non-fatal) and notify in parallel.
  const saved = await saveDoc("quote_requests", doc);

  const notifyTo = process.env.NOTIFICATION_EMAIL || "092transportation@gmail.com";
  const admin = buildAdminQuoteEmail(doc);
  const customer = buildCustomerQuoteEmail(doc);

  const [adminResult, customerResult] = await Promise.allSettled([
    sendEmail(notifyTo, admin.subject, admin.text, admin.html),
    sendEmail(doc.email, customer.subject, customer.text, customer.html),
  ]);

  if (adminResult.status === "rejected") {
    console.error("Admin quote email failed:", adminResult.reason && adminResult.reason.message);
  }
  if (customerResult.status === "rejected") {
    console.error("Customer quote email failed:", customerResult.reason && customerResult.reason.message);
  }

  // Only report success if the inquiry was captured somewhere (admin email or DB).
  if (adminResult.status !== "fulfilled" && !saved) {
    const payload = {
      detail:
        "We could not deliver your request right now. Please call us at 877-679-0100.",
    };
    // TEMP DIAGNOSTIC: surface the SMTP error when explicitly requested.
    if (req.query && req.query.debug === "1") {
      const r = adminResult.reason || {};
      payload._debug = {
        message: r.message,
        code: r.code,
        command: r.command,
        response: r.response,
        smtp_user_set: Boolean(process.env.SMTP_USER),
        smtp_pass_set: Boolean(process.env.SMTP_PASSWORD),
        smtp_host: process.env.SMTP_HOST || "smtp.gmail.com",
        smtp_port: process.env.SMTP_PORT || "587",
      };
    }
    return res.status(502).json(payload);
  }

  return res.status(201).json(doc);
};
