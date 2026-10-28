import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import Coverage from '../components/Coverage';
import { ArrowLeft, Navigation, Plane, Building } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import FaqSection from '../components/FaqSection';
import { PAGE_FAQS } from '../data/pageFaqs';
import Breadcrumbs from '../components/Breadcrumbs';

const CoveragePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Where We Drive | MD, DC, VA & DE Coverage Map</title>
        <meta name="description" content="BWI Chauffeur's full coverage: every Maryland county, Washington DC, Northern Virginia & Delaware, plus BWI, DCA, IAD & PHL airports. Call 877-609-1919." />
        <link rel="canonical" href="https://www.bwichauffeur.com/coverage" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'BWI Chauffeur',
            telephone: '+1-877-609-1919',
            url: 'https://www.bwichauffeur.com',
            image: 'https://www.bwichauffeur.com/logo.jpeg',
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '9836 Lyon Ave',
              addressLocality: 'Laurel',
              addressRegion: 'MD',
              postalCode: '20723',
              addressCountry: 'US',
            },
            areaServed: { '@type': 'Place', name: 'Maryland, Washington DC & Northern Virginia' },
            openingHours: 'Mo-Su 00:00-23:59',
          })}
        </script>
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
            <strong className="text-[#D4AF37]">BWI Chauffeur</strong> serves Maryland, Delaware, Pennsylvania, Washington DC, and Northern Virginia. We are based near BWI Airport. That lets us reach clients across the entire DMV region quickly and reliably.
          </p>

          <p>
            Our primary service area covers all major Maryland destinations:
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Baltimore City and the Inner Harbor</li>
            <li>Annapolis and Columbia</li>
            <li>Rockville, Bethesda, and Silver Spring</li>
          </ul>

          <p>
            We specialize in <strong>BWI Airport transportation</strong> with smooth transfers for business and leisure travelers. We also serve Reagan National (DCA) and Dulles International (IAD). That gives you complete airport coverage for the region.
          </p>

          <p>
            Our full coverage goes much further. We serve all 23 Maryland counties plus Baltimore City — from Talbot and Queen Anne's on the Eastern Shore to Allegany and Washington County in the west. We also cover all of Delaware and York County, Pennsylvania. In Northern Virginia, we serve Arlington, Alexandria, Fairfax, and Tysons Corner.
          </p>

          <p>
            Our chauffeurs know the region well. We use GPS navigation and real-time traffic monitoring to pick the best routes. You arrive on time, whatever the traffic or weather.
          </p>

          <p>
            Coverage beyond Maryland is just as routine for us. We run regular long-distance transfers to the Delaware beaches (Rehoboth, Bethany and Dewey), to Ocean City on Maryland's Eastern Shore, and up to Philadelphia International Airport for travelers whose flights connect better from PHL. Northern Virginia trips frequently pair with a DCA or IAD transfer, and a growing share of our corporate accounts route recurring travel between a Maryland or DC office and one of these farther destinations on a standing monthly schedule.
          </p>

          <p>
            If your address is not on this page, that is a gap in our list, not in our service area. Call <a href="tel:+18776091919" className="text-[#D4AF37] hover:text-[#F4E5C3] underline">877-609-1919</a> or use the quote form below with your exact pickup and drop-off addresses, and dispatch will confirm coverage and a flat rate before you book.
          </p>

          <p>
            Our busiest corridors — <Link to="/limo-service-baltimore-md" className="text-[#D4AF37] hover:text-[#F4E5C3] underline">Baltimore</Link>, <Link to="/limo-service-annapolis-md" className="text-[#D4AF37] hover:text-[#F4E5C3] underline">Annapolis</Link>, Columbia, Bethesda, Rockville and Silver Spring — see standing chauffeur rotations, which means faster same-day availability and chauffeurs who already know the local streets rather than relying solely on GPS. Every other address in our coverage map gets the same flat-rate pricing and 24/7 dispatch; it just may mean a slightly longer lead time to guarantee your preferred vehicle class. See our <Link to="/service-areas" className="text-[#D4AF37] hover:text-[#F4E5C3] underline">full list of service area pages</Link> for city-specific drive times and FAQs, or our <Link to="/maryland-corporate-car-service" className="text-[#D4AF37] hover:text-[#F4E5C3] underline">Maryland corporate car service</Link> page if you are setting up a standing account across multiple locations.
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
          <p className="text-gray-300 mb-6">Our coverage area is constantly expanding, and we often handle special requests for destinations outside our standard service zones. Contact our 24/7 concierge team to confirm availability and receive a custom quote for your specific route.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => navigate('/booking')}
              className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50"
            >
              Get a Quote
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
      <FaqSection faqs={PAGE_FAQS['/coverage']} />
    </>
  );
};

export default CoveragePage;