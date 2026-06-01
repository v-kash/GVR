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
    icon: <img src="/icons/farm.png" alt="" className="w-18 h-18 object-contain" />,
  },
  {
    number: "02",
    title: "Quality Inspection",
    desc: "Each egg goes through a strict quality check to ensure freshness and standards.",
    icon: <img src="/icons/eggnest.png" alt="" className="w-18 h-18 object-contain" />,
  },
  {
    number: "03",
    title: "Hygienic Packaging",
    desc: "Eggs are carefully cleaned (if required) and packed hygienically to keep them safe and fresh.",
    icon: <img src="/icons/hen.png" alt="" className="w-10 h-10 object-contain" />,
  },
  {
    number: "05",
    title: "Freshness at Your Home",
    desc: "From our farm to your kitchen, freshness you can see, quality you can taste.",
    icon: <img src="/icons/Assure.png" alt="" className="w-10 h-10 object-contain" />,
  },
  {
    number: "04",
    title: "Safe & Timely Delivery",
    desc: "We ensure on-time delivery with proper handling, right to your doorstep.",
    icon: <img src="/icons/truck.png" alt="" className="w-10 h-10 object-contain" />,
  },
  
];

// The snake path: top row = steps 0,1,2 (left→right), bottom row = steps 3,4 (right→left)
const topRow = steps.slice(0, 3);
const bottomRow = steps.slice(3, 5);

export default function FarmToDelivery() {
  return (
    <section
      className={`${montserrat.className} relative bg-[#f5efe3] py-16 lg:py-20 overflow-hidden `}
    >
      {/* ── HEADING ── */}
<div className="max-w-7xl mx-auto px-6 lg:px-16 mb-18">  {/* Top Row */}
  <div className="flex items-start gap-8 relative">
    {/* Left Eyebrow */}
    <div className="flex items-center gap-3 flex-shrink-0 pt-2">
      <div className="flex flex-col items-center">
        <img
          src="/icons/Untitle1.png"
          alt=""
          className="w-8 h-8 object-contain opacity-70"
        />
        <div className="mb-2 border-t border-[#d8d2c4] w-10" />
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

    {/* Main Heading */}
    <h2
      className={`${cormorant.className} leading-[1.0] text-[#241A12] flex-1 text-center absolute left-0 right-0`}
    >
      <span className="text-[48px] lg:text-[60px] font-semibold">
        Farm to Delivery{" "}
      </span>
      <span className="text-[48px] lg:text-[60px] italic font-medium text-[#6E7E45]">
        Journey
      </span>
    </h2>
  </div>

  {/* Subtext */}
  <p
    className={`${montserrat.className} text-[14px] lg:text-[15px] text-[#5f5146] leading-7 pt-8 text-center max-w-lg mx-auto`}
    style={{ fontWeight: 400 }}
  >
    From our farms to your table, every step is handled with care, hygiene, and responsibility.
  </p>
</div>

      {/* ── PROCESS STEPS — DESKTOP ── */}
{/* ── PROCESS STEPS — DESKTOP ── */}
<div className="hidden lg:block max-w-6xl mx-auto px-6 lg:px-16 relative">
        <svg
  className="absolute top-[28px] left-0 w-full pointer-events-none"
  height="500"
  viewBox="0 0 980 500"
  preserveAspectRatio="none"
  fill="none"
>
  {/* Top horizontal line */}
  <line x1="70" y1="5" x2="880" y2="5" stroke="#c8a84b" strokeWidth="1.5" />

  {/* Right curve: starts at y=5 (matches top line), ends at y=255 (matches bottom line) */}
  <path
    d="M880 5 L910 5 Q940 5 940 35 L940 225 Q940 255 910 255 L880 255"
    stroke="#c8a84b" strokeWidth="1.5" fill="none"
  />

  {/* Bottom horizontal line */}
  <line x1="70" y1="255" x2="880" y2="255" stroke="#c8a84b" strokeWidth="1.5" />

  {/* Left curve: starts at y=255 (matches bottom line), ends at y=430 (3rd line) */}
  <path
    d="M70 255 L40 255 Q10 255 10 285 L10 400 Q10 430 40 430 L880 430"
    stroke="#c8a84b" strokeWidth="1.5" fill="none"
  />

  {/* Arrow pointing RIGHT */}
  <polygon points="880,430 868,422 868,438" fill="#c8a84b" />
</svg>
        {/* ── TOP ROW (01 → 02 → 03) ── */}
        <div className="relative flex items-start justify-between mb-2 ">
          {/* Snake path SVG behind everything */}
          

          {topRow.map((step, i) => (
            <StepCard key={step.number} step={step} align="top" />
          ))}
        </div>

        {/* Spacer between rows */}
        <div className="h-12" />

        {/* ── BOTTOM ROW (04, 05) — right aligned to mirror ── */}
        <div className="relative flex items-center justify-center ml-1 bg-amber-40">
          <div className="flex justify-between w-[66.66%]">
            {bottomRow.map((step, i) => (
              <StepCard key={step.number} step={step} align="bottom" />
            ))}
          </div>
        </div>
      </div>

      {/* ── PROCESS STEPS — MOBILE ── */}
      <div className="lg:hidden flex flex-col gap-8 max-w-sm mx-auto px-6">
        {steps.map((step, i) => (
          <div key={step.number} className="flex gap-4 items-start">
            {/* Number + line */}
            <div className="flex flex-col items-center gap-1 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#1a2e14] flex items-center justify-center">
                <span
                  className="text-[11px] text-white tracking-widest"
                  style={{ fontWeight: 600 }}
                >
                  {step.number}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="w-px flex-1 min-h-[60px] bg-[#c8a84b]" />
              )}
            </div>
            {/* Card */}
            <div className="flex flex-col gap-3">
              <div className="w-16 h-16 rounded-full bg-[#ede8d8] flex items-center justify-center">
                {step.icon}
              </div>
              <div>
                <p
                  className="text-[12px] uppercase tracking-[0.12em] text-[#1a2e14] mb-1"
                  style={{ fontWeight: 700 }}
                >
                  {step.title}
                </p>
                <div className="h-px w-10 bg-[#c8a84b] mb-2" />
                <p
                  className="text-[13px] text-[#5f5146] leading-[1.7]"
                  style={{ fontWeight: 400 }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Step Card Sub-component ── */
function StepCard({ step, align }) {
  return (
    <div className="flex flex-col items-center w-[300px] flex-shrink-0   pt-[12px]">
      {/* Number bubble */}
      <div className="w-10 h-10 rounded-full bg-[#1a2e14] flex items-center justify-center z-10 relative mb-4">
        <span
          className={`${montserrat.className} text-[16px] text-white tracking-[0.15em]`}
          style={{ fontWeight: 600 }}
        >
          {step.number}
        </span>
      </div>

      {/* Icon circle */}
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="w-[75px] h-[75px] rounded-full bg-[#ede8d8] flex items-center justify-center flex-shrink-0  mt-4">
          {step.icon}
        </div>
        {/* Text */}
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
