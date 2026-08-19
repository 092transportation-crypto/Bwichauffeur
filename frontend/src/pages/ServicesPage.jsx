import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import Services from '../components/Services';
import { ArrowLeft, Clock, Award, ThumbsUp } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import Breadcrumbs from '../components/Breadcrumbs';

const servicesFaqs = [
  {
    q: 'How much does BWI airport car service cost?',
    a: 'We charge flat rates based on distance and vehicle type. There is no surge pricing and no hidden fees. Call 877-609-1919 or book online for an exact quote.',
  },
  {
    q: 'Do you track my flight?',
    a: 'Yes. We track every flight in real time. If your flight is early or delayed, your pickup time adjusts automatically at no charge.',
  },
  {
    q: 'Can I book a chauffeur by the hour?',
    a: 'Yes. Our hourly chauffeur service is perfect for meetings, events, and city tours. Your chauffeur stays with you for as long as you need.',
  },
  {
    q: 'Do you offer corporate accounts?',
    a: 'Yes. Corporate accounts include priority booking, consolidated billing, detailed trip reports, and a dedicated account manager.',
  },
  {
    q: 'What vehicles can I choose from?',
    a: 'Sedans include the Mercedes E-Class, S-Class, and BMW 7 Series. SUVs include the Cadillac Escalade and Chevrolet Suburban. Mercedes Sprinter vans fit up to 14 passengers.',
  },
];

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>BWI Airport Transportation & Executive Car Service</title>
        <meta name="description" content="BWI Chauffeur offers luxury airport transportation, executive car service, corporate travel, group rides, and wedding transportation." />
        <link rel="canonical" href="https://www.bwichauffeur.com/services/" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: servicesFaqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          })}
        </script>
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
            <strong className="text-[#D4AF37]">BWI Chauffeur</strong> offers a full range of luxury transportation services in Maryland, Delaware, and Washington DC. From airport transfers to wedding transportation, every journey is comfortable, safe, and memorable.
          </p>

          <p>
            Our commitment to excellence starts the moment you book. Every service is customized to you. Need an airport pickup at BWI, DCA, or Dulles? An executive car for a business meeting? A limousine for your wedding day? We have you covered.
          </p>

          <p>
            What sets us apart is attention to detail:
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Chauffeurs arrive early, dressed professionally</li>
            <li>Real-time flight tracking adjusts your pickup for delays</li>
            <li>Flexible booking options and personal amenities</li>
            <li>Corporate accounts with custom billing and trip reports</li>
          </ul>

          <p>
            Our pricing is transparent. There are no hidden fees and no surprises. You get dependable black car service 24 hours a day, 365 days a year.
          </p>
          
          <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-4">Luxury Airport Transportation</h2>
          <p>
            Our airport car service covers BWI, Reagan National (DCA), and Dulles International (IAD). You get real-time flight tracking, curbside pickup, and free wait time for delayed flights. No parking fees. No rideshare surge pricing. Just peace of mind from door to terminal.
          </p>

          <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-4">Executive Car Service & Black Car Service</h2>
          <p>
            Our executive car service delivers the reliability your business demands. The fleet features late-model luxury sedans and SUVs with WiFi, so you stay productive on the go. Heading to meetings, hosting VIP clients, or attending a conference? You arrive refreshed and ready.
          </p>

          <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-4">Corporate Transportation</h2>
          <p>
            Our corporate transportation is built for businesses that value professionalism and discretion. We handle executive transfers, employee shuttles, and event transportation. Corporate accounts include:
          </p>

          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Priority booking</li>
            <li>Consolidated billing</li>
            <li>Detailed trip reports</li>
            <li>A dedicated account manager</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-4">Group Transportation Service</h2>
          <p>
            Planning travel for a group? Our Mercedes Sprinter vans fit up to 14 passengers in comfort. They are perfect for corporate retreats, family gatherings, wedding parties, and sporting events. Every van has climate control, entertainment systems, and plenty of luggage space.
          </p>

          <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-4">Wedding Transportation Service</h2>
          <p>
            Make your special day unforgettable. We handle every ride, from the bridal party's arrival to the grand exit after the reception. Our sedans and SUVs are decorated to match your wedding theme. Chauffeurs provide red carpet treatment and keep the bride and groom relaxed and on time. We also shuttle your guests safely between venues.
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

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Frequently Asked <span className="text-[#D4AF37]">Questions</span>
        </h2>
        <div className="space-y-6">
          {servicesFaqs.map((f) => (
            <div key={f.q} className="bg-gray-900/60 border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">{f.q}</h3>
              <p className="text-gray-400">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

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
              href="tel:+18776091919"
              className="inline-flex items-center px-6 py-2 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-md hover:bg-[#D4AF37] hover:text-black transition-all"
            >
              Call 877-609-1919
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