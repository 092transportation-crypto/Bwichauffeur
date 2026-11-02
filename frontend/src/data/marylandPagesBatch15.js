// Batch 15 (2026-11-02) — 3 new landing pages. Checked against every slug
// in marylandPages*.js, cities.js, bwiRoutes.js, airportPages.js,
// concertVenues.js, guides*.js and all blogPosts*.js files first (475
// existing slugs catalogued) — none duplicate an existing slug or
// near-duplicate keyword target. This repo's venue/vertical coverage is
// otherwise exhaustive (Camden Yards, Royal Farms Arena, M&T Bank Stadium,
// Fort McHenry, Inner Harbor, casinos, the zoo, Arundel Mills, every
// healthcare/law/tech/finance/biotech/real-estate corporate vertical, and
// nearly every named town in the service area already have a page) — these
// 3 are genuine remaining gaps: the National Aquarium has never had its own
// page (only ever a highlight bullet inside Inner Harbor touring content),
// and church/ministry group transportation and assisted-living/retirement
// community transportation are real recurring B2B verticals with no
// existing page at all.
//
// Same entry shape as earlier batches; concatenated into MARYLAND_PAGES.

const ECLASS = { name: "Mercedes-Benz E-Class", cls: "Business sedan", seats: 3, best: "solo executives and couples" };
const BMW7 = { name: "BMW 7 Series", cls: "First-class sedan", seats: 3, best: "VIP and executive travel" };
const ESCALADE = { name: "Lincoln Navigator", cls: "Premium SUV", seats: 6, best: "families and small groups with luggage" };
const SUBURBAN = { name: "Chevrolet Suburban", cls: "Luxury SUV", seats: 6, best: "groups with extra luggage or gear" };
const SPRINTER = { name: "Mercedes Sprinter van", cls: "Executive van", seats: 14, best: "groups, congregations and teams" };
const STRETCH = { name: "Stretch limousine", cls: "Limousine", seats: 8, best: "celebrations and special occasions" };

const FLEET_ALL = [ECLASS, BMW7, ESCALADE, SUBURBAN, SPRINTER, STRETCH];

export const MARYLAND_BATCH15 = [
  {
    slug: "national-aquarium-baltimore-transportation",
    type: "event",
    name: "National Aquarium",
    badge: "Baltimore Inner Harbor Transportation",
    h1: "National Aquarium Baltimore Transportation",
    metaTitle: "National Aquarium Baltimore Transportation | BWI Chauffeur",
    metaDescription: "Chauffeured drop-off at the National Aquarium on Baltimore's Inner Harbor — skip the garage search, flat rates, available 24/7. Call 877-609-1919 to book.",
    stats: [
      { label: "Location", value: "Pier 3, Inner Harbor, Baltimore" },
      { label: "From BWI", value: "11 mi · 15–20 minutes" },
      { label: "Pricing", value: "Flat rate — call for quote" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "The National Aquarium sits on Pier 3 at Baltimore's Inner Harbor, one of the region's most-visited attractions and one of the harder stops to drive to on a busy weekend, when its own garage and the surrounding Inner Harbor lots fill with aquarium visitors, Harborplace shoppers, and anyone else downtown that day all competing for the same handful of spaces. BWI Chauffeur provides door-to-door drop-off right at the aquarium entrance, with a pre-set pickup point arranged for when you are ready to leave — no garage to find on either end.",
      "Most aquarium visits are a few hours, not a full day, which makes it a trip that is easy to get wrong by driving yourself: you either pay for parking priced for a full day of use, or you rush the visit to beat a meter. A chauffeured drop-off removes that tradeoff entirely.",
    ],
    highlights: [
      "Drop-off directly at the National Aquarium entrance on Pier 3",
      "Pre-arranged pickup point set before you go in, away from the heaviest foot traffic",
      "Chauffeurs who know the Inner Harbor's one-way grid and where it backs up on weekends",
      "Easy to combine with Harborplace, Camden Yards, or Fells Point in the same booking",
      "Sedans, SUVs, Sprinter vans and stretch limousines for any group size, including school and camp groups",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "Why Inner Harbor Parking Is the Real Obstacle",
        paragraphs: [
          "On an ordinary day, the Inner Harbor's garages handle aquarium, Harborplace, and restaurant traffic without much trouble. On a busy weekend, a sold-out touring exhibit, or any day that overlaps with an Orioles or Ravens game nearby, those same garages fill fast and the surrounding one-way streets slow down any attempt to circle back for a spot. A chauffeured drop-off sidesteps the entire search — your visit starts the moment you step out at the entrance, not after twenty minutes of looking for parking.",
        ],
      },
      {
        h2: "A Few Hours, Priced and Timed Accordingly",
        paragraphs: [
          "Most aquarium visits run two to four hours, which is an awkward length for standalone parking — too long for a quick meter, often priced the same as a full day in a garage regardless of how long you actually stay. Point-to-point drop-off and a later pickup, or hourly as-directed service if you want the vehicle to wait nearby, both match the pricing to the actual length of your visit rather than a flat all-day garage rate.",
        ],
      },
      {
        h2: "Groups, School Trips, and Camps",
        paragraphs: [
          "The aquarium is a common destination for school field trips, camp groups, and family reunions, and a Mercedes Sprinter van keeps a group of up to 14 together for the ride in and out rather than coordinating several personal vehicles and separate parking. For chaperones managing a group of kids, one coordinated drop-off and pickup point is considerably easier to manage than a parking lot full of separately parked cars.",
        ],
      },
      {
        h2: "Making a Full Inner Harbor Day of It",
        paragraphs: [
          "The aquarium sits close enough to Harborplace, the Maryland Science Center, and Camden Yards that many visits are really a full Inner Harbor day built around the aquarium rather than a single stop. Hourly, as-directed booking keeps the same chauffeur and vehicle with you through lunch, a stop at Harborplace, and a game at Camden Yards if the timing lines up, instead of booking a new ride for every stop.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "Can you drop us directly at the National Aquarium entrance?", a: "Yes. Your chauffeur drops you at the Pier 3 entrance and arranges a pickup point nearby for when you are ready to leave." },
      { q: "How much does National Aquarium transportation cost?", a: "Point-to-point trips are one flat rate by vehicle and pickup address; if you want the car to wait through your visit, we quote an hourly rate instead. Call 877-609-1919 for a quote." },
      { q: "Can you handle a school or camp group trip to the aquarium?", a: "Yes. A Mercedes Sprinter van seats up to 14, keeping a group together for both the ride and a single coordinated drop-off and pickup point." },
      { q: "Can we combine the aquarium with other Inner Harbor stops?", a: "Yes. Hourly, as-directed service lets you add Harborplace, the Maryland Science Center, or Camden Yards to the same booking without a separate ride for each stop." },
      { q: "Is parking really difficult near the National Aquarium?", a: "On busy weekends, touring-exhibit days, and anytime a nearby Orioles or Ravens game overlaps, yes — nearby garages fill and the one-way grid slows a search for a spot. A chauffeured drop-off avoids it entirely." },
    ],
    related: [
      { label: "Private Chauffeur Day: Inner Harbor & Fells Point Touring", to: "/private-chauffeur-day-inner-harbor-fells-point-touring" },
      { label: "Orioles Game Day Car Service, Camden Yards", to: "/orioles-game-day-car-service-camden-yards" },
      { label: "Royal Farms Arena Transportation", to: "/royal-farms-arena-transportation" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
    ],
    schema: {
      areaServed: ["Baltimore", "Inner Harbor"],
      serviceType: "Limo and car service",
    },
  },
  {
    slug: "church-ministry-group-transportation-maryland",
    type: "service",
    name: "Church & Ministry Group Transportation",
    badge: "Maryland Service",
    h1: "Maryland Church & Ministry Group Transportation",
    metaTitle: "Church & Ministry Group Transportation Maryland | BWI Chauffeur",
    metaDescription: "Chauffeured transportation for church groups, choirs, youth ministries and regional conventions across Maryland. Flat rates, 24/7. Call 877-609-1919 now.",
    stats: [
      { label: "Coverage", value: "Maryland, DC & Northern Virginia" },
      { label: "Vehicles", value: "Sedans · SUVs · Sprinter vans" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Churches, ministries, and faith-based organizations across Maryland regularly need coordinated group transportation that a single rideshare booking cannot cover well: airport runs for a visiting pastor or guest speaker, a choir or youth group heading to a regional convention, or Sunday morning transportation for members who no longer drive themselves. BWI Chauffeur provides licensed, background-checked chauffeurs and a fleet that scales from a single sedan to a 14-passenger Sprinter van, with the same flat-rate, no-surge pricing standard on every trip.",
      "We regularly coordinate recurring Sunday service transportation, one-time convention and retreat trips, and airport transfers for visiting ministry staff, treating each the same way we would any other corporate or group account — reliable, scheduled, and billed clearly. Whether your congregation needs a single ride this week or a standing weekly schedule for the rest of the year, the booking process and pricing standard stay exactly the same.",
    ],
    highlights: [
      "Recurring Sunday service pickup for members who no longer drive themselves",
      "Airport transfers for visiting pastors, guest speakers, and ministry staff, with flight tracking included",
      "Mercedes Sprinter vans for choir trips, youth ministry outings, and regional conventions",
      "Corporate-style account billing available for churches booking regularly, consolidating multiple trips onto one invoice",
      "Sedans, SUVs, Sprinter vans and stretch limousines for any group size",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "Recurring Transportation for Members",
        paragraphs: [
          "A recurring weekly pickup for members who no longer drive, or who simply prefer not to navigate parking at a large church campus, is one of the most common requests we get from congregations. Setting up a standing weekly or biweekly schedule removes the need to re-book each time, and a consistent chauffeur builds familiarity with riders who appreciate seeing the same face each week.",
        ],
      },
      {
        h2: "Visiting Clergy and Guest Speakers",
        paragraphs: [
          "A visiting pastor or guest speaker flying in for a weekend service or a special event benefits from the same flight-tracked airport pickup we provide any traveler — a chauffeur staged and ready, timed from actual touchdown rather than the printed schedule, so a travel delay does not become the ministry's problem to manage on top of everything else involved in hosting a guest.",
        ],
      },
      {
        h2: "Choirs, Youth Groups, and Conventions",
        paragraphs: [
          "A choir heading to a regional performance, a youth ministry traveling to a conference, or a congregation attending a denominational convention all benefit from one coordinated Sprinter van rather than a caravan of personal vehicles or a church-owned van that someone on staff has to drive themselves. Our Sprinter vans seat up to 14, keeping a group together for the full trip with a professional chauffeur handling the driving.",
        ],
      },
      {
        h2: "Billing That Fits How Congregations Actually Operate",
        paragraphs: [
          "For churches and ministries that book transportation regularly rather than as a one-time event, an account consolidates billing onto a single invoice — useful for a finance committee or treasurer who needs a clean record of transportation spending rather than scattered individual receipts from different staff or volunteers who each booked separately.",
        ],
      },
      {
        h2: "Special Services and Milestone Events",
        paragraphs: [
          "Beyond regular Sunday transportation, congregations also call on us for the larger occasions tied to church life — a wedding held at the sanctuary, a funeral or memorial service, a baptism celebration, or an anniversary milestone for the church itself. Our stretch limousines and Sprinter vans handle the wedding party or family transportation for these occasions with the same professional, background-checked chauffeurs used for every other booking, just dressed for the formality the day calls for.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "Can you set up recurring Sunday transportation for members?", a: "Yes. We regularly set up standing weekly or biweekly pickup schedules for congregation members, with a consistent chauffeur whenever possible." },
      { q: "Do you handle airport pickups for visiting pastors or speakers?", a: "Yes. Flight tracking is included on every airport pickup, timed from actual touchdown, so a travel delay does not disrupt the visit you have planned around them." },
      { q: "Can you transport a choir or youth group to a convention?", a: "Yes. A Mercedes Sprinter van seats up to 14, keeping a group together for the full trip rather than coordinating multiple personal vehicles." },
      { q: "Can our church set up an account for regular billing?", a: "Yes. A corporate-style account consolidates trips onto one invoice, which works well for a finance committee or treasurer tracking transportation spending." },
      { q: "Is pricing the same as any other booking?", a: "Yes. Every trip is quoted the same flat rate with gratuity, tolls, and parking disclosed before confirmation — there is no different pricing structure for church or ministry bookings." },
    ],
    related: [
      { label: "How Corporate Car Accounts Work for Baltimore Businesses", to: "/blog/how-corporate-car-accounts-work-baltimore-businesses" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
      { label: "Baltimore Corporate Car Service", to: "/baltimore-corporate-car-service" },
      { label: "Hourly Chauffeur vs. Point-to-Point", to: "/blog/hourly-chauffeur-vs-point-to-point-which-do-you-need" },
    ],
    schema: {
      areaServed: ["Maryland", "Washington DC", "Northern Virginia"],
      serviceType: "Group and congregation transportation",
    },
  },
  {
    slug: "assisted-living-retirement-community-transportation-maryland",
    type: "service",
    name: "Assisted Living & Retirement Community Transportation",
    badge: "Maryland Service",
    h1: "Assisted Living & Retirement Community Transportation",
    metaTitle: "Assisted Living Transportation Maryland | BWI Chauffeur",
    metaDescription: "Chauffeured transportation for assisted living and retirement communities across Maryland — medical appointments, airport runs, family visits, always 24/7.",
    stats: [
      { label: "Coverage", value: "Maryland & DC region" },
      { label: "Vehicles", value: "Sedans · SUVs for easy access" },
      { label: "Pricing", value: "Flat rate or account billing" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Assisted living and retirement communities across Maryland regularly need reliable transportation beyond what an in-house shuttle can cover — a resident's medical appointment outside the facility's regular shuttle route, an airport pickup for a resident or visiting family member, or simply a resident who prefers a dedicated, unhurried ride over a shared facility shuttle. BWI Chauffeur works with facility staff and families directly to arrange this kind of transportation on a one-time or recurring basis.",
      "Every chauffeur is licensed and background-checked, and the same transparent, flat-rate pricing standard applies whether the trip is booked by a facility's activities coordinator, a family member, or the resident themselves. We work with facilities across Baltimore, Howard, Anne Arundel, and Montgomery Counties, as well as the wider DC region.",
    ],
    highlights: [
      "Medical appointment transportation outside a facility's regular shuttle schedule or route",
      "Airport pickups for residents traveling to visit family, and for family flying in to visit",
      "A patient, unhurried pace suited to residents who need extra time getting in and out of a vehicle",
      "Facility account billing available, consolidating resident trips onto one invoice for easier tracking",
      "Sedans and SUVs selected for easy entry and exit, not just capacity",
      "Maryland PSC Carrier No. 6325 — licensed, insured, background-checked chauffeurs",
    ],
    sections: [
      {
        h2: "When a Facility Shuttle Doesn't Cover the Trip",
        paragraphs: [
          "Most assisted living and retirement communities run their own shuttle for routine errands and nearby appointments, but that shuttle is built around a shared schedule and a limited set of regular destinations. A specialist appointment outside the usual route, a time outside the shuttle's hours, or simply a resident who needs to travel alone rather than on a shared run are all common gaps a dedicated chauffeured trip fills.",
        ],
      },
      {
        h2: "Airport Transportation for Residents and Visiting Family",
        paragraphs: [
          "A resident traveling to visit out-of-town family, or family flying in to visit a resident, both benefit from the same flight-tracked, door-to-door service we provide any traveler — timed from actual touchdown, with a chauffeur who can assist with luggage and walk a resident to the door rather than leaving them to navigate a curb alone.",
        ],
      },
      {
        h2: "A Pace That Respects the Rider",
        paragraphs: [
          "A chauffeured trip runs at the pace the resident actually needs — unhurried time getting in and out of the vehicle, a chauffeur who waits rather than watches the clock, and no pressure to move quickly through a pickup the way a crowded shuttle run sometimes requires. For a resident with mobility needs, that difference in pace is often the main reason a family or facility chooses a dedicated ride over the shared shuttle for a particular trip.",
        ],
      },
      {
        h2: "Working Directly With Facility Staff",
        paragraphs: [
          "We coordinate directly with a facility's activities coordinator, social worker, or concierge staff when that is easier than booking through the resident or family member each time, and we can set up recurring trips — a weekly appointment, a standing visit schedule — the same way we would for any other regular account.",
        ],
      },
      {
        h2: "Family Visits and Special Occasions",
        paragraphs: [
          "Beyond appointments and airport runs, families regularly book transportation around milestone occasions for a resident — a birthday gathering at a family member's home, a holiday visit, or bringing a resident to a grandchild's graduation or wedding. These trips get the same patient, unhurried standard as any other booking, with a chauffeur ready to help with getting in and out of the vehicle at both ends of the trip.",
        ],
      },
    ],
    vehicles: [ECLASS, BMW7, ESCALADE, SUBURBAN],
    faqs: [
      { q: "Can you take a resident to a medical appointment outside the facility shuttle route?", a: "Yes. We regularly arrange one-time or recurring medical appointment transportation for residents whose needs fall outside a facility's regular shuttle schedule." },
      { q: "Do you provide airport pickups for residents or visiting family?", a: "Yes, with the same flight tracking and complimentary waiting time included on any airport pickup, plus assistance with luggage and getting to the door." },
      { q: "Can facility staff book on behalf of a resident?", a: "Yes. We coordinate directly with activities coordinators, social workers, or concierge staff when that is easier than booking through the resident or family each time." },
      { q: "Is the pace of the ride adjusted for residents with mobility needs?", a: "Yes. Chauffeurs allow unhurried time getting in and out of the vehicle rather than operating on a tight shared-shuttle schedule." },
      { q: "Can a facility set up recurring billing for resident trips?", a: "Yes. Account billing consolidates trips onto one invoice, which many facilities and families find easier to track than individually booked rides." },
    ],
    related: [
      { label: "Senior & Elderly Car Service Maryland", to: "/senior-elderly-car-service-maryland" },
      { label: "Hospital & Medical Center Transportation Maryland", to: "/hospital-medical-center-transportation-maryland" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
      { label: "How Corporate Car Accounts Work for Baltimore Businesses", to: "/blog/how-corporate-car-accounts-work-baltimore-businesses" },
    ],
    schema: {
      areaServed: ["Maryland", "Washington DC"],
      serviceType: "Senior and medical transportation",
    },
  },
];
