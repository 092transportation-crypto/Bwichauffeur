import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Send, CheckCircle2, Loader2, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';

const SERVICE_OPTIONS = [
  { value: 'airport', label: 'Airport Transfer' },
  { value: 'corporate', label: 'Corporate / Executive' },
  { value: 'wedding', label: 'Wedding / Event' },
  { value: 'hourly', label: 'Hourly Service' },
  { value: 'cruise', label: 'Cruise Port Transfer' },
  { value: 'group', label: 'Group / Sprinter Van' },
  { value: 'other', label: 'Other' },
];

const VEHICLE_OPTIONS = [
  { value: '', label: 'No preference — recommend best fit' },
  { value: 'sedan', label: 'Luxury Sedan (Mercedes E-Class / BMW 7 / Cadillac CT)' },
  { value: 'executive_sedan', label: 'Executive Sedan (Mercedes S-Class)' },
  { value: 'suv', label: 'Luxury SUV (Cadillac Escalade / Chevy Suburban)' },
  { value: 'midsize_suv', label: 'Midsize SUV (up to 5 passengers, extra luggage room)' },
  { value: 'sprinter', label: 'Mercedes Sprinter Van (up to 14 passengers)' },
  { value: 'other', label: 'Other / Special Request' },
];

const HEARD_FROM_OPTIONS = [
  { value: '', label: 'Please select…' },
  { value: 'google', label: 'Google Search' },
  { value: 'social', label: 'Social Media' },
  { value: 'referral', label: 'Referral' },
  { value: 'hotel', label: 'Hotel Partner' },
  { value: 'other', label: 'Other' },
];

const CONTACT_METHOD_OPTIONS = [
  { value: 'email', label: '📧 Email' },
  { value: 'phone_text', label: '📱 Phone / Text' },
];

const INITIAL = {
  full_name: '',
  phone: '',
  preferred_contact: '',
  email: '',
  pickup_location: '',
  dropoff_location: '',
  pickup_datetime: '',
  passengers: 1,
  service_type: 'airport',
  vehicle_preference: '',
  heard_from: '',
  notes: '',
  sms_consent: false,
};

export const QuoteForm = () => {
  const [form, setForm] = useState(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const API_URL = process.env.REACT_APP_BACKEND_URL;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? checked
          : name === 'passengers'
          ? Number(value) || 1
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.full_name || !form.phone || !form.preferred_contact || !form.email || !form.pickup_location) {
      toast.error('Please fill in all required fields');
      return;
    }
    if (!form.sms_consent) {
      toast.error('Please agree to the SMS consent to continue');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/api/quote-requests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || 'Request failed');
      }
      setSuccess(true);
      setForm(INITIAL);
      toast.success('Quote request received! We will call you back shortly.');
    } catch (err) {
      toast.error(`Could not submit: ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div
        data-testid="quote-form-success"
        className="bg-gradient-to-br from-[#D4AF37]/15 to-black border border-[#D4AF37]/40 rounded-2xl p-10 text-center"
      >
        <CheckCircle2 className="h-14 w-14 text-[#D4AF37] mx-auto mb-4" />
        <h3 className="text-3xl font-bold text-white mb-3">Quote Request Received</h3>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Thank you! A BWI Chauffeur reservation specialist will contact you within minutes
          with your custom quote. For immediate assistance, call us now.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            data-testid="quote-success-call"
            href="tel:+18776790100"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#F4E5C3] transition"
          >
            <Phone className="h-4 w-4" /> 877-679-0100
          </a>
          <Button
            data-testid="quote-success-new"
            variant="outline"
            onClick={() => setSuccess(false)}
            className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
          >
            Submit Another Quote
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      data-testid="quote-form-card"
      className="bg-gradient-to-br from-gray-900 to-black border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-10 shadow-2xl"
    >
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full mb-4">
          <Zap className="h-3.5 w-3.5" /> Fast response guaranteed
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3">
          Get a <span className="text-[#D4AF37]">Free Quote</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-base">
          Tell us about your trip and we&apos;ll get back to you with a custom quote in minutes.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" data-testid="quote-form">
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Full Name *" name="full_name" value={form.full_name} onChange={handleChange} required placeholder="John Smith" />
          <Field label="Phone *" name="phone" value={form.phone} onChange={handleChange} required type="tel" placeholder="(555) 123-4567" />
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Contact Method *</label>
          <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Preferred Contact Method">
            {CONTACT_METHOD_OPTIONS.map((opt) => {
              const active = form.preferred_contact === opt.value;
              return (
                <label
                  key={opt.value}
                  data-testid={`quote-contact-method-${opt.value}`}
                  className={`flex items-center justify-center gap-2 cursor-pointer rounded-lg border px-4 py-3 text-sm font-medium transition ${
                    active
                      ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white shadow-md shadow-[#D4AF37]/10'
                      : 'border-gray-700 bg-black/60 text-gray-300 hover:border-[#D4AF37]/60'
                  }`}
                >
                  <input
                    type="radio"
                    name="preferred_contact"
                    value={opt.value}
                    checked={active}
                    onChange={handleChange}
                    required
                    className="sr-only"
                  />
                  {opt.label}
                </label>
              );
            })}
          </div>
        </div>

        <Field label="Email *" name="email" value={form.email} onChange={handleChange} required type="email" placeholder="you@example.com" />

        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Pickup Location *" name="pickup_location" value={form.pickup_location} onChange={handleChange} required placeholder="BWI Airport, Terminal A" />
          <Field label="Drop-off Location" name="dropoff_location" value={form.dropoff_location} onChange={handleChange} placeholder="Downtown Baltimore, MD" />
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          <Field label="Pickup Date & Time" name="pickup_datetime" value={form.pickup_datetime} onChange={handleChange} type="datetime-local" />
          <Field label="Passengers" name="passengers" value={form.passengers} onChange={handleChange} type="number" min="1" max="50" />
          <Select
            label="Service Type"
            name="service_type"
            value={form.service_type}
            onChange={handleChange}
            options={SERVICE_OPTIONS}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <Select
            label="Vehicle Preference"
            name="vehicle_preference"
            value={form.vehicle_preference}
            onChange={handleChange}
            options={VEHICLE_OPTIONS}
          />
          <Select
            label="How did you hear about us?"
            name="heard_from"
            value={form.heard_from}
            onChange={handleChange}
            options={HEARD_FROM_OPTIONS}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Additional Notes</label>
          <textarea
            data-testid="quote-notes"
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows={3}
            placeholder="Flight info, special requests, number of bags..."
            className="w-full bg-black/60 border border-gray-700 focus:border-[#D4AF37] text-white rounded-lg px-4 py-3 outline-none transition resize-none"
          />
        </div>

        {/* SMS consent (required) */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="sms_consent"
            name="sms_consent"
            checked={form.sms_consent}
            onChange={handleChange}
            required
            data-testid="quote-sms-consent"
            className="mt-0.5 h-5 w-5 flex-shrink-0 cursor-pointer rounded border-gray-700 bg-black/60 accent-[#D4AF37] focus:ring-[#D4AF37] focus:ring-offset-0"
          />
          <label htmlFor="sms_consent" className="text-xs text-gray-400 leading-relaxed cursor-pointer">
            I consent to receive conversational and informational SMS messages from BWI Chauffeur.
            BWI Chauffeur will not share your mobile opt-in information with third parties.
            Reply STOP to opt-out; reply HELP for support; message &amp; data rates may apply;
            messaging frequency may vary.{' '}
            <Link to="/privacy-policy" className="text-[#D4AF37] hover:underline">
              View our Privacy Policy at bwichauffeur.com/privacy-policy
            </Link>
            .
          </label>
        </div>

        <Button
          data-testid="quote-submit-btn"
          type="submit"
          disabled={submitting}
          className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold text-base py-6 rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all disabled:opacity-60"
        >
          {submitting ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" /> Sending...
            </>
          ) : (
            <>
              <Send className="h-5 w-5 mr-2" /> Get My Free Quote
            </>
          )}
        </Button>

        <div className="pt-5 border-t border-gray-800">
          <p className="text-center text-sm text-gray-500 mb-3">Or contact us directly</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              data-testid="quote-call-now"
              href="tel:+18776790100"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#F4E5C3] transition"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              data-testid="quote-email-us"
              href="mailto:info@bwichauffeur.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37] hover:text-black transition"
            >
              <Mail className="h-4 w-4" /> Email Us
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

const Field = ({ label, name, value, onChange, type = 'text', placeholder, required, min, max }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
    <input
      data-testid={`quote-field-${name}`}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      min={min}
      max={max}
      className="w-full bg-black/60 border border-gray-700 focus:border-[#D4AF37] text-white rounded-lg px-4 py-3 outline-none transition placeholder:text-gray-600"
    />
  </div>
);

const Select = ({ label, name, value, onChange, options }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
    <select
      data-testid={`quote-field-${name}`}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full bg-black/60 border border-gray-700 focus:border-[#D4AF37] text-white rounded-lg px-4 py-3 outline-none transition"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  </div>
);

export default QuoteForm;
