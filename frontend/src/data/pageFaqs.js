// Five page-specific FAQs for the static pages that have no FAQ data of their
// own. Rendered by <FaqSection> (visible block + FAQPage JSON-LD). Policy
// numbers mirror the Terms page and lib/faqExtras.js — change them together.
const PHONE = '877-609-1919';
const RATE = 'Every trip is quoted as a flat rate before you book — no surge pricing and no meter — and the rate is confirmed with you before your card is charged.';
const CANCEL = 'Sedan and SUV reservations cancel free of charge up to 3 hours before pickup. Sprinter vans, limousines and special-event bookings cancel free of charge up to 12 hours before pickup.';
const WAIT = 'Airport pickups include 45 minutes of complimentary waiting time on domestic arrivals and 60 minutes on international arrivals, timed from actual touchdown. All other pickups include 15 minutes.';

export const PAGE_FAQS = {
  '/luxury-fleet': [
    { q: 'Which vehicles are in the BWI Chauffeur fleet?', a: 'Mercedes-Benz E-Class and S-Class and BMW 7 Series sedans, Lincoln Nautilus, Cadillac Escalade and Chevrolet Suburban SUVs, Mercedes Sprinter vans in shuttle, executive and limo layouts, and stretch limousines.' },
    { q: 'Which vehicle should I book for an airport trip with luggage?', a: 'A sedan suits one to three travelers with standard bags. A full-size SUV such as the Escalade or Suburban is the better choice for families and heavy luggage, and a Sprinter van keeps a larger group and all of its bags in one vehicle.' },
    { q: 'Am I guaranteed the exact model shown?', a: 'Reservations are made by vehicle class. The exact make and model can vary within that class, and if a vehicle becomes unavailable we provide a comparable or upgraded one — never a smaller vehicle without your agreement.' },
    { q: 'How are the vehicles maintained?', a: 'Every vehicle is commercially insured, inspected regularly and detailed before each ride, and is driven by a licensed, background-checked chauffeur.' },
    { q: 'Can I request a child car seat in any vehicle?', a: 'Yes. Infant, convertible and booster seats are available on request in any vehicle class — tell us the child\'s age when you book.' },
  ],
  '/about': [
    { q: 'Who is BWI Chauffeur?', a: 'BWI Chauffeur is a Maryland chauffeured transportation company that has operated since 2014, with its office at 9836 Lyon Ave, Laurel, MD 20723 — between Baltimore and Washington, a short drive from BWI Marshall Airport.' },
    { q: 'Is BWI Chauffeur licensed and insured?', a: 'Yes. We operate under Maryland Public Service Commission Carrier No. 6325, and every vehicle carries commercial insurance.' },
    { q: 'How are your chauffeurs selected?', a: 'Chauffeurs are licensed and background-checked, and are trained on airport procedures, route planning and the discretion expected in executive travel.' },
    { q: 'What areas do you serve?', a: 'All of Maryland, Washington DC, Northern Virginia and Delaware, with airport service at BWI, Reagan National (DCA), Dulles (IAD) and Philadelphia (PHL).' },
    { q: 'Do you offer corporate accounts?', a: `Yes — with priority dispatch and monthly invoicing. Call ${PHONE} or use the contact form to set one up.` },
  ],
  '/coverage': [
    { q: 'Which counties do you cover in Maryland?', a: 'All of them — from Anne Arundel, Howard, Baltimore and Montgomery counties around the airports to Western Maryland, Southern Maryland and the Eastern Shore.' },
    { q: 'Do you serve Washington DC and Northern Virginia?', a: 'Yes. Transfers between BWI, Reagan National and Dulles and trips into DC, Arlington, Alexandria, Tysons and Reston are everyday work.' },
    { q: 'Do you go to the beaches?', a: 'Yes — Ocean City, Maryland and the Delaware beaches including Rehoboth and Bethany are regular long-distance transfers from BWI and the Baltimore–Washington area.' },
    { q: 'Is pricing higher far from the airport?', a: 'Your rate reflects the full trip. ' + RATE },
    { q: 'My town is not listed — can I still book?', a: `Almost certainly. The listed towns are the ones we are asked about most, not the limit of where we drive. Send your addresses through the booking form or call ${PHONE}.` },
  ],
  '/booking': [
    { q: 'Is my ride confirmed as soon as I submit the form?', a: 'Submitting the form sends your request to dispatch. Your ride is confirmed once we reply with your flat rate and you approve it — you then receive a written confirmation.' },
    { q: 'Do I need a credit card to request a quote?', a: 'No. A card is needed only to confirm the reservation, and it is charged only after the reservation and the rate have been confirmed with you.' },
    { q: 'How far in advance should I book?', a: 'A day ahead is ideal, and earlier for pre-dawn flights, holidays and event weekends. Same-day requests are welcome when a vehicle is available — for anything in the next few hours, calling is fastest.' },
    { q: 'What if my flight is delayed?', a: 'Airport pickups are flight-tracked, so the pickup moves with your actual arrival. ' + WAIT },
    { q: 'Can I change or cancel a reservation?', a: CANCEL + ` Call ${PHONE} or reply to your confirmation email.` },
  ],
  '/contact': [
    { q: 'What are your hours?', a: 'Dispatch and reservations are open 24 hours a day, 7 days a week, including holidays.' },
    { q: 'What is the fastest way to reach you?', a: `Call or text ${PHONE}. Use the phone for anything time-sensitive — a ride in the next few hours, a change to today's reservation, or finding your chauffeur at the terminal.` },
    { q: 'Where is your office?', a: '9836 Lyon Ave, Laurel, MD 20723. Rides are by reservation and chauffeurs come to you, so there is no need to visit the office to book or pay.' },
    { q: 'Can I get a quote through the contact form?', a: 'Yes, though the booking form is quicker because it asks for the pickup and drop-off addresses, date, time and vehicle we need to price the trip. ' + RATE },
    { q: 'I left something in the vehicle — what should I do?', a: `Call ${PHONE} as soon as you notice. Vehicles are checked after every ride, so the sooner we hear from you the easier it is to return the item.` },
  ],
  '/service-areas': [
    { q: 'How do I find my city?', a: 'Cities are grouped by region on this page. Each city page covers distance and typical drive time to BWI, the airports we serve from there, and popular routes.' },
    { q: 'Which airports do you serve from these areas?', a: 'BWI Marshall, Reagan National (DCA), Washington Dulles (IAD) and Philadelphia International (PHL), with real-time flight tracking on every pickup.' },
    { q: 'Do you offer early-morning pickups in the suburbs?', a: 'Yes. Dispatch runs 24/7 and pre-dawn airport runs are booked in advance, so your chauffeur is committed the night before rather than dependent on who is nearby.' },
    { q: 'Is the rate the same from every town?', a: 'No — rates depend on distance and vehicle. ' + RATE },
    { q: 'Do you serve areas outside Maryland?', a: 'Yes: Washington DC, Northern Virginia, Delaware and the Philadelphia area, plus long-distance trips along the I-95 corridor.' },
  ],
  '/blog': [
    { q: 'What does the BWI Chauffeur blog cover?', a: 'Airport guides for BWI, DCA and Dulles, comparisons of car service with rideshare, local transportation guides for Maryland communities, and planning advice for weddings, proms and corporate travel.' },
    { q: 'Who writes the articles?', a: 'The BWI Chauffeur team, drawing on day-to-day experience dispatching and driving these routes since 2014.' },
    { q: 'Which airport is best for my trip — BWI, DCA or IAD?', a: 'It depends on your starting point and airline. Our airport transportation guide compares the three and explains how to reach each one.' },
    { q: 'How do I get a quote for a trip mentioned in an article?', a: `Use the booking form or call ${PHONE}. ` + RATE },
    { q: 'Can I suggest a topic?', a: 'Yes — send it through the contact form. Rider questions are where most of these guides begin.' },
  ],
};
