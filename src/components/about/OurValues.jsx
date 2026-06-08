"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const pillars = [
  {
    icon: "/icons/Sprout.svg",
    title: "Respect Nature",
    desc: "We farm in harmony with nature, nourishing the land so it can nourish us—today and always.",
  },
  {
    icon: "/icons/Hen.svg",
    title: "Care for Hens",
    desc: "Happy hens live better lives. We give them space, clean air, and natural care every day.",
  },
  {
    icon: "/icons/Eggnest.svg",
    title: "Honest Quality",
    desc: "We never cut corners. Just wholesome feed, careful farming, and eggs you can trust.",
  },
  {
    icon: "/icons/Person.svg",
    title: "People First",
    desc: "We believe in building real relationships—with our team, our community, and you.",
  },
];

export default function OurValues() {
  return (
    <section className="relative bg-[#f5f0e7] overflow-hidden ">

      {/* ── TOP HALF — split layout ────────────────────────── */}
      <div className="relative min-h-[420px] lg:min-h-[480px] ">

        {/* Right side — egg nest image */}
        <div className="absolute right-0 top-0  hidden md:block sm:w-[75%]   md:w-[80%]   lg:w-[75%] xl:w-[75%]    ">
          <img
            src="/about/philosophybg2.png"
            alt="Farm fresh eggs in nest"
            className="w-full h-full object-cover object-center"
          />
          {/* Fade left edge into cream */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#f5f0e7] via-[#f5f0e7]/60 to-transparent" /> */}
          {/* Fade bottom */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-[#f5f0e7] via-transparent to-transparent" /> */}
        </div>

        

        {/* Left text content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-16 pb-12 lg:pb-16">
          <div className="max-w-[480px]">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="flex flex-col items-center">
                  <div
  className="w-7 h-7 lg:w-9 lg:h-9 bg-[#6E7E45]"  
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
                  <div className="mb-2 " />
                </div>
                <div className="flex flex-col">
                  <p className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`}
                    style={{ fontWeight: 500 }}>
                    Our Philosophy
                  </p>
                  <div className="mt-2 h-[0.5px] w-[115px] bg-[#d8d2c4]" />
                </div>
              </div>
            </div>

            {/* Headline */}
            <h2 className={`${cormorant.className} leading-[1.05] text-[#241A12]`}>
              <span className="block text-[48px] lg:text-[64px] font-semibold">
                Our philosophy
              </span>
              <span className="block text-[48px] lg:text-[64px] font-semibold">
                is simple.
              </span>
              <span className="block text-[36px] lg:text-[38px] italic font-medium text-[#6E7E45]  mt-4">
                Care deeply, farm naturally,<br />
                and do what's right.
              </span>
            </h2>

            {/* Gold underline */}
            <div className="mt-4 mb-6 h-[2px] w-10 bg-[#C49A2A]" />

            {/* Body text */}
            <p className={`${montserrat.className} text-[13px] lg:text-[14px] text-[#5f5146] leading-[1.9]`}
              style={{ fontWeight: 400 }}>
              We believe real food starts with real values.<br />
              Everything we do is guided by respect—for nature,<br />
              for our hens, and for the families who trust us.
            </p>

          </div>
        </div>
      </div>

      {/* ── MIDDLE — 4 pillars row ────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-16  md:py-0 lg:py-0 xl:py-12 bg-amber-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {pillars.map((p, i) => (
            <div key={i} className={`flex flex-col items-center text-center px-6 py-6
  ${i % 2 === 0 ? "border-r border-[#6E7E45]/15" : "border-r-0"}
  ${i < pillars.length - 1 ? "lg:border-r border-[#6E7E45]/15" : "lg:border-r-0"}
`}>
              {/* Icon */}
             <div
                        className="w-10 h-10 md:w-12  md:h-12 lg:w-11 lg:h-11 bg-[#717f3d] "
                        style={{
                          WebkitMaskImage: `url(${p.icon})`,
                          maskImage: `url(${p.icon})`,
                          WebkitMaskSize: "contain",
                          maskSize: "contain",
                          WebkitMaskRepeat: "no-repeat",
                          maskRepeat: "no-repeat",
                          WebkitMaskPosition: "center",
                          maskPosition: "center",
                        }}
                      />

              {/* Handwritten title */}
              <p className={`${caveat.className} text-[20px] lg:text-[22px] text-[#4D5B2A] mb-2`}
                style={{ fontWeight: 500 }}>
                {p.title}
              </p>

              {/* Gold underline */}
              <div className="w-8 h-px bg-[#C49A2A]/60 mb-3" />

              {/* Description */}
              <p className={`${montserrat.className} text-[11px] lg:text-[12px] text-[#5f5146] leading-[1.7]`}
                style={{ fontWeight: 400 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

   

    </section>
  );
}