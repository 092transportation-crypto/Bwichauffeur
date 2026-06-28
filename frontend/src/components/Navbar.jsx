import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-lg shadow-lg' : 'bg-black/70 backdrop-blur-sm'
      }`}
    >
      {/* Trust Bar */}
      <div
        data-testid="trust-bar"
        className="bg-gradient-to-r from-[#D4AF37] via-[#F4E5C3] to-[#D4AF37] text-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5">
          <p className="text-[11px] sm:text-xs md:text-sm font-semibold text-center tracking-wide leading-tight">
            <span className="hidden md:inline">Licensed &amp; Insured | Maryland PSC Carrier | 12-Vehicle Fleet | 24/7 Availability</span>
            <span className="md:hidden">Licensed &amp; Insured · MD PSC Carrier · 12 Vehicles · 24/7</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logo.jpeg"
              alt="BWI Chauffeur Service Logo - Premier Private Car Service for Maryland, DC, and Virginia"
              className="h-14 w-14 object-contain"
            />
            <div className="text-white">
              <div className="text-xl font-bold tracking-wider" style={{ color: '#D4AF37' }}>BWI CHAUFFEUR</div>
              <div className="text-xs tracking-widest text-gray-300">YOUR RIDE OUR PRIORITY</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium">Home</Link>
            <Link to="/services" className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium">Services</Link>
            <Link to="/luxury-fleet" className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium">Fleet</Link>
            <Link to="/baltimore-sports-transportation" className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium">Sports</Link>
            <Link to="/cruise-transportation" className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium">Cruise</Link>
            <Link to="/blog" className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium">Blog</Link>
            <Link to="/coverage" className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium">Coverage</Link>
            
            {/* More Dropdown */}
            <div className="relative" onMouseEnter={() => setIsMoreMenuOpen(true)} onMouseLeave={() => setIsMoreMenuOpen(false)}>
              <button className="flex items-center space-x-1 text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium">
                <span>More</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {isMoreMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-lg border border-[#D4AF37]/20 rounded-lg shadow-xl py-2">
                  <Link to="/about" className="block px-4 py-2 text-white hover:text-[#D4AF37] hover:bg-gray-900 transition-colors">About Us</Link>
                  <Link to="/service-areas" className="block px-4 py-2 text-white hover:text-[#D4AF37] hover:bg-gray-900 transition-colors">Service Areas</Link>
                  <Link to="/contact" className="block px-4 py-2 text-white hover:text-[#D4AF37] hover:bg-gray-900 transition-colors" data-testid="nav-contact-link">Contact</Link>
                  <Link to="/faq" className="block px-4 py-2 text-white hover:text-[#D4AF37] hover:bg-gray-900 transition-colors">FAQ</Link>
                  <Link to="/privacy-policy" className="block px-4 py-2 text-white hover:text-[#D4AF37] hover:bg-gray-900 transition-colors">Privacy Policy</Link>
                  <Link to="/terms-conditions" className="block px-4 py-2 text-white hover:text-[#D4AF37] hover:bg-gray-900 transition-colors">Terms & Conditions</Link>
                </div>
              )}
            </div>
            
            <a href="tel:+18776790100" className="flex items-center space-x-2 text-[#D4AF37] hover:text-[#F4E5C3] transition-colors duration-300">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">877-679-0100</span>
            </a>
            <Link
              to="/booking"
              className="px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-semibold rounded-md hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-[#D4AF37] transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/98 backdrop-blur-lg border-t border-[#D4AF37]/20 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-6 space-y-3">
            <Link to="/" onClick={closeMobileMenu} className="block text-white hover:text-[#D4AF37] transition-colors duration-300 py-2 font-medium">Home</Link>
            <Link to="/services" onClick={closeMobileMenu} className="block text-white hover:text-[#D4AF37] transition-colors duration-300 py-2 font-medium">Services</Link>
            <Link to="/luxury-fleet" onClick={closeMobileMenu} className="block text-white hover:text-[#D4AF37] transition-colors duration-300 py-2 font-medium">Fleet</Link>
            <Link to="/baltimore-sports-transportation" onClick={closeMobileMenu} className="block text-white hover:text-[#D4AF37] transition-colors duration-300 py-2 font-medium">Sports Transportation</Link>
            <Link to="/cruise-transportation" onClick={closeMobileMenu} className="block text-white hover:text-[#D4AF37] transition-colors duration-300 py-2 font-medium">Cruise Transportation</Link>
            <Link to="/blog" onClick={closeMobileMenu} className="block text-white hover:text-[#D4AF37] transition-colors duration-300 py-2 font-medium">Blog</Link>
            <Link to="/about" onClick={closeMobileMenu} className="block text-white hover:text-[#D4AF37] transition-colors duration-300 py-2 font-medium">About Us</Link>
            <Link to="/coverage" onClick={closeMobileMenu} className="block text-white hover:text-[#D4AF37] transition-colors duration-300 py-2 font-medium">Coverage</Link>
            <Link to="/service-areas" onClick={closeMobileMenu} className="block text-white hover:text-[#D4AF37] transition-colors duration-300 py-2 font-medium">Service Areas</Link>
            <Link to="/contact" onClick={closeMobileMenu} className="block text-white hover:text-[#D4AF37] transition-colors duration-300 py-2 font-medium" data-testid="nav-contact-link-mobile">Contact</Link>
            <Link to="/faq" onClick={closeMobileMenu} className="block text-white hover:text-[#D4AF37] transition-colors duration-300 py-2 font-medium">FAQ</Link>
            
            <div className="border-t border-gray-800 pt-3 mt-3">
              <Link to="/privacy-policy" onClick={closeMobileMenu} className="block text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 py-2 text-sm">Privacy Policy</Link>
              <Link to="/terms-conditions" onClick={closeMobileMenu} className="block text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 py-2 text-sm">Terms & Conditions</Link>
            </div>
            
            <a href="tel:+18776790100" onClick={closeMobileMenu} className="flex items-center space-x-2 text-[#D4AF37] py-2">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">877-679-0100</span>
            </a>
            <Link
              to="/booking"
              onClick={closeMobileMenu}
              className="block w-full text-center px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-semibold rounded-md"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
