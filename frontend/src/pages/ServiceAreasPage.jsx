import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowRight, Star, Shield, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { REGIONS, getCitiesByRegion, CITIES } from '../data/cities';
import { BWI_ROUTES } from '../data/bwiRoutes';
import { MARYLAND_PAGES } from '../data/marylandPages';
import { CONCERT_VENUES } from '../data/concertVenues';
import { GUIDES } from '../data/guides';

// Directory of every data-driven landing page, so each one is reachable by a
// crawlable link from this hub (they were previously linked only from each other).
const DIRECTORY = [
  { title: 'More Maryland', accent: 'Cities', items: MARYLAND_PAGES.filter((p) => p.type === 'city').map((p) => ({ to: `/${p.slug}`, label: p.h1 })) },
  { title: 'Point-to-Point', accent: 'Routes', items: MARYLAND_PAGES.filter((p) => p.type === 'route').map((p) => ({ to: `/${p.slug}`, label: p.h1 })) },
  { title: 'Chauffeur', accent: 'Services', items: MARYLAND_PAGES.filter((p) => p.type === 'service').map((p) => ({ to: `/${p.slug}`, label: p.h1 })) },
  { title: 'Events &', accent: 'Venues', items: [...MARYLAND_PAGES.filter((p) => p.type === 'event').map((p) => ({ to: `/${p.slug}`, label: p.h1 })), ...CONCERT_VENUES.map((v) => ({ to: `/${v.slug}`, label: v.name }))] },
  { title: 'Local & Airport', accent: 'Guides', items: GUIDES.map((g) => ({ to: `/${g.slug}`, label: g.title })) },
];
import FaqSection from '../components/FaqSection';
import { PAGE_FAQS } from '../data/pageFaqs';
import Breadcrumbs from '../components/Breadcrumbs';

const ServiceAreasPage = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'BWI Chauffeur Service Areas — Maryland Limo & Car Service Cities',
    url: 'https://www.bwichauffeur.com/service-areas',
    hasPart: CITIES.map((c) => ({
      '@type': 'WebPage',
      name: `Limo Service ${c.name}, MD`,
      url: `https://www.bwichauffeur.com/limo-service-${c.slug}`,
    })),
  };

  return (
    <>
      <Helmet>
        <title>Service Areas | Maryland Limo & Car Service Cities</title>
        <meta
          name="description"
          content="BWI Chauffeur serves 45+ Maryland cities with luxury limo, black car & airport car service — Baltimore, Columbia, Annapolis, Bethesda & more."
        />
        <link rel="canonical" href="https://www.bwichauffeur.com/service-areas" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-black pt-32 pb-16" data-testid="service-areas-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Service Areas' }]} />
          {/* Hero */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#D4AF37]/20 rounded-full mb-6">
              <MapPin className="h-10 w-10 text-[#D4AF37]" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Cities We <span className="text-[#D4AF37]">Serve</span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-8">
              BWI Chauffeur provides luxury limo, black car, and airport transportation across 45+ Maryland
              communities — from Baltimore to Bethesda, Annapolis to Ocean City. Find your city below for
              local rates, routes, and details.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-sm text-gray-300">
              <span className="flex items-center"><Star className="h-4 w-4 text-[#D4AF37] fill-[#D4AF37] mr-1.5" /> 5-Star Rated</span>
              <span className="flex items-center"><Shield className="h-4 w-4 text-[#D4AF37] mr-1.5" /> Licensed & Insured</span>
              <span className="flex items-center"><Clock className="h-4 w-4 text-[#D4AF37] mr-1.5" /> 24/7 Availability</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+18776091919">
                <Button className="bg-[#D4AF37] text-black hover:bg-[#C4A030] font-semibold px-8 py-3 w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  877-609-1919
                </Button>
              </a>
              <Link to="/booking">
                <Button variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-8 py-3 w-full sm:w-auto">
                  Get a Quote for Your Area
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Coverage overview */}
          <div className="max-w-4xl mx-auto mb-14 text-gray-300 leading-relaxed space-y-4">
            <p>
              We built this page as a single directory to every city, route, service, and venue
              page on the site, because our coverage area has grown well past the handful of
              communities we started with. Each community below links to its own page with local
              drive times to BWI, nearby landmarks our chauffeurs know well, and pricing specific
              to that pickup zone — rather than one generic page trying to speak to all of Central
              Maryland at once.
            </p>
            <p>
              Not seeing your exact neighborhood listed? We still serve you. Our coverage extends
              across the full Baltimore–Washington corridor, the Eastern Shore, and Southern
              Maryland; if your town isn't one of the 45+ pages below, call 877-609-1919 or
              request a quote and we'll confirm pricing and availability for your address directly.
            </p>
          </div>

          {/* Popular BWI Routes */}
          <div
            className="mb-10 bg-gradient-to-br from-[#D4AF37]/10 to-black border border-[#D4AF37]/30 rounded-2xl p-8"
            data-testid="popular-bwi-routes"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Popular <span className="text-[#D4AF37]">BWI Airport Routes</span>
            </h2>
            <p className="text-gray-400 mb-6 text-sm">
              Flat-rate, flight-tracked transfers from BWI to the region&apos;s most-requested destinations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {BWI_ROUTES.map((route) => (
                <Link
                  key={route.slug}
                  to={`/${route.slug}`}
                  className="group flex items-center justify-between px-4 py-3 bg-black/50 border border-gray-800 hover:border-[#D4AF37] rounded-lg transition-colors"
                  data-testid={`bwi-route-link-${route.slug}`}
                >
                  <div className="min-w-0">
                    <p className="text-gray-200 group-hover:text-[#D4AF37] transition-colors text-sm font-semibold truncate">
                      BWI → {route.destination}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5">
                      {route.drive_time} · flat rate
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-600 group-hover:text-[#D4AF37] transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>

          {/* Regions */}
          <div className="space-y-10">
            {REGIONS.map((region) => {
              const cities = getCitiesByRegion(region.key);
              return (
                <div
                  key={region.key}
                  className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-2xl p-8"
                  data-testid={`region-${region.key}`}
                >
                  <h2 className="text-2xl font-bold text-white mb-2">
                    <span className="text-[#D4AF37]">{region.name}</span>
                  </h2>
                  <p className="text-gray-400 mb-6 text-sm">{region.blurb}</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {cities.map((city) => (
                      <Link
                        key={`${region.key}-${city.slug}`}
                        to={`/limo-service-${city.slug}`}
                        className="group flex items-center justify-between px-4 py-3 bg-black/50 border border-gray-800 hover:border-[#D4AF37] rounded-lg transition-colors"
                        data-testid={`city-link-${region.key}-${city.slug}`}
                      >
                        <span className="text-gray-300 group-hover:text-[#D4AF37] transition-colors text-sm font-medium">
                          {city.name}, MD
                        </span>
                        <ArrowRight className="h-4 w-4 text-gray-600 group-hover:text-[#D4AF37] transition-colors flex-shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Don't See Your City?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We serve all of Maryland, Washington DC, Northern Virginia, and Delaware. Call us — if you need a
              ride, we'll get you there.
            </p>
            <a href="tel:+18776091919">
              <Button className="bg-[#D4AF37] text-black hover:bg-[#C4A030] font-semibold px-8 py-3">
                <Phone className="mr-2 h-5 w-5" />
                Call 877-609-1919
              </Button>
            </a>
          </div>
        </div>
      </div>
      <section className="py-16 bg-black" data-testid="landing-directory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {DIRECTORY.map((group) => (
            <div key={group.accent}>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                {group.title} <span className="text-[#D4AF37]">{group.accent}</span>
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
                {group.items.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <FaqSection faqs={PAGE_FAQS['/service-areas']} />
    </>
  );
};

export default ServiceAreasPage;
