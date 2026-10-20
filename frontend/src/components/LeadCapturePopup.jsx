import React, { useEffect, useState } from 'react';
import { X, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { sanitizePhone, isValidPhone } from '../lib/phone';

// Mirrors lib/http.js's isEmail exactly.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputCls =
  'w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-white placeholder-gray-500 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/60 focus:border-[#D4AF37]';

// Appears 30s after mount — once per session, and never if a lead was
// already captured this session (chat booking, exit-intent popup, or an
// earlier visit to this popup).
const LeadCapturePopup = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        if (sessionStorage.getItem('leadPopupShown') || sessionStorage.getItem('leadSubmitted')) {
          return;
        }
        sessionStorage.setItem('leadPopupShown', '1');
      } catch {
        // sessionStorage unavailable (private browsing, blocked storage, …) —
        // fall through and show it anyway; non-fatal either way.
      }
      setOpen(true);
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  if (!open) return null;

  const close = () => setOpen(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error('Please enter your name.');
      return;
    }
    if (!isValidPhone(phone)) {
      toast.error('Please enter a valid phone number (digits only, at least 10).');
      return;
    }
    if (email.trim() && !EMAIL_RE.test(email.trim())) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'lead_popup',
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
        }),
      });
      if (!res.ok) throw new Error('lead-capture request failed');
      try {
        sessionStorage.setItem('leadSubmitted', '1');
      } catch {
        // non-fatal
      }
      setDone(true);
    } catch (err) {
      toast.error('Something went wrong. Please call 877-609-1919.');
      // eslint-disable-next-line no-console
      console.error('Lead popup submit failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={close}
      data-testid="lead-popup-backdrop"
    >
      <div
        className="relative w-full max-w-md rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-b from-gray-900 to-black p-6 shadow-2xl shadow-black/60 sm:p-8"
        onClick={(e) => e.stopPropagation()}
        data-testid="lead-popup"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          data-testid="lead-popup-close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {done ? (
          <div className="py-6 text-center" data-testid="lead-popup-success">
            <h3 className="text-2xl font-bold text-white">You&rsquo;re all set!</h3>
            <p className="mt-2 text-sm text-gray-300">
              A reservation specialist will reach out shortly with your free quote. Need
              us sooner? Call{' '}
              <a href="tel:+18776091919" className="font-semibold text-[#D4AF37] hover:underline">
                877-609-1919
              </a>
              .
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-white">
              Get a <span className="text-[#D4AF37]">free quote</span> in 60 seconds
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Leave your info and a reservation specialist will text or call you right back.
            </p>

            <form onSubmit={submit} className="mt-6 space-y-3" data-testid="lead-popup-form" noValidate>
              <input
                type="text"
                placeholder="Full Name"
                className={inputCls}
                value={name}
                onChange={(e) => setName(e.target.value)}
                data-testid="lead-popup-name"
                autoComplete="name"
              />
              <input
                type="tel"
                inputMode="tel"
                placeholder="Phone Number"
                className={inputCls}
                value={phone}
                onChange={(e) => setPhone(sanitizePhone(e.target.value))}
                data-testid="lead-popup-phone"
                autoComplete="tel"
              />
              <input
                type="email"
                placeholder="Email Address"
                className={inputCls}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="lead-popup-email"
                autoComplete="email"
              />
              <button
                type="submit"
                disabled={loading}
                data-testid="lead-popup-submit"
                className="gold-gradient flex w-full items-center justify-center gap-2 rounded-full py-3 font-bold text-black shadow-[0_12px_40px_-10px_rgba(212,175,55,0.7)] transition-[filter] hover:brightness-105 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  'Get My Free Quote'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LeadCapturePopup;
