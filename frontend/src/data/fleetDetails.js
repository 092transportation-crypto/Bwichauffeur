// Full spec sheet for each of the 7 fleet categories, rendered by
// src/pages/VehicleDetailPage.jsx at /fleet/:slug. Slugs match the `slug`
// field on each card in src/components/Fleet.jsx — keep both in sync.
//
// `startingPrice` figures are derived from the real per-mile rate table in
// api/_pricing.js (lowest 0–9.9 mile bracket, after the standard 10%
// auto-discount, rounded down to a clean number) so the number shown here
// never overstates what a short local trip actually costs. They intentionally
// read as a floor ("Starting at"), not a quote — the booking form always
// gives the exact flat rate before checkout.
export const FLEET_DETAILS = {
  'business-sedan': {
    slug: 'business-sedan',
    category: 'Business Sedan',
    name: 'Mercedes-Benz E-Class',
    nameNote: '2023+ or similar',
    tagline: 'The everyday choice for solo executives and business travelers.',
    heroImage: '/images/mercedes-e-class.webp',
    gallery: ['/images/mercedes-e-class.webp'],
    passengers: 3,
    luggage: 2,
    startingPrice: 'Starting at $95',
    bestFor: ['Airport Transfers', 'Corporate Travel', 'Point-to-Point Rides', 'Business Meetings'],
    description: [
      "The Mercedes-Benz E-Class is our most-booked vehicle, and for good reason: it's the right size for one or two travelers with standard luggage, quiet enough to take a call in, and sized to move through city traffic and airport curbs without the bulk of an SUV.",
      "Every E-Class in our fleet runs 2023 or newer, is detailed before each trip, and is driven by a licensed, background-checked chauffeur who tracks your flight and adjusts pickup automatically for early arrivals or delays.",
    ],
    features: [
      'Leather seating',
      'Free Wi-Fi',
      'Phone chargers (USB-C & Lightning)',
      'Climate-controlled interior',
      'Bottled water',
      'Tinted privacy glass',
    ],
    specs: [
      { label: 'Vehicle Class', value: 'Executive Sedan' },
      { label: 'Seating Capacity', value: '3 passengers' },
      { label: 'Luggage Capacity', value: '2 standard suitcases' },
      { label: 'Doors', value: '4' },
    ],
  },

  'first-class-sedan': {
    slug: 'first-class-sedan',
    category: 'First Class Sedan',
    name: 'BMW 7 Series / Mercedes S-Class',
    nameNote: '2023+ or similar',
    tagline: 'The pinnacle of sedan luxury for discerning travelers.',
    heroImage: '/images/bmw-7-series.webp',
    gallery: ['/images/bmw-7-series.webp', '/images/mercedes-sclass.webp'],
    passengers: 3,
    luggage: 2,
    startingPrice: 'Starting at $135',
    bestFor: ['Executive Travel', 'VIP Airport Arrivals', 'Weddings', 'Date Nights'],
    description: [
      "When the trip calls for more than a standard sedan, the BMW 7 Series or Mercedes S-Class delivers it — extended rear legroom, a hushed cabin, and the kind of presence that matters when you're picking up a client, arriving at a wedding, or closing out a long travel day.",
      "We rotate between the 7 Series and S-Class depending on availability, both maintained to the same standard: late-model, detailed before every trip, and driven by a chauffeur trained for a first-class experience from curb to destination.",
    ],
    features: [
      'Premium leather interior',
      'Extended rear legroom',
      'Free Wi-Fi',
      'Phone chargers (USB-C & Lightning)',
      'Rear climate controls',
      'Bottled water',
      'Tinted privacy glass',
    ],
    specs: [
      { label: 'Vehicle Class', value: 'Flagship Luxury Sedan' },
      { label: 'Seating Capacity', value: '3 passengers' },
      { label: 'Luggage Capacity', value: '2 standard suitcases' },
      { label: 'Doors', value: '4' },
    ],
  },

  'midsize-suv': {
    slug: 'midsize-suv',
    category: 'Midsize SUV',
    name: 'Lincoln Nautilus',
    nameNote: '2023+ or similar',
    tagline: 'The balance of comfort and practicality for families and extra luggage.',
    heroImage: '/images/lincoln-nautilus.webp',
    gallery: ['/images/lincoln-nautilus.webp'],
    passengers: 3,
    luggage: 4,
    startingPrice: 'Starting at $99',
    bestFor: ['Family Travel', 'Extra Luggage', 'Airport Transfers', 'Shopping & Day Trips'],
    description: [
      "The Lincoln Nautilus steps up from a sedan without the size or cost of a full-size SUV. It's the vehicle we recommend most often for couples and small families carrying more than two bags, or anyone who wants extra cargo room for golf clubs, strollers, or shopping without booking a larger vehicle than they need.",
      "Like every vehicle in our fleet, it's inspected daily, professionally detailed, and driven by a chauffeur who handles your luggage from curb to trunk.",
    ],
    features: [
      'Leather seating',
      'Free Wi-Fi',
      'Phone chargers',
      'Climate-controlled interior',
      'Bottled water',
      'Generous cargo area',
    ],
    specs: [
      { label: 'Vehicle Class', value: 'Midsize Luxury SUV' },
      { label: 'Seating Capacity', value: '3 passengers' },
      { label: 'Luggage Capacity', value: '4 standard suitcases' },
      { label: 'Doors', value: '4' },
    ],
  },

  'luxury-suv': {
    slug: 'luxury-suv',
    category: 'Luxury SUV',
    name: 'GMC Yukon XL Denali',
    nameNote: '2023+ or similar',
    tagline: 'Maximum space without compromising luxury.',
    heroImage: '/images/chevy-suburban.webp',
    gallery: ['/images/chevy-suburban.webp', '/images/gallery/yukon-denali-washington-dc.webp'],
    passengers: 5,
    luggage: 5,
    startingPrice: 'Starting at $110',
    bestFor: ['Group Travel', 'Extended Trips', 'Golf Outings', 'Family Airport Runs'],
    description: [
      "The GMC Yukon XL Denali is our full-size answer for larger groups and longer journeys — extended-length cargo space behind the third row, Denali trim leather throughout, and the commanding road presence that makes a long highway run feel effortless.",
      "It's the vehicle most families and small groups choose when they're carrying more bags than a midsize SUV can comfortably hold, without stepping up to a van.",
    ],
    features: [
      'Denali-trim leather seating',
      'Extended cargo area (XL body)',
      'Free Wi-Fi',
      'Phone chargers',
      'Tri-zone climate control',
      'Bottled water',
      'Tinted privacy glass',
    ],
    specs: [
      { label: 'Vehicle Class', value: 'Full-Size Luxury SUV' },
      { label: 'Seating Capacity', value: '5 passengers' },
      { label: 'Luggage Capacity', value: '5 standard suitcases' },
      { label: 'Doors', value: '4' },
    ],
  },

  'premium-suv': {
    slug: 'premium-suv',
    category: 'Premium SUV',
    name: 'Cadillac Escalade',
    nameNote: '2023+ or similar',
    tagline: "America's premier luxury SUV, with commanding presence.",
    heroImage: '/images/cadillac-escalade.webp',
    gallery: ['/images/cadillac-escalade.webp', '/images/gallery/escalade-harbor-east.webp'],
    passengers: 6,
    luggage: 5,
    startingPrice: 'Starting at $125',
    bestFor: ['VIP Arrivals', 'Weddings', 'Prom', 'Corporate Groups'],
    description: [
      "The Cadillac Escalade is the vehicle clients request by name — three rows of leather seating, a cabin built for presence as much as comfort, and enough room for a group of six with luggage without anyone feeling cramped.",
      "It's our top pick for wedding parties, prom groups who want to arrive together in one vehicle, and VIP or executive arrivals where the vehicle itself is part of the impression.",
    ],
    features: [
      'Three-row leather seating',
      'Ambient interior lighting',
      'Free Wi-Fi',
      'Phone chargers',
      'Tri-zone climate control',
      'Bottled water',
      'Tinted privacy glass',
    ],
    specs: [
      { label: 'Vehicle Class', value: 'Premium Full-Size SUV' },
      { label: 'Seating Capacity', value: '6 passengers' },
      { label: 'Luggage Capacity', value: '5 standard suitcases' },
      { label: 'Doors', value: '4' },
    ],
  },

  'sprinter-shuttle': {
    slug: 'sprinter-shuttle',
    category: 'Sprinter Shuttle',
    name: 'Mercedes Sprinter',
    nameNote: '2023+ or similar',
    tagline: 'Comfortable group transportation for airport runs and corporate events.',
    heroImage: '/images/mercedes-sprinter.webp',
    gallery: ['/images/mercedes-sprinter.webp', '/images/sprinter-shuttle-seats.webp'],
    passengers: 13,
    luggage: 13,
    startingPrice: 'Starting at $225',
    bestFor: ['Group Airport Transfers', 'Corporate Shuttles', 'Conferences', 'Wedding Party Transport'],
    description: [
      "When a group needs to travel together, the Mercedes Sprinter keeps everyone — and every bag — in one vehicle instead of splitting across two or three cars. Forward-facing high-back seating with individual seatbelts and reading lights makes the ride comfortable even on longer trips.",
      "It's the standard choice for airport group transfers, conference shuttles between hotels and venues, and any booking where coordinating multiple cars would cost more and create more room for something to go wrong.",
    ],
    features: [
      'High-back leather seating for 13',
      'Individual seatbelts & reading lights',
      'Dedicated luggage area',
      'Climate-controlled interior',
      'Free Wi-Fi',
      'Bottled water',
    ],
    specs: [
      { label: 'Vehicle Class', value: 'Executive Passenger Van' },
      { label: 'Seating Capacity', value: '13 passengers' },
      { label: 'Luggage Capacity', value: '13 standard suitcases' },
      { label: 'Doors', value: '3 (incl. side & rear)' },
    ],
  },

  'sprinter-executive': {
    slug: 'sprinter-executive',
    category: 'Sprinter Executive',
    name: 'Mercedes Sprinter',
    nameNote: '2023+ or similar — upgraded executive interior',
    tagline: 'A grand entrance for weddings, proms, and corporate groups.',
    heroImage: '/images/mercedes-sprinter.webp',
    gallery: ['/images/mercedes-sprinter.webp', '/images/mercedes-sprinter-executive.webp'],
    passengers: 13,
    luggage: 13,
    startingPrice: 'Starting at $270',
    bestFor: ['Weddings', 'Prom', 'Corporate Groups', 'Special Occasions'],
    description: [
      "The Sprinter Executive is the same Mercedes platform as our Sprinter Shuttle, upgraded with premium captain's-chair seating, mood lighting, and an onboard entertainment screen — built for groups who want their group transportation to feel like part of the event, not just a way to get there.",
      "It's our most-requested vehicle for wedding parties and prom groups who want to arrive together and make an entrance, and for corporate clients entertaining a group that expects more than a standard shuttle.",
    ],
    features: [
      'Premium captain\'s-chair leather seating',
      'Mood/ambient lighting',
      'Onboard entertainment screen',
      'Dedicated luggage area',
      'Climate-controlled interior',
      'Free Wi-Fi',
      'Bottled water',
    ],
    specs: [
      { label: 'Vehicle Class', value: 'Executive Passenger Van' },
      { label: 'Seating Capacity', value: '13 passengers' },
      { label: 'Luggage Capacity', value: '13 standard suitcases' },
      { label: 'Doors', value: '3 (incl. side & rear)' },
    ],
  },
};

export const FLEET_DETAIL_SLUGS = Object.keys(FLEET_DETAILS);
