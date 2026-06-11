"use client";

import { useRef, useEffect, useState } from "react";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Mail, Phone } from "lucide-react";
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

const DOT_ANGLES = [50, 130, 180, 230, 312, 360];
// const CONNECTOR_LENGTHS_XL = [90, 90, 70, 70, 75, 60];
const CONNECTOR_LENGTHS_XL = [90, 90, 90, 90, 90, 90];


export default function BulkSupply() {
  const radialRef         = useRef(null);
  const [scale, setScale] = useState(1);

  // ── Refs for animation ────────────────────────────────
  const sectionRef        = useRef(null);
  const headingMobileRef  = useRef(null);
  const headingDesktopRef = useRef(null);
  const subtaglineRef     = useRef(null);
  const mobileGridRef     = useRef(null);
  const mobileCTARef      = useRef(null);

  // Radial-specific refs
  const dashedCircleRef   = useRef(null);  // the dashed border div (wrapped in svg overlay)
  const connectorSvgRef   = useRef(null);  // SVG with lines + endpoint dots
  const edgeDotsRef       = useRef(null);  // container for the gold edge dots
  const centerRef         = useRef(null);  // GVR center block
  const leftItemsRef      = useRef(null);  // left orbit items wrapper
  const rightItemsRef     = useRef(null);  // right orbit items wrapper
  const bottomCTARef      = useRef(null);

  // ── Scale measurement ─────────────────────────────────
  useEffect(() => {
    const calc = () => {
      if (!radialRef.current) return;
      const W = radialRef.current.offsetWidth;
      const s = Math.min(1, W / 1100);
      setScale(s);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  // ── Animations — depend on scale being set ────────────
  // Using scale in the dep array ensures animations re-register
  // when the container size is first measured (scale: 1 → real value).
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {

      // ── Mobile heading ───────────────────────────────
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

      // ── Desktop heading ──────────────────────────────
      if (headingDesktopRef.current) {
        const eyebrow = headingDesktopRef.current.querySelector("[data-eyebrow]");
        const spans   = headingDesktopRef.current.querySelectorAll("[data-headline] span");
        const tl = gsap.timeline({
          scrollTrigger: { trigger: headingDesktopRef.current, start: "top 80%", once: true },
        });
        if (eyebrow) tl.fromTo(eyebrow, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" });
        if (spans.length) tl.fromTo(spans, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.13 }, "-=0.4");
      }

      // ── Sub-tagline ──────────────────────────────────
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

      // ── Mobile grid cards ────────────────────────────
      if (mobileGridRef.current) {
        const cards = mobileGridRef.current.querySelectorAll("[data-card]");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 24, scale: 0.96 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.65, ease: "power3.out", stagger: 0.08,
            scrollTrigger: { trigger: mobileGridRef.current, start: "top 80%", once: true },
          }
        );
      }

      // ── Mobile CTA ───────────────────────────────────
      if (mobileCTARef.current) {
        gsap.fromTo(
          mobileCTARef.current,
          { opacity: 0, y: 16 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
            scrollTrigger: { trigger: mobileCTARef.current, start: "top 80%", once: true },
          }
        );
      }

      // ── RADIAL DIAGRAM (md+) ─────────────────────────
      // Trigger fires once the radial container enters viewport.
      // All sub-animations are chained in a single timeline.
      if (radialRef.current) {
        const radialTl = gsap.timeline({
          scrollTrigger: {
            trigger: radialRef.current,
            start: "top 75%",
            once: true,
          },
        });

        // 1. Dashed circle — scale from 0 (center outward)
        if (dashedCircleRef.current) {
          radialTl.fromTo(
            dashedCircleRef.current,
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 0.9, ease: "power3.out" }
          );
        }

        // 2. Center GVR block — scale-in while circle is finishing
        if (centerRef.current) {
          radialTl.fromTo(
            centerRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.75, ease: "power3.out" },
            "-=0.5"
          );
        }

        // 3. SVG connectors + endpoint dots — fade in staggered
        if (connectorSvgRef.current) {
          const connectorGroups = connectorSvgRef.current.querySelectorAll("g");
          radialTl.fromTo(
            connectorGroups,
            { opacity: 0, scale: 0.6, transformOrigin: "50% 50%" },
            { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out", stagger: 0.07 },
            "-=0.3"
          );
        }

        // 4. Edge dots — stagger fade-in
        if (edgeDotsRef.current) {
          const dots = edgeDotsRef.current.querySelectorAll("[data-edge-dot]");
          radialTl.fromTo(
            dots,
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.4)", stagger: 0.07 },
            "-=0.5"
          );
        }

        // 5. Left orbit items — slide in from left
        if (leftItemsRef.current) {
          const items = leftItemsRef.current.querySelectorAll("[data-orbit-item]");
          radialTl.fromTo(
            items,
            { opacity: 0, x: -28 },
            { opacity: 1, x: 0, duration: 0.65, ease: "power3.out", stagger: 0.12 },
            "-=0.35"
          );
        }

        // 6. Right orbit items — slide in from right, overlap with left
        if (rightItemsRef.current) {
          const items = rightItemsRef.current.querySelectorAll("[data-orbit-item]");
          radialTl.fromTo(
            items,
            { opacity: 0, x: 28 },
            { opacity: 1, x: 0, duration: 0.65, ease: "power3.out", stagger: 0.12 },
            "-=0.6"  // start while left items are still coming in
          );
        }
      }

      // ── Bottom CTA bar ───────────────────────────────
      if (bottomCTARef.current) {
        gsap.fromTo(
          bottomCTARef.current,
          { opacity: 0, y: 22 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: bottomCTARef.current, start: "top 80%", once: true },
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, [scale]); // re-run once scale is measured so DOM positions are correct

  // ── CTA hover ─────────────────────────────────────────
  const hoverIn  = (e) => gsap.to(e.currentTarget, { scale: 1.03, duration: 0.25, ease: "power2.out" });
  const hoverOut = (e) => gsap.to(e.currentTarget, { scale: 1,    duration: 0.25, ease: "power2.out" });

  // ── Derived values (same as original) ─────────────────
  const R = 220 * scale;
  const CONNECTOR_LENGTHS = CONNECTOR_LENGTHS_XL.map((l) => l * scale);
  const containerH = 600 * scale;

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f5f0e7] overflow-hidden py-8 lg:py-12"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16">

        {/* ── HEADING ──────────────────────────────────────── */}
        <div className="mb-10">

          {/* Mobile + Tablet */}
          <div
            ref={headingMobileRef}
            className="flex flex-col items-center lg:hidden gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <div
                  className="w-8 h-8 bg-[#6E7E45]"
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
                  Bulk Supply
                </p>
                <div className="mt-2 h-[0.5px] w-[90px] bg-[#d8d2c4]" />
              </div>
            </div>
            <h2 className={`${cormorant.className} leading-[1.0] text-[#241A12] text-center`}>
              <span className="text-[32px] sm:text-[34px] font-semibold">A Trusted Partner </span>
              <span className="text-[32px] sm:text-[34px] italic font-medium text-[#6E7E45]">for Your Business.</span>
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
                  className="w-8 h-8 bg-[#6E7E45]"
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
                  Bulk Supply
                </p>
                <div className="mt-2 h-[0.5px] w-[90px] bg-[#d8d2c4]" />
              </div>
            </div>
            <h2
              data-headline
              className={`${cormorant.className} leading-[1.0] text-[#241A12] absolute left-0 right-0 text-center`}
            >
              <span className="text-[36px] lg:text-[60px] font-semibold">A Trusted Partner </span>
              <br />
              <span className="text-[36px] lg:text-[60px] italic font-medium text-[#6E7E45]">for Your Business.</span>
            </h2>
          </div>

          <p
            ref={subtaglineRef}
            className={`${montserrat.className} text-[13px] lg:text-[14px] text-[#5f5146] leading-[1.8] pt-4 md:pt-10 lg:pt-24 text-center max-w-lg mx-auto`}
            style={{ fontWeight: 400 }}
          >
            From our farm to your business — we deliver freshness, quality and
            reliability in every bulk order.
          </p>
        </div>

        {/* ── MOBILE GRID (< md) ────────────────────────────── */}
        <div
  ref={mobileGridRef}
  className="md:hidden grid grid-cols-2 gap-6 mb-8 place-items-center"
>
  {[
    "/products/bigbasket.png",
    "/products/blinkit.png",
    "/products/flipkart.png",
    "/products/Swiggy.png",
    "/products/zepto.png",
    "/products/freshtohome.png",
  ].map((logo, i) => (
    <div key={i} data-card className="flex items-center justify-center">
      <img
        src={logo}
        alt=""
        className="w-[120px] h-auto object-contain"
        onError={(e) => (e.target.style.display = "none")}
      />
    </div>
  ))}
</div>

        {/* ── RADIAL DIAGRAM (md+) ─────────────────────────── */}
        <div
          ref={radialRef}
          className="hidden md:block relative w-full"
          style={{ height: `${containerH}px` }}
        >
          {/* Dashed circle */}
          <div
            className="absolute"
            style={{
              left: "50%", top: "50%",
              transform: "translate(-50%, -50%)",
              width: `${R * 1.6}px`,
              height: `${R * 1.6}px`,
            }}
          >
            {/* Dashed border — animation target */}
            <div
              ref={dashedCircleRef}
              className="w-full h-full rounded-full border-2 border-dashed border-[#C49A2A]/40"
            />

            {/* SVG connectors + endpoint dots */}
            <svg
              ref={connectorSvgRef}
              className="absolute"
              style={{
                left: "50%", top: "50%",
                transform: "translate(-50%, -50%)",
                width: `${R * 1.6}px`,
                height: `${R * 1.6}px`,
                zIndex: 2,
                overflow: "visible",
              }}
              viewBox={`0 0 ${R * 1.6} ${R * 1.6}`}
            >
              {DOT_ANGLES.map((deg, i) => {
                const cr  = (R * 1.6) / 2;
                const rad = (deg * Math.PI) / 180;
                const dotX = cr + Math.cos(rad) * cr;
                const dotY = cr - Math.sin(rad) * cr;
                const endX = cr + Math.cos(rad) * (cr + CONNECTOR_LENGTHS[i]);
                const endY = cr - Math.sin(rad) * (cr + CONNECTOR_LENGTHS[i]);
                return (
                  <g key={i}>
                    <line x1={dotX} y1={dotY} x2={endX} y2={endY} stroke="#C49A2A" strokeWidth="1.5" strokeDasharray="5,4" opacity="0.6" />
                    <circle cx={endX} cy={endY} r="4" fill="#C49A2A" />
                  </g>
                );
              })}
            </svg>

            {/* Edge dots */}
            <div ref={edgeDotsRef}>
              {DOT_ANGLES.map((deg, i) => {
                const cr  = (R * 1.6) / 2;
                const rad = (deg * Math.PI) / 180;
                const x   = cr + Math.cos(rad) * cr;
                const y   = cr - Math.sin(rad) * cr;
                return (
                  <div
                    key={i}
                    data-edge-dot
                    className="absolute w-3 h-3 rounded-full bg-[#C49A2A]"
                    style={{ left: `${x - 6}px`, top: `${y - 6}px` }}
                  />
                );
              })}
            </div>
          </div>

          {/* Center */}
          <div
            ref={centerRef}
            className="absolute flex flex-col items-center justify-center text-center"
            style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)", zIndex: 10 }}
          >
            <p className={`${cormorant.className} font-semibold text-[#4D5B2A] leading-none`} style={{ fontSize: `${32 * scale}px` }}>
              GVR
            </p>
            <p className={`${montserrat.className} uppercase tracking-[0.22em] text-[#6E7E45] mb-3`} style={{ fontWeight: 600, fontSize: `${9 * scale}px` }}>
              Fresh Foods
            </p>
            <img
              src="/products/eggbox2.webp"
              alt="GVR Egg Box"
              style={{ width: `${250 * scale}px` }}
              className="object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.15)]"
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </div>

          {/* Left orbit items */}
          <div ref={leftItemsRef}>
            {/* Retailers — top left */}
            <div data-orbit-item className="absolute flex items-center gap-3" style={{ top: "8%", left: `${27 * scale}%` }}>
              <div style={{ width: `${80 * scale}px`, height: `${80 * scale}px` }} className=" overflow-hidden  flex-shrink-0 bg-transparent">
                <img src="/products/bigbasket.png" alt="" className="w-full h-full object-cover" onError={(e) => (e.target.style.display = "none")} />
              </div>
              <div>
                {/* <p className={`${montserrat.className} uppercase tracking-[0.1em] text-[#241A12]`} style={{ fontWeight: 700, fontSize: `${11 * scale}px` }}>Big basket</p> */}
                {/* <p className={`${montserrat.className} text-[#5f5146] leading-[1.5]`} style={{ fontWeight: 400, fontSize: `${10 * scale}px`, maxWidth: `${160 * scale}px` }}>
                  Consistent supply of fresh eggs to keep your shelves always stocked.
                </p> */}
              </div>
            </div>

            {/* Hotels — middle left */}
            <div data-orbit-item className="absolute flex items-center gap-3" style={{ top: "50%", left: `${18 * scale}%`, transform: "translateY(-50%)" }}>
              <div style={{ width: `${80 * scale}px`, height: `${80 * scale}px` }} className="overflow-hidden  flex-shrink-0 bg-transparent">
                <img src="/products/blinkit.png" alt="" className="w-full h-full object-cover" onError={(e) => (e.target.style.display = "none")} />
              </div>
              <div>
                {/* <p className={`${montserrat.className} uppercase tracking-[0.1em] text-[#241A12]`} style={{ fontWeight: 700, fontSize: `${11 * scale}px` }}>Blinkit</p> */}
                {/* <p className={`${montserrat.className} text-[#5f5146] leading-[1.5]`} style={{ fontWeight: 400, fontSize: `${10 * scale}px`, maxWidth: `${160 * scale}px` }}>
                  Reliable bulk supply to deliver great experiences every day.
                </p> */}
              </div>
            </div>

            {/* Cafes — bottom left */}
            <div data-orbit-item className="absolute flex items-center gap-3" style={{ bottom: "5%", left: `${24 * scale}%` }}>
              <div style={{ width: `${100 * scale}px`, height: `${80 * scale}px` }} className="overflow-hidden scale-[1.5] flex-shrink-0 bg-transparent">
                <img src="/products/flipkart.png" alt="" className="w-full h-full object-cover" onError={(e) => (e.target.style.display = "none")} />
              </div>
              <div>
                {/* <p className={`${montserrat.className} uppercase tracking-[0.1em] text-[#241A12]`} style={{ fontWeight: 700, fontSize: `${11 * scale}px` }}>Flipkart</p> */}
                {/* <p className={`${montserrat.className} text-[#5f5146] leading-[1.5]`} style={{ fontWeight: 400, fontSize: `${10 * scale}px`, maxWidth: `${160 * scale}px` }}>
                  From breakfast to brunch, we keep your kitchen running.
                </p> */}
              </div>
            </div>
          </div>

          {/* Right orbit items */}
          <div ref={rightItemsRef}>
            {/* Restaurants — top right */}
            <div data-orbit-item className="absolute flex items-center gap-3 flex-row-reverse" style={{ top: "6%", right: `${28 * scale}%` }}>
              <div style={{ width: `${80 * scale}px`, height: `${80 * scale}px` }} className="overflow-hidden  flex-shrink-0 bg-transparent">
                <img src="/products/Swiggy.png" alt="" className="w-full h-full object-cover" onError={(e) => (e.target.style.display = "none")} />
              </div>
              <div className="text-right">
                {/* <p className={`${montserrat.className} uppercase tracking-[0.1em] text-[#241A12]`} style={{ fontWeight: 700, fontSize: `${11 * scale}px` }}>Swiggy</p> */}
                {/* <p className={`${montserrat.className} text-[#5f5146] leading-[1.5]`} style={{ fontWeight: 400, fontSize: `${10 * scale}px`, maxWidth: `${160 * scale}px` }}>
                  Premium quality eggs for delicious dishes your customers love.
                </p> */}
              </div>
            </div>

            {/* Bakeries — middle right */}
            <div data-orbit-item className="absolute flex items-center gap-3 flex-row-reverse" style={{ top: "50%", right: `${17 * scale}%`, transform: "translateY(-50%)" }}>
              <div style={{ width: `${90 * scale}px`, height: `${80 * scale}px` }} className="overflow-hidden  flex-shrink-0 bg-transparent">
                <img src="/products/zepto.png" alt="" className="w-full h-full object-cover" onError={(e) => (e.target.style.display = "none")} />
              </div>
              <div className="text-right">
                {/* <p className={`${montserrat.className} uppercase tracking-[0.1em] text-[#241A12]`} style={{ fontWeight: 700, fontSize: `${11 * scale}px` }}>Zepto</p> */}
                {/* <p className={`${montserrat.className} text-[#5f5146] leading-[1.5]`} style={{ fontWeight: 400, fontSize: `${10 * scale}px`, maxWidth: `${160 * scale}px` }}>
                  Fresh, high-quality eggs that bring perfection to every bake.
                </p> */}
              </div>
            </div>

            {/* Distributors — bottom right */}
            <div data-orbit-item className="absolute flex items-center gap-3 flex-row-reverse" style={{ bottom: "8%", right: `${25 * scale}%` }}>
              <div style={{ width: `${90 * scale}px`, height: `${60 * scale}px` }} className="overflow-hidden  flex-shrink-0 bg-transparent">
                <img src="/products/freshtohome.png" alt="" className="w-full h-full object-cover" onError={(e) => (e.target.style.display = "none")} />
              </div>
              <div className="text-right">
                {/* <p className={`${montserrat.className} uppercase tracking-[0.1em] text-[#241A12]`} style={{ fontWeight: 700, fontSize: `${11 * scale}px` }}>Fresh To Home</p> */}
                {/* <p className={`${montserrat.className} text-[#5f5146] leading-[1.5]`} style={{ fontWeight: 400, fontSize: `${10 * scale}px`, maxWidth: `${160 * scale}px` }}>
                  Partner with us for a steady supply you can count on.
                </p> */}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile CTA */}
        <div ref={mobileCTARef} className="md:hidden max-w-sm mx-auto mt-6">
          <a
            href="mailto:gvrfreshfoodsprivatelimited@gmail.com"
            className="group flex items-center justify-center rounded-2xl overflow-hidden shadow-lg"
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
          >
            <span className="bg-[#8B6914] px-5 py-4 flex items-center justify-center">
              <Mail size={18} className="text-[#f5f0e7] transition-transform duration-300 group-hover:rotate-6" />
            </span>
            <span className={`${montserrat.className} flex-1 bg-[#C49A2A] py-4 text-center text-[12px] uppercase tracking-[0.18em] text-[#241A12]`} style={{ fontWeight: 700 }}>
              Enquire Now
            </span>
          </a>
        </div>

        {/* Bottom CTA bar (md+) */}
        <div ref={bottomCTARef} className="hidden md:block max-w-4xl mx-auto">
          <div className="mt-6 bg-[#3f4a22] rounded-2xl px-6 sm:px-8 md:px-8 md:py-2 lg:px-10 lg:py-4 py-4 sm:py-5 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8">
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border border-[#c5db8e]/30 flex items-center justify-center">
                <Phone size={18} className="text-[#c5db8e]" />
              </div>
              <div>
                <p className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#c5db8e] mb-1`} style={{ fontWeight: 600 }}>
                  Let's Grow Together
                </p>
                <p className={`${montserrat.className} hidden lg:block text-[12px] text-[#f5f0e7]/70 leading-[1.6] text-center md:text-left`} style={{ fontWeight: 400 }}>
                  For bulk orders and partnership inquiries,
                  <br className="hidden sm:block" /> our team is ready to assist you.
                </p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-[#f5f0e7]/10" />
            <a
              href="mailto:gvrfreshfoodsprivatelimited@gmail.com"
              className="inline-flex items-stretch rounded-lg overflow-hidden"
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              <span className="bg-[#8B6914] px-4 flex items-center justify-center">
                <Mail size={16} className="text-[#f5f0e7]" />
              </span>
              <span className={`${montserrat.className} bg-[#C49A2A] px-2 py-3 md:px-4 md:py-3 lg:px-7 lg:py-3.5 md:text-[10px] lg:text-[11px] uppercase tracking-[0.15em] text-[#241A12]`} style={{ fontWeight: 700 }}>
                Enquire Now
              </span>
            </a>
            <div className="hidden md:block w-px h-12 bg-[#f5f0e7]/10" />
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-[#c5db8e]" />
              <a href="tel:+919448453609" className={`${montserrat.className} text-[13px] text-[#f5f0e7]/80 hover:text-[#c5db8e] transition-colors`} style={{ fontWeight: 500 }}>
                +91 94484 53609
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}