import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';

/**
 * FAQ block + FAQPage JSON-LD for pages that don't build their own.
 * `faqs` is [{ q, a }]. Render at most one per page (one FAQPage per URL).
 */
const FaqSection = ({ faqs, heading = 'Frequently asked', accent = 'questions' }) => {
  if (!faqs || !faqs.length) return null;
  return (
    <section className="py-16 bg-black" data-testid="page-faq">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          })}
        </script>
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
          {heading} <span className="text-[#D4AF37]">{accent}</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="bg-gray-900/60 border border-[#D4AF37]/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">{f.q}</h3>
              <p className="text-gray-400">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
