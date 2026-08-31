import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import {
  Send,
  Loader2,
  Phone,
  MessageSquare,
  Mail,
  Plane,
  Briefcase,
  Heart,
  PartyPopper,
  Clock,
  Minus,
  Plus,
  Car,
  CarFront,
  Bus,
  BadgeCheck,
  ShieldCheck,
  BadgeDollarSign,
  UserCheck,
} from "lucide-react";
import { AddressAutocomplete } from "./AddressAutocomplete";

// Inquiries POST to the same-origin Vercel serverless function
// (api/quote-requests), which emails NOTIFICATION_EMAIL.
const API_BASE = process.env.REACT_APP_BACKEND_URL || "";

const GOLD = "#D4AF37";

const CONTACT_METHODS = [
  { value: "phone", label: "Phone", icon: Phone },
  { value: "text", label: "Text", icon: MessageSquare },
  { value: "email", label: "Email", icon: Mail },
];

// Values match the codes the existing backend/admin emails expect.
const SERVICE_OPTIONS = [
  { value: "airport", label: "Airport Transfer", icon: Plane },
  { value: "corporate", label: "Corporate", icon: Briefcase },
  { value: "wedding", label: "Wedding", icon: Heart },
  { value: "special_event", label: "Special Event", icon: PartyPopper },
  { value: "hourly", label: "Hourly", icon: Clock },
];

// The 8 fleet categories — kept in sync with the Fleet section and 92limo.com.
const VEHICLE_OPTIONS = [
  { value: "Business Sedan", icon: Car },
  { value: "First Class Sedan", icon: Car },
  { value: "Midsize SUV", icon: CarFront },
  { value: "Luxury SUV", icon: CarFront },
  { value: "Premium SUV", icon: CarFront },
  { value: "Sprinter Shuttle", icon: Bus },
  { value: "Sprinter Executive", icon: Bus },
  { value: "Sprinter Limo", icon: Bus },
];

const TRUST_BADGES = [
  { icon: BadgeCheck, label: "MD PSC Carrier No. 6325", sub: "Official Carrier License" },
  { icon: ShieldCheck, label: "Licensed & Insured", sub: "Fully Certified Fleet" },
  { icon: Clock, label: "24/7 Available", sub: "Day or Night" },
  { icon: Plane, label: "Flight Tracking Included", sub: "We Watch Your Arrival" },
  { icon: BadgeDollarSign, label: "Flat Rates", sub: "No Surge Pricing" },
  { icon: UserCheck, label: "Professional Chauffeurs", sub: "Vetted & Uniformed" },
];

const EMPTY = {
  full_name: "",
  phone: "",
  email: "",
  preferred_contact: "",
  service_type: "",
  vehicle_preference: "",
  flight_number: "",
  pickup_location: "",
  dropoff_location: "",
  date: "",
  time: "",
  passengers: 1,
  notes: "",
  sms_consent: false,
};

// Fields that count toward the completion meter (vehicle/notes optional).
const PROGRESS_FIELDS = [
  "full_name", "phone", "email", "preferred_contact",
  "service_type", "pickup_location", "dropoff_location", "date", "time",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Staggered entrance for the form fields.
const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

/*
 * Floating-label geometry: inputs reserve 28px of top padding (pt-7); the
 * floated label lives at top-2.5 (10px) in 10px type, so label and value
 * never overlap — including native date/time inputs whose value is always
 * rendered by the browser.
 */
const inputBase =
  "peer block w-full min-h-[58px] rounded-xl border bg-white/[0.04] px-4 pt-7 pb-2.5 text-white placeholder-transparent transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/60 focus:border-[#D4AF37]";
const labelBase =
  "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 transition-all duration-200 " +
  "peer-focus:top-2.5 peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.14em] peer-focus:text-[#D4AF37] " +
  "peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.14em] peer-[:not(:placeholder-shown)]:text-gray-500";
// Native date/time inputs always render a value, so their label is permanently floated.
const staticLabel =
  "pointer-events-none absolute left-4 top-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-gray-500";
const groupLabel =
  "mb-3 block text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400";

const borderCls = (invalid) => (invalid ? "border-red-400/70" : "border-white/15");

// Selected state for pill buttons — its own background per button.
function PillFill({ active, rounded = "rounded-full" }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.span
          className={`absolute inset-0 ${rounded} gold-gradient`}
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.75 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </AnimatePresence>
  );
}

// One gold particle of the success burst.
function Particle({ index }) {
  const angle = (index / 22) * Math.PI * 2 + Math.random() * 0.4;
  const dist = 50 + Math.random() * 80;
  const size = 4 + Math.random() * 6;
  const colors = ["#F4E5C3", "#D4AF37", "#B8933A", "#FFFFFF", "#D4AF37"];
  return (
    <motion.span
      className="absolute left-1/2 top-1/2 rounded-full"
      style={{ width: size, height: size, background: colors[index % colors.length] }}
      initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
      animate={{
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
        scale: [0, 1.2, 0.9],
        opacity: [1, 1, 0],
      }}
      transition={{ duration: 1 + Math.random() * 0.4, delay: 0.2, ease: "easeOut" }}
    />
  );
}

// Thank-you banner shown above the form after a successful submit.
// The form itself stays mounted (cleared) so the page never looks empty.
function SuccessBanner({ onDismiss }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden"
      data-testid="inquiry-success"
    >
      <div className="relative mx-6 mt-6 rounded-2xl border border-[#D4AF37]/50 bg-[#D4AF37]/[0.08] px-6 py-8 text-center sm:mx-10 sm:mt-8">
        <div className="relative mx-auto mb-4 h-16 w-16">
          {[...Array(22)].map((_, i) => (
            <Particle key={i} index={i} />
          ))}
          <motion.div
            className="relative flex h-16 w-16 items-center justify-center rounded-full gold-gradient shadow-[0_0_40px_-8px_rgba(212,175,55,0.8)]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.1 }}
          >
            <svg viewBox="0 0 52 52" className="h-8 w-8">
              <motion.path
                d="M14 27 L23 36 L38 18"
                fill="none"
                stroke="#000000"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              />
            </svg>
          </motion.div>
        </div>
        <h3 className="text-2xl font-bold text-white">Quote Request Received!</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-gray-300">
          A BWI Chauffeur reservation specialist will contact you within minutes
          with your custom quote. Need us sooner? Call{" "}
          <a href="tel:+18776091919" className="font-semibold text-[#D4AF37] hover:underline">
            877-609-1919
          </a>
          .
        </p>
        <button
          type="button"
          onClick={onDismiss}
          data-testid="inquiry-success-dismiss"
          className="mt-4 rounded-full border border-[#D4AF37]/50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#D4AF37] transition-colors hover:bg-[#D4AF37]/10"
        >
          Dismiss
        </button>
      </div>
    </motion.div>
  );
}

export const InquiryForm = () => {
  const [form, setForm] = useState(EMPTY);
  const [invalid, setInvalid] = useState([]);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [shaking, setShaking] = useState(false);
  const cardRef = useRef(null);

  const set = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    setInvalid((keys) => keys.filter((key) => key !== k));
  };

  const progress = useMemo(() => {
    const filled = PROGRESS_FIELDS.filter((k) => String(form[k]).trim()).length;
    return Math.round((filled / PROGRESS_FIELDS.length) * 100);
  }, [form]);

  // Bring the thank-you banner into view when it appears.
  useEffect(() => {
    if (done && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [done]);

  const submit = async (e) => {
    e.preventDefault();
    const missing = PROGRESS_FIELDS.filter((k) => !String(form[k]).trim());
    if (form.email && !EMAIL_RE.test(form.email) && !missing.includes("email")) {
      missing.push("email");
    }
    if (!form.sms_consent) missing.push("sms_consent");
    if (missing.length) {
      setInvalid(missing);
      setShaking(true);
      toast.error(
        missing.length === 1 && missing[0] === "sms_consent"
          ? "Please agree to the SMS consent to continue."
          : "Please complete the highlighted fields."
      );
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/quote-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: form.full_name,
          phone: form.phone,
          email: form.email,
          preferred_contact: form.preferred_contact,
          service_type: form.service_type,
          vehicle_preference: form.vehicle_preference || "No preference",
          // Flight number only applies to airport transfers.
          flight_number:
            form.service_type === "airport" ? form.flight_number.trim() : "",
          pickup_location: form.pickup_location,
          dropoff_location: form.dropoff_location,
          pickup_datetime: `${form.date} ${form.time}`,
          passengers: form.passengers,
          notes: form.notes.trim(),
          sms_consent: form.sms_consent,
        }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || "Request failed");
      }
      setForm(EMPTY);
      setInvalid([]);
      setDone(true);
    } catch (err) {
      toast.error("Something went wrong. Please call 877-609-1919.");
      // eslint-disable-next-line no-console
      console.error("Inquiry submit failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="inquiry-wrapper">
      <motion.div
        ref={cardRef}
        className="relative scroll-mt-32 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-black shadow-[0_30px_80px_-30px_rgba(212,175,55,0.35)]"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="h-1 w-full rounded-t-3xl gold-gradient" aria-hidden="true" />

        <AnimatePresence>
          {done && <SuccessBanner key="success" onDismiss={() => setDone(false)} />}
        </AnimatePresence>

        {/* Progress indicator */}
        <div className="px-6 pt-6 sm:px-10 sm:pt-8">
          <div className="mb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.14em]">
            <span className="text-gray-400">Trip Details</span>
            <span className="tabnums text-[#D4AF37]" data-testid="inquiry-progress">
              {progress}% complete
            </span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full gold-gradient"
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            />
          </div>
        </div>

        <motion.form
          data-testid="inquiry-form"
          onSubmit={submit}
          noValidate
          className="p-6 sm:p-10"
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          animate={shaking ? { x: [0, -12, 12, -9, 9, -5, 5, 0] } : {}}
          transition={{ duration: 0.5 }}
          onAnimationComplete={() => setShaking(false)}
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Full Name */}
            <motion.div variants={itemVariants} className="relative">
              <input
                id="inq-name"
                data-testid="inquiry-name"
                className={`${inputBase} ${borderCls(invalid.includes("full_name"))}`}
                placeholder="Full Name"
                autoComplete="name"
                value={form.full_name}
                onChange={(e) => set("full_name", e.target.value)}
              />
              <label htmlFor="inq-name" className={labelBase}>Full Name *</label>
            </motion.div>

            {/* Phone */}
            <motion.div variants={itemVariants} className="relative">
              <input
                id="inq-phone"
                data-testid="inquiry-phone"
                type="tel"
                className={`${inputBase} ${borderCls(invalid.includes("phone"))}`}
                placeholder="Phone Number"
                autoComplete="tel"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
              />
              <label htmlFor="inq-phone" className={labelBase}>Phone Number *</label>
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants} className="relative md:col-span-2">
              <input
                id="inq-email"
                data-testid="inquiry-email"
                type="email"
                className={`${inputBase} ${borderCls(invalid.includes("email"))}`}
                placeholder="Email Address"
                autoComplete="email"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
              />
              <label htmlFor="inq-email" className={labelBase}>Email Address *</label>
            </motion.div>

            {/* Preferred Contact */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <span className={groupLabel}>
                Preferred Contact *
                {invalid.includes("preferred_contact") && (
                  <span className="ml-2 normal-case tracking-normal text-red-400">— pick one</span>
                )}
              </span>
              <div className="grid grid-cols-3 gap-2 sm:max-w-md">
                {CONTACT_METHODS.map(({ value, label, icon: Icon }) => {
                  const active = form.preferred_contact === value;
                  return (
                    <motion.button
                      key={value}
                      type="button"
                      data-testid={`inquiry-contact-${value}`}
                      aria-pressed={active}
                      whileTap={{ scale: 0.94 }}
                      onClick={() => set("preferred_contact", value)}
                      className={`relative flex min-h-[48px] items-center justify-center gap-2 rounded-xl border text-sm font-semibold transition-colors duration-300 ${
                        active
                          ? "border-transparent text-black"
                          : "border-white/15 text-gray-300 hover:border-[#D4AF37]/60 hover:text-white"
                      }`}
                    >
                      <PillFill active={active} rounded="rounded-xl" />
                      <span className="relative flex items-center gap-2">
                        <Icon size={15} /> {label}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Service Type */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <span className={groupLabel}>
                Service Type *
                {invalid.includes("service_type") && (
                  <span className="ml-2 normal-case tracking-normal text-red-400">— pick one</span>
                )}
              </span>
              <div className="flex flex-wrap gap-2">
                {SERVICE_OPTIONS.map(({ value, label, icon: Icon }) => {
                  const active = form.service_type === value;
                  return (
                    <motion.button
                      key={value}
                      type="button"
                      data-testid={`inquiry-service-${value}`}
                      aria-pressed={active}
                      whileTap={{ scale: 0.94 }}
                      onClick={() => set("service_type", value)}
                      className={`relative flex min-h-[44px] items-center gap-2 rounded-full border px-5 text-sm font-semibold transition-colors duration-300 ${
                        active
                          ? "border-transparent text-black"
                          : "border-white/15 text-gray-300 hover:border-[#D4AF37]/60 hover:text-white"
                      }`}
                    >
                      <PillFill active={active} />
                      <span className="relative flex items-center gap-2">
                        <Icon size={15} /> {label}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Flight number — airport transfers only */}
            {form.service_type === "airport" && (
              <motion.div
                variants={itemVariants}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative md:col-span-2"
              >
                <label htmlFor="inq-flight" className={staticLabel}>Flight Number (optional)</label>
                <input
                  id="inq-flight"
                  data-testid="inquiry-flight-number"
                  type="text"
                  placeholder="e.g. AA1234"
                  className="block w-full min-h-[58px] rounded-xl border border-white/15 bg-white/[0.04] px-4 pt-7 pb-2.5 text-white placeholder:text-gray-500 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/60 focus:border-[#D4AF37]"
                  value={form.flight_number}
                  onChange={(e) => set("flight_number", e.target.value)}
                />
              </motion.div>
            )}

            {/* Vehicle Type */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <span className={groupLabel}>
                Vehicle Type
                <span className="ml-2 normal-case tracking-normal text-gray-500">— optional, tap again to unselect</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {VEHICLE_OPTIONS.map(({ value, icon: Icon }) => {
                  const active = form.vehicle_preference === value;
                  return (
                    <motion.button
                      key={value}
                      type="button"
                      data-testid={`inquiry-vehicle-${value.toLowerCase().replace(/\s+/g, "-")}`}
                      aria-pressed={active}
                      whileTap={{ scale: 0.94 }}
                      onClick={() => set("vehicle_preference", active ? "" : value)}
                      className={`relative flex min-h-[44px] items-center gap-2 rounded-full border px-5 text-sm font-semibold transition-colors duration-300 ${
                        active
                          ? "border-transparent text-black"
                          : "border-white/15 text-gray-300 hover:border-[#D4AF37]/60 hover:text-white"
                      }`}
                    >
                      <PillFill active={active} />
                      <span className="relative flex items-center gap-2">
                        <Icon size={15} /> {value}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Pickup */}
            <motion.div variants={itemVariants}>
              <AddressAutocomplete
                id="inq-pickup"
                testId="inquiry-pickup"
                inputClassName={`${inputBase} ${borderCls(invalid.includes("pickup_location"))}`}
                placeholder="Pickup Location"
                value={form.pickup_location}
                onChange={(v) => set("pickup_location", v)}
                label={<label htmlFor="inq-pickup" className={labelBase}>Pickup Location *</label>}
              />
            </motion.div>

            {/* Drop-off */}
            <motion.div variants={itemVariants}>
              <AddressAutocomplete
                id="inq-dropoff"
                testId="inquiry-dropoff"
                inputClassName={`${inputBase} ${borderCls(invalid.includes("dropoff_location"))}`}
                placeholder="Drop-off Location"
                value={form.dropoff_location}
                onChange={(v) => set("dropoff_location", v)}
                label={<label htmlFor="inq-dropoff" className={labelBase}>Drop-off Location *</label>}
              />
            </motion.div>

            {/* Date */}
            <motion.div variants={itemVariants} className="relative">
              <label htmlFor="inq-date" className={staticLabel}>Date *</label>
              <input
                id="inq-date"
                data-testid="inquiry-date"
                type="date"
                style={{ colorScheme: "dark" }}
                className={`block w-full min-h-[58px] appearance-none rounded-xl border bg-white/[0.04] px-4 pt-7 pb-2.5 text-left text-white transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/60 focus:border-[#D4AF37] ${borderCls(invalid.includes("date"))}`}
                value={form.date}
                onChange={(e) => set("date", e.target.value)}
              />
            </motion.div>

            {/* Time */}
            <motion.div variants={itemVariants} className="relative">
              <label htmlFor="inq-time" className={staticLabel}>Time *</label>
              <input
                id="inq-time"
                data-testid="inquiry-time"
                type="time"
                style={{ colorScheme: "dark" }}
                className={`block w-full min-h-[58px] appearance-none rounded-xl border bg-white/[0.04] px-4 pt-7 pb-2.5 text-left text-white transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/60 focus:border-[#D4AF37] ${borderCls(invalid.includes("time"))}`}
                value={form.time}
                onChange={(e) => set("time", e.target.value)}
              />
            </motion.div>

            {/* Passengers stepper — full row so it never crowds neighbors */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <div className="flex min-h-[58px] flex-wrap items-center justify-between gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-500">
                  Passengers <span className="text-gray-600">(1–14)</span>
                </span>
                <div className="flex shrink-0 items-center gap-2">
                  <motion.button
                    type="button"
                    aria-label="Fewer passengers"
                    data-testid="inquiry-passengers-minus"
                    whileTap={{ scale: 0.85 }}
                    onClick={() => set("passengers", Math.max(1, form.passengers - 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-300 transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  >
                    <Minus size={16} />
                  </motion.button>
                  <div className="relative h-10 w-12 overflow-hidden text-center">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.span
                        key={form.passengers}
                        data-testid="inquiry-passengers-value"
                        className="tabnums absolute inset-0 flex items-center justify-center text-lg font-bold text-white"
                        initial={{ y: 16, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -16, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                      >
                        {form.passengers}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <motion.button
                    type="button"
                    aria-label="More passengers"
                    data-testid="inquiry-passengers-plus"
                    whileTap={{ scale: 0.85 }}
                    onClick={() => set("passengers", Math.min(14, form.passengers + 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-300 transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  >
                    <Plus size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Notes */}
            <motion.div variants={itemVariants} className="relative md:col-span-2">
              <textarea
                id="inq-notes"
                data-testid="inquiry-notes"
                rows={3}
                className={`${inputBase} resize-none border-white/15`}
                placeholder="Notes / Special Requests"
                value={form.notes}
                onChange={(e) => set("notes", e.target.value)}
              />
              <label
                htmlFor="inq-notes"
                className={
                  "pointer-events-none absolute left-4 top-7 text-sm text-gray-400 transition-all duration-200 " +
                  "peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.14em] peer-focus:text-[#D4AF37] " +
                  "peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-bold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.14em] peer-[:not(:placeholder-shown)]:text-gray-500"
                }
              >
                Notes / Special Requests
              </label>
            </motion.div>

            {/* SMS consent */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <label
                className={`flex cursor-pointer select-none items-start gap-3 rounded-xl border px-4 py-3 transition-colors ${
                  invalid.includes("sms_consent") ? "border-red-400/70" : "border-white/10"
                }`}
              >
                <input
                  type="checkbox"
                  data-testid="inquiry-sms-consent"
                  checked={form.sms_consent}
                  onChange={(e) => set("sms_consent", e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[#D4AF37]"
                />
                <span className="text-xs leading-relaxed text-gray-400">
                  I agree to receive SMS messages from BWI Chauffeur related to my
                  quote and reservation. Reply STOP to opt out at any time. Message
                  and data rates may apply. See our{" "}
                  <Link to="/privacy-policy" className="font-medium text-[#D4AF37] underline hover:text-[#F4E5C3]">
                    privacy policy
                  </Link>
                  . *
                </span>
              </label>
            </motion.div>
          </div>

          {/* Submit */}
          <motion.div variants={itemVariants}>
            <motion.button
              type="submit"
              data-testid="inquiry-submit"
              disabled={loading}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.97 }}
              className="btn-shimmer relative mt-8 flex min-h-[56px] w-full items-center justify-center gap-2 overflow-hidden rounded-full gold-gradient font-bold text-black shadow-[0_12px_40px_-10px_rgba(212,175,55,0.7)] transition-[filter] hover:brightness-105 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Sending…
                </>
              ) : (
                <>
                  <Send size={18} /> Request My Quote
                </>
              )}
            </motion.button>
          </motion.div>

          <motion.p variants={itemVariants} className="mt-4 text-center text-xs text-gray-500">
            No payment required — we confirm every reservation personally.
          </motion.p>
        </motion.form>
      </motion.div>

      {/* Trust badges */}
      <motion.ul
        data-testid="inquiry-trust-badges"
        className="mt-10 grid grid-cols-1 gap-3 min-[430px]:grid-cols-2 sm:grid-cols-3"
        variants={listVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        {TRUST_BADGES.map(({ icon: Icon, label, sub }) => (
          <motion.li
            key={label}
            variants={itemVariants}
            className="flex items-center gap-3 rounded-xl border border-[#D4AF37]/25 bg-white/[0.03] px-4 py-3 transition-colors duration-300 hover:border-[#D4AF37]/60"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10">
              <Icon size={17} color={GOLD} />
            </span>
            <span className="min-w-0">
              <span className="block text-[13px] font-bold leading-tight text-white">{label}</span>
              <span className="block text-[11px] uppercase tracking-[0.08em] text-gray-500">{sub}</span>
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default InquiryForm;
