import React, { useState } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How much does BWI airport car service cost?',
      answer:
        'Rates are flat and quoted by vehicle class and distance — the price includes fuel, tolls, flight tracking, and the chauffeur, with no surge pricing and no overnight fees. Request a quote online or call 877-609-1919 for an exact all-inclusive rate for your address.'
    },
    {
      question: 'How far in advance should I book?',
      answer:
        'Book by the night before at the latest — earlier for pre-dawn departures, holidays, and event weekends when vehicles sell out. We accommodate same-day and last-minute requests whenever a vehicle is available, and our phone line answers 24/7.'
    },
    {
      question: 'Do you track flights?',
      answer:
        'Yes. Every airport pickup includes real-time flight tracking with complimentary wait time built in. If your flight lands early or hours late, your chauffeur adjusts automatically — you never need to call from the tarmac.'
    },
    {
      question: 'What vehicles do you offer?',
      answer:
        'Late-model Mercedes-Benz E-Class and S-Class sedans, BMW 7 Series, Lincoln Navigator and Chevrolet Suburban SUVs, and 14-passenger Mercedes Sprinter vans for groups. Every vehicle is detailed before your trip and driven by a professional, background-checked chauffeur.'
    },
    {
      question: 'Do you serve DCA and IAD airports too?',
      answer:
        'Yes. In addition to BWI Marshall, we run flat-rate, flight-tracked transfers to and from Reagan National (DCA), Washington Dulles (IAD), and Philadelphia International (PHL) from anywhere in Maryland, DC, Virginia, and Delaware.'
    },
    {
      question: 'Do you offer corporate accounts for frequent business travel?',
      answer:
        'Yes. Standing corporate accounts get a single point of contact, consolidated monthly invoicing, and priority dispatch for recurring routes like a weekly executive commute or a standing conference shuttle. Call 877-609-1919 to set one up.'
    },
    {
      question: 'Can I book an hourly, as-directed chauffeur instead of a one-way trip?',
      answer:
        'Yes. Hourly as-directed service keeps the same chauffeur and vehicle with you for a multi-stop day — roadshows, wedding timelines, campus tours, or a night out with several destinations — billed hourly with a set minimum.'
    },
    {
      question: 'Do you serve Northern Virginia locations like Tysons Corner and Reston?',
      answer:
        'Yes. Beyond Maryland, Washington DC and Delaware, we regularly serve Northern Virginia business hubs including Tysons Corner and Reston, both of which sit close to Dulles and Reagan National airports.'
    },
    {
      question: 'Which Maryland cities do you serve most often?',
      answer:
        'Baltimore, Annapolis, Columbia, Bethesda, Rockville and Silver Spring are our highest-volume cities, but our chauffeurs cover all 23 Maryland counties plus Baltimore City. See our service areas page for your specific town.'
    },
    {
      question: 'What is your cancellation policy?',
      answer:
        'Sedan and SUV reservations cancel free of charge up to 3 hours before pickup. Sprinter vans, limousines and special-event bookings cancel free of charge up to 12 hours before pickup.'
    }
  ];

  return (
    <section id="home-faq" className="py-24 bg-black" data-testid="home-faq-section">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          })}
        </script>
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] rounded-full flex items-center justify-center mx-auto mb-5">
            <HelpCircle className="h-7 w-7 text-black" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-[#D4AF37]">Questions</span>
          </h2>
          <p className="text-lg text-gray-400">
            Quick answers to what our riders ask the most
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                data-testid={`home-faq-item-${index}`}
                className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#D4AF37]/5 transition-colors"
                  data-testid={`home-faq-toggle-${index}`}
                >
                  <span className="text-white font-semibold text-base md:text-lg pr-4">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <div className={isOpen ? 'px-6 pb-6 -mt-1' : 'hidden'}>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/faq"
            className="inline-flex items-center px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-semibold rounded-md transition-all"
            data-testid="home-faq-view-all"
          >
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
