import React from 'react';
import { Phone } from 'lucide-react';

// Always-visible floating Call Now button, bottom-right on every page.
// Sits to the left of the chat bubble (which owns bottom-6 right-6).
const FloatingCallButton = () => (
  <a
    href="tel:+18776091919"
    aria-label="Call BWI Chauffeur now at (877) 609-1919"
    data-testid="floating-call-button"
    className="fixed bottom-6 right-24 z-50 flex items-center gap-2.5 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black pl-4 pr-5 py-3.5 rounded-full font-bold text-base shadow-2xl shadow-[#D4AF37]/40 hover:shadow-[#D4AF37]/60 active:scale-95 transition-all"
  >
    <span className="relative flex items-center justify-center">
      <span className="absolute inline-flex h-full w-full rounded-full bg-black/20 animate-ping" />
      <Phone className="h-5 w-5 relative" />
    </span>
    Call Now
  </a>
);

export default FloatingCallButton;
