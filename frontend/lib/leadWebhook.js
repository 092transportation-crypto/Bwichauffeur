/**
 * Fire-and-forget lead notification webhook (e.g. a Make.com scenario or a
 * Google Apps Script web app — whatever downstream automation the business
 * wires up is not this code's concern).
 *
 * No-ops — logs and returns, never throws — if LEAD_WEBHOOK_URL isn't set or
 * the request fails, so it can never block or break the visitor-facing
 * response that triggered it.
 *
 * Env: LEAD_WEBHOOK_URL
 */

async function notifyLeadWebhook(payload) {
  const url = process.env.LEAD_WEBHOOK_URL;

  if (!url) {
    console.log("notifyLeadWebhook skipped: LEAD_WEBHOOK_URL not configured");
    return { skipped: true };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6000);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload || {}),
      signal: controller.signal,
    });

    if (!res.ok) {
      console.error("notifyLeadWebhook failed:", res.status);
      return { ok: false, status: res.status };
    }
    return { ok: true };
  } catch (err) {
    console.error("notifyLeadWebhook error:", err && err.message);
    return { ok: false, error: err && err.message };
  } finally {
    clearTimeout(timeoutId);
  }
}

module.exports = { notifyLeadWebhook };
