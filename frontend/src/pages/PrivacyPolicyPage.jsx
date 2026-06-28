import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-16">
      <Helmet>
        <title>Privacy Policy and Customer Data Protection | BWI Chauffeur</title>
        <meta
          name="description"
          content="BWI Chauffeur privacy policy: what we collect, how we use it, your SMS opt-in rights, and our commitment to never share mobile consent data."
        />
        <link rel="canonical" href="https://bwichauffeur.com/privacy-policy/" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
        <Link
          to="/"
          className="inline-flex items-center mb-8 text-[#D4AF37] hover:text-[#F4E5C3] transition-colors"
        >
          ← Back to Home
        </Link>

        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Privacy <span className="text-[#D4AF37]">Policy</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Effective Date: February 21, 2026 · Last Updated: February 21, 2026
          </p>
        </header>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
          <p>
            BWI Chauffeur (&quot;BWI Chauffeur,&quot; &quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;) operates the website{' '}
            <a href="https://bwichauffeur.com" className="text-[#D4AF37] hover:underline">
              bwichauffeur.com
            </a>{' '}
            and provides luxury chauffeur transportation services across Maryland,
            Washington DC, Delaware, and Northern Virginia. This Privacy Policy explains
            what personal information we collect, how we use it, when (if ever) we share
            it, and the rights you have over that information — including specific rules
            for our SMS text messaging program.
          </p>

          {/* 1. What we collect */}
          <section>
            <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-3">
              1. Personal Information We Collect
            </h2>
            <p>We collect the following categories of personal information:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-2">
              <li>
                <strong className="text-white">Contact information</strong> — name, email
                address, mobile phone number, and mailing address provided through our
                online quote form, contact form, booking system, or by phone.
              </li>
              <li>
                <strong className="text-white">Trip details</strong> — pickup and
                drop-off locations, date and time of service, passenger count, vehicle
                preference, flight number, and any special requests.
              </li>
              <li>
                <strong className="text-white">Payment information</strong> — credit-card
                or other billing details, processed by our PCI-compliant payment
                processor. We do not store full card numbers on our servers.
              </li>
              <li>
                <strong className="text-white">SMS opt-in records</strong> — when you
                consent to receive text messages from us, we record the date, time, and
                source of that opt-in along with the phone number associated with it.
              </li>
              <li>
                <strong className="text-white">Usage and analytics data</strong> — IP
                address, browser type, pages viewed, referring URL, and device
                identifiers, collected via cookies and analytics tools such as Google
                Analytics 4.
              </li>
            </ul>
          </section>

          {/* 2. How we use it */}
          <section>
            <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-3">
              2. How We Use Your Information
            </h2>
            <p>We use the information described above to:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-2">
              <li>Provide, schedule, dispatch, and complete your chauffeured rides.</li>
              <li>Send booking confirmations, trip updates, receipts, and customer-support communications.</li>
              <li>
                Respond to quote requests, contact-form submissions, and customer-service
                inquiries.
              </li>
              <li>Process payments and prevent fraud.</li>
              <li>Send SMS messages — exclusively to phone numbers that have opted in — for trip confirmations, dispatch updates, and conversational customer support.</li>
              <li>Improve our website, services, and customer experience using aggregated, anonymized analytics.</li>
              <li>Comply with applicable legal, regulatory, and tax obligations.</li>
            </ul>
          </section>

          {/* 3. Sharing & opt-in disclosure */}
          <section>
            <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-3">
              3. How We Share Information &amp; SMS Opt-In Privacy
            </h2>
            <p>
              We share personal information only in the limited circumstances described
              below:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-2">
              <li>
                <strong className="text-white">Service providers</strong> — payment
                processors, SMS messaging gateways, email-delivery providers, and
                dispatch software vendors that need the data strictly to deliver the
                service you requested.
              </li>
              <li>
                <strong className="text-white">Chauffeurs and drivers</strong> — the
                minimum information necessary (name, pickup address, contact number, and
                flight detail) so they can complete your trip.
              </li>
              <li>
                <strong className="text-white">Legal &amp; safety</strong> — when
                required by law, court order, valid subpoena, or to protect the rights,
                property, or safety of our riders, chauffeurs, or company.
              </li>
            </ul>

            <div
              className="mt-6 p-5 rounded-lg border-2 border-[#D4AF37]/60 bg-[#D4AF37]/10"
              data-testid="sms-no-share-statement"
            >
              <p className="text-white font-semibold leading-relaxed">
                No mobile opt-in or text message consent will be shared with third
                parties or affiliates.
              </p>
              <p className="text-gray-300 text-sm mt-2">
                Phone numbers collected for SMS messaging are used only by BWI Chauffeur
                to communicate with you. They are never sold, rented, traded, or shared
                with marketing partners, lead-generation services, or any other third
                party for any purpose.
              </p>
            </div>
          </section>

          {/* 4. SMS Terms of Service */}
          <section id="sms-terms" data-testid="sms-terms-section">
            <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-3">
              4. SMS / Text Messaging Terms of Service
            </h2>
            <p>
              By providing your mobile phone number and opting in (online form,
              checkbox, or verbally during booking), you agree to the following SMS
              Terms:
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-1">Types of messages we send</h3>
                <p className="text-gray-300">
                  Conversational and informational SMS messages, including: trip
                  confirmations, chauffeur arrival notifications, dispatch updates,
                  flight-tracking alerts, schedule changes, customer-service replies,
                  and reservation reminders.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-1">Consent statement</h3>
                <p className="text-gray-300 italic">
                  &quot;If you consent to receive conversational and informational SMS
                  messages from BWI Chauffeur, you agree to receive conversational and
                  informational SMS from us. Reply <strong>STOP</strong> to opt-out;
                  reply <strong>HELP</strong> for support; message &amp; data rates may
                  apply; messaging frequency may vary. Visit{' '}
                  <a
                    href="https://bwichauffeur.com/privacy-policy"
                    className="text-[#D4AF37] hover:underline not-italic"
                  >
                    https://bwichauffeur.com/privacy-policy
                  </a>{' '}
                  to see our Privacy Policy and terms and conditions.&quot;
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-1">Opting out</h3>
                <p className="text-gray-300">
                  You can opt out of SMS messages at any time by replying{' '}
                  <strong>STOP</strong> to any text message we send you. You will
                  receive a single confirmation message and no further SMS messages.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-1">Getting help</h3>
                <p className="text-gray-300">
                  Reply <strong>HELP</strong> to any SMS message for support, or contact
                  us directly at{' '}
                  <a
                    href="tel:+18776790100"
                    className="text-[#D4AF37] hover:underline"
                  >
                    877-679-0100
                  </a>{' '}
                  or{' '}
                  <a
                    href="mailto:info@bwichauffeur.com"
                    className="text-[#D4AF37] hover:underline"
                  >
                    info@bwichauffeur.com
                  </a>
                  .
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-1">Carrier charges &amp; frequency</h3>
                <p className="text-gray-300">
                  Message and data rates may apply. Messaging frequency varies based on
                  your trip activity (typically 1–5 messages per booking).
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-1">Carriers</h3>
                <p className="text-gray-300">
                  Carriers — including but not limited to T-Mobile, AT&amp;T, Verizon,
                  Sprint, and US Cellular — are not liable for delayed or undelivered
                  messages.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-3">
              5. Cookies &amp; Analytics
            </h2>
            <p>
              We use cookies and similar technologies to operate the website, remember
              your preferences, and measure traffic. We use Google Analytics 4 to
              understand aggregate site usage. You can disable cookies in your browser
              settings or opt out of Google Analytics via the{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noreferrer"
                className="text-[#D4AF37] hover:underline"
              >
                Google Analytics opt-out browser add-on
              </a>
              .
            </p>
          </section>

          {/* 6. Security */}
          <section>
            <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-3">
              6. How We Protect Your Information
            </h2>
            <p>
              We implement industry-standard administrative, technical, and physical
              safeguards to protect personal information, including TLS encryption in
              transit, restricted-access databases, and PCI-DSS-compliant payment
              processing. No method of transmission over the internet is 100% secure,
              but we work hard to keep your data safe.
            </p>
          </section>

          {/* 7. Your rights */}
          <section>
            <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-3">
              7. Your Rights &amp; Choices
            </h2>
            <p>You can, at any time:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-2">
              <li>Request access to the personal information we hold about you.</li>
              <li>Request correction of inaccurate personal information.</li>
              <li>Request deletion of your personal information (subject to legal and tax retention rules).</li>
              <li>Opt out of SMS messages by replying <strong>STOP</strong>.</li>
              <li>Opt out of marketing emails by clicking the unsubscribe link in any email.</li>
              <li>
                Submit a privacy request by contacting{' '}
                <a
                  href="mailto:info@bwichauffeur.com"
                  className="text-[#D4AF37] hover:underline"
                >
                  info@bwichauffeur.com
                </a>
                .
              </li>
            </ul>
          </section>

          {/* 8. Children */}
          <section>
            <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-3">
              8. Children&apos;s Privacy
            </h2>
            <p>
              Our services are intended for adults. We do not knowingly collect personal
              information from children under 13. If you believe a child has provided us
              with personal information, please contact us so we can promptly delete it.
            </p>
          </section>

          {/* 9. Changes */}
          <section>
            <h2 className="text-2xl font-bold text-[#D4AF37] mt-8 mb-3">
              9. Updates to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Material changes will
              be posted here with an updated &quot;Last Updated&quot; date. Continued use
              of the website or services after the changes constitutes acceptance of the
              revised policy.
            </p>
          </section>

          {/* 10. Contact */}
          <section className="mt-10 p-6 rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-br from-gray-900 to-black">
            <h2 className="text-2xl font-bold text-[#D4AF37] mb-3">10. Contact Us</h2>
            <p className="mb-2">Questions about this Privacy Policy or your data?</p>
            <ul className="space-y-1 text-gray-300">
              <li>
                <strong className="text-white">Phone:</strong>{' '}
                <a
                  href="tel:+18776790100"
                  className="text-[#D4AF37] hover:underline"
                >
                  877-679-0100
                </a>{' '}
                (24/7 dispatch)
              </li>
              <li>
                <strong className="text-white">Email:</strong>{' '}
                <a
                  href="mailto:info@bwichauffeur.com"
                  className="text-[#D4AF37] hover:underline"
                >
                  info@bwichauffeur.com
                </a>
              </li>
              <li>
                <strong className="text-white">Web:</strong>{' '}
                <a
                  href="https://bwichauffeur.com"
                  className="text-[#D4AF37] hover:underline"
                >
                  bwichauffeur.com
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
