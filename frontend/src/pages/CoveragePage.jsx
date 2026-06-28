import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import Coverage from '../components/Coverage';
import { ArrowLeft, Navigation, Plane, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import Breadcrumbs from '../components/Breadcrumbs';

const CoveragePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>BWI Chauffeur Coverage Map 2026 | Service Areas in MD, DE, DC & VA</title>
        <meta name="description" content="View BWI Chauffeur service areas with coverage maps and exact locations across Maryland, Delaware, and DC for reliable, professional, and prompt transportation." />
        <link rel="canonical" href="https://bwichauffeur.com/coverage/" />
      </Helmet>
    <div className="min-h-screen bg-black pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ label: 'Coverage Areas' }]} />
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
            Service <span className="text-[#D4AF37]">Coverage Areas</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Premium chauffeur service throughout Maryland, Delaware, Pennsylvania, and the DMV region
          </p>
        </div>

        {/* Coverage Introduction Content */}
        <div className="max-w-4xl mx-auto mb-16 space-y-6 text-gray-300 leading-relaxed">
          <p className="text-lg">
            <strong className="text-[#D4AF37]">BWI Chauffeur</strong> proudly provides comprehensive luxury transportation services across an extensive coverage area spanning Maryland, Delaware, Pennsylvania, Washington DC, and Northern Virginia. Our strategic location near Baltimore-Washington International Airport allows us to efficiently serve clients throughout the entire DMV metropolitan region with reliable, punctual, and professional chauffeur services.
          </p>

          <p>
            Our primary service area encompasses all major destinations in Maryland including Baltimore City, Annapolis, Columbia, Rockville, Bethesda, Silver Spring, and the Inner Harbor district. We specialize in <strong>BWI Airport transportation</strong>, offering seamless transfers to and from Baltimore-Washington International Thurgood Marshall Airport for both business and leisure travelers. Additionally, we provide comprehensive service to Ronald Reagan Washington National Airport (DCA) and Washington Dulles International Airport (IAD), ensuring complete airport coverage for the region.
          </p>

          <p>
            Beyond our primary coverage zone, BWI Chauffeur extends service throughout all 23 Maryland counties plus Baltimore City, from the Eastern Shore communities of Talbot and Queen Anne's County to the western reaches of Allegany and Washington County. We also serve the entire state of Delaware, York County in Pennsylvania, and the greater Washington DC metropolitan area including Arlington, Alexandria, Fairfax, and Tysons Corner in Northern Virginia.
          </p>

          <p>
            Whether you need transportation from BWI Airport to downtown Washington DC, a corporate car service from Annapolis to Baltimore, or luxury transportation for a wedding in the Maryland countryside, our experienced chauffeurs know the region intimately. We utilize advanced GPS navigation and real-time traffic monitoring to select optimal routes, ensuring timely arrivals regardless of traffic conditions or weather challenges.
          </p>
        </div>

        {/* Coverage Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-[#D4AF37]/20 rounded-xl p-6 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] rounded-full flex items-center justify-center mx-auto mb-4">
              <Plane className="h-7 w-7 text-black" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">All Major Airports</h3>
            <p className="text-gray-400 text-sm">Complete coverage for BWI, DCA Reagan National, and IAD Dulles International airports with flight tracking and meet-and-greet services.</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-[#D4AF37]/20 rounded-xl p-6 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="h-7 w-7 text-black" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Major Cities</h3>
            <p className="text-gray-400 text-sm">Service to Baltimore, Washington DC, Annapolis, Wilmington, and all major business districts throughout the tri-state area.</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-[#D4AF37]/20 rounded-xl p-6 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] rounded-full flex items-center justify-center mx-auto mb-4">
              <Navigation className="h-7 w-7 text-black" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Flexible Routes</h3>
            <p className="text-gray-400 text-sm">Point-to-point transfers, multi-stop trips, and custom routes available. We go wherever you need with reliable, professional service.</p>
          </div>
        </div>
      </div>
      <Coverage />

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#F4E5C3]/10 border-y border-[#D4AF37]/30 py-12 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don't See Your Location Listed?</h2>
          <p className="text-gray-300 mb-6">Our coverage area is constantly expanding, and we frequently accommodate special requests for destinations outside our standard service zones. Contact our 24/7 concierge team to confirm availability and receive a custom quote for your specific route.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => navigate('/booking')}
              className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50"
            >
              Get a Quote
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

export default CoveragePage;