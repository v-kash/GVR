"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Caveat } from "next/font/google";

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
  return (
    <section className="relative overflow-hidden bg-[#f5f0e7] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        {/* ── MAIN GRID: Left text + Right image collage ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ── LEFT — Text ── */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#6E7E45]/40" />
              <p
                className={`${montserrat.className} text-[10px] uppercase tracking-[0.25em] text-[#6E7E45]`}
                style={{ fontWeight: 600 }}
              >
                Our Story
              </p>
              <div className="h-px w-10 bg-[#6E7E45]/40" />
            </div>

            {/* Headline */}
            <h2
              className={`${cormorant.className} text-[#241A12] leading-[1.05]`}
            >
              <span className="block text-[44px] lg:text-[60px] font-semibold">
                Rooted in{" "}
                <span className="italic font-medium text-[#6E7E45]">Care.</span>
              </span>
              <span className="block text-[44px] lg:text-[60px] font-semibold">
                Driven by{" "}
                <span className="italic font-medium text-[#6E7E45]">
                  Purpose.
                </span>
              </span>
            </h2>

            {/* Gold accent underline */}
            <div className="mt-4 mb-7 h-[2px] w-10 bg-[#C49A2A]" />

            {/* Body text */}
            <div
              className={`${montserrat.className} space-y-4 text-[13px] lg:text-[14px] leading-[1.9] text-[#5f5146]`}
              style={{ fontWeight: 400 }}
            >
              <p>
                GVR Farm Foods was born from a simple belief – real food comes
                from real care.
              </p>
              <p>
                What started as a small family farm with a handful of hens has
                grown into a trusted brand built on honesty, hard work, and a
                deep respect for nature.
              </p>
              <p>
                We don't just produce eggs; we nurture better habits, stronger
                communities, and a healthier tomorrow.
              </p>
            </div>

            {/* Handwritten thank you */}
            <div className="mt-8 flex items-center gap-3">
              <p
                className={`${caveat.className} text-[22px] lg:text-[24px] text-[#6E7E45]`}
                style={{ fontWeight: 500 }}
              >
                Thank you for being part of our journey.
              </p>
              <span className="text-[#C49A2A] text-[18px]">♡</span>
            </div>
          </div>

          {/* ── RIGHT — Image collage ── */}
          <div className="relative h-[480px] lg:h-[540px]  pt-10 ">
            {/* Main farm image — pinned photo frame */}

            {/* Outer frame — slight rotation */}

            {/* Image */}
            <div className="overflow-hidden rounded-[8px] h-[320px] lg:h-[380px] ">
              <img
                src="/about/framefarm2.png"
                alt="Our farm"
                className="w-full h-full object-cover"
              />
            </div>
            {/* White bottom strip — polaroid style */}
            <div className="pt-3 pb-1 px-17 text-left">
              <p
                className={`${caveat.className} text-[15px] text-[#8d7b67]`}
                style={{ fontWeight: 400 }}
              >
                Our farm, our pride ♡
              </p>
            </div>

            <div
              className="absolute bottom-18 -right-18 w-[240px] lg:w-[340px]"
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
                {/* Sticky note */}
                <img
                  src="/about/stickynote.png"
                  alt=""
                  className="w-full h-auto object-contain"
                />

                {/* Content — positioned below the tape */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 pt-8 pb-6">
                  {/* SVG icon */}
                  <img
                    src="/svgs/housefarm2.svg"
                    alt=""
                    className="w-16 h-12 object-contain "
                    style={{
                      filter:
                        "invert(35%) sepia(40%) saturate(400%) hue-rotate(60deg) brightness(0.8)",
                      opacity: 0.7,
                    }}
                  />

                  {/* Handwritten heading */}
                  <p
                    className={`${caveat.className} text-[18px] lg:text-[26px] text-[#4D5B2A] leading-snug mb-1`}
                    style={{ fontWeight: 600 }}
                  >
                    From our family farm
                  </p>

                  {/* Uppercase subtitle */}
                  <p
                    className={`${montserrat.className} text-[9px] uppercase tracking-[0.2em] text-[#5f5146] mb-2`}
                    style={{ fontWeight: 600 }}
                  >
                    To Your Family Table
                  </p>

                  {/* Heart */}
                  <span className="text-[#C49A2A] text-[16px] mb-2">♡</span>

                  {/* Description */}
                  <p
                    className={`${montserrat.className} text-[8px] text-[#5f5146] leading-[1.6]`}
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
