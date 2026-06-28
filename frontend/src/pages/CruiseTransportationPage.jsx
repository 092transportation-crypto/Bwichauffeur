import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Ship, Plane, Clock, Users, Shield, Star, Phone, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import Breadcrumbs from '../components/Breadcrumbs';

const CruiseTransportationPage = () => {
  const cruisePorts = [
    {
      name: 'Port of Baltimore',
      location: 'Baltimore, Maryland',
      description: 'Maryland\'s premier cruise terminal serving major cruise lines including Royal Caribbean, Carnival, and Norwegian.',
      distance: '15 minutes from BWI Airport',
      image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2064'
    },
    {
      name: 'Norfolk Cruise Terminal',
      location: 'Norfolk, Virginia',
      description: 'Virginia\'s gateway to Caribbean and Bermuda cruises with easy access from the DMV region.',
      distance: '3.5 hours from Baltimore',
      image: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?q=80&w=2074'
    }
  ];

  const services = [
    {
      icon: Plane,
      title: 'Airport to Cruise Port',
      description: 'Seamless transfers from BWI, DCA, or Dulles airports directly to your cruise terminal.'
    },
    {
      icon: MapPin,
      title: 'Home/Hotel Pickup',
      description: 'Door-to-door service from your home or hotel to the cruise port in comfort and style.'
    },
    {
      icon: Users,
      title: 'Group Transportation',
      description: 'Spacious vehicles for families and groups with room for all your luggage.'
    },
    {
      icon: Clock,
      title: 'Round-Trip Packages',
      description: 'Book your departure and return transfers together for the best value.'
    }
  ];

  const benefits = [
    'Professional uniformed chauffeurs',
    'Flight and cruise schedule monitoring',
    'Complimentary wait time for delays',
    'Luggage assistance included',
    'Child car seats available',
    'Meet & greet service',
    '24/7 customer support',
    'Fixed pricing - no surge fees'
  ];

  return (
    <>
      <Helmet>
        <title>Cruise Port Transportation Baltimore | BWI Chauffeur</title>
        <meta name="description" content="Luxury cruise port transportation to Port of Baltimore and Norfolk. Professional chauffeur service for cruise passengers with airport transfers and door-to-door pickup." />
        <link rel="canonical" href="https://bwichauffeur.com/cruise-transportation/" />
      </Helmet>

      <div className="min-h-screen bg-black pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Services', to: '/services' }, { label: 'Cruise Transportation' }]} />
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center mb-8 px-4 py-2 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black rounded-md transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#D4AF37]/20 rounded-full mb-6">
              <Ship className="h-10 w-10 text-[#D4AF37]" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cruise Port <span className="text-[#D4AF37]">Transportation</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Start your vacation stress-free with luxury transportation to and from cruise ports. 
              Professional chauffeurs, premium vehicles, and reliable service for cruise passengers.
            </p>
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-2xl p-8 mb-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Book Your Cruise Transfer?</h2>
            <p className="text-gray-300 mb-6">Call us now or book online for instant confirmation</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+18776790100">
                <Button className="bg-[#D4AF37] text-black hover:bg-[#C4A030] font-semibold px-8 py-3">
                  <Phone className="mr-2 h-5 w-5" />
                  877-679-0100
                </Button>
              </a>
              <Link to="/booking">
                <Button variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-8 py-3">
                  Book Online
                </Button>
              </Link>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-10">
              Our Cruise <span className="text-[#D4AF37]">Services</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-[#D4AF37]/20 rounded-full mb-4">
                      <service.icon className="h-7 w-7 text-[#D4AF37]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Cruise Ports Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-10">
              Cruise Ports <span className="text-[#D4AF37]">We Serve</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cruisePorts.map((port, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/20 overflow-hidden group">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={port.image}
                      alt={port.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-[#D4AF37] text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {port.distance}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{port.name}</h3>
                    <p className="text-[#D4AF37] mb-3">{port.location}</p>
                    <p className="text-gray-400">{port.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-10">
              Why Choose <span className="text-[#D4AF37]">BWI Chauffeur</span> for Cruise Transfers
            </h2>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Port of Baltimore Details */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-10">
              Port of Baltimore <span className="text-[#D4AF37]">Information</span>
            </h2>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-[#D4AF37] mb-4">Terminal Location</h3>
                  <p className="text-gray-300 mb-4">
                    The South Locust Point Cruise Terminal is located at 2001 East McComas Street, Baltimore, MD 21230. 
                    Our chauffeurs are experts at navigating the port area and will drop you off right at the terminal entrance.
                  </p>
                  <h3 className="text-xl font-bold text-[#D4AF37] mb-4 mt-6">Cruise Lines</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center"><Star className="h-4 w-4 text-[#D4AF37] mr-2" /> Royal Caribbean International</li>
                    <li className="flex items-center"><Star className="h-4 w-4 text-[#D4AF37] mr-2" /> Carnival Cruise Line</li>
                    <li className="flex items-center"><Star className="h-4 w-4 text-[#D4AF37] mr-2" /> Norwegian Cruise Line</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#D4AF37] mb-4">Recommended Arrival</h3>
                  <p className="text-gray-300 mb-4">
                    We recommend arriving at the cruise terminal 2-3 hours before your ship's departure time. 
                    Our chauffeurs will ensure you arrive with plenty of time for check-in and embarkation.
                  </p>
                  <h3 className="text-xl font-bold text-[#D4AF37] mb-4 mt-6">Popular Destinations</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center"><Ship className="h-4 w-4 text-[#D4AF37] mr-2" /> Bahamas & Caribbean</li>
                    <li className="flex items-center"><Ship className="h-4 w-4 text-[#D4AF37] mr-2" /> Bermuda</li>
                    <li className="flex items-center"><Ship className="h-4 w-4 text-[#D4AF37] mr-2" /> New England & Canada</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mb-16">
            <Card className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/30">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-6 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-xl text-gray-300 italic mb-6">
                  "BWI Chauffeur made our cruise vacation perfect from the start. They picked us up from our home, 
                  helped with all our luggage, and got us to the Port of Baltimore with time to spare. 
                  The return pickup after our cruise was equally seamless. Highly recommend!"
                </p>
                <p className="text-[#D4AF37] font-semibold">— The Johnson Family, Annapolis</p>
              </CardContent>
            </Card>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Book Your Cruise Transfer Today
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Don't leave your cruise transportation to chance. Book with BWI Chauffeur for reliable, 
              luxurious transfers that start your vacation right.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button className="bg-[#D4AF37] text-black hover:bg-[#C4A030] font-semibold px-8 py-4 text-lg">
                  Book Now
                </Button>
              </Link>
              <a href="tel:+18776790100">
                <Button variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-8 py-4 text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 877-679-0100
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CruiseTransportationPage;
