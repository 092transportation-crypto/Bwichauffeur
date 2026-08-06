import React from 'react';
import { Camera } from 'lucide-react';

// Real photos of our own vehicles on the job — no stock imagery.
const photos = [
  {
    src: '/images/gallery/fleet-downtown-baltimore.jpg',
    alt: 'BMW 7 Series and Cadillac Escalade ESV chauffeur vehicles staged curbside in downtown Baltimore',
    caption: 'Executive fleet staged in downtown Baltimore',
    wide: true
  },
  {
    src: '/images/gallery/mercedes-s-class-westin-bwi.jpg',
    alt: 'Mercedes-Benz S-Class chauffeur car waiting under the portico of a BWI airport hotel at night',
    caption: 'S-Class night pickup at a BWI airport hotel'
  },
  {
    src: '/images/gallery/escalade-harbor-east.jpg',
    alt: 'Black Cadillac Escalade ESV parked at Harbor East on the Baltimore waterfront',
    caption: 'Escalade ESV at Harbor East, Baltimore'
  },
  {
    src: '/images/gallery/yukon-denali-washington-dc.jpg',
    alt: 'Black luxury SUV parked curbside on a tree-lined street in downtown Washington, DC',
    caption: 'Luxury SUV curbside in Washington, DC'
  },
  {
    src: '/images/gallery/mercedes-s-class-morning-pickup.jpg',
    alt: 'Mercedes-Benz S-Class arriving for a morning pickup outside a country bakery',
    caption: 'S-Class ready for a morning pickup'
  },
  {
    src: '/images/bmw-7-series.jpg',
    alt: 'BMW 7 Series chauffeur sedan arriving at a hotel entrance in the evening',
    caption: 'BMW 7 Series evening hotel arrival'
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#D4AF37]/10 to-[#F4E5C3]/10 border border-[#D4AF37]/30 rounded-full px-5 py-2 mb-6">
            <Camera className="h-4 w-4 text-[#D4AF37]" />
            <span className="text-gray-300 text-sm font-medium">Real photos of our vehicles — no stock imagery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Fleet in <span className="text-[#D4AF37]">Action</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Recent pickups across Baltimore, Washington, DC, and the BWI corridor
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <figure
              key={photo.src}
              className={`relative overflow-hidden rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 group transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/20 ${
                photo.wide ? 'sm:col-span-2' : ''
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <figcaption className="absolute bottom-4 left-4 right-4 text-white font-medium drop-shadow-lg">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
