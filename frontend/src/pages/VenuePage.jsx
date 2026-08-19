import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Shield, Car, Users, Music } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import TrustSignals from '../components/TrustSignals';
import { CONCERT_VENUES } from '../data/concertVenues';

const features = [
  {
    icon: Car,
    title: 'Door-to-Venue Service',
    description: 'Pickup at your home, hotel, or office and drop-off at the closest access point to the venue entrance.',
  },
  {
    icon: Clock,
    title: 'Event-Aware Timing',
    description: 'Your chauffeur tracks the show in real time. Encores, delays, and overtime never cost you extra.',
  },
  {
    icon: Users,
    title: 'Group Vehicles',
    description: 'Mercedes Sprinter vans seat up to 14, so the whole group arrives together and leaves together.',
  },
  {
    icon: Shield,
    title: 'Safe Ride Home',
    description: 'Enjoy the night responsibly. A professional, licensed chauffeur handles the late-night drive.',
  },
];

const VenuePage = ({ venue }) => {
  const otherVenues = CONCERT_VENUES.filter((v) => v.slug !== venue.slug);

  return (
    <>
      <Helmet>
        <title>{venue.metaTitle}</title>
        <meta name="description" content={venue.metaDescription} />
        <meta name="keywords" content={venue.keywords} />
        <link rel="canonical" href={`https://www.bwichauffeur.com/${venue.slug}/`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: venue.faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black">
        <div className="pt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Concert Transportation', to: '/concert-transportation' },
              { label: venue.name },
            ]}
          />
        </div>

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={venue.heroImage}
              alt={venue.heroAlt}
              loading="eager"
              fetchpriority="high"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-900/70 border border-[#D4AF37]/40 rounded-full mb-6">
              <MapPin className="h-4 w-4 text-[#D4AF37]" />
              <span className="text-gray-300 text-sm font-semibold">{venue.city}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {venue.name}
              <br />
              <span style={{ color: '#D4AF37' }}>{venue.highlight}</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">{venue.heroTagline}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all duration-300"
                data-testid="book-venue-ride-btn"
              >
                Book Your Ride
              </Link>
              <a
                href="tel:+18776091919"
                className="px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
              >
                Call (877) 609-1919
              </a>
            </div>
            <TrustSignals className="mt-6" />
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {venue.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center hover:border-[#D4AF37]/50 transition-all duration-300"
                >
                  <div className="text-3xl font-bold" style={{ color: '#D4AF37' }}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About the venue */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Chauffeured Service to <span style={{ color: '#D4AF37' }}>{venue.name}</span>
            </h2>
            {venue.about.map((para) => (
              <p key={para.slice(0, 40)} className="text-gray-300 text-lg mb-6">
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Logistics */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Getting There <span style={{ color: '#D4AF37' }}>Without the Hassle</span>
            </h2>
            {venue.logistics.map((para) => (
              <p key={para.slice(0, 40)} className="text-gray-300 text-lg mb-6">
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Why Ride with <span style={{ color: '#D4AF37' }}>BWI Chauffeur</span>?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => (
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

        {/* FAQ */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              {venue.name} <span style={{ color: '#D4AF37' }}>FAQs</span>
            </h2>
            <div className="space-y-4">
              {venue.faqs.map((f) => (
                <div key={f.q} className="bg-gray-900/60 border border-[#D4AF37]/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{f.q}</h3>
                  <p className="text-gray-400">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other venues */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
              More Concert <span style={{ color: '#D4AF37' }}>Venues We Serve</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherVenues.map((v) => (
                <Link
                  key={v.slug}
                  to={`/${v.slug}`}
                  className="bg-black/50 border border-gray-800 rounded-xl p-6 hover:border-[#D4AF37]/50 transition-all duration-300 block"
                >
                  <Music className="h-6 w-6 text-[#D4AF37] mb-3" />
                  <h3 className="text-lg font-bold text-white mb-1">{v.name}</h3>
                  <p className="text-gray-400 text-sm">{v.city}</p>
                </Link>
              ))}
              <Link
                to="/concert-transportation"
                className="bg-black/50 border border-gray-800 rounded-xl p-6 hover:border-[#D4AF37]/50 transition-all duration-300 block"
              >
                <Music className="h-6 w-6 text-[#D4AF37] mb-3" />
                <h3 className="text-lg font-bold text-white mb-1">All Concert & Event Venues</h3>
                <p className="text-gray-400 text-sm">Baltimore, DC & Virginia</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#D4AF37]/10 via-black to-[#D4AF37]/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready for Your Night at <span style={{ color: '#D4AF37' }}>{venue.name}</span>?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Lock in your vehicle before event-night availability runs out. Book online in minutes or call and we
              will handle the details.
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
            <TrustSignals className="mt-6" />
          </div>
        </section>
      </div>
    </>
  );
};

export default VenuePage;
