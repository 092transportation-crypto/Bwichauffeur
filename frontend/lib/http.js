/** Small helpers shared by the serverless form endpoints. */
const crypto = require("crypto");

/** Parse the request body whether Vercel pre-parsed it or handed us a string. */
function readBody(req) {
  const b = req.body;
  if (!b) return {};
  if (typeof b === "string") {
    try {
      return JSON.parse(b);
    } catch {
      return {};
    }
  }
  return b;
}

function applyCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function isEmail(value) {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// Mirrors src/lib/phone.js's phoneDigits/isValidPhone exactly (10–15 digits,
// ignoring formatting characters). src/lib/phone.js is an ES module built for
// the browser bundle and can't be require()'d from these CommonJS serverless
// functions, so the same tiny rule is duplicated here — keep both in sync.
function phoneDigits(value) {
  return String(value ?? "").replace(/\D/g, "");
}

function isValidPhone(value) {
  const digits = phoneDigits(value);
  return digits.length >= 10 && digits.length <= 15;
}

const uuid = () => crypto.randomUUID();
const nowIso = () => new Date().toISOString();

module.exports = { readBody, applyCors, isEmail, phoneDigits, isValidPhone, uuid, nowIso };
