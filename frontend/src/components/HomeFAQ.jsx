import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How much does BWI airport transportation cost?',
      answer:
        'Rates depend on vehicle type and distance. Fill out our quote form for an accurate price.'
    },
    {
      question: 'Do you provide flight tracking for airport pickups?',
      answer:
        'Yes. We monitor your flight in real-time and adjust the pickup time automatically if your flight is early or delayed — at no extra charge.'
    },
    {
      question: 'Which areas do you serve?',
      answer:
        'We serve all of Maryland, Washington DC, Northern Virginia, and Delaware, with our primary hub at BWI Airport.'
    }
  ];

  return (
    <section id="home-faq" className="py-24 bg-black" data-testid="home-faq-section">
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
                {isOpen && (
                  <div className="px-6 pb-6 -mt-1">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
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
