// Batch 11 (2026-10-23): 10 new landing pages. Five new Anne Arundel/Cecil
// County city pages for towns that previously existed only as route pages in
// bwiRoutes.js ("BWI to X") or not at all — Pasadena, Severn, Linthicum
// Heights, Millersville and Elkton — framed as standalone local limo-service
// pages rather than duplicating the existing point-to-point route content.
// Four corporate-by-industry pages (government contractor/Fort Meade,
// hospital/medical center, law firm, biotech/pharma) — none existed anywhere
// in MARYLAND_PAGES before this batch. One new event-venue page (Live! Casino
// & Hotel Maryland), distinct from the existing Horseshoe Baltimore blog post
// and not previously covered in MARYLAND_PAGES or CONCERT_VENUES. Checked
// against every slug in marylandPages*.js, cities.js, bwiRoutes.js,
// airportPages.js and concertVenues.js before writing — none duplicate.
// Same entry shape as earlier batches; concatenated into MARYLAND_PAGES.

const ECLASS = { name: "Mercedes-Benz E-Class", cls: "Business sedan", seats: 3, best: "solo executives and couples" };
const BMW7 = { name: "BMW 7 Series", cls: "First-class sedan", seats: 3, best: "VIP and executive travel" };
const ESCALADE = { name: "Cadillac Escalade", cls: "Premium SUV", seats: 6, best: "families and small groups with luggage" };
const SUBURBAN = { name: "Chevrolet Suburban", cls: "Luxury SUV", seats: 6, best: "airport runs with extra luggage or gear" };
const SPRINTER = { name: "Mercedes Sprinter van", cls: "Executive van", seats: 14, best: "wedding parties, corporate teams and groups" };
const STRETCH = { name: "Stretch limousine", cls: "Limousine", seats: 8, best: "proms, weddings and celebrations" };

const FLEET_ALL = [ECLASS, BMW7, ESCALADE, SUBURBAN, SPRINTER, STRETCH];

export const MARYLAND_BATCH11 = [
  // ───────────────────────── New city pages (5) ─────────────────────────
  {
    slug: "jessup-md-limo-service",
    type: "city",
    name: "Jessup",
    badge: "Howard & Anne Arundel County Limo Service",
    h1: "Jessup MD Limo Service",
    metaTitle: "Jessup MD Limo Service | BWI Chauffeur",
    metaDescription: "Jessup, MD limo and car service — on the Howard/Anne Arundel County line near BWI, flat rates, corporate and warehouse-corridor travel. Call 877-609-1919.",
    stats: [
      { label: "To BWI", value: "7 mi · 10–18 minutes" },
      { label: "To DCA", value: "34 mi · 45–60 minutes" },
      { label: "To Dulles", value: "47 mi · 60–80 minutes" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Jessup sits directly on the Howard/Anne Arundel County line along the Route 1 and I-95 corridor, wedged between BWI, Columbia and Laurel. It is less a single town center than a corridor of logistics parks, distribution centers and office space along Route 1 and Dorsey Run Road, with a smaller residential pocket near Guilford Road — a layout that means most of our Jessup trips are corporate or warehouse-corridor pickups rather than a typical neighborhood airport run.",
      "At just 7 miles from BWI, Jessup is one of the shortest airport transfers in our coverage area, which makes it a convenient base for the logistics and distribution companies that have built up along this stretch of the Route 1 and I-95 corridor.",
    ],
    highlights: [
      "One of the shortest BWI transfers in our coverage area — typically 10 to 18 minutes",
      "Chauffeurs experienced with the Route 1, I-95 and Dorsey Run Road logistics corridor",
      "Corporate accounts for warehouse, distribution and office-park businesses along the corridor",
      "Sedans, SUVs and Sprinter vans for visiting executives, teams and family travel",
      "Flat rates confirmed before you book — no surge pricing, ever",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "A logistics corridor, not a single town center",
        paragraphs: [
          "Jessup's identity is built around Route 1 and the Dorsey Run Road logistics and distribution corridor rather than a traditional downtown. Warehouse and distribution facilities line the corridor on both the Howard and Anne Arundel County sides of the line, and a meaningful share of our Jessup trips are corporate pickups connecting to this business base rather than a residential address.",
        ],
      },
      {
        h2: "Sitting between BWI, Columbia and Laurel",
        paragraphs: [
          "Jessup's position directly between BWI, Columbia and Laurel makes it a natural staging point for a multi-stop day touching more than one of those areas — see our [Columbia Gateway corporate shuttle guide](/columbia-gateway-dorsey-business-park-corporate-shuttle-maryland) and [Laurel limo service](/laurel-limo-service) pages for the surrounding corridor coverage.",
        ],
      },
      {
        h2: "One of the shortest BWI transfers in the region",
        paragraphs: [
          "At roughly 7 miles and 10 to 18 minutes from BWI under normal traffic, Jessup is among the closest communities to the airport, which keeps transfer times short and predictable for both residential and corporate pickups along the corridor.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "How far is Jessup, MD from BWI Airport?", a: "About 7 miles, typically a 10 to 18 minute drive — one of the shortest airport transfers in our coverage area." },
      { q: "Is Jessup mostly a residential community or a business corridor?", a: "Primarily a logistics and distribution business corridor along Route 1 and Dorsey Run Road, with a smaller residential pocket near Guilford Road. Most of our Jessup trips are corporate pickups connecting to that business base." },
      { q: "Do you serve warehouse and distribution companies in Jessup?", a: "Yes. A meaningful share of our Jessup bookings are corporate accounts for logistics and distribution businesses along the Route 1 and I-95 corridor." },
      { q: "Is Jessup a good staging point for a trip touching Columbia and Laurel too?", a: "Yes. Jessup sits directly between BWI, Columbia and Laurel, making it convenient for a multi-stop day across that corridor." },
      { q: "Are your Jessup airport rates flat-rate?", a: "Yes. Every airport transfer from Jessup is priced as a flat rate confirmed before booking, with no surge pricing." },
    ],
    related: [
      { label: "Columbia Gateway & Dorsey Business Park Corporate Shuttle", to: "/columbia-gateway-dorsey-business-park-corporate-shuttle-maryland" },
      { label: "Laurel Limo Service", to: "/laurel-limo-service" },
      { label: "Columbia Limo Service", to: "/limo-service-columbia-md" },
      { label: "Hanover MD Limo Service", to: "/limo-service-hanover-md" },
      { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
    ],
    schema: {
      areaServed: ["Jessup", "Howard County", "Anne Arundel County"],
      serviceType: "Limo and car service",
    },
  },
  {
    slug: "severn-md-limo-service",
    type: "city",
    name: "Severn",
    badge: "Anne Arundel County Limo Service",
    h1: "Severn MD Limo Service",
    metaTitle: "Severn MD Limo Service | BWI Chauffeur",
    metaDescription: "Severn, MD limo and car service — minutes from BWI and Fort Meade, flat-rate airport transfers, corporate and wedding transportation. Call 877-609-1919.",
    stats: [
      { label: "To BWI", value: "6 mi · 10–15 minutes" },
      { label: "To Fort Meade", value: "4 mi · 10 minutes" },
      { label: "To DCA", value: "32 mi · 45–60 minutes" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Severn sits just south of BWI and wraps around a large stretch of Fort Meade's boundary, making it one of the most defense-and-logistics-adjacent communities in Anne Arundel County. Between the airport, Fort Meade, NSA and the Arundel Mills retail and entertainment corridor, Severn generates a steady mix of military-family travel, contractor commuting and leisure trips.",
      "We run Severn constantly as both an airport-transfer community — one of the shortest BWI drives anywhere in the county — and a base for Fort Meade-connected corporate and military-family travel.",
    ],
    highlights: [
      "One of the shortest BWI transfers in Anne Arundel County — typically 10 to 15 minutes",
      "Chauffeurs experienced with Fort Meade's visitor-access gates and ID-check procedures",
      "Close to Arundel Mills and Live! Casino & Hotel for evenings out without a long drive",
      "Sedans, SUVs and Sprinter vans for military-family travel, PCS moves and corporate groups",
      "Flat rates confirmed before you book — no surge pricing, ever",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "A Fort Meade-adjacent community",
        paragraphs: [
          "Severn's eastern edge runs directly along a significant stretch of Fort Meade, and a meaningful share of our Severn trips connect to the base — contractors, military families managing a PCS move, and visitors with appointments requiring the correct visitor-access gate. See our [government contractor car service](/government-contractor-car-service-fort-meade-maryland) page for how we handle Fort Meade-specific visits.",
        ],
      },
      {
        h2: "Arundel Mills and Live! Casino",
        paragraphs: [
          "Severn sits minutes from the Arundel Mills retail and entertainment corridor, including [Live! Casino & Hotel](/live-casino-hotel-maryland-transportation), which makes it a convenient base for an evening out without the drive a more distant Anne Arundel County address would require.",
        ],
      },
      {
        h2: "One of the shortest BWI transfers in the county",
        paragraphs: [
          "At roughly 6 miles and 10 to 15 minutes from BWI under normal traffic, Severn is among the closest residential communities to the airport, which keeps our flat rates here some of the most competitive in the service area while still including full flight tracking and 45 to 60 minutes of complimentary wait time.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "How far is Severn, MD from BWI Airport?", a: "About 6 miles, typically a 10 to 15 minute drive — one of the shortest BWI transfers anywhere in Anne Arundel County." },
      { q: "Do you provide transportation to Fort Meade from Severn?", a: "Yes. A meaningful share of our Severn trips connect to Fort Meade, and our chauffeurs know the base's visitor-access gates and ID-check procedures." },
      { q: "Is Severn close to Arundel Mills and Live! Casino?", a: "Yes. Severn sits just minutes from the Arundel Mills retail and entertainment corridor, making it a convenient base for an evening out." },
      { q: "Can you help with transportation during a military PCS move?", a: "Yes. We regularly support Fort Meade-connected military families with airport transfers and local transportation during a permanent change of station." },
      { q: "Are your Severn airport rates flat-rate?", a: "Yes. Every airport transfer from Severn is priced as a flat rate confirmed before booking, with no surge pricing at any time." },
    ],
    related: [
      { label: "Odenton Limo Service", to: "/odenton-limo-service" },
      { label: "Glen Burnie Limo Service", to: "/glen-burnie-limo-service" },
      { label: "Government Contractor Car Service (Fort Meade)", to: "/government-contractor-car-service-fort-meade-maryland" },
      { label: "Live! Casino & Hotel Maryland Transportation", to: "/live-casino-hotel-maryland-transportation" },
      { label: "BWI to Severn, MD", to: "/bwi-to-severn-md" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
    ],
    schema: {
      areaServed: ["Severn", "Fort Meade", "Anne Arundel County"],
      serviceType: "Limo and car service",
    },
  },
  {
    slug: "linthicum-heights-limo-service",
    type: "city",
    name: "Linthicum Heights",
    badge: "Anne Arundel County Limo Service",
    h1: "Linthicum Heights Limo Service",
    metaTitle: "Linthicum Heights Limo Service | BWI Chauffeur",
    metaDescription: "Linthicum Heights limo and car service, minutes from BWI's own front door — flat rates, flight tracking, corporate and family travel. Call 877-609-1919.",
    stats: [
      { label: "To BWI", value: "3 mi · 5–10 minutes" },
      { label: "To DCA", value: "33 mi · 45–60 minutes" },
      { label: "To Dulles", value: "46 mi · 60–80 minutes" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Linthicum Heights sits directly adjacent to BWI Marshall Airport — close enough that several of our chauffeurs live there themselves. It is the rare Maryland community where the airport is genuinely a neighbor rather than a 20-minute drive, which makes Linthicum Heights trips some of the fastest, most predictable transfers we run anywhere in the service area.",
      "Beyond airport proximity, Linthicum Heights is a settled residential community along the MARC Penn Line and close to the BWI business park corridor, generating a mix of resident airport travel, corporate trips into the surrounding office parks, and the occasional connection to a MARC train trip north or south.",
    ],
    highlights: [
      "The shortest BWI transfer anywhere in our Anne Arundel County coverage area — typically 5 to 10 minutes",
      "Chauffeurs who live in or near Linthicum Heights and know every neighborhood street",
      "Close to the BWI business park corridor for corporate pickups and drop-offs",
      "A convenient base for combining a MARC Penn Line trip with a chauffeured leg",
      "Flat rates confirmed before you book — no surge pricing, even during peak travel periods",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "Living next door to BWI",
        paragraphs: [
          "Most Anne Arundel County communities measure their BWI distance in double-digit minutes. Linthicum Heights measures it in single digits — a genuine convenience for residents who fly often, and the reason a Linthicum Heights pickup or drop-off is one of the most reliably on-time trips on our schedule, with essentially no highway-traffic variable to plan around.",
        ],
      },
      {
        h2: "The BWI business park corridor",
        paragraphs: [
          "The business park corridor surrounding the airport along Nursery Road and Dorsey Road hosts a mix of logistics, aviation-services and corporate office tenants, and Linthicum Heights sits close enough to serve as a natural base for corporate pickups connecting to that corridor as well as the airport itself.",
        ],
      },
      {
        h2: "Combining a MARC train leg",
        paragraphs: [
          "The MARC Penn Line's Halethorpe and BWI Rail Station stops are both a short drive from Linthicum Heights, which makes the community a reasonable staging point for a traveler combining a chauffeured leg with a MARC train trip toward Baltimore Penn Station or Washington Union Station.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "How far is Linthicum Heights from BWI Airport?", a: "About 3 miles, typically just a 5 to 10 minute drive — one of the shortest airport transfers anywhere in our Anne Arundel County coverage area." },
      { q: "Do you serve the BWI business park corridor from Linthicum Heights?", a: "Yes. The business park corridor along Nursery Road and Dorsey Road is a short drive from Linthicum Heights and a regular pickup and drop-off area for us." },
      { q: "Can you combine a Linthicum Heights trip with a MARC train connection?", a: "Yes. The MARC Penn Line's Halethorpe and BWI Rail Station stops are both close by, making Linthicum Heights a reasonable staging point for a combined chauffeur-and-train trip." },
      { q: "Is same-day booking available in Linthicum Heights?", a: "Yes, in most cases for sedans and SUVs, given the very short distance to BWI. Larger vehicles still benefit from advance notice." },
      { q: "Are Linthicum Heights airport transfers flat-rate?", a: "Yes. Every airport transfer is priced as a flat rate confirmed before booking, with no surge pricing at any time." },
    ],
    related: [
      { label: "Glen Burnie Limo Service", to: "/glen-burnie-limo-service" },
      { label: "Millersville MD Limo Service", to: "/millersville-md-limo-service" },
      { label: "BWI to Linthicum, MD", to: "/bwi-to-linthicum-md" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
      { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
      { label: "BWI Airport Early Morning Rides", to: "/blog/bwi-airport-early-morning-rides" },
    ],
    schema: {
      areaServed: ["Linthicum Heights", "Anne Arundel County"],
      serviceType: "Limo and car service",
    },
  },
  {
    slug: "millersville-md-limo-service",
    type: "city",
    name: "Millersville",
    badge: "Anne Arundel County Limo Service",
    h1: "Millersville MD Limo Service",
    metaTitle: "Millersville MD Limo Service | BWI Chauffeur",
    metaDescription: "Millersville, MD limo and car service — central Anne Arundel County, flat-rate transfers to BWI, DCA & Dulles, weddings and corporate travel. Call 877-609-1919.",
    stats: [
      { label: "To BWI", value: "11 mi · 18–28 minutes" },
      { label: "To DCA", value: "33 mi · 45–60 minutes" },
      { label: "To Dulles", value: "46 mi · 60–80 minutes" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Millersville sits at roughly the geographic center of Anne Arundel County, along Veterans Highway and Route 3 between Crofton, Severn and Odenton — a quieter, mostly residential community that benefits from being within an easy drive of nearly everywhere else in the county, including the Anne Arundel County fairgrounds that host the county fair and other large events each year.",
      "Our Millersville trips run the full range — BWI and DCA transfers, weddings at the area's event venues, and corporate travel connecting to the Severn, Odenton and Crofton business pockets nearby.",
    ],
    highlights: [
      "Central Anne Arundel County positioning — an easy drive to BWI, Annapolis, Columbia and the rest of the county",
      "Chauffeurs familiar with Veterans Highway, Route 3 and Millersville's residential side streets",
      "Experience with Anne Arundel County Fairgrounds event traffic during fair season",
      "Sedans, SUVs and Sprinter vans for weddings, family travel and corporate groups",
      "Flat rates confirmed before you book — no surge pricing, ever",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "A central Anne Arundel County address",
        paragraphs: [
          "Millersville's location along Veterans Highway and Route 3 puts nearly every other part of Anne Arundel County within a reasonable drive — Annapolis to the south, Columbia and Howard County to the west, and Severn and Odenton just to the east. That central positioning makes Millersville a convenient staging point for a multi-stop day that touches more than one part of the county.",
        ],
      },
      {
        h2: "Anne Arundel County Fairgrounds",
        paragraphs: [
          "The Anne Arundel County Fairgrounds sit within Millersville and host the county fair along with other seasonal events throughout the year, each bringing a surge of local traffic. A pre-arranged chauffeur pickup staged away from the fairgrounds' own congested lot saves real time compared to arriving and departing by personal vehicle during a busy fair weekend.",
        ],
      },
      {
        h2: "Weddings and corporate travel",
        paragraphs: [
          "Millersville's event venues and its proximity to the Severn, Odenton and Crofton business corridors generate a steady mix of wedding and corporate bookings. See our [Maryland wedding limo](/maryland-wedding-limo) and [Maryland corporate car service](/maryland-corporate-car-service) pages for how each is typically structured.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "How far is Millersville, MD from BWI Airport?", a: "About 11 miles, typically an 18 to 28 minute drive depending on traffic on Veterans Highway and Route 3." },
      { q: "Do you provide transportation for Anne Arundel County Fairgrounds events?", a: "Yes. We regularly stage pickups away from the fairgrounds' own congested lot during the county fair and other seasonal events held there." },
      { q: "Is Millersville a good staging point for a multi-stop Anne Arundel County trip?", a: "Yes. Its central position along Veterans Highway and Route 3 puts Annapolis, Columbia, Severn and Odenton all within an easy drive, making it convenient for a day that touches more than one part of the county." },
      { q: "Can you handle a wedding at a Millersville-area venue?", a: "Yes. We regularly provide both couple's transportation and guest shuttles for weddings at Millersville-area event venues." },
      { q: "Are your Millersville airport rates flat-rate?", a: "Yes. Every airport transfer from Millersville is priced as a flat rate confirmed before booking, with no surge pricing." },
    ],
    related: [
      { label: "Crofton Limo Service", to: "/crofton-limo-service" },
      { label: "Odenton Limo Service", to: "/odenton-limo-service" },
      { label: "Severn MD Limo Service", to: "/severn-md-limo-service" },
      { label: "BWI to Millersville, MD", to: "/bwi-to-millersville-md" },
      { label: "Maryland Wedding Limo", to: "/maryland-wedding-limo" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
    ],
    schema: {
      areaServed: ["Millersville", "Anne Arundel County"],
      serviceType: "Limo and car service",
    },
  },
  {
    slug: "elkton-md-limo-service",
    type: "city",
    name: "Elkton",
    badge: "Cecil County Limo Service",
    h1: "Elkton MD Limo Service",
    metaTitle: "Elkton MD Limo Service | BWI Chauffeur",
    metaDescription: "Elkton, MD limo and car service — Cecil County's seat, flat-rate transfers to BWI and Philadelphia Airport, weddings and corporate travel. Call 877-609-1919.",
    stats: [
      { label: "To BWI", value: "48 mi · 55–70 minutes" },
      { label: "To PHL", value: "42 mi · 50–65 minutes" },
      { label: "To Dulles", value: "95 mi · 2–2.5 hours" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Elkton is the seat of Cecil County, sitting at Maryland's northeastern corner near the Delaware and Pennsylvania borders — close enough to Philadelphia International Airport that it often makes more sense as an air travel option than BWI, depending on the flight. We run both, with flat rates and flight tracking regardless of which airport your Elkton trip actually uses.",
      "Elkton's position along I-95 between Baltimore and Philadelphia also makes it a natural stop for corporate travel connecting the two metro areas, and its historic downtown and nearby Chesapeake Bay-adjacent venues generate a steady wedding and event season.",
    ],
    highlights: [
      "Flat-rate service to both BWI and Philadelphia International, so you can choose whichever flight actually works best",
      "Chauffeurs experienced with the I-95 corridor between Baltimore and Philadelphia",
      "Historic downtown Elkton and nearby wedding venue experience",
      "Sedans, SUVs and Sprinter vans for weddings, family travel and corporate groups",
      "Flat rates confirmed before you book — no surge pricing on I-95 corridor trips",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "Two airports worth comparing",
        paragraphs: [
          "Elkton sits close enough to both BWI and Philadelphia International that the better airport genuinely depends on your specific flight and airline, rather than defaulting to whichever is geographically closer. We run flat-rate, flight-tracked transfers to both, which means the choice between the two can be based purely on flight availability and fare rather than which one is a shorter drive.",
        ],
      },
      {
        h2: "The I-95 corridor between Baltimore and Philadelphia",
        paragraphs: [
          "Elkton's position directly on I-95 between the Baltimore and Philadelphia metro areas makes it a logical stop for corporate travel connecting the two cities, and our chauffeurs run this stretch of I-95 regularly enough to plan around its predictable congestion points near the Delaware line and the Susquehanna River crossing.",
        ],
      },
      {
        h2: "Historic downtown and Chesapeake-adjacent weddings",
        paragraphs: [
          "Elkton's historic downtown and its proximity to the upper Chesapeake Bay generate a regular wedding and event season, and our chauffeurs provide both couple's transportation and guest shuttles for venues in and around town. See our [Maryland wedding limo](/maryland-wedding-limo) page for how we typically structure the day.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "Is Elkton closer to BWI or Philadelphia International Airport?", a: "Philadelphia International is slightly closer at about 42 miles versus 48 miles to BWI, but the better choice usually depends on your specific flight and fare rather than distance alone. We run flat-rate transfers to both." },
      { q: "Do you provide corporate travel along I-95 between Baltimore and Philadelphia?", a: "Yes. Elkton sits directly on that stretch of I-95, and our chauffeurs plan around its predictable congestion points near the Delaware line and the Susquehanna River crossing." },
      { q: "Can you handle a wedding near Elkton's historic downtown?", a: "Yes. We provide both couple's transportation and guest shuttles for weddings in and around Elkton, including venues near the upper Chesapeake Bay." },
      { q: "How far is Elkton from BWI Airport?", a: "About 48 miles, typically a 55 to 70 minute drive depending on traffic on I-95." },
      { q: "Are your Elkton airport rates flat-rate?", a: "Yes. Every transfer to BWI or Philadelphia International is priced as a flat rate confirmed before booking, with no surge pricing." },
    ],
    related: [
      { label: "Baltimore to Philadelphia Limo", to: "/baltimore-to-philadelphia-limo" },
      { label: "Philadelphia Airport Car Service", to: "/philadelphia-airport-car-service" },
      { label: "PHL Airport to Philadelphia", to: "/phl-airport-to-philadelphia" },
      { label: "Maryland Wedding Limo", to: "/maryland-wedding-limo" },
      { label: "Wilmington Delaware Corporate Transportation", to: "/blog/wilmington-delaware-corporate-transportation" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
    ],
    schema: {
      areaServed: ["Elkton", "Cecil County"],
      serviceType: "Limo and car service",
    },
  },
  // ───────────────────────── Corporate by industry (4) ─────────────────────────
  {
    slug: "government-contractor-car-service-fort-meade-maryland",
    type: "service",
    name: "Government Contractor Car Service",
    badge: "Maryland Service",
    h1: "Fort Meade Government Contractor Car Service",
    metaTitle: "Fort Meade Contractor Car Service | BWI Chauffeur",
    metaDescription: "Chauffeured car service for government contractors and visitors to Fort Meade and the NSA corridor — discreet, badge-aware, flat rates. Call 877-609-1919.",
    stats: [
      { label: "Coverage", value: "Fort Meade & NSA corridor" },
      { label: "Vehicles", value: "Sedans · SUVs · Sprinters" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Fort Meade and the surrounding NSA and defense-contractor corridor along Route 32 generate a steady, specific kind of corporate travel — visiting contractors, cleared personnel, and executives with appointments that depend on arriving within a confirmed visitor-access window rather than a generic estimate. A pickup that arrives even a few minutes outside that window can mean a significant delay re-entering a secured facility, which is exactly the kind of timing precision our government contractor service is built around.",
      "We serve contracting firms headquartered in the Columbia Gateway, Dorsey Business Park and Annapolis Junction corridors, along with visiting personnel flying into BWI for a Fort Meade-connected trip, and we understand the discretion this kind of travel generally requires.",
    ],
    highlights: [
      "Chauffeurs experienced with Fort Meade's visitor-access gates and ID-check procedures",
      "Pickup timing built around confirmed badge-appointment windows, not generic estimates",
      "Discreet service — no company branding required on request, and no unnecessary conversation",
      "Sedans, SUVs and Sprinter vans for individual travelers and visiting teams",
      "Flat-rate or hourly pricing confirmed before you book",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "Why badge-appointment timing matters",
        paragraphs: [
          "Fort Meade and NSA-adjacent facilities operate on strict visitor-access windows, and arriving outside a confirmed window can mean a substantial delay re-entering security rather than a minor inconvenience. We back-time every Fort Meade pickup from the confirmed appointment window rather than a generic drive-time estimate, accounting for Route 32 and Route 175 traffic patterns that can vary meaningfully by time of day.",
        ],
      },
      {
        h2: "Serving the contractor corridor",
        paragraphs: [
          "The firms supporting Fort Meade and NSA work are concentrated in corridors like Columbia Gateway, Annapolis Junction and the broader Route 175 business park strip — see our [Columbia Gateway corporate shuttle guide](/columbia-gateway-dorsey-business-park-corporate-shuttle-maryland) for how that corridor's standing accounts typically work, many of which include Fort Meade-connected travel as part of the same account.",
        ],
      },
      {
        h2: "Discretion for sensitive travel",
        paragraphs: [
          "A meaningful share of Fort Meade-connected travel involves personnel who prefer minimal conversation and no visible company branding on the vehicle. We accommodate both as standard practice rather than a special request, the same way we handle other sensitive corporate and government travel across our Maryland coverage area.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "Do your chauffeurs know Fort Meade's visitor-access procedures?", a: "Yes. Our chauffeurs regularly handle Fort Meade and NSA-corridor visits and know the base's visitor-access gates and ID-check procedures." },
      { q: "How do you time a pickup for a secured-facility appointment?", a: "We back-time the pickup from your confirmed visitor-access window rather than a generic drive-time estimate, accounting for Route 32 and Route 175 traffic patterns." },
      { q: "Can you provide discreet service with no company branding?", a: "Yes. Minimal conversation and no visible company branding is standard practice for sensitive government and corporate travel, available on request." },
      { q: "Do you serve contracting firms in the Columbia Gateway and Annapolis Junction corridors?", a: "Yes. Many of our standing corporate accounts in those corridors include Fort Meade-connected travel as part of the same account." },
      { q: "What vehicles are available for a visiting team?", a: "Sedans and SUVs for individual travelers, and Sprinter vans for larger visiting teams, all under one flat-rate or hourly corporate account." },
    ],
    related: [
      { label: "Columbia Gateway & Dorsey Business Park Corporate Shuttle", to: "/columbia-gateway-dorsey-business-park-corporate-shuttle-maryland" },
      { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
      { label: "Severn MD Limo Service", to: "/severn-md-limo-service" },
      { label: "Odenton Limo Service", to: "/odenton-limo-service" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
      { label: "Howard County Transportation Guide", to: "/howard-county-transportation-guide" },
    ],
    schema: {
      areaServed: ["Fort Meade", "Odenton", "Anne Arundel County"],
      serviceType: "Government contractor corporate car service",
    },
  },
  {
    slug: "hospital-medical-center-transportation-maryland",
    type: "service",
    name: "Hospital & Medical Center Transportation",
    badge: "Maryland Service",
    h1: "Maryland Hospital & Medical Center Transportation",
    metaTitle: "Hospital Corporate Car Service Maryland | BWI Chauffeur",
    metaDescription: "Chauffeured transportation for hospital executives, visiting physicians and medical conference travel across Maryland and DC. Call 877-609-1919.",
    stats: [
      { label: "Coverage", value: "Baltimore, DC medical corridor" },
      { label: "Vehicles", value: "Sedans · SUVs · Sprinters" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Maryland's hospital and medical center campuses run on schedules that rarely allow for a late pickup — a visiting physician arriving for an early-morning procedure, a hospital board member in for a site visit, or an out-of-town family flying in for ongoing patient care at a specialized facility. Our hospital and medical center transportation service is built around that reality: a licensed chauffeur, a clean and comfortable vehicle, and a rate confirmed before the trip begins.",
      "We regularly serve executives, physicians and patient families connected to Johns Hopkins Medicine, the University of Maryland Medical System, and MedStar Health facilities across the Baltimore-DC corridor, each with its own visitor-access procedure and parking restrictions.",
    ],
    highlights: [
      "Chauffeurs experienced with Johns Hopkins, University of Maryland Medical System and MedStar campus logistics",
      "On-time pickups built around procedure and appointment schedules, not generic estimates",
      "Sedans, SUVs and Sprinter vans under one hospital or medical-group account",
      "Flat-rate or hourly pricing confirmed before you book",
      "24/7 dispatch for early-morning procedures and late-night discharges",
      "Maryland PSC Carrier No. 6325",
    ],
    sections: [
      {
        h2: "Built around the appointment, not a generic drive estimate",
        paragraphs: [
          "Every medical-center booking is planned around the specific appointment or procedure time it supports. For a hospital executive's multi-stop visit, hourly as-directed service keeps one chauffeur and vehicle with the trip from start to finish, which avoids the delay of re-booking a new ride between stops at a different campus.",
        ],
      },
      {
        h2: "Patient family travel",
        paragraphs: [
          "Families traveling for a loved one's care at a specialized Maryland medical center face enough stress without also managing unpredictable transportation. A pre-arranged, flight-tracked airport transfer and consistent local transportation during a hospital stay removes one variable from an already difficult trip.",
        ],
      },
      {
        h2: "Medical conferences and visiting physicians",
        paragraphs: [
          "Baltimore hosts a steady calendar of medical conferences tied to its hospital systems, and visiting physicians and conference attendees benefit from the same flat-rate, flight-tracked service as any corporate traveler — see our [Johns Hopkins medical conference transportation](/johns-hopkins-medical-conference-transportation) guide for conference-specific detail.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "Do you provide transportation for hospital executives and board members?", a: "Yes. We regularly handle multi-stop executive visits using hourly as-directed service, which keeps one chauffeur and vehicle with the trip across multiple campus stops." },
      { q: "Can you support patient family travel during a hospital stay?", a: "Yes. We provide flight-tracked airport transfers and consistent local transportation for families traveling for a loved one's care at a Maryland medical center." },
      { q: "Do your chauffeurs know Johns Hopkins and University of Maryland Medical System campuses?", a: "Yes. Our chauffeurs regularly serve these campuses and understand each system's visitor-access procedures and parking restrictions." },
      { q: "Can you handle an early-morning pickup for a scheduled procedure?", a: "Yes. 24/7 dispatch covers early-morning procedure pickups and late-night hospital discharges equally." },
      { q: "Is pricing flat-rate or hourly for medical center transportation?", a: "Both options are available. A single transfer is typically flat-rate, while a multi-stop visit or standing account is usually billed hourly or on a monthly invoice." },
    ],
    related: [
      { label: "Johns Hopkins Medical Conference Transportation", to: "/blog/johns-hopkins-medical-conference-transportation" },
      { label: "Johns Hopkins Patient & Family Travel Transportation", to: "/blog/johns-hopkins-patient-family-travel-transportation" },
      { label: "I-270 Biotech Corridor Corporate Car Service", to: "/i-270-biotech-corridor-corporate-car-service-maryland" },
      { label: "Biotech & Pharma Corporate Shuttle Maryland", to: "/biotech-pharma-corporate-shuttle-maryland" },
      { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
    ],
    schema: {
      areaServed: ["Baltimore", "Washington DC", "Maryland"],
      serviceType: "Healthcare corporate car service",
    },
  },
  {
    slug: "law-firm-corporate-car-service-baltimore",
    type: "service",
    name: "Law Firm Corporate Car Service",
    badge: "Maryland Service",
    h1: "Baltimore Law Firm Corporate Car Service",
    metaTitle: "Law Firm Corporate Car Service Baltimore | BWI Chauffeur",
    metaDescription: "Chauffeured car service for Baltimore law firms — client transportation, deposition travel, courthouse timing, flat or hourly rates. Call 877-609-1919.",
    stats: [
      { label: "Coverage", value: "Baltimore & Maryland courts" },
      { label: "Vehicles", value: "Sedans · SUVs · Sprinters" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Baltimore's law firms run on a schedule where being late is not an option — a courthouse appearance with a fixed start time, a deposition with opposing counsel already on the clock, or a client flying in who needs to arrive composed rather than rattled from an unreliable ride. Our law firm corporate car service is built around that standard: a licensed chauffeur, a confirmed rate, and pickup timing built around the actual hearing or meeting time.",
      "We work with firms across downtown Baltimore's legal corridor and serve visiting clients, expert witnesses and opposing counsel traveling in for depositions and proceedings throughout the Baltimore-DC corridor.",
    ],
    highlights: [
      "Pickup timing built around courthouse schedules and deposition start times, not generic estimates",
      "Discreet service for sensitive client transportation and confidential conversations",
      "Sedans and SUVs for individual travel, Sprinter vans for larger litigation teams",
      "Flat-rate or hourly billing under one firm-wide corporate account",
      "24/7 availability for early-morning courthouse arrivals and late-running proceedings",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "Courthouse and deposition timing",
        paragraphs: [
          "A late arrival to a courthouse hearing or a deposition is not a minor inconvenience — it can affect the proceeding itself. We time every courthouse and deposition pickup around the actual start time and build in buffer for downtown Baltimore's courthouse-district parking and traffic patterns, rather than treating it like a standard point-to-point trip.",
        ],
      },
      {
        h2: "Client and visiting-counsel travel",
        paragraphs: [
          "Visiting clients, expert witnesses and out-of-town counsel traveling in for a Baltimore proceeding benefit from a flight-tracked airport transfer paired with the same chauffeur handling local transportation during their stay — one point of contact, rather than coordinating separate rideshare requests for each leg of a multi-day visit.",
        ],
      },
      {
        h2: "Confidentiality for sensitive conversations",
        paragraphs: [
          "Legal travel frequently involves conversations that need to stay confidential, whether between attorney and client or among a litigation team reviewing strategy en route to a hearing. Our chauffeurs are trained to provide quiet, professional transportation with minimal conversation when requested, consistent with how we handle other confidentiality-sensitive corporate travel.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "Can you time a pickup around a courthouse hearing start time?", a: "Yes. We build pickup timing around the actual hearing or deposition start time and account for downtown Baltimore's courthouse-district traffic and parking patterns." },
      { q: "Do you provide transportation for visiting clients and expert witnesses?", a: "Yes. We regularly handle flight-tracked airport transfers combined with local transportation during a multi-day visit for out-of-town clients, witnesses and counsel." },
      { q: "Is confidential, low-conversation service available for legal travel?", a: "Yes. Our chauffeurs provide quiet, professional transportation with minimal conversation on request, which is standard for sensitive legal and corporate travel." },
      { q: "Can a law firm set up one account for the whole office?", a: "Yes. A firm-wide corporate account lets any attorney or staff member book against it, with consolidated monthly billing rather than individual expense reports." },
      { q: "What vehicles do you provide for a litigation team?", a: "Sedans and SUVs for individual attorney travel, and Sprinter vans for a larger litigation team traveling together to a hearing or deposition." },
    ],
    related: [
      { label: "Law Firm Client Transportation Baltimore", to: "/blog/law-firm-client-transportation-baltimore" },
      { label: "Corporate Limo Service Baltimore", to: "/blog/corporate-limo-service-baltimore" },
      { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
      { label: "Hourly As-Directed Chauffeur: Corporate Roadshows", to: "/blog/hourly-as-directed-chauffeur-corporate-roadshows" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: {
      areaServed: ["Baltimore", "Maryland"],
      serviceType: "Law firm corporate car service",
    },
  },
  {
    slug: "biotech-pharma-corporate-shuttle-maryland",
    type: "service",
    name: "Biotech & Pharma Corporate Shuttle",
    badge: "Maryland Service",
    h1: "Maryland Biotech & Pharma Corporate Car Service",
    metaTitle: "Biotech Corporate Shuttle Maryland | BWI Chauffeur",
    metaDescription: "Chauffeured corporate shuttle for Maryland biotech and pharma companies — I-270 corridor, NIH-adjacent travel, board and investor days. Call 877-609-1919.",
    stats: [
      { label: "Coverage", value: "I-270 biotech corridor" },
      { label: "Vehicles", value: "Sedans · SUVs · Sprinters" },
      { label: "Pricing", value: "Flat rate, hourly or retainer" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Maryland's biotech and pharmaceutical sector is concentrated along the I-270 corridor from Bethesda through Rockville and Gaithersburg to Frederick, anchored by proximity to NIH and FDA. Our corporate shuttle service for this sector handles a less predictable, more visitor-heavy travel pattern than a typical office-park account — scientific advisory board members, investors, regulatory personnel and executives moving between company campuses on a schedule that shifts as meetings run long or short.",
      "A standing shuttle account removes the friction of booking each visit individually, letting your company confirm a chauffeur and vehicle in advance for a known meeting calendar — board meetings, investor days, and recurring scientific advisory visits.",
    ],
    highlights: [
      "Chauffeurs experienced with the I-270 corridor from Bethesda through Gaithersburg to Frederick",
      "Hourly as-directed service built for a schedule that shifts as meetings run long or short",
      "Badge-aware timing for NIH and FDA-adjacent visitor appointments",
      "Coverage across BWI, DCA and Dulles for visitors flying in from different origin cities",
      "Pre-assigned chauffeurs for known board meeting and investor-day calendars",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "A corridor, not a single office park",
        paragraphs: [
          "Unlike a downtown corporate account centered on one address, a biotech corporate shuttle typically spans multiple sites along I-270 — a headquarters in Rockville or Gaithersburg, a lab facility elsewhere in the corridor, and sometimes a Frederick manufacturing site. Hourly as-directed service is the natural fit, since the chauffeur and vehicle stay with the visit as the day's schedule unfolds across more than one location.",
        ],
      },
      {
        h2: "Board meetings and investor days",
        paragraphs: [
          "Quarterly board meetings and investor site visits follow a predictable calendar for most biotech companies, which makes them well suited to advance scheduling rather than last-minute booking. Knowing the date in advance lets us pre-assign a chauffeur familiar with your specific campus and confirm vehicles ahead of a day when several visiting board members may be arriving at once.",
        ],
      },
      {
        h2: "NIH and FDA-adjacent visitor timing",
        paragraphs: [
          "Visits connected to NIH's Bethesda campus or FDA facilities require the same badge-appointment precision as other secured federal campuses — see our [hospital and medical center transportation](/hospital-medical-center-transportation-maryland) and [government contractor car service](/government-contractor-car-service-fort-meade-maryland) pages for how we handle comparably badge-sensitive scheduling elsewhere in Maryland.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "Can one shuttle account cover more than one company site along I-270?", a: "Yes. Hourly as-directed service keeps one chauffeur and vehicle with a visit across multiple I-270 corridor sites, which is common for board members and investors touring more than one location in a day." },
      { q: "Do you handle NIH or FDA-adjacent visitor timing?", a: "Yes. We time these pickups around confirmed visitor-appointment windows, the same badge-aware approach we use for other secured federal and medical campuses." },
      { q: "Can you pre-assign a chauffeur for a known board meeting calendar?", a: "Yes. A known meeting date lets us pre-assign a chauffeur familiar with your specific campus and confirm vehicle availability ahead of time." },
      { q: "Which airports do you cover for visiting biotech executives?", a: "BWI, DCA and Dulles are all covered under one account, so visitors flying in from different origin cities can be served without separate transportation arrangements." },
      { q: "Is pricing retainer-based or per-trip?", a: "Both are available. A standing retainer suits companies with regular visitor traffic, while a per-trip flat rate works for occasional bookings." },
    ],
    related: [
      { label: "I-270 Biotech Corridor Corporate Car Service", to: "/i-270-biotech-corridor-corporate-car-service-maryland" },
      { label: "Hospital & Medical Center Transportation Maryland", to: "/hospital-medical-center-transportation-maryland" },
      { label: "Bethesda Limo Service", to: "/bethesda-limo-service" },
      { label: "Rockville Limo Service", to: "/rockville-limo-service" },
      { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
      { label: "Dulles Airport Transfers", to: "/dulles-airport-transfers" },
    ],
    schema: {
      areaServed: ["Bethesda", "Rockville", "Gaithersburg", "Frederick"],
      serviceType: "Biotech and pharmaceutical corporate shuttle",
    },
  },
  // ───────────────────────── Event venue (1) ─────────────────────────
  // Rams Head On Stage in downtown Annapolis — a small listening-room venue,
  // distinct from Rams Head Live (the larger Power Plant Live room in
  // Baltimore already covered in concertVenues.js). Not previously mentioned
  // anywhere in the codebase.
  {
    slug: "rams-head-on-stage-annapolis-transportation",
    type: "event",
    name: "Rams Head On Stage",
    badge: "Annapolis Transportation",
    h1: "Rams Head On Stage Annapolis Transportation",
    metaTitle: "Rams Head On Stage Transportation | BWI Chauffeur",
    metaDescription: "Rams Head On Stage Annapolis transportation — downtown dinner-and-a-show drop-off, no City Dock parking search. Flat rates, 24/7. Call 877-609-1919.",
    stats: [
      { label: "Location", value: "West Street, downtown Annapolis" },
      { label: "From BWI", value: "19 mi · 30–40 minutes" },
      { label: "Venue", value: "Listening-room dinner & show" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Rams Head On Stage is a small, seated listening room on West Street in downtown Annapolis — not to be confused with the larger Rams Head Live room inside Baltimore's Power Plant Live entertainment complex. It pairs a sit-down dinner with an intimate show, typically with an early and a late seating most nights, which makes timing the drive and the parking search as much a part of the evening as the show itself.",
      "Downtown Annapolis's historic street grid was laid out for foot traffic and horses long before cars, and City Dock-area parking fills early most evenings regardless of what else is happening downtown. A chauffeured drop-off at the door removes that search entirely, timed to your actual seating rather than a guess.",
    ],
    highlights: [
      "Direct drop-off on West Street at the venue door, no City Dock parking search",
      "Chauffeurs who know Annapolis's one-way historic street grid and seating-time logistics",
      "Pickup staged for the actual end of the show, not the posted start time",
      "Sedans for couples, SUVs and Sprinter vans for larger dinner parties",
      "No surge pricing on a sold-out night or a weekend with multiple downtown events layered on top",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "A dinner-and-a-show venue, not a stand-and-watch club",
        paragraphs: [
          "Rams Head On Stage seats its audience at tables for a full dinner service built around the night's performance, with an early and a late seating common on busier dates. That structure means arrival timing matters more than it would at a standing-room club — a reservation tied to a specific seating time, with a drop-off planned around it rather than a loose estimate.",
        ],
      },
      {
        h2: "Annapolis's historic grid and City Dock parking",
        paragraphs: [
          "Downtown Annapolis's narrow, one-way colonial-era streets and the City Dock waterfront's limited parking fill early most evenings, especially when a Naval Academy event, a downtown dinner crowd or a weekend sailing event adds extra downtown traffic on the same night. Our chauffeurs route around the predictable choke points at Church Circle and Main Street and drop directly at the venue door on West Street rather than searching for street parking.",
        ],
      },
      {
        h2: "Pairing with a broader Annapolis evening",
        paragraphs: [
          "Many guests pair a Rams Head On Stage show with dinner elsewhere downtown first or a walk along the City Dock waterfront after. Hourly as-directed service keeps the same chauffeur with you for the whole evening rather than booking separate rides for each stop — see our [Annapolis Boat Show transportation](/annapolis-boat-show-transportation) page for how we handle other downtown Annapolis event traffic.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "How far is Rams Head On Stage from BWI Airport?", a: "About 19 miles, typically a 30 to 40 minute drive depending on traffic on Route 50 and into downtown Annapolis." },
      { q: "Is Rams Head On Stage the same venue as Rams Head Live in Baltimore?", a: "No. Rams Head On Stage is a small, seated dinner-and-show listening room on West Street in Annapolis. Rams Head Live is a separate, larger room inside Baltimore's Power Plant Live complex." },
      { q: "Is parking difficult near Rams Head On Stage?", a: "Yes, generally. Downtown Annapolis's historic street grid and City Dock-area parking fill early most evenings, which is why a direct drop-off at the venue door saves real time." },
      { q: "Can you time the pickup around a dinner-and-show seating?", a: "Yes. We plan the drop-off around your specific seating time rather than a loose estimate, and stage pickup for the actual end of the show." },
      { q: "Can you add a dinner stop or a City Dock walk before or after the show?", a: "Yes. Hourly as-directed service keeps the same chauffeur with you for a full downtown Annapolis evening rather than booking separate rides for each stop." },
    ],
    related: [
      { label: "Annapolis Boat Show Transportation", to: "/annapolis-boat-show-transportation" },
      { label: "Arnold Limo Service", to: "/arnold-limo-service" },
      { label: "Riva Limo Service", to: "/riva-limo-service" },
      { label: "Baltimore to Annapolis", to: "/baltimore-to-annapolis" },
      { label: "Rams Head Live Transportation", to: "/rams-head-live-transportation" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
    ],
    schema: {
      areaServed: ["Annapolis", "Anne Arundel County"],
      serviceType: "Dinner and show venue transportation",
    },
  },
];
