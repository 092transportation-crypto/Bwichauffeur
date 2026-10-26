import React, { useState } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { useParams, useNavigate, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Users, Briefcase, Check, Phone, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import Breadcrumbs from '../components/Breadcrumbs';
import { FLEET_DETAILS, FLEET_DETAIL_SLUGS } from '../data/fleetDetails';

const SITE_URL = 'https://www.bwichauffeur.com';

const VehicleDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const vehicle = FLEET_DETAILS[slug];
  const [activeImage, setActiveImage] = useState(0);

  if (!vehicle) {
    return <Navigate to="/luxury-fleet" replace />;
  }

  const gallery = vehicle.gallery && vehicle.gallery.length ? vehicle.gallery : [vehicle.heroImage];
  const otherVehicles = FLEET_DETAIL_SLUGS.filter((s) => s !== slug)
    .map((s) => FLEET_DETAILS[s])
    .slice(0, 3);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        name: 'BWI Chauffeur',
        telephone: '+1-877-609-1919',
        url: SITE_URL,
        image: `${SITE_URL}${vehicle.heroImage}`,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '9836 Lyon Ave',
          addressLocality: 'Laurel',
          addressRegion: 'MD',
          postalCode: '20723',
          addressCountry: 'US',
        },
        areaServed: { '@type': 'Place', name: 'Maryland, Washington DC & Northern Virginia' },
        openingHours: 'Mo-Su 00:00-23:59',
      },
      {
        '@type': 'Service',
        name: `${vehicle.category} Chauffeur Service — ${vehicle.name}`,
        serviceType: vehicle.category,
        url: `${SITE_URL}/fleet/${vehicle.slug}`,
        description: vehicle.tagline,
        provider: { '@type': 'LocalBusiness', name: 'BWI Chauffeur' },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{`${vehicle.category} — ${vehicle.name} | BWI Chauffeur Fleet`}</title>
        <meta
          name="description"
          content={`${vehicle.category} (${vehicle.name}): seats ${vehicle.passengers}, ${vehicle.luggage} bags. ${vehicle.tagline} ${vehicle.startingPrice}. Call 877-609-1919.`}
        />
        <link rel="canonical" href={`${SITE_URL}/fleet/${vehicle.slug}`} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="min-h-screen bg-black pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Luxury Fleet', to: '/luxury-fleet' }, { label: vehicle.category }]} schema={false} />

          <Button
            onClick={() => navigate('/luxury-fleet')}
            variant="outline"
            className="mb-8 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Fleet
          </Button>

          {/* Hero gallery + quick-facts */}
          <div className="grid lg:grid-cols-5 gap-10 mb-16">
            {/* Gallery */}
            <div className="lg:col-span-3">
              <div className="relative h-80 sm:h-[26rem] rounded-2xl overflow-hidden border border-[#D4AF37]/20">
                <img
                  key={gallery[activeImage]}
                  src={gallery[activeImage]}
                  alt={`${vehicle.name} — ${vehicle.category} interior and exterior, BWI Chauffeur fleet`}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
              {gallery.length > 1 && (
                <div className="mt-4 grid grid-cols-4 gap-3" data-testid="vehicle-gallery-thumbs">
                  {gallery.map((img, i) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => setActiveImage(i)}
                      className={`relative h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        activeImage === i ? 'border-[#D4AF37]' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                      aria-label={`Show photo ${i + 1} of ${vehicle.name}`}
                    >
                      <img src={img} alt="" aria-hidden="true" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick facts card */}
            <div className="lg:col-span-2">
              <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">{vehicle.category}</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">
                {vehicle.name}
              </h1>
              <p className="text-gray-500 text-sm mb-3">{vehicle.nameNote}</p>
              <p className="text-gray-300 leading-relaxed mb-6">{vehicle.tagline}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-xl p-4 flex items-center gap-3">
                  <Users className="h-6 w-6 text-[#D4AF37] flex-shrink-0" />
                  <div>
                    <div className="text-white font-bold">{vehicle.passengers}</div>
                    <div className="text-gray-500 text-xs">Passengers</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-xl p-4 flex items-center gap-3">
                  <Briefcase className="h-6 w-6 text-[#D4AF37] flex-shrink-0" />
                  <div>
                    <div className="text-white font-bold">{vehicle.luggage}</div>
                    <div className="text-gray-500 text-xs">Bags</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#F4E5C3]/10 border border-[#D4AF37]/30 rounded-xl p-5 mb-6">
                <div className="text-gray-400 text-xs uppercase tracking-widest mb-1">Flat Rate</div>
                <div className="text-2xl font-bold text-[#D4AF37]" data-testid="vehicle-starting-price">{vehicle.startingPrice}</div>
                <p className="text-gray-400 text-xs mt-1">Local trips. Final rate depends on distance — quoted up front, before you book, always flat with no surge.</p>
              </div>

              <div className="flex flex-col gap-3">
                <Button
                  onClick={() => navigate('/booking')}
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50"
                  data-testid="vehicle-book-cta"
                >
                  Book This Vehicle
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <a
                  href="tel:+18776091919"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-md hover:bg-[#D4AF37] hover:text-black transition-all"
                >
                  <Phone className="h-4 w-4" />
                  Call 877-609-1919
                </a>
              </div>
            </div>
          </div>

          {/* Best for */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-5">Best For</h2>
            <div className="flex flex-wrap gap-3">
              {vehicle.bestFor.map((occasion) => (
                <span
                  key={occasion}
                  className="px-4 py-2 rounded-full bg-gray-900 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-semibold"
                >
                  {occasion}
                </span>
              ))}
            </div>
          </div>

          {/* Description + specs */}
          <div className="grid lg:grid-cols-3 gap-10 mb-16">
            <div className="lg:col-span-2 space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-white mb-2">About This Vehicle</h2>
              {vehicle.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Specifications</h2>
              <Card className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/20">
                <CardContent className="p-5">
                  <dl className="divide-y divide-gray-800">
                    {vehicle.specs.map((s) => (
                      <div key={s.label} className="flex justify-between py-2.5 text-sm">
                        <dt className="text-gray-500">{s.label}</dt>
                        <dd className="text-white font-medium text-right">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-5">Features &amp; Amenities</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {vehicle.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 bg-gray-900/60 border border-[#D4AF37]/15 rounded-xl p-4"
                >
                  <Check className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust strip */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#D4AF37]/10 to-[#F4E5C3]/10 border border-[#D4AF37]/30 rounded-full px-6 py-3">
              <ShieldCheck className="h-5 w-5 text-[#D4AF37]" />
              <span className="text-gray-300 text-sm">Licensed &amp; insured — Maryland PSC Carrier #6325 — inspected daily, detailed before every trip</span>
            </div>
          </div>

          {/* Other vehicles */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Explore Other Vehicles</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {otherVehicles.map((v) => (
                <Link
                  key={v.slug}
                  to={`/fleet/${v.slug}`}
                  className="group block bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 rounded-xl overflow-hidden transition-all"
                  data-testid={`related-vehicle-${v.slug}`}
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={v.heroImage}
                      alt={`${v.name} — ${v.category}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest">{v.category}</span>
                    <div className="text-white font-semibold mt-1">{v.name}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#F4E5C3]/10 border-y border-[#D4AF37]/30 py-12 mt-8">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Book the {vehicle.category}?</h2>
            <p className="text-gray-300 mb-6">
              Reserve your {vehicle.name} today — flat-rate pricing, flight tracking, and a professional chauffeur, 24/7.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => navigate('/booking')}
                className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50"
              >
                Book Your Ride Now
              </Button>
              <a
                href="tel:+18776091919"
                className="inline-flex items-center px-6 py-2 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-md hover:bg-[#D4AF37] hover:text-black transition-all"
              >
                Call 877-609-1919
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleDetailPage;
