// Batch 12 (2026-10-24): 20 new landing pages — round 6 continuation (batch 11
// already added 10; this batch brings the round's landing-page total to 30).
// Checked against every slug in marylandPages*.js, cities.js, bwiRoutes.js,
// airportPages.js, concertVenues.js and all blog/guide slugs before writing —
// none duplicate an existing slug or near-duplicate keyword target.
//
// Mix:
//  - 3 new Baltimore-area city pages not covered anywhere before: Cockeysville,
//    Perry Hall, Woodlawn.
//  - 2 new Northern Virginia corporate-hub pages (first VA-specific pages in
//    MARYLAND_PAGES): Tysons Corner, Reston — both near Dulles, both generate
//    real BWI/DCA/IAD corporate demand that was previously unaddressed.
//  - 2 new airport-route pages: BWI<->DCA (airport-to-airport transfer, a
//    genuinely distinct query from any existing city/route page) and BWI to
//    Georgetown DC (Georgetown is its own neighborhood search, distinct from
//    the generic "bwi-to-washington-dc" page).
//  - 5 new corporate-by-industry pages, parallel to batch 11's four but
//    covering industries with no existing dedicated page: financial services,
//    engineering/construction, real estate, nonprofit/association (DC), and
//    film/TV production (a real Maryland industry with no prior coverage).
//  - 3 new occasion/group pages distinct from existing transactional pages:
//    wedding GUEST shuttle (different buyer/intent than the existing couple's
//    "maryland-wedding-limo" page), house-of-worship group travel (untapped),
//    and college campus-visit/tour-day travel (distinct from the existing
//    graduation and single-university pages).
//  - 3 new long-tail intent pages: senior/elderly car service, pet-friendly
//    car service, and last-minute/same-day car service — none previously
//    existed as a standalone transactional landing page.
//  - 2 new concert/event venues not in concertVenues.js or marylandPages*.js:
//    The Fillmore Silver Spring, The Music Center at Strathmore.
//
// Same entry shape as earlier batches; concatenated into MARYLAND_PAGES.

const ECLASS = { name: "Mercedes-Benz E-Class", cls: "Business sedan", seats: 3, best: "solo executives and couples" };
const BMW7 = { name: "BMW 7 Series", cls: "First-class sedan", seats: 3, best: "VIP and executive travel" };
const ESCALADE = { name: "Cadillac Escalade", cls: "Premium SUV", seats: 6, best: "families and small groups with luggage" };
const SUBURBAN = { name: "Chevrolet Suburban", cls: "Luxury SUV", seats: 6, best: "airport runs with extra luggage or gear" };
const SPRINTER = { name: "Mercedes Sprinter van", cls: "Executive van", seats: 14, best: "wedding parties, corporate teams and groups" };
const STRETCH = { name: "Stretch limousine", cls: "Limousine", seats: 8, best: "proms, weddings and celebrations" };

const FLEET_ALL = [ECLASS, BMW7, ESCALADE, SUBURBAN, SPRINTER, STRETCH];

export const MARYLAND_BATCH12 = [
  // ───────────────────────── New Baltimore-area city pages (3) ─────────────────────────
  {
    slug: "cockeysville-md-limo-service",
    type: "city",
    name: "Cockeysville",
    badge: "Baltimore County Limo Service",
    h1: "Cockeysville MD Limo Service",
    metaTitle: "Cockeysville MD Limo Service | Flat Rate to BWI",
    metaDescription: "Cockeysville, MD limo & car service — flat-rate BWI transfers in 30–40 min, corporate travel on the York Road/I-83 corridor, weddings. Call 877-609-1919.",
    stats: [
      { label: "To BWI", value: "25 mi · 30–40 minutes" },
      { label: "To DCA", value: "48 mi · 60–80 minutes" },
      { label: "To Dulles", value: "60 mi · 75–100 minutes" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Cockeysville anchors northern Baltimore County along the York Road and I-83 corridor, just north of Hunt Valley's office parks and the Loveton Circle business district. It is a community of large corporate campuses, horse farms and suburban neighborhoods — and our Cockeysville trips reflect that mix, running everything from early-morning BWI departures to Hunt Valley corporate roadshows to weekend weddings at the area's horse-country venues.",
      "At 25 miles from BWI, Cockeysville sits far enough north that timing the drive around I-83's rush-hour patterns matters more than it does for communities closer to the airport, which is exactly the kind of local knowledge our chauffeurs build into every pickup.",
    ],
    highlights: [
      "Flat-rate BWI, DCA and Dulles transfers — confirmed before you book, never surged",
      "Chauffeurs who know I-83's northbound and southbound rush-hour patterns and the York Road corridor",
      "Corporate accounts for Hunt Valley and Loveton Circle office-park businesses just south of town",
      "Experience with horse-country wedding venues in northern Baltimore County",
      "Sedans, SUVs, Sprinter vans and stretch limousines for every group size",
      "Maryland PSC Carrier No. 6325 — fully licensed, commercially insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "Serving Cockeysville and the York Road corridor",
        paragraphs: [
          "Our Cockeysville coverage runs the full length of the York Road corridor, from the Beaver Dam Road and Warren Road neighborhoods to the office parks near Shawan Road and the I-83 interchange. Chauffeurs stage nearby before pickup so an early flight out of Cockeysville leaves on schedule, and a late arrival back still finds a car waiting at the curb.",
        ],
      },
      {
        h2: "Minutes from Hunt Valley's corporate corridor",
        paragraphs: [
          "Cockeysville sits immediately north of the Hunt Valley and Loveton Circle business district, and a meaningful share of our Cockeysville bookings connect to that corridor's corporate accounts. See our [Hunt Valley corporate car service](/hunt-valley-corporate-car-service) page for how we typically structure standing accounts for executives and visiting teams in that immediate area.",
        ],
      },
      {
        h2: "Horse country weddings and I-83 traffic patterns",
        paragraphs: [
          "Northern Baltimore County's horse farms and rural event venues generate a steady wedding season for Cockeysville-area bookings, and our chauffeurs handle both the couple's transportation and guest shuttles between hotels and the venue. On the road, I-83 backs up predictably at the Shawan Road and Padonia Road interchanges during the weekday evening commute, and our chauffeurs route around it using York Road or the Beltway rather than sitting in it. As with every BWI Chauffeur reservation, sedan and SUV bookings cancel free up to 3 hours before pickup, and Sprinter vans or stretch limousines booked for a wedding cancel free up to 12 hours before pickup.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "How far is Cockeysville, MD from BWI Airport?", a: "About 25 miles, typically a 30 to 40 minute drive via I-83 and the Baltimore Beltway, depending on rush-hour traffic." },
      { q: "Do you serve the Hunt Valley corporate corridor from Cockeysville?", a: "Yes. Cockeysville sits immediately north of the Hunt Valley and Loveton Circle business district, and many of our Cockeysville trips connect directly to that corridor's corporate accounts." },
      { q: "Can you handle a horse-country wedding near Cockeysville?", a: "Yes. We regularly provide both couple's transportation and guest shuttles for weddings at northern Baltimore County's horse farms and rural event venues." },
      { q: "Are your Cockeysville airport rates flat-rate?", a: "Yes. Every airport transfer from Cockeysville is priced as a flat rate confirmed before booking, with no surge pricing at any time." },
      { q: "What is the best route from Cockeysville to BWI during rush hour?", a: "Our chauffeurs typically route around the I-83 backups at Shawan Road and Padonia Road using York Road or the Baltimore Beltway rather than sitting in predictable evening-commute traffic." },
    ],
    related: [
      { label: "Hunt Valley Corporate Car Service", to: "/hunt-valley-corporate-car-service" },
      { label: "Hunt Valley Limo Service", to: "/hunt-valley-limo-service" },
      { label: "Timonium Limo Service", to: "/timonium-limo-service" },
      { label: "Maryland Wedding Limo", to: "/maryland-wedding-limo" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
      { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
    ],
    schema: {
      areaServed: ["Cockeysville", "Baltimore County"],
      serviceType: "Limo and car service",
    },
  },
  {
    slug: "perry-hall-md-limo-service",
    type: "city",
    name: "Perry Hall",
    badge: "Baltimore County Limo Service",
    h1: "Perry Hall MD Limo Service",
    metaTitle: "Perry Hall MD Limo Service | BWI Chauffeur",
    metaDescription: "Perry Hall, MD limo & car service — flat-rate BWI and DCA transfers, weddings, proms and corporate travel in eastern Baltimore County. Call 877-609-1919.",
    stats: [
      { label: "To BWI", value: "22 mi · 28–38 minutes" },
      { label: "To DCA", value: "45 mi · 60–75 minutes" },
      { label: "To Dulles", value: "58 mi · 75–95 minutes" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Perry Hall is one of eastern Baltimore County's largest residential communities, centered along Belair Road (US-1) and Honeygo Boulevard. It is a family-oriented suburb with a strong prom, wedding and graduation season every spring, alongside steady year-round airport travel for residents commuting into Baltimore City or flying out of BWI.",
      "We run Perry Hall constantly for both occasions and everyday transfers — sedans for a solo BWI run, stretch limousines for prom season, and Sprinter vans for wedding parties and family groups heading to the airport together.",
    ],
    highlights: [
      "Flat-rate BWI and DCA transfers — confirmed before you book, never surged",
      "Chauffeurs who know Belair Road, Honeygo Boulevard and the Perry Hall/White Marsh interchange patterns",
      "A strong prom and graduation season fleet — stretch limousines booked early every spring",
      "Sedans, SUVs and Sprinter vans for family travel, weddings and group airport runs",
      "Flat rates confirmed before you book — no surge pricing, ever",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "Serving every Perry Hall neighborhood",
        paragraphs: [
          "Our Perry Hall coverage runs the length of Belair Road and Honeygo Boulevard, from the neighborhoods near Perry Hall High School to the Honeygo Run Regional Park area and the retail corridor near White Marsh. Chauffeurs stage nearby before pickup so an early-morning airport departure leaves on time.",
        ],
      },
      {
        h2: "Prom, graduation and wedding season",
        paragraphs: [
          "Perry Hall generates one of the busiest spring prom and graduation seasons in our eastern Baltimore County coverage area, and our stretch limousines and Sprinter vans book out early for peak weekends. See our [Maryland prom limo](/maryland-prom-limo) page for how we typically structure a group prom booking, and our [Maryland wedding limo](/maryland-wedding-limo) page for weddings.",
        ],
      },
      {
        h2: "Close to White Marsh and the I-95/MD-43 corridor",
        paragraphs: [
          "Perry Hall sits just west of the White Marsh retail and entertainment corridor and the I-95/MD-43 interchange, making it a convenient base for an evening out or a corporate pickup connecting to that corridor. See our [BWI to White Marsh](/bwi-to-white-marsh-car-service) page for the specific airport-transfer logistics on that route.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "How far is Perry Hall, MD from BWI Airport?", a: "About 22 miles, typically a 28 to 38 minute drive via I-695 and the BW Parkway, depending on traffic." },
      { q: "Do you provide prom limo service in Perry Hall?", a: "Yes. Perry Hall generates one of the busiest prom seasons in our eastern Baltimore County coverage area, and we recommend booking stretch limousines several weeks ahead for peak spring weekends." },
      { q: "Can you handle a wedding party heading to multiple Perry Hall-area stops?", a: "Yes. Sprinter vans and stretch limousines are commonly booked for the full wedding-day timeline, from getting-ready locations through the reception." },
      { q: "Is Perry Hall close to White Marsh?", a: "Yes. Perry Hall sits just west of the White Marsh retail and entertainment corridor and the I-95/MD-43 interchange, a short drive for an evening out or a corporate pickup." },
      { q: "Are your Perry Hall airport rates flat-rate?", a: "Yes. Every airport transfer from Perry Hall is priced as a flat rate confirmed before booking, with no surge pricing." },
    ],
    related: [
      { label: "White Marsh Car Service from BWI", to: "/bwi-to-white-marsh-car-service" },
      { label: "Maryland Prom Limo", to: "/maryland-prom-limo" },
      { label: "Maryland Wedding Limo", to: "/maryland-wedding-limo" },
      { label: "Towson Prom Limo Service", to: "/towson-prom-limo-service" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
      { label: "Maryland Graduation Limo", to: "/maryland-graduation-limo" },
    ],
    schema: {
      areaServed: ["Perry Hall", "Baltimore County"],
      serviceType: "Limo and car service",
    },
  },
  {
    slug: "woodlawn-md-limo-service",
    type: "city",
    name: "Woodlawn",
    badge: "Baltimore County Limo Service",
    h1: "Woodlawn MD Limo Service",
    metaTitle: "Woodlawn MD Limo Service | BWI Chauffeur",
    metaDescription: "Woodlawn, MD limo & car service near the SSA and CMS federal campuses — flat-rate BWI transfers in 18–25 min, corporate travel. Call 877-609-1919.",
    stats: [
      { label: "To BWI", value: "12 mi · 18–25 minutes" },
      { label: "To DCA", value: "42 mi · 55–70 minutes" },
      { label: "To Dulles", value: "55 mi · 70–90 minutes" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Woodlawn sits just west of Baltimore City along the I-70 and I-695 interchange, home to two of the region's largest federal employment centers: the Social Security Administration's headquarters campus and the Centers for Medicare & Medicaid Services' central office. That federal presence makes Woodlawn one of the steadiest sources of weekday corporate and government travel in our western Baltimore County coverage.",
      "At 12 miles from BWI, Woodlawn is also a quick, predictable airport transfer for residents and visiting federal employees alike, with chauffeurs who know the I-70/I-695 interchange's rush-hour patterns well enough to route around them rather than through them.",
    ],
    highlights: [
      "A quick, predictable BWI transfer — typically 18 to 25 minutes",
      "Chauffeurs experienced with the SSA and CMS federal campus visitor and parking procedures",
      "Corporate accounts for federal contractors and visiting government personnel",
      "Sedans, SUVs and Sprinter vans for individual travelers and visiting teams",
      "Flat rates confirmed before you book — no surge pricing, ever",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "A federal employment hub",
        paragraphs: [
          "Woodlawn's SSA headquarters and CMS central office campuses generate a steady flow of visiting federal personnel, contractors and conference attendees who need a reliable pickup timed to a specific campus entrance rather than a general address. We handle that timing routinely, and we understand the discretion this kind of government-adjacent travel generally requires.",
        ],
      },
      {
        h2: "Connecting to the I-70 and I-695 corridor",
        paragraphs: [
          "Woodlawn's position at the I-70/I-695 interchange makes it a convenient staging point for trips touching western Baltimore County, Catonsville or downtown Baltimore in the same day. Our chauffeurs plan around the interchange's predictable weekday congestion rather than guessing at drive times.",
        ],
      },
      {
        h2: "A short, reliable BWI run",
        paragraphs: [
          "At roughly 12 miles and 18 to 25 minutes from BWI under normal traffic, Woodlawn is one of the more convenient airport transfers in western Baltimore County, with full flight tracking and complimentary wait time included on every booking regardless of whether the trip is a federal visit or a personal flight.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "How far is Woodlawn, MD from BWI Airport?", a: "About 12 miles, typically an 18 to 25 minute drive via I-70 and I-695, depending on traffic." },
      { q: "Do you provide transportation to the SSA or CMS campuses in Woodlawn?", a: "Yes. We regularly handle pickups and drop-offs for visiting federal personnel and contractors at both the Social Security Administration headquarters and the CMS central office." },
      { q: "Is Woodlawn a good base for corporate travel across western Baltimore County?", a: "Yes. Its position at the I-70/I-695 interchange makes it convenient for trips touching Catonsville, western Baltimore County or downtown Baltimore in the same day." },
      { q: "Are your Woodlawn airport rates flat-rate?", a: "Yes. Every airport transfer from Woodlawn is priced as a flat rate confirmed before booking, with no surge pricing at any time." },
      { q: "Can you handle discreet pickups for government-adjacent travel?", a: "Yes. We understand the discretion that federal and contractor travel generally requires and can arrange unbranded vehicles and minimal conversation on request." },
    ],
    related: [
      { label: "Catonsville Limo Service", to: "/limo-service-catonsville-md" },
      { label: "Government Contractor Car Service (Fort Meade)", to: "/government-contractor-car-service-fort-meade-maryland" },
      { label: "Government & Defense Contractor Car Service Maryland", to: "/government-defense-contractor-car-service-maryland" },
      { label: "Baltimore Corporate Car Service", to: "/baltimore-corporate-car-service" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
      { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
    ],
    schema: {
      areaServed: ["Woodlawn", "Baltimore County"],
      serviceType: "Limo and car service",
    },
  },

  // ───────────────────────── New Northern Virginia corporate hubs (2) ─────────────────────────
  {
    slug: "tysons-corner-va-corporate-car-service",
    type: "city",
    name: "Tysons Corner",
    badge: "Northern Virginia Corporate Car Service",
    h1: "Tysons Corner VA Corporate Car Service",
    metaTitle: "Tysons Corner VA Corporate Car Service | BWI Chauffeur",
    metaDescription: "Tysons Corner, VA corporate car service — flat-rate transfers to Dulles, Reagan National and BWI, executive sedans and SUVs. Call 877-609-1919.",
    stats: [
      { label: "To IAD (Dulles)", value: "17 mi · 20–30 minutes" },
      { label: "To DCA", value: "13 mi · 20–30 minutes" },
      { label: "To BWI", value: "48 mi · 60–80 minutes" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Tysons Corner is Northern Virginia's largest commercial office market — a dense cluster of corporate headquarters, consulting firms and the Tysons Corner Center and Tysons Galleria retail complexes, all built around the Capital Beltway and the Dulles Toll Road. It is a market we serve primarily for executive and corporate travel: visiting teams flying into Dulles or Reagan National, roadshow days with multiple Tysons office stops, and standing accounts for firms headquartered along International Drive and Route 7.",
      "Tysons sits close enough to both Dulles and Reagan National that either airport is a short, predictable transfer, which makes it a convenient staging point for executives with a single meeting day spanning both the office and the airport.",
    ],
    highlights: [
      "Close to both Dulles and Reagan National — typically a 20 to 30 minute transfer to either",
      "Chauffeurs experienced with the Capital Beltway, the Dulles Toll Road and Tysons' office-tower parking and lobby procedures",
      "Standing corporate accounts for firms along International Drive, Route 7 and the Tysons office corridor",
      "Mercedes-Benz E-Class and BMW 7 Series sedans, Cadillac Escalade and Chevrolet Suburban SUVs, Mercedes Sprinter vans for visiting teams",
      "Flat-rate or hourly as-directed pricing confirmed before you book",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs serving the DC metro",
    ],
    sections: [
      {
        h2: "A dense corporate office market",
        paragraphs: [
          "Tysons Corner's office towers along International Drive, Route 7 and the Beltway house consulting firms, technology companies and corporate headquarters that generate a steady stream of visiting-executive travel. We run standing accounts that combine airport pickups with multi-stop days touching several Tysons office addresses, with the same chauffeur staying with the group for the full day on an hourly as-directed basis.",
        ],
      },
      {
        h2: "Equidistant from Dulles and Reagan National",
        paragraphs: [
          "Few Northern Virginia addresses sit as close to both major airports as Tysons Corner — roughly 20 to 30 minutes to either Dulles via the Dulles Toll Road or Reagan National via the Beltway and the GW Parkway. That makes Tysons a practical staging point for an executive whose outbound and return flights use different airports on the same trip.",
        ],
      },
      {
        h2: "Beyond the office: retail and hotel traffic",
        paragraphs: [
          "Tysons Corner Center and Tysons Galleria draw significant retail and event traffic on top of the weekday office commute, and our chauffeurs plan drop-offs and pickups around both the Beltway's predictable rush-hour backups and the mall-adjacent congestion that builds on weekend afternoons and during the holiday season.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "How far is Tysons Corner from Dulles Airport?", a: "About 17 miles, typically a 20 to 30 minute drive via the Dulles Toll Road, depending on traffic." },
      { q: "Do you serve Tysons Corner from BWI as well as from Dulles and Reagan National?", a: "Yes. We run BWI-to-Tysons transfers regularly, though Dulles and Reagan National are both significantly closer and often the more practical airport choice for a Tysons meeting." },
      { q: "Can you handle a multi-stop corporate day across several Tysons office addresses?", a: "Yes. Hourly as-directed service keeps the same chauffeur and vehicle with your team for the full day rather than booking separate point-to-point rides." },
      { q: "Do you offer standing corporate accounts for Tysons-based firms?", a: "Yes. We set up recurring accounts for firms along International Drive, Route 7 and the broader Tysons office corridor, with regular chauffeurs for recurring travelers." },
      { q: "Are your Tysons Corner rates flat-rate?", a: "Yes. Airport transfers are flat-rate, confirmed before booking, and multi-stop corporate days can be booked hourly as-directed." },
    ],
    related: [
      { label: "Reston VA Corporate Car Service", to: "/reston-va-corporate-car-service" },
      { label: "Dulles Airport Transfers", to: "/dulles-airport-transfers" },
      { label: "Reagan Airport Transfers", to: "/reagan-airport-transfers" },
      { label: "BWI to Washington DC", to: "/bwi-to-washington-dc" },
      { label: "Maryland Hourly Chauffeur Service", to: "/maryland-hourly-chauffeur-service" },
      { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
    ],
    schema: {
      areaServed: ["Tysons Corner, VA", "Fairfax County"],
      serviceType: "Corporate car service",
    },
  },
  {
    slug: "reston-va-corporate-car-service",
    type: "city",
    name: "Reston",
    badge: "Northern Virginia Corporate Car Service",
    h1: "Reston VA Corporate Car Service",
    metaTitle: "Reston VA Corporate Car Service | Near Dulles",
    metaDescription: "Reston, VA corporate car service — minutes from Dulles Airport, flat-rate transfers for tech-corridor executives and visiting teams. Call 877-609-1919.",
    stats: [
      { label: "To IAD (Dulles)", value: "7 mi · 10–15 minutes" },
      { label: "To DCA", value: "25 mi · 30–45 minutes" },
      { label: "To BWI", value: "52 mi · 65–85 minutes" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Reston sits directly adjacent to Dulles International Airport and anchors Northern Virginia's technology and government-contracting corridor along the Dulles Toll Road and the Fairfax County Parkway. Reston Town Center and the surrounding office campuses house a dense cluster of technology, telecommunications and federal-contracting firms, which makes Reston one of the steadiest sources of Dulles-connected corporate travel we run.",
      "At roughly 7 miles from Dulles, Reston is one of the closest business districts to any major airport in our entire service area — a genuine convenience for executives flying in for a single meeting day and flying back out the same evening.",
    ],
    highlights: [
      "One of the shortest airport transfers in our coverage area — typically 10 to 15 minutes to Dulles",
      "Chauffeurs experienced with the Dulles Toll Road, the Fairfax County Parkway and Reston Town Center's office and parking layout",
      "Standing corporate accounts for technology, telecommunications and federal-contracting firms",
      "Mercedes-Benz E-Class and BMW 7 Series sedans, Cadillac Escalade and Chevrolet Suburban SUVs for executive travel",
      "Flat-rate or hourly as-directed pricing confirmed before you book",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs serving the DC metro",
    ],
    sections: [
      {
        h2: "Minutes from Dulles, built for same-day travel",
        paragraphs: [
          "Reston's proximity to Dulles means an executive can land, meet, and depart again the same day without the margin-killing drive that a more distant office address would require. Our chauffeurs meet international and domestic arrivals at Dulles with full flight tracking and 60 minutes of complimentary wait time for customs, then run the short transfer into Reston with real time to spare.",
        ],
      },
      {
        h2: "A technology and federal-contracting corridor",
        paragraphs: [
          "Reston Town Center and the office parks along the Dulles Toll Road and Sunrise Valley Drive host a dense concentration of technology and federal-contracting employers, generating standing corporate accounts for visiting executives, roadshow days and recurring airport transfers for traveling staff.",
        ],
      },
      {
        h2: "A convenient staging point for a Dulles-corridor day",
        paragraphs: [
          "Reston's position just off the Dulles Toll Road also makes it a practical base for a day that touches both Dulles and nearby Tysons Corner — see our [Tysons Corner VA corporate car service](/tysons-corner-va-corporate-car-service) page for how we handle that stretch of corridor as a single hourly engagement.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "How far is Reston, VA from Dulles Airport?", a: "About 7 miles, typically just a 10 to 15 minute drive — one of the shortest airport transfers anywhere in our service area." },
      { q: "Do you serve Reston corporate clients traveling through Reagan National or BWI as well?", a: "Yes, though Dulles is significantly closer and the more practical choice for most Reston-based travel. We run flat-rate transfers to all three airports." },
      { q: "Can you set up a standing corporate account for a Reston-based company?", a: "Yes. We regularly set up recurring accounts for technology, telecommunications and federal-contracting firms in Reston, with regular chauffeurs for frequent travelers." },
      { q: "Can you combine a Reston pickup with a Tysons Corner stop on the same trip?", a: "Yes. Hourly as-directed service keeps the same chauffeur and vehicle with you across both stops along the Dulles Toll Road corridor." },
      { q: "Are your Reston rates flat-rate?", a: "Yes. Airport transfers are flat-rate, confirmed before booking, and multi-stop corporate days can be booked hourly as-directed." },
    ],
    related: [
      { label: "Tysons Corner VA Corporate Car Service", to: "/tysons-corner-va-corporate-car-service" },
      { label: "Dulles Airport Transfers", to: "/dulles-airport-transfers" },
      { label: "IAD Airport Car Service", to: "/iad-airport-car-service" },
      { label: "BWI to Washington DC", to: "/bwi-to-washington-dc" },
      { label: "Maryland Hourly Chauffeur Service", to: "/maryland-hourly-chauffeur-service" },
      { label: "Tech Company Corporate Car Service Maryland", to: "/tech-company-corporate-car-service-maryland" },
    ],
    schema: {
      areaServed: ["Reston, VA", "Fairfax County"],
      serviceType: "Corporate car service",
    },
  },

  // ───────────────────────── New airport-route pages (2) ─────────────────────────
  {
    slug: "bwi-to-dca-airport-transfer",
    type: "route",
    name: "BWI to DCA",
    badge: "Airport-to-Airport Transfer",
    h1: "BWI to DCA Airport-to-Airport Car Service",
    metaTitle: "BWI to DCA Car Service | Airport-to-Airport Transfer",
    metaDescription: "Flat-rate chauffeured transfer between BWI and Reagan National — 35 miles, 40–55 minutes, flight tracking both legs. Call 877-609-1919.",
    stats: [
      { label: "Distance", value: "35 miles" },
      { label: "Drive time", value: "40–55 minutes" },
      { label: "Pricing", value: "Flat rate — call for quote" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "BWI Chauffeur runs direct airport-to-airport transfers between BWI Marshall and Reagan National (DCA) every day of the year — a trip booked by connecting-flight travelers whose two legs use different airports, airline crews, and travelers who simply found a better fare out of the other airport. The run covers about 35 miles and takes 40–55 minutes via the BW Parkway and the Capital Beltway, with your chauffeur tracking the inbound flight so a delayed landing never turns into a missed connection on the other end.",
      "This is one of the few routes we run with equal volume in both directions — BWI to DCA and DCA to BWI — and we price and staff it the same way regardless of direction: one flat rate, flight tracking on the arriving leg, and a chauffeur who knows exactly which Beltway interchange is likely to be slow at that hour.",
    ],
    highlights: [
      "One flat rate between BWI and DCA in either direction — no meter, no surge",
      "Flight tracked on the arriving leg with 45 minutes of complimentary wait time (60 minutes international)",
      "Chauffeurs who run this exact corridor daily and know the Beltway's predictable choke points",
      "Mercedes-Benz E-Class and BMW 7 Series sedans, Cadillac Escalade and Chevrolet Suburban SUVs, Mercedes Sprinter vans for crews and groups",
      "A dependable option when a connecting itinerary splits across both airports",
      "Maryland PSC Carrier No. 6325 — licensed, insured and background-checked",
    ],
    sections: [
      {
        h2: "Why travelers book an airport-to-airport transfer",
        paragraphs: [
          "The most common reason for this trip is a split itinerary — a traveler flying into BWI on one airline and out of DCA on another, or the reverse, often because the fare or schedule worked out better that way than a single-airport itinerary would have. Airline and flight crews also book this route regularly between shift changes, and some travelers simply prefer whichever airport has the better fare for a given leg regardless of which city it is technically closer to.",
        ],
      },
      {
        h2: "The drive between BWI and DCA",
        paragraphs: [
          "From BWI, your chauffeur takes the BW Parkway to the Capital Beltway's inner loop, finishing at DCA's terminal curb; from DCA, the same route runs in reverse. Typical time is 40–55 minutes for the 35-mile run, and our chauffeurs watch the Beltway in real time, rerouting around an accident or a backup before it costs you connection time.",
        ],
      },
      {
        h2: "Built around your connection, not a fixed schedule",
        paragraphs: [
          "Because this route often sits in the middle of a tight connecting itinerary, we track your arriving flight automatically and adjust the pickup time to match — a schedule change on either leg updates the reservation without a phone call. See our [BWI Airport Flight Tracking](/bwi-airport-flight-tracking) page for how the tracking and wait-time policy work in detail.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "How much does a transfer between BWI and DCA cost?", a: "It is one flat rate confirmed before you book, the same in either direction. Call 877-609-1919 or request a quote online." },
      { q: "How long does the drive between BWI and DCA take?", a: "About 35 miles and 40–55 minutes via the BW Parkway and the Capital Beltway, depending on traffic. Your chauffeur monitors conditions in real time." },
      { q: "Do you track my inbound flight for a connecting trip like this?", a: "Yes. The pickup is timed to your actual arriving flight, with 45 minutes of complimentary wait time on domestic arrivals and 60 minutes on international, so a delayed landing does not jeopardize the connection." },
      { q: "Can you handle a group or an airline crew transfer between BWI and DCA?", a: "Yes. Cadillac Escalades and Suburbans seat six with luggage, and Mercedes Sprinter vans carry up to 14 passengers for larger groups or crews." },
      { q: "What happens if my connecting flight changes after I book?", a: "A flight-tracked reservation adjusts automatically to a schedule change on the arriving leg. For a bigger change — a different day or airport — a quick confirmation call to dispatch is worth it." },
    ],
    related: [
      { label: "BWI Airport Flight Tracking", to: "/bwi-airport-flight-tracking" },
      { label: "Dulles Airport Transfers", to: "/dulles-airport-transfers" },
      { label: "Reagan Airport Transfers", to: "/reagan-airport-transfers" },
      { label: "BWI vs DCA vs IAD Airport Guide", to: "/blog/bwi-vs-dca-vs-iad-airport-guide" },
      { label: "BWI Corporate Transportation", to: "/bwi-corporate-transportation" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
    ],
    schema: {
      areaServed: ["BWI Marshall Airport", "Reagan National Airport"],
      serviceType: "Airport-to-airport car service",
    },
  },
  {
    slug: "bwi-to-georgetown-dc",
    type: "route",
    name: "BWI to Georgetown DC",
    badge: "Airport Transfer Route",
    h1: "BWI Airport to Georgetown DC Car Service",
    metaTitle: "BWI to Georgetown DC Car Service | Flat Rate Limo",
    metaDescription: "Flat-rate chauffeured car service from BWI to Georgetown, DC — 35 miles, 45–65 minutes. Hotel, university and M Street drop-offs. Call 877-609-1919.",
    stats: [
      { label: "Distance", value: "35 miles" },
      { label: "Drive time", value: "45–65 minutes" },
      { label: "Pricing", value: "Flat rate — call for quote" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "BWI Chauffeur runs the BWI to Georgetown transfer daily — a trip distinct from a generic downtown-DC drop-off because Georgetown's narrow, cobblestoned grid and limited curb access along M Street and Wisconsin Avenue require a chauffeur who actually knows the neighborhood, not just the Beltway exit nearest to it. The run covers about 35 miles and takes 45–65 minutes via the BW Parkway, the Capital Beltway and Canal Road, finishing in one of the capital's busiest, most historic commercial districts.",
      "Georgetown draws a specific mix of travelers — Georgetown University families and visitors, hotel guests staying along the waterfront or M Street, and diners and shoppers heading for an evening out — and our chauffeurs plan the final approach differently depending on which of those it is.",
    ],
    highlights: [
      "One flat rate for BWI to Georgetown — tolls disclosed up front, no meter, no surge",
      "Flight tracked pickups with 45 minutes of complimentary wait time (60 minutes international)",
      "Chauffeurs who know Georgetown's narrow one-way streets and limited curbside-access zones",
      "Drop-off at Georgetown University, the waterfront hotels, or anywhere along M Street or Wisconsin Avenue",
      "Mercedes-Benz E-Class and BMW 7 Series sedans, Cadillac Escalade and Chevrolet Suburban SUVs, Mercedes Sprinter vans for family groups",
      "Maryland PSC Carrier No. 6325 — licensed, insured and background-checked",
    ],
    sections: [
      {
        h2: "The drive from BWI to Georgetown",
        paragraphs: [
          "From BWI, your chauffeur takes the BW Parkway to the Capital Beltway, crossing into the District via the Clara Barton Parkway or Canal Road before finishing on M Street or Wisconsin Avenue. Typical time is 45–65 minutes for the 35-mile run, and the final few blocks through Georgetown's historic grid often take longer than the highway portion — a reality our chauffeurs plan for rather than discover.",
        ],
      },
      {
        h2: "Why Georgetown needs neighborhood-specific knowledge",
        paragraphs: [
          "Georgetown's streets predate the automobile, which means narrow lanes, limited loading zones and restricted turns that a GPS alone does not fully capture. Our chauffeurs know which entrances work for Georgetown University's main gate, which hotels have dedicated valet versus street-side drop-off, and how M Street's weekend foot traffic changes the realistic pickup window.",
        ],
      },
      {
        h2: "University, hotel and evening-out traffic",
        paragraphs: [
          "Georgetown University generates a steady stream of family and visitor travel tied to move-in weekends, parents' weekends and graduation, while the neighborhood's hotels and M Street restaurant and retail corridor draw a separate evening and weekend crowd. We staff both the same way — flat rate, flight tracking, and a drop-off planned around the specific address rather than a general Georgetown pin.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "How much does a car service from BWI to Georgetown cost?", a: "It is one flat rate set by vehicle, confirmed in writing before you ride. Tolls are disclosed up front and there is no surge pricing. Call 877-609-1919 or request a quote online." },
      { q: "How long is the drive from BWI to Georgetown?", a: "About 35 miles and 45–65 minutes via the BW Parkway, the Capital Beltway and Canal Road, depending on the time of day and Georgetown's own street traffic." },
      { q: "Can you drop off directly at a Georgetown University address?", a: "Yes. Our chauffeurs know the university's main entrances and the realistic drop-off points for move-in, parents' weekend and graduation traffic." },
      { q: "Do you handle hotel drop-offs along the Georgetown waterfront?", a: "Yes. We regularly serve the hotels along the Georgetown waterfront and M Street, with chauffeurs who know each property's valet or street-side drop-off procedure." },
      { q: "Do you track my flight for this route?", a: "Yes. Every airport booking includes real-time flight tracking with 45 minutes of free wait time on domestic arrivals and 60 minutes on international." },
    ],
    related: [
      { label: "BWI to Washington DC", to: "/bwi-to-washington-dc" },
      { label: "BWI Airport to Washington DC Transportation", to: "/blog/bwi-airport-to-washington-dc-transportation" },
      { label: "BWI to Alexandria", to: "/bwi-to-alexandria" },
      { label: "BWI to Arlington", to: "/bwi-to-arlington" },
      { label: "BWI Airport Flight Tracking", to: "/bwi-airport-flight-tracking" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
    ],
    schema: {
      areaServed: ["Georgetown, Washington DC"],
      serviceType: "Airport car service",
    },
  },

  // ───────────────────────── New corporate-by-industry pages (5) ─────────────────────────
  {
    slug: "financial-services-corporate-car-service-maryland",
    type: "service",
    name: "Financial Services Corporate Car Service",
    badge: "Maryland Service",
    h1: "Financial Services Corporate Car Service Maryland",
    metaTitle: "Financial Services Corporate Car Service MD | BWI Chauffeur",
    metaDescription: "Chauffeured car service for Maryland banks, asset managers and insurers — discreet executive travel, BWI transfers, flat rates. Call 877-609-1919.",
    stats: [
      { label: "Coverage", value: "Baltimore & Maryland financial corridor" },
      { label: "Vehicles", value: "Sedans · SUVs · Sprinters" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Baltimore and the surrounding Maryland corridor are home to a significant concentration of asset management firms, insurers and regional banks, and that industry generates a specific kind of corporate travel: client meetings that cannot run late, roadshow days with a tight multi-stop schedule, and visiting executives who need a chauffeur who understands that a cabin conversation stays confidential by default.",
      "We run standing accounts for financial-services firms across the Baltimore and Maryland corridor, combining airport pickups with hourly as-directed service for the kind of multi-meeting day that a single point-to-point ride cannot support.",
    ],
    highlights: [
      "Chauffeurs trained to treat cabin conversation as confidential, with no unnecessary conversation",
      "Hourly as-directed service built around a multi-stop roadshow or client-meeting schedule",
      "Standing accounts with regular, vetted chauffeurs for recurring executive travelers",
      "Sedans and SUVs for individual executives, Sprinter vans for visiting teams and conference groups",
      "Flat-rate or hourly pricing confirmed before you book, with corporate billing available",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "Built for a schedule that cannot slip",
        paragraphs: [
          "A financial-services client meeting or earnings-related travel day rarely has slack built in, and a late pickup has a different cost than it does for a casual trip. We back-time every reservation from the confirmed meeting or flight, watch traffic in real time, and keep a regular chauffeur on standing accounts so recurring travelers see a familiar, vetted professional rather than a different driver every trip.",
        ],
      },
      {
        h2: "Serving Baltimore's financial corridor",
        paragraphs: [
          "Baltimore's downtown and Inner Harbor business district houses a concentration of banking, insurance and asset-management firms, and our chauffeurs run that corridor daily alongside connections to BWI, DCA and Dulles for executives traveling in and out. See our [Baltimore corporate car service](/baltimore-corporate-car-service) page for the broader downtown Baltimore corporate-travel picture.",
        ],
      },
      {
        h2: "Roadshows and multi-stop client days",
        paragraphs: [
          "Hourly as-directed service keeps the same chauffeur and vehicle with an executive or a visiting team for a full roadshow day, moving between client meetings without the friction of booking a new ride at each stop. See our [hourly as-directed chauffeur guide](/hourly-as-directed-chauffeur-corporate-roadshows) for how that billing and scheduling typically works.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "Do you provide confidential, discreet travel for financial executives?", a: "Yes. Our chauffeurs are trained to treat cabin conversation as confidential and keep conversation minimal unless the client wants otherwise." },
      { q: "Can you handle a multi-stop roadshow day for a financial-services team?", a: "Yes. Hourly as-directed service keeps the same chauffeur and vehicle with your team for the entire day, moving between client meetings on a set schedule." },
      { q: "Do you offer standing corporate accounts with regular chauffeurs?", a: "Yes. Standing accounts can request regular, vetted chauffeurs for recurring executive travelers, along with corporate billing." },
      { q: "Do you serve Baltimore's downtown financial district specifically?", a: "Yes. Baltimore's downtown and Inner Harbor business district is one of our most frequent financial-services corridors, alongside BWI, DCA and Dulles airport connections." },
      { q: "Is pricing flat-rate or hourly for corporate financial-services accounts?", a: "Either, depending on the trip. Point-to-point airport transfers are flat-rate; multi-stop roadshow days are typically billed hourly as-directed." },
    ],
    related: [
      { label: "Baltimore Corporate Car Service", to: "/baltimore-corporate-car-service" },
      { label: "Hourly As-Directed Chauffeur for Corporate Roadshows", to: "/blog/hourly-as-directed-chauffeur-corporate-roadshows" },
      { label: "Maryland Hourly Chauffeur Service", to: "/maryland-hourly-chauffeur-service" },
      { label: "Baltimore Black Car Service", to: "/baltimore-black-car-service" },
      { label: "BWI Corporate Transportation", to: "/bwi-corporate-transportation" },
      { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
    ],
    schema: {
      areaServed: ["Baltimore", "Maryland"],
      serviceType: "Corporate car service",
    },
  },
  {
    slug: "engineering-construction-corporate-car-service-maryland",
    type: "service",
    name: "Engineering & Construction Corporate Car Service",
    badge: "Maryland Service",
    h1: "Engineering & Construction Firm Car Service Maryland",
    metaTitle: "Engineering & Construction Firm Car Service MD | BWI Chauffeur",
    metaDescription: "Chauffeured car service for Maryland engineering and construction firms — site visits, client tours, BWI transfers, flat rates. Call 877-609-1919.",
    stats: [
      { label: "Coverage", value: "Maryland, DC and Delaware" },
      { label: "Vehicles", value: "Sedans · SUVs · Sprinters" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Maryland's engineering and construction industry moves between office meetings, active job sites and client walk-throughs in the same day — often with a single address being hard to find, poorly served by rideshare, or genuinely unsafe to arrive at without knowing where the actual site entrance is. We build those trips around the project itself, not a generic pin.",
      "Our engineering and construction accounts typically combine airport pickups for visiting executives or out-of-town engineers with hourly as-directed service for site-visit days, giving one chauffeur and vehicle continuity across a schedule that can change hour to hour.",
    ],
    highlights: [
      "Chauffeurs who confirm the actual site entrance in advance, not just a mapped address",
      "Hourly as-directed service built around a site-visit or client-tour schedule that can shift",
      "SUVs suited to active job-site conditions and unpaved access roads",
      "Standing accounts for visiting executives, inspectors and out-of-town project teams",
      "Flat-rate or hourly pricing confirmed before you book, with corporate billing available",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "Trips that end at a job site, not an office lobby",
        paragraphs: [
          "An active construction site rarely has a clean front-door address, and the entrance a visitor should use often differs from whatever a map app suggests. We confirm the correct access point and any site-safety requirements with your team ahead of the pickup, so a visiting executive or inspector arrives at the right gate the first time.",
        ],
      },
      {
        h2: "Serving the BWI, Baltimore and DC corridor",
        paragraphs: [
          "Visiting engineers, project executives and inspectors flying into BWI, DCA or Dulles for a Maryland project connect with us for the airport leg, and we keep the same vehicle and chauffeur with them for the rest of a multi-site day. See our [Maryland hourly chauffeur service](/maryland-hourly-chauffeur-service) page for how an as-directed day is typically structured.",
        ],
      },
      {
        h2: "Real estate development and closing-day travel",
        paragraphs: [
          "Engineering and construction work often runs alongside real estate development, and the same project team frequently needs car service for closings, site walk-throughs with buyers, and permit-office visits. See our [real estate agent car service](/real-estate-agent-car-service-maryland) page for how we handle that adjacent travel.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "Can you take us to an active construction site, not just a street address?", a: "Yes. We confirm the correct site entrance and any safety requirements with your team ahead of the pickup, so the vehicle arrives at the right gate." },
      { q: "Do you provide SUVs suited to job-site conditions?", a: "Yes. Cadillac Escalades and Chevrolet Suburbans handle unpaved access roads and active job-site conditions better than a standard sedan." },
      { q: "Can you handle a multi-site visit day for an engineering team?", a: "Yes. Hourly as-directed service keeps the same chauffeur and vehicle with your team across a schedule that can shift as the day goes." },
      { q: "Do you serve visiting engineers or inspectors flying into BWI for a Maryland project?", a: "Yes. We regularly combine an airport pickup with the rest of a multi-site visit day on the same reservation." },
      { q: "Is corporate billing available for engineering and construction accounts?", a: "Yes. Standing accounts can be set up with corporate billing and regular chauffeurs for recurring project travel." },
    ],
    related: [
      { label: "Maryland Hourly Chauffeur Service", to: "/maryland-hourly-chauffeur-service" },
      { label: "Real Estate Agent Car Service Maryland", to: "/real-estate-agent-car-service-maryland" },
      { label: "Fort Meade Government Contractor Car Service", to: "/government-contractor-car-service-fort-meade-maryland" },
      { label: "Hourly As-Directed Chauffeur for Corporate Roadshows", to: "/blog/hourly-as-directed-chauffeur-corporate-roadshows" },
      { label: "BWI Corporate Transportation", to: "/bwi-corporate-transportation" },
      { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
    ],
    schema: {
      areaServed: ["Maryland", "Washington DC", "Delaware"],
      serviceType: "Corporate car service",
    },
  },
  {
    slug: "real-estate-agent-car-service-maryland",
    type: "service",
    name: "Real Estate Agent Car Service",
    badge: "Maryland Service",
    h1: "Real Estate Agent & Developer Car Service Maryland",
    metaTitle: "Real Estate Agent Car Service Maryland | BWI Chauffeur",
    metaDescription: "Chauffeured car service for Maryland real estate agents, developers and relocating buyers — property tours, closings, flat rates. Call 877-609-1919.",
    stats: [
      { label: "Coverage", value: "Maryland, DC and Delaware" },
      { label: "Vehicles", value: "Sedans · SUVs · Sprinters" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Real estate agents, developers and relocating buyers all need the same thing on a showing day or a closing day: a vehicle and driver who can run a multi-stop schedule without the agent having to also function as chauffeur, parking attendant and navigator at the same time. We provide that as hourly as-directed service, with the same chauffeur staying with the group from the first showing to the closing table.",
      "We also handle the airport leg for out-of-town or relocating buyers flying into BWI, DCA or Dulles to tour properties, connecting the airport pickup directly into the same day's showing schedule.",
    ],
    highlights: [
      "Hourly as-directed service built around a multi-property showing schedule",
      "Chauffeurs who handle parking and waiting at each stop, freeing the agent to focus on the client",
      "SUVs with real cargo room for moving boxes, display materials or a buyer's luggage",
      "Airport pickups for relocating or out-of-town buyers connected directly into the same-day showing schedule",
      "Flat-rate or hourly pricing confirmed before you book",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "A showing day without the parking search",
        paragraphs: [
          "A real estate agent running three, four or five showings in an afternoon loses real time to parking, re-parking and navigating between neighborhoods. An hourly as-directed chauffeur removes all of that — the vehicle waits at each stop while you and your client are inside, then moves straight to the next address.",
        ],
      },
      {
        h2: "Relocating and out-of-town buyers",
        paragraphs: [
          "Buyers relocating to Maryland from out of state frequently fly into BWI for a condensed house-hunting trip, touring a full list of properties in one or two days before flying home. We connect the airport pickup directly into that showing schedule, so the buyer's trip runs as one continuous day rather than a series of separately booked rides.",
        ],
      },
      {
        h2: "Closing day and new-construction site visits",
        paragraphs: [
          "Developers and agents working new construction often need to move a buyer or an inspector between a sales office, an active build site and a title company on closing day. See our [engineering & construction corporate car service](/engineering-construction-corporate-car-service-maryland) page for how we handle active-site logistics on the construction side of that same relationship.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "Can a chauffeur wait at each property while I show a client around?", a: "Yes. Hourly as-directed service means the vehicle waits at each stop and moves to the next address on your schedule, with no separate booking needed." },
      { q: "Do you handle airport pickups for relocating buyers flying in to house-hunt?", a: "Yes. We regularly connect a BWI, DCA or Dulles airport pickup directly into the same day's showing schedule for out-of-town buyers." },
      { q: "Can you transport moving boxes or display materials between showings?", a: "Yes. Cadillac Escalades and Chevrolet Suburbans offer real cargo room for materials, and Sprinter vans are available for larger loads." },
      { q: "Do you provide car service for new-construction site visits?", a: "Yes. We regularly move buyers, inspectors and agents between a sales office, an active build site and a title company on closing day." },
      { q: "Is pricing flat-rate or hourly for real estate accounts?", a: "Multi-stop showing days are typically billed hourly as-directed; a single airport pickup is flat-rate." },
    ],
    related: [
      { label: "Engineering & Construction Corporate Car Service Maryland", to: "/engineering-construction-corporate-car-service-maryland" },
      { label: "Maryland Hourly Chauffeur Service", to: "/maryland-hourly-chauffeur-service" },
      { label: "Executive Relocation & New Hire Moving Day Transportation", to: "/blog/executive-relocation-new-hire-moving-day-transportation" },
      { label: "Real Estate Closing & Showing Transportation Maryland", to: "/blog/real-estate-closing-showing-transportation-maryland" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
      { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
    ],
    schema: {
      areaServed: ["Maryland", "Washington DC", "Delaware"],
      serviceType: "Corporate car service",
    },
  },
  {
    slug: "association-nonprofit-transportation-washington-dc",
    type: "service",
    name: "Association & Nonprofit Transportation",
    badge: "Washington DC Service",
    h1: "Association & Nonprofit Conference Transportation Washington DC",
    metaTitle: "Association & Nonprofit Transportation DC | BWI Chauffeur",
    metaDescription: "Chauffeured transportation for DC associations, nonprofits and conference staff — speaker pickups, BWI/DCA/IAD transfers. Call 877-609-1919.",
    stats: [
      { label: "Coverage", value: "Washington DC & Maryland" },
      { label: "Vehicles", value: "Sedans · SUVs · Sprinters" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Washington DC is home to a dense concentration of trade associations, professional societies and nonprofit organizations, and that community runs on an annual calendar of conferences, board meetings and fly-in advocacy days. We provide the ground transportation layer for that calendar: VIP speaker and keynote pickups, board-member airport transfers, and shuttle coordination for staff and member groups moving between a hotel block and a conference venue.",
      "A conference weekend typically means dozens of individual arrivals across BWI, DCA and Dulles landing within a tight window, and we coordinate that volume as a single managed event rather than a series of unrelated bookings.",
    ],
    highlights: [
      "Coordinated multi-arrival management across BWI, DCA and Dulles for a single conference weekend",
      "VIP and keynote-speaker pickups with discreet, on-time service",
      "Shuttle service between hotel blocks and a conference venue for staff and member groups",
      "Sedans and SUVs for board members and speakers, Sprinter vans for staff and group shuttles",
      "Flat-rate or hourly pricing confirmed before you book, with a single conference-wide invoice available",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "Managing a conference weekend's arrivals as one event",
        paragraphs: [
          "When an association's annual conference brings board members, speakers and staff in across three different airports within a tight window, treating each arrival as a separate, disconnected booking invites missed pickups. We assign a dedicated coordinator for conference weekends, tracking every flight centrally and keeping vehicles staged so a delayed arrival at one airport does not disrupt the rest of the day.",
        ],
      },
      {
        h2: "Speaker, keynote and VIP travel",
        paragraphs: [
          "A conference's visiting speakers and keynote presenters are often the people with the least flexibility in their schedule — a tight window between landing and going on stage. We treat those pickups as the highest priority on a conference weekend, with a dedicated chauffeur and real-time flight monitoring.",
        ],
      },
      {
        h2: "Hotel-block shuttles and member group travel",
        paragraphs: [
          "Beyond individual VIP travel, many associations need a recurring shuttle loop between a hotel block and the conference venue for staff and attending members. See our [conference & association meeting transportation guide](/conference-association-meeting-transportation-baltimore) for how we structure that kind of recurring shuttle schedule on the Baltimore side of this same service.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "Can you manage arrivals across BWI, DCA and Dulles for one conference?", a: "Yes. We assign a dedicated coordinator for conference weekends and track every flight centrally across all three airports." },
      { q: "Do you provide VIP pickup for a keynote speaker with a tight schedule?", a: "Yes. Speaker and keynote pickups are treated as the highest priority on a conference weekend, with real-time flight monitoring and a dedicated chauffeur." },
      { q: "Can you run a shuttle loop between our hotel block and the conference venue?", a: "Yes. Sprinter vans run recurring shuttle loops for staff and member groups on a schedule set to your conference agenda." },
      { q: "Can we get a single invoice for the whole conference weekend?", a: "Yes. A single conference-wide invoice is available for associations coordinating multiple bookings across one event." },
      { q: "Do you serve nonprofit and association offices located in Maryland as well as DC?", a: "Yes. Many association and nonprofit staff live in Maryland suburbs, and we provide the same coordinated service for Maryland-based pickups." },
    ],
    related: [
      { label: "Conference & Association Meeting Transportation Baltimore", to: "/blog/conference-association-meeting-transportation-baltimore" },
      { label: "BWI to Washington DC", to: "/bwi-to-washington-dc" },
      { label: "Dulles Airport Transfers", to: "/dulles-airport-transfers" },
      { label: "Reagan Airport Transfers", to: "/reagan-airport-transfers" },
      { label: "Baltimore Convention Center Transportation", to: "/baltimore-convention-center-transportation" },
      { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
    ],
    schema: {
      areaServed: ["Washington DC", "Maryland"],
      serviceType: "Corporate and conference transportation",
    },
  },
  {
    slug: "film-tv-production-transportation-maryland",
    type: "service",
    name: "Film & TV Production Transportation",
    badge: "Maryland Service",
    h1: "Film & TV Production Transportation Maryland",
    metaTitle: "Film & TV Production Transportation Maryland | BWI Chauffeur",
    metaDescription: "Chauffeured transportation for Maryland film and TV productions — cast, crew and executive travel, set runs, BWI transfers. Call 877-609-1919.",
    stats: [
      { label: "Coverage", value: "Maryland film production tax-incentive region" },
      { label: "Vehicles", value: "Sedans · SUVs · Sprinters" },
      { label: "Pricing", value: "Flat rate, hourly or daily production rate" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Maryland has an established, active film and television production industry, drawing projects to Baltimore, Annapolis and locations across the state. Production schedules run on their own clock — early call times, long shoot days, and last-minute location or schedule changes — and that requires a transportation partner who can adapt on short notice rather than a standard point-to-point booking.",
      "We provide cast, crew and production-executive transportation built around a call sheet rather than a fixed schedule, with chauffeurs available for early-morning pickups, set-to-set runs during the shoot day, and standing driver assignments for a multi-week production.",
    ],
    highlights: [
      "Chauffeurs available for early call times and long, unpredictable shoot-day schedules",
      "Set-to-set and location-to-location runs during active production days",
      "Standing driver assignments for cast or executives across a multi-week production schedule",
      "Discreet service with no company branding required, for productions that need low visibility",
      "Flat-rate, hourly or negotiated daily production-rate pricing available",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "Built around the call sheet, not a fixed schedule",
        paragraphs: [
          "Production schedules change — a call time moves, a location shifts, a shoot day runs long. We staff Maryland film and TV productions with the flexibility that requires, keeping a chauffeur available for the actual timeline rather than a time booked days in advance and never revisited.",
        ],
      },
      {
        h2: "Cast, crew and executive travel",
        paragraphs: [
          "From airport pickups for visiting cast and production executives flying into BWI to daily driver assignments for the length of a shoot, we cover the full range of production transportation needs with discretion as the default, not an upgrade.",
        ],
      },
      {
        h2: "Set-to-set runs and location logistics",
        paragraphs: [
          "Maryland productions frequently shoot across multiple locations in Baltimore, Annapolis and the surrounding region within the same project, and our chauffeurs who know those routes well keep set-to-set moves efficient rather than treating each location as an unfamiliar address.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "Can you accommodate unpredictable production schedules and last-minute changes?", a: "Yes. We staff productions with the flexibility to handle call-time changes and shifting shoot-day schedules rather than a fixed booking window." },
      { q: "Do you provide discreet, unbranded vehicles for productions that need low visibility?", a: "Yes. Unbranded vehicles and minimal conversation are available on request." },
      { q: "Can you handle airport pickups for visiting cast or executives?", a: "Yes. We regularly provide BWI, DCA and Dulles airport pickups connected directly into a production's shoot schedule." },
      { q: "Do you offer standing driver assignments for the length of a shoot?", a: "Yes. Standing daily assignments are available for cast or executives across a multi-week Maryland production." },
      { q: "Is pricing negotiable for production-length bookings?", a: "Yes. Flat-rate, hourly and negotiated daily production rates are all available depending on the engagement." },
    ],
    related: [
      { label: "Maryland Hourly Chauffeur Service", to: "/maryland-hourly-chauffeur-service" },
      { label: "BWI Corporate Transportation", to: "/bwi-corporate-transportation" },
      { label: "Baltimore Corporate Car Service", to: "/baltimore-corporate-car-service" },
      { label: "Hourly As-Directed Chauffeur for Corporate Roadshows", to: "/blog/hourly-as-directed-chauffeur-corporate-roadshows" },
      { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
    ],
    schema: {
      areaServed: ["Baltimore", "Annapolis", "Maryland"],
      serviceType: "Production transportation",
    },
  },

  // ───────────────────────── New occasion/group pages (3) ─────────────────────────
  {
    slug: "wedding-guest-shuttle-service-maryland",
    type: "service",
    name: "Wedding Guest Shuttle Service",
    badge: "Maryland Service",
    h1: "Wedding Guest Shuttle Transportation Maryland",
    metaTitle: "Wedding Guest Shuttle Service Maryland | Sprinter Vans",
    metaDescription: "Wedding guest shuttle service across Maryland — hotel block to venue, round trips, Sprinter vans and buses, flat per-trip rates. Call 877-609-1919.",
    stats: [
      { label: "Coverage", value: "Maryland, DC & Delaware" },
      { label: "Vehicles", value: "Sprinter vans · Stretch limousines" },
      { label: "Pricing", value: "Flat rate per shuttle run" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "A wedding guest shuttle is a different booking than the couple's own transportation — it is planned around a hotel room block, a venue with limited parking, and a guest list that needs reliable round trips at set times rather than a single car for two people. We run this as its own service, coordinated separately from (but alongside) the couple's sedan or limousine.",
      "Most Maryland venues with limited on-site parking or a rural setting benefit from a dedicated guest shuttle, and we plan the schedule around your ceremony and reception timeline rather than a generic hourly block.",
    ],
    highlights: [
      "Round-trip shuttle runs between a hotel block and the venue on a schedule tied to your timeline",
      "Mercedes Sprinter vans seating up to 14, with multiple vans available for larger guest counts",
      "A dedicated shuttle coordinator so the couple's own transportation runs independently",
      "Flat per-run pricing confirmed before the wedding, not an open-ended hourly guess",
      "Experience with limited-parking and rural Maryland venues where a shuttle solves a real logistics problem",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "Why a shuttle is different from the couple's car",
        paragraphs: [
          "The couple's transportation is about one ceremonial ride; a guest shuttle is a logistics problem for 30, 80 or 200 people who all need to get from a hotel block to the venue and back without the chaos of a parking lot full of unfamiliar rental cars. We plan guest shuttles as a separate schedule, often running continuously during a defined pickup window rather than as a single timed trip.",
        ],
      },
      {
        h2: "Solving limited-parking and rural venues",
        paragraphs: [
          "Many of Maryland's most popular wedding venues — historic properties, farms and waterfront sites — have genuinely limited on-site parking, which makes a guest shuttle less a luxury and more a practical necessity for a smooth event. See our [barn and farm venue wedding guide](/blog/barn-farm-venue-wedding-transportation-maryland) for how shuttle logistics typically work at that kind of venue specifically.",
        ],
      },
      {
        h2: "Coordinating with the couple's own transportation",
        paragraphs: [
          "A guest shuttle runs on its own schedule, separate from the couple's sedan, SUV or stretch limousine, which means both can be booked together without either affecting the other's timing. See our [Maryland wedding limo](/maryland-wedding-limo) page for how we typically handle the couple's side of the same wedding day.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "How is a guest shuttle different from booking the couple's wedding limo?", a: "A guest shuttle runs round trips for the full guest list between a hotel block and the venue on a repeating schedule, while the couple's car is a single ceremonial ride. We book and coordinate them separately so each runs smoothly." },
      { q: "How many guests can one shuttle van carry?", a: "Each Mercedes Sprinter van seats up to 14 passengers, and we run multiple vans for larger guest counts or wider pickup windows." },
      { q: "Is shuttle pricing a flat rate or an hourly guess?", a: "We quote a flat rate per shuttle run based on your guest count, pickup locations and schedule, confirmed before the wedding." },
      { q: "Do you provide shuttles for venues with limited on-site parking?", a: "Yes. Limited-parking and rural Maryland venues are exactly where a guest shuttle solves the most real logistics problems, and we have experience running them at many such sites." },
      { q: "Can you run a continuous shuttle loop during a set arrival window rather than one scheduled trip?", a: "Yes. Many weddings use a continuous loop during a defined pickup window rather than a single timed run, and we plan either approach based on your guest list's needs." },
    ],
    related: [
      { label: "Maryland Wedding Limo", to: "/maryland-wedding-limo" },
      { label: "Barn & Farm Venue Wedding Transportation Maryland", to: "/blog/barn-farm-venue-wedding-transportation-maryland" },
      { label: "How Many Cars: Wedding Party Transportation Guide", to: "/blog/how-many-cars-wedding-party-transportation-guide" },
      { label: "Coordinating a Chauffeur Wedding Vendor Timeline", to: "/blog/coordinating-chauffeur-wedding-vendor-timeline" },
      { label: "Maryland Sprinter Van Service", to: "/maryland-sprinter-van-service" },
      { label: "Maryland Stretch Limo Rental", to: "/maryland-stretch-limo-rental" },
    ],
    schema: {
      areaServed: ["Maryland", "Washington DC", "Delaware"],
      serviceType: "Wedding guest shuttle service",
    },
  },
  {
    slug: "house-of-worship-group-transportation-maryland",
    type: "service",
    name: "House of Worship Group Transportation",
    badge: "Maryland Service",
    h1: "House of Worship & Religious Group Transportation Maryland",
    metaTitle: "House of Worship Group Transportation Maryland | BWI Chauffeur",
    metaDescription: "Group transportation for Maryland churches, synagogues and religious organizations — choir trips, retreats, Sprinter vans. Call 877-609-1919.",
    stats: [
      { label: "Coverage", value: "Maryland, DC & Delaware" },
      { label: "Vehicles", value: "Sprinter vans · Sedans · SUVs" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Churches, synagogues and other religious organizations across Maryland regularly need reliable group transportation for choir trips, youth group outings, retreats, mission trips and visiting clergy — travel that a standard rideshare app handles poorly for a group, and that a congregation's own volunteer drivers can make unpredictable.",
      "We run this as a dedicated service with Sprinter vans for group outings and sedans or SUVs for visiting clergy and individual airport transfers, priced the same flat, predictable way as every other BWI Chauffeur booking.",
    ],
    highlights: [
      "Mercedes Sprinter vans seating up to 14 for choir trips, youth groups and congregational outings",
      "Sedans and SUVs for visiting clergy, guest speakers and individual airport transfers",
      "Experience coordinating recurring trips for weekly or seasonal congregational schedules",
      "Flat per-trip pricing confirmed before booking, with group discounts available for recurring bookings",
      "Chauffeurs who understand the schedule discipline a congregation's event timeline requires",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "Group outings that need more than one driver",
        paragraphs: [
          "A choir trip, youth group retreat or mission-trip send-off typically needs more seats than a single congregational volunteer vehicle can provide, and coordinating several separate driver volunteers adds its own risk and scheduling burden. A Sprinter van or a small fleet of vans solves that with one coordinated pickup and drop-off rather than a patchwork of personal cars.",
        ],
      },
      {
        h2: "Visiting clergy and guest speakers",
        paragraphs: [
          "Visiting clergy, guest speakers and conference delegates flying into BWI, DCA or Dulles for a Maryland congregation's event need the same reliable, flight-tracked pickup any other visiting guest would, and we provide it with the same discretion we extend to any professional traveler.",
        ],
      },
      {
        h2: "Recurring and seasonal scheduling",
        paragraphs: [
          "Many congregations need the same kind of trip repeatedly — a weekly shuttle for an elderly-member service, a seasonal retreat, an annual mission trip — and we can set up a standing arrangement so the trip is simply confirmed each time rather than re-quoted from scratch. See our [senior & elderly car service](/senior-elderly-car-service-maryland) page for how we handle recurring transportation for congregation members who no longer drive themselves.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "Can you handle a choir trip or youth group retreat for our congregation?", a: "Yes. Mercedes Sprinter vans seat up to 14, and we run multiple vans together for larger groups, with one coordinated pickup and drop-off schedule." },
      { q: "Do you provide airport pickups for visiting clergy or guest speakers?", a: "Yes. We provide the same flight-tracked, discreet pickup for visiting clergy and speakers that we provide any other professional traveler." },
      { q: "Can we set up a recurring arrangement for a weekly or seasonal trip?", a: "Yes. Standing arrangements are available for recurring congregational trips, so each one is simply confirmed rather than re-quoted from scratch." },
      { q: "Do you offer group discounts for recurring congregational bookings?", a: "Yes. Group and recurring-booking discounts are available — ask when you request a quote." },
      { q: "Is pricing flat-rate for group outings?", a: "Yes. Group trips are quoted as a flat rate per trip, confirmed before booking, with no surge pricing." },
    ],
    related: [
      { label: "Senior & Elderly Car Service Maryland", to: "/senior-elderly-car-service-maryland" },
      { label: "Maryland Sprinter Van Service", to: "/maryland-sprinter-van-service" },
      { label: "Group Transportation BWI Airport", to: "/blog/group-transportation-bwi-airport" },
      { label: "Youth Sports Tournament Team Transportation Maryland", to: "/blog/youth-sports-tournament-team-transportation-maryland" },
      { label: "Funeral & Memorial Limousine Etiquette Maryland", to: "/blog/funeral-memorial-limousine-etiquette-maryland" },
      { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
    ],
    schema: {
      areaServed: ["Maryland", "Washington DC", "Delaware"],
      serviceType: "Group transportation",
    },
  },
  {
    slug: "college-visit-day-campus-tour-transportation-maryland",
    type: "service",
    name: "College Visit Day & Campus Tour Transportation",
    badge: "Maryland Service",
    h1: "College Visit Day & Campus Tour Transportation Maryland",
    metaTitle: "College Campus Tour Transportation Maryland | BWI Chauffeur",
    metaDescription: "Multi-college campus tour transportation in Maryland & DC — visit several schools in one day, airport pickups for families. Call 877-609-1919.",
    stats: [
      { label: "Coverage", value: "Maryland, DC & Virginia campuses" },
      { label: "Vehicles", value: "Sedans · SUVs · Sprinters" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Families touring colleges in the Maryland, DC and Northern Virginia corridor often try to visit two or three campuses in a single trip — a schedule that works far better with one chauffeur handling navigation, parking and timing than with a parent also trying to drive, find the admissions office and keep the day on schedule.",
      "We run multi-campus tour days as hourly as-directed service, with a chauffeur who knows campus visitor-parking procedures and admissions-office drop-off points at the region's major schools, and we connect the day directly to a BWI, DCA or Dulles airport pickup for out-of-town families.",
    ],
    highlights: [
      "Hourly as-directed service built around a multi-campus visit itinerary in one day",
      "Chauffeurs familiar with visitor-parking procedures at the region's major colleges and universities",
      "Airport pickups for out-of-town families connected directly into the same day's campus schedule",
      "Sedans for a single family, SUVs for luggage, Sprinter vans for larger extended-family groups",
      "Flat-rate or hourly pricing confirmed before you book",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "Visiting several campuses in one trip",
        paragraphs: [
          "A college visit trip rarely means a single school — most families try to compare two or three campuses within the same travel window, which turns the day into a logistics exercise if a parent is also doing the driving. Our chauffeurs handle the navigation and parking at each stop, so the family's attention stays on the tour and the admissions presentation rather than the drive between them.",
        ],
      },
      {
        h2: "Connecting the airport leg to the campus schedule",
        paragraphs: [
          "Out-of-town families flying into BWI, DCA or Dulles for a condensed campus-visit weekend can connect the airport pickup directly into the same reservation as the rest of the day's touring, avoiding a separate booking and a separate driver for each leg.",
        ],
      },
      {
        h2: "Graduation weekend and move-in day",
        paragraphs: [
          "The same regional campus knowledge applies to graduation weekend and move-in day traffic, both of which create predictable congestion around campus entrances that a chauffeur familiar with the specific school can route around. See our [Maryland graduation limo](/maryland-graduation-limo) page and our [Johns Hopkins University transportation](/johns-hopkins-university-transportation) and [University of Maryland transportation](/university-of-maryland-transportation) pages for school-specific logistics.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "Can you take us to multiple college campuses in one day?", a: "Yes. Hourly as-directed service is built for exactly this — a multi-campus itinerary with the same chauffeur and vehicle handling navigation and parking at each stop." },
      { q: "Do you know visitor-parking procedures at Maryland and DC-area colleges?", a: "Yes. Our chauffeurs are familiar with visitor-parking and admissions-office drop-off points at the region's major colleges and universities." },
      { q: "Can you connect an airport pickup directly to our campus tour schedule?", a: "Yes. Out-of-town families can book the BWI, DCA or Dulles airport pickup on the same reservation as the rest of the day's touring." },
      { q: "Do you provide transportation for graduation weekend or move-in day?", a: "Yes. We regularly handle both, and our chauffeurs plan around the predictable congestion each creates near campus entrances." },
      { q: "Is pricing flat-rate or hourly for a campus tour day?", a: "Multi-campus days are typically billed hourly as-directed; a single airport pickup alone is flat-rate." },
    ],
    related: [
      { label: "Maryland Graduation Limo", to: "/maryland-graduation-limo" },
      { label: "Johns Hopkins University Transportation", to: "/johns-hopkins-university-transportation" },
      { label: "University of Maryland Transportation", to: "/university-of-maryland-transportation" },
      { label: "University Event Transportation: Loyola, Towson & UMBC", to: "/blog/university-event-transportation-loyola-towson-umbc" },
      { label: "Maryland Hourly Chauffeur Service", to: "/maryland-hourly-chauffeur-service" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
    ],
    schema: {
      areaServed: ["Maryland", "Washington DC", "Virginia"],
      serviceType: "Campus tour transportation",
    },
  },

  // ───────────────────────── New long-tail intent pages (3) ─────────────────────────
  {
    slug: "senior-elderly-car-service-maryland",
    type: "service",
    name: "Senior & Elderly Car Service",
    badge: "Maryland Service",
    h1: "Senior & Elderly Car Service Maryland",
    metaTitle: "Senior & Elderly Car Service Maryland | BWI Chauffeur",
    metaDescription: "Dignified, patient car service for Maryland seniors — doctor visits, airport trips, family events, door-to-door assistance. Call 877-609-1919.",
    stats: [
      { label: "Coverage", value: "Maryland, DC & Delaware" },
      { label: "Vehicles", value: "Sedans · SUVs" },
      { label: "Pricing", value: "Flat rate or recurring arrangement" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Many of our Maryland clients book us specifically because an elderly parent or relative no longer wants to drive, or no longer should, but still wants to travel with dignity rather than feel handled. Our chauffeurs are patient, unhurried and trained to assist with doors, steps and luggage without making a passenger feel rushed — the opposite experience of a rideshare driver on a timer.",
      "This is not medical transport and we do not provide wheelchair-lift vehicles or clinical assistance, but for a senior who is mobile with some help, we provide door-to-door car service for everything from a doctor's appointment to a family holiday gathering to an airport trip to visit grandchildren.",
    ],
    highlights: [
      "Patient, unhurried chauffeurs trained to assist with doors, steps and luggage",
      "Door-to-door service — not curb-to-curb — with the chauffeur walking a passenger to the entrance on request",
      "Recurring arrangements available for regular appointments or standing weekly trips",
      "Sedans and SUVs with easier entry height available on request",
      "Flat-rate pricing confirmed before booking, with family members able to book and pay on a senior's behalf",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "Dignified, unhurried service",
        paragraphs: [
          "A senior passenger's comfort matters more than shaving a minute off the trip, and our chauffeurs are trained accordingly — walking at the passenger's pace, assisting with car doors and steps, and waiting without pressure rather than idling impatiently at the curb. Family members booking on a parent's behalf can request these specifics at booking so expectations are clear before the car arrives.",
        ],
      },
      {
        h2: "What this service is, and is not",
        paragraphs: [
          "We provide dignified, patient car service for seniors who are ambulatory with some assistance. We are not a non-emergency medical transport provider, we do not operate wheelchair-lift vehicles, and we do not provide clinical or caregiving assistance — if a passenger requires that level of support, a specialized medical-transport provider is the right choice instead. For wheelchair and car-seat accommodations within our standard fleet, see our [wheelchair-accessible and car-seat transportation](/wheelchair-accessible-and-car-seat-transportation-maryland) page.",
        ],
      },
      {
        h2: "Recurring trips and family coordination",
        paragraphs: [
          "Many senior clients use us for a recurring need — a weekly appointment, a standing visit to family, or regular trips to a house of worship — and we can set up a standing arrangement with a consistent chauffeur so a familiar face shows up each time. See our [house of worship group transportation](/house-of-worship-group-transportation-maryland) page for how we handle recurring congregation-related trips for members who no longer drive.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "Do your chauffeurs assist elderly passengers with doors and steps?", a: "Yes. Our chauffeurs are trained to assist with car doors, steps and luggage at an unhurried pace, and can walk a passenger to the entrance on request." },
      { q: "Is this a medical transport service for wheelchair users?", a: "No. We provide dignified car service for ambulatory seniors who need some assistance, not clinical or wheelchair-lift transport. A specialized medical-transport provider is the better fit for those needs." },
      { q: "Can a family member book and pay for a parent's trip?", a: "Yes. Family members regularly book and pay on a senior relative's behalf, and can specify any assistance needed at booking." },
      { q: "Can we set up a recurring weekly trip?", a: "Yes. Standing arrangements are available with a consistent chauffeur so a familiar face shows up for each appointment." },
      { q: "Do you provide airport pickups for seniors visiting family?", a: "Yes. We regularly provide flight-tracked airport transfers for senior travelers, with the same patient, unhurried assistance as any other trip." },
    ],
    related: [
      { label: "Wheelchair-Accessible & Car Seat Transportation Maryland", to: "/wheelchair-accessible-and-car-seat-transportation-maryland" },
      { label: "House of Worship & Religious Group Transportation Maryland", to: "/house-of-worship-group-transportation-maryland" },
      { label: "Pet-Friendly Car Service Maryland", to: "/pet-friendly-car-service-maryland" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
      { label: "Maryland Hourly Chauffeur Service", to: "/maryland-hourly-chauffeur-service" },
      { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
    ],
    schema: {
      areaServed: ["Maryland", "Washington DC", "Delaware"],
      serviceType: "Senior car service",
    },
  },
  {
    slug: "pet-friendly-car-service-maryland",
    type: "service",
    name: "Pet-Friendly Car Service",
    badge: "Maryland Service",
    h1: "Pet-Friendly Car Service Maryland",
    metaTitle: "Pet-Friendly Car Service Maryland | BWI Chauffeur",
    metaDescription: "Pet-friendly car and airport service across Maryland — carriers and crates welcome, SUVs for larger dogs, flat rates. Call 877-609-1919.",
    stats: [
      { label: "Coverage", value: "Maryland, DC & Delaware" },
      { label: "Vehicles", value: "Sedans · SUVs" },
      { label: "Pricing", value: "Flat rate — no pet surcharge disputes" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Traveling with a pet adds its own set of logistics on top of an ordinary trip — a crate that needs to fit, a nervous animal that needs a calm ride, or a rideshare driver who might cancel on arrival once they see the carrier. We welcome pets on request, and we confirm it at booking rather than leaving it as a surprise for the chauffeur to accept or reject at the curb.",
      "Most pet trips we run are BWI airport transfers for flying with a pet in-cabin or as checked cargo, along with vet visits, groomer trips and the occasional move where the family pet rides along with the rest of the household.",
    ],
    highlights: [
      "Pets welcome on request — confirmed at booking, never a surprise negotiation at the curb",
      "SUVs available for larger dogs or multiple pets needing more room than a sedan allows",
      "Experience with the specific logistics of flying with a pet at BWI, including cargo-area drop-off",
      "Flat rates that include pet travel — no after-the-fact surcharge disputes",
      "Protective seat covers and carrier securing available on request",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "Confirmed at booking, not negotiated at the curb",
        paragraphs: [
          "The biggest frustration pet owners describe with rideshare is uncertainty — not knowing until the driver arrives whether they will actually accept the trip with an animal aboard. We ask about pets at booking, confirm the vehicle and any special handling in advance, and the chauffeur who arrives already knows what to expect.",
        ],
      },
      {
        h2: "Flying with a pet from BWI",
        paragraphs: [
          "Flying with a pet involves its own set of logistics beyond a normal airport run — in-cabin carrier size limits, cargo-area check-in procedures for larger animals, and airline-specific timing requirements. See our [flying with pets at BWI](/flying-with-pets-bwi-airport-pet-friendly-transportation) guide for the details, and book your transfer with the pet noted so we bring the right vehicle.",
        ],
      },
      {
        h2: "Vet visits, groomer trips and moving day",
        paragraphs: [
          "Beyond the airport, we regularly handle vet appointments, groomer trips and household moves where a pet rides along with the rest of the family. SUVs offer the extra room a larger dog or multiple pets typically need over a standard sedan.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "Do I need to tell you in advance that I'm traveling with a pet?", a: "Yes, please mention it at booking so we confirm the right vehicle and any special handling — we never want it to be a surprise for the chauffeur or a reason for a trip to be declined." },
      { q: "Is there an extra charge for bringing a pet?", a: "Pet travel is included in the flat rate confirmed at booking — no after-the-fact surcharge disputes." },
      { q: "Can you handle a larger dog or multiple pets?", a: "Yes. Cadillac Escalades and Chevrolet Suburbans offer more room than a standard sedan for larger dogs or multiple pets." },
      { q: "Do you provide transportation for flying with a pet from BWI?", a: "Yes. We regularly handle both in-cabin carrier trips and cargo-area drop-offs for larger animals — see our flying-with-pets guide for the specific logistics." },
      { q: "Can you provide seat covers or help securing a carrier?", a: "Yes, protective seat covers and carrier securing are available on request." },
    ],
    related: [
      { label: "Flying With Pets: BWI Airport Pet-Friendly Transportation", to: "/flying-with-pets-bwi-airport-pet-friendly-transportation" },
      { label: "Senior & Elderly Car Service Maryland", to: "/senior-elderly-car-service-maryland" },
      { label: "Executive Relocation & New Hire Moving Day Transportation", to: "/blog/executive-relocation-new-hire-moving-day-transportation" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
      { label: "Group Vacation Rental & Airbnb Shuttle Maryland", to: "/blog/group-vacation-rental-airbnb-shuttle-maryland" },
      { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
    ],
    schema: {
      areaServed: ["Maryland", "Washington DC", "Delaware"],
      serviceType: "Pet-friendly car service",
    },
  },
  {
    slug: "same-day-last-minute-car-service-maryland",
    type: "service",
    name: "Same-Day & Last-Minute Car Service",
    badge: "Maryland Service",
    h1: "Last-Minute & Same-Day Car Service Maryland",
    metaTitle: "Last-Minute Car Service Maryland | Same-Day Booking",
    metaDescription: "Need a car today? Same-day and last-minute car service across Maryland — sedans and SUVs often available within the hour. Call 877-609-1919.",
    stats: [
      { label: "Coverage", value: "Maryland, DC & Delaware" },
      { label: "Vehicles", value: "Sedans · SUVs" },
      { label: "Pricing", value: "Flat rate — confirmed on the call" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Most of our bookings come in well ahead of the trip, but a real share come in the same day — a changed meeting, a missed earlier flight, a sudden need for a dignified ride rather than whatever rideshare happens to be nearby. For a sedan or SUV, same-day and even within-the-hour availability is realistic more often than people expect, especially outside of the heaviest holiday travel windows.",
      "Call 877-609-1919 directly for a last-minute need rather than booking online and waiting on confirmation — dispatch can tell you in the same call whether a vehicle is available and roughly how fast it can reach you.",
    ],
    highlights: [
      "Sedans and SUVs frequently available same-day, often within the hour outside peak travel periods",
      "A direct phone line to dispatch for the fastest possible confirmation on a last-minute need",
      "The same flat-rate pricing and licensed, insured chauffeurs as any advance booking",
      "Honest expectations set on the call — if a vehicle genuinely cannot make your window, we say so immediately",
      "Sprinter vans and stretch limousines generally need more lead time; sedans and SUVs are the fastest same-day option",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "What's realistic on short notice",
        paragraphs: [
          "Sedans and SUVs are our most flexible same-day vehicles, and a call to dispatch during normal hours often finds something available within an hour, sometimes sooner. Sprinter vans and stretch limousines are harder to secure last-minute because fewer of them are in the active fleet and they are more often already booked for a scheduled event — see our [can you book a limo same-day in Maryland](/can-you-book-a-limo-same-day-in-maryland) guide for the vehicle-by-vehicle breakdown.",
        ],
      },
      {
        h2: "Why call instead of booking online and waiting",
        paragraphs: [
          "An online booking form is built for advance reservations and does not show real-time vehicle availability the way a phone call to dispatch does. For anything needed within the next few hours, calling 877-609-1919 directly gets you a faster, more honest answer than submitting a form and waiting for a callback.",
        ],
      },
      {
        h2: "Common last-minute situations we handle",
        paragraphs: [
          "A missed flight that pushes an airport pickup earlier or later, a last-minute client meeting that needs a professional car instead of a rideshare, or simply deciding at the last minute that today calls for something more reliable than whatever app happens to be nearby — all of these come in as same-day calls, and we treat them with the same flat-rate pricing and licensed, background-checked chauffeurs as any booking made weeks in advance.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "Can I really get a car the same day I call?", a: "Often, yes — for sedans and SUVs, especially outside the heaviest holiday travel windows. Call 877-609-1919 and dispatch will tell you immediately what is available." },
      { q: "Is same-day pricing higher than booking in advance?", a: "No. Pricing is the same flat-rate structure regardless of how far in advance you book — there is no last-minute surge fee." },
      { q: "Can I get a Sprinter van or stretch limo on short notice?", a: "Sometimes, but it is less reliable than a sedan or SUV since fewer are in the fleet and they are more often already committed to a scheduled event. Call to check real-time availability." },
      { q: "Should I book online or call for a last-minute need?", a: "Call 877-609-1919 directly. It gets you a faster, more accurate answer on real-time availability than an online form built for advance bookings." },
      { q: "Do you charge extra for a rush or last-minute booking?", a: "No. There is no rush fee — you pay the same flat rate confirmed on the call." },
    ],
    related: [
      { label: "Can You Book a Limo Same-Day in Maryland", to: "/can-you-book-a-limo-same-day-in-maryland" },
      { label: "How Early Should I Book BWI Airport Transportation", to: "/how-early-should-i-book-bwi-airport-transportation" },
      { label: "Best Time to Book Airport Car Service", to: "/blog/best-time-to-book-airport-car-service" },
      { label: "BWI Airport Early Morning Rides", to: "/blog/bwi-airport-early-morning-rides" },
      { label: "BWI Airport Late Night Pickup", to: "/blog/bwi-airport-late-night-pickup" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
    ],
    schema: {
      areaServed: ["Maryland", "Washington DC", "Delaware"],
      serviceType: "Same-day car service",
    },
  },

  // ───────────────────────── New concert/event venues (2) ─────────────────────────
  {
    slug: "the-fillmore-silver-spring-transportation",
    type: "event",
    name: "The Fillmore Silver Spring",
    badge: "Silver Spring Transportation",
    h1: "The Fillmore Silver Spring Transportation",
    metaTitle: "The Fillmore Silver Spring Transportation | BWI Chauffeur",
    metaDescription: "The Fillmore Silver Spring concert transportation — direct drop-off, no downtown Silver Spring parking search. Flat rates, 24/7. Call 877-609-1919.",
    stats: [
      { label: "Location", value: "Downtown Silver Spring, MD" },
      { label: "From BWI", value: "32 mi · 40–55 minutes" },
      { label: "Venue", value: "Mid-size concert hall" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "The Fillmore Silver Spring is one of the DC metro's busiest mid-size concert venues, located in the heart of downtown Silver Spring just off Colesville Road. Its downtown location means a packed show night brings both the venue's own crowd and the restaurant and bar traffic already filling Silver Spring's compact downtown grid onto the same few streets at once.",
      "A chauffeured drop-off at the door removes the parking search entirely — your chauffeur knows the downtown Silver Spring grid, the realistic drop-off points near the venue, and exactly when to stage for pickup as the show lets out.",
    ],
    highlights: [
      "Direct drop-off near The Fillmore's entrance, no downtown Silver Spring parking search",
      "Chauffeurs who know downtown Silver Spring's one-way streets and show-night congestion patterns",
      "Pickup staged for the actual end of the show, not the posted start time",
      "Sedans for couples, SUVs and Sprinter vans for larger groups",
      "No surge pricing on a sold-out night",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "A busy downtown venue night",
        paragraphs: [
          "The Fillmore Silver Spring sits in the middle of a compact, walkable downtown that is already busy with restaurants and bars most evenings, and a sold-out show adds a significant surge of foot and vehicle traffic to the same few blocks. Street parking fills fast, and nearby garages can mean a longer walk than expected on a cold or rainy night.",
        ],
      },
      {
        h2: "Planning the drop-off and pickup",
        paragraphs: [
          "Our chauffeurs know the realistic drop-off points closest to the venue entrance and plan the route in and out around downtown Silver Spring's one-way grid rather than guessing. For pickup, we stage near the venue timed to the actual end of the show, not the posted start time, since encore timing and exit flow both vary by night.",
        ],
      },
      {
        h2: "Pairing with a Silver Spring evening",
        paragraphs: [
          "Many guests pair a Fillmore show with dinner downtown beforehand. Hourly as-directed service keeps the same chauffeur with you for the whole evening — see our [Silver Spring limo service](/limo-service-silver-spring-md) page for how we handle the rest of a downtown Silver Spring night out.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "How far is The Fillmore Silver Spring from BWI Airport?", a: "About 32 miles, typically a 40 to 55 minute drive depending on traffic on I-95 and the Capital Beltway." },
      { q: "Is parking difficult near The Fillmore on a show night?", a: "Yes, generally. Downtown Silver Spring's street parking fills quickly on busy nights, and nearby garages can mean a longer walk than expected." },
      { q: "Can you time the pickup for the actual end of the show?", a: "Yes. We stage near the venue and time pickup to the real end of the show rather than the posted start time, since encore timing varies." },
      { q: "Can you handle a larger group for a Fillmore show?", a: "Yes. SUVs and Sprinter vans are available for groups, in addition to sedans for couples or solo concertgoers." },
      { q: "Can you add a dinner stop before the show?", a: "Yes. Hourly as-directed service keeps the same chauffeur with you for a dinner stop and the show in one continuous evening." },
    ],
    related: [
      { label: "Silver Spring Limo Service", to: "/limo-service-silver-spring-md" },
      { label: "Silver Spring Corporate Car Service", to: "/silver-spring-corporate-car-service" },
      { label: "The Music Center at Strathmore Transportation", to: "/music-center-at-strathmore-transportation" },
      { label: "Maryland Concert Transportation", to: "/maryland-concert-transportation" },
      { label: "Nine Thirty Club DC Transportation", to: "/nine-thirty-club-dc-transportation" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
    ],
    schema: {
      areaServed: ["Silver Spring", "Montgomery County"],
      serviceType: "Concert venue transportation",
    },
  },
  {
    slug: "music-center-at-strathmore-transportation",
    type: "event",
    name: "The Music Center at Strathmore",
    badge: "North Bethesda Transportation",
    h1: "The Music Center at Strathmore Transportation",
    metaTitle: "Music Center at Strathmore Transportation | BWI Chauffeur",
    metaDescription: "The Music Center at Strathmore concert transportation in North Bethesda — direct drop-off, formal-evening timing. Flat rates. Call 877-609-1919.",
    stats: [
      { label: "Location", value: "North Bethesda, MD" },
      { label: "From BWI", value: "40 mi · 50–65 minutes" },
      { label: "Venue", value: "Concert hall & performing arts center" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "The Music Center at Strathmore in North Bethesda is one of the region's premier concert and performing-arts venues, home to the National Philharmonic and a regular stop for touring classical, jazz and popular performers. Its formal, often black-tie evening audience has different needs than a typical concert crowd — a punctual arrival before the house opens and a smooth, dignified exit afterward matter more than at a casual show.",
      "We treat a Strathmore evening accordingly, timing the drop-off ahead of the performance and staging pickup for the exact end of the show rather than a loose estimate.",
    ],
    highlights: [
      "Punctual, formal-evening drop-off timed ahead of the performance",
      "Direct pickup staged for the exact end of the show at Strathmore's main entrance",
      "Chauffeurs experienced with North Bethesda's Rockville Pike-area traffic on performance nights",
      "Sedans and SUVs suited to a formal evening, Sprinter vans for larger groups and patron events",
      "No surge pricing on a sold-out performance or gala night",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "A formal-evening venue",
        paragraphs: [
          "Strathmore's audience is frequently dressed for a formal or black-tie evening, often attending a pre-show reception or a patron dinner before the performance itself. We plan drop-off timing around that fuller evening — not just the concert start time — so guests arrive with margin for a reception rather than rushing straight to their seats.",
        ],
      },
      {
        h2: "Rockville Pike-area traffic on performance nights",
        paragraphs: [
          "Strathmore sits just off Rockville Pike (MD-355) in North Bethesda, an area that carries heavy retail traffic on its own even without a performance adding to it. Our chauffeurs route around the Pike's predictable evening congestion and plan the final approach to Strathmore's dedicated entrance rather than treating it like a generic mall-adjacent address.",
        ],
      },
      {
        h2: "Pairing with a North Bethesda evening",
        paragraphs: [
          "Guests often combine a Strathmore performance with dinner in North Bethesda or Bethesda proper beforehand. Hourly as-directed service keeps the same chauffeur with you for the whole evening — see our [Bethesda corporate car service](/bethesda-corporate-car-service) and [North Bethesda limo service](/north-bethesda-limo-service) pages for the surrounding area's coverage.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "How far is The Music Center at Strathmore from BWI Airport?", a: "About 40 miles, typically a 50 to 65 minute drive via I-95 and the Capital Beltway, depending on traffic." },
      { q: "Can you time a drop-off for a pre-show reception, not just the concert start?", a: "Yes. We plan drop-off timing around a fuller formal evening, including a pre-show reception or patron dinner, not just the posted performance start time." },
      { q: "Is there heavy traffic near Strathmore on performance nights?", a: "Yes, generally, since Strathmore sits just off the already-busy Rockville Pike retail corridor. Our chauffeurs route around the predictable congestion." },
      { q: "Can you handle a patron group or gala-night booking?", a: "Yes. Sprinter vans are available for larger patron groups and gala-night events, alongside sedans and SUVs for individual formal-evening guests." },
      { q: "Can you add a dinner stop in Bethesda before the performance?", a: "Yes. Hourly as-directed service keeps the same chauffeur with you for a dinner stop in Bethesda or North Bethesda and the performance in one continuous evening." },
    ],
    related: [
      { label: "The Fillmore Silver Spring Transportation", to: "/the-fillmore-silver-spring-transportation" },
      { label: "Bethesda Corporate Car Service", to: "/bethesda-corporate-car-service" },
      { label: "North Bethesda Limo Service", to: "/north-bethesda-limo-service" },
      { label: "Maryland Concert Transportation", to: "/maryland-concert-transportation" },
      { label: "Bethesda Wedding Limo Service", to: "/bethesda-wedding-limo-service" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
    ],
    schema: {
      areaServed: ["North Bethesda", "Montgomery County"],
      serviceType: "Concert venue transportation",
    },
  },
];
