import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
            We specialize in <Link to="/bwi-airport-car-service" className="text-[#D4AF37] hover:underline font-semibold">BWI airport transportation</Link>. Our transfers to and from BWI Marshall Airport are punctual and stress-free. Heading to a meeting in Baltimore, a conference in Annapolis, or an event in Washington DC? Our chauffeurs get you there on time and in style.
          </p>

          <p>
            We also serve <Link to="/dca-airport-car-service" className="text-[#D4AF37] hover:underline font-semibold">Ronald Reagan Washington National Airport (DCA)</Link> and <Link to="/iad-airport-car-service" className="text-[#D4AF37] hover:underline font-semibold">Washington Dulles International Airport (IAD)</Link>. That gives you smooth connections across the entire tri-state area, including Northern Virginia hubs like <Link to="/tysons-corner-va-corporate-car-service" className="text-[#D4AF37] hover:underline font-semibold">Tysons Corner</Link> and <Link to="/reston-va-corporate-car-service" className="text-[#D4AF37] hover:underline font-semibold">Reston</Link>.
          </p>

          <p>
            Our fleet features late-model luxury vehicles. Every car is fully insured and maintained daily. Each one offers Wi-Fi, premium leather seating, and climate control. Choose from:
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>2025 Mercedes-Benz E-Class business sedans</li>
            <li>Mercedes-Benz S-Class executive sedans</li>
            <li>BMW 7 Series luxury sedans</li>
            <li>Lincoln Navigator and Chevrolet Suburban SUVs</li>
            <li>Mercedes Sprinter vans for groups</li>
          </ul>

          <p>
            Our services cover every travel need:
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><Link to="/maryland-corporate-car-service" className="text-[#D4AF37] hover:underline">Corporate car service</Link> for business executives</li>
            <li><Link to="/maryland-wedding-limo" className="text-[#D4AF37] hover:underline">Wedding limousine service</Link> for special occasions</li>
            <li>Airport shuttle and point-to-point transfers</li>
            <li><Link to="/maryland-hourly-chauffeur-service" className="text-[#D4AF37] hover:underline">Hourly chauffeur service</Link></li>
            <li><Link to="/blog/group-transportation-bwi-airport" className="text-[#D4AF37] hover:underline">Group transportation</Link> for events and conferences</li>
          </ul>

          <p>
            <strong className="text-[#D4AF37]">Pricing is simple and flat-rate.</strong> Point-to-point sedan transfers are priced by distance, with premium SUVs priced above the sedan rate for the same trip. Hourly, as-directed service for weddings, events, or multi-stop days is booked with a three- to four-hour minimum. Every rate includes tolls and gratuity, is confirmed before you book, and never changes for surge or demand. Call 877-609-1919 or request a quote online for the exact rate on your trip.
          </p>

          <p>
            Every client is different. We tailor each package to your needs — from Fortune 500 companies to family celebrations. You get the same care and attention to detail either way.
          </p>

          <p>
            We cover every Maryland county, all of Delaware, and York County, Pennsylvania. That includes Anne Arundel, Baltimore, Howard, Montgomery, and Prince George's counties. Our chauffeurs are available 24 hours a day, every day of the year. Call us anytime at <a href="tel:+18776091919" className="text-[#D4AF37] hover:underline font-semibold">877-609-1919</a>.
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
