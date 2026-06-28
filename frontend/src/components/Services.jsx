import React from 'react';
import { Plane, Briefcase, Heart, Users, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: 'Luxury Airport Transportation',
      description: 'Premium airport car service with real-time flight tracking, meet-and-greet service, and luggage assistance. Experience stress-free airport transfer service to BWI, DCA, and Dulles.',
      features: ['Flight Tracking', 'Meet & Greet', 'Luggage Help', '24/7 Available'],
      cta: 'Reserve an Airport Transfer'
    },
    {
      icon: Briefcase,
      title: 'Executive Car Service',
      description: 'Premium black car service for business professionals. Impress clients with punctual, professional corporate transportation and luxury vehicles equipped with Wi-Fi.',
      features: ['Executive Fleet', 'Wi-Fi Equipped', 'Flexible Billing', 'Account Management'],
      cta: 'Book Executive Travel'
    },
    {
      icon: Heart,
      title: 'Wedding Transportation Service',
      description: 'Make your special day unforgettable with elegant wedding transportation service. Red carpet treatment, champagne service, and professional chauffeurs for your celebration.',
      features: ['Red Carpet', 'Champagne Service', 'Custom Packages', 'Professional Photos'],
      cta: 'Plan Wedding Transportation'
    },
    {
      icon: Users,
      title: 'Group Transportation Service',
      description: 'Spacious Mercedes Sprinter vans for group transportation service. Perfect for corporate events, tours, or family gatherings with comfortable seating for up to 14 passengers.',
      features: ['Up to 14 Passengers', 'Extra Luggage Space', 'Premium Comfort', 'Group Rates'],
      cta: 'Quote a Sprinter Van'
    },
    {
      icon: MapPin,
      title: 'City Tours',
      description: 'Discover Baltimore, Annapolis, and Washington DC in style. Custom tour packages with knowledgeable chauffeurs who know the best spots.',
      features: ['Custom Routes', 'Local Expertise', 'Flexible Duration', 'Photo Stops'],
      cta: 'Build a Custom City Tour'
    },
    {
      icon: Clock,
      title: 'Hourly Service',
      description: 'Book our executive car service by the hour for multiple stops, shopping trips, or extended business meetings. Maximum flexibility with luxury airport transportation standards.',
      features: ['Flexible Hours', 'Multiple Stops', 'Wait Time Included', 'No Rush'],
      cta: 'Schedule Hourly Chauffeur'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#D4AF37]">Premium Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive luxury transportation solutions tailored to your specific needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/20 hover:-translate-y-2 backdrop-blur-sm group"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-black" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Link */}
                  <Link
                    to="/booking"
                    className="block w-full text-center px-4 py-2 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black rounded-md transition-all duration-300"
                  >
                    {service.cta}
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;