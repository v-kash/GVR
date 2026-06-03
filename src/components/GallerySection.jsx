"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Camera, Shield, Package, Truck, MessageCircle } from "lucide-react";

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
      className="relative overflow-hidden bg-[#f5f0e7] py-20 lg:py-16"
    >
      {/* Decorative leaves */}

      <div className="mx-auto max-w-7xl px-6 lg:px-16 ">
        {/* ── HEADING ─────────────────────────────────────── */}
        <div className="mb-10">
          {/* Top Row — eyebrow left, headline center */}
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
                  Gallery
                </p>
                <div className="mt-2 h-[0.5px] w-[60px] bg-[#d8d2c4]" />
              </div>
            </div>

            {/* Headline — absolute centered */}
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

          {/* Subtext — below the row */}
          <p
            className={`${montserrat.className} text-[13px] lg:text-[15px] text-[#5f5146] leading-7 text-center max-w-xl mx-auto pt-12`}
            style={{ fontWeight: 400 }}
          >
            A glimpse into our daily operations – from healthy hens and careful
            handling to safe packaging and timely delivery.
          </p>
        </div>

        <div className="flex  justify-center min-h-17 ">
          {" "}
          <div className="relative flex  w-[950px] h-[550px]">
            {/* img1 — big left */}
            <div
              className="absolute overflow-hidden  group rounded-[4px] "
              style={{ top: 0, width: "50%", height: "300px" }}
            >
              <img
                src="/gallery/g1.webp"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04] "
              />
            </div>

            {/* img2 — top middle */}
            <div
              className="absolute overflow-hidden  group rounded-[4px]"
              style={{ top: 0, left: "51%", width: "24%", height: "110px" }}
            >
              <img
                src="/gallery/g11.webp"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>

            {/* img3 — top right, overlaps img2 slightly */}
            <div
              className="absolute overflow-hidden  group rounded-[4px]"
              style={{ top: 0, left: "76%", width: "24%", height: "265px" }}
            >
              <img
                src="/gallery/g3.webp"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>

            {/* img4 — overlaps img1 right edge */}
            <div
              className="absolute overflow-hidden  group rounded-[4px]"
              style={{
                top: "120px",
                left: "51%",
                width: "24%",
                height: "300px",
              }}
            >
              <img
                src="/gallery/g4.webp"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>

            {/* img5 */}
            <div
              className="absolute overflow-hidden  group rounded-[4px]"
              style={{
                top: "275px",
                left: "76%",
                width: "24%",
                height: "265px",
              }}
            >
              <img
                src="/gallery/g5.webp"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>

            {/* img6 */}
            <div
              className="absolute overflow-hidden  group rounded-[4px]"
              style={{ top: "310px", left: 0, width: "24.5%", height: "230px" }}
            >
              <img
                src="/gallery/g6.webp"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>

            {/* img7 — overlaps img6 */}
            <div
              className="absolute overflow-hidden  group rounded-[4px]"
              style={{
                top: "310px",
                left: "25.5%",
                width: "24.5%",
                height: "230px",
              }}
            >
              <img
                src="/gallery/g7.webp"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>

            {/* img8 */}
            <div
              className="absolute overflow-hidden  group rounded-[4px]"
              style={{
                top: "430px",
                left: "51%",
                width: "24%",
                height: "110px",
              }}
            >
              <img
                src="/gallery/g10.webp"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>

            {/* img9 — overlaps img8 */}
            {/* <div className="absolute overflow-hidden  group z-30"
    style={{ top: "340px", left: "75%", width: "25%", height: "180px" }}>
    <img src="/images/hero-1.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
  </div> */}
          </div>
        </div>
        {/* ── BOTTOM BAR ───────────────────────────────────── */}
        <div className="max-w-[550px] mx-auto">
          <div className="mt-8 bg-[#f0ece2] border border-[#6E7E45]/15 rounded-xl px-6 py-3.5 flex items-center justify-between gap-4">
            {/* Left */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#4D5B2A] flex items-center justify-center flex-shrink-0">
                <Camera size={15} className="text-[#f5f0e7]" />
              </div>
              <p
                className={`${montserrat.className} text-[12px] text-[#241A12]`}
                style={{ fontWeight: 400 }}
              >
                Quality is not just our promise,{" "}
                <span style={{ fontWeight: 700 }}>
                  it's what we do every single day.
                </span>
              </p>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919448453609"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-stretch rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] flex-shrink-0"
            >
              <span className="bg-[#3f4a22] px-3 flex items-center justify-center">
                <MessageCircle size={14} className="text-[#f5f0e7]" />
              </span>
              <span
                className={`${montserrat.className} bg-[#4D5B2A] px-5 py-2.5 text-[10px] uppercase tracking-[0.15em] text-[#f5f0e7]`}
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
