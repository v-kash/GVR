"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Camera, MessageCircle } from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#f5f0e7] py-12 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        {/* ── HEADING ──────────────────────────────────────────────────────
            Mobile/tablet: stacked vertically
            Desktop lg+  : original absolute centered layout               */}
        <div className="mb-10">
          {/* Mobile + Tablet */}
          <div className="flex flex-col items-center lg:hidden gap-3">
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center">
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
                <div className="mb-2  w-10" />
              </div>
              <div className="flex flex-col">
                <p
                  className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`}
                  style={{ fontWeight: 500 }}
                >
                  Gallery
                </p>
                <div className="mt-2 h-[0.5px] w-[60px] bg-[#d8d2c4]" />
              </div>
            </div>
            <h2
              className={`${cormorant.className} leading-[1.0] text-[#241A12] text-center`}
            >
              <span className="text-[34px] sm:text-[38px] font-semibold">
                Moments from{" "}
              </span>
              <span className="text-[34px] sm:text-[38px] italic font-medium text-[#6E7E45]">
                Our farm
              </span>
            </h2>
          </div>

          {/* Desktop — original untouched */}
          <div className="hidden lg:flex items-start gap-8 relative">
            <div className="flex items-center gap-3 flex-shrink-0 pt-2">
              <div className="flex flex-col items-center">
                <div
                  className="w-7 h-7 lg:w-8 lg:h-8 bg-[#6E7E45]"
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
                <div className="mb-2  w-10" />
              </div>
              <div className="flex flex-col">
                <p
                  className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`}
                  style={{ fontWeight: 500 }}
                >
                  Gallery
                </p>
                <div className="mt-2 h-[0.5px] w-[60px] bg-[#d8d2c4]" />
              </div>
            </div>
            <h2
              className={`${cormorant.className} leading-[1.0] text-[#241A12] absolute left-0 right-0 text-center`}
            >
              <span className="text-[38px] lg:text-[60px] font-semibold">
                Moments from{" "}
              </span>
              <span className="text-[38px] lg:text-[60px] italic font-medium text-[#6E7E45]">
                Our farm
              </span>
            </h2>
          </div>

          <p
            className={`${montserrat.className} text-[13px] lg:text-[15px] text-[#5f5146] leading-7 text-center max-w-xl mx-auto pt-6 sm:pt-8 lg:pt-12`}
            style={{ fontWeight: 400 }}
          >
            A glimpse into our daily operations – from healthy hens and careful
            handling to safe packaging and timely delivery.
          </p>
        </div>

        {/* ── GALLERY GRID ─────────────────────────────────────────────────

            MOBILE (< md): 2-column uniform grid — clean, readable
            TABLET (md)  : original absolute layout scaled to 72% of 950px
                           all % lefts stay the same, px heights × 0.72
            DESKTOP (lg+): original absolute layout — pixel perfect         */}

        {/* MOBILE: 2-col grid — hidden on md+ */}
        <div className="grid grid-cols-2 gap-2 md:hidden">
          {[
            { src: "/gallery/g1.webp", h: "h-[180px]" },
            { src: "/gallery/g3.webp", h: "h-[180px]" },
            { src: "/gallery/g11.webp", h: "h-[140px]" },
            { src: "/gallery/g4.webp", h: "h-[140px]" },
            { src: "/gallery/g6.webp", h: "h-[150px]" },
            { src: "/gallery/g7.webp", h: "h-[150px]" },
            { src: "/gallery/g5.webp", h: "h-[140px]" },
            { src: "/gallery/g10.webp", h: "h-[140px]" },
          ].map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-[4px] group ${img.h}`}
            >
              <img
                src={img.src}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>

        {/* TABLET (md) + DESKTOP (lg+): absolute layout
            md : container w-full h-[396px] — scaled 72% of original
            lg+: container w-[950px] h-[550px] — original exact values    */}
        <div className="hidden md:flex justify-center min-h-17">
          <div className="relative flex w-full md:w-full lg:w-[950px] md:h-[396px] lg:h-[550px]">
            {/* img1 — big left
                md: h-[216px]  lg: h-[300px] (original) */}
            <div
              className="absolute overflow-hidden group rounded-[4px]"
              style={{ top: 0, width: "50%", height: "var(--img1-h, 300px)" }}
            >
              <img
                src="/gallery/g1.webp"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>

            {/* img2 — top middle
                md: h-[79px]  lg: h-[110px] */}
            <div
              className="absolute overflow-hidden group rounded-[4px]"
              style={{
                top: 0,
                left: "51%",
                width: "24%",
                height: "var(--img2-h, 110px)",
              }}
            >
              <img
                src="/gallery/g11.webp"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>

            {/* img3 — top right
                md: h-[191px]  lg: h-[265px] */}
            <div
              className="absolute overflow-hidden group rounded-[4px]"
              style={{
                top: 0,
                left: "76%",
                width: "24%",
                height: "var(--img3-h, 265px)",
              }}
            >
              <img
                src="/gallery/g3.webp"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>

            {/* img4 — overlaps img1 right edge
                md: top-[86px] h-[216px]  lg: top-[120px] h-[300px] */}
            <div
              className="absolute overflow-hidden group rounded-[4px]"
              style={{
                top: "var(--img4-t, 120px)",
                left: "51%",
                width: "24%",
                height: "var(--img4-h, 300px)",
              }}
            >
              <img
                src="/gallery/g4.webp"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>

            {/* img5
                md: top-[198px] h-[191px]  lg: top-[275px] h-[265px] */}
            <div
              className="absolute overflow-hidden group rounded-[4px]"
              style={{
                top: "var(--img5-t, 275px)",
                left: "76%",
                width: "24%",
                height: "var(--img5-h, 265px)",
              }}
            >
              <img
                src="/gallery/g5.webp"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>

            {/* img6
                md: top-[223px] h-[166px]  lg: top-[310px] h-[230px] */}
            <div
              className="absolute overflow-hidden group rounded-[4px]"
              style={{
                top: "var(--img6-t, 310px)",
                left: 0,
                width: "24.5%",
                height: "var(--img6-h, 230px)",
              }}
            >
              <img
                src="/gallery/g6.webp"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>

            {/* img7 — overlaps img6
                md: top-[223px] h-[166px]  lg: top-[310px] h-[230px] */}
            <div
              className="absolute overflow-hidden group rounded-[4px]"
              style={{
                top: "var(--img7-t, 310px)",
                left: "25.5%",
                width: "24.5%",
                height: "var(--img7-h, 230px)",
              }}
            >
              <img
                src="/gallery/g7.webp"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>

            {/* img8
                md: top-[310px] h-[79px]  lg: top-[430px] h-[110px] */}
            <div
              className="absolute overflow-hidden group rounded-[4px]"
              style={{
                top: "var(--img8-t, 430px)",
                left: "51%",
                width: "24%",
                height: "var(--img8-h, 110px)",
              }}
            >
              <img
                src="/gallery/g10.webp"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>

            {/* CSS custom properties — md values injected via style tag
                lg+ values are the inline style defaults above             */}
            <style>{`
              @media (min-width: 768px) and (max-width: 1023px) {
                .relative.flex.w-full {
                  --img1-h: 216px;
                  --img2-h: 79px;
                  --img3-h: 191px;
                  --img4-t: 86px;
                  --img4-h: 216px;
                  --img5-t: 198px;
                  --img5-h: 191px;
                  --img6-t: 223px;
                  --img6-h: 166px;
                  --img7-t: 223px;
                  --img7-h: 166px;
                  --img8-t: 310px;
                  --img8-h: 79px;
                }
              }
            `}</style>
          </div>
        </div>

        {/* ── BOTTOM BAR — original untouched ─────────────────────────── */}
        <div className="max-w-[550px] mx-auto">
          <div className="mt-8 bg-[#f0ece2] border border-[#6E7E45]/15 rounded-xl px-4 sm:px-6 py-4 sm:py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
            {" "}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              {" "}
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#4D5B2A] flex items-center justify-center flex-shrink-0">
                <Camera size={14} className="text-[#f5f0e7]" />
              </div>
              <p
                className={`${montserrat.className} text-[11px] sm:text-[12px] text-[#241A12]`}
                style={{ fontWeight: 400 }}
              >
                Quality is not just our promise,{" "}
                <span style={{ fontWeight: 700 }}>
                  it's what we do every single day.
                </span>
              </p>
            </div>
            <a
              href="https://wa.me/919448453609"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-stretch rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] flex-shrink-0"
            >
              <span className="bg-[#3f4a22] px-2 sm:px-3 flex items-center justify-center">
                <MessageCircle size={13} className="text-[#f5f0e7]" />
              </span>
              <span
                className={`${montserrat.className} bg-[#4D5B2A] px-3 sm:px-5 py-2.5 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-[#f5f0e7]`}
                style={{ fontWeight: 600 }}
              >
                WhatsApp Us
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
