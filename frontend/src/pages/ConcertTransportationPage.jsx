import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Shield, Car, Users, Music, Ticket } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const concertFaqs = [
  {
    q: 'Which concert venues do you serve?',
    a: 'We cover every major venue in the Baltimore-Washington region: CFG Bank Arena, Merriweather Post Pavilion, Capital One Arena, Jiffy Lube Live, M&T Bank Stadium, Camden Yards, The Anthem, Wolf Trap, and more. If there is a show within about two hours of BWI, we can get you there.',
  },
  {
    q: 'What happens if the show runs late or there is an encore?',
    a: 'Your chauffeur tracks the event in real time and adjusts the pickup. You never pay extra because a show ran long, went to overtime, or was delayed by weather.',
  },
  {
    q: 'Can you handle a group going to a concert together?',
    a: 'Yes. Our Mercedes Sprinter vans seat up to 14 passengers, and we can run multiple vehicles for larger parties. Everyone leaves together, arrives together, and nobody has to be the designated driver.',
  },
  {
    q: 'How far in advance should I book concert transportation?',
    a: 'Book at least 48 hours ahead for most events. For stadium shows, sold-out tours, and weekend dates, book as soon as you have tickets — event-night vehicles are the first to sell out.',
  },
  {
    q: 'Do you offer round trips and hourly service for event nights?',
    a: 'Both. Round trips include a confirmed post-show pickup point. Hourly service keeps your chauffeur with you all evening — ideal if you want dinner before the show or have multiple stops.',
  },
];

const venues = [
  {
    name: 'CFG Bank Arena',
    location: 'Baltimore, MD',
    to: '/cfg-bank-arena-transportation',
    description:
      'Maryland’s busiest concert arena, rebuilt in 2023 in downtown Baltimore. We drop you at the door and beat the garage lines on the way out.',
  },
  {
    name: 'Merriweather Post Pavilion',
    location: 'Columbia, MD',
    to: '/merriweather-post-pavilion-transportation',
    description:
      'The legendary outdoor amphitheater between Baltimore and DC. Skip lots that take an hour to empty — your chauffeur stages past the bottleneck.',
  },
  {
    name: 'Capital One Arena',
    location: 'Washington, DC',
    to: '/capital-one-arena-transportation',
    description:
      'Concerts, Capitals, and Wizards in DC’s Chinatown. Door-to-door transfers from Maryland, Virginia, and all three airports.',
  },
  {
    name: 'Jiffy Lube Live',
    location: 'Bristow, VA',
    description:
      'Northern Virginia’s 25,000-capacity amphitheater is notorious for exit traffic on Route 66. Ride out relaxed while the lots crawl.',
  },
  {
    name: 'M&T Bank Stadium',
    location: 'Baltimore, MD',
    to: '/baltimore-sports-transportation',
    description:
      'Ravens games and stadium-sized tours. Gate-side drop-off, tailgate-friendly timing, and a confirmed pickup after the final whistle.',
  },
  {
    name: 'Camden Yards',
    location: 'Baltimore, MD',
    to: '/baltimore-sports-transportation',
    description:
      'Orioles baseball and summer concert series at America’s classic ballpark, one block from the Inner Harbor.',
  },
];

const ConcertTransportationPage = () => {
  return (
    <>
      <Helmet>
        <title>BWI Concert & Event Transportation | Baltimore, DC & VA</title>
        <meta
          name="description"
          content="Luxury concert and event transportation across Baltimore, DC, and Virginia. CFG Bank Arena, Merriweather, Capital One Arena, Jiffy Lube Live & more. (877) 609-1919."
        />
        <meta
          name="keywords"
          content="concert transportation Baltimore, event limo service, CFG Bank Arena limo, Merriweather Post Pavilion transportation, Capital One Arena car service, Jiffy Lube Live limo, M&T Bank Stadium transportation, Camden Yards limo, concert car service DC"
        />
        <link rel="canonical" href="https://bwichauffeur.com/concert-transportation/" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: concertFaqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black">
        <div className="pt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Services', to: '/services' }, { label: 'Concert & Event Transportation' }]} />
        </div>

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="BWI Concert and Event Transportation - Luxury Chauffeur Service to Baltimore, Washington DC and Virginia Concert Venues"
              loading="eager"
              fetchpriority="high"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Concert & Event <span style={{ color: '#D4AF37' }}>Transportation</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Luxury chauffeured rides to every major venue in Baltimore, Washington DC, and Northern Virginia.
              You handle the tickets — we handle the traffic, the parking, and the ride home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all duration-300"
                data-testid="book-concert-ride-btn"
              >
                Book Event Transportation
              </Link>
              <a
                href="tel:+18776091919"
                className="px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
              >
                Call (877) 609-1919
              </a>
            </div>
          </div>
        </section>

        {/* Intro copy */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              The Best Night Out Starts <span style={{ color: '#D4AF37' }}>Before the Show</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              A great concert should not begin with 40 minutes of circling a parking garage. It should not end with an
              hour of brake lights in a venue lot, either. BWI Chauffeur provides door-to-door concert and event
              transportation across the entire Baltimore-Washington corridor, so the only thing you think about on show
              night is the show.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              Here is how it works. Your professional chauffeur picks you up at home, at your hotel, or straight from
              your gate at BWI Airport. You ride in a late-model Mercedes sedan, Cadillac Escalade, or Sprinter van with
              bottled water, phone chargers, and room for the whole group. At the venue, you step out at the closest
              drop point to the entrance. While the show plays, your chauffeur tracks it in real time. When the encore
              ends, your vehicle is waiting at a pre-confirmed pickup spot — no surge pricing, no rideshare lot, no
              guessing where your driver went.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              Our chauffeurs work these venues every week. They know that CFG Bank Arena traffic stacks up on Baltimore
              Street, that Merriweather’s lots bottleneck onto Broken Land Parkway, and that DC closes curb lanes around
              Capital One Arena on event nights. That local knowledge is the difference between being home by 11:30 and
              still sitting in a parking deck at midnight.
            </p>
            <p className="text-gray-300 text-lg">
              We serve concerts, festivals, stadium tours, NFL and MLB games, comedy shows, and private events. One-way
              transfers, round trips, and hourly bookings are all available, seven days a week.
            </p>
          </div>
        </section>

        {/* Venues grid */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Venues We <span style={{ color: '#D4AF37' }}>Serve</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Every major arena, amphitheater, and stadium in Maryland, Washington DC, and Northern Virginia.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {venues.map((venue) => {
                const card = (
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                        <Music className="h-6 w-6 text-[#D4AF37]" />
                      </div>
                      <span className="flex items-center text-gray-500 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {venue.location}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{venue.name}</h3>
                    <p className="text-gray-400">{venue.description}</p>
                    {venue.to && (
                      <span className="inline-block mt-4 text-[#D4AF37] font-semibold">View venue service →</span>
                    )}
                  </>
                );
                const className =
                  'bg-black/50 border border-gray-800 rounded-xl p-6 hover:border-[#D4AF37]/50 transition-all duration-300 block';
                return venue.to ? (
                  <Link key={venue.name} to={venue.to} className={className}>
                    {card}
                  </Link>
                ) : (
                  <div key={venue.name} className={className}>
                    {card}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Why Fans Choose <span style={{ color: '#D4AF37' }}>BWI Chauffeur</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Car,
                  title: 'No Parking, No Stress',
                  description: 'Venue parking is pricey and sells out early. Skip the garage entirely — and the hour it takes to leave it.',
                },
                {
                  icon: Clock,
                  title: 'Show-Aware Pickups',
                  description: 'Encores, rain delays, overtime — your chauffeur tracks the event and adjusts at no extra charge.',
                },
                {
                  icon: Users,
                  title: 'Whole-Group Rides',
                  description: 'Sedans for date night, Escalades for friends, Sprinter vans for up to 14. Everyone rides together.',
                },
                {
                  icon: Shield,
                  title: 'Licensed & Insured',
                  description: 'Professional chauffeurs, commercial insurance, and a safe, sober ride home after the last song.',
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-[#D4AF37]/50 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-7 w-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Event Night, <span style={{ color: '#D4AF37' }}>Handled</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Book Your Ride',
                  text: 'Reserve online or call with your event date, venue, and pickup location. We confirm your vehicle and chauffeur in advance.',
                },
                {
                  step: '2',
                  title: 'Ride to the Show',
                  text: 'Door-to-door pickup with time built in for dinner or tailgating. Drop-off at the closest venue access point.',
                },
                {
                  step: '3',
                  title: 'Walk Out to Your Car',
                  text: 'Your chauffeur confirms the pickup spot before the show ends. You walk out, get in, and go home.',
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] rounded-full flex items-center justify-center text-black text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Concert Transportation <span style={{ color: '#D4AF37' }}>FAQs</span>
            </h2>
            <div className="space-y-4">
              {concertFaqs.map((f) => (
                <div key={f.q} className="bg-gray-900/60 border border-[#D4AF37]/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{f.q}</h3>
                  <p className="text-gray-400">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#D4AF37]/10 via-black to-[#D4AF37]/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Ticket className="h-12 w-12 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Got Tickets? <span style={{ color: '#D4AF37' }}>Get Your Ride.</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Event-night vehicles book up fast — especially for sold-out tours and stadium shows. Reserve your
              chauffeur now and make the ride part of the night.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all duration-300"
              >
                Book Your Ride Now
              </Link>
              <a
                href="tel:+18776091919"
                className="px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>(877) 609-1919</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConcertTransportationPage;
