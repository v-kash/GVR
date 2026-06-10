"use client";

import { useEffect, useRef } from "react";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
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

export default function AboutHero() {
  // ── Refs ──────────────────────────────────────────────
  const sectionRef      = useRef(null);
  const bgImgDesktopRef = useRef(null);
  const bgImgMobileRef  = useRef(null);
  const eyebrowRef      = useRef(null);
  const headlineRef     = useRef(null);
  const dividerRef      = useRef(null);
  const descriptionRef  = useRef(null);

  // ── Animations ────────────────────────────────────────
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      [
        bgImgDesktopRef,
        bgImgMobileRef,
        eyebrowRef,
        headlineRef,
        dividerRef,
        descriptionRef,
      ].forEach((r) => {
        if (r.current)
          gsap.set(r.current, { opacity: 1, y: 0, scale: 1, scaleX: 1 });
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
      //     headlineRef.current,
      //     dividerRef.current,
      //     descriptionRef.current,
      //   ].filter(Boolean),
      //   { opacity: 0 }
      // );

      // ── BG images — scale-in ───────────────────────────
      if (bgImgDesktopRef.current) {
        gsap.fromTo(
          bgImgDesktopRef.current,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out", delay: 0.05 }
        );
      }
      if (bgImgMobileRef.current) {
        gsap.fromTo(
          bgImgMobileRef.current,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out", delay: 0.05 }
        );
      }

      // ── Content — stagger fade-up sequence ────────────
      const tl = gsap.timeline();

      // Eyebrow / breadcrumb
      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
        );
      }

      // Headline
      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.35"
        );
      }

      // Divider — scaleX wipe
      if (dividerRef.current) {
        tl.fromTo(
          dividerRef.current,
          { opacity: 0, scaleX: 0, transformOrigin: "left center" },
          { opacity: 1, scaleX: 1, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        );
      }

      // Description
      if (descriptionRef.current) {
        tl.fromTo(
          descriptionRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.3"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f5f0e7] min-h-[55vh] flex items-center"
    >
      {/* ── MOBILE bg image ───────────────────────────────── */}
      <img
        ref={bgImgMobileRef}
        src="/about/hero-about-m.webp"
        alt="Farm fresh eggs"
        className="
          md:hidden
          absolute right-0 top-20
          h-[80%] object-cover object-right
          w-[90%] opacity-0
        "
      />

      {/* ── DESKTOP bg image ──────────────────────────────── */}
      <img
        ref={bgImgDesktopRef}
        src="/about/hero-about.webp"
        alt="Farm fresh eggs"
        className="
          hidden md:block
          absolute right-0 top-0
          h-full object-cover
          object-right md:object-left lg:object-left xl:object-left
          w-[100%] md:w-[100%] lg:w-[80%] xl:w-[60%] opacity-0
        "
      />

      {/* ── Gradient fade ─────────────────────────────────── */}
      <div
        className="absolute inset-y-0 left-0 z-10
          w-[30%] md:w-[40%] lg:w-[45%] xl:w-[75%]"
        style={{
          background:
            "linear-gradient(to right, #f5f0e7 60%, transparent 100%)",
        }}
      />

      {/* ── Content ───────────────────────────────────────── */}
      <div
        className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-16
          py-14 sm:py-14 md:py-16 lg:py-18 xl:py-24"
      >
        <div className="max-w-[520px]">

          {/* Breadcrumb */}
          <div
            ref={eyebrowRef}
            className="flex items-center gap-2
              mb-5 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 opacity-0"
          >
            <Link
              href="/"
              className={`${montserrat.className} text-[11px] uppercase tracking-[0.15em] text-[#4D5B2A] font-bold`}
            >
              Home
            </Link>
            <ChevronRight size={13} className="text-[#5f5146]/50" />
            <span
              className={`${montserrat.className} text-[11px] uppercase tracking-[0.15em] text-[#5f5146]/60 font-normal`}
            >
              About Us
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className={`${cormorant.className} leading-[0.95] font-semibold text-[#241A12]
              text-[44px] sm:text-[44px] md:text-[64px] lg:text-[80px] xl:text-[96px] opacity-0`}
          >
            About Us
          </h1>

          {/* Gold divider */}
          <div
            ref={dividerRef}
            className="h-[2px] w-10 bg-[#C49A2A]
              mt-4 sm:mt-4 md:mt-4 lg:mt-5 xl:mt-5
              mb-4 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-6 opacity-0"
          />

          {/* Description */}
          <p
            ref={descriptionRef}
            className={`${montserrat.className} leading-[1.8] text-[#5f5146] font-normal
              text-[13px] sm:text-[13px] md:text-[13px] lg:text-[14px] xl:text-[15px] opacity-0`}
          >
            Delivering farm-fresh eggs with care,
            <br />
            consistency, and quality you can trust.
          </p>

        </div>
      </div>
    </section>
  );
}