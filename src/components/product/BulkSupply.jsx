"use client";

import { useRef, useEffect, useState } from "react";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Mail, Phone } from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const DOT_ANGLES = [50, 130, 180, 230, 312, 360];
const CONNECTOR_LENGTHS_XL = [90, 90, 70, 70, 75, 60]; // original xl values

export default function BulkSupply() {
  const radialRef = useRef(null);
  const [scale, setScale] = useState(1);

  // Measure container and derive a scale factor relative to original 1280px design
  useEffect(() => {
    const calc = () => {
      if (!radialRef.current) return;
      const W = radialRef.current.offsetWidth;
      // Original design width was ~1248px (max-w-7xl minus padding)
      const s = Math.min(1, W / 1100);
      setScale(s);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  // Original R and all derived values, multiplied by scale
  const R = 220 * scale;
  const CONNECTOR_LENGTHS = CONNECTOR_LENGTHS_XL.map((l) => l * scale);
  const containerH = 600 * scale;

  return (
    <section className="relative bg-[#f5f0e7] overflow-hidden py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        {/* ── HEADING ──────────────────────────────────────────────────────
            Mobile/tablet: stacked  Desktop: original absolute layout      */}
        <div className="mb-10">
          {/* Mobile only (< md) */}
          <div className="flex flex-col items-center lg:hidden gap-3">
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <div
                  className="w-8 h-8 bg-[#6E7E45]"
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
                  Bulk Supply
                </p>
                <div className="mt-2 h-[0.5px] w-[90px] bg-[#d8d2c4]" />
              </div>
            </div>
            <h2
              className={`${cormorant.className} leading-[1.0] text-[#241A12] text-center`}
            >
              <span className="text-[32px] sm:text-[34px] font-semibold">
                A Trusted Partner{" "}
              </span>
              <span className="text-[32px] sm:text-[34px] italic font-medium text-[#6E7E45]">
                for Your Business.
              </span>
            </h2>
          </div>

          {/* md+ — original absolute layout untouched */}
          <div className="hidden lg:flex items-start gap-8 relative">
            <div className="flex items-center gap-3 flex-shrink-0 pt-2">
              <div className="flex flex-col items-center">
                <div
                  className="w-8 h-8 bg-[#6E7E45]"
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
                  Bulk Supply
                </p>
                <div className="mt-2 h-[0.5px] w-[90px] bg-[#d8d2c4]" />
              </div>
            </div>
            <h2
              className={`${cormorant.className} leading-[1.0] text-[#241A12] absolute left-0 right-0 text-center`}
            >
              <span className="text-[36px] lg:text-[60px] font-semibold">
                A Trusted Partner{" "}
              </span>
              <br />
              <span className="text-[36px] lg:text-[60px] italic font-medium text-[#6E7E45]">
                for Your Business.
              </span>
            </h2>
          </div>

          <p
            className={`${montserrat.className} text-[13px] lg:text-[14px] text-[#5f5146] leading-[1.8] pt-4 md:pt-10 lg:pt-24 text-center max-w-lg mx-auto`}
            style={{ fontWeight: 400 }}
          >
            From our farm to your business — we deliver freshness, quality and
            reliability in every bulk order.
          </p>
        </div>

        {/* ── MOBILE ONLY: Card grid (< md) ───────────────────────────── */}
        <div className="md:hidden grid grid-cols-2 gap-4 mb-8">
          {[
            {
              photo: "/products/c6.png",
              title: "Retailers",
              desc: "Consistent supply of fresh eggs to keep your shelves always stocked.",
            },
            {
              photo: "/products/c5.png",
              title: "Hotels",
              desc: "Reliable bulk supply to deliver great experiences every day.",
            },
            {
              photo: "/products/c1.png",
              title: "Cafes",
              desc: "From breakfast to brunch, we keep your kitchen running.",
            },
            {
              photo: "/products/c2.png",
              title: "Restaurants",
              desc: "Premium quality eggs for delicious dishes your customers love.",
            },
            {
              photo: "/products/c3.png",
              title: "Bakeries",
              desc: "Fresh, high-quality eggs that bring perfection to every bake.",
            },
            {
              photo: "/products/c4.png",
              title: "Distributors",
              desc: "Partner with us for a steady supply you can count on.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#e8e0d4] p-4 flex flex-col items-center text-center shadow-[0_4px_16px_rgba(0,0,0,0.05)]"
            >
              <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full overflow-hidden border-2 border-[#C49A2A]/30 bg-[#edf3de] mb-3">
                <img
                  src={item.photo}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#C49A2A] mb-2" />
              <p
                className={`${montserrat.className} text-[11px] uppercase tracking-[0.1em] text-[#241A12] mb-1`}
                style={{ fontWeight: 700 }}
              >
                {item.title}
              </p>
              <p
                className={`${montserrat.className} text-[10px] text-[#5f5146] leading-[1.6]`}
                style={{ fontWeight: 400 }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ── md+: RADIAL — original design, dynamically scaled ─────────
            useRef measures container width → scale factor → all px values
            multiply by scale so the design shrinks/grows proportionally  */}
        <div
          ref={radialRef}
          className="hidden md:block relative w-full"
          style={{ height: `${containerH}px` }}
        >
          {/* ── DASHED CIRCLE + CONNECTORS ── */}
          <div
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: `${R * 1.6}px`,
              height: `${R * 1.6}px`,
            }}
          >
            {/* Dashed circle border — original style */}
            <div className="w-full h-full rounded-full border-2 border-dashed border-[#C49A2A]/40" />

            {/* SVG connectors + endpoint dots */}
            <svg
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: `${R * 1.6}px`,
                height: `${R * 1.6}px`,
                zIndex: 2,
                overflow: "visible",
              }}
              viewBox={`0 0 ${R * 1.6} ${R * 1.6}`}
            >
              {DOT_ANGLES.map((deg, i) => {
                const cr = (R * 1.6) / 2;
                const rad = (deg * Math.PI) / 180;
                const dotX = cr + Math.cos(rad) * cr;
                const dotY = cr - Math.sin(rad) * cr;
                const endX = cr + Math.cos(rad) * (cr + CONNECTOR_LENGTHS[i]);
                const endY = cr - Math.sin(rad) * (cr + CONNECTOR_LENGTHS[i]);
                return (
                  <g key={i}>
                    <line
                      x1={dotX}
                      y1={dotY}
                      x2={endX}
                      y2={endY}
                      stroke="#C49A2A"
                      strokeWidth="1.5"
                      strokeDasharray="5,4"
                      opacity="0.6"
                    />
                    <circle cx={endX} cy={endY} r="4" fill="#C49A2A" />
                  </g>
                );
              })}
            </svg>

            {/* Circle edge dots */}
            {DOT_ANGLES.map((deg, i) => {
              const cr = (R * 1.6) / 2;
              const rad = (deg * Math.PI) / 180;
              const x = cr + Math.cos(rad) * cr;
              const y = cr - Math.sin(rad) * cr;
              return (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-[#C49A2A]"
                  style={{ left: `${x - 6}px`, top: `${y - 6}px` }}
                />
              );
            })}
          </div>

          {/* ── CENTER — original design untouched, sizes scaled ── */}
          <div
            className="absolute flex flex-col items-center justify-center text-center"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
            }}
          >
            <p
              className={`${cormorant.className} font-semibold text-[#4D5B2A] leading-none`}
              style={{ fontSize: `${32 * scale}px` }}
            >
              GVR
            </p>
            <p
              className={`${montserrat.className} uppercase tracking-[0.22em] text-[#6E7E45] mb-3`}
              style={{ fontWeight: 600, fontSize: `${9 * scale}px` }}
            >
              Farm Foods
            </p>
            <img
              src="/products/eggbox.png"
              alt="GVR Egg Box"
              style={{ width: `${250 * scale}px` }}
              className="object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.15)]"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>

          {/* ── LEFT ITEMS — original layout, positions scaled ── */}
          {/* Retailers — top left */}
          <div
            className="absolute flex items-center gap-3"
            style={{ top: "6%", left: `${15 * scale}%` }}
          >
            <div
              style={{ width: `${80 * scale}px`, height: `${80 * scale}px` }}
              className="rounded-full overflow-hidden border-2 border-[#C49A2A]/30 flex-shrink-0 bg-[#edf3de]"
            >
              <img
                src="/products/c6.png"
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
            <div>
              <p
                className={`${montserrat.className} uppercase tracking-[0.1em] text-[#241A12]`}
                style={{ fontWeight: 700, fontSize: `${11 * scale}px` }}
              >
                Retailers
              </p>
              <p
                className={`${montserrat.className} text-[#5f5146] leading-[1.5]`}
                style={{
                  fontWeight: 400,
                  fontSize: `${10 * scale}px`,
                  maxWidth: `${160 * scale}px`,
                }}
              >
                Consistent supply of fresh eggs to keep your shelves always
                stocked.
              </p>
            </div>
          </div>

          {/* Hotels — middle left */}
          <div
            className="absolute flex items-center gap-3"
            style={{
              top: "48%",
              left: `${7 * scale}%`,
              transform: "translateY(-50%)",
            }}
          >
            <div
              style={{ width: `${80 * scale}px`, height: `${80 * scale}px` }}
              className="rounded-full overflow-hidden border-2 border-[#C49A2A]/30 flex-shrink-0 bg-[#edf3de]"
            >
              <img
                src="/products/c5.png"
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
            <div>
              <p
                className={`${montserrat.className} uppercase tracking-[0.1em] text-[#241A12]`}
                style={{ fontWeight: 700, fontSize: `${11 * scale}px` }}
              >
                Hotels
              </p>
              <p
                className={`${montserrat.className} text-[#5f5146] leading-[1.5]`}
                style={{
                  fontWeight: 400,
                  fontSize: `${10 * scale}px`,
                  maxWidth: `${160 * scale}px`,
                }}
              >
                Reliable bulk supply to deliver great experiences every day.
              </p>
            </div>
          </div>

          {/* Cafes — bottom left */}
          <div
            className="absolute flex items-center gap-3"
            style={{ bottom: "10%", left: `${15 * scale}%` }}
          >
            <div
              style={{ width: `${80 * scale}px`, height: `${80 * scale}px` }}
              className="rounded-full overflow-hidden border-2 border-[#C49A2A]/30 flex-shrink-0 bg-[#edf3de]"
            >
              <img
                src="/products/c1.png"
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
            <div>
              <p
                className={`${montserrat.className} uppercase tracking-[0.1em] text-[#241A12]`}
                style={{ fontWeight: 700, fontSize: `${11 * scale}px` }}
              >
                Cafes
              </p>
              <p
                className={`${montserrat.className} text-[#5f5146] leading-[1.5]`}
                style={{
                  fontWeight: 400,
                  fontSize: `${10 * scale}px`,
                  maxWidth: `${160 * scale}px`,
                }}
              >
                From breakfast to brunch, we keep your kitchen running.
              </p>
            </div>
          </div>

          {/* ── RIGHT ITEMS — original reversed layout, positions scaled ── */}
          {/* Restaurants — top right */}
          <div
            className="absolute flex items-center gap-3 flex-row-reverse"
            style={{ top: "6%", right: `${15 * scale}%` }}
          >
            <div
              style={{ width: `${80 * scale}px`, height: `${80 * scale}px` }}
              className="rounded-full overflow-hidden border-2 border-[#C49A2A]/30 flex-shrink-0 bg-[#edf3de]"
            >
              <img
                src="/products/c2.png"
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
            <div className="text-right">
              <p
                className={`${montserrat.className} uppercase tracking-[0.1em] text-[#241A12]`}
                style={{ fontWeight: 700, fontSize: `${11 * scale}px` }}
              >
                Restaurants
              </p>
              <p
                className={`${montserrat.className} text-[#5f5146] leading-[1.5]`}
                style={{
                  fontWeight: 400,
                  fontSize: `${10 * scale}px`,
                  maxWidth: `${160 * scale}px`,
                }}
              >
                Premium quality eggs for delicious dishes your customers love.
              </p>
            </div>
          </div>

          {/* Bakeries — middle right */}
          <div
            className="absolute flex items-center gap-3 flex-row-reverse"
            style={{
              top: "48%",
              right: `${7 * scale}%`,
              transform: "translateY(-50%)",
            }}
          >
            <div
              style={{ width: `${80 * scale}px`, height: `${80 * scale}px` }}
              className="rounded-full overflow-hidden border-2 border-[#C49A2A]/30 flex-shrink-0 bg-[#edf3de]"
            >
              <img
                src="/products/c3.png"
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
            <div className="text-right">
              <p
                className={`${montserrat.className} uppercase tracking-[0.1em] text-[#241A12]`}
                style={{ fontWeight: 700, fontSize: `${11 * scale}px` }}
              >
                Bakeries
              </p>
              <p
                className={`${montserrat.className} text-[#5f5146] leading-[1.5]`}
                style={{
                  fontWeight: 400,
                  fontSize: `${10 * scale}px`,
                  maxWidth: `${160 * scale}px`,
                }}
              >
                Fresh, high-quality eggs that bring perfection to every bake.
              </p>
            </div>
          </div>

          {/* Distributors — bottom right */}
          <div
            className="absolute flex items-center gap-3 flex-row-reverse"
            style={{ bottom: "10%", right: `${15 * scale}%` }}
          >
            <div
              style={{ width: `${80 * scale}px`, height: `${80 * scale}px` }}
              className="rounded-full overflow-hidden border-2 border-[#C49A2A]/30 flex-shrink-0 bg-[#edf3de]"
            >
              <img
                src="/products/c4.png"
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
            <div className="text-right">
              <p
                className={`${montserrat.className} uppercase tracking-[0.1em] text-[#241A12]`}
                style={{ fontWeight: 700, fontSize: `${11 * scale}px` }}
              >
                Distributors
              </p>
              <p
                className={`${montserrat.className} text-[#5f5146] leading-[1.5]`}
                style={{
                  fontWeight: 400,
                  fontSize: `${10 * scale}px`,
                  maxWidth: `${160 * scale}px`,
                }}
              >
                Partner with us for a steady supply you can count on.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden max-w-sm mx-auto mt-6">
          <a
            href="mailto:info@gvrfarmfoods.com"
            className="group flex items-center justify-center rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            <span className="bg-[#8B6914] px-5 py-4 flex items-center justify-center">
              <Mail
                size={18}
                className="text-[#f5f0e7] transition-transform duration-300 group-hover:rotate-6"
              />
            </span>

            <span
              className={`${montserrat.className} flex-1 bg-[#C49A2A] py-4 text-center text-[12px] uppercase tracking-[0.18em] text-[#241A12]`}
              style={{ fontWeight: 700 }}
            >
              Enquire Now
            </span>
          </a>
        </div>

        {/* ── BOTTOM CTA BAR — original untouched ─────────────────────── */}
        <div className="hidden md:block max-w-4xl mx-auto">
          <div className="mt-6 bg-[#3f4a22] rounded-2xl px-6 sm:px-8  md:px-8 md:py-2 lg:px-10 lg:py-4 py-4 sm:py-5 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8">
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className=" w-8 h-8  md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full border border-[#c5db8e]/30 flex items-center justify-center">
                <Phone size={18} className="text-[#c5db8e]" />
              </div>
              <div>
                <p
                  className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#c5db8e] mb-1`}
                  style={{ fontWeight: 600 }}
                >
                  Let's Grow Together
                </p>
                <p
                  className={`${montserrat.className} hidden lg:block text-[12px] text-[#f5f0e7]/70 leading-[1.6] text-center md:text-left`}
                  style={{ fontWeight: 400 }}
                >
                  For bulk orders and partnership inquiries,
                  <br className="hidden sm:block" /> our team is ready to assist
                  you.
                </p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-[#f5f0e7]/10" />
            <a
              href="mailto:info@gvrfarmfoods.com"
              className="inline-flex items-stretch rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="bg-[#8B6914] px-4 flex items-center justify-center">
                <Mail size={16} className="text-[#f5f0e7]" />
              </span>
              <span
                className={`${montserrat.className} bg-[#C49A2A]  px-2 py-3 md:px-4 md:py-3  lg:px-7 lg:py-3.5  md:text-[10px] lg:text-[11px] uppercase tracking-[0.15em] text-[#241A12]`}
                style={{ fontWeight: 700 }}
              >
                Enquire Now
              </span>
            </a>
            <div className="hidden md:block w-px h-12 bg-[#f5f0e7]/10" />
            <div className=" flex items-center gap-2">
              <Phone size={14} className="text-[#c5db8e]" />
              <a
                href="tel:+919448453609"
                className={`${montserrat.className} text-[13px] text-[#f5f0e7]/80 hover:text-[#c5db8e] transition-colors`}
                style={{ fontWeight: 500 }}
              >
                +91 94484 53609
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
