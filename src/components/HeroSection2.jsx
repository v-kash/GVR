"use client";

import { useEffect, useState } from "react";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Phone } from "lucide-react";
import { IconRowV4 } from "@/components/IconRow";

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
const BG_IMAGE2 = "/images/heromobile.png";

export default function HeroSection() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      aria-label="GVR Fresh Foods – Farm Fresh Eggs Supplier"
      className="relative min-h-[100dvh] overflow-hidden bg-[#f5f0e7] flex flex-col -mb-[2px]"
    >
      {/* ── DESKTOP: full bg image ───────────────────────── */}
      {/* <img
        src={BG_IMAGE}
        alt="Farm fresh eggs"
        className="hidden lg:block absolute inset-0 h-full w-full object-cover object-right"
      /> */}

      <img
  src={BG_IMAGE}
  alt="Farm fresh eggs"
  className="hidden lg:block absolute inset-0 h-[calc(100%+3px)] w-full object-cover object-right -bottom-[2px]"
/>

      {/* ── MOBILE: image in lower half ────────────────── ─ */}
      <div className="lg:hidden absolute bottom-[1px] left-0 right-0  h-[60%]">
        <img
          src={BG_IMAGE}
          alt="Farm fresh eggs"
          className="w-full h-full object-cover object-top"
        />
        {/* fade top edge so it blends into cream bg */}
      </div>

      {/* ── MAIN CONTENT ────────────────────────────────── */}
      <div
        className={`relative z-10 flex flex-1 pt-24 transition-all duration-700 ease-out  lg:pt-28 ${
          ready ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-16">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-8 bg-[#6E7E45]" />
              <p
                className={`${montserrat.className} text-[7.5px] uppercase tracking-[2px] text-[#6E7E45] whitespace-nowrap`}
              >
                Farm Fresh • Protein Rich • Delivered Daily
              </p>
            </div>

            {/* Heading */}
            <h1
              className={`${cormorant.className} leading-[0.9] tracking-[-1.5px] text-[#735033]`}
            >
              <span className="block text-[52px] font-semibold lg:text-[92px]">
                Pure Fresh
              </span>
              <span className="mt-1 block text-[52px] italic font-medium text-[#6E7E45] lg:text-[92px]">
                Eggs Everyday.
              </span>
            </h1>

            {/* Divider */}
            <div className="mt-5 h-px w-full max-w-[340px] bg-[#6E7E45]/20" />

            {/* Paragraph */}
            <p
              className={`${montserrat.className} mt-5 max-w-[480px] text-[13px] lg:text-[14px] leading-7 text-[#5f5146]`}
            >
              Premium farm fresh eggs sourced hygienically and delivered daily
              for homes, retailers, hotels, and wholesale buyers with trusted
              quality and nutrition in every tray.
            </p>

            {/* Icon row — hidden on mobile, shown on desktop */}
            <div className="hidden lg:block">
              <IconRowV4 />
            </div>

            {/* Button */}
            <div className="mt-8 lg:mt-9 flex flex-wrap items-center gap-4">
              <button className="inline-flex items-stretch rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02]">
                <span className="bg-[#3f4a22] px-4 flex items-center justify-center">
                  <Phone size={17} className="text-[#f5f0e7]" />
                </span>
                <span
                  className={`${montserrat.className} bg-[#4D5B2A] px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.15em] text-[#f5f0e7]`}
                >
                  Contact Us
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE: Icon card (overlaps image) ──────────── */}
      <div className="lg:hidden relative z-10 mx-4 pb-40">
        <IconRowV4 />
      </div>

      {/* ── BOTTOM FLOATING BAR ─────────────────────────── */}
      <div className="absolute bottom-6 lg:bottom-3 left-1/2 -translate-x-1/2 w-[88%] max-w-2xl z-20">
        <div className="bg-[#F3EEE4]/80 backdrop-blur-md rounded-full px-6 lg:px-8 py-2 lg:py-3.5 flex items-center justify-between border border-white/50">
          {/* Item 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-2">
            <img
              src="/icons/truck.png"
              alt=""
              className="w-6 h-6 lg:w-10 lg:h-10 object-contain flex-shrink-0"
            />
            <div className="text-center lg:text-left">
              <p
                className={`${montserrat.className} text-[8px] lg:text-[10px] font-semibold uppercase tracking-[0.08em] lg:tracking-[0.1em] text-[#241A12]`}
              >
                <span className="lg:hidden">Farm Delivery</span>
                <span className="hidden lg:inline">Farm Fresh Delivery</span>
              </p>
              <p
                className={`${montserrat.className} hidden lg:block text-[9px] tracking-[0.08em] text-[#5f5146]/70 uppercase`}
              >
                To Your Doorstep
              </p>
            </div>
          </div>

          <div className="h-6 lg:h-8 w-px bg-[#6E7E45]/25 flex-shrink-0" />

          {/* Item 2 */}
          <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-2">
            <img
              src="/icons/HOLDING-LEAF.png"
              alt=""
              className="w-6 h-6 lg:w-10 lg:h-10 object-contain flex-shrink-0"
            />
            <div className="text-center lg:text-left">
              <p
                className={`${montserrat.className} text-[8px] lg:text-[10px] font-semibold uppercase tracking-[0.08em] lg:tracking-[0.1em] text-[#241A12]`}
              >
                <span className="lg:hidden">Sustainable</span>
                <span className="hidden lg:inline">Supporting Sustainable</span>
              </p>
              <p
                className={`${montserrat.className} hidden lg:block text-[9px] tracking-[0.08em] text-[#5f5146]/70 uppercase`}
              >
                Farming Communities
              </p>
            </div>
          </div>

          <div className="h-6 lg:h-8 w-px bg-[#6E7E45]/25 flex-shrink-0" />

          {/* Item 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-2">
            <img
              src="/icons/leafmor2.png"
              alt=""
              className="w-6 h-6 lg:w-8 lg:h-8 object-contain flex-shrink-0"
            />
            <div className="text-center lg:text-left">
              <p
                className={`${montserrat.className} text-[8px] lg:text-[10px] font-semibold uppercase tracking-[0.08em] lg:tracking-[0.1em] text-[#241A12]`}
              >
                <span className="lg:hidden">Eco Friendly</span>
                <span className="hidden lg:inline">Good for You</span>
              </p>
              <p
                className={`${montserrat.className} hidden lg:block text-[9px] tracking-[0.08em] text-[#5f5146]/70 uppercase`}
              >
                Good for the Planet
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── PAPER TORN DIVIDER ─────────────────────────── */}
<div className="absolute -bottom-10 left-0 w-full h-[130px] z-0 pointer-events-none">
  <div
    className="w-full h-full bg-[#f5f0e7]"
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
