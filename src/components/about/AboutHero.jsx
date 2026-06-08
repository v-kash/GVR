"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

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
  return (
    <section className="relative overflow-hidden bg-[#f5f0e7] min-h-[55vh] flex items-center">
      {/* Background image
          Mobile (< md) : completely hidden — clean cream bg
          md            : shown, w-[60%] right-side bleed
          lg / xl       : original — untouched     
                                 */}
      <img
        src="/about/hero-about-m.png"
        alt="Farm fresh eggs"
        className="
    md:hidden
    absolute right-0 top-20
    h-[80%] object-cover object-right
    w-[90%]
  "
      />
      <img
        src="/about/hero-about.png"
        alt="Farm fresh eggs"
        className="
  hidden md:block
    absolute right-0 top-0  md:top-0 md:right-0
    h-full object-cover
    object-right md:object-left lg:object-left xl:object-left
    w-[100%] md:w-[100%] lg:w-[80%] xl:w-[60%]
  "
      />

      {/* Gradient — fades left edge of image into cream bg
          md: slightly shorter fade  lg/xl: original depth               */}
      <div
        className="absolute inset-y-0 left-0 z-10
    w-[30%] md:w-[40%] lg:w-[45%] xl:w-[75%]"
        style={{
          background:
            "linear-gradient(to right, #f5f0e7 60%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-20 mx-auto w-full max-w-7xl px-6 lg:px-16
        py-14 sm:py-14 md:py-16 lg:py-18 xl:py-20"
      >
        <div className="max-w-[520px]">
          {/* Breadcrumb */}
          <div
            className="flex items-center gap-2
            mb-5 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8"
          >
            <Link
              href="/"
              className={`${montserrat.className} text-[11px] uppercase tracking-[0.15em] text-[#4D5B2A]`}
              style={{ fontWeight: 700 }}
            >
              Home
            </Link>
            <ChevronRight size={13} className="text-[#5f5146]/50" />
            <span
              className={`${montserrat.className} text-[11px] uppercase tracking-[0.15em] text-[#5f5146]/60`}
              style={{ fontWeight: 400 }}
            >
              About Us
            </span>
          </div>

          {/* Headline
              sm: 44px  md: 64px  lg: 80px  xl: 96px (original)         */}
          <h1
            className={`${cormorant.className} leading-[0.95] font-semibold text-[#241A12]
              text-[44px] sm:text-[44px] md:text-[64px] lg:text-[80px] xl:text-[96px]`}
          >
            About Us
          </h1>

          {/* Gold accent line */}
          <div
            className="h-[2px] w-10 bg-[#C49A2A]
            mt-4 sm:mt-4 md:mt-4 lg:mt-5 xl:mt-5
            mb-4 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-6"
          />

          {/* Subtext
              sm: 13px  md: 13px  lg: 14px  xl: 15px (original)         */}
          <p
            className={`${montserrat.className} leading-[1.8] text-[#5f5146]
              text-[13px] sm:text-[13px] md:text-[13px] lg:text-[14px] xl:text-[15px]`}
            style={{ fontWeight: 400 }}
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
