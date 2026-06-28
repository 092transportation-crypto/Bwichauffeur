import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, BookOpen, Tag } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { blogPosts } from '../data/blogPosts';
import Breadcrumbs from '../components/Breadcrumbs';

const BlogPage = () => {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  // Get unique categories
  const categories = [...new Set(blogPosts.map(post => post.category))];

  // Featured post (first/latest)
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <>
      <Helmet>
        <title>Chauffeur Blog: Latest News, Tips & Service Updates</title>
        <meta name="description" content="Stay informed with the latest chauffeur service news, expert travel tips, and timely updates to ensure safe and luxurious transportation experiences always." />
        <link rel="canonical" href="https://bwichauffeur.com/blog/" />
      </Helmet>
    <div className="min-h-screen bg-black pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Blog' }]} />
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            BWI Chauffeur <span className="text-[#D4AF37]">Blog</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Expert insights, travel tips, and industry news about luxury transportation services in Maryland, Delaware, and Washington DC
          </p>
        </div>

        {/* Blog Introduction Content for SEO */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4 text-gray-300 leading-relaxed">
          <p>
            Welcome to the <strong className="text-[#D4AF37]">BWI Chauffeur Blog</strong>, your ultimate resource for luxury transportation insights, travel tips, and industry expertise. Whether you're planning <Link to="/services" className="text-[#D4AF37] hover:underline">airport transportation</Link> to BWI, DCA, or Dulles, seeking the perfect <Link to="/blog/wedding-transportation-maryland-luxury-limousine" className="text-[#D4AF37] hover:underline">wedding transportation</Link>, or need <Link to="/blog/corporate-transportation-solutions-maryland-businesses" className="text-[#D4AF37] hover:underline">corporate car service</Link> in Maryland, our articles provide valuable information to help you make informed decisions.
          </p>
          <p>
            Explore our comprehensive guides covering everything from <Link to="/fleet" className="text-[#D4AF37] hover:underline">luxury vehicle options</Link> and <Link to="/coverage" className="text-[#D4AF37] hover:underline">service coverage areas</Link> to insider tips for navigating <Link to="/blog/bwi-airport-transportation-guide-terminals-pickup" className="text-[#D4AF37] hover:underline">BWI Airport</Link>. Our team of transportation experts shares their knowledge to ensure your journey exceeds expectations every time.
          </p>
        </div>

        {/* Featured Article - Internal */}
        <div className="max-w-4xl mx-auto mb-12">
          <Link 
            to="/blog/bwi-airport-transportation-guide-terminals-pickup"
            className="block bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/40 rounded-xl p-6 hover:border-[#D4AF37] transition-all duration-300 group"
          >
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="h-5 w-5 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wide">Featured Article</span>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-2">
              BWI Airport Transportation Guide: Terminals, Pickup & Drop-off
            </h3>
            <p className="text-gray-400 mb-3">
              Your complete guide to navigating BWI Airport with professional chauffeur service. Learn about terminal pickup locations, flight tracking, and stress-free airport transfers.
            </p>
            <span className="inline-flex items-center text-[#D4AF37] font-medium group-hover:gap-2 transition-all">
              Read Article <ArrowRight className="h-4 w-4 ml-1" />
            </span>
          </Link>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Badge className="bg-[#D4AF37] text-black border-none px-4 py-2 cursor-pointer hover:bg-[#F4E5C3] transition-colors">
            <Tag className="h-4 w-4 mr-2" />
            All Articles
          </Badge>
          {categories.map((category) => (
            <Badge 
              key={category} 
              className="bg-gray-800 text-gray-300 border-[#D4AF37]/30 px-4 py-2 cursor-pointer hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <BookOpen className="h-6 w-6 mr-3 text-[#D4AF37]" />
            Featured Article
          </h2>
          <Card
            className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/40 hover:border-[#D4AF37]/80 overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/30 cursor-pointer"
            onClick={() => navigate(`/blog/${featuredPost.slug}`)}
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent md:bg-gradient-to-r" />
                <Badge className="absolute top-4 left-4 bg-[#D4AF37] text-black border-none font-semibold">
                  {featuredPost.category}
                </Badge>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(featuredPost.date)}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {featuredPost.author}
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <Button
                  variant="ghost"
                  className="text-[#D4AF37] hover:text-[#F4E5C3] p-0 h-auto font-semibold w-fit group/btn"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* All Posts Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/20 hover:border-[#D4AF37]/60 overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/20 cursor-pointer"
                onClick={() => navigate(`/blog/${post.slug}`)}
              >
                {/* Featured Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-[#D4AF37] text-black border-none font-semibold">
                    {post.category}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(post.date)}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-4 line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <Button
                    variant="ghost"
                    className="text-[#D4AF37] hover:text-[#F4E5C3] p-0 h-auto font-semibold group/btn"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Popular Topics Section */}
        <div className="mb-16 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Popular Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/blog/bwi-airport-transportation-guide-terminals-pickup" className="bg-gray-800/50 hover:bg-[#D4AF37]/20 border border-gray-700 hover:border-[#D4AF37]/50 rounded-lg p-4 text-center transition-all">
              <div className="text-[#D4AF37] font-semibold mb-1">BWI Airport Guide</div>
              <div className="text-gray-400 text-sm">Terminals & Tips</div>
            </Link>
            <Link to="/blog/corporate-transportation-solutions-maryland-businesses" className="bg-gray-800/50 hover:bg-[#D4AF37]/20 border border-gray-700 hover:border-[#D4AF37]/50 rounded-lg p-4 text-center transition-all">
              <div className="text-[#D4AF37] font-semibold mb-1">Corporate Travel</div>
              <div className="text-gray-400 text-sm">Business Solutions</div>
            </Link>
            <Link to="/blog/wedding-transportation-maryland-luxury-limousine" className="bg-gray-800/50 hover:bg-[#D4AF37]/20 border border-gray-700 hover:border-[#D4AF37]/50 rounded-lg p-4 text-center transition-all">
              <div className="text-[#D4AF37] font-semibold mb-1">Wedding Transport</div>
              <div className="text-gray-400 text-sm">Special Events</div>
            </Link>
            <Link to="/blog/luxury-fleet-mercedes-bmw-cadillac" className="bg-gray-800/50 hover:bg-[#D4AF37]/20 border border-gray-700 hover:border-[#D4AF37]/50 rounded-lg p-4 text-center transition-all">
              <div className="text-[#D4AF37] font-semibold mb-1">Luxury Fleet</div>
              <div className="text-gray-400 text-sm">Vehicle Options</div>
            </Link>
          </div>
        </div>

        {/* Internal Links Section for SEO */}
        <div className="mb-16 border-t border-gray-800 pt-12">
          <h2 className="text-xl font-bold text-white mb-6">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-[#D4AF37] font-semibold mb-3">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/services" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">All Services</Link></li>
                <li><Link to="/blog/comprehensive-transportation-services-maryland-delaware" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">Airport Transfers</Link></li>
                <li><Link to="/blog/corporate-transportation-solutions-maryland-businesses" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">Corporate Travel</Link></li>
                <li><Link to="/blog/wedding-transportation-maryland-luxury-limousine" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">Wedding Limo</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#D4AF37] font-semibold mb-3">Fleet</h3>
              <ul className="space-y-2">
                <li><Link to="/fleet" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">View All Vehicles</Link></li>
                <li><Link to="/blog/luxury-fleet-mercedes-bmw-cadillac" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">Mercedes & BMW</Link></li>
                <li><Link to="/fleet" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">SUVs & Sprinters</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#D4AF37] font-semibold mb-3">Coverage</h3>
              <ul className="space-y-2">
                <li><Link to="/coverage" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">Service Areas</Link></li>
                <li><Link to="/blog/service-coverage-maryland-counties-delaware-dc" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">Maryland Counties</Link></li>
                <li><Link to="/blog/bwi-airport-transportation-guide-terminals-pickup" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">BWI Airport</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#D4AF37] font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">About BWI Chauffeur</Link></li>
                <li><Link to="/blog/professional-chauffeurs-training-safety-standards" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">Our Chauffeurs</Link></li>
                <li><Link to="/blog/24-7-availability-flight-tracking-technology" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">Technology</Link></li>
                <li><Link to="/booking" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors">Book Now</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-[#D4AF37]/10 to-[#F4E5C3]/10 border border-[#D4AF37]/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Book Your Ride?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the luxury and professionalism that sets BWI Chauffeur apart. Available 24/7 throughout Maryland, Delaware, and Washington DC for airport transfers, corporate travel, weddings, and special events.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => navigate('/booking')}
              size="lg"
              className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50"
            >
              Book Now
            </Button>
            <Button
              onClick={() => window.location.href = 'tel:+18776790100'}
              size="lg"
              variant="outline"
              className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
            >
              Call 877-679-0100
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default BlogPage;
