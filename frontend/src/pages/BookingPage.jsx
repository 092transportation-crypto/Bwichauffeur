import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { ArrowLeft, BadgeDollarSign, CheckCircle, Clock, CreditCard, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { InquiryForm } from '../components/InquiryForm';
import Breadcrumbs from '../components/Breadcrumbs';

const BookingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Book Your Ride | BWI Chauffeur Service Maryland</title>
        <meta
          name="description"
          content="Book your luxury chauffeur service online with BWI Chauffeur. Easy reservations for airport transfers, corporate travel, and special events in Maryland and DC."
        />
        <link rel="canonical" href="https://bwichauffeur.com/booking" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Book Your Ride' }]} />
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="mb-8 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-5">
              Book Your <span className="text-[#D4AF37]">Luxury Ride</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Tell us about your trip and a reservation specialist will reply within minutes
              with your custom flat-rate quote.
            </p>
          </div>

          {/* Booking Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-gray-800/50 border border-[#D4AF37]/20 rounded-lg p-4 text-center">
              <CheckCircle className="h-7 w-7 text-[#D4AF37] mx-auto mb-2" />
              <span className="text-white text-sm font-medium">Instant Confirmation</span>
            </div>
            <div className="bg-gray-800/50 border border-[#D4AF37]/20 rounded-lg p-4 text-center">
              <CreditCard className="h-7 w-7 text-[#D4AF37] mx-auto mb-2" />
              <span className="text-white text-sm font-medium">Secure Payment</span>
            </div>
            <div className="bg-gray-800/50 border border-[#D4AF37]/20 rounded-lg p-4 text-center">
              <Clock className="h-7 w-7 text-[#D4AF37] mx-auto mb-2" />
              <span className="text-white text-sm font-medium">24/7 Booking</span>
            </div>
            <div className="bg-gray-800/50 border border-[#D4AF37]/20 rounded-lg p-4 text-center">
              <Shield className="h-7 w-7 text-[#D4AF37] mx-auto mb-2" />
              <span className="text-white text-sm font-medium">Free Cancellation</span>
            </div>
          </div>

          {/* Flat-Rate Notice */}
          <div
            data-testid="rates-notice"
            className="mb-8 overflow-hidden rounded-2xl border border-[#D4AF37]/40 bg-gradient-to-r from-[#D4AF37]/10 via-[#D4AF37]/5 to-[#D4AF37]/10"
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3]" aria-hidden="true" />
            <div className="flex flex-col items-center gap-4 px-6 py-6 text-center sm:flex-row sm:gap-5 sm:px-8 sm:text-left">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4E5C3] shadow-lg shadow-[#D4AF37]/30">
                <BadgeDollarSign className="h-6 w-6 text-black" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-base font-bold text-white md:text-lg">
                  Flat-Rate Pricing — <span className="text-[#D4AF37]">No Surge, Ever</span>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-gray-300">
                  Rates vary by vehicle and distance. Every quote is all-inclusive — tolls,
                  taxes &amp; gratuity. Fill out the form below for your{' '}
                  <span className="font-semibold text-[#D4AF37]">free instant quote</span>.
                </p>
              </div>
            </div>
          </div>

          {/* The ONE booking form */}
          <div data-testid="quote-section">
            <InquiryForm />
          </div>

          {/* Booking Info */}
          <div className="mt-12 bg-gradient-to-r from-[#D4AF37]/10 to-[#F4E5C3]/10 border border-[#D4AF37]/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Booking Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300 text-sm">
              <div>
                <h4 className="text-[#D4AF37] font-semibold mb-2">Reservation Policy</h4>
                <p>
                  We recommend booking at least 24 hours in advance for standard services and
                  48–72 hours for special events. Last-minute bookings are accepted based
                  on vehicle availability.
                </p>
              </div>
              <div>
                <h4 className="text-[#D4AF37] font-semibold mb-2">Payment Options</h4>
                <p>
                  We accept all major credit cards, corporate accounts, and can arrange direct
                  billing for established business clients. Deposits may be required for
                  special event bookings.
                </p>
              </div>
              <div>
                <h4 className="text-[#D4AF37] font-semibold mb-2">Cancellation Policy</h4>
                <p>
                  Free cancellation up to 24 hours before your scheduled pickup. Cancellations
                  within 24 hours may be subject to a fee. No-shows are charged the full fare
                  amount.
                </p>
              </div>
              <div>
                <h4 className="text-[#D4AF37] font-semibold mb-2">Airport Pickups</h4>
                <p>
                  For airport arrivals, our chauffeurs track your flight in real-time and
                  adjust pickup times accordingly. We include 60 minutes of free wait time for
                  domestic flights and 90 minutes for international arrivals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
