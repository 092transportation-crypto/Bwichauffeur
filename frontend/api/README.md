# Form API (Vercel serverless functions)

Replaces the old Python/FastAPI + MongoDB backend that no longer runs on Vercel.

| Endpoint                   | Used by                                                      |
| -------------------------- | ------------------------------------------------------------- |
| `POST /api/quote-requests` | Booking / quote form (`InquiryForm`)                           |
| `POST /api/contact`        | Contact page form (`ContactPage`)                              |
| `POST /api/chat`           | Floating chat widget (`ChatWidget`) — calls the Anthropic Messages API directly |
| `POST /api/lead-capture`   | Lead-capture popup (`LeadCapturePopup`) + exit-intent popup (`ExitIntentPopup`) |

`quote-requests` and `contact` validate the submission, email the admin and
the customer, and (optionally) store the record in MongoDB. `chat` is a
stateless proxy to Claude with two tools (booking-lead capture and an
instant-quote calculator backed by this repo's real pricing/distance code).
`lead-capture` validates the submission and fires an SMS alert + a webhook
notification.

## Required Vercel environment variables

Set these in **Project → Settings → Environment Variables** (Production + Preview):

| Variable             | Required | Default                     | Notes                                                  |
| -------------------- | -------- | --------------------------- | ------------------------------------------------------ |
| `SMTP_USER`          | ✅ yes   | —                           | Gmail address that sends mail (e.g. 092transportation@gmail.com) |
| `SMTP_PASSWORD`      | ✅ yes   | —                           | Gmail **App Password** (not the normal account password) |
| `NOTIFICATION_EMAIL` | no       | `092transportation@gmail.com` | Where inquiry notifications are delivered             |
| `SMTP_HOST`          | no       | `smtp.gmail.com`            | Override for a non-Gmail SMTP provider                 |
| `SMTP_PORT`          | no       | `587`                       | `465` for implicit TLS                                 |
| `MONGO_URL`          | no       | — (persistence disabled)    | If set, submissions are also saved to MongoDB          |
| `DB_NAME`            | no       | `bwichauffeur`              | MongoDB database name                                  |

### Chat widget (`/api/chat`)

| Variable                | Required | Default              | Notes                                                        |
| ------------------------ | -------- | --------------------- | ------------------------------------------------------------- |
| `ANTHROPIC_API_KEY`      | no       | —                    | Without it, `/api/chat` always returns a 200 with a friendly fallback reply (call-us message) instead of crashing. |
| `ANTHROPIC_CHAT_MODEL`   | no       | `claude-haiku-5-5`    | Override to point at a different Claude model.                |

### Lead capture (`/api/lead-capture`, and the chat widget's `submit_booking_lead` tool)

| Variable               | Required | Default | Notes                                                             |
| ----------------------- | -------- | ------- | ------------------------------------------------------------------ |
| `TWILIO_ACCOUNT_SID`    | no       | —       | All four Twilio vars must be set together, or SMS alerts are skipped (logged, never fatal). |
| `TWILIO_AUTH_TOKEN`     | no       | —       | Twilio auth token.                                                  |
| `TWILIO_FROM_NUMBER`    | no       | —       | The Twilio number the alert SMS is sent from.                       |
| `ALERT_PHONE_NUMBER`    | no       | —       | The phone number that receives the "new lead" SMS alert.            |
| `LEAD_WEBHOOK_URL`      | no       | — (notification disabled) | A Make.com scenario webhook, Google Apps Script web app, or similar — receives a JSON POST for every lead. Downstream handling of this webhook is outside this codebase. |

Both the SMS and webhook dispatches are fire-and-forget (6-second timeout,
`Promise.allSettled`, never throw) — a missing/misconfigured/unreachable
third party never blocks or fails the visitor-facing response.

> **Important:** Remove any old `REACT_APP_BACKEND_URL` env var from the Vercel
> project. The frontend now defaults to same-origin `/api`; leaving the old
> value set would send submissions back to the dead backend.

A Gmail App Password requires 2-Step Verification on the Google account:
Google Account → Security → 2-Step Verification → App passwords.

## Local end-to-end test

`node scripts/test-form-api.js` exercises the quote, contact, chat, and
lead-capture handlers (including against a sandbox Ethereal SMTP account for
the email-sending ones) and prints email preview URLs — no real credentials
needed. It also verifies the chat endpoint's no-API-key fallback and that
`/api/lead-capture`'s fire-and-forget dispatches are correctly time-bounded
even against an unreachable webhook host.
