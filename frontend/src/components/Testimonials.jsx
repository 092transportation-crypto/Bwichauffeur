import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Michael Reyes',
      initials: 'MR',
      avatarColor: '#1A73E8',
      location: 'Local Guide · 14 reviews',
      rating: 5,
      date: 'June 2026',
      route: 'BWI → Washington, DC',
      text: 'Booked a 5 AM pickup for a flight out of a DC meeting the day before, so I needed the BWI to Washington DC run early. Driver was parked outside at 4:55, tracked my return flight, and the flat $85 was exactly what I was quoted — no surge like the rideshare apps were showing that morning. Spotless Mercedes E-Class. This is now my default for airport runs.'
    },
    {
      id: 2,
      name: 'Priya Nair',
      initials: 'PN',
      avatarColor: '#188038',
      location: 'Local Guide · 31 reviews',
      rating: 5,
      date: 'May 2026',
      route: 'Baltimore → Dulles (IAD)',
      text: 'Needed a cross-town transfer from downtown Baltimore to Dulles for an international flight and was nervous about timing. Our chauffeur built in buffer for the Beltway, kept us updated, and we got to IAD with plenty of time. Professional, immaculate Suburban, and the price never changed from the quote. Worth every dollar for the peace of mind.'
    },
    {
      id: 3,
      name: 'Marcus Bennett',
      initials: 'MB',
      avatarColor: '#E37400',
      location: '8 reviews',
      rating: 5,
      date: 'May 2026',
      route: 'BWI → Annapolis',
      text: 'Flew in for Commissioning Week at the Naval Academy with my whole family. The BWI to Annapolis transfer was $65 flat — way cheaper than the surge Uber was quoting during USNA weekend. Driver helped with all our luggage and knew exactly which gate to use. Made a hectic travel day genuinely easy.'
    },
    {
      id: 4,
      name: 'Lauren Whitfield',
      initials: 'LW',
      avatarColor: '#9334E6',
      location: 'Local Guide · 22 reviews',
      rating: 5,
      date: 'April 2026',
      route: 'BWI → Bethesda (late-night arrival)',
      text: 'My flight got delayed and I landed at BWI close to 1 AM dreading the ride home to Bethesda. My chauffeur had tracked the delay and was waiting at baggage claim with a sign. Clean car, safe driver, and the same flat rate even at that hour. As a woman traveling alone late at night, this is exactly the service I want.'
    },
    {
      id: 5,
      name: 'David Coleman',
      initials: 'DC',
      avatarColor: '#D93025',
      location: '5 reviews',
      rating: 5,
      date: 'March 2026',
      route: 'BWI → Baltimore Inner Harbor',
      text: 'Used them for a quick BWI to Baltimore downtown trip to the Inner Harbor for a conference — $55 flat, door to door in about 25 minutes. Driver was in a jacket and tie, offered water, and had the route dialed in. Have since set up a corporate account for our team. Reliable every single time.'
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
                {/* Header: avatar + name/date + Google glyph */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex items-center justify-center w-11 h-11 rounded-full text-white font-bold text-base flex-shrink-0"
                      style={{ backgroundColor: testimonial.avatarColor }}
                      aria-hidden="true"
                    >
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-white leading-tight">{testimonial.name}</div>
                      <div className="text-xs text-gray-400">{testimonial.location}</div>
                    </div>
                  </div>
                  {/* Google "G" glyph */}
                  <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 48 48" aria-label="Google review">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                  </svg>
                </div>

                {/* Rating + date */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-[#FBBC05] fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">{testimonial.date}</span>
                </div>

                {/* Route badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-semibold rounded-full border border-[#D4AF37]/30">
                    {testimonial.route}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-gray-300 leading-relaxed">
                  {testimonial.text}
                </p>
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
