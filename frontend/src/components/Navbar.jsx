import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AIRPORT_PAGES } from '../data/airportPages';
import { CONCERT_VENUES } from '../data/concertVenues';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // 'airports' | 'events' | 'more' | null

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMenu(null);
  };

  const airportLinks = AIRPORT_PAGES.map((a) => ({ to: `/${a.slug}`, label: a.shortName }));
  const eventLinks = [
    { to: '/concert-transportation', label: 'All Concerts & Events' },
    ...CONCERT_VENUES.map((v) => ({ to: `/${v.slug}`, label: v.name })),
  ];

  const dropdownPanel =
    'absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-lg border border-[#D4AF37]/20 rounded-lg shadow-xl py-2';
  const dropdownItem =
    'block px-4 py-2 text-white hover:text-[#D4AF37] hover:bg-gray-900 transition-colors';

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
              width="56"
              height="56"
              loading="eager"
              fetchpriority="high"
              decoding="async"
              className="h-14 w-14 object-contain"
            />
            <div className="text-white">
              <div className="text-xl font-bold tracking-wider" style={{ color: '#D4AF37' }}>BWI CHAUFFEUR</div>
              <div className="text-xs tracking-widest text-gray-300">YOUR RIDE OUR PRIORITY</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5">
            <Link to="/" className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium">Home</Link>
            <Link to="/services" className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium">Services</Link>

            {/* Airports Dropdown */}
            <div className="relative" onMouseEnter={() => setOpenMenu('airports')} onMouseLeave={() => setOpenMenu(null)}>
              <button
                className="flex items-center space-x-1 text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium"
                data-testid="nav-airports-dropdown"
              >
                <span>Airports</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {openMenu === 'airports' && (
                <div className={dropdownPanel}>
                  {airportLinks.map((l) => (
                    <Link key={l.to} to={l.to} className={dropdownItem}>{l.label}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/luxury-fleet" className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium">Fleet</Link>
            <Link to="/baltimore-sports-transportation" className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium">Sports</Link>

            {/* Concerts & Events Dropdown */}
            <div className="relative" onMouseEnter={() => setOpenMenu('events')} onMouseLeave={() => setOpenMenu(null)}>
              <button
                className="flex items-center space-x-1 text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium"
                data-testid="nav-events-dropdown"
              >
                <span>Concerts &amp; Events</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {openMenu === 'events' && (
                <div className={dropdownPanel}>
                  {eventLinks.map((l) => (
                    <Link key={l.to} to={l.to} className={dropdownItem}>{l.label}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/cruise-transportation" className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium">Cruise</Link>

            {/* More Dropdown */}
            <div className="relative" onMouseEnter={() => setOpenMenu('more')} onMouseLeave={() => setOpenMenu(null)}>
              <button className="flex items-center space-x-1 text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium">
                <span>More</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {openMenu === 'more' && (
                <div className={`${dropdownPanel} w-48`}>
                  <Link to="/blog" className={dropdownItem}>Blog</Link>
                  <Link to="/coverage" className={dropdownItem}>Coverage</Link>
                  <Link to="/about" className={dropdownItem}>About Us</Link>
                  <Link to="/service-areas" className={dropdownItem}>Service Areas</Link>
                  <Link to="/contact" className={dropdownItem} data-testid="nav-contact-link">Contact</Link>
                  <Link to="/faq" className={dropdownItem}>FAQ</Link>
                  <Link to="/privacy-policy" className={dropdownItem}>Privacy Policy</Link>
                  <Link to="/terms-conditions" className={dropdownItem}>Terms & Conditions</Link>
                </div>
              )}
            </div>

            <a href="tel:+18776091919" className="flex items-center space-x-2 text-[#D4AF37] hover:text-[#F4E5C3] transition-colors duration-300">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">877-609-1919</span>
            </a>
            <Link
              to="/booking"
              className="px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-semibold rounded-md hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all duration-300"
              aria-label="Book your chauffeur ride"
            >
              Book Your Ride
            </Link>
          </div>

          {/* Mobile CTA + Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              to="/booking"
              data-testid="mobile-book-now"
              className="px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black text-sm font-bold rounded-md shadow-lg shadow-[#D4AF37]/25 whitespace-nowrap"
            >
              Book Now
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#D4AF37] transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/98 backdrop-blur-lg border-t border-[#D4AF37]/20 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-6 space-y-3">
            <Link to="/" onClick={closeMobileMenu} className="block text-white hover:text-[#D4AF37] transition-colors duration-300 py-2 font-medium">Home</Link>
            <Link to="/services" onClick={closeMobileMenu} className="block text-white hover:text-[#D4AF37] transition-colors duration-300 py-2 font-medium">Services</Link>

            {/* Airports (expandable) */}
            <div className="border-b border-gray-800/60 pb-2">
              <button
                onClick={() => setOpenMenu(openMenu === 'airports' ? null : 'airports')}
                className="w-full flex items-center justify-between text-white hover:text-[#D4AF37] transition-colors duration-300 py-2 font-medium"
                data-testid="mobile-airports-toggle"
              >
                <span>Airports</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${openMenu === 'airports' ? 'rotate-180' : ''}`} />
              </button>
              {openMenu === 'airports' && (
                <div className="pl-4">
                  {airportLinks.map((l) => (
                    <Link key={l.to} to={l.to} onClick={closeMobileMenu} className="block text-gray-300 hover:text-[#D4AF37] py-2 text-sm">{l.label}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/luxury-fleet" onClick={closeMobileMenu} className="block text-white hover:text-[#D4AF37] transition-colors duration-300 py-2 font-medium">Fleet</Link>
            <Link to="/baltimore-sports-transportation" onClick={closeMobileMenu} className="block text-white hover:text-[#D4AF37] transition-colors duration-300 py-2 font-medium">Sports Transportation</Link>

            {/* Concerts & Events (expandable) */}
            <div className="border-b border-gray-800/60 pb-2">
              <button
                onClick={() => setOpenMenu(openMenu === 'events' ? null : 'events')}
                className="w-full flex items-center justify-between text-white hover:text-[#D4AF37] transition-colors duration-300 py-2 font-medium"
                data-testid="mobile-events-toggle"
              >
                <span>Concerts &amp; Events</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${openMenu === 'events' ? 'rotate-180' : ''}`} />
              </button>
              {openMenu === 'events' && (
                <div className="pl-4">
                  {eventLinks.map((l) => (
                    <Link key={l.to} to={l.to} onClick={closeMobileMenu} className="block text-gray-300 hover:text-[#D4AF37] py-2 text-sm">{l.label}</Link>
                  ))}
                </div>
              )}
            </div>

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

            <a href="tel:+18776091919" onClick={closeMobileMenu} className="flex items-center space-x-2 text-[#D4AF37] py-2">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">877-609-1919</span>
            </a>
            <Link
              to="/booking"
              onClick={closeMobileMenu}
              className="block w-full text-center px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-semibold rounded-md"
              aria-label="Book your chauffeur ride"
            >
              Book Your Ride
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
