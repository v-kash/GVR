"use client";

import { useState, useRef , useEffect} from "react";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const products = [
  {
    image: "/products/Country.png",
    icon: "/icons/hen.png",
    name: "Country Eggs",
    desc: "Farm fresh eggs from healthy hens, rich in taste and nutrition.",
  },
  {
    image: "/products/Brown.png",
    icon: "/icons/eggnest.png",
    name: "Brown Eggs",
    desc: "Naturally brown, high in protein and full of essential nutrients.",
  },
  {
    image: "/products/Whiteegg.png",
    icon: "/icons/eggnest.png",
    name: "White Eggs",
    desc: "Clean, classic and fresh eggs for your daily nutrition.",
  },
  {
    image: "/products/Duck.png",
    icon: "/icons/eggnest.png",
    name: "Duck Eggs",
    desc: "Larger in size with rich taste and excellent nutritional value.",
  },
  {
    image: "/products/Quail.png",
    icon: "/icons/eggnest.png",
    name: "Quail Eggs",
    desc: "Tiny but powerful, packed with nutrients and perfect for a healthy diet.",
  },
  {
    image: "/products/Kadaknath.png",
    icon: "/icons/hen.png",
    name: "Kadaknath Eggs",
    desc: "Premium black eggs known for superior nutrition and immunity boosting.",
  },
  {
    image: "/products/fish.png",
    icon: "/icons/sprout.png",
    name: "Premium Dry Fish",
    desc: "Sun dried to perfection, naturally preserved for authentic taste and long shelf life.",
  },
];

const features = [
  { icon: "/icons/farm.png", title: "Farm Fresh", desc: "Sourced directly from trusted farms for maximum freshness." },
  { icon: "/icons/Shield.png", title: "Quality Assured", desc: "Strict quality checks to ensure purity and safety." },
  { icon: "/icons/leaf.png", title: "Natural & Nutritious", desc: "Rich in essential nutrients for a healthy lifestyle." },
  { icon: "/icons/truck.png", title: "Delivered with Care", desc: "Packed with care and delivered to your doorstep." },
];

export default function ProductCollection() {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);
  const CARD_WIDTH = 256; // w-[240px] + gap-4 = ~256px
  const VISIBLE = 5; // cards visible

  // Infinite: clone first and last few cards
  const cloned = [...products.slice(-2), ...products, ...products.slice(0, 2)];

  useEffect(() => {
    // Start at first real card (after 2 clones)
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = CARD_WIDTH * 2;
    }
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    // Jump to real content when hitting cloned edges
    if (scrollLeft < CARD_WIDTH) {
      scrollRef.current.scrollLeft = CARD_WIDTH * (products.length + 2) - clientWidth / 2;
    }
    if (scrollLeft + clientWidth >= scrollWidth - CARD_WIDTH) {
      scrollRef.current.scrollLeft = CARD_WIDTH * 2;
    }
    setCurrent(Math.round((scrollLeft / CARD_WIDTH) - 2) % products.length);
  };

  const prev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -CARD_WIDTH, behavior: "smooth" });
    }
  };

  const next = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: CARD_WIDTH, behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-[#f5f0e7] overflow-hidden py-20 lg:py-24">

      {/* Decorative leaf — top right */}
      <div className="pointer-events-none absolute top-0 right-0 w-32 lg:w-44 opacity-20">
        <img src="/leaf-decoration.png" alt="" className="w-full scale-x-[-1]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-16">

       {/* ── HEADING ── */}
<div className="max-w-7xl mx-auto px-6 lg:px-16 mb-16">
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
          className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#C49A2A]`}
          style={{ fontWeight: 500 }}
        >
          Our Collection
        </p>

        <div className="mt-2 h-[0.5px] w-[115px] bg-[#d8d2c4]" />
      </div>
    </div>

    {/* Main Heading */}
    <h2
      className={`${cormorant.className} leading-[1.0] text-[#241A12] flex-1 text-center absolute left-0 right-0`}
    >
      <span className="text-[48px] lg:text-[60px] font-semibold">
        Premium
      </span>{" "}
      <span className="text-[48px] lg:text-[60px] italic font-medium text-[#C49A2A]">
        Collection
      </span>
    </h2>
  </div>

  {/* Subtext */}
  <p
    className={`${montserrat.className} text-[14px] lg:text-[15px] text-[#5f5146] leading-7 pt-8 text-center max-w-lg mx-auto`}
  >
    Farm-fresh eggs and carefully selected products,
    delivered with quality, nutrition, and trust.
  </p>
</div>

        {/* ── CAROUSEL ── */}
        <div className="relative mt-10">

        {/* Left arrow */}
        <button onClick={prev}
          className="absolute left-4 lg:left-8 top-[45%] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-[#e8e0d4] shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center justify-center hover:bg-[#f5f0e7] transition-colors">
          <ChevronLeft size={18} className="text-[#5f5146]" />
        </button>

        {/* Right arrow */}
        <button onClick={next}
          className="absolute right-4 lg:right-8 top-[45%] -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-[#e8e0d4] shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center justify-center hover:bg-[#f5f0e7] transition-colors">
          <ChevronRight size={18} className="text-[#5f5146]" />
        </button>

        {/* Scroll container — full width with side fades */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f5f0e7] to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f5f0e7] to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto pt-8 pb-6 px-[18%]"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {cloned.map((p, i) => (
              <div key={i}
                className="flex-shrink-0 w-[220px] lg:w-[240px] bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-[#e8e0d4] relative">
                {/* Image */}
                <div className="h-[200px] lg:h-[220px] rounded-t-2xl overflow-hidden bg-[#fdf8f0]">
                  <img src={p.image} alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.04]" />
                </div>

                {/* Icon circle */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10" style={{ top: "196px" }}>
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-[#f5f0e7] shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center">
                    <img src={p.icon} alt="" className="w-6 h-6 object-contain opacity-70" />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-8 pb-6 px-5 text-center">
                  <p className={`${montserrat.className} text-[12px] uppercase tracking-[0.12em] text-[#241A12]`}
                    style={{ fontWeight: 700 }}>
                    {p.name}
                  </p>
                  <div className="mx-auto mt-2 mb-3 h-px w-10 bg-[#C49A2A]/60" />
                  <p className={`${montserrat.className} text-[11px] text-[#5f5146] leading-[1.7]`}
                    style={{ fontWeight: 400 }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {products.map((_, i) => (
          <button key={i}
            className={`rounded-full transition-all duration-200 ${
              i === (current + products.length) % products.length
                ? "w-4 h-2.5 bg-[#C49A2A]"
                : "w-2.5 h-2.5 bg-[#C49A2A]/25"
            }`}
          />
        ))}
      </div>


        
      </div>
    </section>
  );
}