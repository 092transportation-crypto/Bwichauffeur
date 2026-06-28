import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Shield, Star, Car, Users, Calendar } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const BaltimoreSportsPage = () => {
  return (
    <>
      <Helmet>
        <title>Baltimore Sports Transportation 2026 | Ravens & Orioles Car Service | BWI Chauffeur</title>
        <meta name="description" content="Premium transportation to Baltimore sports events with professional chauffeurs, luxury vehicles, and timely service for a seamless, enjoyable experience." />
        <meta name="keywords" content="Baltimore Ravens transportation, Orioles game day shuttle, M&T Bank Stadium limo, Camden Yards chauffeur, Baltimore sports transportation, NFL game transportation, MLB game shuttle, Ravens tailgate transportation" />
        <link rel="canonical" href="https://bwichauffeur.com/baltimore-sports-transportation/" />
      </Helmet>

      <div className="min-h-screen bg-black">
        {/* Breadcrumbs — sit just below the navbar/trust bar */}
        <div className="pt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Services', to: '/services' }, { label: 'Baltimore Sports' }]} />
        </div>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1611706314453-9e1a6706b1a2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwxfHxCYWx0aW1vcmUlMjBSYXZlbnMlMjBORkwlMjBmb290YmFsbCUyMHN0YWRpdW18ZW58MHx8fHwxNzY5MTI2MzYxfDA&ixlib=rb-4.1.0&q=85"
              alt="M&T Bank Stadium Baltimore Ravens Game Day Transportation - BWI Chauffeur Private Car Service for NFL Football Games in Maryland"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Baltimore <span style={{ color: '#D4AF37' }}>Ravens & Orioles</span>
              <br />Game Day Transportation
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Skip the traffic and parking hassles. Arrive at M&T Bank Stadium or Camden Yards in style with BWI Chauffeur's premium game day transportation service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all duration-300"
                data-testid="book-game-day-btn"
              >
                Book Game Day Ride
              </Link>
              <a
                href="tel:+18776790100"
                className="px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
              >
                Call 877-679-0100
              </a>
            </div>
          </div>
        </section>

        {/* Ravens Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-purple-900/50 border border-purple-500 rounded-full mb-6">
                  <span className="text-purple-400 font-semibold">🏈 Baltimore Ravens</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  M&T Bank Stadium <span style={{ color: '#D4AF37' }}>Transportation</span>
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  The Baltimore Ravens have been a symbol of excellence in the NFL since their founding in 1996. With two Super Bowl championships (2000 and 2012), the Ravens have built a passionate fan base that fills M&T Bank Stadium every game day. Our luxury chauffeur service ensures you experience every touchdown, every big play, and every victory without the stress of driving or parking.
                </p>
                <p className="text-gray-300 text-lg mb-6">
                  M&T Bank Stadium, located in downtown Baltimore, seats over 71,000 fans and offers an electric atmosphere on game days. However, parking can cost $40-$100 and traffic can add hours to your trip. Let BWI Chauffeur handle the logistics while you focus on cheering for Lamar Jackson and the Ravens.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <Car className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Door-to-door service from your home or hotel</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Clock className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Flexible pickup times for tailgating or game start</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Group transportation in Mercedes Sprinter vans</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/128457/pexels-photo-128457.jpeg"
                  alt="Baltimore Ravens NFL Game Day Luxury Transportation - Professional Chauffeur Service to M&T Bank Stadium Maryland"
                  className="rounded-2xl shadow-2xl shadow-purple-900/30"
                />
                <div className="absolute -bottom-6 -left-6 bg-purple-900 text-white p-6 rounded-xl">
                  <div className="text-3xl font-bold">71,000+</div>
                  <div className="text-sm text-purple-300">Stadium Capacity</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Orioles Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <img
                  src="https://images.pexels.com/photos/569848/pexels-photo-569848.jpeg"
                  alt="Camden Yards Oriole Park Baltimore - BWI Chauffeur Private Car Service for Orioles Baseball Games and Sports Events"
                  className="rounded-2xl shadow-2xl shadow-orange-900/30"
                />
                <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-6 rounded-xl">
                  <div className="text-3xl font-bold">Since 1992</div>
                  <div className="text-sm text-orange-200">Camden Yards</div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-2 bg-orange-900/50 border border-orange-500 rounded-full mb-6">
                  <span className="text-orange-400 font-semibold">⚾ Baltimore Orioles</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Camden Yards <span style={{ color: '#D4AF37' }}>Game Day Service</span>
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  Oriole Park at Camden Yards revolutionized baseball stadium design when it opened in 1992, and remains one of the most beloved ballparks in America. The Baltimore Orioles, with their rich history dating back to 1901, have given fans legendary players like Cal Ripken Jr., Brooks Robinson, and Jim Palmer.
                </p>
                <p className="text-gray-300 text-lg mb-6">
                  Whether you're catching a summer night game, attending the home opener, or watching the O's in a pennant race, BWI Chauffeur provides seamless transportation to and from Camden Yards. Enjoy the game, grab a Boog's BBQ sandwich, and let us handle the ride home.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Drop-off at stadium entrance, pickup after the game</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Calendar className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Season ticket holder packages available</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Star className="h-6 w-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <span className="text-gray-300">VIP treatment for corporate outings & special events</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Why Choose BWI Chauffeur for <span style={{ color: '#D4AF37' }}>Game Day</span>?
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Skip the stress of Baltimore game day traffic and parking. Our professional chauffeurs know the best routes and timing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Car,
                  title: 'No Parking Hassles',
                  description: 'Save $40-$100 on stadium parking and avoid the post-game parking lot gridlock.'
                },
                {
                  icon: Clock,
                  title: 'Perfect Timing',
                  description: 'Arrive for tailgating or just before kickoff/first pitch. We work around your schedule.'
                },
                {
                  icon: Users,
                  title: 'Group Transportation',
                  description: 'Bring the whole crew in our Mercedes Sprinter vans. Up to 14 passengers per vehicle.'
                },
                {
                  icon: Shield,
                  title: 'Safe Ride Home',
                  description: 'Enjoy the game responsibly. Your professional chauffeur ensures a safe ride home.'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-[#D4AF37]/50 transition-all duration-300">
                  <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-7 w-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Game Day <span style={{ color: '#D4AF37' }}>Transportation Packages</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Affordable luxury transportation for Ravens and Orioles games. All packages include professional chauffeur, luxury vehicle, and complimentary amenities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Standard',
                  vehicle: 'Mercedes E-Class',
                  passengers: '1-3 passengers',
                  features: ['Round-trip transportation', 'Professional chauffeur', 'Bottled water & WiFi', 'Flexible pickup times']
                },
                {
                  name: 'Premium',
                  vehicle: 'Cadillac Escalade',
                  passengers: '1-5 passengers',
                  features: ['Round-trip transportation', 'Professional chauffeur', 'Premium amenities', 'Extra luggage space', 'Cooler for refreshments'],
                  popular: true
                },
                {
                  name: 'Group',
                  vehicle: 'Mercedes Sprinter',
                  passengers: '6-14 passengers',
                  features: ['Round-trip transportation', 'Professional chauffeur', 'Entertainment system', 'Climate controlled', 'Perfect for tailgate groups']
                }
              ].map((pkg, index) => (
                <div key={index} className={`relative bg-gray-900/50 border rounded-xl p-8 ${pkg.popular ? 'border-[#D4AF37]' : 'border-gray-800'}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-[#D4AF37] text-black text-sm font-bold rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-[#D4AF37] font-semibold mb-1">{pkg.vehicle}</p>
                  <p className="text-gray-400 mb-6">{pkg.passengers}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-gray-300">
                        <Star className="h-4 w-4 text-[#D4AF37]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/booking"
                    className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black hover:shadow-lg hover:shadow-[#D4AF37]/50'
                        : 'border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black'
                    }`}
                  >
                    Book Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 via-black to-orange-900/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready for the <span style={{ color: '#D4AF37' }}>Next Big Game</span>?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Whether you're headed to see the Ravens dominate at M&T Bank Stadium or watching the O's at Camden Yards, BWI Chauffeur has you covered. Book your game day transportation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all duration-300"
              >
                Book Your Ride Now
              </Link>
              <a
                href="tel:+18776790100"
                className="px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>877-679-0100</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BaltimoreSportsPage;
