import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Zap } from 'lucide-react';
import TrustSignals from './TrustSignals';

// "Get Your Free Quote" call-to-action — replaces the flat-rate pricing
// table; every trip is quoted individually by phone or through the form.
const QuoteCTA = () => (
  <section className="py-24 bg-black" data-testid="quote-cta-section">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-sm font-semibold mb-5">
        <Zap className="h-4 w-4" /> We respond within 15 minutes
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Get Your <span className="text-[#D4AF37]">Free Quote</span>
      </h2>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
        Every trip is different — vehicle, distance, and schedule all shape your rate.
        Tell us where you&apos;re going and we&apos;ll quote you a personalized flat rate,
        locked in up front with no surge and no hidden fees.
      </p>
      <p className="text-gray-400 max-w-2xl mx-auto mb-10">
        Call, text, or fill out the quick form — a reservation specialist is available 24/7.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <a
          href="tel:+18776091919"
          data-testid="quote-cta-call"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold text-lg rounded-md hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300 hover:scale-105"
        >
          <Phone className="h-5 w-5" />
          Call (877) 609-1919
        </a>
        <Link
          to="/booking"
          data-testid="quote-cta-form"
          className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-bold text-lg rounded-md transition-all duration-300 hover:scale-105 group"
        >
          Request a Quote Online
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <TrustSignals />
    </div>
  </section>
);

export default QuoteCTA;
