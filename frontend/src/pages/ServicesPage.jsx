import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import Services from '../components/Services';
import { ArrowLeft, Clock, Award, ThumbsUp } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import Breadcrumbs from '../components/Breadcrumbs';

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Luxury Airport Transportation & Executive Car Service | BWI Chauffeur</title>
        <meta name="description" content="BWI Chauffeur offers luxury airport transportation, executive car service, airport transfer service, corporate transportation, group and wedding transportation." />
        <link rel="canonical" href="https://bwichauffeur.com/services/" />
      </Helmet>
      
    <div className="min-h-screen bg-black pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ label: 'Services' }]} />
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
            Our <span className="text-[#D4AF37]">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive luxury transportation solutions tailored to your unique needs
          </p>
        </div>

        {/* Services Introduction Content */}
        <div className="max-w-4xl mx-auto mb-16 space-y-6 text-gray-300 leading-relaxed">
          <p className="text-lg">
            <strong className="text-[#D4AF37]">BWI Chauffeur</strong> offers a comprehensive range of premium transportation services designed to meet the diverse needs of our valued clients throughout Maryland, Delaware, Washington DC, and beyond. From reliable airport transfer service to elegant wedding transportation service, our professional chauffeurs and luxury vehicles ensure every journey is comfortable, safe, and memorable.
          </p>

          <p>
            Our commitment to excellence begins the moment you make a reservation. Each service is customized to your specific requirements, whether you need a punctual airport pickup at BWI, DCA, or Dulles International Airport, executive car service for important business meetings, or sophisticated limousine service for your wedding day. We understand that every client has unique preferences, which is why we offer flexible booking options, personalized amenities, and dedicated account management for corporate clients.
          </p>

          <p>
            What sets BWI Chauffeur apart is our attention to detail and unwavering dedication to customer satisfaction. Our professionally trained chauffeurs arrive early, dress immaculately, and maintain the highest standards of courtesy and discretion. With real-time flight tracking for airport car service, we monitor your arrival and adjust pickup times accordingly, eliminating the stress of delayed flights. For corporate clients, we offer customized billing, detailed trip reports, and priority booking to streamline your company's transportation logistics.
          </p>

          <p>
            Whether you're planning a romantic anniversary celebration or coordinating a group transportation service for a corporate conference, or simply need luxury airport transportation, BWI Chauffeur delivers exceptional service at competitive rates. Our transparent pricing policy means no hidden fees or surprises—just premium black car service you can count on, 24 hours a day, 7 days a week, 365 days a year.
          </p>
          
          <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-4">Luxury Airport Transportation</h2>
          <p>
            Our luxury airport transportation is the premier choice for travelers seeking comfort, reliability, and style. Whether you're flying in or out of BWI Airport, Reagan National (DCA), or Dulles International (IAD), our airport car service ensures a seamless experience. We provide real-time flight tracking, curbside pickup, and complimentary wait time for delayed flights. Our airport transfer service eliminates the stress of parking fees and rideshare surge pricing, giving you peace of mind from door to terminal.
          </p>
          
          <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-4">Executive Car Service & Premium Black Car Service</h2>
          <p>
            For discerning professionals, our executive car service delivers the sophistication and reliability your business demands. Our premium black car service fleet features late-model luxury sedans and SUVs, all meticulously maintained and equipped with WiFi for productivity on the go. Whether you're heading to important meetings, hosting VIP clients, or attending conferences, our executive car service ensures you arrive refreshed and ready to succeed.
          </p>
          
          <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-4">Corporate Transportation</h2>
          <p>
            Our corporate transportation solutions are designed for businesses that demand reliability, professionalism, and discretion. Whether you need executive transfers for visiting clients, employee shuttle services, or transportation for corporate events and conferences, BWI Chauffeur provides seamless logistics management. We offer dedicated corporate accounts with priority booking, consolidated billing, and detailed reporting to help manage your company's transportation budget efficiently. Trust our experienced chauffeurs to represent your business with the utmost professionalism.
          </p>
          
          <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-4">Group Transportation Service</h2>
          <p>
            Planning travel for a group? Our group transportation service features spacious Mercedes Sprinter vans accommodating up to 14 passengers in comfort. Perfect for corporate retreats, family gatherings, wedding parties, and sporting events. Our group transportation service includes climate control, entertainment systems, and ample luggage space, ensuring everyone travels together in style.
          </p>
          
          <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-4">Wedding Transportation Service</h2>
          <p>
            Make your special day unforgettable with our elegant wedding transportation service. From the bridal party's arrival at the ceremony to the grand exit after the reception, we ensure every moment is picture-perfect. Our luxury fleet includes sophisticated sedans and spacious SUVs, all decorated to complement your wedding theme. Our professional chauffeurs provide red carpet treatment, assist with wedding attire, and ensure the bride and groom arrive relaxed and on time. We also offer guest shuttle services to transport your loved ones safely between venues.
          </p>
        </div>

        {/* Service Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-[#D4AF37]/20 rounded-xl p-6 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-7 w-7 text-black" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">24/7 Availability</h3>
            <p className="text-gray-400 text-sm">Round-the-clock service for early morning flights, late-night arrivals, and everything in between. We're always ready when you need us.</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-[#D4AF37]/20 rounded-xl p-6 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-7 w-7 text-black" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Premium Quality</h3>
            <p className="text-gray-400 text-sm">Every aspect of our service reflects our commitment to excellence, from immaculate vehicles to professionally attired chauffeurs.</p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-[#D4AF37]/20 rounded-xl p-6 text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] rounded-full flex items-center justify-center mx-auto mb-4">
              <ThumbsUp className="h-7 w-7 text-black" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Satisfaction Guaranteed</h3>
            <p className="text-gray-400 text-sm">With over 25,000 satisfied clients and a 5-star rating, your satisfaction is our top priority and our track record proves it.</p>
          </div>
        </div>
      </div>
      <Services />

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#F4E5C3]/10 border-y border-[#D4AF37]/30 py-12 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Transportation Solution?</h2>
          <p className="text-gray-300 mb-6">Contact our team to discuss your specific requirements. Whether it's a multi-day corporate event, a wedding weekend, or recurring airport transfers, we'll create a tailored package that perfectly fits your needs and budget.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => navigate('/booking')}
              className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50"
              data-testid="services-get-quote-cta"
            >
              Get a Free Quote
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

      {/* Internal Links Block — links to at least 3 other key pages */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-lg font-semibold text-white mb-4">Explore more</h3>
        <div className="grid sm:grid-cols-3 gap-3">
          <Link
            to="/luxury-fleet"
            className="px-4 py-3 bg-gray-900/60 border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 rounded-lg text-gray-200 hover:text-[#D4AF37] transition-colors text-sm font-medium"
          >
            Our Luxury Fleet →
          </Link>
          <Link
            to="/service-areas"
            className="px-4 py-3 bg-gray-900/60 border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 rounded-lg text-gray-200 hover:text-[#D4AF37] transition-colors text-sm font-medium"
          >
            Service Areas →
          </Link>
          <Link
            to="/bwi-to-washington-dc"
            className="px-4 py-3 bg-gray-900/60 border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 rounded-lg text-gray-200 hover:text-[#D4AF37] transition-colors text-sm font-medium"
          >
            BWI → Washington DC Route →
          </Link>
          <Link
            to="/bwi-to-annapolis"
            className="px-4 py-3 bg-gray-900/60 border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 rounded-lg text-gray-200 hover:text-[#D4AF37] transition-colors text-sm font-medium"
          >
            BWI → Annapolis Route →
          </Link>
          <Link
            to="/booking"
            className="px-4 py-3 bg-gray-900/60 border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 rounded-lg text-gray-200 hover:text-[#D4AF37] transition-colors text-sm font-medium"
          >
            Book Your Ride →
          </Link>
          <Link
            to="/blog"
            className="px-4 py-3 bg-gray-900/60 border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 rounded-lg text-gray-200 hover:text-[#D4AF37] transition-colors text-sm font-medium"
          >
            Travel Insights & Blog →
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServicesPage;