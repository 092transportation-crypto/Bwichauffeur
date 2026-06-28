import React from 'react';
import {
  Clock,
  Sparkles,
  Receipt,
  UserCheck,
  Headphones,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const POINTS = [
  {
    icon: Clock,
    title: 'Always On Time',
    body:
      'We never leave you stranded. Real-time flight tracking means we’re always there when you land.',
  },
  {
    icon: Sparkles,
    title: 'Spotless Vehicles',
    body:
      'Every vehicle is professionally detailed before every ride.',
  },
  {
    icon: Receipt,
    title: 'Transparent Pricing',
    body:
      'Flat rate quoted upfront. No hidden fees, no surprises.',
  },
  {
    icon: UserCheck,
    title: 'Professional Chauffeurs',
    body:
      'Background checked, uniformed, and courteous every time.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    body: 'Real humans available around the clock.',
  },
];

const BWIDifference = () => {
  return (
    <section
      id="bwi-difference"
      className="relative py-24 bg-black overflow-hidden"
      data-testid="bwi-difference"
      aria-labelledby="bwi-difference-heading"
    >
      {/* Soft gold accent glow */}
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-[0.04]"
        style={{
          background:
            'radial-gradient(circle at center, #D4AF37 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-3">
            Why Riders Choose Us
          </span>
          <h2
            id="bwi-difference-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            The <span className="text-[#D4AF37]">BWI Chauffeur</span> Difference
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Five things you can count on, every single ride.
          </p>
        </div>

        {/* 5-up grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3">
          {POINTS.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              data-testid={`difference-${i}`}
              className="group relative rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 bg-gradient-to-br from-gray-900/80 to-black p-6 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Number tag in corner */}
              <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest text-[#D4AF37]/40 group-hover:text-[#D4AF37]/80 transition-colors">
                0{i + 1}
              </span>

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 mb-5">
                <Icon className="h-6 w-6 text-[#D4AF37]" aria-hidden="true" />
              </div>

              <h3 className="text-white font-bold text-lg mb-2 leading-tight">
                {title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/booking"
            data-testid="difference-cta"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold rounded-md hover:shadow-lg hover:shadow-[#D4AF37]/40 transition-all"
          >
            Get a Free Quote
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
          <p className="mt-3 text-gray-500 text-sm">
            Or call{' '}
            <a
              href="tel:+18776790100"
              className="text-[#D4AF37] hover:text-[#F4E5C3] font-semibold"
            >
              877-679-0100
            </a>{' '}
            — 24/7 dispatch
          </p>
        </div>
      </div>
    </section>
  );
};

export default BWIDifference;
