import React from 'react';
import { Shield, Award, Clock, Users, CheckCircle, Star, TrendingUp, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Fully Licensed & Insured',
      description: 'DOT certified, commercially licensed, and comprehensively insured for complete peace of mind and passenger safety.'
    },
    {
      icon: Clock,
      title: '99% On-Time Guarantee',
      description: 'Real-time flight tracking and route optimization ensure punctual service every single time you ride with us.'
    },
    {
      icon: Users,
      title: 'Professional Chauffeurs',
      description: 'Background-checked, professionally trained drivers with an average of 10+ years of experience in luxury service.'
    },
    {
      icon: Award,
      title: '24/7 Concierge Service',
      description: 'Round-the-clock customer support and booking assistance. We are always here when you need us most.'
    },
    {
      icon: Star,
      title: 'Premium Fleet',
      description: 'Latest model Mercedes, BMW, Cadillac, and Lincoln vehicles, meticulously maintained to the highest standards.'
    },
    {
      icon: TrendingUp,
      title: 'Competitive Pricing',
      description: 'Transparent pricing with no hidden fees. Best rates guaranteed for luxury transportation in the region.'
    },
    {
      icon: CheckCircle,
      title: 'Easy Online Booking',
      description: 'Instant confirmation with our simple booking system. Reserve your ride in minutes from any device.'
    },
    {
      icon: Heart,
      title: 'Customer Satisfaction',
      description: 'Over 25,000 satisfied clients and 5-star reviews. Your satisfaction is our top priority and commitment.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-[#D4AF37]">BWI Chauffeur</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Setting the gold standard for professional transportation services in Maryland
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/20 backdrop-blur-sm group hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  {/* Icon */}
                  <div className="inline-flex w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] rounded-full items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-black" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-[#D4AF37]/10 via-[#F4E5C3]/10 to-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">10+</div>
              <div className="text-gray-300 font-medium">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">25K+</div>
              <div className="text-gray-300 font-medium">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">99%</div>
              <div className="text-gray-300 font-medium">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">5.0</div>
              <div className="text-gray-300 font-medium">Star Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;