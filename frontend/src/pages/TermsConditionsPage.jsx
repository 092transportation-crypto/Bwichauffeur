import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

const TermsConditionsPage = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-16">
      <Helmet>
        <title>Terms and Conditions for All Services | BWI Chauffeur</title>
        <meta name="description" content="Review the terms and conditions for all BWI Chauffeur services, including bookings, cancellations, and service agreements for every valued client clearly." />
        <link rel="canonical" href="https://bwichauffeur.com/terms-conditions/" />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />
        <Link
          to="/"
          className="inline-flex items-center mb-8 px-4 py-2 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black rounded-md transition-colors"
        >
          ← Back to Home
        </Link>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-[#D4AF37]/20 rounded-2xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-white mb-4">Terms and Conditions - BWI Chauffeur</h1>
          <p className="text-gray-400 mb-8">Last Updated: January 2026</p>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <p className="mb-4">
                Welcome to BWI Chauffeur's Terms and Conditions. These terms govern your use of our luxury transportation services throughout Maryland, Delaware, Washington DC, and Northern Virginia. By booking our <Link to="/services" className="text-[#D4AF37] hover:underline">chauffeur services</Link>, you agree to be bound by these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using BWI Chauffeur services ("Service"), you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not use our services. These terms apply to all users, including customers booking <Link to="/services" className="text-[#D4AF37] hover:underline">airport transportation</Link>, corporate car service, wedding transportation, and other luxury chauffeur services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>
              <p className="mb-4">
                BWI Chauffeur provides luxury ground transportation services including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><Link to="/services" className="text-[#D4AF37] hover:underline">Airport transportation</Link> to/from BWI, DCA, and IAD airports</li>
                <li>Executive and corporate car service for business professionals</li>
                <li>Wedding and special event transportation</li>
                <li>Hourly chauffeur services for multiple stops</li>
                <li>Group transportation in our <Link to="/fleet" className="text-[#D4AF37] hover:underline">luxury vehicles</Link> including Mercedes Sprinter vans</li>
              </ul>
              <p>
                Services are provided throughout <Link to="/coverage" className="text-[#D4AF37] hover:underline">Maryland, Delaware, and the Washington DC metropolitan area</Link> as detailed on our Coverage page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Reservations and Bookings</h2>
              <h3 className="text-xl font-semibold text-[#D4AF37] mb-3">3.1 Making Reservations</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Reservations can be made <Link to="/booking" className="text-[#D4AF37] hover:underline">online</Link>, by phone at <a href="tel:+18776790100" className="text-[#D4AF37] hover:underline">877-679-0100</a>, or via email</li>
                <li>All reservations require complete and accurate information</li>
                <li>Confirmation is sent upon successful booking</li>
                <li>We recommend booking at least 24 hours in advance for guaranteed availability</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#D4AF37] mb-3">3.2 Booking Confirmation</h3>
              <p className="mb-4">
                Your reservation is confirmed only when you receive written confirmation from BWI Chauffeur via email or SMS. Verbal confirmations or unconfirmed online submissions do not constitute a binding reservation.
              </p>

              <h3 className="text-xl font-semibold text-[#D4AF37] mb-3">3.3 Modifications</h3>
              <p>
                Changes to confirmed reservations must be made at least 4 hours prior to scheduled pickup. Modifications are subject to availability and may result in price adjustments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Pricing and Payment</h2>
              <h3 className="text-xl font-semibold text-[#D4AF37] mb-3">4.1 Rates</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>All rates are quoted in US Dollars</li>
                <li>Flat rates include standard gratuity, tolls, parking fees, and fuel surcharges</li>
                <li>Hourly rates have minimum booking requirements</li>
                <li>Rates are subject to change without notice</li>
                <li>Special event rates may apply during peak seasons and holidays</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#D4AF37] mb-3">4.2 Payment Terms</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Payment is due at the time of booking or as agreed for corporate accounts</li>
                <li>Accepted payment methods: Credit cards (Visa, MasterCard, American Express), corporate accounts</li>
                <li>Credit card authorization may be required to secure reservation</li>
                <li>Corporate accounts require approved credit application</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#D4AF37] mb-3">4.3 Additional Charges</h3>
              <p>
                Additional charges may apply for: excess wait time beyond the agreed grace period, route changes during service, extra stops not included in the original booking, cleaning fees for excessive mess or damage, or late-night/early morning surcharges (midnight to 5 AM).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Cancellation Policy</h2>
              <h3 className="text-xl font-semibold text-[#D4AF37] mb-3">5.1 Customer Cancellations</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>More than 24 hours notice:</strong> Full refund</li>
                <li><strong>12-24 hours notice:</strong> 50% cancellation fee</li>
                <li><strong>Less than 12 hours notice:</strong> 100% cancellation fee</li>
                <li><strong>No-show:</strong> 100% charge of quoted fare</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#D4AF37] mb-3">5.2 BWI Chauffeur Cancellations</h3>
              <p>
                In rare cases where we must cancel service due to unforeseen circumstances (severe weather, vehicle breakdown, etc.), we will provide alternative transportation or issue a full refund. We are not liable for consequential damages resulting from service cancellations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Passenger Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate pickup location, contact information, and flight details for airport transfers</li>
                <li>Be ready at scheduled pickup time (5-minute grace period provided)</li>
                <li>Respect our professional chauffeurs and treat <Link to="/fleet" className="text-[#D4AF37] hover:underline">luxury vehicles</Link> with care</li>
                <li>No smoking in any vehicle in our fleet</li>
                <li>Secure all children in appropriate car seats (available upon request)</li>
                <li>Report any issues immediately to our dispatch team at 877-679-0100</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>No illegal substances or contraband allowed in vehicles</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Flight Delays and Wait Times</h2>
              <p className="mb-4">
                For airport pickups at BWI, DCA, and Dulles:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We monitor flight arrivals in real-time and adjust pickup times accordingly</li>
                <li>Complimentary wait time: 60 minutes for domestic flights, 90 minutes for international flights (from actual landing time)</li>
                <li>Additional wait time beyond complimentary period: charged at $1 per minute</li>
                <li>Customer must notify us if unable to meet within the grace period</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Luggage and Personal Belongings</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Standard luggage allowance based on vehicle type (see our <Link to="/fleet" className="text-[#D4AF37] hover:underline">Fleet page</Link> for specifications)</li>
                <li>Oversized or excessive luggage must be declared in advance</li>
                <li>BWI Chauffeur is not responsible for lost, stolen, or damaged personal items</li>
                <li>Left items: We will attempt to return lost items for a reasonable fee</li>
                <li>Unclaimed items are held for 30 days, then donated or disposed of</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Vehicle Damage and Liability</h2>
              <p className="mb-4">
                Passengers are liable for any damage to the vehicle caused by their actions or negligence, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Stains, burns, or tears to upholstery</li>
                <li>Damage to vehicle interior or equipment</li>
                <li>Excessive cleaning required due to spills, vomit, or other mess</li>
              </ul>
              <p className="mt-4">
                Cleaning fees range from $150-$500 depending on severity. Vehicle damage will be charged at repair cost.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Limitation of Liability</h2>
              <p className="mb-4">
                BWI Chauffeur's liability is limited to the amount paid for the specific service. We are not liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Missed flights, meetings, or events due to traffic, weather, or unforeseen circumstances</li>
                <li>Indirect, incidental, or consequential damages</li>
                <li>Personal injury (covered by our commercial insurance policy)</li>
                <li>Acts of God, terrorism, civil unrest, or government action</li>
                <li>Third-party actions beyond our control</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Insurance and Safety</h2>
              <p>
                All BWI Chauffeur vehicles carry comprehensive commercial insurance exceeding state requirements ($5 million coverage). Our professional chauffeurs are extensively trained, background-checked, and hold all required licenses. Vehicle safety inspections are conducted daily. Learn more <Link to="/about" className="text-[#D4AF37] hover:underline">about our company</Link> and safety standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-[#D4AF37]/20">
                <p className="mb-4">For questions regarding these Terms and Conditions, please contact:</p>
                <p className="mb-2"><strong className="text-white">BWI Chauffeur</strong></p>
                <p className="mb-2">BWI Airport Area, Baltimore, Maryland</p>
                <p className="mb-2">Email: <a href="mailto:info@bwichauffeur.com" className="text-[#D4AF37] hover:underline">info@bwichauffeur.com</a></p>
                <p className="mb-2">Phone: <a href="tel:+18776790100" className="text-[#D4AF37] hover:underline">877-679-0100</a></p>
                <p>Hours: 24/7 Customer Service</p>
              </div>
            </section>

            <section className="border-t border-gray-700 pt-8">
              <h3 className="text-xl font-bold text-white mb-4">Related Pages</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/privacy-policy" className="text-[#D4AF37] hover:underline">Privacy Policy</Link>
                <Link to="/faq" className="text-[#D4AF37] hover:underline">FAQ</Link>
                <Link to="/about" className="text-[#D4AF37] hover:underline">About Us</Link>
                <Link to="/services" className="text-[#D4AF37] hover:underline">Our Services</Link>
                <Link to="/booking" className="text-[#D4AF37] hover:underline">Book a Ride</Link>
              </div>
            </section>

            <section className="border-t border-gray-700 pt-6 mt-8">
              <p className="text-sm text-gray-400">
                By using BWI Chauffeur services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;
