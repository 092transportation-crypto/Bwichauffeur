import React, { useState } from 'react';
import { MapPin, Calendar, Phone, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import TrustSignals from './TrustSignals';

const inputClass =
  'w-full pl-10 pr-3 py-3 bg-black/70 border border-gray-700 focus:border-[#D4AF37] text-white rounded-lg outline-none transition placeholder:text-gray-500 text-sm';

// Compact hero quote form: Pickup, Dropoff, Date, Phone.
const QuickQuoteForm = () => {
  const [form, setForm] = useState({ pickup_location: '', dropoff_location: '', pickup_datetime: '', phone: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      const res = await fetch('/api/quote-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, notes: 'Source: Homepage hero quick quote' }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || 'Request failed');
      }
      setSent(true);
      setForm({ pickup_location: '', dropoff_location: '', pickup_datetime: '', phone: '' });
      toast.success('Quote request received! We respond within 15 minutes.');
    } catch (err) {
      toast.error(`Could not submit: ${err.message}`);
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div
        data-testid="quick-quote-success"
        className="max-w-3xl mx-auto bg-black/70 backdrop-blur-sm border border-[#D4AF37]/40 rounded-2xl p-8 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-[#D4AF37] mx-auto mb-3" />
        <p className="text-2xl font-bold text-white mb-2">Quote Request Received</p>
        <p className="text-gray-300 text-sm mb-4">We&apos;ll call or text you within 15 minutes with your flat rate.</p>
        <button
          onClick={() => setSent(false)}
          data-testid="quick-quote-again"
          className="text-[#D4AF37] underline text-sm hover:text-[#F4E5C3]"
        >
          Request another quote
        </button>
      </div>
    );
  }

  return (
    <div
      data-testid="quick-quote-card"
      className="max-w-3xl mx-auto bg-black/70 backdrop-blur-sm border border-[#D4AF37]/40 rounded-2xl p-5 sm:p-6 text-left"
    >
      <p className="text-xl sm:text-2xl font-bold text-white mb-1 text-center">
        Get an <span className="text-[#D4AF37]">Instant Quote</span>
      </p>
      <p className="text-gray-400 text-xs sm:text-sm mb-4 text-center">We respond within 15 minutes</p>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3" data-testid="quick-quote-form">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#D4AF37]/60" />
          <input type="text" name="pickup_location" value={form.pickup_location} onChange={handleChange} required
            placeholder="Pickup (e.g. BWI Airport) *" className={inputClass} />
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#D4AF37]/60" />
          <input type="text" name="dropoff_location" value={form.dropoff_location} onChange={handleChange} required
            placeholder="Drop-off Location *" className={inputClass} />
        </div>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#D4AF37]/60" />
          <input type="date" name="pickup_datetime" value={form.pickup_datetime} onChange={handleChange} required
            aria-label="Pickup date" className={inputClass} />
        </div>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#D4AF37]/60" />
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required
            placeholder="Phone *" className={inputClass} />
        </div>
        <button type="submit" disabled={sending}
          className="sm:col-span-2 w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#D4AF37]/50 disabled:opacity-60 flex items-center justify-center gap-2 transition-all">
          {sending ? 'Sending...' : (<><Send className="h-4 w-4" /> Get Quote</>)}
        </button>
      </form>
      <TrustSignals className="mt-4" />
    </div>
  );
};

export default QuickQuoteForm;
