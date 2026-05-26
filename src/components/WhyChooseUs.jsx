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

const leftFeatures = [
  {
    icon: "/icons/Shield.png",
    circle: "/Circle.png",
    title: "Hygienic Handling",
    desc: "Strict hygiene standards and clean processes at every step.",
  },
  {
    icon: "/icons/truck.png",
    circle: "/Circle.png",
    title: "Daily Delivery",
    desc: "On-time delivery, every day to keep your business running smoothly.",
  },
  {
    icon: "/icons/sprout.png",
    circle: "/Circle.png",
    title: "Natural Feed",
    desc: "Hens are fed with natural, nutritious feed for healthy and better eggs.",
  },
];

const rightFeatures = [
  {
    icon: "/icons/hen.png",
    circle: "/Circle.png",
    title: "Bulk Orders",
    desc: "Flexible bulk supply options for retailers, wholesalers and businesses.",
  },
  {
    icon: "/icons/Assure.png",
    circle: "/Circle.png",
    title: "FSSAI Certified",
    desc: "FSSAI certified for food safety, quality and your complete peace of mind.",
  },
  {
    icon: "/icons/truck.png",
    circle: "/Circle.png",
    title: "Direct From Farm",
    desc: "Fresh eggs straight from our farms to your table.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#f5f0e7] py-20 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        {/* ── HEADING ─────────────────────────────────────── */}
        <div className="mb-18">
          {/* Top Row */}
          <div className="flex items-start gap-8 relative">
            {/* Left Eyebrow */}
            <div className="flex items-center gap-3 flex-shrink-0 pt-2">
              <div className="flex flex-col items-center">
                <img
                  src="/icons/Untitle1.png"
                  alt=""
                  className="w-8 h-8 object-contain opacity-70"
                />
                <div className="mb-2 border-t border-[#d8d2c4] w-10" />
              </div>

              <div className="flex flex-col">
                <p
                  className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`}
                  style={{ fontWeight: 500 }}
                >
                  Why Choose Us
                </p>

                <div className="mt-2 h-[0.5px] w-[115px] bg-[#d8d2c4]" />
              </div>
            </div>

            {/* Main Heading */}
            <h2
              className={`${cormorant.className} leading-[1.0] text-[#241A12] flex-1 text-center absolute left-0 right-0`}
            >
              <span className="text-[48px] lg:text-[80px] font-semibold">
                Why Trust{" "}
              </span>

              <span className="text-[48px] lg:text-[80px] italic font-medium text-[#6E7E45]">
                GVR
              </span>
            </h2>
          </div>

          {/* Subtext */}
          <p
            className={`${montserrat.className} text-[14px] lg:text-[15px] text-[#5f5146] leading-7 pt-12 text-center max-w-lg mx-auto`}
            style={{ fontWeight: 400 }}
          >
            Natural quality,  families and businesses rely on.{" "}
          </p>
        </div>

        {/* ── MAIN 3-COLUMN LAYOUT ────────────────────────── */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-2 items-center">
          {/* LEFT FEATURES */}
          <div className="flex flex-col gap-8  ">
            {leftFeatures.map((f, i) => (
              <div key={i} className="flex items-start gap-4 justify-end">
                {/* Text — right aligned on desktop */}
                <div className="text-right hidden lg:block">
                  <p
                    className={`${montserrat.className} text-[13px] text-[#241A12] leading-tight`}
                    style={{ fontWeight: 700 }}
                  >
                    {f.title}
                  </p>
                  <p
                    className={`${montserrat.className} mt-1.5 text-[12px] text-[#5f5146] leading-[1.6]`}
                    style={{ fontWeight: 400 }}
                  >
                    {f.desc}
                  </p>
                </div>
                {/* Icon with circle bg */}
                <div className="relative flex-shrink-0 w-[105px] h-[105px] ">
                  <div
                    className="absolute inset-0 w-full h-full bg-[#E7E1BC]"
                    style={{
                      WebkitMaskImage: "url(/svgs/Circlebrush.svg)",
                      maskImage: "url(/svgs/Circlebrush.svg)",
                      WebkitMaskSize: "contain",
                      maskSize: "cover",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pb-2">
                    <img
                      src={f.icon}
                      alt=""
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                </div>
                {/* Vertical accent line */}
                <div className="hidden lg:block w-[2px] h-full self-stretch bg-[#6E7E45]/20 flex-shrink-0" />
                {/* Text — left aligned on mobile */}
                <div className="lg:hidden">
                  <p
                    className={`${montserrat.className} text-[14px] text-[#241A12] leading-tight`}
                    style={{ fontWeight: 700 }}
                  >
                    {f.title}
                  </p>
                  <p
                    className={`${montserrat.className} mt-1.5 text-[12px] text-[#5f5146] leading-[1.6]`}
                    style={{ fontWeight: 400 }}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER — Oval brushstroke + egg basket */}
          <div className="relative hidden lg:flex items-center justify-center w-[360px] xl:w-[600px] flex-shrink-0 bg-ambe">
            {/* Oval brushstroke — bigger, centered */}
            <img
              src="/Whyusbg.png"
              alt=""
              className="w-full h-auto object-contain scale-[1.5]"
            />

            {/* Egg basket — sits on bottom half of oval */}
            <img
              src="/whyusmain.png"
              alt="Farm fresh eggs"
              className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-[100%] scale-[1.2] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.12)]"
            />
          </div>

          {/* RIGHT FEATURES */}
          <div className="flex flex-col gap-8">
            {rightFeatures.map((f, i) => (
              <div key={i} className="flex items-start gap-4 ">
                {/* Vertical accent line */}
                <div className="hidden lg:block w-[2px] h-full self-stretch bg-[#6E7E45]/20 flex-shrink-0" />
                {/* Icon with circle bg */}
                <div className="relative flex-shrink-0 w-[105px] h-[105px]">
                  <div
                    className="absolute inset-0 w-full h-full bg-[#E7E1BC]"
                    style={{
                      WebkitMaskImage: "url(/svgs/Circlebrush.svg)",
                      maskImage: "url(/svgs/Circlebrush.svg)",
                      WebkitMaskSize: "contain",
                      maskSize: "cover",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pb-2">
                    <img
                      src={f.icon}
                      alt=""
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                </div>
                {/* Text */}
                <div>
                  <p
                    className={`${montserrat.className} text-[13px] text-[#241A12] leading-tight`}
                    style={{ fontWeight: 700 }}
                  >
                    {f.title}
                  </p>
                  <p
                    className={`${montserrat.className} mt-1.5 text-[12px] text-[#5f5146] leading-[1.6]`}
                    style={{ fontWeight: 400 }}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── BOTTOM BANNER ────────────────────────────────── */}
        <div
          className="relative overflow-hidden mx-auto mt-8 flex-shrink-0"
          style={{ width: 950, height: 100 }}
        >
          {/* Brushstroke bg */}
          <img
            src="/whyusbrush.png"
            alt=""
            className="absolute inset-0 w-full h-full object-fill pointer-events-none"
          />

          {/* Content row */}
          <div className="relative z-10 flex items-center h-full px-30">
            {/* LEFT: icon + text */}
            <div className="flex items-center gap-4">
              <img
                src="/icons/eggnest.png"
                alt=""
                className="w-28  h-28 object-contain brightness-0 invert opacity-80 flex-shrink-0"
                onError={(e) => (e.target.style.display = "none")}
              />
              <p
                className={`${montserrat.className} text-[12.5px] text-[#f5f0e7] leading-[1.75]`}
                style={{ fontWeight: 400 }}
              >
                Trusted by thousands of
                <br />
                happy families and businesses
                <br />
                across the region.
              </p>
            </div>

            {/* Divider */}
            <div className="w-px bg-[#f5f0e7]/30 mx-20 self-stretch my-[18px]" />

            {/* RIGHT: tagline */}
            {/* RIGHT: tagline */}
            <div
              className={`${caveat.className} text-[20px] text-[#f5f0e7] leading-snug px-2`}
              style={{ fontWeight: 500 }}
            >
              <div>Good eggs.</div>
              <div className="flex items-baseline gap-1">
                <span>Strong relationships.</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-[#c6e086] text-[26px] inline-block -rotate-4 origin-left">
                  Better tomorrow.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
