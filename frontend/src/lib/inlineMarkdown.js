import React from 'react';
import { Link } from 'react-router-dom';

// Renders a small subset of inline markdown — [text](url) links, **bold**
// and *italic* — used in landing-page copy (marylandPages*.js) so an author
// can drop an internal link straight into a sentence instead of every page
// needing its own JSX. Mirrors the parser in BlogPostPage.jsx's
// processInlineElements so both content systems behave the same way.
//
// Returns the original string unchanged when it contains no markdown, so
// callers can use it unconditionally without extra wrapper elements.
export const renderInlineText = (text) => {
  if (!text) return text;

  const parts = [];
  let remaining = text;
  let keyIndex = 0;

  while (remaining.length > 0) {
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
    const boldMatch = remaining.match(/\*\*([^*]+)\*\*/);
    const italicMatch = remaining.match(/(?<!\*)\*([^*]+)\*(?!\*)/);

    let earliestMatch = null;
    let earliestIndex = remaining.length;

    if (linkMatch && remaining.indexOf(linkMatch[0]) < earliestIndex) {
      earliestMatch = { type: 'link', match: linkMatch, index: remaining.indexOf(linkMatch[0]) };
      earliestIndex = earliestMatch.index;
    }
    if (boldMatch && remaining.indexOf(boldMatch[0]) < earliestIndex) {
      earliestMatch = { type: 'bold', match: boldMatch, index: remaining.indexOf(boldMatch[0]) };
      earliestIndex = earliestMatch.index;
    }
    if (italicMatch && remaining.indexOf(italicMatch[0]) < earliestIndex) {
      earliestMatch = { type: 'italic', match: italicMatch, index: remaining.indexOf(italicMatch[0]) };
      earliestIndex = earliestMatch.index;
    }

    if (earliestMatch) {
      if (earliestMatch.index > 0) {
        parts.push(remaining.substring(0, earliestMatch.index));
      }

      if (earliestMatch.type === 'link') {
        const [fullMatch, linkText, linkUrl] = earliestMatch.match;
        if (linkUrl.startsWith('/')) {
          parts.push(
            <Link
              key={`link-${keyIndex++}`}
              to={linkUrl}
              className="text-[#D4AF37] hover:text-[#F4E5C3] underline transition-colors"
            >
              {linkText}
            </Link>
          );
        } else {
          parts.push(
            <a
              key={`link-${keyIndex++}`}
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:text-[#F4E5C3] underline transition-colors"
            >
              {linkText}
            </a>
          );
        }
        remaining = remaining.substring(earliestMatch.index + fullMatch.length);
      } else if (earliestMatch.type === 'bold') {
        const [fullMatch, boldText] = earliestMatch.match;
        parts.push(<strong key={`bold-${keyIndex++}`} className="text-white font-semibold">{boldText}</strong>);
        remaining = remaining.substring(earliestMatch.index + fullMatch.length);
      } else if (earliestMatch.type === 'italic') {
        const [fullMatch, italicText] = earliestMatch.match;
        parts.push(<em key={`italic-${keyIndex++}`} className="italic">{italicText}</em>);
        remaining = remaining.substring(earliestMatch.index + fullMatch.length);
      }
    } else {
      parts.push(remaining);
      remaining = '';
    }
  }

  return parts.length === 1 && typeof parts[0] === 'string' ? parts[0] : parts;
};
