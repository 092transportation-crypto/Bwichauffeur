# BWI Chauffeur - PRD

## Original Problem Statement
A website similar to dcalimos.com for BWI Chauffeur brand. Gold-and-black theme matching brand logo. Multi-page SPA with SEO optimization, AI chatbot, fleet showcase, blog, coverage areas (Maryland counties, Delaware, parts of PA), testimonials, FAQ, privacy/terms, cruise transportation page, social media links, and phone number (667) 400-0092.

## Tech Stack
- Frontend: React (CRA + craco), Tailwind, react-router, react-helmet-async, lucide-react, sonner, shadcn UI
- Backend: FastAPI + MongoDB (motor) + Gmail SMTP for transactional email
- 3rd-party: mylimobiz.com (booking widget), Emergent LLM Key (OpenAI GPT-4o chatbot), Gmail SMTP

## Environments
- Preview (dev): https://gold-black-booking.preview.emergentagent.com
- Production: https://gold-black-booking.emergent.host

## Implemented
### 2026-02-14 (later)
- GA4 snippet wired into `index.html` with guarded init (no-op while `G-XXXXXXXXXX` placeholder). Swap the `window.GA4_MEASUREMENT_ID` value once a real Measurement ID is available.
- Contact Us feature shipped:
  - Backend route `POST /api/contact` + `GET /api/contact` (Mongo collection `contact_messages`)
  - Gmail SMTP notifications to `092transportation@gmail.com` + branded customer confirmation
  - `/contact` page with Name, Email, Phone (optional), Subject, Message — gold/black theme matching site, success state, toast notifications
  - "Contact" link added to navbar (desktop dropdown + mobile menu) and footer Quick Links
  - `/contact` added to sitemap.xml
- 10 new BWI Airport route landing pages (each with unique 400+ word copy, FAQ JSON-LD, breadcrumbs, flat-rate stats strip, "Why choose", "What to expect", "Service details", related routes):
  - `/bwi-to-washington-dc`, `/bwi-to-annapolis`, `/bwi-to-columbia-md`, `/bwi-to-bethesda`, `/bwi-to-northern-virginia`, `/bwi-to-arlington`, `/bwi-to-alexandria`, `/bwi-to-rockville`, `/bwi-to-silver-spring`, `/bwi-to-dulles`
  - Data file `frontend/src/data/bwiRoutes.js` + dynamic template `frontend/src/pages/RoutePage.jsx`
  - All 10 surfaced on `/service-areas` hub ("Popular BWI Airport Routes" block) and footer
  - All 10 added to `sitemap.xml` with priority 0.9
  - Title format: `BWI Airport to <Destination> | BWI Chauffeur`; meta descriptions mention flat rate, professional chauffeur, 24/7

### 2026-02-14
- Trust bar (gold) added at the very top of every page: "Licensed & Insured | Maryland PSC Carrier | Blacklane & Savoy Partner | 12-Vehicle Fleet | 24/7 Availability"
- Booking page: rates notice added near booking widget — "Rates vary by vehicle and distance — fill out our form for a free instant quote"
- Footer copyright pinned to © 2026 BWI Chauffeur
- Hero rewritten: H1 "Baltimore-Washington's Most Trusted Chauffeur Service" + tagline "Professional. Punctual. Premium."
- FAQ pricing question added (homepage + /faq): "How much does BWI airport transportation cost? — Rates depend on vehicle type and distance. Fill out our quote form for an accurate price."
- New `HomeFAQ` section rendered on homepage with collapsible Q&As
- Stock car photos replaced with "REAL CAR PHOTO" placeholders (Fleet grid, Hero background, About page car image) — gold-on-dark diagonal-stripe placeholder pattern + "Awaiting upload" label
- Page top-padding bumped pt-24 → pt-32 across all sub-pages to accommodate trust bar

### 2026-06-07
- Email notifications for quote requests via Gmail SMTP:
  - Admin notification → 092transportation@gmail.com (gold/black branded HTML)
  - Customer confirmation → submitter's email (branded "We received your request")
  - Fire-and-forget thread pool, errors logged but never block API response
  - Env vars: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, NOTIFICATION_EMAIL

### 2026-05-03
- "Get a Free Quote" form on `/booking`:
  - `POST /api/quote-requests` → MongoDB `quote_requests`
  - Frontend form with validation, success state, Call/Email CTAs
- Removed broken Google Analytics placeholder (`G-XXXXXXXXXX`)
- Disabled webpack-dev-server runtime errors overlay in craco.config.js (mylimobiz widget bug)
- Added early error filter in index.html for cross-origin third-party noise

### Earlier
- Full multi-page SPA (Home, Services, Fleet, Sports, Cruise, Blog, Coverage, FAQ, Booking, Privacy, Terms)
- AI Chatbot (`POST /api/chat/send`)
- Cruise Transportation page
- Bulk SEO updates (meta tags, canonical URLs, titles, descriptions)
- Sitemap + SEO-hidden crawler content

## Backlog (Priority Ordered)
### P1
- Lightweight admin view to list incoming quote requests
- Verify production redeploy includes new SMTP env vars

### P2
- Google Maps embed on Coverage page
- Native booking form to replace mylimobiz widget
- Real Google Analytics 4 tracking (needs user's GA4 measurement ID)

### P3
- IONOS VPS deployment follow-up support
- Server-Side Rendering (SSR) for JS-less SEO audit tools

## Key Endpoints
- `POST /api/chat/send` — AI chatbot
- `POST /api/quote-requests` — Save quote + send 2 emails (admin + customer)
- `GET /api/quote-requests` — List quote requests
- `GET /health` — Kubernetes health check

## Data Models
### quote_requests
```
{ id, full_name, phone, email, pickup_location, dropoff_location,
  pickup_datetime, passengers, service_type, notes, created_at }
```

## Environment Variables (backend/.env)
- `MONGO_URL`, `DB_NAME`, `CORS_ORIGINS` — core
- `EMERGENT_LLM_KEY` — chatbot
- `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=587` — Gmail SMTP
- `SMTP_USER=092transportation@gmail.com` — Gmail account
- `SMTP_PASSWORD` — Gmail App Password (16-char, no spaces)
- `NOTIFICATION_EMAIL=092transportation@gmail.com` — destination

## SEO Rules (DO NOT revert)
- Blog post titles MUST NOT append `| BWI Chauffeur` suffix
- Default meta description in `index.html` must carry `data-rh="true"`
- Strict single H1 per page, canonical URLs on every page

## Notes
- Runtime errors overlay disabled in dev preview (mylimobiz third-party bug); never in production
- For production deploy, SMTP env vars must be configured in the deployed environment

## City Landing Pages (June 12, 2026)
- 46 SEO city landing pages at `/limo-service-{slug}` (e.g. `/limo-service-columbia-md`), data-driven from `/app/frontend/src/data/cities.js` rendered by `pages/CityPage.jsx`
- Hub page `/service-areas` (`pages/ServiceAreasPage.jsx`) grouped by 8 regions; Columbia & Ellicott City listed under 2 regions but have ONE page each (user-approved)
- Each city page: unique title/description/canonical/OG, JSON-LD (Service + FAQPage + BreadcrumbList), hero CTAs, BWI distance/time stats, services (emphasis varies: cruise for Baltimore area, DCA/IAD for Montgomery, long-distance for Southern MD/Eastern Shore), local landmarks, popular routes, FAQs, nearby-city internal links
- Footer: "Popular Service Areas" link block + "Cities We Serve"; Navbar: Service Areas in More dropdown + mobile menu
- sitemap.xml updated with /service-areas + all 46 city URLs

## CRITICAL FIX: react-helmet-async → @dr.pogodin/react-helmet (June 12, 2026)
- React 19 broke react-helmet-async: only <title> worked; meta/link/script tags were never injected
- Replaced with `@dr.pogodin/react-helmet` (drop-in API, React 19 compatible) across ALL pages + App.js HelmetProvider
- Removed static description/og/twitter/canonical tags from public/index.html (now managed per-page by Helmet; HomePage.jsx carries homepage defaults incl. OG/Twitter tags)
- OLD RULE OBSOLETE: "Default meta description in index.html must carry data-rh=true" no longer applies
- Verified: per-city canonical/description/OG/JSON-LD inject correctly and switch on SPA navigation
