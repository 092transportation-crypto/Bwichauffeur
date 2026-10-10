import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import Fleet from '../components/Fleet';
import { ArrowLeft, Shield, Sparkles, Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import FaqSection from '../components/FaqSection';
import { PAGE_FAQS } from '../data/pageFaqs';
import Breadcrumbs from '../components/Breadcrumbs';

const FleetPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Luxury Fleet | Mercedes, BMW 7 Series, Escalade & Sprinter Vans</title>
        <meta name="description" content="Tour our luxury fleet: Mercedes-Benz sedans, BMW 7 Series, Cadillac Escalade SUVs & 14-passenger Sprinter vans. Clean, insured. Call 877-609-1919." />
        <link rel="canonical" href="https://www.bwichauffeur.com/luxury-fleet" />
      </Helmet>
      
    <div className="min-h-screen bg-black pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ label: 'Luxury Fleet' }]} />
        <Button
          onClick={() => navigate('/')}
          variant="outline"
          className="mb-8 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
        
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-[#D4AF37]">Luxury Fleet</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Premium vehicles maintained to the highest standards for your comfort and safety
          </p>
        </div>

        {/* Fleet Introduction Content */}
        <div className="max-w-4xl mx-auto mb-16 space-y-6 text-gray-300 leading-relaxed">
          <p className="text-lg">
            At <strong className="text-[#D4AF37]">BWI Chauffeur</strong>, we take great pride in our fleet of luxury vehicles. Each one is chosen for comfort, safety, and style. Business trip to BWI? Corporate event in Washington DC? A celebration in Baltimore? You arrive in style every time.
          </p>

          <p>
            Our fleet features the latest models from <strong>Mercedes-Benz</strong>, <strong>BMW</strong>, <strong>Cadillac</strong>, and <strong>Chevrolet</strong>. Every vehicle gets a daily inspection and regular professional maintenance. Our vehicles reflect the service we promise. We accept nothing less than perfection.
          </p>

          <p>
            Our fleet fits every travel need. Business sedans work best for airport transfers and meetings. Luxury SUVs suit families and group outings. Mercedes Sprinter vans carry larger groups to conferences, weddings, and corporate events. Every vehicle includes:
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Free Wi-Fi</li>
            <li>Bottled water</li>
            <li>Phone chargers</li>
            <li>Climate-controlled interiors</li>
          </ul>
        </div>

        {/* Fleet Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-[#D4AF37]/20 rounded-xl p-6 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-7 w-7 text-black" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Fully Insured</h3>
            <p className="text-gray-400 text-sm">All vehicles carry comprehensive commercial insurance for complete passenger protection and peace of mind during every journey.</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-[#D4AF37]/20 rounded-xl p-6 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-7 w-7 text-black" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Immaculately Clean</h3>
            <p className="text-gray-400 text-sm">Every vehicle is professionally detailed before each trip, ensuring a pristine, sanitized interior that meets the highest hygiene standards.</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-[#D4AF37]/20 rounded-xl p-6 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="h-7 w-7 text-black" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Expert Maintenance</h3>
            <p className="text-gray-400 text-sm">Regular professional servicing and daily inspections ensure optimal performance, safety, and reliability for every trip you take.</p>
          </div>
        </div>

        {/* Which vehicle to choose */}
        <div className="max-w-4xl mx-auto mb-16 bg-gray-900/60 border border-[#D4AF37]/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Which Vehicle Should <span className="text-[#D4AF37]">You Book?</span>
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            For a solo business traveler or a couple heading to BWI, our Mercedes-Benz E-Class
            Business Sedan is the most-booked option — plenty of legroom and trunk space for two
            standard bags without paying for a vehicle you don't need. Clients meeting an
            important client or arriving for a wedding often step up to the BMW 7 Series or
            Mercedes S-Class First Class Sedan for the extra presence and comfort on longer rides.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Families and small groups of 3–5 with multiple suitcases usually do best in a Lincoln
            Nautilus or Cadillac Escalade — the Escalade's third row also works well for golf
            clubs, car seats, or a stroller alongside the luggage. For wedding parties, airport
            groups, or corporate shuttles of 7–14 people, our Mercedes Sprinter vans keep everyone
            together in one vehicle at one flat rate, instead of splitting into two or three cars.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Not sure which fits your group? Tell us your passenger and luggage count when you
            request a quote and we'll recommend the right vehicle — there's no charge for asking,
            and we'd rather size it correctly the first time than have you arrive short on space.
          </p>
        </div>
      </div>
      <Fleet />

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#F4E5C3]/10 border-y border-[#D4AF37]/30 py-12 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience Luxury Transportation?</h2>
          <p className="text-gray-300 mb-6">Book your preferred vehicle today and discover why thousands of clients choose BWI Chauffeur for their transportation needs. Our team is available 24/7 to assist with reservations and answer any questions about our fleet.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => navigate('/booking')}
              className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50"
            >
              Book Your Ride Now
            </Button>
            <a
              href="tel:+18776091919"
              className="inline-flex items-center px-6 py-2 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-md hover:bg-[#D4AF37] hover:text-black transition-all"
            >
              Call 877-609-1919
            </a>
          </div>
        </div>
      </div>
    </div>
      <FaqSection faqs={PAGE_FAQS['/luxury-fleet']} />
    </>
  );
};

export default FleetPage;