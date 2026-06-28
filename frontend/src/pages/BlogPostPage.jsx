import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, ArrowRight, Phone, BookOpen } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { blogPosts } from '../data/blogPosts';
import Breadcrumbs from '../components/Breadcrumbs';

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.slug === slug);
  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  // Always show up to 3 related posts. Use the post's curated relatedPosts,
  // then backfill with other posts (newest first) to guarantee at least 3.
  const relatedPosts = (() => {
    const seen = new Set([post?.id]);
    const out = [];
    (post?.relatedPosts || []).forEach((id) => {
      const p = blogPosts.find((x) => x.id === id);
      if (p && !seen.has(p.id)) {
        out.push(p);
        seen.add(p.id);
      }
    });
    for (const p of blogPosts) {
      if (out.length >= 3) break;
      if (!seen.has(p.id)) {
        out.push(p);
        seen.add(p.id);
      }
    }
    return out.slice(0, 3);
  })();

  if (!post) {
    return (
      <div className="min-h-screen bg-black pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Button onClick={() => navigate('/blog')} className="bg-[#D4AF37] text-black">
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  // Function to render content with proper formatting
  const renderContent = (content) => {
    // Split by lines and process
    const lines = content.trim().split('\n');
    const elements = [];
    let currentList = [];
    let listType = null;
    let tableRows = [];
    let inTable = false;

    const flushList = () => {
      if (currentList.length > 0) {
        if (listType === 'ul') {
          elements.push(
            <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 text-gray-300 my-4 ml-4">
              {currentList.map((item, i) => <li key={i}>{processInlineElements(item)}</li>)}
            </ul>
          );
        } else if (listType === 'ol') {
          elements.push(
            <ol key={`list-${elements.length}`} className="list-decimal list-inside space-y-2 text-gray-300 my-4 ml-4">
              {currentList.map((item, i) => <li key={i}>{processInlineElements(item)}</li>)}
            </ol>
          );
        } else if (listType === 'check') {
          elements.push(
            <ul key={`list-${elements.length}`} className="space-y-2 text-gray-300 my-4">
              {currentList.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  {processInlineElements(item)}
                </li>
              ))}
            </ul>
          );
        }
        currentList = [];
        listType = null;
      }
    };

    const flushTable = () => {
      if (tableRows.length > 0) {
        const headers = tableRows[0];
        const dataRows = tableRows.slice(2); // Skip header separator
        elements.push(
          <div key={`table-${elements.length}`} className="overflow-x-auto my-6">
            <table className="min-w-full border border-gray-700 rounded-lg overflow-hidden">
              <thead className="bg-gray-800">
                <tr>
                  {headers.map((header, i) => (
                    <th key={i} className="px-4 py-3 text-left text-[#D4AF37] font-semibold border-b border-gray-700">
                      {header.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-900/50' : 'bg-gray-800/30'}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3 text-gray-300 border-b border-gray-800">
                        {processInlineElements(cell.trim())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
        inTable = false;
      }
    };

    // Process inline elements (bold, links, etc.)
    const processInlineElements = (text) => {
      if (!text) return text;
      
      const parts = [];
      let remaining = text;
      let keyIndex = 0;

      while (remaining.length > 0) {
        // Check for markdown links [text](url)
        const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
        // Check for bold **text**
        const boldMatch = remaining.match(/\*\*([^*]+)\*\*/);
        // Check for italic *text*
        const italicMatch = remaining.match(/(?<!\*)\*([^*]+)\*(?!\*)/);

        // Find the earliest match
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
          // Add text before the match
          if (earliestMatch.index > 0) {
            parts.push(remaining.substring(0, earliestMatch.index));
          }

          if (earliestMatch.type === 'link') {
            const [fullMatch, linkText, linkUrl] = earliestMatch.match;
            if (linkUrl.startsWith('/')) {
              // Internal link
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
              // External link
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

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Check for table row
      if (trimmedLine.startsWith('|') && trimmedLine.endsWith('|')) {
        flushList();
        inTable = true;
        const cells = trimmedLine.split('|').filter(cell => cell.trim() !== '' && !cell.match(/^[-:]+$/));
        if (cells.length > 0 && !trimmedLine.match(/^\|[-:|\s]+\|$/)) {
          tableRows.push(cells);
        }
        return;
      } else if (inTable) {
        flushTable();
      }

      // Headings
      if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={`h2-${index}`} className="text-3xl font-bold text-white mt-10 mb-6">
            {processInlineElements(trimmedLine.replace('## ', ''))}
          </h2>
        );
      } else if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={`h3-${index}`} className="text-2xl font-bold text-[#D4AF37] mt-8 mb-4">
            {processInlineElements(trimmedLine.replace('### ', ''))}
          </h3>
        );
      }
      // Unordered list
      else if (trimmedLine.startsWith('- ')) {
        if (listType !== 'ul') {
          flushList();
          listType = 'ul';
        }
        currentList.push(trimmedLine.replace('- ', ''));
      }
      // Checkmark list
      else if (trimmedLine.startsWith('✓ ')) {
        if (listType !== 'check') {
          flushList();
          listType = 'check';
        }
        currentList.push(trimmedLine.replace('✓ ', ''));
      }
      // Ordered list
      else if (/^\d+\.\s/.test(trimmedLine)) {
        if (listType !== 'ol') {
          flushList();
          listType = 'ol';
        }
        currentList.push(trimmedLine.replace(/^\d+\.\s/, ''));
      }
      // Regular paragraph
      else if (trimmedLine.length > 0) {
        flushList();
        elements.push(
          <p key={`p-${index}`} className="text-gray-300 leading-relaxed my-4">
            {processInlineElements(trimmedLine)}
          </p>
        );
      }
    });

    flushList();
    flushTable();

    return elements;
  };

  return (
    <>
      <Helmet>
        <title>{post.seoTitle || post.title}</title>
        <meta name="description" content={post.seoDescription || post.excerpt} />
        <link rel="canonical" href={`https://bwichauffeur.com/blog/${slug}/`} />
        {post.faqs && post.faqs.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: post.faqs.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: { '@type': 'Answer', text: f.answer },
              })),
            })}
          </script>
        )}
      </Helmet>
    <div className="min-h-screen bg-black pt-32 pb-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Blog', to: '/blog' },
            { label: post.title },
          ]}
        />
        {/* Back Button */}
        <Button
          onClick={() => navigate('/blog')}
          variant="outline"
          className="mb-8 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Button>

        {/* Featured Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <Badge className="absolute top-6 left-6 bg-[#D4AF37] text-black border-none font-semibold text-base">
            {post.category}
          </Badge>
        </div>

        {/* Post Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center space-x-6 text-gray-400">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-[#D4AF37]" />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2 text-[#D4AF37]" />
              {post.author}
            </div>
          </div>
        </header>

        {/* Post Content */}
        <div className="prose prose-invert prose-lg max-w-none mb-12">
          {renderContent(post.content)}
        </div>

        {/* You might also like */}
        {relatedPosts.length > 0 && (
          <div className="border-t border-gray-800 pt-12 mt-12" data-testid="related-articles">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <BookOpen className="h-6 w-6 mr-3 text-[#D4AF37]" />
              You might also like
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card
                  key={relatedPost.id}
                  className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/20 hover:border-[#D4AF37]/60 overflow-hidden group transition-all duration-300 cursor-pointer"
                  onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  <CardContent className="p-4">
                    <Badge className="bg-[#D4AF37]/20 text-[#D4AF37] border-none text-xs mb-2">
                      {relatedPost.category}
                    </Badge>
                    <h4 className="text-white font-semibold line-clamp-2 group-hover:text-[#D4AF37] transition-colors">
                      {relatedPost.title}
                    </h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Navigation to Next/Previous Posts */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevPost && (
              <Button
                onClick={() => navigate(`/blog/${prevPost.slug}`)}
                variant="outline"
                className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black h-auto py-4 justify-start"
              >
                <div className="flex items-start">
                  <ArrowLeft className="mr-3 h-5 w-5 flex-shrink-0 mt-1" />
                  <div className="text-left">
                    <div className="text-xs text-gray-400 mb-1">Previous Post</div>
                    <div className="font-semibold line-clamp-2">{prevPost.title}</div>
                  </div>
                </div>
              </Button>
            )}
            
            {nextPost && (
              <Button
                onClick={() => navigate(`/blog/${nextPost.slug}`)}
                variant="outline"
                className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black h-auto py-4 justify-end md:col-start-2"
              >
                <div className="flex items-start">
                  <div className="text-right">
                    <div className="text-xs text-gray-400 mb-1">Next Post</div>
                    <div className="font-semibold line-clamp-2">{nextPost.title}</div>
                  </div>
                  <ArrowRight className="ml-3 h-5 w-5 flex-shrink-0 mt-1" />
                </div>
              </Button>
            )}
          </div>
        </div>

        {/* FAQ Section (when post has FAQs) */}
        {post.faqs && post.faqs.length > 0 && (
          <section
            className="mt-12 bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/30 rounded-2xl p-6 md:p-8"
            data-testid="post-faq-section"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Frequently Asked <span className="text-[#D4AF37]">Questions</span>
            </h3>
            <div className="space-y-5">
              {post.faqs.map((faq, i) => (
                <div key={i} className="border-l-2 border-[#D4AF37]/60 pl-4">
                  <h4 className="text-white font-semibold text-base md:text-lg mb-2">
                    {faq.question}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-[#D4AF37]/10 to-[#F4E5C3]/10 border border-[#D4AF37]/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Book Your Luxury Ride?</h3>
          <p className="text-gray-300 mb-6">
            Experience premium chauffeur service throughout Maryland, Delaware, and Washington DC. Available 24/7 for airport transfers, corporate travel, and special events.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => navigate('/booking')}
              className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold"
              data-testid="post-get-quote-cta"
            >
              Get a Free Quote
            </Button>
            <Button
              onClick={() => window.location.href = 'tel:+18776790100'}
              variant="outline"
              className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
            >
              <Phone className="mr-2 h-4 w-4" />
              877-679-0100
            </Button>
          </div>
        </div>

        {/* Internal Links Footer */}
        <div className="mt-12 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
          <h4 className="text-lg font-semibold text-white mb-4">Explore More</h4>
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
            <Link to="/blog" className="text-[#D4AF37] hover:text-[#F4E5C3] text-sm">All Articles</Link>
          </div>
        </div>
      </article>
    </div>
    </>
  );
};

export default BlogPostPage;
