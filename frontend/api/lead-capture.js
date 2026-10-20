/**
 * POST /api/lead-capture
 *
 * Receives leads from the on-site lead-capture popup (shown ~30s after
 * landing) and the exit-intent popup. Validates name + phone (email is
 * optional, validated when present), then fires an SMS alert + a lead
 * webhook notification — both best-effort via Promise.allSettled, so a
 * failed/unconfigured third party never fails the visitor-facing response.
 */
const { readBody, applyCors, isEmail, isValidPhone, nowIso } = require("../lib/http");
const { sendSms } = require("../lib/sms");
const { notifyLeadWebhook } = require("../lib/leadWebhook");

const clip = (v, max) => String(v == null ? "" : v).trim().slice(0, max);

module.exports = async (req, res) => {
  applyCors(res);
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ detail: "Method not allowed" });

  const body = readBody(req);

  const name = clip(body.name, 120);
  const phone = clip(body.phone, 40);
  const email = clip(body.email, 200);
  const source = clip(body.source, 60) || "lead_capture";

  const missing = [];
  if (!name) missing.push("name");
  if (!isValidPhone(phone)) missing.push("phone");
  if (email && !isEmail(email)) missing.push("email");
  if (missing.length) {
    return res.status(400).json({ detail: `Missing or invalid fields: ${missing.join(", ")}` });
  }

  const submitted_at = nowIso();
  const payload = { source, name, phone, email, submitted_at };

  const smsBody =
    `New lead (${source}): ${name} — ${phone}` + (email ? ` — ${email}` : "");

  const results = await Promise.allSettled([
    sendSms(smsBody),
    notifyLeadWebhook(payload),
  ]);
  results.forEach((r, i) => {
    if (r.status === "rejected") {
      console.error(`lead-capture dispatch #${i} failed:`, r.reason && r.reason.message);
    }
  });

  return res.status(201).json({ success: true, ...payload });
};
