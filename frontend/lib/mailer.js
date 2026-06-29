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

function getTransport() {
  if (cachedTransport) return cachedTransport;

  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!user || !pass) {
    throw new Error(
      "Email is not configured: set SMTP_USER and SMTP_PASSWORD environment variables."
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
  const user = process.env.SMTP_USER || "no-reply@bwichauffeur.com";
  return `BWI Chauffeur <${user}>`;
}

/** Send one email. Returns the nodemailer info object. Throws on failure. */
async function sendEmail(to, subject, text, html) {
  const transport = getTransport();
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
}

// ----------------- Templates (ported from Python) -----------------

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

function buildAdminQuoteEmail(q) {
  const subject = `New Quote Request — ${q.full_name || "Unknown"}`;
  const rows = [
    row("Name", q.full_name),
    row("Phone", q.phone),
    row("Email", q.email),
    row("Preferred Contact", q.preferred_contact),
    row("Service Type", q.service_type),
    row("Vehicle Preference", q.vehicle_preference),
    row("Pickup", q.pickup_location),
    row("Drop-off", q.dropoff_location),
    row("Date / Time", q.pickup_datetime),
    row("Passengers", String(q.passengers || "")),
    row("Heard About Us From", q.heard_from),
    row("Notes", q.notes),
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
        <div style="padding:18px;text-align:center;background:#0a0a0a;">
          <a href="tel:${escapeHtml(q.phone || "")}" style="display:inline-block;padding:10px 22px;background:${GOLD};color:#000;font-weight:bold;text-decoration:none;border-radius:6px;">Call Customer Back</a>
        </div>
      </div>
    </div>`;
  const text = [
    "New Quote Request - BWI Chauffeur",
    "",
    `Name: ${q.full_name || ""}`,
    `Phone: ${q.phone || ""}`,
    `Email: ${q.email || ""}`,
    `Preferred Contact: ${q.preferred_contact || ""}`,
    `Service: ${q.service_type || ""}`,
    `Vehicle Preference: ${q.vehicle_preference || ""}`,
    `Pickup: ${q.pickup_location || ""}`,
    `Drop-off: ${q.dropoff_location || ""}`,
    `Date/Time: ${q.pickup_datetime || ""}`,
    `Passengers: ${q.passengers || ""}`,
    `Heard About Us From: ${q.heard_from || ""}`,
    `Notes: ${q.notes || ""}`,
    `Submitted: ${q.created_at || ""}`,
  ].join("\n");
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
            Call us 24/7 at <a href="tel:+18776790100" style="color:${GOLD};">877-679-0100</a>
          </p>
          <div style="margin:24px 0;padding:16px;background:#0a0a0a;border-left:3px solid ${GOLD};border-radius:4px;">
            <p style="margin:0;color:#999;font-size:13px;">Trip summary:</p>
            <p style="margin:6px 0 0;color:#fff;font-size:14px;">
              ${escapeHtml(q.pickup_location || "")} &rarr; ${escapeHtml(q.dropoff_location || "—")}<br/>
              ${escapeHtml(q.pickup_datetime || "")} &middot; ${escapeHtml(String(q.passengers || ""))} passenger(s)
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
    "For immediate assistance, call us 24/7 at 877-679-0100.\n\n" +
    `Trip: ${q.pickup_location || ""} -> ${q.dropoff_location || "—"}\n` +
    `When: ${q.pickup_datetime || ""}\n` +
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
            Call us 24/7 at <a href="tel:+18776790100" style="color:${GOLD};">877-679-0100</a>
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
    "For immediate assistance, call us 24/7 at 877-679-0100.\n\n" +
    "— BWI Chauffeur\nbwichauffeur.com";
  return { subject, text, html };
}

module.exports = {
  sendEmail,
  buildAdminQuoteEmail,
  buildCustomerQuoteEmail,
  buildAdminContactEmail,
  buildCustomerContactEmail,
};
