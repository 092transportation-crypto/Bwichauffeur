import React from 'react';
import { ArrowRight, Shield, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background — flagship Mercedes S-Class */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/fleet/mercedes-s-class.jpg)',
            filter: 'brightness(0.35)',
          }}
        />
        {/* Gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-[#D4AF37]/20" />
      </div>

      {/* Animated particles effect */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Logo Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <img
            src="/logo.jpeg"
            alt="BWI Chauffeur Service Logo - Premier Private Car Service and Executive Airport Transportation in Maryland, Washington DC, and Virginia"
            className="h-32 w-32 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Main Heading - H1 for Homepage */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up leading-tight" style={{ color: '#D4AF37' }}>
          Baltimore-Washington&apos;s Most Trusted
          <span className="block text-white mt-2">Chauffeur Service</span>
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl text-gray-200 mb-8 max-w-3xl mx-auto font-light tracking-wide animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-[#D4AF37] font-semibold">Professional.</span>{' '}
          <span className="text-[#D4AF37] font-semibold">Punctual.</span>{' '}
          <span className="text-[#D4AF37] font-semibold">Premium.</span>
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#D4AF37]/30">
            <Shield className="h-5 w-5 text-[#D4AF37]" />
            <span className="text-white font-medium">Licensed & Insured</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#D4AF37]/30">
            <Clock className="h-5 w-5 text-[#D4AF37]" />
            <span className="text-white font-medium">24/7 Available</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#D4AF37]/30">
            <Star className="h-5 w-5 text-[#D4AF37]" />
            <span className="text-white font-medium">5-Star Rated</span>
          </div>
        </div>

        {/* CTA Buttons - Using proper anchor tags */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Link
            to="/booking"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold text-lg rounded-md hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300 hover:scale-105 group"
          >
            Reserve Your Ride
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="tel:+18776790100"
            className="inline-flex items-center px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-bold text-lg rounded-md transition-all duration-300 hover:scale-105"
          >
            Call 877-679-0100
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">10+</div>
            <div className="text-gray-400 font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">25K+</div>
            <div className="text-gray-400 font-medium">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">99%</div>
            <div className="text-gray-400 font-medium">On-Time Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">24/7</div>
            <div className="text-gray-400 font-medium">Available</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#D4AF37] rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;