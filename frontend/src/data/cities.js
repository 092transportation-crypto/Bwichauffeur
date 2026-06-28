// City landing page data for BWI Chauffeur — local SEO pages
// Each city gets ONE page; cities may appear under multiple regions on the hub.

export const REGIONS = [
  {
    key: 'central',
    name: 'Central Maryland',
    blurb: 'Fast, flat-rate airport car service in the heart of the Baltimore–Washington corridor.',
  },
  {
    key: 'baltimore',
    name: 'Baltimore Area',
    blurb: 'Luxury black car service across Baltimore City and County — including Port of Baltimore cruise transfers.',
  },
  {
    key: 'howard',
    name: 'Howard County',
    blurb: 'Premium chauffeur service for Howard County\'s most sought-after communities.',
  },
  {
    key: 'anne-arundel',
    name: 'Anne Arundel County',
    blurb: 'From Annapolis to Crofton — professional chauffeurs minutes from BWI Airport.',
  },
  {
    key: 'montgomery',
    name: 'Montgomery County',
    blurb: 'Executive car service to BWI, Reagan National (DCA), and Dulles (IAD) airports.',
  },
  {
    key: 'prince-georges',
    name: "Prince George's County",
    blurb: 'Reliable airport transfers and event transportation across Prince George\'s County.',
  },
  {
    key: 'southern',
    name: 'Southern Maryland',
    blurb: 'Long-distance airport car service done right — fixed pricing, no surge fees.',
  },
  {
    key: 'eastern-shore',
    name: 'Eastern Shore',
    blurb: 'Comfortable long-distance transfers across the Bay Bridge to BWI and beyond.',
  },
];

export const CITIES = [
  // ─── Central Maryland ───
  {
    slug: 'columbia-md',
    name: 'Columbia',
    county: 'Howard County',
    regions: ['central', 'howard'],
    miles: 15,
    minutes: 20,
    emphasis: 'bwi',
    intro:
      'Columbia sits perfectly between Baltimore and Washington, DC — and BWI Chauffeur is the car service Columbia residents trust to get to BWI, DCA, and Dulles on time, every time. From Town Center high-rises to quiet village cul-de-sacs, we pick you up at your door in a spotless luxury vehicle.',
    landmarks: ['Merriweather Post Pavilion', 'The Mall in Columbia', 'Lake Kittamaqundi', 'Howard County General Hospital'],
    localNote:
      'Heading to a concert at Merriweather Post Pavilion or a corporate meeting in Columbia Gateway? Our chauffeurs know every village — Wilde Lake, Harper\'s Choice, River Hill, Owen Brown — and the fastest routes via Route 29 and I-95.',
  },
  {
    slug: 'laurel-md',
    name: 'Laurel',
    county: "Prince George's County",
    regions: ['central'],
    miles: 14,
    minutes: 20,
    emphasis: 'bwi',
    intro:
      'Located midway between Baltimore and DC along the I-95 corridor, Laurel is one of our busiest pickup areas. BWI Chauffeur provides flat-rate luxury car service from Laurel to BWI Airport in about 20 minutes — no surge pricing, no waiting for a rideshare that never shows.',
    landmarks: ['Laurel Park Racecourse', 'Historic Laurel Main Street', 'Towne Centre Laurel'],
    localNote:
      'Whether you\'re near Main Street, Russett, or Maryland City, our chauffeurs use the Route 198 and MD-295 corridors to get you to BWI, DCA, or downtown DC quickly and comfortably.',
  },
  {
    slug: 'ellicott-city-md',
    name: 'Ellicott City',
    county: 'Howard County',
    regions: ['central', 'howard'],
    miles: 14,
    minutes: 20,
    emphasis: 'bwi',
    intro:
      'From historic Main Street to the newer communities along Route 40 and Route 100, Ellicott City families and executives rely on BWI Chauffeur for premium airport transportation. We are about 20 minutes from BWI — close enough for stress-free early-morning flights.',
    landmarks: ['Historic Ellicott City Main Street', 'Patapsco Valley State Park', 'B&O Railroad Museum: Ellicott City Station'],
    localNote:
      'Our chauffeurs know Ellicott City\'s winding roads — from Turf Valley to Centennial Park to Oella — and monitor traffic on US-29 and US-40 in real time so you never miss a flight.',
  },
  {
    slug: 'elkridge-md',
    name: 'Elkridge',
    county: 'Howard County',
    regions: ['central'],
    miles: 7,
    minutes: 12,
    emphasis: 'bwi',
    intro:
      'Elkridge is one of the closest communities to BWI Airport — just 12 minutes door-to-terminal. BWI Chauffeur offers Elkridge travelers a true luxury alternative to airport parking and rideshares, with professional chauffeurs and flat-rate pricing.',
    landmarks: ['Patapsco Valley State Park', 'Rockburn Branch Park', 'Route 1 Corridor'],
    localNote:
      'One of Maryland\'s oldest settlements, Elkridge sits at the crossroads of I-95, Route 1, and Route 100 — our chauffeurs leverage all three to make your BWI transfer the easiest part of your trip.',
  },
  {
    slug: 'jessup-md',
    name: 'Jessup',
    county: 'Howard / Anne Arundel County',
    regions: ['central'],
    miles: 8,
    minutes: 12,
    emphasis: 'bwi',
    intro:
      'Just off I-95 and minutes from BWI, Jessup is home to thriving business parks and distribution hubs. BWI Chauffeur provides executive car service for Jessup professionals, plus reliable airport transfers for residents — available 24/7, 365 days a year.',
    landmarks: ['Maryland Food Center', 'National Business Park (nearby)', 'I-95 / Route 175 Corridor'],
    localNote:
      'Corporate clients in Jessup\'s business corridor count on us for on-time pickups to BWI, Penn Station, and downtown Baltimore — with professional chauffeurs who understand business travel.',
  },
  {
    slug: 'hanover-md',
    name: 'Hanover',
    county: 'Anne Arundel County',
    regions: ['central'],
    miles: 4,
    minutes: 8,
    emphasis: 'bwi',
    intro:
      'Hanover is practically next door to BWI Airport — about 8 minutes from terminal curbside. Home to Arundel Mills and Live! Casino & Hotel, Hanover is where BWI Chauffeur delivers some of the fastest luxury airport pickups in Maryland.',
    landmarks: ['Live! Casino & Hotel Maryland', 'Arundel Mills Mall', 'Arundel Preserve'],
    localNote:
      'Staying at Live! Casino & Hotel or one of the Arundel Mills hotels? We provide premium transfers between Hanover hotels, BWI Airport, and downtown Baltimore — with meet & greet service available.',
  },
  {
    slug: 'catonsville-md',
    name: 'Catonsville',
    county: 'Baltimore County',
    regions: ['central'],
    miles: 12,
    minutes: 18,
    emphasis: 'bwi',
    intro:
      'Known as "Music City Maryland," Catonsville combines small-town charm with quick access to BWI — about 18 minutes via I-695 and I-195. BWI Chauffeur serves Catonsville with luxury sedans and SUVs for airport runs, special events, and corporate travel.',
    landmarks: ['Frederick Road Main Street', 'UMBC', 'Patapsco Valley State Park'],
    localNote:
      'From UMBC visitors to Frederick Road families, our chauffeurs provide door-to-door service throughout Catonsville, Arbutus, and Oella with real-time flight tracking on every airport transfer.',
  },
  {
    slug: 'glen-burnie-md',
    name: 'Glen Burnie',
    county: 'Anne Arundel County',
    regions: ['central'],
    miles: 6,
    minutes: 10,
    emphasis: 'bwi',
    intro:
      'Glen Burnie residents enjoy one of the shortest luxury airport transfers in Maryland — about 10 minutes to BWI. Skip the airport parking shuttle: BWI Chauffeur picks you up at your door and drops you at your terminal, with flat-rate pricing that beats surge-hour rideshares.',
    landmarks: ['Marley Station', 'Sawmill Creek Park', 'Ritchie Highway Corridor'],
    localNote:
      'We serve every Glen Burnie neighborhood — from Point Pleasant to Ferndale — and our chauffeurs know the quickest routes via I-97, MD-2, and the Baltimore–Annapolis corridor.',
  },
  {
    slug: 'severna-park-md',
    name: 'Severna Park',
    county: 'Anne Arundel County',
    regions: ['central'],
    miles: 12,
    minutes: 18,
    emphasis: 'bwi',
    intro:
      'Nestled between the Severn and Magothy rivers, Severna Park is one of Anne Arundel County\'s most desirable communities — and BWI Chauffeur is its trusted luxury car service. BWI Airport is just 18 minutes away via I-97, making early flights effortless.',
    landmarks: ['B&A Trail', 'Kinder Farm Park', 'Severn River waterfront'],
    localNote:
      'From Round Bay to Chartwell to Olde Severna Park, we provide door-to-door chauffeured transfers to BWI, DCA, Annapolis events, and the Port of Baltimore cruise terminal.',
  },
  {
    slug: 'odenton-md',
    name: 'Odenton',
    county: 'Anne Arundel County',
    regions: ['central'],
    miles: 10,
    minutes: 15,
    emphasis: 'bwi',
    intro:
      'Home to Fort Meade and a fast-growing town center, Odenton is a key community we serve daily. BWI Chauffeur provides military families, government professionals, and Odenton residents with dependable luxury transfers to BWI in about 15 minutes.',
    landmarks: ['Fort George G. Meade', 'Odenton MARC Station', 'Piney Orchard'],
    localNote:
      'We understand the schedules of Fort Meade and NSA professionals — early pickups, secure communication, and on-time arrivals are standard. Piney Orchard, Seven Oaks, and the Odenton Town Center are all in our core service zone.',
  },

  // ─── Baltimore Area ───
  {
    slug: 'baltimore-md',
    name: 'Baltimore',
    county: 'Baltimore City',
    regions: ['baltimore'],
    miles: 10,
    minutes: 15,
    emphasis: 'cruise',
    intro:
      'From the Inner Harbor to Canton, Fells Point to Mount Vernon, BWI Chauffeur is Baltimore\'s premier black car service. We deliver flat-rate luxury transfers to BWI Airport, the Port of Baltimore cruise terminal, Penn Station, and every corner of Charm City — 24/7.',
    landmarks: ['Inner Harbor', 'Oriole Park at Camden Yards', 'M&T Bank Stadium', 'Johns Hopkins Hospital', 'Cruise Maryland Terminal'],
    localNote:
      'Sailing from the Port of Baltimore? Our cruise transfer service takes you straight to the South Locust Point terminal with luggage assistance included. Catching an Orioles or Ravens game? We handle stadium drop-offs and late-night pickups too.',
  },
  {
    slug: 'towson-md',
    name: 'Towson',
    county: 'Baltimore County',
    regions: ['baltimore'],
    miles: 20,
    minutes: 25,
    emphasis: 'cruise',
    intro:
      'As Baltimore County\'s county seat and a major business hub, Towson demands professional transportation — and BWI Chauffeur delivers. Executive car service to BWI Airport, corporate travel downtown, and luxury rides for Towson University families are all just a call away.',
    landmarks: ['Towson University', 'Towson Town Center', 'GBMC (Greater Baltimore Medical Center)'],
    localNote:
      'Our chauffeurs navigate I-695 and I-83 traffic daily, getting Towson executives and TU families to BWI in about 25 minutes — with flight tracking, so even delayed arrivals are met on time.',
  },
  {
    slug: 'pikesville-md',
    name: 'Pikesville',
    county: 'Baltimore County',
    regions: ['baltimore'],
    miles: 20,
    minutes: 25,
    emphasis: 'cruise',
    intro:
      'Pikesville families and professionals choose BWI Chauffeur for one reason: reliability. Our luxury sedans and SUVs serve the Reisterstown Road corridor daily with airport transfers to BWI, DCA, and Dulles, plus elegant transportation for weddings and celebrations.',
    landmarks: ['Reisterstown Road Corridor', 'Druid Ridge', 'Suburban Club'],
    localNote:
      'From Smith Avenue to Old Court Road, we provide door-to-door chauffeured service across Pikesville — including early-morning BWI departures and cruise transfers to the Port of Baltimore.',
  },
  {
    slug: 'owings-mills-md',
    name: 'Owings Mills',
    county: 'Baltimore County',
    regions: ['baltimore'],
    miles: 25,
    minutes: 30,
    emphasis: 'cruise',
    intro:
      'Owings Mills is home to major corporate campuses, the Ravens\' training facility, and thriving residential communities — all of which count on BWI Chauffeur for premium transportation. We provide flat-rate luxury transfers to BWI in about 30 minutes via I-795 and I-695.',
    landmarks: ['Metro Centre at Owings Mills', 'Foundry Row', 'Under Armour Performance Center (Ravens)'],
    localNote:
      'Corporate travelers from T. Rowe Price and CareFirst campuses, residents of New Town and Garrison — our professional chauffeurs serve all of Owings Mills with executive-level service.',
  },
  {
    slug: 'white-marsh-md',
    name: 'White Marsh',
    county: 'Baltimore County',
    regions: ['baltimore'],
    miles: 22,
    minutes: 28,
    emphasis: 'cruise',
    intro:
      'Located on the I-95 northeast corridor, White Marsh enjoys quick highway access to BWI Airport — and BWI Chauffeur makes the trip effortless. Luxury airport transfers, cruise terminal drop-offs, and night-out transportation, all at fixed rates.',
    landmarks: ['The Avenue at White Marsh', 'White Marsh Mall', 'Honeygo'],
    localNote:
      'From Perry Hall to Nottingham to Honeygo, our chauffeurs cover the entire White Marsh area with 24/7 availability and real-time I-95 traffic monitoring.',
  },
  {
    slug: 'dundalk-md',
    name: 'Dundalk',
    county: 'Baltimore County',
    regions: ['baltimore'],
    miles: 14,
    minutes: 20,
    emphasis: 'cruise',
    intro:
      'Dundalk\'s waterfront community deserves waterfront-level service. BWI Chauffeur provides Dundalk residents with luxury airport transfers to BWI in about 20 minutes, plus some of the fastest cruise terminal transfers in the region — the Port of Baltimore is right next door.',
    landmarks: ['Tradepoint Atlantic', 'North Point State Park', 'Dundalk Heritage Park'],
    localNote:
      'Cruising out of Baltimore? Dundalk to the South Locust Point Cruise Terminal takes our chauffeurs under 15 minutes. We also serve Tradepoint Atlantic business travelers with executive car service.',
  },
  {
    slug: 'parkville-md',
    name: 'Parkville',
    county: 'Baltimore County',
    regions: ['baltimore'],
    miles: 19,
    minutes: 25,
    emphasis: 'cruise',
    intro:
      'Along the Harford Road corridor, Parkville residents trust BWI Chauffeur for dependable, comfortable rides to BWI Airport, downtown Baltimore, and the cruise port. Professional chauffeurs, immaculate vehicles, and pricing you confirm before you ride.',
    landmarks: ['Harford Road Corridor', 'Double Rock Park', 'Carney'],
    localNote:
      'We serve Parkville, Carney, and Hillendale daily — with early-morning BWI pickups, Penn Station transfers, and group transportation for family events.',
  },
  {
    slug: 'essex-md',
    name: 'Essex',
    county: 'Baltimore County',
    regions: ['baltimore'],
    miles: 18,
    minutes: 24,
    emphasis: 'cruise',
    intro:
      'From the Back River to Middle River waterfronts, Essex residents choose BWI Chauffeur for luxury rides without luxury hassle. Flat-rate BWI Airport transfers in about 24 minutes, cruise terminal drop-offs, and 24/7 availability — every single day.',
    landmarks: ['Rocky Point Park', 'Middle River waterfront', 'Eastern Boulevard Corridor'],
    localNote:
      'Whether you\'re flying out of BWI or sailing from the Port of Baltimore, our chauffeurs pick you up anywhere in Essex, Middle River, or Rosedale with luggage assistance included.',
  },

  // ─── Howard County (unique additions) ───
  {
    slug: 'clarksville-md',
    name: 'Clarksville',
    county: 'Howard County',
    regions: ['howard'],
    miles: 18,
    minutes: 25,
    emphasis: 'bwi',
    intro:
      'Clarksville and River Hill represent some of Maryland\'s finest communities — and they deserve transportation to match. BWI Chauffeur provides Clarksville families and executives with white-glove chauffeured service to BWI, DCA, and Dulles airports.',
    landmarks: ['River Hill', 'Clarksville Commons', 'Route 108 Corridor'],
    localNote:
      'From River Hill estates to Clarksville Commons, our chauffeurs deliver discreet, professional service — early flights, business meetings in DC, and special evenings out are all handled flawlessly.',
  },
  {
    slug: 'fulton-md',
    name: 'Fulton',
    county: 'Howard County',
    regions: ['howard'],
    miles: 15,
    minutes: 20,
    emphasis: 'bwi',
    intro:
      'Home to the acclaimed Maple Lawn community, Fulton sits ideally between BWI, DCA, and Dulles — and BWI Chauffeur serves all three with flat-rate luxury transfers. Door-to-door pickup from Maple Lawn to BWI takes about 20 minutes.',
    landmarks: ['Maple Lawn', 'Route 216 Corridor', 'Reservoir High School area'],
    localNote:
      'Maple Lawn professionals commuting to DC or catching flights at any of the three regional airports rely on our 24/7 availability and meticulous on-time record.',
  },
  {
    slug: 'highland-md',
    name: 'Highland',
    county: 'Howard County',
    regions: ['howard'],
    miles: 17,
    minutes: 24,
    emphasis: 'bwi',
    intro:
      'Highland\'s peaceful, estate-lined roads are just 24 minutes from BWI Airport — and BWI Chauffeur brings luxury transportation right to your gate. Quiet professionalism, immaculate vehicles, and pricing agreed before every trip.',
    landmarks: ['Highland Crossroads (Route 108 & 216)', 'Cattail Creek countryside'],
    localNote:
      'Residents of Highland and nearby Glenelg and Dayton appreciate our discreet service for airport transfers, special events, and evenings in DC or Baltimore.',
  },

  // ─── Anne Arundel County ───
  {
    slug: 'annapolis-md',
    name: 'Annapolis',
    county: 'Anne Arundel County',
    regions: ['anne-arundel'],
    miles: 22,
    minutes: 30,
    emphasis: 'bwi',
    intro:
      'Maryland\'s capital deserves a capital-class car service. BWI Chauffeur serves Annapolis with luxury airport transfers to BWI in about 30 minutes via I-97, plus elegant transportation for Naval Academy events, weddings, and nights on Main Street.',
    landmarks: ['U.S. Naval Academy', 'Annapolis City Dock', 'Maryland State House', 'Westfield Annapolis'],
    localNote:
      'Commissioning Week, Navy football, downtown galas, or an early flight from BWI — our chauffeurs know Annapolis inside and out, from Eastport to West Annapolis to the Broadneck Peninsula.',
  },
  {
    slug: 'crofton-md',
    name: 'Crofton',
    county: 'Anne Arundel County',
    regions: ['anne-arundel'],
    miles: 15,
    minutes: 20,
    emphasis: 'bwi',
    intro:
      'Crofton\'s tree-lined communities along the Route 3 corridor are just 20 minutes from BWI — and BWI Chauffeur makes every airport trip feel first-class. Door-to-door luxury service with flat rates and zero surge pricing.',
    landmarks: ['Crofton Country Club', 'Waugh Chapel Towne Centre', 'Route 3 Corridor'],
    localNote:
      'From the Crofton Parkway loop to Waugh Chapel, our chauffeurs provide dependable transfers to BWI, DCA, Annapolis, and downtown DC — mornings, nights, weekends, and holidays.',
  },
  {
    slug: 'davidsonville-md',
    name: 'Davidsonville',
    county: 'Anne Arundel County',
    regions: ['anne-arundel'],
    miles: 20,
    minutes: 27,
    emphasis: 'bwi',
    intro:
      'Davidsonville\'s countryside estates sit conveniently between Annapolis and DC — and BWI Chauffeur brings premium chauffeured transportation right to your driveway. BWI Airport is about 27 minutes away; DCA and downtown DC are an easy run via Route 50.',
    landmarks: ['Davidsonville Park', 'Route 50 / Route 424 crossroads', 'Homestead Gardens'],
    localNote:
      'Our clients in Davidsonville value privacy and punctuality — two things every BWI Chauffeur ride guarantees, whether it\'s an airport transfer or an evening event in the capital.',
  },
  {
    slug: 'arnold-md',
    name: 'Arnold',
    county: 'Anne Arundel County',
    regions: ['anne-arundel'],
    miles: 18,
    minutes: 25,
    emphasis: 'bwi',
    intro:
      'On the Broadneck Peninsula between Annapolis and the Magothy River, Arnold residents rely on BWI Chauffeur for polished, on-time airport transportation. BWI is about 25 minutes via I-97/MD-2 — and we track your flight the whole way.',
    landmarks: ['Anne Arundel Community College', 'B&A Trail', 'Magothy River waterfront'],
    localNote:
      'From Ulmstead Estates to Bay Hills, we serve every Arnold neighborhood with luxury sedans and SUVs — perfect for family vacations, business travel, and cruise departures from Baltimore.',
  },
  {
    slug: 'edgewater-md',
    name: 'Edgewater',
    county: 'Anne Arundel County',
    regions: ['anne-arundel'],
    miles: 26,
    minutes: 35,
    emphasis: 'bwi',
    intro:
      'South of the South River, Edgewater combines waterfront living with easy access to Annapolis and DC — and BWI Chauffeur connects it all. Luxury transfers to BWI in about 35 minutes, plus DCA, Dulles, and special event transportation.',
    landmarks: ['Londontown & Gardens', 'South River waterfront', 'Mayo Beach Park'],
    localNote:
      'From Selby-on-the-Bay to Loch Haven, our chauffeurs handle Edgewater\'s peninsula roads with ease — early-morning flights and late-night arrivals are never a problem with 24/7 availability.',
  },

  // ─── Montgomery County ───
  {
    slug: 'bethesda-md',
    name: 'Bethesda',
    county: 'Montgomery County',
    regions: ['montgomery'],
    miles: 35,
    minutes: 45,
    emphasis: 'dc-airports',
    intro:
      'Bethesda\'s executives, physicians, and diplomats demand precision — and BWI Chauffeur delivers it. We provide premium black car service from Bethesda to BWI, Reagan National (DCA), and Dulles (IAD), with corporate accounts and 24/7 availability.',
    landmarks: ['NIH (National Institutes of Health)', 'Walter Reed National Military Medical Center', 'Bethesda Row', 'Marriott HQ'],
    localNote:
      'NIH visitors, Walter Reed families, and Bethesda Row professionals choose us for fixed-rate transfers to all three regional airports — DCA in ~25 minutes, Dulles in ~35, BWI in ~45.',
  },
  {
    slug: 'rockville-md',
    name: 'Rockville',
    county: 'Montgomery County',
    regions: ['montgomery'],
    miles: 35,
    minutes: 45,
    emphasis: 'dc-airports',
    intro:
      'As Montgomery County\'s seat and a biotech powerhouse along the I-270 corridor, Rockville runs on schedules — and BWI Chauffeur keeps them. Executive airport transfers to BWI, DCA, and Dulles with flight tracking, meet & greet, and flat-rate pricing.',
    landmarks: ['Rockville Town Square', 'I-270 Technology Corridor', 'Montgomery College'],
    localNote:
      'From King Farm to Twinbrook to Fallsgrove, our chauffeurs serve all of Rockville — corporate travel for I-270 biotech firms is one of our specialties.',
  },
  {
    slug: 'gaithersburg-md',
    name: 'Gaithersburg',
    county: 'Montgomery County',
    regions: ['montgomery'],
    miles: 40,
    minutes: 50,
    emphasis: 'dc-airports',
    intro:
      'Gaithersburg travelers shouldn\'t have to gamble on rideshare availability for a 6 AM flight. BWI Chauffeur provides guaranteed, pre-scheduled luxury transfers from Gaithersburg to BWI, Dulles, and Reagan National — with professional chauffeurs and fixed rates.',
    landmarks: ['RIO Lakefront', 'Crown', 'Kentlands', 'NIST'],
    localNote:
      'From the Kentlands to Crown to Montgomery Village, we cover every Gaithersburg neighborhood. Dulles is ~30 minutes away, BWI about 50 — both flat-rate, both stress-free.',
  },
  {
    slug: 'germantown-md',
    name: 'Germantown',
    county: 'Montgomery County',
    regions: ['montgomery'],
    miles: 45,
    minutes: 55,
    emphasis: 'dc-airports',
    intro:
      'Upcounty Montgomery deserves the same first-class service as downtown — and BWI Chauffeur delivers it to Germantown daily. Pre-scheduled luxury transfers to Dulles (~30 min), BWI (~55 min), and DCA, with chauffeurs who arrive early, every time.',
    landmarks: ['Germantown Town Center', 'BlackRock Center for the Arts', 'Soccerplex'],
    localNote:
      'From Clarksburg to Milestone to Churchill Town Sector, our chauffeurs serve greater Germantown with 24/7 availability — ideal for early international departures from Dulles.',
  },
  {
    slug: 'potomac-md',
    name: 'Potomac',
    county: 'Montgomery County',
    regions: ['montgomery'],
    miles: 40,
    minutes: 50,
    emphasis: 'dc-airports',
    intro:
      'Potomac\'s estates expect excellence — and BWI Chauffeur is the chauffeured car service Potomac families keep on speed dial. Immaculate luxury vehicles, discreet professional chauffeurs, and seamless transfers to Dulles, DCA, and BWI.',
    landmarks: ['Potomac Village', 'TPC Potomac at Avenel Farm', 'Great Falls Park (nearby)'],
    localNote:
      'From River Road estates to Avenel, we provide white-glove service for airport transfers, embassy events, and evenings in Georgetown — privacy and punctuality guaranteed.',
  },
  {
    slug: 'silver-spring-md',
    name: 'Silver Spring',
    county: 'Montgomery County',
    regions: ['montgomery'],
    miles: 30,
    minutes: 40,
    emphasis: 'dc-airports',
    intro:
      'Right on the DC line, Silver Spring is one of our most active Montgomery County service areas. BWI Chauffeur provides flat-rate luxury transfers from Silver Spring to BWI (~40 min), DCA (~20 min), and Dulles — plus event transportation downtown.',
    landmarks: ['Downtown Silver Spring', 'The Fillmore', 'AFI Silver Theatre', 'Discovery District'],
    localNote:
      'From Four Corners to Wheaton to Takoma Park borders, our chauffeurs navigate the Beltway and Route 29 corridors expertly — with real-time traffic routing on every trip.',
  },
  {
    slug: 'chevy-chase-md',
    name: 'Chevy Chase',
    county: 'Montgomery County',
    regions: ['montgomery'],
    miles: 35,
    minutes: 45,
    emphasis: 'dc-airports',
    intro:
      'Chevy Chase residents expect quiet competence — and that\'s exactly what BWI Chauffeur provides. Premium chauffeured transportation from Chevy Chase to Reagan National (~20 min), Dulles, and BWI, plus corporate and social event service in DC.',
    landmarks: ['Friendship Heights', 'Chevy Chase Club', 'Wisconsin Avenue Corridor'],
    localNote:
      'From the Village of Chevy Chase to Friendship Heights high-rises, our chauffeurs deliver polished, on-time service for diplomats, executives, and families alike.',
  },

  // ─── Prince George's County ───
  {
    slug: 'bowie-md',
    name: 'Bowie',
    county: "Prince George's County",
    regions: ['prince-georges'],
    miles: 18,
    minutes: 25,
    emphasis: 'bwi',
    intro:
      'Perfectly positioned between Annapolis, DC, and BWI, Bowie is one of our most-served Prince George\'s County communities. BWI Chauffeur provides flat-rate luxury transfers to BWI in about 25 minutes — plus DCA, Dulles, and downtown DC service.',
    landmarks: ['Bowie Town Center', 'Bowie State University', 'Allen Pond Park'],
    localNote:
      'From Bowie Town Center to Fairwood to Old Town Bowie, our chauffeurs cover it all — with Route 50 and Route 301 fast routes that keep your airport trip short.',
  },
  {
    slug: 'upper-marlboro-md',
    name: 'Upper Marlboro',
    county: "Prince George's County",
    regions: ['prince-georges'],
    miles: 25,
    minutes: 35,
    emphasis: 'bwi',
    intro:
      'As Prince George\'s County\'s seat, Upper Marlboro hosts professionals, equestrians, and families who all need dependable transportation. BWI Chauffeur delivers luxury airport transfers to BWI (~35 min) and DCA, plus event transportation across the DMV.',
    landmarks: ['Show Place Arena', 'Prince George\'s Equestrian Center', 'Marlboro Pike Corridor'],
    localNote:
      'From Marlton to Queensland to the rural estates along Route 301, our chauffeurs provide door-to-door pickups with luggage assistance and 24/7 availability.',
  },
  {
    slug: 'largo-md',
    name: 'Largo',
    county: "Prince George's County",
    regions: ['prince-georges'],
    miles: 25,
    minutes: 33,
    emphasis: 'bwi',
    intro:
      'Largo sits at the heart of Prince George\'s County — minutes from the Beltway and about 33 minutes from BWI. BWI Chauffeur provides Largo residents and professionals with premium airport transfers, corporate car service, and special event transportation.',
    landmarks: ['UM Capital Region Medical Center', 'Largo Town Center', 'The Boulevard at Capital Centre'],
    localNote:
      'Medical professionals at UM Capital Region, commuters near Largo Town Center Metro, and Kettering families all rely on our punctual, flat-rate service to BWI and DCA.',
  },
  {
    slug: 'greenbelt-md',
    name: 'Greenbelt',
    county: "Prince George's County",
    regions: ['prince-georges'],
    miles: 20,
    minutes: 27,
    emphasis: 'bwi',
    intro:
      'Home to NASA Goddard and historic Old Greenbelt, this community values smart, dependable service — exactly what BWI Chauffeur provides. Luxury transfers to BWI in under 30 minutes via the BW Parkway, plus DCA and Dulles runs at fixed rates.',
    landmarks: ['NASA Goddard Space Flight Center', 'Historic Old Greenbelt', 'Greenbelt Park'],
    localNote:
      'NASA visitors and Greenbelt residents alike appreciate our pre-scheduled pickups, flight tracking, and direct BW Parkway routes that make BWI feel right next door.',
  },
  {
    slug: 'college-park-md',
    name: 'College Park',
    county: "Prince George's County",
    regions: ['prince-georges'],
    miles: 22,
    minutes: 30,
    emphasis: 'bwi',
    intro:
      'From UMD move-in weekends to visiting professors and Discovery District executives, College Park runs on arrivals and departures — and BWI Chauffeur handles them all. Flat-rate luxury transfers to BWI (~30 min), DCA, and Dulles, 24/7.',
    landmarks: ['University of Maryland', 'Xfinity Center', 'The Hotel at UMD', 'Discovery District'],
    localNote:
      'Parents flying in for graduation, recruiters visiting campus, Terps fans heading to games — our chauffeurs know every UMD entrance and the fastest Route 1 and BW Parkway routes.',
  },
  {
    slug: 'hyattsville-md',
    name: 'Hyattsville',
    county: "Prince George's County",
    regions: ['prince-georges'],
    miles: 25,
    minutes: 33,
    emphasis: 'bwi',
    intro:
      'Hyattsville\'s thriving Arts District sits just inside the Beltway — close to DC, and about 33 minutes from BWI with BWI Chauffeur behind the wheel. Luxury airport transfers, DC event transportation, and corporate service at honest flat rates.',
    landmarks: ['Gateway Arts District', 'Route 1 Corridor', 'Riverdale Park Station'],
    localNote:
      'From the Arts District to University Hills, our chauffeurs provide reliable door-to-door service — DCA is ~20 minutes away, making us the smart choice for any airport.',
  },

  // ─── Southern Maryland ───
  {
    slug: 'waldorf-md',
    name: 'Waldorf',
    county: 'Charles County',
    regions: ['southern'],
    miles: 40,
    minutes: 50,
    emphasis: 'long-distance',
    intro:
      'Waldorf travelers know the pain of long airport drives — BWI Chauffeur turns them into first-class experiences. Relax in a luxury sedan or SUV while your professional chauffeur handles the ~50-minute run to BWI, or quicker trips to DCA via Route 5 and Branch Avenue.',
    landmarks: ['St. Charles Towne Center', 'Route 301 Corridor', 'Regency Furniture Stadium'],
    localNote:
      'From St. Charles to Bannister to White Plains, we serve greater Waldorf with pre-scheduled, flat-rate transfers — no surge pricing on those early-morning airport runs.',
  },
  {
    slug: 'la-plata-md',
    name: 'La Plata',
    county: 'Charles County',
    regions: ['southern'],
    miles: 48,
    minutes: 58,
    emphasis: 'long-distance',
    intro:
      'As Charles County\'s seat, La Plata is a hub of Southern Maryland life — and BWI Chauffeur is its long-distance airport specialist. Fixed-rate luxury transfers to BWI (~1 hour), DCA (~45 min), and Dulles, with chauffeurs who arrive early every time.',
    landmarks: ['La Plata Town Hall', 'College of Southern Maryland', 'Port Tobacco (nearby)'],
    localNote:
      'Southern Maryland residents choose us because we confirm pricing upfront and track every flight — your chauffeur is waiting even when your plane is late.',
  },
  {
    slug: 'prince-frederick-md',
    name: 'Prince Frederick',
    county: 'Calvert County',
    regions: ['southern'],
    miles: 45,
    minutes: 60,
    emphasis: 'long-distance',
    intro:
      'Calvert County\'s seat deserves better than a 2-hour airport shuttle with six stops. BWI Chauffeur provides direct, private luxury transfers from Prince Frederick to BWI (~1 hour), DCA, and Dulles — door to terminal, no stops, no strangers.',
    landmarks: ['Calvert Memorial Hospital (CalvertHealth)', 'Route 4 Corridor', 'Chesapeake Beach (nearby)'],
    localNote:
      'From Dunkirk to St. Leonard, we serve all of Calvert County with pre-scheduled pickups — ideal for early international departures and cruise connections in Baltimore.',
  },

  // ─── Eastern Shore ───
  {
    slug: 'easton-md',
    name: 'Easton',
    county: 'Talbot County',
    regions: ['eastern-shore'],
    miles: 55,
    minutes: 70,
    emphasis: 'long-distance',
    intro:
      'Easton and the Mid-Shore\'s charming towns deserve a car service that makes the Bay Bridge crossing effortless. BWI Chauffeur provides direct luxury transfers from Easton to BWI (~70 minutes), plus DCA and Dulles — relax while we handle Route 50.',
    landmarks: ['Historic Downtown Easton', 'Avalon Theatre', 'St. Michaels & Oxford (nearby)'],
    localNote:
      'Weekenders heading home, St. Michaels wedding guests, Talbot County executives — our chauffeurs make the Bay Bridge run daily with real-time traffic and bridge-delay monitoring.',
  },
  {
    slug: 'kent-island-md',
    name: 'Kent Island',
    county: "Queen Anne's County",
    regions: ['eastern-shore'],
    miles: 35,
    minutes: 45,
    emphasis: 'long-distance',
    intro:
      'Just across the Chesapeake Bay Bridge, Kent Island is closer to BWI than most people think — about 45 minutes with BWI Chauffeur. Skip the bridge-traffic stress: our chauffeurs monitor Bay Bridge conditions in real time and route accordingly.',
    landmarks: ['Chesapeake Bay Bridge', 'Stevensville', 'Cross Island Trail', 'Kent Narrows'],
    localNote:
      'From Stevensville to Chester to Kent Narrows, we provide flat-rate luxury transfers to BWI, DCA, and the Port of Baltimore cruise terminal — every day of the year.',
  },
  {
    slug: 'salisbury-md',
    name: 'Salisbury',
    county: 'Wicomico County',
    regions: ['eastern-shore'],
    miles: 100,
    minutes: 110,
    emphasis: 'long-distance',
    intro:
      'The Lower Shore\'s hub city deserves a true long-distance car service — and BWI Chauffeur delivers. Direct, private luxury transfers from Salisbury to BWI Airport (~1 hour 50 minutes), with comfortable late-model vehicles built for the Route 50 run.',
    landmarks: ['Salisbury University', 'TidalHealth Peninsula Regional', 'Downtown Salisbury'],
    localNote:
      'Salisbury University families, TidalHealth professionals, and Lower Shore travelers choose us for guaranteed pickups and fixed pricing — no connection shuttles, no stops, just door-to-terminal comfort.',
  },
  {
    slug: 'ocean-city-md',
    name: 'Ocean City',
    county: 'Worcester County',
    regions: ['eastern-shore'],
    miles: 125,
    minutes: 135,
    emphasis: 'long-distance',
    intro:
      'Start and end your Ocean City vacation in comfort. BWI Chauffeur provides direct luxury transfers between Ocean City and BWI Airport (~2 hours 15 minutes) — spacious SUVs for families and beach luggage, with fixed pricing confirmed before you ride.',
    landmarks: ['Ocean City Boardwalk', 'OC Inlet', 'Roland E. Powell Convention Center', 'Assateague Island (nearby)'],
    localNote:
      'Convention attendees, vacationing families, and OC condo owners rely on our long-distance specialists — pre-scheduled pickups from any hotel or condo, uptown to the Inlet.',
  },
];

export const getCityBySlug = (slug) => CITIES.find((c) => c.slug === slug);

export const getCitiesByRegion = (regionKey) =>
  CITIES.filter((c) => c.regions.includes(regionKey));

export const getNearbyCities = (city, limit = 6) => {
  const sameRegion = CITIES.filter(
    (c) => c.slug !== city.slug && c.regions.some((r) => city.regions.includes(r))
  );
  const others = CITIES.filter(
    (c) => c.slug !== city.slug && !sameRegion.includes(c)
  );
  return [...sameRegion, ...others].slice(0, limit);
};
