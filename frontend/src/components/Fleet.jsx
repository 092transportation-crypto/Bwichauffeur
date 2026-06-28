import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Briefcase, Star, Car, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Fleet = () => {
  // Categories in exact order. "First Class Sedan" contains two vehicles.
  const vehicles = [
    {
      category: 'Business Sedan',
      name: 'Mercedes-Benz E-Class 2025',
      image: '/images/mercedes-eclass.jpg',
      passengers: '3',
      luggage: '3',
      description:
        'The perfect business sedan for airport transfers and corporate travel. Refined elegance meets cutting-edge technology.'
    },
    {
      category: 'First Class Sedan',
      name: 'BMW 7 Series',
      image: '/images/bmw-7series.jpg',
      passengers: '3',
      luggage: '3',
      description:
        'Where performance meets pure luxury. The ultimate first class sedan for discerning travelers.'
    },
    {
      category: 'First Class Sedan',
      name: 'Mercedes-Benz S-Class',
      image: '/images/mercedes-sclass.jpg',
      passengers: '3',
      luggage: '3',
      description:
        'The pinnacle of sedan luxury. First-class experience for those who accept nothing less.'
    },
    {
      category: 'Midsize SUV',
      name: 'Lincoln Nautilus',
      image: '/images/lincoln-nautilus.jpg',
      passengers: '3',
      luggage: '4',
      description:
        'The perfect balance of comfort and practicality for families and travelers with extra luggage.'
    },
    {
      category: 'Luxury SUV',
      name: 'Chevrolet Suburban',
      image: '/images/chevy-suburban.jpg',
      passengers: '5',
      luggage: '6',
      description:
        'Maximum space without compromising luxury. Ideal for larger groups and extended journeys.'
    },
    {
      category: 'Premium SUV',
      name: 'Cadillac Escalade',
      image: '/images/cadillac-escalade.jpg',
      passengers: '5',
      luggage: '5',
      description:
        "America's premier luxury SUV. Commanding presence with superior comfort for families and groups."
    },
    {
      category: 'Van',
      name: 'Mercedes Sprinter Van',
      image: '/images/mercedes-sprinter.jpg',
      passengers: 'Up to 14',
      luggage: 'Up to 14',
      description:
        'Premium group transportation for corporate events, airport runs, and special occasions.'
    }
  ];

  // If an image hasn't been uploaded yet, hide the broken <img> so the
  // gold placeholder behind it shows instead.
  const handleImgError = (e) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <section id="fleet" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#D4AF37]">Luxury Fleet</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meticulously maintained premium vehicles for every occasion
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/20 hover:border-[#D4AF37]/60 overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/20 flex flex-col"
              data-testid={`fleet-card-${index}`}
            >
              {/* Vehicle Image (gold placeholder behind, in case image not yet uploaded) */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black">
                {/* Placeholder layer */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 2px, transparent 2px, transparent 18px)'
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40">
                    <Car className="h-7 w-7 text-[#D4AF37]" />
                  </div>
                </div>

                {/* Actual image (sits on top of placeholder) */}
                <img
                  src={vehicle.image}
                  alt={`${vehicle.name} — ${vehicle.category} chauffeur vehicle, seats ${vehicle.passengers}`}
                  loading="lazy"
                  onError={handleImgError}
                  className="absolute inset-0 w-full h-full object-cover z-10 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay + name */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-20" />
                <div className="absolute bottom-4 left-4 right-4 z-30">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">{vehicle.name}</h3>
                </div>
              </div>

              <CardContent className="p-6 flex flex-col flex-1">
                {/* Category label — gold, at top */}
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2">
                  {vehicle.category}
                </span>

                {/* Vehicle name */}
                <h3 className="text-xl font-bold text-white mb-4">{vehicle.name}</h3>

                {/* Capacity: passengers + luggage with icons */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-800">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-[#D4AF37]" />
                    <span className="text-white font-medium">{vehicle.passengers} Passengers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-5 w-5 text-[#D4AF37]" />
                    <span className="text-white font-medium">{vehicle.luggage} Bags</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 text-sm flex-1">{vehicle.description}</p>

                {/* Book Now button */}
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/40 transition-all duration-300"
                  data-testid={`fleet-book-${index}`}
                >
                  Book Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Message */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#D4AF37]/10 to-[#F4E5C3]/10 border border-[#D4AF37]/30 rounded-full px-6 py-3">
            <Star className="h-5 w-5 text-[#D4AF37]" />
            <span className="text-gray-300">All vehicles are fully licensed, insured, and professionally maintained</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
