import React from 'react';
import { MapPin, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Coverage = () => {
  const areas = {
    primary: [
      'BWI Airport - All Terminals',
      'Baltimore City',
      'Annapolis',
      'Anne Arundel County',
      'Howard County',
      'Montgomery County'
    ],
    maryland: [
      'Allegany County',
      'Baltimore County',
      'Calvert County',
      'Caroline County',
      'Carroll County',
      'Cecil County',
      'Frederick County',
      'Harford County',
      'Kent County',
      'Prince George\'s County (PG County)',
      'Queen Anne\'s County',
      'St. Mary\'s County',
      'Somerset County',
      'Talbot County',
      'Washington County',
      'Wicomico County',
      'Worcester County'
    ],
    extended: [
      'Delaware State',
      'York County, Pennsylvania',
      'Washington DC',
      'Northern Virginia',
      'All major airports (BWI, DCA, IAD)'
    ]
  };

  return (
    <section id="coverage" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Service <span className="text-[#D4AF37]">Coverage Areas</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Premium chauffeur service throughout Maryland, Virginia, and Washington DC
          </p>
        </div>

        {/* Coverage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Primary Service Areas */}
          <Card className="bg-gradient-to-br from-[#D4AF37]/20 to-[#F4E5C3]/10 border-[#D4AF37]/40 hover:border-[#D4AF37]/80 transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/30">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">Primary Areas</h3>
              </div>
              <p className="text-gray-300 mb-6">Our main service zones with fastest response times</p>
              <ul className="space-y-3">
                {areas.primary.map((area, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">{area}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Maryland Counties */}
          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/20">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">Maryland Counties</h3>
              </div>
              <p className="text-gray-300 mb-6">Complete coverage throughout Maryland</p>
              <div className="grid grid-cols-2 gap-3">
                {areas.maryland.map((area, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-2 flex-shrink-0 mt-2" />
                    <span className="text-gray-300 text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Extended Service Areas */}
          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/20">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">Extended Areas</h3>
              </div>
              <p className="text-gray-300 mb-6">We also serve the greater DMV area</p>
              <ul className="space-y-3">
                {areas.extended.map((area, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">{area}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-[#D4AF37]/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Don't See Your Area?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              We likely serve it! Contact our 24/7 concierge team to confirm service availability in your location.
            </p>
            <a
              href="tel:+18776790100"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all duration-300"
            >
              Call to Confirm Coverage
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;