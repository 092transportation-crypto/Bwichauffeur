import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-[#D4AF37]/20">
      {/* Site-wide Get a Free Quote CTA strip */}
      <div
        className="bg-gradient-to-r from-[#D4AF37] via-[#F4E5C3] to-[#D4AF37]"
        data-testid="footer-quote-cta-strip"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-center md:text-left">
            <h3 className="text-black text-2xl md:text-3xl font-bold tracking-tight">
              Ready for your next ride?
            </h3>
            <p className="text-black/80 text-sm md:text-base mt-1">
              Flat-rate. Flight tracked. Real chauffeur — 24/7 across Maryland, DC &amp; Virginia.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-[#D4AF37] font-bold rounded-md hover:bg-gray-900 transition-all whitespace-nowrap"
              data-testid="footer-get-quote-cta"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="tel:+18776790100"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-black text-black font-bold rounded-md hover:bg-black hover:text-[#D4AF37] transition-all whitespace-nowrap"
            >
              <Phone className="mr-2 h-4 w-4" />
              877-679-0100
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img
                src="/logo.jpeg"
                alt="BWI Chauffeur Service Logo - Luxury Airport Transportation Maryland DC Virginia"
                className="h-12 w-12 object-contain"
              />
              <div>
                <div className="text-lg font-bold" style={{ color: '#D4AF37' }}>BWI CHAUFFEUR</div>
                <div className="text-xs text-gray-400">YOUR RIDE OUR PRIORITY</div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Premium luxury transportation services throughout Maryland, Delaware, and the DMV area. Available 24/7.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.facebook.com/share/19oFQPdPwv/" target="_blank" rel="noopener noreferrer nofollow" className="w-10 h-10 bg-gray-800 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-colors duration-300 group" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-400 group-hover:text-black" />
              </a>
              <a href="https://www.instagram.com/bwi_chauffeur/" target="_blank" rel="noopener noreferrer nofollow" className="w-10 h-10 bg-gray-800 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-colors duration-300 group" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-black" />
              </a>
              <a href="https://x.com/BwiChauffeur" target="_blank" rel="noopener noreferrer nofollow" className="w-10 h-10 bg-gray-800 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-colors duration-300 group" aria-label="X (Twitter)">
                <Twitter className="h-5 w-5 text-gray-400 group-hover:text-black" />
              </a>
              <a href="https://www.youtube.com/@bwichauffeur" target="_blank" rel="noopener noreferrer nofollow" className="w-10 h-10 bg-gray-800 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-colors duration-300 group" aria-label="YouTube">
                <Youtube className="h-5 w-5 text-gray-400 group-hover:text-black" />
              </a>
              <a href="https://www.linkedin.com/in/bwi-chauffeur-5078a03a7" target="_blank" rel="noopener noreferrer nofollow" className="w-10 h-10 bg-gray-800 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-colors duration-300 group" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-black" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[#D4AF37] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Our Services</Link></li>
              <li><Link to="/luxury-fleet" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Luxury Fleet</Link></li>
              <li><Link to="/coverage" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Coverage Areas</Link></li>
              <li><Link to="/service-areas" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Cities We Serve</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-[#D4AF37] transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#D4AF37] transition-colors" data-testid="footer-contact-link">Contact</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Blog</Link></li>
              <li><Link to="/booking" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Book Now</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Airport Transportation</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Corporate Car Service</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Wedding & Events</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Group Transportation</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#D4AF37] transition-colors">City Tours</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Hourly Service</Link></li>
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3 mb-6">
              <li><Link to="/blog/bwi-airport-transportation-guide-terminals-pickup" className="text-gray-400 hover:text-[#D4AF37] transition-colors">BWI Airport Guide</Link></li>
              <li><Link to="/blog/corporate-transportation-solutions-maryland-businesses" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Corporate Solutions</Link></li>
              <li><Link to="/blog/wedding-transportation-maryland-luxury-limousine" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Wedding Transport</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-gray-400 hover:text-[#D4AF37] transition-colors">Terms & Conditions</Link></li>
            </ul>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="tel:+18776790100" className="flex items-center space-x-3 text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Phone className="h-5 w-5 text-[#D4AF37]" />
                <span>877-679-0100</span>
              </a>
              <a href="mailto:info@bwichauffeur.com" className="flex items-center space-x-3 text-gray-400 hover:text-[#D4AF37] transition-colors">
                <Mail className="h-5 w-5 text-[#D4AF37]" />
                <span>info@bwichauffeur.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 text-[#D4AF37] mt-1" />
                <span>BWI Airport Area<br />Baltimore, Maryland</span>
              </div>
            </div>
          </div>
        </div>

        {/* Popular BWI Routes */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Popular BWI Airport Routes</h3>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link to="/bwi-to-washington-dc" className="text-gray-500 hover:text-[#D4AF37] transition-colors">BWI to Washington DC</Link>
            <Link to="/bwi-to-annapolis" className="text-gray-500 hover:text-[#D4AF37] transition-colors">BWI to Annapolis</Link>
            <Link to="/bwi-to-columbia-md" className="text-gray-500 hover:text-[#D4AF37] transition-colors">BWI to Columbia, MD</Link>
            <Link to="/bwi-to-bethesda" className="text-gray-500 hover:text-[#D4AF37] transition-colors">BWI to Bethesda</Link>
            <Link to="/bwi-to-northern-virginia" className="text-gray-500 hover:text-[#D4AF37] transition-colors">BWI to Northern Virginia</Link>
            <Link to="/bwi-to-arlington" className="text-gray-500 hover:text-[#D4AF37] transition-colors">BWI to Arlington</Link>
            <Link to="/bwi-to-alexandria" className="text-gray-500 hover:text-[#D4AF37] transition-colors">BWI to Alexandria</Link>
            <Link to="/bwi-to-rockville" className="text-gray-500 hover:text-[#D4AF37] transition-colors">BWI to Rockville</Link>
            <Link to="/bwi-to-silver-spring" className="text-gray-500 hover:text-[#D4AF37] transition-colors">BWI to Silver Spring</Link>
            <Link to="/bwi-to-dulles" className="text-gray-500 hover:text-[#D4AF37] transition-colors">BWI to Dulles (IAD)</Link>
          </div>
        </div>

        {/* Popular Service Areas */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Popular Service Areas</h3>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link to="/limo-service-baltimore-md" className="text-gray-500 hover:text-[#D4AF37] transition-colors">Limo Service Baltimore</Link>
            <Link to="/limo-service-columbia-md" className="text-gray-500 hover:text-[#D4AF37] transition-colors">Limo Service Columbia</Link>
            <Link to="/limo-service-annapolis-md" className="text-gray-500 hover:text-[#D4AF37] transition-colors">Limo Service Annapolis</Link>
            <Link to="/limo-service-ellicott-city-md" className="text-gray-500 hover:text-[#D4AF37] transition-colors">Limo Service Ellicott City</Link>
            <Link to="/limo-service-bethesda-md" className="text-gray-500 hover:text-[#D4AF37] transition-colors">Limo Service Bethesda</Link>
            <Link to="/limo-service-rockville-md" className="text-gray-500 hover:text-[#D4AF37] transition-colors">Limo Service Rockville</Link>
            <Link to="/limo-service-towson-md" className="text-gray-500 hover:text-[#D4AF37] transition-colors">Limo Service Towson</Link>
            <Link to="/limo-service-glen-burnie-md" className="text-gray-500 hover:text-[#D4AF37] transition-colors">Limo Service Glen Burnie</Link>
            <Link to="/limo-service-ocean-city-md" className="text-gray-500 hover:text-[#D4AF37] transition-colors">Limo Service Ocean City</Link>
            <Link to="/service-areas" className="text-[#D4AF37] hover:text-[#F4E5C3] transition-colors font-semibold">View All Cities →</Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2026 BWI Chauffeur. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-[#D4AF37] transition-colors">Privacy Policy</Link>
              <Link to="/terms-conditions" className="text-gray-500 hover:text-[#D4AF37] transition-colors">Terms of Service</Link>
              <Link to="/faq" className="text-gray-500 hover:text-[#D4AF37] transition-colors">FAQ</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
