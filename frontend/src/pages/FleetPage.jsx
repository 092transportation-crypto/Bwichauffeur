import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import Fleet from '../components/Fleet';
import { ArrowLeft, Shield, Sparkles, Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import Breadcrumbs from '../components/Breadcrumbs';

const FleetPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Premium Luxury Chauffeur Vehicles and Fleet | BWI Chauffeur</title>
        <meta name="description" content="Travel in premium luxury vehicles with BWI Chauffeur, including Mercedes, BMW, and Cadillac, ensuring ultimate comfort, style, and complete reliability." />
        <link rel="canonical" href="https://bwichauffeur.com/luxury-fleet/" />
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
            At <strong className="text-[#D4AF37]">BWI Chauffeur</strong>, we take immense pride in our meticulously curated fleet of luxury vehicles. Each automobile in our collection has been carefully selected to provide the ultimate in comfort, safety, and sophistication for our discerning clientele. Whether you're traveling to BWI Airport for a business trip, attending a corporate event in Washington DC, or celebrating a special occasion in Baltimore, our premium vehicles ensure you arrive in style and comfort.
          </p>

          <p>
            Our fleet features the latest models from the world's most prestigious automotive manufacturers including <strong>Mercedes-Benz</strong>, <strong>BMW</strong>, <strong>Cadillac</strong>, and <strong>Chevrolet</strong>. Every vehicle undergoes rigorous daily inspections and regular professional maintenance to guarantee optimal performance, cleanliness, and reliability. We understand that our vehicles are a reflection of the premium service experience we promise to deliver, which is why we accept nothing less than perfection.
          </p>

          <p>
            From executive sedans perfect for airport transfers and business meetings to spacious luxury SUVs ideal for family travel and group outings, our diverse fleet accommodates every transportation need. For larger groups attending conferences, weddings, or corporate events, our Mercedes Sprinter Vans offer premium group transportation without compromising on comfort or amenities. Each vehicle features complimentary Wi-Fi, bottled water, phone chargers, and climate-controlled interiors to ensure a pleasant journey regardless of distance.
          </p>
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
              href="tel:+18776790100"
              className="inline-flex items-center px-6 py-2 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-md hover:bg-[#D4AF37] hover:text-black transition-all"
            >
              Call 877-679-0100
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default FleetPage;