/**
 * POST /api/contact
 *
 * Replaces the old Python FastAPI endpoint. Validates a contact message, emails
 * the admin (NOTIFICATION_EMAIL) and the customer, and optionally saves to
 * MongoDB. Returns 201 with the created record (matching the old API shape).
 */
const { readBody, applyCors, isEmail, uuid, nowIso } = require("../lib/http");
const { saveDoc } = require("../lib/db");
const {
  sendEmail,
  buildAdminContactEmail,
  buildCustomerContactEmail,
} = require("../lib/mailer");

module.exports = async (req, res) => {
  applyCors(res);
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ detail: "Method not allowed" });

  const body = readBody(req);

  const missing = [];
  if (!body.full_name || !String(body.full_name).trim()) missing.push("full_name");
  if (!isEmail(body.email)) missing.push("email");
  if (!body.subject || !String(body.subject).trim()) missing.push("subject");
  if (!body.message || !String(body.message).trim()) missing.push("message");
  if (missing.length) {
    return res.status(400).json({ detail: `Missing or invalid fields: ${missing.join(", ")}` });
  }

  const doc = {
    id: uuid(),
    full_name: String(body.full_name).trim(),
    email: String(body.email).toLowerCase().trim(),
    phone: String(body.phone || "").trim(),
    subject: String(body.subject).trim(),
    message: String(body.message).trim(),
    created_at: nowIso(),
  };

  const saved = await saveDoc("contact_messages", doc);

  const notifyTo = process.env.NOTIFICATION_EMAIL || "092transportation@gmail.com";
  const admin = buildAdminContactEmail(doc);
  const customer = buildCustomerContactEmail(doc);

  const [adminResult, customerResult] = await Promise.allSettled([
    sendEmail(notifyTo, admin.subject, admin.text, admin.html),
    sendEmail(doc.email, customer.subject, customer.text, customer.html),
  ]);

  if (adminResult.status === "rejected") {
    console.error("Admin contact email failed:", adminResult.reason && adminResult.reason.message);
  }
  if (customerResult.status === "rejected") {
    console.error("Customer contact email failed:", customerResult.reason && customerResult.reason.message);
  }

  if (adminResult.status !== "fulfilled" && !saved) {
    return res.status(502).json({
      detail:
        "We could not deliver your message right now. Please call us at 877-679-0100.",
    });
  }

  return res.status(201).json(doc);
};
