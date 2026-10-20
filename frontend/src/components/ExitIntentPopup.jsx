import React, { useEffect, useRef, useState } from 'react';
import { X, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { sanitizePhone, isValidPhone } from '../lib/phone';

const inputCls =
  'w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-white placeholder-gray-500 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/60 focus:border-[#D4AF37]';

// Desktop-only: fires once when the mouse leaves through the top of the
// viewport (the classic "about to close the tab" signal). One-shot per
// session (and a ref guard against the same session re-arming mid-render),
// and skipped entirely if a lead was already captured this session.
const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const firedRef = useRef(false);

  useEffect(() => {
    const isDesktop =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isDesktop) return undefined;

    let shown = false;
    try {
      shown = Boolean(
        sessionStorage.getItem('exitIntentShown') || sessionStorage.getItem('leadSubmitted')
      );
    } catch {
      // sessionStorage unavailable — fall through, rely on firedRef only.
    }
    if (shown) return undefined;

    const onMouseOut = (e) => {
      if (firedRef.current) return;
      if (e.clientY > 0 || e.relatedTarget) return;
      firedRef.current = true;
      try {
        sessionStorage.setItem('exitIntentShown', '1');
      } catch {
        // non-fatal
      }
      setOpen(true);
    };

    document.addEventListener('mouseout', onMouseOut);
    return () => document.removeEventListener('mouseout', onMouseOut);
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

    setLoading(true);
    try {
      const res = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'exit_intent',
          name: name.trim(),
          phone: phone.trim(),
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
      console.error('Exit-intent popup submit failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={close}
      data-testid="exit-intent-backdrop"
    >
      <div
        className="relative w-full max-w-md rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-b from-gray-900 to-black p-6 shadow-2xl shadow-black/60 sm:p-8"
        onClick={(e) => e.stopPropagation()}
        data-testid="exit-intent-popup"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          data-testid="exit-intent-close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {done ? (
          <div className="py-6 text-center" data-testid="exit-intent-success">
            <h3 className="text-2xl font-bold text-white">Got it!</h3>
            <p className="mt-2 text-sm text-gray-300">
              A reservation specialist will reach out shortly with your instant quote.
              Need us sooner? Call{' '}
              <a href="tel:+18776091919" className="font-semibold text-[#D4AF37] hover:underline">
                877-609-1919
              </a>
              .
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-white">
              Before you go — get an <span className="text-[#D4AF37]">instant quote</span>
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Just your name and number — a reservation specialist will text or call you
              right back.
            </p>

            <form onSubmit={submit} className="mt-6 space-y-3" data-testid="exit-intent-form" noValidate>
              <input
                type="text"
                placeholder="Full Name"
                className={inputCls}
                value={name}
                onChange={(e) => setName(e.target.value)}
                data-testid="exit-intent-name"
                autoComplete="name"
              />
              <input
                type="tel"
                inputMode="tel"
                placeholder="Phone Number"
                className={inputCls}
                value={phone}
                onChange={(e) => setPhone(sanitizePhone(e.target.value))}
                data-testid="exit-intent-phone"
                autoComplete="tel"
              />
              <button
                type="submit"
                disabled={loading}
                data-testid="exit-intent-submit"
                className="gold-gradient flex w-full items-center justify-center gap-2 rounded-full py-3 font-bold text-black shadow-[0_12px_40px_-10px_rgba(212,175,55,0.7)] transition-[filter] hover:brightness-105 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  'Get My Instant Quote'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ExitIntentPopup;
