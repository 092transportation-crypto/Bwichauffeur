import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

const IntroContent = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Introduction */}
        <div className="max-w-4xl mx-auto space-y-6 text-gray-300 leading-relaxed">
          
          <p className="text-lg">
            Welcome to <strong className="text-[#D4AF37]">BWI Chauffeur</strong>, your premier choice for luxury transportation services throughout Maryland, Delaware, and the greater Washington DC metropolitan area. Since 2014, we have been providing exceptional chauffeur services to discerning clients who demand excellence, reliability, and professionalism in every journey. Our commitment to superior service has made us the trusted transportation partner for thousands of satisfied customers across the DMV region.
          </p>

          <p>
            Our company specializes in <strong>BWI airport transportation</strong>, serving Baltimore-Washington International Thurgood Marshall Airport with punctual, stress-free transfers. Whether you're arriving for business meetings in Baltimore City, attending conferences in Annapolis, or traveling to Washington DC for important engagements, our professional chauffeur service ensures you arrive on time and in style. We also provide comprehensive service to Ronald Reagan Washington National Airport (DCA) and Washington Dulles International Airport (IAD), offering seamless connections throughout the entire tri-state area.
          </p>

          <p>
            At BWI Chauffeur, we maintain an impressive fleet of luxury vehicles including the latest 2025 Mercedes-Benz E-Class, renowned Mercedes-Benz S-Class executive sedans, prestigious BMW 7 Series luxury sedans, spacious Cadillac Escalade and Chevrolet Suburban SUVs, and premium Mercedes Sprinter Vans for group transportation. Each vehicle is meticulously maintained, fully insured, and equipped with modern amenities including Wi-Fi connectivity, premium leather seating, and advanced climate control systems to ensure your comfort throughout the journey.
          </p>

          <p>
            Our transportation services cater to diverse needs including corporate car service for business executives, wedding limousine service for special occasions, airport shuttle services, point-to-point transfers, hourly chauffeur service, and group transportation for events and conferences. We understand that every client has unique requirements, which is why we offer customizable packages tailored to your specific needs and preferences. From Fortune 500 companies to families celebrating milestone events, BWI Chauffeur delivers unmatched service quality and attention to detail.
          </p>

          <p>
            BWI Chauffeur proudly provides comprehensive coverage throughout all Maryland counties including Anne Arundel County, Baltimore County, Howard County, Montgomery County, Prince George's County, and extends service to the entire state of Delaware and York County, Pennsylvania. Our professional chauffeurs are available 24 hours a day, 7 days a week, 365 days a year to accommodate your travel schedule. Call us anytime at <a href="tel:+18776790100" className="text-[#D4AF37] hover:underline font-semibold">877-679-0100</a> for immediate assistance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Button
              onClick={() => navigate('/booking')}
              size="lg"
              className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50"
            >
              Book Your Ride Now
            </Button>
            <Button
              onClick={() => navigate('/services')}
              size="lg"
              variant="outline"
              className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroContent;
