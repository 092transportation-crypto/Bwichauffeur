import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Award, Users, Clock, Shield, Star, CheckCircle, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import Breadcrumbs from '../components/Breadcrumbs';

const AboutPage = () => {
  const navigate = useNavigate();

  const milestones = [
    { year: '2014', title: 'Company Founded', description: 'BWI Chauffeur was established to provide premium transportation services in the Baltimore-Washington area.' },
    { year: '2016', title: 'Fleet Expansion', description: 'Added luxury SUVs and Mercedes Sprinter vans to serve corporate groups and special events.' },
    { year: '2018', title: 'Corporate Program Launch', description: 'Introduced dedicated corporate accounts with customized billing and account management.' },
    { year: '2020', title: 'Technology Upgrade', description: 'Implemented real-time flight tracking and advanced dispatch systems for seamless service.' },
    { year: '2022', title: 'Service Area Expansion', description: 'Extended coverage to all Maryland counties, Delaware, and Northern Virginia.' },
    { year: '2024', title: '10th Anniversary', description: 'Celebrated a decade of excellence with over 25,000 satisfied clients served.' },
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every journey, from the condition of our vehicles to the professionalism of our chauffeurs.'
    },
    {
      icon: Shield,
      title: 'Safety',
      description: 'Your safety is our top priority. All vehicles are inspected daily, and chauffeurs undergo rigorous background checks.'
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'With a 99%+ on-time rate, you can count on us to be there when you need us, every single time.'
    },
    {
      icon: Users,
      title: 'Service',
      description: 'Our dedicated team provides personalized service, treating every client with respect and attention to detail.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Our Professional Chauffeur Services | BWI Chauffeur</title>
        <meta name="description" content="Learn about BWI Chauffeur's professional services, highly trained drivers, and luxury vehicle fleet for premium, stress-free transportation experiences." />
        <link rel="canonical" href="https://bwichauffeur.com/about/" />
      </Helmet>
      <div className="min-h-screen bg-black pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
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
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-[#D4AF37]">BWI Chauffeur</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Maryland's premier luxury transportation company, delivering excellence since 2014
            </p>
          </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Our Story</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-[#D4AF37]">BWI Chauffeur</strong> was founded in 2014 with a simple mission: to provide the highest quality luxury transportation service in the Baltimore-Washington metropolitan area. What started as a small operation with just two vehicles has grown into the region's most trusted chauffeur service, serving thousands of clients annually.
              </p>
              <p>
                Our founder recognized a gap in the market for truly professional, reliable transportation that business executives and discerning travelers could depend on. Unlike ride-sharing apps that offer inconsistent quality, BWI Chauffeur was built on the principle that every ride should be an exceptional experience.
              </p>
              <p>
                Today, we operate a diverse <Link to="/fleet" className="text-[#D4AF37] hover:underline">fleet of luxury vehicles</Link> including the latest Mercedes-Benz, BMW, and Cadillac models. Our team of professional chauffeurs has collectively completed over 100,000 trips, maintaining a 99%+ on-time rate and a 5-star customer satisfaction rating.
              </p>
              <p>
                We proudly serve all of <Link to="/coverage" className="text-[#D4AF37] hover:underline">Maryland, Delaware, Washington DC, and Northern Virginia</Link>, specializing in <Link to="/services" className="text-[#D4AF37] hover:underline">airport transportation</Link>, corporate car service, wedding transportation, and special events. Our commitment to excellence has made us the preferred transportation partner for Fortune 500 companies, law firms, and individuals who expect nothing but the best.
              </p>
            </div>
          </div>

          {/* Right Column - Stats & Image */}
          <div className="space-y-8">
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <img
                src="/fleet/mercedes-e-class.jpg"
                alt="BWI Chauffeur Mercedes-Benz E-Class — Executive Private Car Service in Baltimore-Washington DC Area"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-[#D4AF37]/20 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">25,000+</div>
                <div className="text-gray-400 text-sm">Satisfied Clients</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-[#D4AF37]/20 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">99%</div>
                <div className="text-gray-400 text-sm">On-Time Rate</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-[#D4AF37]/20 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">10+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-[#D4AF37]/20 rounded-xl p-6 text-center">
                <div className="flex justify-center items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-[#D4AF37] fill-current" />
                  ))}
                </div>
                <div className="text-gray-400 text-sm">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#D4AF37]/30 hidden md:block" />
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-[#D4AF37]/20 rounded-xl p-6">
                      <div className="text-[#D4AF37] font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-white font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-400 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-[#D4AF37] rounded-full border-4 border-black" />
                  </div>
                  <div className="hidden md:block w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20 bg-gradient-to-r from-[#D4AF37]/10 to-[#F4E5C3]/10 border border-[#D4AF37]/30 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose BWI Chauffeur?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Professional, background-checked chauffeurs with extensive experience',
              'Late-model luxury vehicles maintained to the highest standards',
              'Real-time flight tracking for stress-free airport pickups',
              '24/7 availability with no surge pricing ever',
              'Transparent pricing with no hidden fees',
              'Dedicated account management for corporate clients',
              'Complimentary Wi-Fi, bottled water, and phone chargers',
              'Comprehensive insurance coverage for peace of mind'
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience the Difference?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust BWI Chauffeur for their luxury transportation needs. Book your first ride today and discover why we're Maryland's premier chauffeur service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => navigate('/booking')}
              size="lg"
              className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold hover:shadow-lg hover:shadow-[#D4AF37]/50"
            >
              Book Your Ride
            </Button>
            <a
              href="tel:+18776790100"
              className="inline-flex items-center px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-md hover:bg-[#D4AF37] hover:text-black transition-all"
            >
              <Phone className="mr-2 h-5 w-5" />
              877-679-0100
            </a>
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
            <Link to="/faq" className="text-[#D4AF37] hover:text-[#F4E5C3] text-sm">FAQ</Link>
            <span className="text-gray-600">•</span>
            <Link to="/blog" className="text-[#D4AF37] hover:text-[#F4E5C3] text-sm">Blog</Link>
            <span className="text-gray-600">•</span>
            <Link to="/booking" className="text-[#D4AF37] hover:text-[#F4E5C3] text-sm">Book Now</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutPage;
