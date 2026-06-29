import React, { useState } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp, Phone, HelpCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import Breadcrumbs from '../components/Breadcrumbs';

const FAQPage = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqCategories = [
    {
      category: 'Booking & Reservations',
      faqs: [
        {
          question: 'How do I book a ride with BWI Chauffeur?',
          answer: 'You can book a ride through our online reservation system at the booking page, call us 24/7 at 877-679-0100, or email us at info@bwichauffeur.com. We recommend booking at least 24 hours in advance for standard services and 48-72 hours for special events like weddings.'
        },
        {
          question: 'What is your cancellation policy?',
          answer: 'We offer free cancellation up to 24 hours before your scheduled pickup time. Cancellations within 24 hours may be subject to a cancellation fee. No-shows are charged the full fare amount. For special events and wedding bookings, please refer to your contract for specific terms.'
        },
        {
          question: 'Can I make last-minute bookings?',
          answer: 'Yes! We accommodate last-minute bookings based on vehicle availability. Call our 24/7 dispatch at 877-679-0100 for immediate assistance. While we can\'t guarantee availability, we do our best to accommodate all requests.'
        },
        {
          question: 'Do you require a deposit for bookings?',
          answer: 'Standard airport transfers and hourly services typically don\'t require a deposit. However, special event bookings (weddings, proms, multi-day events) may require a deposit to secure your reservation. Corporate accounts can arrange direct billing.'
        }
      ]
    },
    {
      category: 'Pricing & Payment',
      faqs: [
        {
          question: 'How much does BWI airport transportation cost?',
          answer: 'Rates depend on vehicle type and distance. Fill out our quote form for an accurate price.'
        },
        {
          question: 'How is pricing calculated?',
          answer: 'Our pricing is based on the type of service (airport transfer, hourly, point-to-point), vehicle selection, distance, and duration. We provide transparent, all-inclusive quotes with no hidden fees. Tolls, parking, and gratuity guidelines are clearly communicated upfront.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), corporate accounts with approved credit, and can arrange direct billing for established business clients. Payment is typically collected after the service is completed.'
        },
        {
          question: 'Do you have surge pricing like ride-share apps?',
          answer: 'No! Unlike ride-share services, BWI Chauffeur never implements surge pricing. The rate you\'re quoted is the rate you pay, regardless of time of day, weather conditions, or local events. This gives you predictable, reliable pricing.'
        },
        {
          question: 'Is gratuity included in the price?',
          answer: 'Gratuity is not included in our quoted rates. Industry standard is 15-20% of the fare, but gratuity is always at your discretion based on service quality. Many of our corporate accounts include gratuity in their billing arrangements.'
        }
      ]
    },
    {
      category: 'Airport Transportation',
      faqs: [
        {
          question: 'Which airports do you serve?',
          answer: 'We provide service to all major airports in the region: BWI (Baltimore-Washington International), DCA (Reagan National), IAD (Dulles International), and PHL (Philadelphia International). BWI is our primary hub with the fastest response times.'
        },
        {
          question: 'How does flight tracking work?',
          answer: 'When you book an airport pickup, we automatically monitor your flight status through FlightAware and airline APIs. If your flight is early, we adjust your pickup time. If delayed, we reschedule automatically at no additional charge. Your chauffeur receives real-time updates.'
        },
        {
          question: 'What is your wait time policy for airport pickups?',
          answer: 'We include 60 minutes of complimentary wait time for domestic flights and 90 minutes for international arrivals. This starts when your flight lands, giving you time to deplane, clear customs (if applicable), and collect luggage. Additional wait time can be arranged.'
        },
        {
          question: 'Where will my chauffeur meet me at the airport?',
          answer: 'For arrivals, your chauffeur will be waiting in the ground transportation area at the lower level (Arrivals) with a sign displaying your name. Meet-and-greet service at baggage claim is available upon request for an additional fee.'
        }
      ]
    },
    {
      category: 'Vehicles & Fleet',
      faqs: [
        {
          question: 'What types of vehicles do you have?',
          answer: 'Our luxury fleet includes: Mercedes-Benz E-Class 2025 and S-Class sedans, BMW 7 Series, Cadillac Escalade and Chevrolet Suburban SUVs, and Mercedes Sprinter Vans for groups up to 14 passengers. All vehicles are late-model, meticulously maintained, and fully insured.'
        },
        {
          question: 'Can I request a specific vehicle?',
          answer: 'Absolutely! You can select your preferred vehicle class when booking. We\'ll do our best to accommodate specific vehicle requests, though availability may vary. For guaranteed specific vehicle assignments, we recommend booking at least 48 hours in advance.'
        },
        {
          question: 'Are your vehicles equipped with WiFi?',
          answer: 'Yes, all our vehicles come equipped with complimentary WiFi, phone chargers (USB and wireless), bottled water, and climate control. Our sedans and SUVs also feature premium leather interiors and privacy partitions available upon request.'
        },
        {
          question: 'How many passengers can your vehicles accommodate?',
          answer: 'Our sedans (Mercedes E-Class, S-Class, BMW 7 Series) accommodate 3 passengers. Luxury SUVs (Escalade, Suburban) seat 5 passengers. Mercedes Sprinter Vans accommodate up to 14 passengers. All with ample luggage space.'
        }
      ]
    },
    {
      category: 'Service Coverage',
      faqs: [
        {
          question: 'What areas do you serve?',
          answer: 'BWI Chauffeur provides service throughout Maryland (all 23 counties plus Baltimore City), the entire state of Delaware, York County Pennsylvania, Washington DC, and Northern Virginia. Our primary service area includes BWI Airport, Baltimore, Annapolis, and the surrounding counties.'
        },
        {
          question: 'Do you provide long-distance transportation?',
          answer: 'Yes! We offer long-distance transportation throughout the Mid-Atlantic region. Popular routes include BWI to New York City, Philadelphia, Richmond, and beyond. Contact us for custom quotes on long-distance trips.'
        },
        {
          question: 'Can you provide service to areas not listed?',
          answer: 'Likely yes! Our coverage is extensive and we frequently accommodate special requests. Call 877-679-0100 to confirm service availability for your specific route and receive a custom quote.'
        }
      ]
    },
    {
      category: 'Special Services',
      faqs: [
        {
          question: 'Do you provide wedding transportation?',
          answer: 'Yes! We specialize in wedding transportation including bridal party vehicles, ceremony-to-reception transfers, guest shuttles, and honeymoon airport service. We offer packages and can coordinate multiple vehicles. Book 6-12 months in advance for peak wedding season.'
        },
        {
          question: 'Do you offer corporate accounts?',
          answer: 'Absolutely! Our corporate program includes dedicated account management, customized billing, detailed trip reports, priority scheduling, and preferred rates for frequent travelers. Contact our corporate team to set up an account.'
        },
        {
          question: 'Can you accommodate child car seats?',
          answer: 'Yes, we can accommodate child car seats. Please let us know at the time of booking if you need a car seat (infant, convertible, or booster) so we can have the appropriate equipment ready. You may also bring your own car seat.'
        },
        {
          question: 'Do you provide hourly/as-directed service?',
          answer: 'Yes! Our hourly service is perfect for multiple stops, business meetings, shopping excursions, or city tours. You\'ll have a dedicated chauffeur and vehicle for the duration of your booking with flexibility to adjust your itinerary.'
        }
      ]
    },
    {
      category: 'Chauffeurs & Safety',
      faqs: [
        {
          question: 'Are your chauffeurs background checked?',
          answer: 'Yes, all chauffeurs undergo comprehensive background checks including criminal history, driving record verification, and drug testing. We also verify employment history and check references. Annual re-screening ensures ongoing compliance.'
        },
        {
          question: 'What training do your chauffeurs receive?',
          answer: 'Our chauffeurs complete extensive training including defensive driving certification, customer service excellence, geographic expertise, vehicle proficiency, and professional protocol. Many hold commercial driver\'s licenses (CDL) and have 10+ years of experience.'
        },
        {
          question: 'Are your vehicles insured?',
          answer: 'Yes, all vehicles carry $5 million in commercial liability insurance, comprehensive vehicle coverage, and we maintain workers\' compensation insurance. We exceed all Federal Motor Carrier Safety Administration (FMCSA) requirements.'
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>BWI Chauffeur FAQ 2026 | Pricing, Booking & Airport Pickup Answers</title>
        <meta name="description" content="Find answers to frequently asked questions about BWI Chauffeur's luxury transportation services, booking process, pricing, and service areas in Maryland and DC." />
        <link rel="canonical" href="https://bwichauffeur.com/faq" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqCategories
              .flatMap((cat) => cat.faqs)
              .map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: { '@type': 'Answer', text: f.answer },
              })),
          })}
        </script>
      </Helmet>
    <div className="min-h-screen bg-black pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'FAQ' }]} />
        {/* Back Button */}
        <Button
          onClick={() => navigate('/')}
          variant="outline"
          className="mb-8 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-black" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked <span className="text-[#D4AF37]">Questions</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions about our luxury chauffeur services, booking process, pricing, and more
          </p>
        </div>

        {/* FAQ Introduction for SEO */}
        <div className="mb-12 text-gray-300 leading-relaxed">
          <p className="mb-4">
            At <strong className="text-[#D4AF37]">BWI Chauffeur</strong>, we strive to make luxury transportation simple and stress-free. Below you'll find answers to the most commonly asked questions about our <Link to="/services" className="text-[#D4AF37] hover:underline">chauffeur services</Link>, <Link to="/fleet" className="text-[#D4AF37] hover:underline">luxury fleet</Link>, and <Link to="/coverage" className="text-[#D4AF37] hover:underline">service coverage areas</Link>. If you don't find the answer you're looking for, please don't hesitate to call us at <a href="tel:+18776790100" className="text-[#D4AF37] hover:underline">877-679-0100</a> - our team is available 24/7 to assist you.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-2xl overflow-hidden">
              {/* Category Header */}
              <div className="bg-gradient-to-r from-[#D4AF37]/10 to-transparent px-6 py-4 border-b border-gray-800">
                <h2 className="text-xl font-bold text-[#D4AF37]">{category.category}</h2>
              </div>

              {/* FAQs in Category */}
              <div className="divide-y divide-gray-800">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = `${categoryIndex}-${faqIndex}`;
                  const isOpen = openIndex === globalIndex;
                  
                  return (
                    <div key={faqIndex}>
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors"
                      >
                        <span className="text-white font-medium pr-4">{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-5">
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#D4AF37]/10 to-[#F4E5C3]/10 border border-[#D4AF37]/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our friendly team is available 24 hours a day, 7 days a week to answer your questions and help you book the perfect luxury transportation experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+18776790100"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call 877-679-0100
            </a>
            <Button
              onClick={() => navigate('/booking')}
              variant="outline"
              className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-6 py-3"
            >
              Book Online
            </Button>
          </div>
        </div>

        {/* Internal Links */}
        <div className="mt-12 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-4">Explore More</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/" className="text-[#D4AF37] hover:text-[#F4E5C3] text-sm">Home</Link>
            <span className="text-gray-600">•</span>
            <Link to="/services" className="text-[#D4AF37] hover:text-[#F4E5C3] text-sm">Our Services</Link>
            <span className="text-gray-600">•</span>
            <Link to="/fleet" className="text-[#D4AF37] hover:text-[#F4E5C3] text-sm">Luxury Fleet</Link>
            <span className="text-gray-600">•</span>
            <Link to="/coverage" className="text-[#D4AF37] hover:text-[#F4E5C3] text-sm">Coverage Areas</Link>
            <span className="text-gray-600">•</span>
            <Link to="/booking" className="text-[#D4AF37] hover:text-[#F4E5C3] text-sm">Book Now</Link>
            <span className="text-gray-600">•</span>
            <Link to="/blog" className="text-[#D4AF37] hover:text-[#F4E5C3] text-sm">Blog</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default FAQPage;
