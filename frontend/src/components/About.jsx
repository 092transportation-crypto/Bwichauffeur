import React from 'react';
import { Shield, Award, Clock, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about-company" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-[#D4AF37]">BWI Chauffeur</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Your trusted partner for premium luxury transportation services throughout Maryland, Delaware, and Washington DC
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-4">
              Excellence in Luxury Transportation Since 2014
            </h3>
            
            <p className="text-gray-300 leading-relaxed">
              BWI Chauffeur is Maryland's premier luxury transportation company, specializing in executive car service, airport transfers, and corporate transportation. With over a decade of experience serving the Baltimore-Washington International Airport area, we have established ourselves as the go-to choice for discerning travelers who demand nothing but the best.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Our commitment to excellence is reflected in every aspect of our service. From our meticulously maintained fleet of luxury vehicles including Mercedes-Benz S-Class, BMW 7 Series, and Cadillac Escalade SUVs, to our professionally trained chauffeurs who undergo rigorous background checks and continuous training, we ensure that every journey with BWI Chauffeur exceeds your expectations.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Whether you need reliable airport transportation to BWI, DCA, or Dulles airports, corporate car service for business meetings, or luxury transportation for special events and weddings, our team is available 24/7 to provide seamless, professional service. We proudly serve all Maryland counties including Anne Arundel, Baltimore, Howard, Montgomery, and Prince George's County, as well as Delaware and the greater Washington DC metropolitan area.
            </p>

            <p className="text-gray-300 leading-relaxed">
              At BWI Chauffeur, we understand that your time is valuable. That's why we utilize advanced GPS tracking, real-time traffic monitoring, and flight tracking systems to ensure punctual pickups and drop-offs. Our 99% on-time rate is a testament to our commitment to reliability and customer satisfaction.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-[#D4AF37]/20 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-2">
                  <Award className="h-6 w-6 text-[#D4AF37]" />
                  <div className="text-3xl font-bold text-[#D4AF37]">10+</div>
                </div>
                <div className="text-gray-400">Years of Excellence</div>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-[#D4AF37]/20 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-2">
                  <TrendingUp className="h-6 w-6 text-[#D4AF37]" />
                  <div className="text-3xl font-bold text-[#D4AF37]">25K+</div>
                </div>
                <div className="text-gray-400">Satisfied Clients</div>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-[#D4AF37]/20 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-2">
                  <Shield className="h-6 w-6 text-[#D4AF37]" />
                  <div className="text-3xl font-bold text-[#D4AF37]">100%</div>
                </div>
                <div className="text-gray-400">Licensed & Insured</div>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-[#D4AF37]/20 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-2">
                  <Clock className="h-6 w-6 text-[#D4AF37]" />
                  <div className="text-3xl font-bold text-[#D4AF37]">24/7</div>
                </div>
                <div className="text-gray-400">Available Service</div>
              </div>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#F4E5C3]/10 border border-[#D4AF37]/30 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-white mb-6">Why Choose BWI Chauffeur?</h4>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Professional Chauffeurs</div>
                    <p className="text-gray-400 text-sm">Background-checked, professionally trained drivers with extensive experience in luxury transportation and customer service.</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Premium Fleet</div>
                    <p className="text-gray-400 text-sm">Latest model Mercedes, BMW, and Cadillac vehicles, meticulously maintained and equipped with luxury amenities.</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Competitive Pricing</div>
                    <p className="text-gray-400 text-sm">Transparent pricing with no hidden fees. Best rates for luxury transportation in Maryland and Delaware.</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Easy Booking</div>
                    <p className="text-gray-400 text-sm">Book online 24/7 or call 877-679-0100 for instant confirmation and personalized service.</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Extensive Coverage</div>
                    <p className="text-gray-400 text-sm">Serving all Maryland counties, Delaware state, York County PA, and the entire DMV metropolitan area.</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">On-Time Guarantee</div>
                    <p className="text-gray-400 text-sm">99% on-time rate with real-time flight tracking and traffic monitoring for reliable airport transfers.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
