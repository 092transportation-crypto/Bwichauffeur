import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Shield, Car, Plane, BadgeCheck } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import TrustSignals from '../components/TrustSignals';
import { AIRPORT_PAGES } from '../data/airportPages';

const features = [
  {
    icon: Plane,
    title: 'Real-Time Flight Tracking',
    description: 'We watch your flight, not the clock. Early arrival or long delay, your chauffeur adjusts automatically.',
  },
  {
    icon: Clock,
    title: 'Generous Free Wait Time',
    description: '60 minutes free on domestic arrivals, 90 on international — time to deplane, grab bags, and breathe.',
  },
  {
    icon: Car,
    title: 'Flat Rate — Call for Quote',
    description: 'One locked-in flat rate quoted before you ride. No surge, no meter, no airport-fee surprises.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Maryland PSC carrier with commercial insurance and background-checked professional chauffeurs.',
  },
];

const AirportServicePage = ({ airport }) => {
  const otherAirports = AIRPORT_PAGES.filter((a) => a.slug !== airport.slug);

  return (
    <>
      <Helmet>
        <title>{airport.metaTitle}</title>
        <meta name="description" content={airport.metaDescription} />
        <meta name="keywords" content={airport.keywords} />
        <link rel="canonical" href={`https://www.bwichauffeur.com/${airport.slug}/`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: airport.faqs.map((f) => ({
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
              { label: 'Services', to: '/services' },
              { label: airport.name },
            ]}
          />
        </div>

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={airport.heroImage}
              alt={airport.heroAlt}
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
              <span className="text-gray-300 text-sm font-semibold">{airport.location}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {airport.h1Line1}
              <br />
              <span style={{ color: '#D4AF37' }}>{airport.h1Line2}</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">{airport.heroTagline}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                to="/booking"
                className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all duration-300"
                data-testid="book-airport-ride-btn"
              >
                Book Your Transfer
              </Link>
              <a
                href="tel:+18776091919"
                className="px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
              >
                Call (877) 609-1919
              </a>
            </div>
            <TrustSignals />
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {airport.stats.map((stat) => (
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

        {/* About the service */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {airport.aboutHeading} <span style={{ color: '#D4AF37' }}>{airport.aboutHeadingGold}</span>
            </h2>
            {airport.about.map((para) => (
              <p key={para.slice(0, 40)} className="text-gray-300 text-lg mb-6">
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Logistics / how it works */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {airport.logisticsHeading} <span style={{ color: '#D4AF37' }}>{airport.logisticsHeadingGold}</span>
            </h2>
            {airport.logistics.map((para) => (
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
              {airport.shortName} <span style={{ color: '#D4AF37' }}>FAQs</span>
            </h2>
            <div className="space-y-4">
              {airport.faqs.map((f) => (
                <div key={f.q} className="bg-gray-900/60 border border-[#D4AF37]/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{f.q}</h3>
                  <p className="text-gray-400">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related pages */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
              More Airport <span style={{ color: '#D4AF37' }}>Transfer Services</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherAirports.map((a) => (
                <Link
                  key={a.slug}
                  to={`/${a.slug}`}
                  className="bg-black/50 border border-gray-800 rounded-xl p-6 hover:border-[#D4AF37]/50 transition-all duration-300 block"
                >
                  <Plane className="h-6 w-6 text-[#D4AF37] mb-3" />
                  <h3 className="text-lg font-bold text-white mb-1">{a.shortName}</h3>
                  <p className="text-gray-400 text-sm">{a.location}</p>
                </Link>
              ))}
              {airport.relatedLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="bg-black/50 border border-gray-800 rounded-xl p-6 hover:border-[#D4AF37]/50 transition-all duration-300 block"
                >
                  <BadgeCheck className="h-6 w-6 text-[#D4AF37] mb-3" />
                  <h3 className="text-lg font-bold text-white mb-1">{l.label}</h3>
                  <p className="text-gray-400 text-sm">{l.sub}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#D4AF37]/10 via-black to-[#D4AF37]/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Book Your <span style={{ color: '#D4AF37' }}>{airport.shortName} Transfer</span>?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              One locked-in flat rate — call for a quote. Book online in minutes or speak with a
              reservation specialist 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                to="/booking"
                className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all duration-300"
              >
                Book Your Transfer Now
              </Link>
              <a
                href="tel:+18776091919"
                className="px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>(877) 609-1919</span>
              </a>
            </div>
            <TrustSignals />
          </div>
        </section>
      </div>
    </>
  );
};

export default AirportServicePage;
