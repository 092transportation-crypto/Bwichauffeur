import React from 'react';
import { keywordSection } from '../lib/keywordSection';

// Keyword-rich H2 + two paragraphs (see lib/keywordSection.js). `wrap` picks
// the container that matches the surrounding page layout.
const KeywordSection = ({ slug, place, kind, wrap = 'section' }) => {
  const kw = keywordSection(slug, place, kind);
  const inner = (
    <>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{kw.h2}</h2>
      {kw.text.map((t) => (
        <p key={t.slice(0, 40)} className="text-gray-400 leading-relaxed mb-4">{t}</p>
      ))}
    </>
  );
  if (wrap === 'contained') {
    return (
      <section className="py-12" data-testid="keyword-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">{inner}</div>
      </section>
    );
  }
  return <section className="mb-12" data-testid="keyword-section">{inner}</section>;
};

export default KeywordSection;
