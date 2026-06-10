"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Caveat } from "next/font/google";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function AboutStory() {

const sectionRef = useRef(null);

useGSAP(
  () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.from("[data-eyebrow]", {
        opacity: 0,
        y: 16,
        duration: 0.7,
        ease: "power3.out",
      })

      .from(
        "[data-segment]",
        {
          opacity: 0,
          y: 28,
          duration: 0.8,
          stagger: 0.13,
          ease: "power3.out",
        },
        "-=0.4"
      )

      .from(
        "[data-divider]",
        {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      )

      .from(
        "[data-story-text]",
        {
          opacity: 0,
          y: 16,
          stagger: 0.12,
          duration: 0.75,
          ease: "power3.out",
        },
        "-=0.3"
      )

      .from(
        "[data-thankyou]",
        {
          opacity: 0,
          y: 16,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.2"
      );

      gsap.from("[data-main-image]", {
        opacity: 0,
        scale: 1.05,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-main-image]",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from("[data-caption]", {
        opacity: 0,
        y: 16,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-main-image]",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from("[data-sticky-note]", {
        opacity: 0,
        scale: 0.88,
        y: 24,
        rotation: 0,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-main-image]",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from("[data-note-icon]", {
        opacity: 0,
        scale: 0.85,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-sticky-note]",
          start: "top 80%",
          once: true,
        },
      });

      gsap.from("[data-note-content]", {
        opacity: 0,
        y: 12,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-sticky-note]",
          start: "top 80%",
          once: true,
        },
      });

      // gsap.to("[data-parallax-img]", {
      //   yPercent: 8,
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: "[data-main-image]",
      //     start: "top bottom",
      //     end: "bottom top",
      //     scrub: true,
      //   },
      // });

    }, sectionRef);

    return () => ctx.revert();

  },
  { scope: sectionRef }
);

  return (
    <section  ref={sectionRef} className="relative overflow-hidden bg-[#f5f0e7] py-8 sm:py-16 md:py-12 lg:py-20 xl:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">

        {/* ── MAIN GRID ────────────────────────────────────────────────────
            sm : 1-col stacked
            md : 2-col — collage shows alongside text
            lg/xl: original 2-col                                         */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-10 md:gap-12 lg:gap-12 xl:gap-16 items-start">

          {/* ── LEFT — Text ─────────────────────────────────────────────── */}
          <div>
            {/* Eyebrow */}
            <div  data-eyebrow className="flex items-center gap-3 mb-5 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6">
              <div className="h-px w-10 bg-[#6E7E45]/40" />
              <p
                className={`${montserrat.className} text-[10px] uppercase tracking-[0.25em] text-[#6E7E45]`}
                style={{ fontWeight: 600 }}
              >
                Our Story
              </p>
              <div className="h-px w-10 bg-[#6E7E45]/40" />
            </div>

            {/* Headline
                sm: 36px  md: 48px  lg: 56px  xl: 60px (original)       */}
            <h2  data-headline
 className={`${cormorant.className} text-[#241A12] leading-[1.05]`}>
              <span data-segment className="block text-[36px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[60px] font-semibold">
                Rooted in{" "}
                <span className="italic font-medium text-[#6E7E45]">Care.</span>
              </span>
              <span data-segment className="block text-[36px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[60px] font-semibold">
                Driven by{" "}
                <span className="italic font-medium text-[#6E7E45]">Purpose.</span>
              </span>
            </h2>

            {/* Gold accent underline */}
            <div data-divider className="mt-4 mb-5 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-7 h-[2px] w-10 bg-[#C49A2A]" />

            {/* Body text
                sm/md: 13px  lg/xl: 14px (original)                     */}
            <div
              className={`${montserrat.className} space-y-4 text-[13px] sm:text-[13px] md:text-[13px] lg:text-[13px] xl:text-[14px] leading-[1.9] text-[#5f5146]`}
              style={{ fontWeight: 400 }}
            >
              <p data-story-text>
                GVR Farm Foods was born from a simple belief – real food comes
                from real care.
              </p>
              <p data-story-text>
                What started as a small family farm with a handful of hens has
                grown into a trusted brand built on honesty, hard work, and a
                deep respect for nature.
              </p>
              <p data-story-text>
                We don't just produce eggs; we nurture better habits, stronger
                communities, and a healthier tomorrow.
              </p>
            </div>

            {/* Handwritten thank you
                sm: 18px  md: 20px  lg: 22px  xl: 24px (original)       */}
            <div data-thankyou className="mt-7 sm:mt-7 md:mt-8 lg:mt-8 xl:mt-8 flex items-center gap-3">
              <p
                className={`${caveat.className} text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-[#6E7E45]`}
                style={{ fontWeight: 500 }}
              >
                Thank you for being part of our journey.
              </p>
              <span className="text-[#C49A2A] text-[18px]">♡</span>
            </div>
          </div>

          {/* ── RIGHT — Image collage ─────────────────────────────────────
              Fixed height container so sticky note absolute positioning
              works correctly. Heights scale per breakpoint.
              sm: 360px  md: 420px  lg: 480px  xl: 540px (original)      */}
          <div className="relative h-[250px] sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[540px] pt-0 sm:pt-0 md:pt-0 lg:pt-10 xl:pt-10">

            

            <div data-main-image className="overflow-hidden rounded-[8px]
  ">
  <img
  data-parallax-img
    src="/about/framefarm2.webp"
    alt="Our farm"
    className="w-full md:w-full lg:w-[480px] xl:w-[560px]
  h-[210px] sm:h-[210px] md:h-[380px] lg:h-[320px] xl:h-[375px] object-contain
    "
  />
</div>

            {/* Polaroid caption */}
            <div data-caption className="pt-3 pb-1 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-17 text-left">
              <p
                className={`${caveat.className} text-[14px] sm:text-[14px] md:text-[14px] lg:text-[15px] xl:text-[15px] text-[#8d7b67]`}
                style={{ fontWeight: 400 }}
              >
                Our farm, our pride ♡
              </p>
            </div>

            {/* Sticky note
                FIXED: negative right reduced on small screens to prevent overflow
                sm: w-[160px] right-[-8px]
                md: w-[200px] right-[-12px]
                lg: w-[280px] right-[-16px]
                xl: w-[340px] right-[-18px] (original)                   */}
            <div
            data-sticky-note
              className="
                absolute
                w-[180px] sm:w-[160px] md:w-[320px] lg:w-[280px] xl:w-[340px]
                bottom-[10px] sm:bottom-[10px] md:bottom-0 lg:bottom-[72px] xl:bottom-[72px]
                right-[-8px] sm:right-[-8px] md:right-0 lg:right-[-72px] xl:right-[-72px]
              "
              style={{
                transform: "rotate(8deg)",
                filter: `
                  drop-shadow(0px 8px 12px rgba(0,0,0,0.10))
                  drop-shadow(0px 20px 30px rgba(0,0,0,0.08))
                  drop-shadow(0px 2px 3px rgba(0,0,0,0.06))
                `,
              }}
            >
              <div className="relative">
                {/* Sticky note image */}
                <img
                  src="/about/stickynote.webp"
                  alt=""
                  className="w-full h-auto object-contain"
                />

                {/* Content inside sticky note
                    Text sizes scale with note size                       */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-4 md:px-6 lg:px-8 xl:px-8 pt-6 sm:pt-6 md:pt-7 lg:pt-8 xl:pt-8 pb-4 sm:pb-4 md:pb-5 lg:pb-6 xl:pb-6">

                  {/* Farm SVG icon */}
                  <img
                  data-note-icon
                    src="/svgs/housefarm2.svg"
                    alt=""
                    className="w-12 h-6 sm:w-12 sm:h-6 md:w-14 md:h-10 lg:w-14 lg:h-10 xl:w-16 xl:h-12 object-contain"
                    style={{
                      filter: "invert(35%) sepia(40%) saturate(400%) hue-rotate(60deg) brightness(0.8)",
                      opacity: 0.7,
                    }}
                  />

                  {/* Handwritten heading
                      sm: 12px  md: 16px  lg: 22px  xl: 26px (original) */}
                  <p
                  data-note-content
                    className={`${caveat.className} text-[13px] sm:text-[13px] md:text-[22px] lg:text-[22px] xl:text-[26px] text-[#4D5B2A] leading-snug mb-1`}
                    style={{ fontWeight: 600 }}
                  >
                    From our family farm
                  </p>

                  {/* Uppercase subtitle — hidden on sm, shown md+ */}
                  <p
                  data-note-content
                    className={`${montserrat.className} hidden md:block text-[7px] md:text-[8px] lg:text-[8px] xl:text-[9px] uppercase tracking-[0.2em] text-[#5f5146] mb-1 md:mb-2`}
                    style={{ fontWeight: 600 }}
                  >
                    To Your Family Table
                  </p>

                  {/* Heart */}
                  <span data-note-content className="text-[#C49A2A] text-[12px] md:text-[16px] lg:text-[16px] mb-1 md:mb-2">♡</span>

                  {/* Description — hidden on sm, shown md+ */}
                  <p data-note-content
                    className={`${montserrat.className} hidden md:block text-[7px] md:text-[8px] lg:text-[8px] xl:text-[8px] text-[#5f5146] leading-[1.6]`}
                    style={{ fontWeight: 400 }}
                  >
                    Every egg is a promise we keep –<br />
                    pure, wholesome, and made with care.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}