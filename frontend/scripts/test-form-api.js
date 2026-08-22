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

  // ---- Quote: instant price breakdown lands in the admin email ----
  // The handler recomputes the fare server-side from miles + vehicle, so the
  // bogus client numbers below must be replaced by the rate-table values.
  const { buildAdminQuoteEmail } = require("../lib/mailer");
  const baseQuote = {
    full_name: "Priced Rider",
    phone: "443-555-0111",
    email: "priced.rider@example.com",
    pickup_location: "BWI Airport",
    dropoff_location: "Annapolis, MD",
    pickup_datetime: "2026-07-04 14:30",
    passengers: 2,
    service_type: "airport",
    vehicle_preference: "Business Sedan",
    sms_consent: true,
  };
  {
    const req = mockReq("POST", {
      ...baseQuote,
      pricing: {
        mode: "instant", vehicle: "Business Sedan", vehicle_label: "Business Sedan",
        miles: 12.4, base_fare: 1, discount: 0, surcharge: 0, card_fee: 0, total: 1,
      },
    });
    const res = mockRes();
    await quoteHandler(req, res);
    const p = (res.body && res.body.pricing) || {};
    const email = buildAdminQuoteEmail(res.body || {});
    const ok =
      res.statusCode === 201 &&
      p.mode === "instant" && p.miles === 12.4 && p.base_fare === 115 &&
      p.discount === 11.5 && p.surcharge === 0 && p.card_fee === 3.11 && p.total === 106.61 &&
      /Vehicle: Business Sedan/.test(email.text) &&
      /Distance: 12\.4 miles/.test(email.text) &&
      /Base fare: \$115\.00/.test(email.text) &&
      /Discount \(10%\): -\$11\.50/.test(email.text) &&
      !/Short-notice/.test(email.text) &&
      /Card fee \(3%\): \+\$3\.11/.test(email.text) &&
      /TOTAL: \$106\.61/.test(email.text) &&
      /TOTAL/.test(email.html) && /\$106\.61/.test(email.html) &&
      email.subject.includes("$106.61");
    console.log(`[quote priced]  -> ${res.statusCode} ${ok ? "PASS" : "FAIL"} total=${p.total}`);
    if (!ok) { failures++; console.log(email.text); }
  }

  // ---- Quote: short-notice surcharge + paid online ----
  {
    const req = mockReq("POST", {
      ...baseQuote,
      pricing: {
        mode: "instant", vehicle: "Business Sedan", vehicle_label: "Business Sedan",
        miles: 12.4, surcharge: 20.7, short_notice: true, paid: true, payment_intent: "pi_test_123",
      },
    });
    const res = mockRes();
    await quoteHandler(req, res);
    const p = (res.body && res.body.pricing) || {};
    const email = buildAdminQuoteEmail(res.body || {});
    const ok =
      res.statusCode === 201 &&
      p.surcharge === 20.7 && p.card_fee === 3.73 && p.total === 127.93 && p.paid === true &&
      /Short-notice surcharge \(20%\): \+\$20\.70/.test(email.text) &&
      /TOTAL: \$127\.93/.test(email.text) &&
      /Paid online via Stripe \(pi_test_123\)/.test(email.text) &&
      /PAID/.test(email.subject);
    console.log(`[quote short-notice+paid] -> ${res.statusCode} ${ok ? "PASS" : "FAIL"} total=${p.total}`);
    if (!ok) { failures++; console.log(email.text); }
  }

  // ---- Quote: hourly / wedding / special event => custom quote line ----
  {
    const req = mockReq("POST", {
      ...baseQuote,
      service_type: "hourly",
      pricing: { mode: "custom", reason: "Hourly / Wedding / Special Event" },
    });
    const res = mockRes();
    await quoteHandler(req, res);
    const p = (res.body && res.body.pricing) || {};
    const email = buildAdminQuoteEmail(res.body || {});
    const ok =
      res.statusCode === 201 && p.mode === "custom" &&
      /Custom quote requested — no instant price calculated \(Hourly \/ Wedding \/ Special Event\)/.test(email.text) &&
      /Custom quote requested — no instant price calculated/.test(email.html) &&
      !/TOTAL/.test(email.text) &&
      email.subject.includes("Custom quote");
    console.log(`[quote custom]  -> ${res.statusCode} ${ok ? "PASS" : "FAIL"}`);
    if (!ok) { failures++; console.log(email.text); }
  }

  // ---- Quote: legacy submission with no pricing field at all ----
  {
    const req = mockReq("POST", { ...baseQuote });
    const res = mockRes();
    await quoteHandler(req, res);
    const p = (res.body && res.body.pricing) || {};
    const email = buildAdminQuoteEmail(res.body || {});
    const ok = res.statusCode === 201 && p.mode === "custom" && /no instant price calculated/.test(email.text);
    console.log(`[quote no-pricing] -> ${res.statusCode} ${ok ? "PASS" : "FAIL"}`);
    if (!ok) { failures++; console.log(email.text); }
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
