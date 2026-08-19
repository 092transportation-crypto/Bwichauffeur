import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Baby, Armchair, Car, CalendarCheck, MessageSquarePlus, Wrench, Phone, ShieldCheck, Sparkles, BadgeCheck, UserCheck, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import Breadcrumbs from '../components/Breadcrumbs';

const carSeatFaqs = [
  {
    q: 'Is there an extra charge for car seats?',
    a: 'Car seats are available on request for a small add-on fee that is included in your flat-rate quote up front — no surprises at pickup. Let us know how many seats you need when you book and we will confirm the exact price.',
  },
  {
    q: 'What age/weight car seats do you provide?',
    a: 'We provide three types: infant car seats for babies 0-12 months up to 22 lbs, convertible car seats for children 1-4 years, and booster seats for children 4-8 years. Tell us your child\'s age and weight when booking and we will bring the correct seat.',
  },
  {
    q: 'How do I request a car seat?',
    a: 'Simply add the car seat to your reservation when booking online, note it in the special requests, or call us at 877-609-1919. We will confirm the seat type with you before your trip and have it installed before pickup.',
  },
  {
    q: 'Are the car seats clean and sanitized?',
    a: 'Yes. Every car seat is inspected, cleaned, and sanitized before each trip. Our chauffeurs check straps, buckles, and padding, and each seat is properly installed in the vehicle before your pickup.',
  },
  {
    q: 'Can I bring my own car seat?',
    a: 'Absolutely. You are welcome to bring your own car seat, and your chauffeur will help install it and stow it during your trip. If you are flying, we can also store it with your luggage at no extra charge.',
  },
];

const seatTypes = [
  {
    icon: Baby,
    title: 'Infant Car Seat',
    range: '0-12 months · up to 22 lbs',
    description: 'Rear-facing infant seats with a secure base, ideal for newborns and babies flying in or out of BWI.',
  },
  {
    icon: Armchair,
    title: 'Convertible Car Seat',
    range: '1-4 years',
    description: 'Forward- or rear-facing convertible seats sized for toddlers and preschoolers, adjusted to your child before pickup.',
  },
  {
    icon: Car,
    title: 'Booster Seat',
    range: '4-8 years',
    description: 'Belt-positioning boosters that keep older kids safe and comfortable on longer airport rides.',
  },
];

const steps = [
  {
    icon: CalendarCheck,
    title: 'Book Your Ride',
    description: 'Reserve your BWI airport transfer online or by phone — any vehicle in our fleet, any hour of the day.',
  },
  {
    icon: MessageSquarePlus,
    title: 'Request a Car Seat',
    description: 'Tell us your child\'s age and weight when you book, or add it in the notes — we will match the right seat.',
  },
  {
    icon: Wrench,
    title: 'Chauffeur Installs It',
    description: 'Your chauffeur installs and secures the seat before pickup, so it is ready the moment you step in.',
  },
];

const trustSignals = [
  { icon: ShieldCheck, label: 'Licensed & Insured' },
  { icon: BadgeCheck, label: 'MD PSC Carrier #6325' },
  { icon: UserCheck, label: 'Professional Chauffeurs' },
];

const safetyPoints = [
  'Inspected before every trip',
  'Cleaned & sanitized between families',
  'Properly installed by your chauffeur',
  'Straps, buckles & anchors checked each time',
];

const CarSeatServicePage = () => {
  return (
    <>
      <Helmet>
        <title>Car Seat BWI Airport Transfers | BWI Chauffeur</title>
        <meta name="description" content="Safe, clean car seats for infants, toddlers & kids on every BWI airport transfer. Inspected, sanitized & installed by your chauffeur. Call 877-609-1919." />
        <link rel="canonical" href="https://www.bwichauffeur.com/car-seat-service/" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: carSeatFaqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Services', to: '/services' }, { label: 'Car Seat Service' }]} />
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
              <Baby className="h-10 w-10 text-[#D4AF37]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Car Seat Service — Safe BWI Airport Transportation for <span className="text-[#D4AF37]">Families</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We provide safe, clean car seats for infants, toddlers, and children on all BWI airport transfers.
              Skip hauling your own seat through the terminal — request one when you book and it will be installed
              and waiting when your chauffeur arrives.
            </p>
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-2xl p-8 mb-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Book with Car Seat</h2>
            <p className="text-gray-300 mb-6">Call us now or book online — car seat installed before pickup</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+18776091919">
                <Button className="bg-[#D4AF37] text-black hover:bg-[#C4A030] font-semibold px-8 py-3">
                  <Phone className="mr-2 h-5 w-5" />
                  (877) 609-1919
                </Button>
              </a>
              <Link to="/booking">
                <Button variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-8 py-3">
                  Book with Car Seat
                </Button>
              </Link>
            </div>
          </div>

          {/* Car Seat Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-10">
              Car Seat Types <span className="text-[#D4AF37]">Available</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {seatTypes.map((seat, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-[#D4AF37]/20 rounded-full mb-4">
                      <seat.icon className="h-7 w-7 text-[#D4AF37]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{seat.title}</h3>
                    <p className="text-[#D4AF37] font-semibold mb-3">{seat.range}</p>
                    <p className="text-gray-400">{seat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-10">
              How It Works — <span className="text-[#D4AF37]">3 Simple Steps</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/20">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#D4AF37] text-black text-xl font-bold rounded-full mb-4">
                      {index + 1}
                    </div>
                    <div className="flex justify-center mb-3">
                      <step.icon className="h-7 w-7 text-[#D4AF37]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Safety Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-10">
              Safety <span className="text-[#D4AF37]">First</span>
            </h2>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/20 rounded-2xl p-8">
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37]/20 rounded-full">
                  <Sparkles className="h-8 w-8 text-[#D4AF37]" />
                </div>
              </div>
              <p className="text-gray-300 text-center text-lg max-w-3xl mx-auto mb-8">
                All car seats are inspected, cleaned, and properly installed by professional chauffeurs before every
                trip — so your child rides as safely as they would in your own car.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {safetyPoints.map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Car Seat Service <span className="text-[#D4AF37]">FAQs</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {carSeatFaqs.map((f) => (
                <div key={f.q} className="bg-gray-900/60 border border-[#D4AF37]/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{f.q}</h3>
                  <p className="text-gray-400">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Signals */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
              {trustSignals.map((signal, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <signal.icon className="h-5 w-5 text-[#D4AF37]" />
                  <span className="text-gray-300 font-semibold">{signal.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Book with Car Seat Today
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Travel with peace of mind. Book your family's BWI airport transfer with a clean,
              chauffeur-installed car seat ready at pickup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button className="bg-[#D4AF37] text-black hover:bg-[#C4A030] font-semibold px-8 py-4 text-lg">
                  Book with Car Seat
                </Button>
              </Link>
              <a href="tel:+18776091919">
                <Button variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-8 py-4 text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (877) 609-1919
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarSeatServicePage;
