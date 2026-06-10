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

export default function ContactHero() {
  // ── Refs ──────────────────────────────────────────────
  const sectionRef     = useRef(null);
  const bgImgRef       = useRef(null);
  const eyebrowRef     = useRef(null);
  const headlineRef    = useRef(null);
  const dividerRef     = useRef(null);
  const descriptionRef = useRef(null);

  // ── Animations ────────────────────────────────────────
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      [bgImgRef, eyebrowRef, headlineRef, dividerRef, descriptionRef].forEach(
        (r) => {
          if (r.current)
            gsap.set(r.current, { opacity: 1, y: 0, scale: 1, scaleX: 1 });
        }
      );
      return;
    }

    const ctx = gsap.context(() => {
      // ── Initial hidden states ──────────────────────────
      gsap.set(
        [
          bgImgRef.current,
          eyebrowRef.current,
          headlineRef.current,
          dividerRef.current,
          descriptionRef.current,
        ].filter(Boolean),
        { opacity: 0 }
      );

      // ── BG image — scale-in ────────────────────────────
      if (bgImgRef.current) {
        gsap.fromTo(
          bgImgRef.current,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out", delay: 0.05 }
        );
      }

      // ── Content — stagger fade-up sequence ────────────
      const tl = gsap.timeline();

      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
        );
      }

      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.35"
        );
      }

      if (dividerRef.current) {
        tl.fromTo(
          dividerRef.current,
          { opacity: 0, scaleX: 0, transformOrigin: "left center" },
          { opacity: 1, scaleX: 1, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        );
      }

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
      {/* ── BG image ──────────────────────────────────────── */}
      <img
        ref={bgImgRef}
        src="/products/contacthero.webp"
        alt="Farm fresh eggs"
        className="absolute right-0 top-0 h-full w-[50%] md:w-[80%] lg:w-[75%] xl:w-[60%] object-cover object-left opacity-0"
        style={{ objectPosition: "left -60px" }}
      />

      {/* ── Gradient fade ─────────────────────────────────── */}
      <div
        className="absolute inset-y-0 left-0 z-10
          w-[30%] md:w-[40%] lg:w-[45%] xl:w-[60%]"
        style={{
          background:
            "linear-gradient(to right, #f5f0e7 70%, transparent 100%)",
        }}
      />

      {/* ── Content ───────────────────────────────────────── */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-16 py-24">
        <div className="max-w-[520px]">

          {/* Breadcrumb */}
          <div
            ref={eyebrowRef}
            className="flex items-center gap-2 mb-8 opacity-0"
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
              Contact
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className={`${cormorant.className} text-[48px] md:text-[58px] lg:text-[72px] xl:text-[96px] font-semibold text-[#241A12] leading-[0.95] opacity-0`}
          >
            Contact Us
          </h1>

          {/* Gold divider */}
          <div
            ref={dividerRef}
            className="mt-5 mb-6 h-[2px] w-10 bg-[#C49A2A] opacity-0"
          />

          {/* Description */}
          <p
            ref={descriptionRef}
            className={`${montserrat.className} text-[14px] lg:text-[15px] text-[#5f5146] leading-[1.8] font-normal opacity-0`}
          >
            Whether you're looking for farm-fresh eggs,
            <br />
            bulk supply solutions, or simply have a question,
            <br />
            our team is here to help.
          </p>

        </div>
      </div>
    </section>
  );
}