import React, { useState } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import axios from 'axios';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';
import Breadcrumbs from '../components/Breadcrumbs';
import { AddressAutocomplete } from '../components/AddressAutocomplete';
import TrustSignals from '../components/TrustSignals';

// Default to same-origin (Vercel serverless /api). Override with
// REACT_APP_BACKEND_URL only if the API is hosted elsewhere.
const API = `${process.env.REACT_APP_BACKEND_URL || ''}/api`;

const PASSENGER_OPTIONS = Array.from({ length: 14 }, (_, i) => ({
  value: String(i + 1),
  label: `${i + 1} ${i === 0 ? 'Passenger' : 'Passengers'}`,
}));

const initial = {
  full_name: '',
  phone: '',
  email: '',
  pickup_location: '',
  dropoff_location: '',
  pickup_datetime: '',
  passengers: 1,
  sms_consent: false,
};

const ContactPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initial);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : name === 'passengers' ? Number(value) || 1 : value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.full_name.trim() || !form.phone.trim() || !form.email.trim() || !form.pickup_location.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!form.sms_consent) {
      setError('Please agree to the SMS consent to continue.');
      return;
    }

    setSubmitting(true);
    try {
      await axios.post(`${API}/quote-requests`, form);
      setSubmitted(true);
      setForm(initial);
      toast.success('Quote request received! We respond within 15 minutes.');
    } catch (err) {
      const detail = err?.response?.data?.detail || 'Something went wrong. Please try again or call us directly.';
      setError(detail);
      toast.error('Could not send message');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Get a Free Quote | BWI Chauffeur (877) 609-1919</title>
        <meta
          name="description"
          content="Contact BWI Chauffeur for 24/7 luxury airport transfers and corporate car service across Maryland, DC & Delaware. Call 877-609-1919 or book online."
        />
        <link rel="canonical" href="https://bwichauffeur.com/contact/" />
      </Helmet>

      <div className="min-h-screen bg-black pt-32 pb-16" data-testid="contact-page">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="mb-8 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
            data-testid="contact-back-home"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Contact <span className="text-[#D4AF37]">BWI Chauffeur</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Questions, custom quotes, or corporate accounts — we respond within
              15 minutes, 24/7 by phone.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Column */}
            <aside className="lg:col-span-1 space-y-4">
              <Card className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Call 24/7</p>
                      <a
                        href="tel:+18776091919"
                        className="text-xl font-bold text-white hover:text-[#D4AF37] transition-colors"
                        data-testid="contact-phone"
                      >
                        877-609-1919
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Email</p>
                      <a
                        href="mailto:info@bwichauffeur.com"
                        className="text-lg font-semibold text-white hover:text-[#D4AF37] transition-colors break-all"
                        data-testid="contact-email"
                      >
                        info@bwichauffeur.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Service Area</p>
                      <p className="text-white">
                        BWI Airport Area
                        <br />
                        Baltimore, Maryland
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Hours</p>
                      <p className="text-white">24 hours / 7 days</p>
                      <p className="text-sm text-gray-400 mt-1">
                        Bookings, dispatch &amp; support around the clock.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Form Column */}
            <div className="lg:col-span-2">
              <Card className="bg-gradient-to-br from-gray-900 to-black border-[#D4AF37]/40 shadow-2xl">
                <CardContent className="p-6 md:p-8">
                  {submitted ? (
                    <div className="text-center py-10" data-testid="contact-success">
                      <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center">
                        <CheckCircle2 className="h-9 w-9 text-[#D4AF37]" />
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-3">
                        Quote request received
                      </h2>
                      <p className="text-gray-300 max-w-md mx-auto mb-6">
                        Thanks for reaching out. We&apos;ll get back to you within 15
                        minutes. For anything urgent, call{' '}
                        <a href="tel:+18776091919" className="text-[#D4AF37] hover:underline">
                          877-609-1919
                        </a>{' '}
                        — we&apos;re available 24/7.
                      </p>
                      <div className="flex flex-wrap items-center justify-center gap-3">
                        <Button
                          onClick={() => setSubmitted(false)}
                          variant="outline"
                          className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                          data-testid="contact-send-another"
                        >
                          Send another message
                        </Button>
                        <Link
                          to="/booking"
                          className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-semibold rounded-md hover:shadow-lg hover:shadow-[#D4AF37]/40 transition-all"
                        >
                          Book Your Airport Ride
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={onSubmit} className="space-y-5" data-testid="contact-form">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <Label htmlFor="full_name" className="text-gray-300">
                            Name <span className="text-[#D4AF37]">*</span>
                          </Label>
                          <Input
                            id="full_name"
                            name="full_name"
                            type="text"
                            required
                            value={form.full_name}
                            onChange={onChange}
                            placeholder="Jane Doe"
                            className="mt-2 bg-black/40 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-[#D4AF37]"
                            data-testid="contact-input-name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-gray-300">
                            Email <span className="text-[#D4AF37]">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={onChange}
                            placeholder="you@example.com"
                            className="mt-2 bg-black/40 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-[#D4AF37]"
                            data-testid="contact-input-email"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <Label htmlFor="phone" className="text-gray-300">
                            Phone <span className="text-[#D4AF37]">*</span>
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={form.phone}
                            onChange={onChange}
                            placeholder="(667) 555-0123"
                            className="mt-2 bg-black/40 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-[#D4AF37]"
                            data-testid="contact-input-phone"
                          />
                        </div>
                        <div>
                          <Label htmlFor="pickup_location" className="text-gray-300">
                            Pickup Location <span className="text-[#D4AF37]">*</span>
                          </Label>
                          <div className="mt-2">
                            <AddressAutocomplete
                              id="pickup_location"
                              testId="contact-input-pickup"
                              inputClassName="flex h-10 w-full rounded-md border px-3 py-2 text-sm bg-black/40 border-gray-700 text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
                              placeholder="BWI Airport, Terminal A"
                              value={form.pickup_location}
                              onChange={(v) => setForm((prev) => ({ ...prev, pickup_location: v }))}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <Label htmlFor="dropoff_location" className="text-gray-300">
                            Drop-off Location <span className="text-[#D4AF37]">*</span>
                          </Label>
                          <div className="mt-2">
                            <AddressAutocomplete
                              id="dropoff_location"
                              testId="contact-input-dropoff"
                              inputClassName="flex h-10 w-full rounded-md border px-3 py-2 text-sm bg-black/40 border-gray-700 text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
                              placeholder="Downtown Baltimore, MD"
                              value={form.dropoff_location}
                              onChange={(v) => setForm((prev) => ({ ...prev, dropoff_location: v }))}
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="pickup_datetime" className="text-gray-300">
                            Pickup Date <span className="text-[#D4AF37]">*</span>
                          </Label>
                          <Input
                            id="pickup_datetime"
                            name="pickup_datetime"
                            type="datetime-local"
                            required
                            value={form.pickup_datetime}
                            onChange={onChange}
                            className="mt-2 bg-black/40 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-[#D4AF37]"
                            data-testid="contact-input-date"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="passengers" className="text-gray-300">Passengers</Label>
                        <select
                          id="passengers"
                          name="passengers"
                          value={String(form.passengers)}
                          onChange={onChange}
                          data-testid="contact-input-passengers"
                          className="mt-2 w-full bg-black/40 border border-gray-700 focus:border-[#D4AF37] text-white rounded-md px-3 py-2 outline-none transition"
                        >
                          {PASSENGER_OPTIONS.map((o) => (
                            <option key={o.value} value={o.value}>{o.label}</option>
                          ))}
                        </select>
                      </div>

                      {error && (
                        <div
                          className="flex items-start gap-2 p-3 rounded-md bg-red-900/30 border border-red-700/50 text-red-200 text-sm"
                          data-testid="contact-error"
                        >
                          <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>{error}</span>
                        </div>
                      )}

                      {/* SMS consent (required) */}
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="sms_consent"
                          name="sms_consent"
                          checked={form.sms_consent}
                          onChange={onChange}
                          required
                          data-testid="contact-sms-consent"
                          className="mt-0.5 h-5 w-5 flex-shrink-0 cursor-pointer rounded border-gray-600 bg-black/60 accent-[#D4AF37]"
                        />
                        <label htmlFor="sms_consent" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
                          I consent to receive conversational and informational SMS messages from BWI Chauffeur.
                          BWI Chauffeur will not share your mobile opt-in information with third parties.
                          Reply STOP to opt-out; reply HELP for support; message &amp; data rates may apply;
                          messaging frequency may vary.{' '}
                          <Link to="/privacy-policy" className="underline hover:text-[#D4AF37]">
                            View our Privacy Policy at bwichauffeur.com/privacy-policy
                          </Link>.
                        </label>
                      </div>

                      <Button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold hover:shadow-lg hover:shadow-[#D4AF37]/40 transition-all py-6 text-base"
                        data-testid="contact-submit"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Get My Free Quote
                          </>
                        )}
                      </Button>

                      <p className="text-center text-[#D4AF37] text-sm font-medium">We respond within 15 minutes</p>
                      <TrustSignals />
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
