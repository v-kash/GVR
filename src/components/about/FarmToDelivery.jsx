"use client";

import { useEffect, useRef } from "react";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

const topRow    = steps.slice(0, 3);
const bottomRow = [steps[4], steps[3]];

export default function FarmToDelivery() {
  // ── Refs ──────────────────────────────────────────────
  const sectionRef        = useRef(null);
  const headingMobileRef  = useRef(null);
  const headingDesktopRef = useRef(null);
  const subtaglineRef     = useRef(null);

  // Mobile single-col
  const mobileColRef = useRef(null);
  // Tablet 2-col grid
  const tabletGridRef = useRef(null);

  // Desktop SVG + cards
  const svgPathRef    = useRef(null);   // the <svg> element
  const topRowRef     = useRef(null);
  const bottomRowRef  = useRef(null);

  // ── Animations ────────────────────────────────────────
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {

      // ── Mobile heading ─────────────────────────────────
      if (headingMobileRef.current) {
        gsap.fromTo(
          headingMobileRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: headingMobileRef.current, start: "top 80%", once: true },
          }
        );
      }

      // ── Desktop heading ────────────────────────────────
      if (headingDesktopRef.current) {
        const eyebrow = headingDesktopRef.current.querySelector("[data-eyebrow]");
        const spans   = headingDesktopRef.current.querySelectorAll("[data-headline] span");
        const tl = gsap.timeline({
          scrollTrigger: { trigger: headingDesktopRef.current, start: "top 80%", once: true },
        });
        if (eyebrow) tl.fromTo(eyebrow, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" });
        if (spans.length) tl.fromTo(spans, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.13 }, "-=0.4");
      }

      // ── Sub-tagline ────────────────────────────────────
      if (subtaglineRef.current) {
        gsap.fromTo(
          subtaglineRef.current,
          { opacity: 0, y: 16 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
            scrollTrigger: { trigger: subtaglineRef.current, start: "top 80%", once: true },
          }
        );
      }

      // ── MOBILE: step cards + connector lines ───────────
      // Cards stagger fade-up; connector lines grow downward after card enters.
      if (mobileColRef.current) {
        const cards     = mobileColRef.current.querySelectorAll("[data-step-card]");
        const connectors = mobileColRef.current.querySelectorAll("[data-connector]");

        // Initial state — hide all connectors (scaleY 0 from top)
        gsap.set(connectors, { scaleY: 0, transformOrigin: "top center" });

        gsap.fromTo(
          cards,
          { opacity: 0, y: 24, x: -12 },
          {
            opacity: 1, y: 0, x: 0,
            duration: 0.65,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: mobileColRef.current,
              start: "top 80%",
              once: true,
              onEnter: () => {
                // Connector lines grow down after each card with a matching delay
                gsap.to(connectors, {
                  scaleY: 1,
                  duration: 0.4,
                  ease: "power2.out",
                  stagger: 0.15,
                  delay: 0.2,
                });
              },
            },
          }
        );
      }

      // ── TABLET: 2-col grid cards — stagger fade-up ─────
      if (tabletGridRef.current) {
        const cards = tabletGridRef.current.querySelectorAll("[data-step-card]");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 28, scale: 0.97 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: { trigger: tabletGridRef.current, start: "top 80%", once: true },
          }
        );
      }

      // ── DESKTOP: SVG path draw → then stagger cards ────
      // Measure total path length, set dasharray/offset, then tween offset to 0.
      // Step cards fade in sequentially timed to when the line "arrives" at each.
      if (svgPathRef.current) {
        // Collect all drawn path segments (lines + curves, not the arrowhead polygon)
        const pathEls = svgPathRef.current.querySelectorAll("line, path");

        pathEls.forEach((el) => {
          const len = el.getTotalLength ? el.getTotalLength() : 500;
          gsap.set(el, {
            strokeDasharray: len,
            strokeDashoffset: len,
          });
        });

        const svgTl = gsap.timeline({
          scrollTrigger: { trigger: svgPathRef.current, start: "top 80%", once: true },
        });

        // Draw the full connector path over 1.6s
        svgTl.to(pathEls, {
          strokeDashoffset: 0,
          duration: 1.6,
          ease: "power2.inOut",
          stagger: 0,  // all segments draw simultaneously for a single continuous feel
        });

        // Top row cards — stagger in while path is drawing
        if (topRowRef.current) {
          const topCards = topRowRef.current.querySelectorAll("[data-step-card]");
          svgTl.fromTo(
            topCards,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.65, ease: "power3.out", stagger: 0.18 },
            "-=1.3"  // overlap with path draw — cards appear as line passes them
          );
        }

        // Bottom row cards — stagger in as path curves down and back
        if (bottomRowRef.current) {
          const bottomCards = bottomRowRef.current.querySelectorAll("[data-step-card]");
          svgTl.fromTo(
            bottomCards,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.65, ease: "power3.out", stagger: 0.18 },
            "-=0.5"
          );
        }
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${montserrat.className} relative bg-[#f5efe3] py-16 lg:py-20 overflow-hidden`}
    >
      {/* ── HEADING ──────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-[72px]">

        {/* Mobile + Tablet */}
        <div
          ref={headingMobileRef}
          className="flex flex-col items-center lg:hidden gap-3"
        >
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

        {/* Desktop */}
        <div
          ref={headingDesktopRef}
          className="hidden lg:flex items-start gap-8 relative"
        >
          <div data-eyebrow className="flex items-center gap-3 flex-shrink-0 pt-2">
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
            data-headline
            className={`${cormorant.className} leading-[1.0] text-[#241A12] flex-1 text-center absolute left-0 right-0`}
          >
            <span className="text-[48px] lg:text-[52px] xl:text-[60px] font-semibold">Farm to Delivery </span>
            <span className="text-[48px] lg:text-[52px] xl:text-[60px] italic font-medium text-[#6E7E45]">Journey</span>
          </h2>
        </div>

        {/* Subtext */}
        <p
          ref={subtaglineRef}
          className={`${montserrat.className} text-[13px] sm:text-[13px] md:text-[14px] lg:text-[14px] xl:text-[15px] text-[#5f5146] leading-7 pt-6 sm:pt-6 md:pt-8 lg:pt-8 text-center max-w-lg mx-auto`}
          style={{ fontWeight: 400 }}
        >
          From our farms to your table, every step is handled with care, hygiene, and responsibility.
        </p>
      </div>

      {/* ── MOBILE & TABLET (< lg) ────────────────────────── */}
      <div className="lg:hidden max-w-xl md:max-w-3xl mx-auto px-6">

        {/* Mobile (< md): single column */}
        <div ref={mobileColRef} className="flex flex-col gap-6 md:hidden">
          {steps.map((step, i) => (
            <div key={step.number} data-step-card className="flex gap-4 items-start">
              {/* Number + vertical connector */}
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1a2e14] flex items-center justify-center">
                  <span className="text-[10px] sm:text-[11px] text-white tracking-widest" style={{ fontWeight: 600 }}>
                    {step.number}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    data-connector
                    className="w-px flex-1 min-h-[60px] bg-[#c8a84b]"
                  />
                )}
              </div>
              {/* Card content */}
              <div className="flex flex-col gap-2">
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

        {/* Tablet (md): 2-col grid */}
        <div ref={tabletGridRef} className="hidden md:grid grid-cols-2 gap-6">
          {steps.map((step) => (
            <div key={step.number} data-step-card className="flex gap-4 items-start p-4 rounded-xl bg-[#ede8d8]/40">
              <div className="w-10 h-10 rounded-full bg-[#1a2e14] flex items-center justify-center flex-shrink-0">
                <span className="text-[11px] text-white tracking-widest" style={{ fontWeight: 600 }}>
                  {step.number}
                </span>
              </div>
              <div>
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

      {/* ── DESKTOP (lg+) — SVG path draw + step cards ───── */}
      <div className="hidden lg:block max-w-6xl mx-auto px-6 lg:px-16 relative">

        {/* SVG connector — ref for path-draw animation */}
        <svg
          ref={svgPathRef}
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
        <div ref={topRowRef} className="relative flex items-start justify-between mb-2">
          {topRow.map((step) => (
            <StepCard key={step.number} step={step} align="top" />
          ))}
        </div>

        <div className="h-12" />

        {/* Bottom row */}
        <div ref={bottomRowRef} className="relative flex items-center justify-center ml-1">
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
    <div data-step-card className="flex flex-col items-center w-[300px] flex-shrink-0 pt-[12px]">
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