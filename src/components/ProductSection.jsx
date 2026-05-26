"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const eggVarieties = [
  {
    image: "/images/Country.png",
    icon: "/icons/farm.png",
    name: "Country Eggs",
    desc: "Natural taste, rich nutrition.",
  },
  {
    image: "/images/Brown.png",
    icon: "/icons/eggnest.png",
    name: "Brown Eggs",
    desc: "Nutrient rich and wholesome.",
  },
  {
    image: "/images/Whiteegg.png",
    icon: "/icons/eggnest.png",
    name: "White Eggs",
    desc: "Pure, fresh and protein packed.",
  },
  {
    image: "/images/Duck.png",
    icon: "/icons/eggnest.png",
    name: "Duck Eggs",
    desc: "Larger, richer and delicious.",
  },
  {
    image: "/images/Jumbo.png",
    icon: "/icons/sun.png",
    name: "Jumbo Eggs",
    desc: "Extra large size, extra goodness.",
  },
  {
    image: "/images/Quail.png",
    icon: "/icons/eggnest.png",
    name: "Quail Eggs",
    desc: "Tiny in size, big on nutrition.",
  },
  {
    image: "/images/kadaknath2.png",
    icon: "/icons/eggnest.png",
    name: "Kadaknath Eggs",
    desc: "Premium quality, naturally unique.",
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#f5f0e7] py-20 lg:py-16"
    >
      {/* Decorative leaves top left */}
      <div className="pointer-events-none absolute top-0 left-0 w-36 lg:w-52 opacity-40">
        <img src="/icons/leaf-decor.png" alt="" className="w-full" />
      </div>
      {/* Decorative leaves top right */}
      <div className="pointer-events-none absolute  top-0 right-0 w-36 lg:w-52 opacity-40">
        <img
          src="/leaf-decoration.png"
          alt=""
          className="w-full scale-x-[-1]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        {/* ── SECTION HEADING ─────────────────────────────── */}
        <div className="mb-8">
          {/* Row — OUR PRODUCTS left, headline right, same top level */}
          <div className="flex items-start gap-8 relative ">
            {/* Left — Eyebrow */}
            <div className="flex items-center gap-3 flex-shrink-0 pt-2">
              <div className="flex flex-col items-center ">
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
                  Our Products
                </p>
                <div className="mt-2 h-[0.5px] w-[105px] bg-[#d8d2c4]" />
              </div>
            </div>

            {/* Right — Headline */}
            <h2
              className={`${cormorant.className} leading-[1.0] text-[#241A12] flex-1 text-center whitespace-nowrap absolute left-0 right-0`}
            >
              <span className="text-[48px] lg:text-[80px] font-semibold">
                What We{" "}
              </span>
              <span className="text-[48px] lg:text-[80px] italic font-medium text-[#6E7E45]">
                Offer.
              </span>
            </h2>
          </div>

          {/* Subtagline */}
          <p
            className={`${montserrat.className} text-[14px] lg:text-[15px] text-[#5f5146] leading-7 pt-12 text-center max-w-lg mx-auto`}
            style={{ fontWeight: 400 }}
          >
            Wholesome products from our farm to your table, delivered with
            trust, hygiene and consistent quality.
          </p>
        </div>

        {/* ── EGGS SECTION ─────────────────────────────────── */}
        <div className="mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-12 items-start">
            {/* Left — Eggs label + desc + link */}
            <div className="lg:pt-4">
              <p
                className={`${montserrat.className} text-[11px] uppercase tracking-[0.2em] text-[#6E7E45] mb-1`}
                style={{ fontWeight: 600 }}
              >
                Farm Fresh
              </p>
              <h3
                className={`${cormorant.className} text-[56px] lg:text-[72px] font-semibold text-[#241A12] leading-none tracking-[-1px]`}
              >
                EGGS
              </h3>
              <div className="h-[2px] w-8 bg-[#6E7E45] mt-2 mb-4" />
              <p
                className={`${montserrat.className} text-[14px] lg:text-[13px] text-[#5f5146] leading-[1.8]`}
                style={{ fontWeight: 400 }}
              >
                Seven varieties of fresh eggs sourced from trusted farms, packed
                with nutrition and delivered with care.
              </p>
              <Link
                href="/products#eggs"
                className={`${montserrat.className} mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-[#4D5B2A] border-b border-[#4D5B2A]/30 pb-0.5 hover:border-[#4D5B2A] transition-all duration-200`}
                style={{ fontWeight: 600 }}
              >
                Explore Egg Products
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Right — 7 egg varieties horizontal */}
            <div className="overflow-x-auto pb-2 -mx-2 px-2">
              <div className="flex min-w-max lg:min-w-0 lg:grid lg:grid-cols-7">
                {eggVarieties.map((egg, i) => (
                  <div key={i} className="flex items-start">
                    {/* Egg item */}
                    <div className="flex flex-col items-center gap-2 w-[120px] lg:w-auto px-3">
                      {/* Egg image */}
                      {/* Egg image */}
                      <div className="mt-8 w-[110px] h-[110px] lg:w-full lg:h-[110px] rounded-xl overflow-visible flex-shrink-0 relative">
                        <img
                          src={egg.image}
                          alt={egg.name}
                          className="w-full h-full object-contain scale-[1.2]"
                        />
                        {/* Contact shadow — ellipse blur underneath */}
                        <div className="absolute bottom-[16px] left-1/2 -translate-x-1/2 w-[60%] h-[8px] bg-black/20 rounded-full blur-[6px]" />
                      </div>
                      {/* Icon */}
                      <div className="w-10 h-10 rounded-full border border-[#6E7E45]/25 bg-transparent flex items-center justify-center">
                        <img
                          src={egg.icon}
                          alt=""
                          className="w-9 h-9 object-cover opacity-60"
                        />
                      </div>
                      {/* Name + desc */}
                      <div className="text-center">
                        <p
                          className={`${montserrat.className} text-[11px] text-[#241A12] leading-tight`}
                          style={{ fontWeight: 600 }}
                        >
                          {egg.name}
                        </p>
                        <p
                          className={`${montserrat.className} text-[10px] text-[#5f5146] leading-tight mt-0.5`}
                          style={{ fontWeight: 400 }}
                        >
                          {egg.desc}
                        </p>
                      </div>
                    </div>

                    {/* Divider — hidden after last */}
                    {i !== eggVarieties.length - 1 && (
                      <div className="w-px h-24 bg-[#6E7E45]/20 self-center flex-shrink-0 mt-36" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── DRY FISH BANNER ──────────────────────────────── */}
        <div className="relative rounded-md overflow-hidden min-h-[260px] lg:min-h-[200px]">
          {/* Background image */}
          <img
            src="/images/produc-fish2.png"
            alt="Premium Dry Fish"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Dark green overlay — stronger so text is readable */}

          {/* Content */}
          <div className="relative z-10 flex items-center h-full min-h-[260px] lg:min-h-[200px] px-8 lg:px-14 py-8">
            <div className="max-w-sm">
              <p
                className={`${montserrat.className} text-[11px] uppercase tracking-[0.2em] text-[#c5db8e] mb-1`}
                style={{ fontWeight: 600 }}
              >
                Premium
              </p>
              <div className="flex items-end gap-3 mb-2 ">
                <h3
                  className={`${cormorant.className} text-[52px] lg:text-[72px] font-semibold text-[#f5f0e7] leading-none tracking-[-1px]`}
                >
                  DRY FISH
                </h3>
                <img
                  src="/images/waves.png"
                  alt=""
                  className="ml-2 mb-4  h-5 w-auto scale-[1.5] object-contain opacity-80"
                />
              </div>
              <p
                className={`${montserrat.className} text-[14px] lg:text-[13px] text-[#f5f0e7]/80 leading-[1.8] mb-7`}
                style={{ fontWeight: 400 }}
              >
                Carefully selected and naturally dried to preserve authentic
                taste, nutrition and freshness.
              </p>
              <Link
                href="/products#fish"
                className={`${montserrat.className} inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-[#f5f0e7] border-b border-[#f5f0e7]/40 pb-0.5 hover:border-[#f5f0e7] transition-all duration-200`}
                style={{ fontWeight: 600 }}
              >
                Explore Dry Fish Products
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Badge — right side */}
            <div className="absolute right-8 lg:right-14 bottom-8 lg:bottom-auto lg:top-3/4 rotate-[15deg] lg:-translate-y-1/2">
              <img
                src="/images/dryfishbadge2.png"
                alt="Naturally Dried Premium Quality"
                className="w-[100px] h-[100px] lg:w-[160px] lg:h-[160px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* ── BOTTOM TAGLINE ───────────────────────────────── */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <p
            className={`${cormorant.className} text-[18px] lg:text-[22px] text-[#5f5146] text-center`}
            style={{ fontWeight: 500 }}
          >
            Good products.{" "}
            <span className="italic text-[#6E7E45]">Trusted</span> by families.
            Delivered with <span className="italic text-[#6E7E45]">care.</span>
          </p>
        </div>
      </div>
      {/* ── PAINT STROKE DIVIDER ───────────────────────── */}
      {/* <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[105%] h-[100px] z-20 pointer-events-none scale-y-[-1]">
        <div
          className="w-full h-full bg-[#d9c6a1]"
          style={{
            WebkitMaskImage: "url(/svgs/ps.svg)",
            maskImage: "url(/svgs/ps.svg)",
            WebkitMaskSize: "100% auto",
            maskSize: "100% auto",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        />
      </div> */}
    </section>
  );
}
