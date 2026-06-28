import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import {
  Phone, Plane, Briefcase, Heart, Users, Clock, Star, Shield,
  MapPin, CheckCircle, Ship, Car, ArrowRight, BadgeCheck
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { getNearbyCities } from '../data/cities';
import Breadcrumbs from '../components/Breadcrumbs';

const PHONE_DISPLAY = '877-679-0100';
const PHONE_TEL = 'tel:+18776790100';

const buildServices = (city) => {
  const base = [
    {
      icon: Plane,
      title: `BWI Airport Car Service`,
      description: `Door-to-terminal luxury transfers from ${city.name} to BWI Marshall Airport in about ${city.minutes} minutes — with real-time flight tracking and complimentary wait time.`,
    },
    {
      icon: Briefcase,
      title: 'Corporate & Executive Travel',
      description: `Professional black car service for ${city.name} executives — discreet chauffeurs, immaculate vehicles, and on-time arrivals for meetings across the DMV.`,
    },
    {
      icon: Heart,
      title: 'Weddings & Special Events',
      description: `Elegant chauffeured transportation for weddings, proms, anniversaries, and celebrations in and around ${city.name}.`,
    },
    {
      icon: Users,
      title: 'Group & Family Transportation',
      description: 'Spacious luxury SUVs with room for the whole family and all your luggage — child car seats available on request.',
    },
    {
      icon: Clock,
      title: 'Hourly Chauffeur Service',
      description: `Keep a professional chauffeur at your disposal by the hour — perfect for multi-stop days, nights out, and city tours from ${city.name}.`,
    },
  ];

  if (city.emphasis === 'cruise') {
    base.splice(1, 0, {
      icon: Ship,
      title: 'Port of Baltimore Cruise Transfers',
      description: `Direct transfers from ${city.name} to the Cruise Maryland Terminal at South Locust Point — luggage assistance included, arrival timed to your boarding window.`,
    });
  } else if (city.emphasis === 'dc-airports') {
    base.splice(1, 0, {
      icon: Plane,
      title: 'DCA & Dulles Airport Transfers',
      description: `Flat-rate chauffeured transfers from ${city.name} to Reagan National (DCA) and Dulles International (IAD) — often the closest airports for Montgomery County travelers.`,
    });
  } else if (city.emphasis === 'long-distance') {
    base.splice(1, 0, {
      icon: Car,
      title: 'Long-Distance Direct Transfers',
      description: `Private, non-stop transfers from ${city.name} — no shared shuttles, no extra stops. Just you, your chauffeur, and a comfortable luxury vehicle.`,
    });
  }
  return base.slice(0, 6);
};

const buildRoutes = (city) => {
  const routes = [
    { to: 'BWI Marshall Airport', time: `~${city.minutes} min` },
    { to: 'Reagan National Airport (DCA)', time: 'Flat rate' },
    { to: 'Dulles International (IAD)', time: 'Flat rate' },
    { to: 'Port of Baltimore Cruise Terminal', time: 'Flat rate' },
    { to: 'Baltimore Penn Station', time: 'Flat rate' },
    { to: 'Washington, DC (Downtown)', time: 'Flat rate' },
  ];
  return routes;
};

const buildFaqs = (city) => {
  const faqs = [
    {
      q: `How much does a car service from ${city.name} to BWI Airport cost?`,
      a: `BWI Chauffeur offers flat-rate pricing from ${city.name}, MD to BWI Airport — the price you're quoted is the price you pay, with no surge fees or hidden charges. Call ${PHONE_DISPLAY} or request a free quote online for an exact rate for your vehicle and travel date.`,
    },
    {
      q: `How far is ${city.name} from BWI Airport?`,
      a: `${city.name} is approximately ${city.miles} miles from BWI Marshall Airport — about ${city.minutes >= 60 ? `${Math.floor(city.minutes / 60)} hour${city.minutes >= 120 ? 's' : ''}${city.minutes % 60 ? ` ${city.minutes % 60} minutes` : ''}` : `${city.minutes} minutes`} by car. Our chauffeurs monitor traffic in real time and plan pickups so you arrive with comfortable time to spare.`,
    },
    {
      q: `Do you offer 24/7 limo service in ${city.name}, MD?`,
      a: `Yes. BWI Chauffeur operates 24 hours a day, 7 days a week, 365 days a year in ${city.name}. Early-morning departures, late-night arrivals, weekends, and holidays are all covered — just book in advance to guarantee your vehicle.`,
    },
  ];

  if (city.emphasis === 'cruise') {
    faqs.push({
      q: `Can I get a ride from ${city.name} to the Port of Baltimore cruise terminal?`,
      a: `Absolutely. We provide direct transfers from ${city.name} to the Cruise Maryland Terminal at 2001 East McComas Street. Book a round trip and your chauffeur will be waiting when your ship returns — luggage assistance is always included.`,
    });
  } else if (city.emphasis === 'dc-airports') {
    faqs.push({
      q: `Do you serve Reagan National (DCA) and Dulles (IAD) from ${city.name}?`,
      a: `Yes — we serve all three regional airports from ${city.name}: BWI, DCA, and Dulles. Many ${city.name} travelers find DCA or Dulles closer; we quote flat rates for each so you can choose what works best for your itinerary.`,
    });
  } else if (city.emphasis === 'long-distance') {
    faqs.push({
      q: `Is a private car service from ${city.name} better than an airport shuttle?`,
      a: `For most travelers, yes. A shared shuttle makes multiple stops and follows its own schedule; BWI Chauffeur picks you up at your door at the time you choose and drives directly to your terminal. For groups and families, a private SUV is often comparable in cost — and far more comfortable.`,
    });
  } else {
    faqs.push({
      q: `How early should I book my airport pickup in ${city.name}?`,
      a: `We recommend booking at least 24 hours in advance to guarantee availability, especially for early-morning flights. That said, we accommodate last-minute requests whenever possible — call ${PHONE_DISPLAY} and we'll do our best to get a chauffeur to you.`,
    });
  }
  return faqs;
};

const CityPage = ({ city }) => {
  const services = buildServices(city);
  const routes = buildRoutes(city);
  const faqs = buildFaqs(city);
  const nearby = getNearbyCities(city, 8);
  const pageUrl = `https://bwichauffeur.com/limo-service-${city.slug}`;
  const title = `Limo Service ${city.name}, MD 2026 | Flat-Rate BWI Airport & Black Car Service`;
  const description = `Top-rated limo & black car service in ${city.name}, MD. Flat-rate BWI airport transfers (~${city.minutes} min), corporate travel, weddings & 24/7 chauffeur service. Call ${PHONE_DISPLAY}.`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `Limo & Black Car Service in ${city.name}, MD`,
        serviceType: 'Chauffeured Car Service',
        url: pageUrl,
        areaServed: { '@type': 'City', name: `${city.name}`, address: { '@type': 'PostalAddress', addressRegion: 'MD', addressCountry: 'US' } },
        provider: {
          '@type': 'LocalBusiness',
          name: 'BWI Chauffeur',
          telephone: '+1-877-679-0100',
          email: 'info@bwichauffeur.com',
          url: 'https://bwichauffeur.com',
          image: 'https://bwichauffeur.com/logo.jpeg',
          address: { '@type': 'PostalAddress', addressLocality: 'Baltimore', addressRegion: 'MD', addressCountry: 'US' },
          priceRange: '$$',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bwichauffeur.com/' },
          { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://bwichauffeur.com/service-areas' },
          { '@type': 'ListItem', position: 3, name: `${city.name}, MD`, item: pageUrl },
        ],
      },
    ],
  };

  const benefits = [
    'Licensed & fully insured',
    'Professional uniformed chauffeurs',
    'Flat rates — no surge pricing',
    'Real-time flight tracking',
    'Free wait time on delays',
    'Luggage assistance included',
    'Late-model luxury vehicles',
    '24/7 availability, 365 days',
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-black pt-32 pb-16" data-testid={`city-page-${city.slug}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Breadcrumbs
            items={[
              { label: 'Service Areas', to: '/service-areas' },
              { label: `${city.name}, MD` },
            ]}
          />

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-6">
              <MapPin className="h-4 w-4 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm font-semibold tracking-wide">{city.county}, Maryland</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="city-page-heading">
              Limo Service in <span className="text-[#D4AF37]">{city.name}, MD</span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-8">
              {city.intro}
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-sm text-gray-300">
              <span className="flex items-center"><Star className="h-4 w-4 text-[#D4AF37] fill-[#D4AF37] mr-1.5" /> 5-Star Rated Service</span>
              <span className="flex items-center"><Shield className="h-4 w-4 text-[#D4AF37] mr-1.5" /> Licensed & Insured</span>
              <span className="flex items-center"><BadgeCheck className="h-4 w-4 text-[#D4AF37] mr-1.5" /> Professional Chauffeurs</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={PHONE_TEL} data-testid="city-call-cta">
                <Button className="bg-[#D4AF37] text-black hover:bg-[#C4A030] font-semibold px-8 py-3 w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Call {PHONE_DISPLAY}
                </Button>
              </a>
              <Link to="/booking" data-testid="city-quote-cta">
                <Button variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-8 py-3 w-full sm:w-auto">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16" data-testid="city-stats-strip">
            {[
              { label: 'Miles to BWI', value: `${city.miles} mi` },
              { label: 'Drive Time to BWI', value: city.minutes >= 60 ? `~${Math.floor(city.minutes / 60)}h ${city.minutes % 60 ? `${city.minutes % 60}m` : ''}` : `~${city.minutes} min` },
              { label: 'Availability', value: '24/7' },
              { label: 'Pricing', value: 'Flat Rate' },
            ].map((s, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-xl p-5 text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#D4AF37]">{s.value}</div>
                <div className="text-gray-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-base md:text-lg font-semibold text-[#D4AF37] text-center uppercase tracking-widest mb-2">Our Services</h2>
            <p className="text-3xl font-bold text-white text-center mb-10">
              Chauffeured Services in <span className="text-[#D4AF37]">{city.name}</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#D4AF37]/20 rounded-full mb-4">
                      <service.icon className="h-6 w-6 text-[#D4AF37]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Local content + routes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Your Local Chauffeur in <span className="text-[#D4AF37]">{city.name}</span>
              </h2>
              <p className="text-gray-300 mb-6">{city.localNote}</p>
              <h3 className="text-base md:text-lg font-bold text-[#D4AF37] mb-3">Areas & Landmarks We Serve</h3>
              <ul className="space-y-2">
                {city.landmarks.map((l, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <MapPin className="h-4 w-4 text-[#D4AF37] mr-2 flex-shrink-0" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Popular Routes from <span className="text-[#D4AF37]">{city.name}</span>
              </h2>
              <ul className="divide-y divide-gray-800">
                {routes.map((r, i) => (
                  <li key={i} className="flex items-center justify-between py-3">
                    <span className="flex items-center text-gray-300">
                      <Car className="h-4 w-4 text-[#D4AF37] mr-3 flex-shrink-0" />
                      {city.name} → {r.to}
                    </span>
                    <span className="text-[#D4AF37] text-sm font-semibold whitespace-nowrap ml-3">{r.time}</span>
                  </li>
                ))}
              </ul>
              <Link to="/booking" className="mt-6 inline-flex items-center text-[#D4AF37] hover:text-[#F4E5C3] font-semibold transition-colors" data-testid="city-routes-quote-link">
                Get an exact quote for your route <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Why choose us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-10">
              Why {city.name} Chooses <span className="text-[#D4AF37]">BWI Chauffeur</span>
            </h2>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mid-page CTA */}
          <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-2xl p-8 mb-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Need a Ride in {city.name}? Book in 60 Seconds.</h2>
            <p className="text-gray-300 mb-6">Flat-rate pricing. Professional chauffeurs. Guaranteed pickup — even at 4 AM.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={PHONE_TEL}>
                <Button className="bg-[#D4AF37] text-black hover:bg-[#C4A030] font-semibold px-8 py-3 w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  {PHONE_DISPLAY}
                </Button>
              </a>
              <Link to="/booking">
                <Button variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-8 py-3 w-full sm:w-auto">
                  Book Online Now
                </Button>
              </Link>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-10">
              {city.name} Car Service <span className="text-[#D4AF37]">FAQs</span>
            </h2>
            <div className="space-y-4 max-w-4xl mx-auto" data-testid="city-faqs">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-xl p-6">
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nearby cities */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              We Also Serve <span className="text-[#D4AF37]">Nearby Cities</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3" data-testid="city-nearby-links">
              {nearby.map((c) => (
                <Link
                  key={c.slug}
                  to={`/limo-service-${c.slug}`}
                  className="px-4 py-2 bg-gray-900 border border-[#D4AF37]/20 hover:border-[#D4AF37] text-gray-300 hover:text-[#D4AF37] rounded-full text-sm transition-colors"
                >
                  Limo Service {c.name}, MD
                </Link>
              ))}
              <Link
                to="/service-areas"
                className="px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black rounded-full text-sm font-semibold transition-colors"
              >
                View All Service Areas →
              </Link>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Book Your {city.name} Chauffeur Today
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join the {city.name} travelers who never worry about airport rides again. Reserve your luxury vehicle now — it takes less than a minute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" data-testid="city-final-book-cta">
                <Button className="bg-[#D4AF37] text-black hover:bg-[#C4A030] font-semibold px-8 py-4 text-lg w-full sm:w-auto">
                  Book Now
                </Button>
              </Link>
              <a href={PHONE_TEL}>
                <Button variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-8 py-4 text-lg w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Call {PHONE_DISPLAY}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CityPage;
