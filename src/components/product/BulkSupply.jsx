"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Mail, Phone, Globe } from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Connector = ({ x, y, angle, length = 120 }) => {
  return (
    <div
      className="absolute origin-left"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
      }}
    >
      <div className="flex items-center">
        <div
          className="border-t-2 border-dashed border-[#C49A2A]/60"
          style={{
            width: `${length}px`,
          }}
        />

        <div className="w-3 h-3 rounded-full bg-[#C49A2A]" />
      </div>
    </div>
  );
};

const stats = [
  {
    icon: "/icons/Untitled-5.png",
    num: "500+",
    label: "Businesses Served",
    sub: "Across multiple industries",
  },
  {
    icon: "/icons/Untitled-4.png",
    num: "20+",
    label: "Cities Covered",
    sub: "Expanding every day",
  },
  {
    icon: "/icons/truck.png",
    num: "Daily",
    label: "Fresh Dispatch",
    sub: "On-time, every day",
  },
  {
    icon: "/icons/Shield.png",
    num: "100%",
    label: "Quality Assured",
    sub: "Because you deserve the best",
  },
];

// Each item: angle in degrees (0 = right, 90 = bottom), side = left|right
// Left side items face right (photo far left, icon+text right of photo)
// Right side items face left (icon+text left of photo, photo far right)
const items = [
  // LEFT SIDE — 3 items
  {
    side: "left",
    angle: 330, // top-left
    photo: "/images/bulk-retailers.jpg",
    icon: "/icons/home.png",
    title: "Retailers",
    desc: "Consistent supply of fresh eggs to keep your shelves always stocked.",
  },
  {
    side: "left",
    angle: 210, // middle-left
    photo: "/images/bulk-hotels.jpg",
    icon: "/icons/Assure.png",
    title: "Hotels",
    desc: "Reliable bulk supply to deliver great experiences every day.",
  },
  {
    side: "left",
    angle: 150, // bottom-left
    photo: "/images/bulk-cafes.jpg",
    icon: "/icons/hen.png",
    title: "Cafes",
    desc: "From breakfast to brunch, we keep your kitchen running.",
  },
  // RIGHT SIDE — 3 items
  {
    side: "right",
    angle: 30, // top-right
    photo: "/images/bulk-restaurants.jpg",
    icon: "/icons/eggnest.png",
    title: "Restaurants",
    desc: "Premium quality eggs for delicious dishes your customers love.",
  },
  {
    side: "right",
    angle: 350, // middle-right  (using negative to place on right at ~10deg)
    photo: "/images/bulk-bakeries.jpg",
    icon: "/icons/sprout.png",
    title: "Bakeries",
    desc: "Fresh, high-quality eggs that bring perfection to every bake.",
  },
  {
    side: "right",
    angle: 50, // bottom-right
    photo: "/images/bulk-distributors.jpg",
    icon: "/icons/truck.png",
    title: "Distributors",
    desc: "Partner with us for a steady supply you can count on.",
  },
];

// Dot positions on circle (6 dots, evenly spaced at 60deg apart starting from top-right)
const DOT_ANGLES = [50, 130, 180, 230, 312, 360];

export default function BulkSupply() {
  const R = 220; // circle radius in px
  const CX = 50; // center x %
  const CY = 50; // center y %

  const CONNECTOR_LENGTHS = [
    90, // top-right
    90, // top
    70, // top-left
    70, // bottom-left
    75, // bottom
    60, // bottom-right
  ];

  return (
    <section className="relative bg-[#f5f0e7] overflow-hidden py-20 lg:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        {/* ── HEADING ── */}
       <div className="mb-10">
  {/* Top Row — eyebrow left, headline centered */}
  <div className="flex items-start gap-8 relative">

    {/* Left Eyebrow */}
    <div className="flex items-center gap-3 flex-shrink-0 pt-2">
      <div className="flex flex-col items-center">
        <img src="/icons/Untitle1.png" alt="" className="w-8 h-8 object-contain opacity-70" />
        <div className="mb-2 border-t border-[#d8d2c4] w-10" />
      </div>
      <div className="flex flex-col">
        <p className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`}
          style={{ fontWeight: 500 }}>
          Bulk Supply
        </p>
        <div className="mt-2 h-[0.5px] w-[115px] bg-[#d8d2c4]" />
      </div>
    </div>

    {/* Headline — absolute centered */}
    <h2 className={`${cormorant.className} leading-[1.0] text-[#241A12] absolute left-0 right-0 text-center`}>
      <span className="text-[36px] lg:text-[60px] font-semibold">A Trusted Partner </span> <br/>
      <span className="text-[36px] lg:text-[60px] italic font-medium text-[#6E7E45]">for Your Business.</span>
    </h2>

  </div>

  {/* Subtext */}
  <p className={`${montserrat.className} text-[13px] lg:text-[14px] text-[#5f5146] leading-[1.8] pt-24 text-center max-w-lg mx-auto`}
    style={{ fontWeight: 400 }}>
    From our farm to your business — we deliver freshness, quality
    and reliability in every bulk order.
  </p>
</div>

        {/* ── RADIAL SECTION ── */}
        <div
          className="relative w-full"
          style={{ height: "600px" }}
        >
          {/* ── DASHED CIRCLE + DOTS ── */}
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
            {/* Dashed circle border */}
            <div className="w-full h-full rounded-full border-2 border-dashed border-[#C49A2A]/40" />

            {/* Connectors */}
            <svg
  className="absolute"
  style={{
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: `${R * 1.6}px`,
    height: `${R * 1.6}px`,
    zIndex: 2,
    overflow: "visible"   // ← this lets lines extend beyond
  }}
  viewBox={`0 0 ${R * 1.6} ${R * 1.6}`}
>
              {DOT_ANGLES.map((deg, i) => {
                const circleRadius = (R * 1.6) / 2;
                const rad = (deg * Math.PI) / 180;

                const dotX = circleRadius + Math.cos(rad) * circleRadius;
                const dotY = circleRadius - Math.sin(rad) * circleRadius;

                const endX =
                  circleRadius +
                  Math.cos(rad) * (circleRadius + CONNECTOR_LENGTHS[i]);
                const endY =
                  circleRadius -
                  Math.sin(rad) * (circleRadius + CONNECTOR_LENGTHS[i]);

                return (
                  <>
                  <line
                    key={i}
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
                  </>
                );
              })}
            </svg>
            

            {DOT_ANGLES.map((deg, i) => {
              const circleRadius = (R * 1.6) / 2;

              const rad = (deg * Math.PI) / 180;

              const x = circleRadius + Math.cos(rad) * circleRadius ;

              const y = circleRadius - Math.sin(rad) * circleRadius  ;

              return (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-[#C49A2A]"
                  style={{
                    left: `${x-6}px`,
                    top: `${y-6}px`,
                  }}
                />
              );
            })}
          </div>

          {/* ── CENTER ── */}
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
              className={`${cormorant.className} text-[32px] lg:text-[42px] font-semibold text-[#4D5B2A] leading-none`}
            >
              GVR
            </p>
            <p
              className={`${montserrat.className} text-[9px] uppercase tracking-[0.22em] text-[#6E7E45] mb-3`}
              style={{ fontWeight: 600 }}
            >
              Farm Foods
            </p>
            <img
              src="/products/eggbox.png"
              alt="GVR Egg Box"
              className="w-[150px] lg:w-[250px] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.15)]"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>

          {/* ── LEFT ITEMS ── */}
          {/* Retailers — top left */}
          <div
            className="absolute flex items-center gap-3 bg-amber-"
            style={{ top: "6%", left: "15%" }}
          >
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden border-2 border-[#C49A2A]/30 flex-shrink-0 bg-[#edf3de]">
              <img
                src="/products/c6.png"
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
            <div className="flex items-start gap-2">
              <div>
                <p
                  className={`${montserrat.className} text-[11px] uppercase tracking-[0.1em] text-[#241A12]`}
                  style={{ fontWeight: 700 }}
                >
                  Retailers
                </p>
                <p
                  className={`${montserrat.className} text-[10px] text-[#5f5146] leading-[1.5] max-w-[160px]`}
                  style={{ fontWeight: 400 }}
                >
                  Consistent supply of fresh eggs to keep your shelves always
                  stocked.
                </p>
              </div>
            </div>
          </div>

          {/* Hotels — middle left */}
          <div
            className="absolute flex items-center gap-3"
            style={{ top: "48%", left: "7%", transform: "translateY(-50%)" }}
          >
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden border-2 border-[#C49A2A]/30 flex-shrink-0 bg-[#edf3de]">
              <img
                src="/products/c5.png"
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
            <div className="flex items-start gap-2">
              <div>
                <p
                  className={`${montserrat.className} text-[11px] uppercase tracking-[0.1em] text-[#241A12]`}
                  style={{ fontWeight: 700 }}
                >
                  Hotels
                </p>
                <p
                  className={`${montserrat.className} text-[10px] text-[#5f5146] leading-[1.5] max-w-[160px]`}
                  style={{ fontWeight: 400 }}
                >
                  Reliable bulk supply to deliver great experiences every day.
                </p>
              </div>
            </div>
          </div>

          {/* Cafes — bottom left */}
          <div
            className="absolute flex items-center gap-3"
            style={{ bottom: "10%", left: "15%" }}
          >
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden border-2 border-[#C49A2A]/30 flex-shrink-0 bg-[#edf3de]">
              <img
                src="/products/c1.png"
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
            <div className="flex items-start gap-2">
              <div>
                <p
                  className={`${montserrat.className} text-[11px] uppercase tracking-[0.1em] text-[#241A12]`}
                  style={{ fontWeight: 700 }}
                >
                  Cafes
                </p>
                <p
                  className={`${montserrat.className} text-[10px] text-[#5f5146] leading-[1.5] max-w-[160px]`}
                  style={{ fontWeight: 400 }}
                >
                  From breakfast to brunch, we keep your kitchen running.
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT ITEMS — reversed (text left, photo right) ── */}
          {/* Restaurants — top right */}
          <div
            className="absolute flex items-center gap-3 flex-row-reverse"
            style={{ top: "6%", right: "15%" }}
          >
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden border-2 border-[#C49A2A]/30 flex-shrink-0 bg-[#edf3de]">
              <img
                src="/products/c2.png"
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
            <div className="flex items-start gap-2 flex-row-reverse">
              <div className="text-right">
                <p
                  className={`${montserrat.className} text-[11px] uppercase tracking-[0.1em] text-[#241A12]`}
                  style={{ fontWeight: 700 }}
                >
                  Restaurants
                </p>
                <p
                  className={`${montserrat.className} text-[10px] text-[#5f5146] leading-[1.5] max-w-[160px]`}
                  style={{ fontWeight: 400 }}
                >
                  Premium quality eggs for delicious dishes your customers love.
                </p>
              </div>
            </div>
          </div>

          {/* Bakeries — middle right */}
          <div
            className="absolute flex items-center gap-3 flex-row-reverse"
            style={{ top: "48%", right: "7%", transform: "translateY(-50%)" }}
          >
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden border-2 border-[#C49A2A]/30 flex-shrink-0 bg-[#edf3de]">
              <img
                src="/products/c3.png"
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
            <div className="flex items-start gap-2 flex-row-reverse">
              <div className="text-right">
                <p
                  className={`${montserrat.className} text-[11px] uppercase tracking-[0.1em] text-[#241A12]`}
                  style={{ fontWeight: 700 }}
                >
                  Bakeries
                </p>
                <p
                  className={`${montserrat.className} text-[10px] text-[#5f5146] leading-[1.5] max-w-[160px]`}
                  style={{ fontWeight: 400 }}
                >
                  Fresh, high-quality eggs that bring perfection to every bake.
                </p>
              </div>
            </div>
          </div>

          {/* Distributors — bottom right */}
          <div
            className="absolute flex items-center gap-3 flex-row-reverse"
            style={{ bottom: "10%", right: "15%" }}
          >
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden border-2 border-[#C49A2A]/30 flex-shrink-0 bg-[#edf3de]">
              <img
                src="/products/c4.png"
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
            <div className="flex items-start gap-2 flex-row-reverse">
              <div className="text-right">
                <p
                  className={`${montserrat.className} text-[11px] uppercase tracking-[0.1em] text-[#241A12]`}
                  style={{ fontWeight: 700 }}
                >
                  Distributors
                </p>
                <p
                  className={`${montserrat.className} text-[10px] text-[#5f5146] leading-[1.5] max-w-[160px]`}
                  style={{ fontWeight: 400 }}
                >
                  Partner with us for a steady supply you can count on.
                </p>
              </div>
            </div>
          </div>
        </div>

       

        {/* ── BOTTOM CTA BAR ── */}
       <div className="max-w-4xl mx-auto">
  <div className="mt-6 bg-[#3f4a22] rounded-2xl px-10 py-4 flex flex-col lg:flex-row items-center justify-between gap-8">
    
    <div className="flex items-center gap-4 flex-shrink-0">
      <div className="w-12 h-12 rounded-full border border-[#c5db8e]/30 flex items-center justify-center">
        <Phone size={18} className="text-[#c5db8e]" />
      </div>
      <div>
        <p className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#c5db8e] mb-1`} style={{ fontWeight: 600 }}>
          Let's Grow Together
        </p>
        <p className={`${montserrat.className} text-[12px] text-[#f5f0e7]/70 leading-[1.6]`} style={{ fontWeight: 400 }}>
          For bulk orders and partnership inquiries,<br />our team is ready to assist you.
        </p>
      </div>
    </div>

    <div className="hidden lg:block w-px h-12 bg-[#f5f0e7]/10" />

    <a href="mailto:info@gvrfarmfoods.com" className="inline-flex items-stretch rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02]">
      <span className="bg-[#8B6914] px-4 flex items-center justify-center">
        <Mail size={16} className="text-[#f5f0e7]" />
      </span>
      <span className={`${montserrat.className} bg-[#C49A2A] px-7 py-3.5 text-[11px] uppercase tracking-[0.15em] text-[#241A12]`} style={{ fontWeight: 700 }}>
        Enquire Now
      </span>
    </a>

    <div className="hidden lg:block w-px h-12 bg-[#f5f0e7]/10" />

    <div className="flex items-center gap-2">
      <Phone size={14} className="text-[#c5db8e]" />
      <a href="tel:+919448453609" className={`${montserrat.className} text-[13px] text-[#f5f0e7]/80 hover:text-[#c5db8e] transition-colors`} style={{ fontWeight: 500 }}>
        +91 94484 53609
      </a>
    </div>

  </div>
</div>
      </div>
    </section>
  );
}
