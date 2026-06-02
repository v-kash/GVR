"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

// ─── Icons ────────────────────────────────────────────────────────
const ChickenIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[var(--gold)] fill-none stroke-[1.5]">
    <path d="M12 3c-1.5 0-3 1-3 3 0 1.5.8 2.5 2 3l-1 3h4l-1-3c1.2-.5 2-1.5 2-3 0-2-1.5-3-3-3z" />
    <path d="M9 12c-3 0-5 2-5 4v2h16v-2c0-2-2-4-5-4" />
    <circle cx="14" cy="5" r="1" />
  </svg>
);
const EggIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[var(--gold)] fill-none stroke-[1.5]">
    <ellipse cx="12" cy="13" rx="6" ry="8" />
  </svg>
);
const DuckIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[var(--gold)] fill-none stroke-[1.5]">
    <path d="M9 10c0-3 2-6 4-6s4 2.5 4 6-2 7-4 7-4-4-4-7z" />
    <path d="M5 17s2-2 7-2 7 2 7 2" />
  </svg>
);
const QuailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[var(--gold)] fill-none stroke-[1.5]">
    <ellipse cx="12" cy="13" rx="4" ry="5" />
    <circle cx="14" cy="11" r="1" className="fill-[var(--gold)]" />
    <circle cx="11" cy="14" r="0.7" className="fill-[var(--gold)]" />
  </svg>
);
const FishIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-[var(--gold)] fill-none stroke-[1.5]">
    <path d="M3 12s4-6 9-6 9 6 9 6-4 6-9 6-9-6-9-6z" />
    <circle cx="16" cy="12" r="1.5" />
    <path d="M21 9l-3 3 3 3" />
  </svg>
);
const LeafIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[var(--gold)] fill-none stroke-[1.5]">
    <path d="M12 2C6 8 4 12 4 15a8 8 0 0 0 16 0c0-3-2-7-8-13z" />
  </svg>
);
const SunIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[var(--gold)] fill-none stroke-[1.5]">
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="4" /><line x1="12" y1="20" x2="12" y2="22" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="2" y1="12" x2="4" y2="12" /><line x1="20" y1="12" x2="22" y2="12" />
  </svg>
);
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[var(--gold)] fill-none stroke-[1.5]">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const HomeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[var(--gold)] fill-none stroke-[1.5]">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const TruckIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[var(--gold)] fill-none stroke-[1.5]">
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);
const AwardIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[var(--gold)] fill-none stroke-[1.5]">
    <circle cx="12" cy="8" r="6" />
    <path d="M8 14l-4 8h16l-4-8" />
    <path d="M10 8l2 2 4-4" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────
const commonBadges = [
  { icon: <LeafIcon />,   label: "Rich in Nutrition" },
  { icon: <SunIcon />,    label: "Daily Collection"  },
  { icon: <ShieldIcon />, label: "Quality Assured"   },
  { icon: <HomeIcon />,   label: "Farm Fresh"        },
];

const PRODUCTS = [
  { id: "country",   label: "Country Eggs",    shelfImg: "/images/Country.png",   bigImg: "/about/country-eggs-big.png",   icon: <ChickenIcon />, desc: "Farm fresh eggs from healthy hens, raised in clean and natural environments. Rich in taste and nutrition, perfect for your daily healthy diet.",        badges: commonBadges },
  { id: "brown",     label: "Brown Eggs",       shelfImg: "/images/Brown.png",     bigImg: "/about/brown-eggs-big.png",     icon: <EggIcon />,     desc: "Free-range brown eggs with a naturally rich yolk. Packed with omega-3 fatty acids and essential vitamins — a wholesome choice for every kitchen.",  badges: commonBadges },
  { id: "white",     label: "White Eggs",       shelfImg: "/images/Whiteegg.png",  bigImg: "/about/white-eggs-big.png",     icon: <EggIcon />,     desc: "Classic white eggs, mild in flavour and nutritionally complete. Ideal for everyday cooking, baking, and a high-protein lifestyle.",                  badges: commonBadges },
  { id: "duck",      label: "Duck Eggs",        shelfImg: "/images/Duck.png",      bigImg: "/about/duck-eggs-big.png",      icon: <DuckIcon />,    desc: "Larger than chicken eggs with a creamier, richer yolk. Duck eggs deliver superior nutrition and a gourmet depth of flavour.",                      badges: commonBadges },
  { id: "quail",     label: "Quail Eggs",       shelfImg: "/images/Quail.png",     bigImg: "/about/quail-eggs-big.png",     icon: <QuailIcon />,   desc: "Delicate speckled quail eggs — antioxidant-rich, low in cholesterol, and concentrated in nutrients. A refined delicacy.",                         badges: commonBadges },
  { id: "kadaknath", label: "Kadaknath Eggs",   shelfImg: "/images/kadaknath.png", bigImg: "/about/kadaknath-eggs-big.png", icon: <ChickenIcon />, desc: "Rare black Kadaknath eggs prized for exceptional protein content and traditional medicinal value. A premium low-fat superfood.",                   badges: commonBadges },
  { id: "fish",      label: "Premium Dry Fish", shelfImg: "/images/Jumbo.png",     bigImg: "/about/dry-fish-big.png",       icon: <FishIcon />,    desc: "Sun-dried on pristine shores, our premium dry fish retains bold flavour and rich omega-3 content. A coastal treasure, delivered fresh.",           badges: commonBadges },
];

const TRUST = [
  { icon: <HomeIcon />,  title: "Farm Fresh",          desc: "Sourced directly from trusted farms for maximum freshness." },
  { icon: <AwardIcon />, title: "Quality Assured",      desc: "Strict quality checks to ensure purity and safety."         },
  { icon: <LeafIcon />,  title: "Natural & Nutritious", desc: "Rich in essential nutrients for a healthy lifestyle."        },
  { icon: <TruckIcon />, title: "Delivered with Care",  desc: "Packed with care and delivered to your doorstep."           },
];

// ─── ProductCard ─────────────────────────────────────────────────
// One card = icon ring + egg image + label
// All cards sit in a grid OVER the shelf image.
// To adjust position on shelf: change SHELF_CARD_BOTTOM_OFFSET below.
// ─────────────────────────────────────────────────────────────────

// ↓ Change this one value to move ALL cards up/down on the shelf
const SHELF_CARD_BOTTOM_OFFSET = "28%";

function ProductCard({ product, isActive, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -8, scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 380, damping: 22 }}
      className="flex flex-col items-center  focus:outline-none relative w-full "
    >
      {/* Icon ring */}
      <div
        className="w-12 h-12 rounded-full flex mb-2 items-center justify-center transition-all duration-200 flex-shrink-0"
        style={{
          border: `1.5px solid ${isActive ? "var(--gold)" : "var(--gold-light)"}`,
          background: isActive ? "var(--cream-light)" : "var(--cream)",
        }}
      >
        {product.icon}
      </div>

      {/* Egg image */}
      <div className="relative w-full pb-4 flex items-end justify-center" style={{ height: 110 }}>
        <Image
          src={product.shelfImg}
          alt={product.label}
          width={140}
          height={110}
          className="object-contain drop-shadow-lg"
          style={{ maxHeight: 110, maxWidth: "100%" }}
        />
        {/* Active gold bar under egg */}
        {isActive && (
          <motion.span
            layoutId="activeBar"
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[3px] w-12 rounded-full"
            style={{ background: "var(--gold)" }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
      </div>

      {/* Label */}
      <span
        className="ptext-[10px] md:text-[11px] font-bold  tracking-[1.2px] uppercase text-center leading-tight px-1 transition-colors duration-200"
        style={{ color: isActive ? "var(--gold)" : "var(--dark)" }}
      >
        {product.label}
      </span>
    </motion.button>
  );
}

// ─── Main Component ───────────────────────────────────────────────
export default function ProductCollection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const active = PRODUCTS[activeIdx];

  return (
    <>
      <style>{`
        :root {
          --gold: #8a6d2f;
          --gold-light: #b8912a;
          --cream: #f5f0e7;
          --cream-light: #faf4ec;
          --dark: #2a1f0e;
          --text: #3d2e14;
        }
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lato:wght@300;400;700&display=swap');
        .font-playfair { font-family: 'Playfair Display', Georgia, serif; }
        .font-lato     { font-family: 'Lato', sans-serif; }
      `}</style>

      <section style={{ backgroundColor: "var(--cream)" }}>
        <div ref={sectionRef} className="font-lato py-16 px-5 md:px-10 max-w-7xl mx-auto">

          {/* ── Heading ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-3 mb-1">
              <span className="flex-shrink-0 h-px w-12" style={{ background: "var(--gold)" }} />
              <span className="text-[10px] font-bold tracking-[4px] uppercase" style={{ color: "var(--gold)" }}>
                Our Collection
              </span>
              <span className="flex-shrink-0 h-px w-12" style={{ background: "var(--gold)" }} />
            </div>
            <div className="text-lg mb-2" style={{ color: "var(--gold)" }}>❧</div>
            <h2 className="font-playfair font-black text-4xl md:text-5xl lg:text-[52px] leading-tight mb-3" style={{ color: "var(--dark)" }}>
              Explore Our Premium Products
            </h2>
            <p className="text-sm font-light tracking-wide" style={{ color: "var(--gold)" }}>
              Carefully sourced from trusted farms and shores, delivered with quality and trust.
            </p>
            <div className="w-10 h-0.5 mx-auto mt-3" style={{ background: "var(--gold)" }} />
          </motion.div>

          {/* ── Shelf Section ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative mb- px-24"
          >
            {/* shelf.png — static, full width, just sits here */}
            <Image
              src="/products/self.png"
              alt="wooden shelf"
              width={1120}
              height={220}
              className="bg-amber-200 w-[1000px]"
              style={{ objectFit: "fill", display: "block" }}
              priority
            />

            {/* Cards grid — absolute over the shelf, one value controls depth */}
            <div
              className="absolute inset-x-0 grid grid-cols-7 gap-0 pb-6 px-2"
              style={{ bottom: SHELF_CARD_BOTTOM_OFFSET }}
            >
              {PRODUCTS.map((p, i) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  isActive={activeIdx === i}
                  onClick={() => setActiveIdx(i)}
                />
              ))}
            </div>
          </motion.div>

          {/* ── Detail Card ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col md:flex-row rounded-2xl overflow-hidden mb-12"
              style={{
                background: "var(--cream-light)",
                border: "1px solid rgba(138,109,47,.12)",
                boxShadow: "0 4px 30px rgba(100,65,0,.08)",
              }}
            >
              {/* Image side */}
              <div className="relative md:w-[42%] flex-shrink-0 min-h-[240px] md:min-h-[340px] overflow-hidden">
                <Image src={active.bigImg} alt={active.label} fill className="object-cover object-center" />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "url(\"data:image/svg+xml,%3Csvg width='200' height='300' viewBox='0 0 200 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 280 Q30 200 50 150 Q70 100 60 40' stroke='%238a6d2f' stroke-width='1' fill='none' opacity='0.18'/%3E%3C/svg%3E\") no-repeat left bottom",
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                <div className="w-11 h-11 rounded-full flex items-center justify-center mb-4" style={{ border: "1.5px solid var(--gold)" }}>
                  {active.icon}
                </div>
                <motion.h3
                  className="font-playfair font-black text-2xl md:text-3xl tracking-[3px] uppercase mb-3"
                  style={{ color: "var(--dark)" }}
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
                >
                  {active.label}
                </motion.h3>
                <motion.p
                  className="text-sm leading-relaxed mb-6 max-w-sm"
                  style={{ color: "#5a4422" }}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
                >
                  {active.desc}
                </motion.p>

                {/* Badges */}
                <motion.div
                  className="flex items-center gap-4 md:gap-6 flex-wrap mb-7"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                >
                  {active.badges.map((b, i) => (
                    <div key={b.label} className="flex items-center gap-4">
                      {i > 0 && <span className="hidden sm:block w-px h-9 flex-shrink-0" style={{ background: "rgba(138,109,47,.22)" }} />}
                      <div className="flex flex-col items-center gap-1 text-center">
                        {b.icon}
                        <span className="text-[10px] font-semibold tracking-wide" style={{ color: "var(--text)" }}>{b.label}</span>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }} whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[2px] uppercase px-6 py-3.5 rounded w-fit no-underline"
                  style={{ background: "var(--dark)", color: "#e8d5a3" }}
                >
                  View Details
                  <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── Trust Bar ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {TRUST.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.55 + i * 0.08, duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ border: "1.5px solid rgba(138,109,47,.28)", background: "var(--cream-light)" }}>
                  {t.icon}
                </div>
                <div>
                  <h4 className="text-[11px] font-bold tracking-[1px] uppercase mb-1" style={{ color: "var(--dark)" }}>{t.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b5230" }}>{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
}
