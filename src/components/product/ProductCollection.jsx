"use client";

import { useState, useRef, useEffect } from "react";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react";
import productsData from "@/data/products.json";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const iconMap = {
  "country-eggs":     "/icons/Farm.svg",
  "brown-eggs":       "/icons/Egg.svg",
  "white-eggs":       "/icons/Egg.svg",
  "duck-eggs":        "/icons/Duck.svg",
  "quail-eggs":       "/icons/Quails.svg",
  "kadaknath-eggs":   "/icons/Kadaknath.svg",
  "premium-dry-fish": "/icons/Fish.svg",
};

const fishProducts = [
  {
    name: "Bombay Duck",
    image: "/products/Bombay-Duck-3.webp",
    slug: "bombay-duck",
    desc: "Traditional dried seafood with rich coastal flavor.",
  },
  {
    name: "Nathli Big Anchovies",
    image: "/products/Nathli-big-Anchovies.webp",
    slug: "nathli-big-anchovies",
    desc: "Premium large anchovies, naturally sun-dried.",
  },
  {
    name: "Nathli Big-cut & Clean",
    image: "/products/nathli-big-clean.webp",
    slug: "nathli-big-clean",
    desc: "Cleaned and ready-to-cook dried anchovies.",
  },
  {
    name: "Nathli Big Spicy",
    image: "/products/nathli-big-spicy.webp",
    slug: "nathli-big-spicy",
    desc: "Flavorful spicy anchovies with authentic taste.",
  },
  {
    name: "Nathli Small",
    image: "/products/nathli-small.webp",
    slug: "nathli-small",
    desc: "Small sun-dried anchovies packed with flavor.",
  },
  {
    name: "Nathli Small Spicy",
    image: "/products/nathli-small-spicy.webp",
    slug: "nathli-small-spicy",
    desc: "Spiced small anchovies for traditional recipes.",
  },
  {
    name: "Prawn Big Cut & Clean",
    image: "/products/prawn-big-clean.webp",
    slug: "prawn-big-clean",
    desc: "Premium cleaned prawns, ready for cooking.",
  },
  {
    name: "Prawn Big Spicy",
    image: "/products/prawn-big-spicy.webp",
    slug: "prawn-big-spicy",
    desc: "Spicy dried prawns with bold coastal flavors.",
  },
  {
    name: "Prawns Big",
    image: "/products/prawns-big.webp",
    slug: "prawns-big",
    desc: "Large premium prawns, naturally preserved.",
  },
  {
    name: "Prawn Small Spicy",
    image: "/products/prawn-small-spicy.webp",
    slug: "prawn-small-spicy",
    desc: "Small spicy prawns with authentic seasoning.",
  },
  {
    name: "Prawns Small",
    image: "/products/prawns-small.webp",
    slug: "prawns-small",
    desc: "Carefully selected small dried prawns.",
  },
  {
    name: "Ribbon Cut & Clean",
    image: "/products/ribbon-clean.webp",
    slug: "ribbon-clean",
    desc: "Neatly cleaned ribbon fish, ready to prepare.",
  },
  {
    name: "Shark Cubes",
    image: "/products/shark-cubes.webp",
    slug: "shark-cubes",
    desc: "Premium shark cubes with traditional taste.",
  },
].map((p) => ({
  ...p,
  icon: "/icons/Fish.svg",
}));

const products = productsData.products.map((p) => ({
  image: p.image,
  icon: iconMap[p.slug] || "/icons/eggnest.png",
  name: p.name,
  desc: p.shortDescription,
  slug: p.slug,
}));

// Inline style — opacity:0 baked into SSR HTML so element is
// invisible from the very first browser paint, before JS loads.
const HIDDEN = { opacity: 0 };

export default function ProductCollection() {
  const [current, setCurrent] = useState(0);
  const [activeTab, setActiveTab] = useState("eggs");
  const scrollRef   = useRef(null);
  const sectionRef  = useRef(null);
  const headingRef  = useRef(null);
  const subtextRef  = useRef(null);
  const carouselRef = useRef(null);
  const dotsRef     = useRef(null);

  const CARD_WIDTH = 200;
const displayedProducts =
  activeTab === "eggs" ? products : fishProducts;

const cloned = [
  ...displayedProducts.slice(-2),
  ...displayedProducts,
  ...displayedProducts.slice(0, 2),
];
  // ── Carousel scroll init ──────────────────────────────
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = CARD_WIDTH * 2;
    }
  }, []);

  useEffect(() => {
  setCurrent(0);

  if (scrollRef.current) {
    scrollRef.current.scrollLeft = CARD_WIDTH * 2;
  }
}, [activeTab]);

  // ── Animations ────────────────────────────────────────
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      [headingRef, subtextRef, carouselRef, dotsRef].forEach((r) => {
        if (r.current) gsap.set(r.current, { opacity: 1, y: 0 });
      });
      return;
    }

    // The animation timeline — reused whether triggered by
    // ScrollTrigger or played immediately on load.
    const playEntrance = () => {
      const tl = gsap.timeline();

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
        );
      }
      if (subtextRef.current) {
        tl.fromTo(
          subtextRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.35"
        );
      }
      if (carouselRef.current) {
        tl.fromTo(
          carouselRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.25"
        );
      }
      if (dotsRef.current) {
        tl.fromTo(
          dotsRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "power3.out" },
          "-=0.3"
        );
      }
    };

    // Wait two animation frames:
    // Frame 1 — React finishes painting, inline style="opacity:0" is live
    // Frame 2 — GSAP ScrollTrigger has measured all positions
    // After both frames, check if section is already in viewport.
    // If yes → play immediately (handles the reload-while-in-view case).
    // If no  → set up ScrollTrigger to play when it enters.
    let st;
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {

        if (!sectionRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const alreadyInView = rect.top < window.innerHeight && rect.bottom > 0;

        if (alreadyInView) {
          // Section is visible right now (reload while scrolled here).
          // Play the entrance immediately — no ScrollTrigger needed.
          playEntrance();
        } else {
          // Section is off-screen. Set up ScrollTrigger to fire when
          // the user scrolls to it.
          st = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top 95%",
            once: true,
            onEnter: playEntrance,
          });
        }
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      if (st) st.kill();
    };
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    if (scrollLeft < CARD_WIDTH) {
      scrollRef.current.scrollLeft =
        CARD_WIDTH * (displayedProducts.length + 2) - clientWidth / 2;
    }
    if (scrollLeft + clientWidth >= scrollWidth - CARD_WIDTH) {
      scrollRef.current.scrollLeft = CARD_WIDTH * 2;
    }
    setCurrent(Math.round(scrollLeft / CARD_WIDTH - 2) % displayedProducts.length);
  };

  const prev = () => {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: -CARD_WIDTH, behavior: "smooth" });
  };
  const next = () => {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: CARD_WIDTH, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="eggs"
      className="relative bg-[#f5f0e7] overflow-hidden py-8 sm:py-8 md:py-10 lg:py-12 xl:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16">

        {/* ── HEADING ──────────────────────────────────────── */}
        <div
          ref={headingRef}
          style={HIDDEN}
          className="max-w-7xl mx-auto px-6 lg:px-0 mb-12 sm:mb-12 md:mb-14 lg:mb-16"
        >
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
              </div>
              <div className="flex flex-col">
                <p
                  className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`}
                  style={{ fontWeight: 500 }}
                >
                  Our Collection
                </p>
                <div className="mt-2 h-[0.5px] w-[115px] bg-[#d8d2c4]" />
              </div>
            </div>
            <h2 className={`${cormorant.className} leading-[1.0] text-[#241A12] text-center`}>
              <span className="text-[32px] sm:text-[36px] md:text-[44px] font-semibold">Premium </span>
              <span className="text-[32px] sm:text-[36px] md:text-[44px] italic font-medium text-[#6E7E45]">Collection</span>
            </h2>
          </div>

          {/* Desktop */}
          <div className="hidden lg:flex items-start gap-8 relative">
            <div className="flex items-center gap-3 flex-shrink-0 pt-2">
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
              </div>
              <div className="flex flex-col">
                <p
                  className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`}
                  style={{ fontWeight: 500 }}
                >
                  Our Collection
                </p>
                <div className="mt-2 h-[0.5px] w-[115px] bg-[#d8d2c4]" />
              </div>
            </div>
            <h2
              className={`${cormorant.className} leading-[1.0] text-[#241A12] flex-1 text-center absolute left-0 right-0`}
            >
              <span className="text-[48px] lg:text-[54px] xl:text-[60px] font-semibold">Premium </span>
              <span className="text-[48px] lg:text-[54px] xl:text-[60px] italic font-medium text-[#6E7E45]">Collection</span>
            </h2>
          </div>

          <p
            ref={subtextRef}
            style={HIDDEN}
            className={`${montserrat.className} text-[13px] sm:text-[13px] md:text-[14px] lg:text-[14px] xl:text-[15px] text-[#5f5146] leading-7 pt-6 sm:pt-6 md:pt-6 lg:pt-8 text-center max-w-lg mx-auto`}
          >
            Farm-fresh eggs and carefully selected products, delivered with
            quality, nutrition, and trust.
          </p>
          <div className="flex justify-center gap-3 mt-8">
  <button
    onClick={() => setActiveTab("eggs")}
    className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
      activeTab === "eggs"
        ? "bg-[#6E7E45] text-white"
        : "bg-transparent border border-[#d8d2c4] text-[#5f5146]"
    }`}
  >
    Fresh Eggs
  </button>

  <button
    onClick={() => setActiveTab("fish")}
    className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
      activeTab === "fish"
        ? "bg-[#6E7E45] text-white"
        : "bg-transparent border border-[#d8d2c4] text-[#5f5146]"
    }`}
  >
    Dry Seafood
  </button>
</div>
        </div>

        {/* ── CAROUSEL ─────────────────────────────────────── */}
        <div
          ref={carouselRef}
          style={HIDDEN}
          className="relative mt-6 sm:mt-8 md:mt-10"
        >
          <button
            onClick={prev}
            className="absolute left-2 sm:left-3 lg:left-8 top-[45%] -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-white border border-[#e8e0d4] shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center justify-center hover:bg-[#f5f0e7] transition-colors"
          >
            <ChevronLeft size={16} className="text-[#5f5146]" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 sm:right-3 lg:right-8 top-[45%] -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-white border border-[#e8e0d4] shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center justify-center hover:bg-[#f5f0e7] transition-colors"
          >
            <ChevronRight size={16} className="text-[#5f5146]" />
          </button>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 lg:w-24 bg-gradient-to-r from-[#f5f0e7] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 lg:w-24 bg-gradient-to-l from-[#f5f0e7] to-transparent z-10 pointer-events-none" />

            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-4 overflow-x-auto pb-6 px-[28%] sm:px-[32%] md:px-[42%] lg:px-[24%] xl:px-[18%]"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {cloned.map((p, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] xl:w-[240px] bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-[#e8e0d4] relative hover:border-[#6E7E45]/40 hover:shadow-[0_4px_20px_rgba(110,126,69,0.10)] transition-all duration-200 cursor-pointer"
                >
                  <div className="h-[160px] sm:h-[180px] md:h-[200px] lg:h-[200px] xl:h-[220px] rounded-t-2xl overflow-hidden bg-[#fdf8f0]">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                    />
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 z-10 top-[136px] sm:top-[156px] md:top-[176px] lg:top-[176px] xl:top-[196px]">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-white border-2 border-[#f5f0e7] shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center">
                      <div
                        className="w-9 h-9 sm:w-9 sm:h-9 md:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-12 xl:h-12 bg-[#717f3d]"
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
                    </div>
                  </div>
                  <div className="pt-7 sm:pt-7 md:pt-8 lg:pt-8 pb-5 sm:pb-5 md:pb-6 lg:pb-6 px-4 sm:px-4 md:px-5 lg:px-5 text-center">
                    <p
                      className={`${montserrat.className} text-[11px] sm:text-[11px] md:text-[12px] lg:text-[12px] uppercase tracking-[0.12em] text-[#241A12]`}
                      style={{ fontWeight: 700 }}
                    >
                      {p.name}
                    </p>
                    <div className="mx-auto mt-2 mb-2 sm:mb-3 h-px w-8 sm:w-10 bg-[#C49A2A]/60" />
                    <p
                      className={`${montserrat.className} text-[10px] sm:text-[10px] md:text-[11px] lg:text-[11px] text-[#5f5146] leading-[1.7]`}
                      style={{ fontWeight: 400 }}
                    >
                          {p.desc}

                 </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── DOTS ─────────────────────────────────────────── */}
        <div
          ref={dotsRef}
          style={HIDDEN}
          className="flex items-center justify-center gap-2 mt-4"
        >
         {displayedProducts.map((_, i) => (
  <button
    key={i}
    className={`rounded-full transition-all duration-200 ${
      i ===
      (current + displayedProducts.length) %
        displayedProducts.length
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