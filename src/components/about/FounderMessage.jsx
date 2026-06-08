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

export default function FounderMessage() {
  return (
    <section className="relative bg-[#f5f0e7] overflow-hidden py-16 sm:py-16 md:py-18 lg:py-16 xl:py-20">

      {/* Background sketch — decorative, all screens */}
      <div className="absolute bottom-6 left-0 right-0 h-[100%] pointer-events-none">
  <img
    src="about/sketchfarm.png"
    alt=""
    className="
      object-cover object-bottom
      w-[1000px] h-[300px]
      sm:w-[1000px] sm:h-[400px]
      md:w-[1000px] md:h-[500px]
      lg:w-[1300px] lg:h-[600px]
      xl:w-full xl:h-full
    "
    style={{ mixBlendMode: "multiply", opacity: 0.25 }}
  />
</div>
      <div className="mx-auto max-w-7xl px-6 lg:px-16">

        {/* ── GRID ─────────────────────────────────────────────────────────
            sm : 1-col stacked — image shown as simple centered polaroid
            md : 2-col — polaroid visible alongside text
            lg/xl: original layout with absolute positioned polaroid       */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-16 items-start">

          {/* ── LEFT — Text ─────────────────────────────────────────────── */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4 sm:mb-4 md:mb-5 lg:mb-5 xl:mb-5">
              <div className="flex flex-col items-center">
                <div
                  className="w-7 h-7 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-9 xl:h-9 bg-[#6E7E45]"
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
              </div>
              <div className="flex flex-col">
                <p
                  className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`}
                  style={{ fontWeight: 500 }}
                >
                  Founder's Message
                </p>
                <div className="mt-2 h-[0.5px] w-[130px] bg-[#d8d2c4]" />
              </div>
            </div>

            {/* Headline
                sm: 36px  md: 46px  lg: 54px  xl: 60px
                FIXED: lg:text-[60] was missing px unit               */}
            <h2 className={`${cormorant.className} leading-[1.0] text-[#241A12]`}>
              <span className="block text-[36px] sm:text-[36px] md:text-[46px] lg:text-[54px] xl:text-[60px] font-semibold">
                Our Commitment,
              </span>
              <span className="block text-[36px] sm:text-[36px] md:text-[46px] lg:text-[54px] xl:text-[60px] italic font-medium text-[#6E7E45]">
                To You.
              </span>
            </h2>

            {/* Gold underline + leaf */}
            <div className="flex items-center gap-3 mt-4 mb-5 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-7">
              <div className="h-px w-16 bg-[#C49A2A]/50" />
               <div
                  className="w-7 h-7 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-9 xl:h-9 bg-[#6E7E45] opacity-80"
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
              <div className="h-px w-16 bg-[#C49A2A]/50" />
            </div>

            {/* Body text
                sm/md: 13px  lg/xl: 14px (original)                     */}
            <div
              className={`${montserrat.className} space-y-4 text-[13px] sm:text-[13px] md:text-[13px] lg:text-[13px] xl:text-[14px] leading-[1.9] text-[#5f5146]`}
              style={{ fontWeight: 400 }}
            >
              <p>
                At GVR Farm Foods, our journey began with a simple belief – good
                food starts with care and honesty.
              </p>
              <p>
                Every egg we produce is a reflection of the care we put into our
                hens, our land, and our processes. We are committed to
                delivering freshness, nutrition, and trust in every single egg.
              </p>
              <p>
                Thank you for welcoming us into your homes and for being a part
                of our journey.
              </p>
            </div>

            {/* Signature
                sm: 26px  md: 28px  lg/xl: 32px (original)              */}
            <div className="mt-7 sm:mt-7 md:mt-8 lg:mt-8 xl:mt-8">
              <p
                className={`${caveat.className} text-[26px] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[32px] text-[#241A12]`}
                style={{ fontWeight: 500 }}
              >
                Ramesh Varma
              </p>
              <p
                className={`${montserrat.className} text-[11px] text-[#5f5146] mt-1`}
                style={{ fontWeight: 400 }}
              >
                Founder, GVR Farm Foods
              </p>
            </div>
          </div>

          {/* ── RIGHT — Polaroid image ────────────────────────────────────
              Mobile (< md): simple centered card, no absolute positioning
              md           : slightly rotated, fixed size card
              lg/xl        : original absolute positioning restored        */}

          {/* Mobile + tablet (< lg): simple non-absolute polaroid */}
          <div className="lg:hidden flex justify-center items-start pt-4 md:pt-8">
            <div
              className="bg-white/5 rounded-[8px] shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                w-[260px] h-[290px] sm:w-[280px] sm:h-[310px] md:w-[310px] md:h-[340px]
                overflow-hidden"
              style={{ transform: "rotate(7deg)" }}
            >
              <img
                src="/about/ceo.png"
                alt="Founder"
                className="w-full h-full object-cover"
                style={{ objectPosition: "75% center" }}
              />
            </div>
          </div>

          {/* Desktop (lg+): original absolute layout — untouched */}
          <div className="hidden lg:block relative h-[500px] lg:h-[520px] xl:h-[560px]">
            <div
              className="absolute backdrop-blur- top-20 left-16 right-0 bg-white/5 rounded-[8px] shadow-[0_20px_50px_rgba(0,0,0,0.12)] z-10 lg:w-[300px] lg:h-[320px] xl:w-[330px] xl:h-[350px]"
              style={{ transform: "rotate(7deg)" }}
            >
              <div className="overflow-hidden rounded-[4px] h-full w-full">
                <img
                  src="/about/ceo.png"
                  alt="Founder"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "75% center" }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}