// Batch 6 (2026-10-12): 2 city pages (St. Mary's County, previously uncovered)
// and 5 service pages (vehicle types + occasions not yet covered). Same entry
// shape as MARYLAND_PAGES; concatenated into it by marylandPages consumers.

const ECLASS = { name: "Mercedes-Benz E-Class", cls: "Business sedan", seats: 3, best: "solo executives and couples" };
const BMW7 = { name: "BMW 7 Series", cls: "First-class sedan", seats: 3, best: "VIP and executive travel" };
const ESCALADE = { name: "Lincoln Navigator", cls: "Premium SUV", seats: 6, best: "families and small groups with luggage" };
const SUBURBAN = { name: "Chevrolet Suburban", cls: "Luxury SUV", seats: 6, best: "airport runs with extra luggage or gear" };
const SPRINTER = { name: "Mercedes Sprinter van", cls: "Executive van", seats: 14, best: "wedding parties, corporate teams and groups" };
const STRETCH = { name: "Stretch limousine", cls: "Limousine", seats: 8, best: "proms, weddings and celebrations" };

const FLEET_ALL = [ECLASS, BMW7, ESCALADE, SUBURBAN, SPRINTER, STRETCH];

export const MARYLAND_BATCH6 = [
  // ───────────────────────────── CITIES ─────────────────────────────
  {
    slug: "lexington-park-limo-service",
    type: "city",
    name: "Lexington Park",
    badge: "St. Mary's County Limo Service",
    h1: "Lexington Park Limo Service",
    metaTitle: "Lexington Park MD Limo & Car Service | BWI Chauffeur",
    metaDescription: "Flat-rate limo and car service in Lexington Park, MD. Patuxent River NAS runs, BWI transfers, weddings & corporate. Call 877-609-1919.",
    stats: [
      { label: "To BWI", value: "About 75–100 min, depending on traffic" },
      { label: "Naval Air Station", value: "NAS Patuxent River — minutes away" },
      { label: "Pricing", value: "Flat rate — call for quote" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Lexington Park is the commercial and residential center of St. Mary's County, built up around Naval Air Station Patuxent River and the defense contractors — Lockheed Martin, Leidos, Naval Air Systems Command test teams — that work alongside it. BWI Chauffeur runs the long but straightforward route up MD-235 and MD-4 to Washington and Baltimore, picking up at homes near California, Great Mills and the base gates and quoting every trip as a single flat rate before you book.",
      "This is one of the farthest corners of our service area, and we treat it as a standing route rather than an exception. A chauffeur assigned the evening before, a vehicle staged ahead of your pickup time and a price that does not change because the drive is long — that is the same standard we hold on a 15-minute run from Laurel.",
    ],
    highlights: [
      "Flat-rate transfers from Lexington Park to BWI, Reagan National, Dulles and Washington DC",
      "Familiar with NAS Patuxent River gate procedures and visitor-badge timing for contractors and families",
      "Pickups across Lexington Park, California, Great Mills, Hollywood and Wildewood",
      "Flight tracking on every airport trip, with 45 minutes of complimentary wait on domestic flights and 60 on international",
      "Sprinter vans for change-of-command ceremonies, retirements and family events on base",
      "Licensed, background-checked chauffeurs and commercially insured vehicles under Maryland PSC Carrier No. 6325",
    ],
    sections: [
      {
        h2: "NAS Patuxent River and the defense contractor corridor",
        paragraphs: [
          "Patuxent River is a working test-and-evaluation base, which means a steady flow of change-of-command ceremonies, contractor visits, conferences and family days alongside the daily commute of civilian and military personnel. We provide non-badge-holder transportation to the visitor center and gate areas, timed around the extra screening time a base visit requires, and we work with the contractor offices along MD-235 and in California, MD on standing accounts for recurring travel to BWI and the Pentagon.",
        ],
      },
      {
        h2: "The long run to BWI, Reagan National and Dulles",
        paragraphs: [
          "Lexington Park sits roughly 75 to 100 minutes from BWI depending on traffic on MD-4, MD-5 and the Capital Beltway, and a similar or slightly shorter trip reaches Reagan National or Dulles through Southern Maryland and across the Potomac. Because this is a longer trip than most of our routes, we build extra schedule margin into early-morning departures and brief every chauffeur on the day's traffic pattern before pickup, rather than treating it as an afterthought tacked onto a shorter run.",
        ],
      },
      {
        h2: "Weddings, retirements and St. Mary's County events",
        paragraphs: [
          "St. Mary's County weddings often combine a waterfront ceremony near the Patuxent or Potomac rivers with a reception elsewhere in the county, and military retirement and change-of-command events at the base add their own guest-shuttle logistics. A 14-passenger Sprinter keeps a wedding party or a group of visiting family together for the day, and sedans or our stretch limousine handle the honored guests. Special-event and Sprinter bookings may be cancelled free of charge up to 12 hours before pickup.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "How much is a car service from Lexington Park to BWI?", a: "It is a single flat rate set by your pickup address and vehicle type, confirmed before you book. There is no surge pricing for the distance or the time of day. Call 877-609-1919 or request a quote online for the exact figure." },
      { q: "Can you pick up at the NAS Patuxent River gates?", a: "Yes, at the visitor areas and designated pickup points outside the secure gates. Tell dispatch if you are coordinating around a base event so we can build in extra time for gate screening." },
      { q: "How long is the drive to BWI or Washington DC from Lexington Park?", a: "Typically 75 to 100 minutes to BWI and a broadly similar range to Reagan National or Dulles, depending on traffic on MD-4, MD-5 and the Beltway. We back-time pickups from your flight and add margin for a trip this length." },
      { q: "Do you serve California, Great Mills and Hollywood as well as Lexington Park?", a: "Yes. We cover all of the Lexington Park area, including California, Great Mills, Hollywood and Wildewood, with the quote based on your exact address." },
      { q: "Can you handle a Sprinter van for a retirement or change-of-command event?", a: "Yes. We regularly provide Sprinter vans and sedans for base ceremonies and the family gatherings that follow them, coordinated around the ceremony schedule." },
    ],
    related: [
      { label: "Leonardtown Limo Service", to: "/leonardtown-limo-service" },
      { label: "La Plata Limo Service", to: "/limo-service-la-plata-md" },
      { label: "Waldorf Limo Service", to: "/limo-service-waldorf-md" },
      { label: "Prince Frederick Limo Service", to: "/limo-service-prince-frederick-md" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
      { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
      { label: "Maryland Hourly Chauffeur Service", to: "/maryland-hourly-chauffeur-service" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Lexington Park, MD", "St. Mary's County"], serviceType: "Limousine and car service" },
  },
  {
    slug: "leonardtown-limo-service",
    type: "city",
    name: "Leonardtown",
    badge: "St. Mary's County Limo Service",
    h1: "Leonardtown Limo Service",
    metaTitle: "Leonardtown MD Limo & Car Service | BWI Chauffeur",
    metaDescription: "Flat-rate limo and car service in Leonardtown, MD. St. Mary's County transfers to BWI, weddings & corporate travel. Call 877-609-1919.",
    stats: [
      { label: "To BWI", value: "About 80–105 min, depending on traffic" },
      { label: "County seat", value: "St. Mary's County courthouse & square" },
      { label: "Pricing", value: "Flat rate — call for quote" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Leonardtown is the St. Mary's County seat, a compact historic waterfront town built around the county courthouse, the town square and the public landing on Breton Bay. BWI Chauffeur serves Leonardtown and the surrounding farmland and riverfront communities with sedans, SUVs, Sprinter vans and a stretch limousine, routing north on MD-5 and MD-4 toward Washington and Baltimore and quoting the full trip as one flat rate before you book.",
      "Because Leonardtown sits at the far end of our Southern Maryland coverage, we plan every trip as its own standing route rather than squeezing it into a shorter schedule. Your chauffeur is assigned the evening before, the vehicle is staged ahead of pickup and the flat rate holds whether the drive is 20 minutes or nearly two hours.",
    ],
    highlights: [
      "Flat-rate transfers from Leonardtown to BWI, Reagan National, Dulles and Washington DC",
      "Pickups across Leonardtown, Hollywood, Mechanicsville and the Breton Bay waterfront",
      "Courthouse and attorney-client runs to the St. Mary's County Circuit Court on the town square",
      "Flight tracking on every airport trip, with 45 minutes of complimentary wait on domestic flights and 60 on international",
      "Sprinter vans for wedding parties headed to riverfront venues, stretch limousine for the wedding party itself",
      "Licensed, background-checked chauffeurs and commercially insured vehicles under Maryland PSC Carrier No. 6325",
    ],
    sections: [
      {
        h2: "The long run to BWI and the Washington airports",
        paragraphs: [
          "Leonardtown is roughly 80 to 105 minutes from BWI via MD-5 and MD-4 to the Capital Beltway, with Reagan National and Dulles a broadly similar drive across the Potomac through Charles County. We quote the complete door-to-terminal trip as a single flat rate and build real schedule margin into early-morning departures, since there is no shoulder time to recover if a pickup starts late on a route this long.",
        ],
      },
      {
        h2: "County seat and courthouse business",
        paragraphs: [
          "The St. Mary's County Circuit Court, the county government offices and the law firms along the town square generate a steady need for attorney, client and witness transportation, along with visitor runs for anyone flying into BWI, Reagan National or Dulles for a hearing. A sedan with a chauffeur who already knows the square's limited parking is often simpler than driving yourself and searching for a spot near the courthouse.",
        ],
      },
      {
        h2: "Weddings and events on Breton Bay",
        paragraphs: [
          "Leonardtown's waterfront venues on Breton Bay and the farms and historic properties nearby host weddings that often combine a ceremony at one location with a reception at another a short drive away. A 14-passenger Sprinter keeps the wedding party moving between both without anyone navigating rural roads in formal wear, and our stretch limousine is a popular choice for the couple. Special-event and Sprinter bookings may be cancelled free of charge up to 12 hours before pickup.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "How much is a car service from Leonardtown to BWI?", a: "It is a single flat rate based on your pickup address and vehicle choice, confirmed before you book and unaffected by the length of the drive. Call 877-609-1919 or request a quote online for the exact figure." },
      { q: "How long does the drive from Leonardtown to BWI or Washington DC take?", a: "Typically 80 to 105 minutes to BWI, and a broadly similar range to Reagan National or Dulles, depending on traffic on MD-5, MD-4 and the Beltway. We back-time pickups accordingly." },
      { q: "Do you serve courthouse and attorney travel in Leonardtown?", a: "Yes. We regularly provide sedans for attorney, client and witness transportation to the St. Mary's County Circuit Court and the offices around the town square." },
      { q: "Can you pick up at a waterfront wedding venue on Breton Bay?", a: "Yes. We serve the Breton Bay waterfront venues and the farms and historic properties nearby, with Sprinter vans for the wedding party and a stretch limousine for the couple." },
      { q: "Do you cover Hollywood and Mechanicsville as well as Leonardtown proper?", a: "Yes. Hollywood, Mechanicsville and the surrounding St. Mary's County communities are all part of our Leonardtown coverage, with the quote based on your exact address." },
    ],
    related: [
      { label: "Lexington Park Limo Service", to: "/lexington-park-limo-service" },
      { label: "La Plata Limo Service", to: "/limo-service-la-plata-md" },
      { label: "Waldorf Limo Service", to: "/limo-service-waldorf-md" },
      { label: "Prince Frederick Limo Service", to: "/limo-service-prince-frederick-md" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
      { label: "Maryland Wedding Limo", to: "/maryland-wedding-limo" },
      { label: "Maryland Hourly Chauffeur Service", to: "/maryland-hourly-chauffeur-service" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Leonardtown, MD", "St. Mary's County"], serviceType: "Limousine and car service" },
  },
  // ───────────────────────────── SERVICES ─────────────────────────────
  {
    slug: "maryland-sprinter-van-service",
    type: "service",
    name: "Maryland Sprinter Van Service",
    badge: "Maryland Service",
    h1: "Maryland Sprinter Van & Group Transportation",
    metaTitle: "Maryland Sprinter Van Rental | BWI Chauffeur",
    metaDescription: "Chauffeured Mercedes Sprinter vans across Maryland for weddings, corporate groups & airport runs. Seats up to 14. Call 877-609-1919.",
    stats: [
      { label: "Capacity", value: "Up to 14 passengers" },
      { label: "Coverage", value: "Maryland, DC, N. Virginia & Delaware" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "A Mercedes Sprinter van is the right call whenever a group needs to move as one unit instead of splitting across several rideshares. BWI Chauffeur operates Sprinter vans in shuttle, executive and limo-style configurations, seating up to 14 passengers with room for luggage, golf bags, wedding décor or AV equipment, and a single professional chauffeur who already knows the destination.",
      "Sprinter bookings work as a flat-rate transfer for a single pickup and drop-off, or hourly for a day that includes several stops. Either way, the rate and the vehicle are confirmed before you book, and the van arrives detailed and ready rather than assembled at the last minute from whatever is available.",
    ],
    highlights: [
      "Seats up to 14 passengers with luggage, golf bags or equipment room to spare",
      "Shuttle, executive and limo-style Sprinter configurations available",
      "One chauffeur and one vehicle for the whole group — no splitting across multiple cars",
      "Flat-rate transfers or hourly as-directed service for multi-stop days",
      "Common for weddings, corporate roadshows, airport group arrivals and sports outings",
      "Licensed, background-checked chauffeurs, commercially insured fleet, Maryland PSC Carrier No. 6325",
    ],
    sections: [
      {
        h2: "Weddings and wedding parties",
        paragraphs: [
          "A Sprinter van is the standard choice for moving a wedding party between a hotel, a ceremony venue and a reception without anyone arriving separately or getting lost in an unfamiliar town. It also doubles as a guest shuttle between a hotel block and the venue, which keeps rental cars and designated drivers out of the equation entirely for the whole wedding weekend.",
        ],
      },
      {
        h2: "Corporate groups and airport arrivals",
        paragraphs: [
          "Roadshow teams, conference delegations and client groups flying into BWI, Reagan National or Dulles together move faster and more predictably in one Sprinter than in several separate cars arriving at different times. The same van can then run a multi-stop corporate day — hotel, meetings, dinner — on an hourly booking, with the chauffeur holding the schedule rather than each traveler coordinating a new ride.",
        ],
      },
      {
        h2: "Sports outings, tours and group nights out",
        paragraphs: [
          "Game-day groups heading to M&T Bank Stadium or Camden Yards, wine-tasting parties, bachelor and bachelorette groups and family reunions all use the same vehicle for the same reason: everyone leaves together, nobody drives, and the group stays intact for the whole outing rather than splitting into separate cars that have to regroup later.",
        ],
      },
      {
        h2: "Booking the right configuration",
        paragraphs: [
          "Tell us the group size, the occasion and whether luggage, golf bags or decorations are coming along, and we will recommend shuttle, executive or limo-style seating before you book rather than after the van shows up. Most Sprinter reservations are flat-rate for a single pickup and drop-off, or hourly as-directed when the day includes more than one stop — either way, the rate is confirmed in writing before the day arrives.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "How many people fit in a Sprinter van?", a: "Our Mercedes Sprinter vans seat up to 14 passengers, depending on configuration, with room for luggage, golf bags or equipment. Tell us your group size and we will confirm the right layout." },
      { q: "Can I book a Sprinter for just an airport transfer?", a: "Yes. A Sprinter works as a flat-rate, point-to-point transfer the same way a sedan does — you do not need an hourly booking unless your day includes multiple stops." },
      { q: "What is the difference between shuttle, executive and limo-style Sprinters?", a: "Shuttle configuration maximizes seating for group transfers, executive configuration offers more legroom and amenities for corporate travel, and limo-style adds lounge seating for celebrations. We will recommend the best fit for your group and occasion." },
      { q: "Can the Sprinter make several stops in one booking?", a: "Yes, with an hourly as-directed booking. The chauffeur and vehicle stay with your group for the full block of time, adding, dropping or reordering stops as the day requires." },
      { q: "Do you provide Sprinter vans for wedding guest shuttles?", a: "Yes. This is one of our most common Sprinter bookings — running guests between a hotel block and the venue throughout a wedding weekend so no one needs a rental car." },
    ],
    related: [
      { label: "Maryland Stretch Limo Rental", to: "/maryland-stretch-limo-rental" },
      { label: "Maryland Wedding Limo", to: "/maryland-wedding-limo" },
      { label: "Maryland Hourly Chauffeur Service", to: "/maryland-hourly-chauffeur-service" },
      { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
      { label: "Baltimore Sports Transportation", to: "/baltimore-sports-transportation" },
      { label: "Our Fleet", to: "/luxury-fleet" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Maryland"], serviceType: "Sprinter van and group transportation" },
  },
  {
    slug: "maryland-stretch-limo-rental",
    type: "service",
    name: "Maryland Stretch Limousine Rental",
    badge: "Maryland Service",
    h1: "Maryland Stretch Limousine Rental & Car Service",
    metaTitle: "Maryland Stretch Limo Rental | BWI Chauffeur",
    metaDescription: "Classic stretch limousine rental in Maryland for weddings, proms & milestone celebrations. Red carpet service. Call 877-609-1919.",
    stats: [
      { label: "Seats", value: "Up to 8 passengers" },
      { label: "Coverage", value: "Maryland, DC & N. Virginia" },
      { label: "Pricing", value: "Hourly — call for quote" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "Some occasions call for the classic look of a stretch limousine rather than a sedan or SUV. BWI Chauffeur's stretch limousine seats up to eight passengers in lounge-style seating, with a professional chauffeur in formal attire and the same flat or hourly pricing we quote on every other vehicle in the fleet — no hidden fees tacked on because the car has a longer wheelbase.",
      "The limousine is booked almost exclusively by the hour, since the occasions it suits best — a wedding, a prom, a milestone birthday — involve a photo stop, a red carpet moment or several destinations in one evening rather than a single point-to-point transfer.",
    ],
    highlights: [
      "Classic stretch limousine seating up to eight passengers in lounge-style comfort",
      "Red carpet service and complimentary champagne available for weddings and celebrations",
      "Chauffeur in formal attire for the occasion, not just a driver in a plain vehicle",
      "Hourly booking keeps the same limousine and chauffeur with you for the whole event",
      "Popular for weddings, proms, quinceañeras, anniversaries and milestone birthdays",
      "Licensed, background-checked chauffeurs and commercially insured vehicles, Maryland PSC Carrier No. 6325",
    ],
    sections: [
      {
        h2: "Weddings and the bridal party",
        paragraphs: [
          "The stretch limousine remains the traditional choice for the couple on a wedding day, arriving at the ceremony and departing the reception with a visible sense of occasion that a plain sedan does not carry. Many couples pair the limousine for themselves with a Sprinter van for the rest of the wedding party, so everyone travels in a vehicle suited to their role in the day.",
        ],
      },
      {
        h2: "Prom night and quinceañera celebrations",
        paragraphs: [
          "Prom groups and quinceañera courts both favor the limousine for the same reason: it turns the ride itself into part of the celebration, with a red carpet arrival and photos before the formal event begins. We coordinate pickup windows carefully on prom weekends and quinceañera season, when limousines are in the highest demand across the region.",
        ],
      },
      {
        h2: "Anniversaries and milestone birthdays",
        paragraphs: [
          "A stretch limousine for a milestone 30th, 40th or 50th birthday or a significant anniversary signals that the evening is different from an ordinary night out, and it works equally well for a dinner-and-show evening in Baltimore or Annapolis or for a longer tour of several stops on an hourly booking.",
        ],
      },
      {
        h2: "What to expect when you book",
        paragraphs: [
          "The limousine arrives detailed and ready, with a chauffeur in formal attire who introduces themselves before the event rather than simply pulling up at pickup time. We confirm the hourly minimum, the route and any champagne or decoration requests ahead of the date, so the only thing left to plan on the day itself is the celebration.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "How many passengers fit in the stretch limousine?", a: "Our stretch limousine seats up to eight passengers in lounge-style seating. Larger groups typically pair the limousine with a Sprinter van for the rest of the party." },
      { q: "Can I book the limousine for just a short ride, or does it require an hourly minimum?", a: "The limousine is generally booked hourly with a minimum, since it suits occasions with a photo stop or several destinations rather than a single transfer. Call 877-609-1919 and we will quote the minimum for your date." },
      { q: "Do you provide champagne or decorations in the limousine?", a: "Complimentary champagne and simple decorations are available on request for weddings and celebrations — let us know when you book." },
      { q: "How far in advance should I book a limousine for prom or quinceañera season?", a: "As early as possible. Limousines are the first vehicles to sell out during prom weekends and quinceañera season, so booking as soon as the date is set is strongly recommended." },
      { q: "Is the limousine available outside Maryland?", a: "Yes, we serve Washington DC and Northern Virginia with the limousine as well, subject to availability — call to confirm for your date and destination." },
    ],
    related: [
      { label: "Maryland Sprinter Van Service", to: "/maryland-sprinter-van-service" },
      { label: "Maryland Wedding Limo", to: "/maryland-wedding-limo" },
      { label: "Maryland Prom Limo", to: "/maryland-prom-limo" },
      { label: "Sweet 16 & Quinceañera Limo", to: "/sweet-16-quinceanera-limo-maryland" },
      { label: "Maryland Anniversary Limo", to: "/maryland-anniversary-limo" },
      { label: "Our Fleet", to: "/luxury-fleet" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Maryland"], serviceType: "Stretch limousine rental" },
  },
  {
    slug: "maryland-golf-outing-transportation",
    type: "service",
    name: "Maryland Golf Outing Transportation",
    badge: "Maryland Service",
    h1: "Maryland Country Club & Golf Course Car Service",
    metaTitle: "Country Club & Golf Course Car Service | MD",
    metaDescription: "Chauffeured transportation for golf outings & country club events across Maryland. SUVs with room for clubs. Call 877-609-1919.",
    stats: [
      { label: "Coverage", value: "Maryland, DC & N. Virginia" },
      { label: "Vehicles", value: "SUVs · Sprinters · Sedans" },
      { label: "Pricing", value: "Flat rate or hourly" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "A corporate golf outing or a country club event runs more smoothly when nobody is worrying about who drove, where the clubs fit, or how the group gets from the clubhouse to dinner afterward. BWI Chauffeur provides SUVs with real cargo room for golf bags and a Sprinter van for larger foursome groups, serving private clubs and public courses across Maryland, with pricing confirmed before the round even starts.",
      "Most golf bookings are hourly, since the day typically includes a round, a clubhouse lunch or dinner, and sometimes an airport transfer for visiting clients or out-of-town players. One chauffeur handles the whole itinerary, including the wait during the round, so the group never has to think about the return trip.",
    ],
    highlights: [
      "SUVs with genuine cargo room for golf bags, and Sprinter vans for larger foursome groups",
      "Serves private country clubs and public courses across Maryland, DC and Northern Virginia",
      "Hourly booking covers the round, the clubhouse meal and any additional stops",
      "Corporate outings, client entertainment and charity tournaments are regular bookings",
      "Airport transfers for visiting clients or out-of-town players arriving for the event",
      "Licensed, background-checked chauffeurs and commercially insured vehicles, Maryland PSC Carrier No. 6325",
    ],
    sections: [
      {
        h2: "Corporate outings and client entertainment",
        paragraphs: [
          "A client or team golf outing reflects on the host the same way a client airport pickup does, and a chauffeured SUV removes the one variable that can go wrong — someone driving after the clubhouse bar, or a visiting client unsure how to find the course. We coordinate pickup from the office, the airport or a hotel, wait through the round if requested, and handle the drive to dinner afterward.",
        ],
      },
      {
        h2: "Charity tournaments and member events",
        paragraphs: [
          "Charity golf tournaments and private-club member events often involve a larger group arriving at once, sometimes from out of town. A Sprinter van keeps a foursome or a larger party together for the drive out, and multiple vehicles can be coordinated for bigger field events so every group arrives on schedule for a shotgun start.",
        ],
      },
      {
        h2: "Visiting players and airport connections",
        paragraphs: [
          "Out-of-town golfers flying into BWI, Reagan National or Dulles for a tournament or a member-guest weekend can be picked up directly at the airport and driven to the course or the hotel, with clubs and luggage handled by the chauffeur. The same vehicle can then run the return trip to the airport once the event wraps up.",
        ],
      },
      {
        h2: "Planning a golf outing booking",
        paragraphs: [
          "Tell us the course, the tee time and whether the chauffeur should wait through the round or simply handle drop-off and a separate pickup, and we will quote the booking as flat-rate or hourly depending on what fits the day. Corporate accounts with recurring golf outings can set up standing billing so each event is a quick confirmation rather than a new booking conversation.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "Will my golf clubs actually fit in the vehicle?", a: "Yes. Our SUVs have genuine cargo room for golf bags, and the Sprinter van comfortably carries clubs for a full foursome or larger group. Tell us the group size when you book and we will recommend the right vehicle." },
      { q: "Can the chauffeur wait through the round?", a: "Yes, with an hourly booking the chauffeur waits nearby during the round and is ready at the clubhouse when you finish, then continues to lunch, dinner or the airport." },
      { q: "Do you serve private country clubs as well as public courses?", a: "Yes. We serve both private clubs and public courses across Maryland, DC and Northern Virginia — just provide the course name and tee time when you book." },
      { q: "Can you handle a larger charity tournament field with several groups?", a: "Yes. We regularly coordinate multiple vehicles for charity tournaments and member-guest events so each group or foursome arrives on time for a shotgun start." },
      { q: "Can you pick up visiting players directly from the airport?", a: "Yes. We provide direct transfers from BWI, Reagan National or Dulles to the course or hotel for out-of-town players, with clubs and luggage handled at pickup." },
    ],
    related: [
      { label: "Maryland Sprinter Van Service", to: "/maryland-sprinter-van-service" },
      { label: "Maryland Corporate Car Service", to: "/maryland-corporate-car-service" },
      { label: "Maryland Hourly Chauffeur Service", to: "/maryland-hourly-chauffeur-service" },
      { label: "Maryland Wine Tour Transportation", to: "/maryland-wine-tour-transportation" },
      { label: "BWI Airport Car Service", to: "/bwi-airport-car-service" },
      { label: "Our Fleet", to: "/luxury-fleet" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Maryland"], serviceType: "Golf outing and country club transportation" },
  },
  {
    slug: "bachelorette-party-limo-maryland",
    type: "service",
    name: "Maryland Bachelorette Party Limo",
    badge: "Maryland Service",
    h1: "Maryland Bachelorette Party Limo Service",
    metaTitle: "Maryland Bachelorette Party Limo | BWI Chauffeur",
    metaDescription: "Bachelorette party limo & Sprinter service across Maryland — Fells Point, Federal Hill, Annapolis & wineries. Call 877-609-1919.",
    stats: [
      { label: "Coverage", value: "Baltimore, Annapolis & statewide" },
      { label: "Vehicles", value: "Sedans · SUVs · Sprinters · Limos" },
      { label: "Pricing", value: "Hourly — call for quote" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "A bachelorette party works best when nobody in the group has to be the designated driver and nobody has to coordinate separate rideshares between stops. BWI Chauffeur provides sedans, SUVs, Sprinter vans and a stretch limousine for bachelorette parties across Maryland, booked by the hour so the same chauffeur and vehicle stay with the group from the first stop to the last.",
      "Popular itineraries combine a few of the region's best nightlife areas and wine country stops in one evening or afternoon: Fells Point and Federal Hill in Baltimore, Main Street in Annapolis, and the wineries along the Maryland wine trail. We route the day, handle the waiting, and get everyone home safely at the end.",
    ],
    highlights: [
      "Hourly booking keeps one chauffeur and one vehicle with the group all day or night",
      "Popular routes include Fells Point, Federal Hill, Annapolis Main Street and Maryland wineries",
      "Sprinter van or stretch limousine options for larger bridal parties",
      "No one in the group needs to be the designated driver",
      "Decorations and complimentary champagne available on request",
      "Licensed, background-checked chauffeurs and commercially insured vehicles, Maryland PSC Carrier No. 6325",
    ],
    sections: [
      {
        h2: "Baltimore nightlife: Fells Point and Federal Hill",
        paragraphs: [
          "Fells Point's cobblestone bars and Federal Hill's rooftop lounges are two of the most requested bachelorette circuits in the region, and both have limited parking that makes a chauffeured vehicle the easier choice over driving yourselves. The chauffeur holds a spot near each stop and is ready the moment the group is ready to move on, rather than the group waiting curbside for a new rideshare each time.",
        ],
      },
      {
        h2: "Annapolis and the waterfront",
        paragraphs: [
          "Annapolis's Main Street bars and the City Dock waterfront make for a scenic bachelorette afternoon or evening, often paired with a sailing charter or a dinner reservation. We coordinate the pickup around whichever activity anchors the day and handle the stops in between.",
        ],
      },
      {
        h2: "Maryland wine country",
        paragraphs: [
          "A wine-tasting bachelorette day along the Maryland wine trail is one of the most common Sprinter bookings we run, since nobody wants to be the one not drinking at a tasting. We route between two or three wineries, build in time at each, and handle the ride home afterward — the same approach used on our general Maryland wine tour transportation.",
        ],
      },
      {
        h2: "Planning the itinerary",
        paragraphs: [
          "Send us a rough idea of the stops — bars, wineries, a dinner reservation — and roughly how long the group wants at each, and we will quote the hourly booking and suggest timing so nobody feels rushed at the first stop or stuck without a plan for the last one. The itinerary can still flex on the day itself; the chauffeur and vehicle stay with the group regardless of how the order changes.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "How does pricing work for a bachelorette party booking?", a: "Bachelorette bookings are hourly with a minimum, confirmed before you book. The rate depends on the vehicle and the number of hours — call 877-609-1919 for a quote based on your itinerary." },
      { q: "Can we visit several bars or wineries in one booking?", a: "Yes. That is exactly what an hourly booking is for — the same chauffeur and vehicle stay with the group for every stop on the itinerary." },
      { q: "What vehicle is best for a bachelorette party?", a: "It depends on group size. Sedans suit a small group, SUVs add room for a few more, and a Sprinter van or stretch limousine is typical for a full bridal party." },
      { q: "Can you provide decorations or champagne?", a: "Yes, simple decorations and complimentary champagne are available on request — let us know when you book." },
      { q: "How far in advance should we book a bachelorette party vehicle?", a: "As early as possible for spring and summer weekends, which are the busiest season for both bachelorette parties and weddings across the region." },
    ],
    related: [
      { label: "Maryland Wine Tour Transportation", to: "/maryland-wine-tour-transportation" },
      { label: "Maryland Stretch Limo Rental", to: "/maryland-stretch-limo-rental" },
      { label: "Maryland Sprinter Van Service", to: "/maryland-sprinter-van-service" },
      { label: "Maryland Wedding Limo", to: "/maryland-wedding-limo" },
      { label: "Annapolis Limo Service", to: "/limo-service-annapolis-md" },
      { label: "Our Fleet", to: "/luxury-fleet" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Maryland"], serviceType: "Bachelorette party limousine service" },
  },
  {
    slug: "sweet-16-quinceanera-limo-maryland",
    type: "service",
    name: "Maryland Sweet 16 & Quinceañera Limo",
    badge: "Maryland Service",
    h1: "Maryland Sweet 16 & Quinceañera Limo Service",
    metaTitle: "Sweet 16 & Quinceañera Limo Maryland | BWI Chauffeur",
    metaDescription: "Sweet 16 & quinceañera limo service across Maryland. Red carpet arrivals for the honoree & court. Call 877-609-1919 to book.",
    stats: [
      { label: "Coverage", value: "Maryland, DC & N. Virginia" },
      { label: "Vehicles", value: "Limousine · Sprinter · SUVs" },
      { label: "Pricing", value: "Hourly — call for quote" },
      { label: "Availability", value: "24 / 7" },
    ],
    intro: [
      "A Sweet 16 or quinceañera is built around a grand entrance, and BWI Chauffeur provides the vehicle to match it: a stretch limousine for the honoree, or a Sprinter van when the full court needs to travel together between the church or hall ceremony and the reception. Both are booked hourly, with the chauffeur in formal attire and the rate confirmed before the event.",
      "Maryland's banquet halls and church-to-hall quinceañera traditions mean the vehicle often needs to make more than one stop — a photo location, a religious ceremony, then the reception. We plan the full route in advance so the honoree and the court arrive exactly on schedule at each one.",
    ],
    highlights: [
      "Stretch limousine for the honoree, Sprinter van for the full court or extended family",
      "Red carpet arrival at the reception hall, with complimentary champagne for the toast",
      "Routes planned in advance for ceremony, photo stops and the reception venue",
      "Serves Maryland's banquet halls and church-to-hall quinceañera traditions",
      "Chauffeur in formal attire for the occasion",
      "Licensed, background-checked chauffeurs and commercially insured vehicles, Maryland PSC Carrier No. 6325",
    ],
    sections: [
      {
        h2: "The grand entrance",
        paragraphs: [
          "Both a Sweet 16 and a quinceañera are built around the moment the honoree arrives, and the stretch limousine is chosen specifically for that red carpet effect in front of family and friends. We coordinate the exact arrival time with the event planner or family so the entrance lines up with the music and the announcement, not a few minutes early or late.",
        ],
      },
      {
        h2: "Photos, the ceremony and the court",
        paragraphs: [
          "Quinceañera celebrations in particular often include a religious ceremony before the reception, plus a photo session at a park or scenic location in between. A Sprinter van keeps the full court of damas and chambelanes together for every stop, while the honoree rides in the limousine, and we plan the order of stops with the family in advance so nothing runs behind schedule.",
        ],
      },
      {
        h2: "Banquet halls across Maryland",
        paragraphs: [
          "Maryland's event halls across the Baltimore and Washington suburbs host Sweet 16 and quinceañera receptions most weekends during peak season, and we know the loading areas and timing quirks of the region's most-booked venues. Tell us the hall name when you book and we will plan the arrival accordingly.",
        ],
      },
      {
        h2: "Booking for the season",
        paragraphs: [
          "Spring is the busiest stretch for Sweet 16s and quinceañeras alike, overlapping with prom season for the same pool of limousines and Sprinter vans, so the families who book earliest get first choice of vehicle and arrival time. We confirm the hourly rate, the route and the exact grand-entrance timing with the family well before the event, not the week of.",
        ],
      },
    ],
    vehicles: FLEET_ALL,
    faqs: [
      { q: "What vehicle is typical for a Sweet 16 or quinceañera?", a: "The stretch limousine is the most common choice for the honoree, often paired with a Sprinter van for the court or extended family. We will recommend a combination based on your group size." },
      { q: "Can you coordinate an exact arrival time for the grand entrance?", a: "Yes. We work with the family or event planner to time the arrival precisely with the music and announcement, and we plan backward from that moment through any earlier stops." },
      { q: "Do you serve both the religious ceremony and the reception?", a: "Yes. Many quinceañera bookings include a stop at the ceremony before the reception, plus a photo session — we plan the full route and timing in advance." },
      { q: "Can the whole court ride together?", a: "Yes, in a Sprinter van that seats up to 14, so the damas and chambelanes travel as a group rather than splitting across multiple cars." },
      { q: "How far in advance should we book for prom or quinceañera season?", a: "As early as possible — spring is the busiest season for Sweet 16s, quinceañeras and proms together, and limousines are the first vehicles to sell out." },
    ],
    related: [
      { label: "Maryland Stretch Limo Rental", to: "/maryland-stretch-limo-rental" },
      { label: "Maryland Sprinter Van Service", to: "/maryland-sprinter-van-service" },
      { label: "Maryland Prom Limo", to: "/maryland-prom-limo" },
      { label: "Maryland Wedding Limo", to: "/maryland-wedding-limo" },
      { label: "Maryland Anniversary Limo", to: "/maryland-anniversary-limo" },
      { label: "Our Fleet", to: "/luxury-fleet" },
      { label: "Book a Ride", to: "/booking" },
    ],
    schema: { areaServed: ["Maryland"], serviceType: "Sweet 16 and quinceañera limousine service" },
  },
];
