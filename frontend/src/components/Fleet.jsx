import React from 'react';
import { Users, Briefcase, Star, CheckCircle, Car } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Fleet = () => {
  const vehicles = [
    {
      name: 'Mercedes-Benz E-Class 2025',
      category: 'Business Sedan',
      image: '/fleet/mercedes-e-class.jpg',
      passengers: 3,
      luggage: 2,
      features: ['MBUX Infotainment System', 'Advanced Driver Assistance', 'Mild-Hybrid Powertrain', 'Premium Leather Interior'],
      description: 'The latest 2025 Mercedes-Benz E-Class combines cutting-edge technology with refined luxury. Perfect for business travel, airport transfers, and corporate transportation with advanced safety features and exceptional comfort.'
    },
    {
      name: 'Mercedes-Benz S-Class',
      category: 'Executive Sedan',
      image: '/fleet/mercedes-s-class.jpg',
      passengers: 3,
      luggage: 2,
      features: ['Premium Leather Seating', 'Advanced Technology', 'Exceptional Ride Comfort', 'Business-Class Amenities'],
      description: 'The benchmark in executive ground transportation. Renowned for its spacious interior, advanced technology, and exceptional ride comfort. A preferred choice for senior executives and VIP travelers.'
    },
    {
      name: 'BMW 7 Series',
      category: 'Luxury Sedan',
      image: '/fleet/bmw-7-series.jpg',
      passengers: 3,
      luggage: 2,
      features: ['iDrive 8.5 System', 'Executive Lounge Seating', 'Panoramic Sky Lounge', 'Ambient Lighting'],
      description: 'The BMW 7 Series delivers unparalleled luxury and performance. With cutting-edge technology, executive rear seating, and refined German engineering, it\'s the perfect choice for discerning executives and VIP transportation.'
    },
    {
      name: 'Chevrolet Suburban',
      category: 'Luxury SUV',
      image: '/fleet/chevrolet-suburban.jpg',
      // Tight crop to remove the distracting concrete-wall background
      imageStyle: { transform: 'scale(1.35)', objectPosition: 'center 65%' },
      passengers: 5,
      luggage: 5,
      features: ['Expansive Interior Space', 'Smooth Ride', 'Commanding Road Presence', 'Quiet Performance'],
      description: 'Cornerstone of executive SUV transportation, offering expansive interior space and quiet performance. Ideal for executives, executive assistants, and corporate groups requiring dependable, discreet transportation.'
    },
    {
      name: 'Cadillac Escalade',
      category: 'Luxury SUV',
      image: '/fleet/cadillac-escalade.jpg',
      passengers: 5,
      luggage: 5,
      features: ['Premium Craftsmanship', 'Advanced Technology', 'Refined Ride Quality', 'Upscale Materials'],
      description: 'The pinnacle of luxury SUV transportation, combining premium craftsmanship and refined ride quality. A preferred choice for executive travel, VIP transportation, and high-profile corporate engagements.'
    },
    {
      name: 'Midsize SUV',
      category: 'Midsize SUV',
      image: null,
      passengers: 5,
      luggage: 4,
      features: ['Extra Luggage Room', 'Family-Friendly', 'Climate Comfort', 'Flat Rate — No Surge'],
      description: 'Spacious and comfortable for up to 5 passengers with extra luggage room. Ideal for families and small groups traveling to BWI, DCA, or Dulles. Professional chauffeur, flat rate, no surge.'
    },
    {
      name: 'Mercedes Sprinter Van',
      category: 'Executive Sprinter',
      image: 'https://92limo.com/wp-content/uploads/2025/06/mercedes-sprinter-300x200.png',
      passengers: 14,
      luggage: 12,
      features: ['Upscale Interiors', 'Forward-Facing Seating', 'Ample Luggage Space', 'Premium Group Comfort'],
      description: 'Executive Sprinter vans purpose-built for premium group transportation. Ideal for corporate events, executive teams, airport transfers, and VIP group movements requiring comfort without compromise.'
    }
  ];

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
              className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/20 hover:border-[#D4AF37]/60 overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/20"
            >
              {/* Vehicle Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black">
                {vehicle.image ? (
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.name} — ${vehicle.category} chauffeur service vehicle, ${vehicle.passengers} passenger capacity`}
                    loading="lazy"
                    style={vehicle.imageStyle}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <>
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          'repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 2px, transparent 2px, transparent 18px)'
                      }}
                    />
                    <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-4">
                      <div>
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 mb-3">
                          <Car className="h-7 w-7 text-[#D4AF37]" />
                        </div>
                        <div
                          data-testid={`fleet-placeholder-${index}`}
                          className="inline-block bg-[#D4AF37] text-black text-xs font-extrabold tracking-widest px-3 py-1 rounded uppercase"
                        >
                          Real Car Photo
                        </div>
                        <p className="mt-2 text-gray-400 text-xs">Awaiting upload</p>
                      </div>
                    </div>
                  </>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Category Badge */}
                <Badge className="absolute top-4 right-4 bg-[#D4AF37] text-black border-none font-semibold z-20">
                  {vehicle.category}
                </Badge>

                {/* Vehicle Name on Image */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">{vehicle.name}</h3>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Description */}
                <p className="text-gray-400 mb-4 text-sm">{vehicle.description}</p>

                {/* Capacity */}
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

                {/* Features */}
                <div className="space-y-2">
                  {vehicle.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-[#D4AF37] mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
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