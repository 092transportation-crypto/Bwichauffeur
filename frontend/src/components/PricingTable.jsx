import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, ShieldCheck, Clock, BadgeDollarSign } from 'lucide-react';

const PricingTable = () => {
  const routes = [
    { route: 'BWI → Baltimore (Inner Harbor)', time: '~25 min', price: 90, to: '/blog/bwi-to-baltimore-car-service' },
    { route: 'BWI → Annapolis', time: '30–45 min', price: 120, to: '/bwi-to-annapolis' },
    { route: 'BWI → Washington, DC', time: '45–60 min', price: 150, to: '/bwi-to-washington-dc', popular: true },
    { route: 'BWI → Bethesda, MD', time: '55–80 min', price: 150, to: '/bwi-to-bethesda' },
    { route: 'BWI → Dulles Airport (IAD)', time: '80–110 min', price: 210, to: '/bwi-to-dulles' },
    { route: 'BWI → Ocean City, MD', time: '2.5–3 hrs', price: 400, to: '/blog/bwi-to-ocean-city-md' },
  ];

  const included = [
    'All tolls & airport fees included',
    'Real-time flight tracking',
    '60 min free wait (90 min international)',
    'Professional, vetted chauffeur',
    'Late-model luxury vehicle',
    'No surge pricing — ever',
  ];

  return (
    <section className="py-24 bg-black" data-testid="pricing-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-sm font-semibold mb-5">
            <BadgeDollarSign className="h-4 w-4" /> Transparent Flat-Rate Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sample <span className="text-[#D4AF37]">Flat Rates</span> from BWI
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            One price, quoted up front and locked in — no surge, no hidden tolls, no per-minute meter.
            The rate you see is the rate you pay, day or night.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pricing list */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-2xl overflow-hidden">
              {/* Table head */}
              <div className="hidden sm:grid grid-cols-12 px-6 py-4 bg-[#D4AF37]/10 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                <div className="col-span-7">Route</div>
                <div className="col-span-3">Drive Time</div>
                <div className="col-span-2 text-right">From</div>
              </div>
              {/* Rows */}
              {routes.map((r, i) => (
                <Link
                  key={i}
                  to={r.to}
                  className="grid grid-cols-12 items-center gap-y-1 px-6 py-5 border-t border-gray-800 hover:bg-[#D4AF37]/5 transition-colors group"
                  data-testid={`pricing-row-${i}`}
                >
                  <div className="col-span-12 sm:col-span-7 flex items-center gap-2">
                    <span className="text-white font-semibold group-hover:text-[#D4AF37] transition-colors">
                      {r.route}
                    </span>
                    {r.popular && (
                      <span className="px-2 py-0.5 bg-[#D4AF37] text-black text-[10px] font-bold rounded-full uppercase tracking-wide">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="col-span-6 sm:col-span-3 text-gray-400 text-sm flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-[#D4AF37]/70" /> {r.time}
                  </div>
                  <div className="col-span-6 sm:col-span-2 text-right">
                    <span className="text-2xl font-bold text-[#D4AF37]">${r.price}</span>
                  </div>
                </Link>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4 leading-relaxed">
              Rates shown are starting flat rates for a luxury sedan (Mercedes E-Class), one-way, including
              tolls and gratuity guidance. SUVs, Sprinter vans, and additional stops are priced accordingly.
              Need a route not listed? We serve all of Maryland, DC, Northern Virginia, and Delaware —
              <Link to="/booking" className="text-[#D4AF37] hover:text-[#F4E5C3] underline"> get an exact quote</Link>.
            </p>
          </div>

          {/* What's included + CTA */}
          <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#F4E5C3]/5 border border-[#D4AF37]/30 rounded-2xl p-8 flex flex-col">
            <div className="flex items-center gap-2 mb-5">
              <ShieldCheck className="h-6 w-6 text-[#D4AF37]" />
              <h3 className="text-xl font-bold text-white">Every Rate Includes</h3>
            </div>
            <ul className="space-y-3 mb-8">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-200">
                  <Check className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <Link
                to="/booking"
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/40 transition-all"
                data-testid="pricing-book-cta"
              >
                Get Your Flat-Rate Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:+18776790100"
                className="block text-center text-sm text-gray-400 mt-4 hover:text-[#D4AF37] transition-colors"
              >
                or call 877-679-0100 — 24/7
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
