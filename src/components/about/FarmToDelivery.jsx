"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const steps = [
  {
    number: "01",
    title: "Farm Fresh Collection",
    desc: "Eggs are collected daily from healthy, well-cared hens at trusted farms.",
    icon: "/icons/Farm.svg",
  },
  {
    number: "02",
    title: "Quality Inspection",
    desc: "Each egg goes through a strict quality check to ensure freshness and standards.",
    icon: "/icons/checklist.svg",
  },
  {
    number: "03",
    title: "Hygienic Packaging",
    desc: "Eggs are carefully cleaned (if required) and packed hygienically to keep them safe and fresh.",
    icon: "/icons/PackageBox.svg",
  },
  
  {
    number: "04",
    title: "Safe & Timely Delivery",
    desc: "We ensure on-time delivery with proper handling, right to your doorstep.",
    icon: "/icons/Truck.svg",
  },
  {
    number: "05",
    title: "Freshness at Your Home",
    desc: "From our farm to your kitchen, freshness you can see, quality you can taste.",
    icon: "/icons/Homedelivery.svg",
  },
];

const topRow = steps.slice(0, 3);
const bottomRow = [steps[4], steps[3]];

export default function FarmToDelivery() {
  return (
    <section
      className={`${montserrat.className} relative bg-[#f5efe3] py-16 lg:py-20 overflow-hidden`}
    >
      {/* ── HEADING ──────────────────────────────────────────────────────
          Mobile/tablet: stacked vertically
          Desktop lg+  : original absolute centered layout                */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-[72px]">

        {/* Mobile + Tablet */}
        <div className="flex flex-col items-center lg:hidden gap-3">
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <div
                className="w-7 h-7 bg-[#6E7E45]"
                style={{
                  WebkitMaskImage: "url(/icons/HeadLeaf.svg)",
                  maskImage: "url(/icons/HeadLeaf.svg)",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              />
            </div>
            <div className="flex flex-col">
              <p
                className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`}
                style={{ fontWeight: 500 }}
              >
                Our Process
              </p>
              <div className="mt-2 h-[0.5px] w-[115px] bg-[#d8d2c4]" />
            </div>
          </div>
          <h2 className={`${cormorant.className} leading-[1.0] text-[#241A12] text-center`}>
            <span className="text-[34px] sm:text-[36px] md:text-[48px] font-semibold">Farm to Delivery </span>
            <span className="text-[34px] sm:text-[36px] md:text-[48px] italic font-medium text-[#6E7E45]">Journey</span>
          </h2>
        </div>

        {/* Desktop — original untouched */}
        <div className="hidden lg:flex items-start gap-8 relative">
          <div className="flex items-center gap-3 flex-shrink-0 pt-2">
            <div className="flex flex-col items-center">
              <div
                className="w-7 h-7 lg:w-9 lg:h-9 bg-[#6E7E45]"
                style={{
                  WebkitMaskImage: "url(/icons/HeadLeaf.svg)",
                  maskImage: "url(/icons/HeadLeaf.svg)",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              />
            </div>
            <div className="flex flex-col">
              <p
                className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`}
                style={{ fontWeight: 500 }}
              >
                Our Process
              </p>
              <div className="mt-2 h-[0.5px] w-[115px] bg-[#d8d2c4]" />
            </div>
          </div>
          <h2
            className={`${cormorant.className} leading-[1.0] text-[#241A12] flex-1 text-center absolute left-0 right-0`}
          >
            <span className="text-[48px] lg:text-[52px] xl:text-[60px] font-semibold">Farm to Delivery </span>
            <span className="text-[48px] lg:text-[52px] xl:text-[60px] italic font-medium text-[#6E7E45]">Journey</span>
          </h2>
        </div>

        {/* Subtext */}
        <p
          className={`${montserrat.className} text-[13px] sm:text-[13px] md:text-[14px] lg:text-[14px] xl:text-[15px] text-[#5f5146] leading-7 pt-6 sm:pt-6 md:pt-8 lg:pt-8 text-center max-w-lg mx-auto`}
          style={{ fontWeight: 400 }}
        >
          From our farms to your table, every step is handled with care, hygiene, and responsibility.
        </p>
      </div>

      {/* ── PROCESS STEPS — MOBILE & TABLET (< lg) ───────────────────────
          FIXED: max-w-sm → max-w-xl for tablet breathing room
          FIXED: icon now uses mask div instead of raw string render
          md: 2-col grid so tablet shows steps side by side               */}
      <div className="lg:hidden max-w-xl md:max-w-3xl mx-auto px-6">

        {/* Mobile (< md): single column stacked */}
        <div className="flex flex-col gap-6 md:hidden">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-4 items-start">
              {/* Number + vertical line */}
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1a2e14] flex items-center justify-center">
                  <span className="text-[10px] sm:text-[11px] text-white tracking-widest" style={{ fontWeight: 600 }}>
                    {step.number}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 min-h-[60px] bg-[#c8a84b]" />
                )}
              </div>
              {/* Card */}
              <div className="flex flex-col gap-2">
                {/* Icon circle — FIXED: was rendering path string directly */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#ede8d8] flex items-center justify-center">
                  <div
                    className="w-13 h-13 sm:w-13 sm:h-13 bg-[#717f3d]"
                    style={{
                      WebkitMaskImage: `url(${step.icon})`,
                      maskImage: `url(${step.icon})`,
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                    }}
                  />
                </div>
                <div>
                  <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.12em] text-[#1a2e14] mb-1" style={{ fontWeight: 700 }}>
                    {step.title}
                  </p>
                  <div className="h-px w-8 bg-[#c8a84b] mb-2" />
                  <p className="text-[12px] sm:text-[13px] text-[#5f5146] leading-[1.7]" style={{ fontWeight: 400 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet (md): 2-col grid — more visual, less vertical scroll */}
        <div className="hidden md:grid grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-4 items-start p-4 rounded-xl bg-[#ede8d8]/40">
              {/* Number bubble */}
              <div className="w-10 h-10 rounded-full bg-[#1a2e14] flex items-center justify-center flex-shrink-0">
                <span className="text-[11px] text-white tracking-widest" style={{ fontWeight: 600 }}>
                  {step.number}
                </span>
              </div>
              {/* Content */}
              <div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-[#ede8d8] flex items-center justify-center mb-3">
                  <div
                    className="w-12 h-12 bg-[#717f3d]"
                    style={{
                      WebkitMaskImage: `url(${step.icon})`,
                      maskImage: `url(${step.icon})`,
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                    }}
                  />
                </div>
                <p className="text-[11px] uppercase tracking-[0.12em] text-[#1a2e14] mb-1" style={{ fontWeight: 700 }}>
                  {step.title}
                </p>
                <div className="h-px w-8 bg-[#c8a84b] mb-2" />
                <p className="text-[12px] text-[#5f5146] leading-[1.7]" style={{ fontWeight: 400 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROCESS STEPS — DESKTOP (lg+) — original untouched ────────── */}
      <div className="hidden lg:block max-w-6xl mx-auto px-6 lg:px-16 relative">
        <svg
          className="absolute top-[28px] left-0 w-full pointer-events-none"
          height="500"
          viewBox="0 0 980 500"
          preserveAspectRatio="none"
          fill="none"
        >
          <line x1="70" y1="5" x2="880" y2="5" stroke="#c8a84b" strokeWidth="1.5" />
          <path
            d="M880 5 L910 5 Q940 5 940 35 L940 225 Q940 255 910 255 L880 255"
            stroke="#c8a84b" strokeWidth="1.5" fill="none"
          />
          <line x1="70" y1="255" x2="880" y2="255" stroke="#c8a84b" strokeWidth="1.5" />
          <path
            d="M70 255 L40 255 Q10 255 10 285 L10 400 Q10 430 40 430 L880 430"
            stroke="#c8a84b" strokeWidth="1.5" fill="none"
          />
          <polygon points="880,430 868,422 868,438" fill="#c8a84b" />
        </svg>

        {/* Top row */}
        <div className="relative flex items-start justify-between mb-2">
          {topRow.map((step) => (
            <StepCard key={step.number} step={step} align="top" />
          ))}
        </div>

        <div className="h-12" />

        {/* Bottom row */}
        <div className="relative flex items-center justify-center ml-1">
          <div className="flex justify-between w-[66.66%]">
            {bottomRow.map((step) => (
              <StepCard key={step.number} step={step} align="bottom" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Step Card — desktop only ── */
function StepCard({ step }) {
  return (
    <div className="flex flex-col items-center w-[300px] flex-shrink-0 pt-[12px]">
      <div className="w-10 h-10 rounded-full bg-[#1a2e14] flex items-center justify-center z-10 relative mb-4">
        <span
          className={`${montserrat.className} text-[16px] text-white tracking-[0.15em]`}
          style={{ fontWeight: 600 }}
        >
          {step.number}
        </span>
      </div>
      <div className="flex items-start gap-4">
        <div className="w-[75px] h-[75px] rounded-full bg-[#ede8d8] flex items-center justify-center flex-shrink-0 mt-4">
          <div
            className="w-7 h-7 lg:w-20 lg:h-20 bg-[#717f3d]"
            style={{
              WebkitMaskImage: `url(${step.icon})`,
              maskImage: `url(${step.icon})`,
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          />
        </div>
        <div className="pt-1">
          <p className="text-[11.5px] uppercase tracking-[0.12em] text-[#1a2e14] font-bold">
            {step.title}
          </p>
          <div className="h-px w-8 bg-[#c8a84b] my-2" />
          <p className="text-[12.5px] text-[#5f5146] leading-[1.75]">
            {step.desc}
          </p>
        </div>
      </div>
    </div>
  );
}