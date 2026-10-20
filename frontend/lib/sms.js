/**
 * Fire-and-forget SMS alert via the Twilio REST API (no SDK dependency).
 *
 * Used for lead notifications (lead-capture popups + chat-widget booking
 * leads). No-ops — logs and returns, never throws — if Twilio isn't fully
 * configured or the request fails, so it can never block or break the
 * visitor-facing response that triggered it.
 *
 * Env: TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER,
 *      ALERT_PHONE_NUMBER (where the alert SMS is sent)
 */

async function sendSms(body) {
  const {
    TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN,
    TWILIO_FROM_NUMBER,
    ALERT_PHONE_NUMBER,
  } = process.env;

  if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_FROM_NUMBER || !ALERT_PHONE_NUMBER) {
    console.log("sendSms skipped: Twilio env vars not fully configured");
    return { skipped: true };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6000);

  try {
    const auth = Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString("base64");
    const params = new URLSearchParams({
      To: ALERT_PHONE_NUMBER,
      From: TWILIO_FROM_NUMBER,
      Body: String(body || "").slice(0, 1500),
    });

    const res = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
        signal: controller.signal,
      }
    );

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("sendSms failed:", res.status, text.slice(0, 300));
      return { ok: false, status: res.status };
    }
    return { ok: true };
  } catch (err) {
    console.error("sendSms error:", err && err.message);
    return { ok: false, error: err && err.message };
  } finally {
    clearTimeout(timeoutId);
  }
}

module.exports = { sendSms };
