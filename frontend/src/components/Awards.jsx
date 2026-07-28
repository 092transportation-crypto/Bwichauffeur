import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, ShieldCheck, Star, Globe, Clock, MapPin } from "lucide-react";

// Award-style trust signal cards.
const SIGNALS = [
  {
    icon: ShieldCheck,
    title: "MD PSC Licensed Carrier #6325",
    subtitle: "Maryland Public Service Commission",
  },
  {
    icon: Star,
    title: "5-Star Rated Service",
    subtitle: "Consistently rated five stars by riders",
  },
  {
    icon: Globe,
    title: "62+ Pages Indexed on Google",
    subtitle: "A trusted, established web presence",
  },
  {
    icon: Clock,
    title: "24/7 Professional Service",
    subtitle: "Day or night, we're on the road",
  },
  {
    icon: MapPin,
    title: "Serving MD, DC & VA",
    subtitle: "BWI, DCA & IAD airport specialists",
  },
];

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Awards = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  // Subtle parallax on the spotlight as the section scrolls by.
  const glowY = useTransform(scrollYProgress, [0, 1], ["-12%", "18%"]);

  return (
    <section
      ref={sectionRef}
      data-testid="awards-section"
      className="gold-sheen relative overflow-hidden bg-black py-24 lg:py-32"
    >
      {/* Dramatic top spotlight with parallax */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[70rem] -translate-x-1/2 opacity-30 blur-3xl"
        style={{
          y: glowY,
          background:
            "radial-gradient(ellipse at center top, #D4AF37 0%, rgba(212,175,55,0.25) 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* Side rim lights */}
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #D4AF37, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #D4AF37, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
            <Award size={15} /> Awards &amp; Recognition
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            TRUSTED &amp; <span className="text-[#D4AF37]">RECOGNIZED</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-24 gold-gradient" aria-hidden="true" />
          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Licensed, reviewed, and relied on around the clock — the chauffeur
            service Maryland, DC &amp; Virginia travelers trust for BWI and beyond.
          </p>
        </motion.div>

        {/* Trust signal cards — 3 over 2, centered */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6"
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {SIGNALS.map(({ icon: Icon, title, subtitle }, i) => (
            <motion.div
              key={title}
              variants={itemVariants}
              data-testid={`trust-card-${i}`}
              className={`glow-card relative rounded-2xl border border-[#D4AF37]/25 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-8 text-center lg:col-span-2 ${
                i === 3 ? "lg:col-start-2" : ""
              } ${i === 4 ? "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-md lg:col-span-2 lg:mx-0 lg:max-w-none" : ""}`}
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 shadow-[0_0_30px_-8px_rgba(212,175,55,0.6)]">
                <Icon size={28} className="text-[#D4AF37]" strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-bold text-white sm:text-xl">{title}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-gray-500">{subtitle}</p>
              <div className="mx-auto mt-5 h-px w-10 bg-[#D4AF37]/40" aria-hidden="true" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
