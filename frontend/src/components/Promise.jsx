import React from 'react';
import {
  ShieldCheck,
  Clock,
  Plane,
  BadgeDollarSign,
  Award,
  Sparkles,
} from 'lucide-react';

const stats = [
  { label: '500+ Trips Completed', icon: Award },
  { label: '24/7 Availability', icon: Clock },
  { label: 'Licensed & Insured', icon: ShieldCheck },
  { label: 'Real-Time Flight Tracking', icon: Plane },
  { label: 'Flat Rate Guaranteed', icon: BadgeDollarSign },
];

const PromiseSection = () => {
  return (
    <section
      id="our-promise"
      className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden"
      data-testid="promise-section"
      aria-labelledby="promise-heading"
    >
      {/* Subtle gold diagonal pattern background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 1px, transparent 32px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Strip */}
        <div
          className="mb-16 rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden"
          data-testid="stats-strip"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#D4AF37]/15">
            {stats.map(({ label, icon: Icon }, i) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center text-center px-4 py-5"
                data-testid={`stat-${i}`}
              >
                <Icon className="h-5 w-5 text-[#D4AF37] mb-2" aria-hidden="true" />
                <p className="text-white text-xs sm:text-sm font-semibold tracking-wide uppercase leading-tight">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Promise Block */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/5 mb-5">
            <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase">
              The BWI Chauffeur Promise
            </span>
          </div>

          <h2
            id="promise-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Our <span className="text-[#D4AF37]">Promise</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
            Professional, punctual, and priced fairly.{' '}
            <span className="text-white font-semibold">
              Flat rate guaranteed, no surge ever.
            </span>{' '}
            Licensed, insured, and available 24/7.
          </p>

          {/* On-Time Guarantee Callout */}
          <div
            className="relative inline-block w-full max-w-3xl mx-auto"
            data-testid="on-time-guarantee"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37] via-[#F4E5C3] to-[#D4AF37] rounded-2xl opacity-60 blur-sm" />
            <div className="relative rounded-2xl bg-gradient-to-br from-[#1a1a1a] via-black to-[#1a1a1a] border border-[#D4AF37]/60 px-6 py-8 md:px-10 md:py-10">
              <div className="flex flex-col md:flex-row items-center gap-5 md:gap-7 md:text-left">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] flex items-center justify-center shadow-lg shadow-[#D4AF37]/30">
                    <Clock className="h-8 w-8 text-black" aria-hidden="true" />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-2">
                    Guarantee
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                    On Time, Every Time
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    If your chauffeur is late,{' '}
                    <span className="text-[#D4AF37] font-bold">your ride is free.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
