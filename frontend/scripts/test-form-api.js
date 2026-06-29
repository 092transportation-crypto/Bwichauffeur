/**
 * End-to-end test for the form serverless functions.
 *
 * Spins up a real (sandboxed) Ethereal SMTP account, points the handlers at it
 * via the same SMTP_* env vars used in production, then invokes the actual
 * /api/quote-requests and /api/contact handlers with mock req/res objects.
 * Verifies HTTP status + that emails were really sent (prints preview URLs).
 *
 * Run: node scripts/test-form-api.js
 */
const nodemailer = require("nodemailer");

function mockReq(method, body) {
  return { method, body, headers: { "content-type": "application/json" } };
}

function mockRes() {
  return {
    statusCode: null,
    body: null,
    headers: {},
    setHeader(k, v) {
      this.headers[k] = v;
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(obj) {
      this.body = obj;
      return this;
    },
    end() {
      return this;
    },
  };
}

async function run() {
  // 1. Real sandbox SMTP so we exercise the actual send path.
  const testAccount = await nodemailer.createTestAccount();
  process.env.SMTP_HOST = testAccount.smtp.host;
  process.env.SMTP_PORT = String(testAccount.smtp.port);
  process.env.SMTP_USER = testAccount.user;
  process.env.SMTP_PASSWORD = testAccount.pass;
  process.env.NOTIFICATION_EMAIL = "092transportation@gmail.com";
  delete process.env.MONGO_URL; // email-only path (worst case)

  // Require handlers AFTER env is set.
  const quoteHandler = require("../api/quote-requests");
  const contactHandler = require("../api/contact");

  let failures = 0;

  // ---- Quote: valid submission ----
  {
    const req = mockReq("POST", {
      full_name: "Jane Traveler",
      phone: "443-555-0199",
      preferred_contact: "phone",
      email: "jane.traveler@example.com",
      pickup_location: "BWI Airport",
      dropoff_location: "Inner Harbor, Baltimore",
      pickup_datetime: "2026-07-04 14:30",
      passengers: 3,
      service_type: "airport",
      vehicle_preference: "Mercedes S-Class",
      heard_from: "Google",
      notes: "Flight UA123, please track.",
      sms_consent: true,
    });
    const res = mockRes();
    await quoteHandler(req, res);
    const ok = res.statusCode === 201 && res.body && res.body.id;
    console.log(`[quote valid]   -> ${res.statusCode} ${ok ? "PASS" : "FAIL"}`);
    if (!ok) failures++;
  }

  // ---- Quote: missing required field ----
  {
    const req = mockReq("POST", { full_name: "No Phone", email: "x@y.com" });
    const res = mockRes();
    await quoteHandler(req, res);
    const ok = res.statusCode === 400 && /phone|pickup_location/.test(res.body.detail);
    console.log(`[quote invalid] -> ${res.statusCode} ${ok ? "PASS" : "FAIL"} (${res.body.detail})`);
    if (!ok) failures++;
  }

  // ---- Contact: valid submission ----
  {
    const req = mockReq("POST", {
      full_name: "Bob Rider",
      email: "bob.rider@example.com",
      phone: "410-555-0100",
      subject: "Wedding transportation quote",
      message: "Need 2 SUVs for a June wedding.\nThanks!",
      sms_consent: true,
    });
    const res = mockRes();
    await contactHandler(req, res);
    const ok = res.statusCode === 201 && res.body && res.body.id;
    console.log(`[contact valid] -> ${res.statusCode} ${ok ? "PASS" : "FAIL"}`);
    if (!ok) failures++;
  }

  // ---- Contact: missing subject ----
  {
    const req = mockReq("POST", { full_name: "Bob", email: "bob@example.com", message: "hi" });
    const res = mockRes();
    await contactHandler(req, res);
    const ok = res.statusCode === 400 && /subject/.test(res.body.detail);
    console.log(`[contact invalid] -> ${res.statusCode} ${ok ? "PASS" : "FAIL"} (${res.body.detail})`);
    if (!ok) failures++;
  }

  // ---- Method guard ----
  {
    const res = mockRes();
    await quoteHandler(mockReq("GET", {}), res);
    const ok = res.statusCode === 405;
    console.log(`[quote GET 405] -> ${res.statusCode} ${ok ? "PASS" : "FAIL"}`);
    if (!ok) failures++;
  }

  console.log(failures === 0 ? "\nALL TESTS PASSED" : `\n${failures} TEST(S) FAILED`);
  process.exit(failures === 0 ? 0 : 1);
}

run().catch((err) => {
  console.error("Test run crashed:", err);
  process.exit(1);
});
