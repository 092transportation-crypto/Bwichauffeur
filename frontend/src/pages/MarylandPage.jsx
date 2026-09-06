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
  Users,
  ChevronRight,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import Breadcrumbs from '../components/Breadcrumbs';

const SITE_URL = 'https://www.bwichauffeur.com';
const PHONE_DISPLAY = '877-609-1919';
const PHONE_TEL = 'tel:+18776091919';

// Maryland city, route and service landing pages. Same visual system as
// RoutePage; content comes from src/data/marylandPages.js.
const MarylandPage = ({ page }) => {
  const navigate = useNavigate();
  if (!page) return null;

  const canonical = `${SITE_URL}/${page.slug}`;
  const crumbLabel = page.type === 'route' ? page.name : page.h1;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#business`,
        name: 'BWI Chauffeur',
        telephone: '+1-877-609-1919',
        url: SITE_URL,
        image: `${SITE_URL}/logo.jpeg`,
        priceRange: '$$',
        address: { '@type': 'PostalAddress', addressRegion: 'MD', addressCountry: 'US' },
        areaServed: page.schema.areaServed.map((a) => ({ '@type': 'Place', name: a })),
        openingHours: 'Mo-Su 00:00-23:59',
      },
      {
        '@type': 'Service',
        name: page.h1,
        serviceType: page.schema.serviceType,
        url: canonical,
        description: page.metaDescription,
        areaServed: page.schema.areaServed.map((a) => ({ '@type': 'Place', name: a })),
        provider: { '@id': `${SITE_URL}/#business` },
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE_URL}/service-areas` },
          { '@type': 'ListItem', position: 3, name: crumbLabel, item: canonical },
        ],
      },
    ],
  };

  const bookLabel = page.type === 'route' ? `Book ${page.name}` : `Book ${page.name}`;

  return (
    <>
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={page.metaTitle} />
        <meta property="og:description" content={page.metaDescription} />
        <meta property="og:image" content={`${SITE_URL}/logo.jpeg`} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={page.metaTitle} />
        <meta property="twitter:description" content={page.metaDescription} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-black pt-32 pb-16" data-testid={`maryland-page-${page.slug}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="mb-8 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <Breadcrumbs items={[{ label: 'Service Areas', to: '/service-areas' }, { label: crumbLabel }]} />

          {/* Hero */}
          <header className="mb-12">
            <Badge className="bg-[#D4AF37] text-black border-none mb-4 font-semibold tracking-wide uppercase text-[10px]">
              {page.badge}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">{page.h1}</h1>
            {page.intro.map((p, i) => (
              <p key={i} className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-4">
                {p}
              </p>
            ))}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
              {page.stats.map((s, i) => {
                const Icon = [MapPin, Clock, Car, Plane][i % 4];
                return (
                  <div key={s.label} className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest mb-1">
                      <Icon className="h-3.5 w-3.5 text-[#D4AF37]" /> {s.label}
                    </div>
                    <p className="text-white font-bold text-lg">{s.value}</p>
                  </div>
                );
              })}
            </div>
          </header>

          {/* Primary CTA */}
          <Card className="bg-gradient-to-r from-[#D4AF37]/15 to-[#F4E5C3]/10 border-[#D4AF37]/40 mb-12">
            <CardContent className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-[#F4E5C3] text-sm uppercase tracking-widest mb-1 font-semibold">Reserve your chauffeur</p>
                <p className="text-white text-lg md:text-xl font-semibold">Flat rate. Flight tracked. Real chauffeur.</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold rounded-md hover:shadow-lg hover:shadow-[#D4AF37]/40 transition-all"
                  data-testid="maryland-call-cta"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  {PHONE_DISPLAY}
                </a>
                <Link
                  to="/booking"
                  className="inline-flex items-center px-5 py-3 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-semibold rounded-md transition-all"
                  data-testid="maryland-book-cta"
                >
                  {bookLabel}
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Highlights */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why choose BWI Chauffeur for <span className="text-[#D4AF37]">{page.name}</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {page.highlights.map((reason, i) => (
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

          {/* Content sections */}
          {page.sections.map((s) => (
            <section key={s.h2} className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{s.h2}</h2>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/30 rounded-xl p-6 md:p-8 space-y-4">
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="text-gray-200 text-base md:text-lg leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}

          {/* Vehicles */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Vehicles available for <span className="text-[#D4AF37]">{page.name}</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {page.vehicles.map((v) => (
                <div key={v.name} className="p-5 bg-gray-900/40 border border-gray-800 rounded-lg">
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">{v.cls}</p>
                  <p className="text-white font-bold text-lg">{v.name}</p>
                  <p className="text-gray-400 text-sm mt-2 flex items-center gap-2">
                    <Users className="h-4 w-4 text-[#D4AF37]" /> Up to {v.seats} passengers · {v.best}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link to="/luxury-fleet" className="inline-flex items-center text-[#D4AF37] hover:text-[#F4E5C3] text-sm font-semibold">
                See the full fleet <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </section>

          {/* Trust strip */}
          <section className="mb-12 grid sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/30 rounded-lg">
              <Shield className="h-6 w-6 text-[#D4AF37] flex-shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">Licensed &amp; Insured</p>
                <p className="text-gray-400 text-xs">Maryland PSC Carrier No. 6325</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/30 rounded-lg">
              <Plane className="h-6 w-6 text-[#D4AF37] flex-shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">BWI · DCA · IAD</p>
                <p className="text-gray-400 text-xs">45–60 min free wait</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Ready to book {page.name}?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              One locked-in <span className="text-[#D4AF37] font-bold">flat rate</span> — call {PHONE_DISPLAY} or request a
              quote online. No surge, no surprise. A real chauffeur, a real vehicle and a guaranteed pickup.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold rounded-md hover:shadow-lg hover:shadow-[#D4AF37]/40 transition-all"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call {PHONE_DISPLAY}
              </a>
              <Link
                to="/booking"
                className="inline-flex items-center px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-semibold rounded-md transition-all"
              >
                Request a Quote
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12" data-testid="maryland-faq">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently asked <span className="text-[#D4AF37]">questions</span>
            </h2>
            <div className="space-y-4">
              {page.faqs.map((f) => (
                <div key={f.q} className="bg-gray-900/60 border border-[#D4AF37]/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{f.q}</h3>
                  <p className="text-gray-400">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related pages */}
          <section className="mb-8" data-testid="maryland-related">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">
              Related <span className="text-[#D4AF37]">Maryland Service</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {page.related.map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  className="group bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-lg p-5 transition-colors"
                >
                  <p className="text-white font-bold text-lg group-hover:text-[#D4AF37] transition-colors leading-snug">{r.label}</p>
                  <p className="text-[#D4AF37] text-sm font-semibold mt-3 inline-flex items-center">
                    View page
                    <ChevronRight className="h-4 w-4 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-5 text-center">
              <Link to="/service-areas" className="inline-flex items-center text-[#D4AF37] hover:text-[#F4E5C3] text-sm font-semibold">
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

export default MarylandPage;
