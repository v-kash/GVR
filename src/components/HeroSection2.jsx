"use client";

import { useEffect, useRef } from "react";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Phone } from "lucide-react";
import { IconRowV4 } from "@/components/IconRow";
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

const BG_IMAGE = "/images2/finalhero2.webp";

export default function HeroSection() {
  // ── Refs ──────────────────────────────────────────────
  const sectionRef = useRef(null);
  const bgImgDesktopRef = useRef(null);
  const bgImgMobileRef = useRef(null);

  const eyebrowRef = useRef(null);
  const headlineRef = useRef(null);
  const dividerRef = useRef(null);
  const paragraphRef = useRef(null);
  const iconRowRef = useRef(null);
  const ctaRef = useRef(null);

  const iconRowMobileRef = useRef(null);
  const bottomBarRef = useRef(null);

  // ── Animations ────────────────────────────────────────
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // If reduced motion: just make everything visible immediately
    if (prefersReduced) {
      [
        bgImgDesktopRef, bgImgMobileRef,
        eyebrowRef, headlineRef, dividerRef,
        paragraphRef, iconRowRef, ctaRef,
        iconRowMobileRef, bottomBarRef,
      ].forEach((r) => {
        if (r.current) gsap.set(r.current, { opacity: 1, y: 0, scale: 1 });
      });
      return;
    }

    const ctx = gsap.context(() => {
      // ── Set initial hidden states ──────────────────────
      // gsap.set(
      //   [
      //     bgImgDesktopRef.current,
      //     bgImgMobileRef.current,
      //     eyebrowRef.current,
      //     headlineRef.current?.querySelectorAll("span"),
      //     dividerRef.current,
      //     paragraphRef.current,
      //     iconRowRef.current,
      //     ctaRef.current,
      //     iconRowMobileRef.current,
      //     bottomBarRef.current,
      //   ].filter(Boolean),
      //   { opacity: 0 }
      // );

      // ── Hero BG image — scale-in ───────────────────────
      // Desktop bg
      if (bgImgDesktopRef.current) {
        gsap.fromTo(
          bgImgDesktopRef.current,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 1.3, ease: "power3.out", delay: 0.05 }
        );
      }
      // Mobile bg
      if (bgImgMobileRef.current) {
        gsap.fromTo(
          bgImgMobileRef.current,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.05 }
        );
      }

      // ── Hero content — stagger fade-up sequence ────────
      const tl = gsap.timeline({ delay: 0.15 });

      // Eyebrow
      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
        );
      }

      // Headline lines — staggered
      if (headlineRef.current) {
        const lines = headlineRef.current.querySelectorAll("span");
        tl.fromTo(
          lines,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.14 },
          "-=0.4"
        );
      }

      // Divider
      if (dividerRef.current) {
        tl.fromTo(
          dividerRef.current,
          { opacity: 0, scaleX: 0, transformOrigin: "left center" },
          { opacity: 1, scaleX: 1, duration: 0.6, ease: "power3.out" },
          "-=0.35"
        );
      }

      // Paragraph
      if (paragraphRef.current) {
        tl.fromTo(
          paragraphRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.35"
        );
      }

      // Icon row (desktop)
      if (iconRowRef.current) {
        tl.fromTo(
          iconRowRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        );
      }

      // CTA button
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        );
      }

      // Icon row (mobile card)
      if (iconRowMobileRef.current) {
        tl.fromTo(
          iconRowMobileRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.25"
        );
      }

      // Bottom floating bar — last, slides up
      if (bottomBarRef.current) {
        tl.fromTo(
          bottomBarRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.2"
        );
      }

      // ── Hero BG image parallax scrub ───────────────────
      // Subtle depth effect as user scrolls past the hero
      if (bgImgDesktopRef.current) {
        gsap.to(bgImgDesktopRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
      if (bgImgMobileRef.current) {
        gsap.to(bgImgMobileRef.current, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ── CTA hover ─────────────────────────────────────────
  const hoverIn = (e) =>
    gsap.to(e.currentTarget, { scale: 1.03, duration: 0.25, ease: "power2.out" });
  const hoverOut = (e) =>
    gsap.to(e.currentTarget, { scale: 1, duration: 0.25, ease: "power2.out" });

  return (
    <section
      id="hero"
      ref={sectionRef}
      aria-label="GVR Fresh Foods – Farm Fresh Eggs Supplier"
      className="relative min-h-[90vh] md:min-h-[100vh] overflow-hidden bg-[#f5f0e7] flex flex-col -mb-[2px]"
    >
      {/* ── DESKTOP/TABLET (md+): full bg image ─────────────────────── */}
      <img
        ref={bgImgDesktopRef}
        src={BG_IMAGE}
        alt="Farm fresh eggs"
        className="hidden md:block absolute inset-0 h-[calc(100%+3px)] w-full object-cover object-right -bottom-[2px] opacity-0"
      />

      {/* ── MOBILE ONLY (< md): image in lower half ──────────────────── */}
      <div
        ref={bgImgMobileRef}
        className="md:hidden absolute bottom-[1px] left-0 right-0 h-[60%] opacity-0"
      >
        <img
          src={BG_IMAGE}
          alt="Farm fresh eggs"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────── */}
      <div
        className="relative z-10 flex flex-1
          pt-24 sm:pt-24 md:pt-26 lg:pt-28 xl:pt-28"
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-16">
          <div className="max-w-xl">

            {/* Eyebrow */}
            <div ref={eyebrowRef} className="mb-3 flex items-center gap-3 opacity-0">
              <div className="h-px w-8 bg-[#6E7E45]" />
              <p className={`${montserrat.className} text-[9px] uppercase tracking-[2px] text-[#323c18] whitespace-nowrap`}>
                Farm Fresh • Protein Rich • Delivered Daily
              </p>
            </div>

            {/* Heading */}
            <h1
              ref={headlineRef}
              className={`${cormorant.className} leading-[0.9] tracking-[-1.5px] text-[#735033] `}
            >
              <span className="block text-[52px] sm:text-[52px] md:text-[68px] lg:text-[80px] xl:text-[92px] font-semibold opacity-0">
                Pure Fresh
              </span>
              <span className="mt-1 block text-[52px] sm:text-[52px] md:text-[68px] lg:text-[80px] xl:text-[92px] italic font-medium text-[#6E7E45] opacity-0">
                Eggs Everyday.
              </span>
            </h1>

            {/* Divider */}
            <div
              ref={dividerRef}
              className="mt-4 md:mt-5 h-px w-full max-w-[340px] bg-[#6E7E45]/20 opacity-0"
            />

            {/* Paragraph */}
            <p
              ref={paragraphRef}
              className={`${montserrat.className} mt-4 md:mt-5 max-w-[480px] text-[12px] sm:text-[12px] md:text-[13px] lg:text-[13px] xl:text-[14px] leading-7 text-[#5f5146] opacity-0`}
            >
              Premium farm fresh eggs sourced hygienically and delivered daily
              for homes, retailers, hotels, and wholesale buyers with trusted
              quality and nutrition in every tray.
            </p>

            {/* Icon row — desktop */}
            <div ref={iconRowRef} className="hidden md:block opacity-0">
              <IconRowV4 />
            </div>

            {/* CTA Button */}
            <div ref={ctaRef} className="inline-block mt-6 sm:mt-7 md:mt-8 lg:mt-9 opacity-0">
              <Link
                href="/contact"
                className="inline-flex items-stretch rounded-lg overflow-hidden"
                onMouseEnter={hoverIn}
                onMouseLeave={hoverOut}
              >
                <span className="bg-[#3f4a22] px-3 md:px-4 flex items-center justify-center">
                  <Phone
                    size={15}
                    className="text-[#f5f0e7] md:w-[17px] md:h-[17px]"
                  />
                </span>
                <span
                  className={`${montserrat.className} bg-[#4D5B2A] px-5 md:px-6 py-3 md:py-3.5 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.15em] text-[#f5f0e7]`}
                >
                  Contact Us
                </span>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* ── MOBILE ONLY (< md): Icon card overlapping image ─────────── */}
      <div ref={iconRowMobileRef} className="md:hidden relative z-10 mx-4 pb-40 opacity-0">
        <IconRowV4 />
      </div>

      {/* ── BOTTOM FLOATING BAR ─────────────────────────────────────── */}
      <div
        ref={bottomBarRef}
        className="absolute bottom-6 md:bottom-3 lg:bottom-3 xl:bottom-3 left-1/2 -translate-x-1/2 w-[88%] max-w-2xl z-20 opacity-0"
      >
        <div className="bg-[#F3EEE4]/80 backdrop-blur-md rounded-full px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3.5 flex items-center justify-between border border-white/50">

          {/* Item 1 */}
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
            <div
              className="w-10 h-10 md:w-9 md:h-9 lg:w-9 lg:h-9 xl:w-10 xl:h-10 bg-[#7f6550]"
              style={{
                WebkitMaskImage: "url(/icons/Truck.svg)",
                maskImage: "url(/icons/Truck.svg)",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
            />
            <div className="text-center md:text-left">
              <p className={`${montserrat.className} text-[8px] md:text-[9px] lg:text-[10px] xl:text-[10px] font-semibold uppercase tracking-[0.08em] md:tracking-[0.1em] text-[#241A12]`}>
                <span className="md:hidden">Farm Delivery</span>
                <span className="hidden md:inline">Farm Fresh Delivery</span>
              </p>
              <p className={`${montserrat.className} hidden md:block text-[8px] lg:text-[9px] tracking-[0.08em] text-[#5f5146]/70 uppercase`}>
                To Your Doorstep
              </p>
            </div>
          </div>

          <div className="h-6 md:h-7 lg:h-8 w-px bg-[#6E7E45]/25 flex-shrink-0" />

          {/* Item 2 */}
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
            <div
              className="w-10 h-10 md:w-9 md:h-9 lg:w-9 lg:h-9 xl:w-10 xl:h-10 bg-[#7f6550]"
              style={{
                WebkitMaskImage: "url(/icons/HoldingLeaf.svg)",
                maskImage: "url(/icons/HoldingLeaf.svg)",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
            />
            <div className="text-center md:text-left">
              <p className={`${montserrat.className} text-[8px] md:text-[9px] lg:text-[10px] xl:text-[10px] font-semibold uppercase tracking-[0.08em] md:tracking-[0.1em] text-[#241A12]`}>
                <span className="md:hidden">Sustainable</span>
                <span className="hidden md:inline">Supporting Sustainable</span>
              </p>
              <p className={`${montserrat.className} hidden md:block text-[8px] lg:text-[9px] tracking-[0.08em] text-[#5f5146]/70 uppercase`}>
                Farming Communities
              </p>
            </div>
          </div>

          <div className="h-6 md:h-7 lg:h-8 w-px bg-[#6E7E45]/25 flex-shrink-0" />

          {/* Item 3 */}
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2">
            <div
              className="w-10 h-10 md:w-9 md:h-9 lg:w-9 lg:h-9 xl:w-10 xl:h-10 bg-[#7f6550]"
              style={{
                WebkitMaskImage: "url(/icons/Leafmore.svg)",
                maskImage: "url(/icons/Leafmore.svg)",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
            />
            <div className="text-center md:text-left">
              <p className={`${montserrat.className} text-[8px] md:text-[9px] lg:text-[10px] xl:text-[10px] font-semibold uppercase tracking-[0.08em] md:tracking-[0.1em] text-[#241A12]`}>
                <span className="md:hidden">Eco Friendly</span>
                <span className="hidden md:inline">Good for You</span>
              </p>
              <p className={`${montserrat.className} hidden md:block text-[8px] lg:text-[9px] tracking-[0.08em] text-[#5f5146]/70 uppercase`}>
                Good for the Planet
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── PAPER TORN DIVIDER — untouched ───────────────────────────── */}
      <div className="absolute md:-bottom-8 lg:-bottom-10 xl:-bottom-10 left-0 w-full md:h-[98px] lg:h-[115px] xl:h-[130px] z-0 pointer-events-none">
        <div
          className="w-full h-[105%] bg-[#f5f0e7]"
          style={{
            WebkitMaskImage: "url(/svgs/papertorn.svg)",
            maskImage: "url(/svgs/papertorn.svg)",
            WebkitMaskSize: "cover",
            maskSize: "cover",
            WebkitMaskRepeat: "stretch",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        />
      </div>

    </section>
  );
}