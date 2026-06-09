"use client";

import { useEffect, useRef } from "react";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
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

const segments = [
  {
    accent: "#4D5B2A",
    label: "Households",
    sub: (
      <>
        Fresh, nutritious eggs for
        <br />
        healthy everyday family meals
      </>
    ),
    desc: "High in nutrition, always fresh and perfect for every meal your family loves",
    href: "/contact",
  },
  {
    accent: "#6E7E45",
    label: "Restaurants & Cafes",
    sub: (
      <>
        Consistent quality eggs to
        <br />
        elevate every dish on your menu
      </>
    ),
    desc: "Reliable daily supply and great taste to keep your kitchen running smoothly",
    href: "/contact",
  },
  {
    accent: "#C49A2A",
    label: "Bakeries & Sweets",
    sub: (
      <>
        Premium eggs for perfect texture,
        <br />
        taste and consistent baking results
      </>
    ),
    desc: "Premium quality eggs for better texture, taste and consistent results every time",
    href: "/contact",
  },
  {
    accent: "#8B4E2A",
    label: "Hotels & Resorts",
    sub: (
      <>
        Bulk supply with timely delivery <br />
        and quality you can always trust
      </>
    ),
    desc: "Bulk orders, timely delivery and quality standards you can count on every day",
    href: "/contact",
  },
  {
    accent: "#5C3D1E",
    label: "Food Industries",
    sub: (
      <>
        Hygienic, large-scale egg supply
        <br />
        for all your production requirements
      </>
    ),
    desc: "Hygienic handling and large scale supply for all your production needs",
    href: "/contact",
  },
];

export default function WhoWeServe() {
  // ── Refs ──────────────────────────────────────────────
  const sectionRef    = useRef(null);
  const headingMobileRef  = useRef(null);
  const headingDesktopRef = useRef(null);
  const subtaglineRef = useRef(null);
  const segmentsRef   = useRef(null);
  const partnerBarRef = useRef(null);

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

      // ── Desktop heading — eyebrow + staggered headline spans ──
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

      // ── Segment rows — staggered fade-up + slight x slide ─────
      // Each row slides up AND in slightly from the left, staggered
      // so they "deal" onto the screen one by one like cards.
      if (segmentsRef.current) {
        const rows = segmentsRef.current.querySelectorAll("[data-segment]");
        gsap.fromTo(
          rows,
          { opacity: 0, y: 20, x: -16 },
          {
            opacity: 1, y: 0, x: 0,
            duration: 0.65,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: segmentsRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // ── Partner bar — fade-up ──────────────────────────
      if (partnerBarRef.current) {
        gsap.fromTo(
          partnerBarRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: partnerBarRef.current, start: "top 80%", once: true },
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ── CTA hover ─────────────────────────────────────────
  const hoverIn  = (e) => gsap.to(e.currentTarget, { scale: 1.03, duration: 0.25, ease: "power2.out" });
  const hoverOut = (e) => gsap.to(e.currentTarget, { scale: 1,    duration: 0.25, ease: "power2.out" });

  return (
    <section
      id="who-we-serve"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f5f0e7] py-12 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16">

        {/* ── HEADING ──────────────────────────────────────── */}
        <div className="mb-10 lg:mb-12">

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
                <div className="mb-2 w-10" />
              </div>
              <div className="flex flex-col">
                <p className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`} style={{ fontWeight: 500 }}>
                  Who We Serve
                </p>
                <div className="mt-2 h-[0.5px] w-[100px] bg-[#d8d2c4]" />
              </div>
            </div>
            <h2 className={`${cormorant.className} leading-[1.0] text-[#241A12] text-center`}>
              <span className="text-[34px] sm:text-[38px] md:text-[48px] font-semibold">We Deliver to </span>
              <span className="text-[34px] sm:text-[38px] md:text-[48px] italic font-medium text-[#4D5B2A]">Everyone</span>
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
                  className="w-7 h-7 lg:w-8 lg:h-8 bg-[#6E7E45]"
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
                <div className="mb-2 w-10" />
              </div>
              <div className="flex flex-col">
                <p className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`} style={{ fontWeight: 500 }}>
                  Who We Serve
                </p>
                <div className="mt-2 h-[0.5px] w-[100px] bg-[#d8d2c4]" />
              </div>
            </div>
            <h2
              data-headline
              className={`${cormorant.className} leading-[1.0] text-[#241A12] absolute left-0 right-0 text-center`}
            >
              <span className="text-[44px] lg:text-[58px] xl:text-[72px] font-semibold">We Deliver to </span>
              <span className="text-[44px] lg:text-[58px] xl:text-[72px] italic font-medium text-[#4D5B2A]">Everyone</span>
            </h2>
          </div>

          {/* Subtext */}
          <p
            ref={subtaglineRef}
            className={`${montserrat.className} text-[14px] lg:text-[16px] pt-6 sm:pt-8 md:pt-10 lg:pt-12 text-[#5f5146] leading-7 text-center max-w-2xl mx-auto`}
            style={{ fontWeight: 400 }}
          >
            Whether you need eggs for your family or your business — we've got
            you covered, every day.
          </p>
        </div>

        {/* ── SEGMENT ROWS ─────────────────────────────────── */}
        <div ref={segmentsRef} className="flex flex-col mt-6 sm:mt-8">
          {segments.map((s, i) => (
            <div
              key={i}
              data-segment
              className="group flex flex-col sm:flex-row items-stretch border-b border-[#6E7E45]/10 hover:bg-[#edf3de]/30 transition-colors duration-200 cursor-pointer"
            >
              {/* Left block */}
              <div className="flex items-center gap-0 w-full sm:w-[260px] md:w-[300px] lg:w-[340px] flex-shrink-0 py-0.5">
                <div
                  className="w-[4px] self-stretch rounded-l-full flex-shrink-0"
                  style={{ backgroundColor: s.accent }}
                />
                <div
                  className="flex flex-col justify-center px-4 sm:px-5 py-3 sm:py-4 rounded-r-2xl flex-1"
                  style={{
                    backgroundColor: `${s.accent}12`,
                    clipPath: "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%)",
                  }}
                >
                  <p
                    className={`${montserrat.className} text-[11px] sm:text-[12px] lg:text-[13px] text-[#241A12] uppercase tracking-[0.08em]`}
                    style={{ fontWeight: 700 }}
                  >
                    {s.label}
                  </p>
                  <p
                    className={`${montserrat.className} mt-1 text-[10px] sm:text-[11px] lg:text-[12px] text-[#5f5146] hidden sm:block`}
                    style={{
                      fontWeight: 400,
                      lineHeight: "1.5",
                      height: "3em",
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {s.sub}
                  </p>
                </div>
              </div>

              {/* Vertical divider — hidden on mobile */}
              <div className="hidden sm:block w-px bg-[#6E7E45]/15 flex-shrink-0 mx-4 md:mx-5 lg:mx-6 my-4" />

              {/* Right block */}
              <div className="hidden sm:flex flex-1 items-center justify-between py-3 sm:py-6 px-4 sm:px-0 gap-4">
                <p
                  className={`${montserrat.className} text-[12px] sm:text-[13px] lg:text-[14px] text-[#5f5146] leading-[1.7]`}
                  style={{ fontWeight: 400 }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── PARTNER BAR ──────────────────────────────────── */}
        <div
          ref={partnerBarRef}
          className="mt-8 sm:mt-10 bg-[#f0ece2] border border-[#6E7E45]/15 rounded-2xl px-6 sm:px-8 py-5 sm:py-6 flex flex-col lg:flex-row items-center gap-5 sm:gap-6 lg:gap-0 justify-between"
        >
          {/* Left — Partner text */}
          <div className="lg:flex-1 text-center lg:text-left">
            <p className={`${montserrat.className} text-[15px] sm:text-[16px] text-[#241A12]`} style={{ fontWeight: 700 }}>
              Partner with GVR Fresh Foods
            </p>
            <p className={`${montserrat.className} mt-1 text-[12px] text-[#5f5146]`} style={{ fontWeight: 400 }}>
              Quality eggs. Strong relationships. Shared growth.
            </p>
          </div>

          {/* Divider — desktop only */}
          <div className="hidden lg:block w-px h-12 bg-[#6E7E45]/20 mx-8 flex-shrink-0" />

          {/* Center — Phone */}
          <div className="flex items-center gap-3 sm:gap-4 lg:flex-1 justify-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#4D5B2A] flex items-center justify-center flex-shrink-0">
              <Phone size={16} className="text-[#f5f0e7]" />
            </div>
            <div>
              <p className={`${montserrat.className} text-[11px] text-[#5f5146]`} style={{ fontWeight: 400 }}>
                Let's build something great together.
              </p>
              <p className={`${montserrat.className} text-[16px] sm:text-[18px] text-[#241A12]`} style={{ fontWeight: 700 }}>
                +91 94484 53609
              </p>
            </div>
          </div>

          {/* Divider — desktop only */}
          <div className="hidden lg:block w-px h-12 bg-[#6E7E45]/20 mx-8 flex-shrink-0" />

          {/* Right — CTA button */}
          <div className="lg:flex-1 flex justify-center lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-stretch rounded-lg overflow-hidden"
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              <span className="bg-[#3f4a22] px-4 flex items-center justify-center">
                <ArrowRight size={16} className="text-[#f5f0e7]" />
              </span>
              <span
                className={`${montserrat.className} bg-[#4D5B2A] px-5 sm:px-6 py-3 sm:py-3.5 text-[11px] uppercase tracking-[0.15em] text-[#f5f0e7]`}
                style={{ fontWeight: 600 }}
              >
                Become a Partner
              </span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}