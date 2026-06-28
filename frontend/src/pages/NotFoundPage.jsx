import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Phone, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <img
          src="/logo.jpeg"
          alt="BWI Chauffeur Service - Premier Private Car Service Maryland DC Virginia - Page Not Found"
          className="h-24 w-24 mx-auto mb-8 object-contain"
        />

        {/* 404 Message */}
        <h1 className="text-9xl font-bold text-[#D4AF37] mb-4">404</h1>
        <h2 className="text-4xl font-bold text-white mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-400 mb-12">
          Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
        </p>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50"
          >
            <Home className="mr-2 h-5 w-5" />
            Go Home
          </Button>
          <Button
            onClick={() => navigate('/services')}
            variant="outline"
            className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
          >
            Our Services
          </Button>
          <Button
            onClick={() => navigate('/booking')}
            variant="outline"
            className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
          >
            Book Now
          </Button>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-[#D4AF37]/20 rounded-lg p-6">
          <h3 className="text-white font-bold text-lg mb-4">Need Assistance?</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-300">
            <a href="tel:+18776790100" className="flex items-center hover:text-[#D4AF37] transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              877-679-0100
            </a>
            <a href="mailto:info@bwichauffeur.com" className="flex items-center hover:text-[#D4AF37] transition-colors">
              <Mail className="h-4 w-4 mr-2" />
              info@bwichauffeur.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
