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
      className="relative min-h-[90vh] md:min-h-[100vh] overflow-hidden bg-[#f5f0e7] flex flex-col -mb-[2px]"
    >
      {/* ── DESKTOP/TABLET (md+): full bg image ─────────────────────────
          md: shows the full bg image just like lg/xl
          < md (mobile only): hidden, mobile lower-half image used instead */}
      <img
        src={BG_IMAGE}
        alt="Farm fresh eggs"
        className="hidden md:block absolute inset-0 h-[calc(100%+3px)] w-full object-cover object-right -bottom-[2px]"
      />

      {/* ── MOBILE ONLY (< md): image in lower half ──────────────────── */}
      <div className="md:hidden absolute bottom-[1px] left-0 right-0 h-[60%]">
        <img
          src={BG_IMAGE}
          alt="Farm fresh eggs"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────── */}
      <div
        className={`relative z-10 flex flex-1 transition-all duration-700 ease-out
          pt-24 sm:pt-24 md:pt-26 lg:pt-28 xl:pt-28
          ${ready ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-16">
          <div className="max-w-xl">

            {/* Eyebrow */}
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-8 bg-[#6E7E45]" />
              <p className={`${montserrat.className} text-[7.5px] uppercase tracking-[2px] text-[#323c18] whitespace-nowrap`}>
                Farm Fresh • Protein Rich • Delivered Daily
              </p>
            </div>

            {/* Heading
                mobile: 52px
                md    : 68px
                lg    : 80px
                xl    : 92px (original)                                   */}
            <h1 className={`${cormorant.className} leading-[0.9] tracking-[-1.5px] text-[#735033]`}>
              <span className="block text-[52px] sm:text-[52px] md:text-[68px] lg:text-[80px] xl:text-[92px] font-semibold">
                Pure Fresh
              </span>
              <span className="mt-1 block text-[52px] sm:text-[52px] md:text-[68px] lg:text-[80px] xl:text-[92px] italic font-medium text-[#6E7E45]">
                Eggs Everyday.
              </span>
            </h1>

            {/* Divider */}
            <div className="mt-4 md:mt-5 h-px w-full max-w-[340px] bg-[#6E7E45]/20" />

            {/* Paragraph
                mobile: 12px  md: 13px  lg/xl: 14px (original)           */}
            <p className={`${montserrat.className} mt-4 md:mt-5 max-w-[480px] text-[12px] sm:text-[12px] md:text-[13px] lg:text-[13px] xl:text-[14px] leading-7 text-[#5f5146]`}>
              Premium farm fresh eggs sourced hygienically and delivered daily
              for homes, retailers, hotels, and wholesale buyers with trusted
              quality and nutrition in every tray.
            </p>

            {/* Icon row
                md+: shown inline (same as original lg: behavior)
                < md: hidden here, shown below in mobile card            */}
            <div className="hidden md:block">
              <IconRowV4 />
            </div>

            {/* Button
                mt steps down for smaller screens                         */}
            <div className="mt-6 sm:mt-7 md:mt-8 lg:mt-9 flex flex-wrap items-center gap-4">
              <button className="inline-flex items-stretch rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02]">
                <span className="bg-[#3f4a22] px-3 md:px-4 flex items-center justify-center">
                  <Phone size={15} className="text-[#f5f0e7] md:w-[17px] md:h-[17px]" />
                </span>
                <span className={`${montserrat.className} bg-[#4D5B2A] px-5 md:px-6 py-3 md:py-3.5 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.15em] text-[#f5f0e7]`}>
                  Contact Us
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ── MOBILE ONLY (< md): Icon card overlapping image ─────────── */}
      <div className="md:hidden relative z-10 mx-4 pb-40">
        <IconRowV4 />
      </div>

      {/* ── BOTTOM FLOATING BAR ──────────────────────────────────────────
          md+: same as original lg layout (horizontal, with subtext)
          < md: compact mobile version (no subtext, smaller icons)        */}
      <div className="absolute bottom-6 md:bottom-3 lg:bottom-3 xl:bottom-3 left-1/2 -translate-x-1/2 w-[88%] max-w-2xl z-20">
        <div className="bg-[#F3EEE4]/80 backdrop-blur-md rounded-full px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3.5 flex items-center justify-between border border-white/50">  

          {/* Item 1 */}
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2 ">
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
                {/* Mobile label */}
                <span className="md:hidden">Farm Delivery</span>
                {/* md+ label */}
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

      {/* ── PAPER TORN DIVIDER — original untouched ──────────────────── */}
      <div className="absolute  md:-bottom-8 lg:-bottom-10  xl:-bottom-10 left-0 w-full  md:h-[98px] lg:h-[115px] xl:h-[130px] z-0 pointer-events-none">
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