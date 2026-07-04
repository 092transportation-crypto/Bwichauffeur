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
            Welcome to <strong className="text-[#D4AF37]">BWI Chauffeur</strong>, your first choice for luxury transportation in Maryland, Delaware, and Washington DC. Since 2014, we have served clients who expect excellence on every trip. Thousands of customers across the DMV region trust us with their travel.
          </p>

          <p>
            We specialize in <strong>BWI airport transportation</strong>. Our transfers to and from BWI Marshall Airport are punctual and stress-free. Heading to a meeting in Baltimore, a conference in Annapolis, or an event in Washington DC? Our chauffeurs get you there on time and in style.
          </p>

          <p>
            We also serve Ronald Reagan Washington National Airport (DCA) and Washington Dulles International Airport (IAD). That gives you smooth connections across the entire tri-state area.
          </p>

          <p>
            Our fleet features late-model luxury vehicles. Every car is fully insured and maintained daily. Each one offers Wi-Fi, premium leather seating, and climate control. Choose from:
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>2025 Mercedes-Benz E-Class business sedans</li>
            <li>Mercedes-Benz S-Class executive sedans</li>
            <li>BMW 7 Series luxury sedans</li>
            <li>Cadillac Escalade and Chevrolet Suburban SUVs</li>
            <li>Mercedes Sprinter vans for groups</li>
          </ul>

          <p>
            Our services cover every travel need:
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Corporate car service for business executives</li>
            <li>Wedding limousine service for special occasions</li>
            <li>Airport shuttle and point-to-point transfers</li>
            <li>Hourly chauffeur service</li>
            <li>Group transportation for events and conferences</li>
          </ul>

          <p>
            Every client is different. We tailor each package to your needs — from Fortune 500 companies to family celebrations. You get the same care and attention to detail either way.
          </p>

          <p>
            We cover every Maryland county, all of Delaware, and York County, Pennsylvania. That includes Anne Arundel, Baltimore, Howard, Montgomery, and Prince George's counties. Our chauffeurs are available 24 hours a day, every day of the year. Call us anytime at <a href="tel:+18776790100" className="text-[#D4AF37] hover:underline font-semibold">877-679-0100</a>.
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
