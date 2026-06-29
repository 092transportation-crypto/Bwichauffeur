# Form API (Vercel serverless functions)

Replaces the old Python/FastAPI + MongoDB backend that no longer runs on Vercel.

| Endpoint               | Used by                          |
| ---------------------- | -------------------------------- |
| `POST /api/quote-requests` | Booking / quote form (`QuoteForm`) |
| `POST /api/contact`        | Contact page form (`ContactPage`)  |

Each endpoint validates the submission, emails the admin and the customer, and
(optionally) stores the record in MongoDB.

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

> **Important:** Remove any old `REACT_APP_BACKEND_URL` env var from the Vercel
> project. The frontend now defaults to same-origin `/api`; leaving the old
> value set would send submissions back to the dead backend.

A Gmail App Password requires 2-Step Verification on the Google account:
Google Account → Security → 2-Step Verification → App passwords.

## Local end-to-end test

`node scripts/test-form-api.js` exercises both handlers against a sandbox
(Ethereal) SMTP account and prints email preview URLs — no real credentials
needed.
