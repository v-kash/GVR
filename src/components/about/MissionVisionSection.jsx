"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cards = [
  {
    label: "Our Mission",
    headline1: "Delivering Freshness",
    headline2: "With Integrity",
    body: "To provide farm-fresh eggs and premium dry fish with uncompromising quality, hygiene, and care while building lasting relationships through trust and consistency.",
    image: "/about/mission.png", // Change image path
  },
  {
    label: "Our Vision",
    headline1: "Building A Healthier",
    headline2: "Future Together",
    body: "To become a trusted name in natural food products by promoting sustainable practices, ethical sourcing, and delivering nourishment to every home we serve.",
    image: "/about/vision.png", // Change image path
  },
];

export default function MissionVision() {
  return (
    <section className="relative py-8 lg:py-16 bg-[#f5f0e7] overflow-hidden">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Mobile */}
        <div className="flex flex-col items-center lg:hidden gap-3">
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 bg-[#6E7E45]"
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

            <div>
              <p
                className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`}
                style={{ fontWeight: 500 }}
              >
                Our Purpose
              </p>

              <div className="mt-2 h-[0.5px] w-[115px] bg-[#d8d2c4]" />
            </div>
          </div>

          <h2
            className={`${cormorant.className} leading-[1.0] text-[#241A12] text-center`}
          >
            <span className="text-[34px] md:text-[48px] font-semibold">
              Mission &
            </span>{" "}
            <span className="text-[34px] md:text-[48px] italic font-medium text-[#6E7E45]">
              Vision
            </span>
          </h2>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex items-start gap-8 relative">
          {/* Left Eyebrow */}
          <div className="flex items-center gap-3 flex-shrink-0 pt-2">
            <div
              className="w-9 h-9 bg-[#6E7E45]"
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

            <div>
              <p
                className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`}
                style={{ fontWeight: 500 }}
              >
                Our Purpose
              </p>

              <div className="mt-2 h-[0.5px] w-[115px] bg-[#d8d2c4]" />
            </div>
          </div>

          {/* Heading */}
          <h2
            className={`${cormorant.className} leading-[1.0] text-[#241A12] flex-1 text-center absolute left-0 right-0`}
          >
            <span className="text-[52px] xl:text-[60px] font-semibold">
              Mission &
            </span>{" "}
            <span className="text-[52px] xl:text-[60px] italic font-medium text-[#6E7E45]">
              Vision
            </span>
          </h2>
        </div>

        {/* Subtext */}
        <p
          className={`${montserrat.className} text-[14px] lg:text-[15px] text-[#5f5146] leading-7 pt-6 pb-12 text-center max-w-xl mx-auto`}
          style={{ fontWeight: 400 }}
        >
          Freshness with integrity. Growth with purpose.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.label}
              className="bg-white/50 rounded-[16px] overflow-hidden border border-[#6E7E45]/15 backdrop-blur-sm"
            >
              <div className="p-8 lg:p-10">
                {/* Eyebrow */}
                <div className="flex items-center gap-2 mb-5">
                  <div
                    className="w-6 h-6 bg-[#6E7E45]"
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

                  <p
                    className={`${montserrat.className} text-[10px] uppercase tracking-[0.22em] text-[#6E7E45]`}
                    style={{ fontWeight: 600 }}
                  >
                    {card.label}
                  </p>
                </div>

                {/* Gold line */}
                <div className="h-px w-10 bg-[#C49A2A]/60 mb-6" />

                {/* Heading */}
                <h3 className={`${cormorant.className} leading-[1.1] mb-6`}>
                  <span className="block text-[30px] lg:text-[36px] font-semibold text-[#241A12]">
                    {card.headline1}
                  </span>

                  <span className="block text-[30px] lg:text-[36px] italic font-medium text-[#6E7E45]">
                    {card.headline2}
                  </span>
                </h3>

                {/* Description */}
                <p
                  className={`${montserrat.className} text-[14px] leading-[1.9] text-[#5f5146]`}
                >
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
