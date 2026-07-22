import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Phone,
  Clock,
  MapPin,
  CheckCircle2,
  Plane,
  Shield,
  Car,
  ChevronRight,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { BWI_ROUTES, findRouteBySlug } from '../data/bwiRoutes';
import Breadcrumbs from '../components/Breadcrumbs';

const RoutePage = ({ route }) => {
  const navigate = useNavigate();

  if (!route) return null;

  // Always show 4 related routes. Start with the curated `nearby_links`, then
  // backfill with other BWI routes (excluding the current one) until we reach 4.
  const relatedRoutes = (() => {
    const seen = new Set([route.slug]);
    const out = [];
    (route.nearby_links || []).forEach((slug) => {
      if (seen.has(slug)) return;
      const r = findRouteBySlug(slug);
      if (r) {
        out.push(r);
        seen.add(slug);
      }
    });
    for (const r of BWI_ROUTES) {
      if (out.length >= 4) break;
      if (!seen.has(r.slug)) {
        out.push(r);
        seen.add(r.slug);
      }
    }
    return out.slice(0, 4);
  })();

  const title = route.metaTitle || `BWI to ${route.destination} | Flat Rate Car Service`;
  const canonical = `https://bwichauffeur.com/${route.slug}`;

  const faqs = [
    {
      q: `How much does BWI to ${route.destination} transportation cost?`,
      a: `BWI to ${route.destination} is quoted as one locked-in flat rate. The exact price depends on vehicle type and drop-off address — call 877-609-1919 or request an instant quote online for pricing.`,
    },
    {
      q: `How long is the drive from BWI to ${route.destination}?`,
      a: `The drive from BWI Airport to ${route.destination} usually takes ${route.drive_time}, covering about ${route.distance}. Our chauffeurs watch traffic in real time and reroute as needed.`,
    },
    {
      q: 'Do you track my flight?',
      a: 'Yes. Every booking includes real-time flight tracking. You get 60 minutes of free wait time for domestic flights and 90 minutes for international arrivals.',
    },
    {
      q: 'Is the price fixed, or can it change?',
      a: 'Your quoted flat rate is the price you pay. There is no surge pricing and no hidden fees — tolls and gratuity are included.',
    },
  ];

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={route.metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={route.metaDescription} />
        <meta property="og:image" content="https://bwichauffeur.com/logo.jpeg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={route.metaDescription} />
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-black pt-32 pb-16" data-testid={`route-page-${route.slug}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="mb-8 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: 'Service Areas', to: '/service-areas' },
              { label: `BWI to ${route.destination}` },
            ]}
          />

          {/* Hero */}
          <header className="mb-12">
            <Badge className="bg-[#D4AF37] text-black border-none mb-4 font-semibold tracking-wide uppercase text-[10px]">
              Airport Transfer Route
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
              BWI Airport to{' '}
              <span className="text-[#D4AF37]">{route.headline}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
              {route.intro}
            </p>

            {/* Quick stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/30 rounded-lg p-4">
                <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest mb-1">
                  <MapPin className="h-3.5 w-3.5 text-[#D4AF37]" /> Distance
                </div>
                <p className="text-white font-bold text-lg">{route.distance}</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/30 rounded-lg p-4">
                <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest mb-1">
                  <Clock className="h-3.5 w-3.5 text-[#D4AF37]" /> Drive Time
                </div>
                <p className="text-white font-bold text-lg">{route.drive_time}</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/30 rounded-lg p-4">
                <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest mb-1">
                  <Car className="h-3.5 w-3.5 text-[#D4AF37]" /> Pricing
                </div>
                <p className="text-white font-bold text-lg">Flat rate — call for quote</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/30 rounded-lg p-4">
                <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest mb-1">
                  <Plane className="h-3.5 w-3.5 text-[#D4AF37]" /> Availability
                </div>
                <p className="text-white font-bold text-lg">24 / 7</p>
              </div>
            </div>
          </header>

          {/* Primary CTA */}
          <Card className="bg-gradient-to-r from-[#D4AF37]/15 to-[#F4E5C3]/10 border-[#D4AF37]/40 mb-12">
            <CardContent className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-[#F4E5C3] text-sm uppercase tracking-widest mb-1 font-semibold">
                  Reserve your transfer
                </p>
                <p className="text-white text-lg md:text-xl font-semibold">
                  Flat rate. Flight tracked. Real chauffeur.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="tel:+18776091919"
                  className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold rounded-md hover:shadow-lg hover:shadow-[#D4AF37]/40 transition-all"
                  data-testid="route-call-cta"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  877-609-1919
                </a>
                <Link
                  to="/booking"
                  className="inline-flex items-center px-5 py-3 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-semibold rounded-md transition-all"
                  data-testid="route-book-cta"
                  aria-label={`Book BWI to ${route.destination} transfer`}
                >
                  Book BWI to {route.destination}
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Why Choose */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why choose BWI Chauffeur for the{' '}
              <span className="text-[#D4AF37]">{route.destination}</span> route
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {route.why_choose.map((reason, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-5 bg-gradient-to-br from-gray-900/60 to-gray-800/30 border border-[#D4AF37]/20 rounded-lg hover:border-[#D4AF37]/50 transition-colors"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-200 leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What to Expect */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What to expect on the day
            </h2>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/30 rounded-xl p-6 md:p-8">
              <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                {route.what_to_expect}
              </p>
            </div>
          </section>

          {/* Service Details */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Service details
            </h2>
            <ul className="space-y-3">
              {route.service_details.map((detail, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-4 bg-gray-900/40 border border-gray-800 rounded-lg"
                >
                  <ChevronRight className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">{detail}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Trust strip */}
          <section className="mb-12 grid sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/30 rounded-lg">
              <Shield className="h-6 w-6 text-[#D4AF37] flex-shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">Licensed &amp; Insured</p>
                <p className="text-gray-400 text-xs">Maryland PSC carrier</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/30 rounded-lg">
              <Plane className="h-6 w-6 text-[#D4AF37] flex-shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">Flight Tracked</p>
                <p className="text-gray-400 text-xs">60–90 min free wait</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/30 rounded-lg">
              <Clock className="h-6 w-6 text-[#D4AF37] flex-shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">24 / 7 Dispatch</p>
                <p className="text-gray-400 text-xs">Same-day bookings welcome</p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mb-12 bg-gradient-to-r from-[#D4AF37]/15 to-[#F4E5C3]/10 border border-[#D4AF37]/40 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Ready to book BWI to {route.destination}?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              One locked-in <span className="text-[#D4AF37] font-bold">flat rate</span> — contact us for pricing.
              No surge, no surprise. A real chauffeur, a real vehicle, and a guaranteed pickup —
              every single time.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+18776091919"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold rounded-md hover:shadow-lg hover:shadow-[#D4AF37]/40 transition-all"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call 877-609-1919
              </a>
              <Link
                to="/booking"
                className="inline-flex items-center px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-semibold rounded-md transition-all"
                aria-label={`Reserve your BWI to ${route.destination} ride`}
              >
                Reserve This {route.destination} Ride
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12" data-testid="route-faq">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently asked <span className="text-[#D4AF37]">questions</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div
                  key={f.q}
                  className="bg-gray-900/60 border border-[#D4AF37]/20 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{f.q}</h3>
                  <p className="text-gray-400">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related routes — always 4 */}
          <section className="mb-8" data-testid="related-routes">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">
              Related <span className="text-[#D4AF37]">BWI Routes</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedRoutes.map((r) => (
                <Link
                  key={r.slug}
                  to={`/${r.slug}`}
                  className="group bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-lg p-5 transition-colors"
                  data-testid={`related-route-${r.slug}`}
                >
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Airport Transfer
                  </p>
                  <p className="text-white font-bold text-lg group-hover:text-[#D4AF37] transition-colors leading-snug">
                    BWI → {r.destination}
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    {r.drive_time} · flat rate
                  </p>
                  <p className="text-[#D4AF37] text-sm font-semibold mt-3 inline-flex items-center">
                    View route
                    <ChevronRight className="h-4 w-4 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-5 text-center">
              <Link
                to="/service-areas"
                className="inline-flex items-center text-[#D4AF37] hover:text-[#F4E5C3] text-sm font-semibold"
              >
                See all service areas
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default RoutePage;
