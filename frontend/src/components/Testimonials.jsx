import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Michael Richardson',
      title: 'CEO, Tech Innovations Inc.',
      location: 'Baltimore, MD',
      rating: 5,
      text: 'BWI Chauffeur has transformed our executive travel experience. The professionalism, punctuality, and luxury vehicles are unmatched. Our clients are always impressed when we arrange their airport transfers through BWI Chauffeur.',
      service: 'Corporate Transportation'
    },
    {
      id: 2,
      name: 'Sarah & David Mitchell',
      title: 'Newlyweds',
      location: 'Annapolis, MD',
      rating: 5,
      text: 'Our wedding day was perfect thanks to BWI Chauffeur! The Mercedes S-Class was stunning, and our chauffeur James was incredibly professional. He even had champagne waiting for us. Highly recommend for any special occasion!',
      service: 'Wedding Transportation'
    },
    {
      id: 3,
      name: 'Jennifer Park',
      title: 'Frequent Business Traveler',
      location: 'Washington, DC',
      rating: 5,
      text: 'As someone who flies out of BWI weekly, I can\'t imagine using any other service. The flight tracking feature means my driver is always there when I land, even when my flights are delayed. The BMW 7 Series is my favorite - perfect for catching up on emails.',
      service: 'Airport Transportation'
    },
    {
      id: 4,
      name: 'Robert Thompson',
      title: 'Managing Partner, Thompson Law Group',
      location: 'Bethesda, MD',
      rating: 5,
      text: 'We\'ve been using BWI Chauffeur for our firm for over 3 years. The corporate account management is seamless, billing is always accurate, and the drivers are discreet and professional. Essential for our client-facing business.',
      service: 'Corporate Account'
    },
    {
      id: 5,
      name: 'The Johnson Family',
      title: 'Family of 6',
      location: 'Columbia, MD',
      rating: 5,
      text: 'Taking our family of 6 to the airport used to be a nightmare. The Suburban from BWI Chauffeur fits all of us plus luggage comfortably. The kids love the WiFi and the smooth ride. Makes our vacation start stress-free!',
      service: 'Group Transportation'
    },
    {
      id: 6,
      name: 'Dr. Amanda Chen',
      title: 'Medical Director',
      location: 'Wilmington, DE',
      rating: 5,
      text: 'BWI Chauffeur provides reliable service for my commute between Delaware and Baltimore for conferences at Johns Hopkins. Professional, on-time, and the vehicles are immaculate. Worth every penny for the peace of mind.',
      service: 'Long Distance Service'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-[#D4AF37]">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the thousands of satisfied clients who trust BWI Chauffeur for their luxury transportation needs
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center mt-8 space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-[#D4AF37] fill-current" />
              ))}
            </div>
            <span className="text-white font-bold text-xl ml-2">5.0</span>
            <span className="text-gray-400">| Based on 250+ reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/10"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-[#D4AF37]/40" />
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-[#D4AF37] fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Service Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-semibold rounded-full border border-[#D4AF37]/30">
                    {testimonial.service}
                  </span>
                </div>

                {/* Author Info */}
                <div className="border-t border-gray-700 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.title}</div>
                  <div className="text-sm text-[#D4AF37]">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-[#D4AF37] mb-2">25,000+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#D4AF37] mb-2">99%</div>
            <div className="text-gray-400">On-Time Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#D4AF37] mb-2">5.0</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#D4AF37] mb-2">10+</div>
            <div className="text-gray-400">Years of Service</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">
            Join thousands of satisfied clients who trust BWI Chauffeur for their luxury transportation needs.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all duration-300"
          >
            Book Your First Ride
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
