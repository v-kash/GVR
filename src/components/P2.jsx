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

const eggFeatures = [
  {
    icon: "/icons/leaf.png",
    title: "7 Varieties",
    desc: "Country, Brown, White, Duck, Jumbo, Quail & Kadaknath Eggs",
  },
  {
    icon: "/icons/hen.png",
    title: "Farm Fresh",
    desc: "Sourced from trusted farms with natural care.",
  },
  {
    icon: "/icons/heart.png",
    title: "Protein Rich",
    desc: "High in quality protein for a healthy lifestyle.",
  },
  {
    icon: "/icons/truck.png",
    title: "Wholesale & Retail",
    desc: "Available for homes, retailers, hotels & bulk buyers.",
  },
];

const fishFeatures = [
  {
    icon: "/icons/leaf.png",
    title: "Naturally Dried",
    desc: "Sun-dried to lock in flavor and nutrition.",
  },
  {
    icon: "/icons/sprout.png",
    title: "Quality Packed",
    desc: "Hygienically packed to ensure best quality.",
  },
  {
    icon: "/icons/heart.png",
    title: "Rich Flavor",
    desc: "Authentic taste from the finest selection.",
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#f5f0e7] py-20 lg:py-28"
    >
      {/* Decorative leaves */}
      <div className="pointer-events-none absolute top-0 right-0 w-36 lg:w-52 opacity-30">
        <img src="/icons/leaf-decor.png" alt="" className="w-full" />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 w-32 lg:w-44 opacity-20">
        <img src="/icons/leaf-decor.png" alt="" className="w-full scale-x-[-1]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-16">

        {/* ── SECTION HEADING ─────────────────────────────── */}
        <div className="text-center mb-12">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#6E7E45]/50" />
            <img src="/icons/arrow-right.png" alt="" className="w-3 h-3 object-contain opacity-50"
              onError={(e) => e.target.style.display = 'none'} />
            <p className={`${montserrat.className} text-[10px] uppercase tracking-[0.25em] text-[#6E7E45]`}
              style={{ fontWeight: 600 }}>
              Our Products
            </p>
            <img src="/icons/arrow-left.png" alt="" className="w-3 h-3 object-contain opacity-50"
              onError={(e) => e.target.style.display = 'none'} />
            <div className="h-px w-8 bg-[#6E7E45]/50" />
          </div>

          {/* Headline */}
          <h2 className={`${cormorant.className} text-[48px] lg:text-[72px] font-semibold text-[#241A12] leading-[1.05]`}>
            What{" "}
            <em className="text-[#6E7E45] not-italic" style={{ fontStyle: "italic", fontWeight: 500 }}>
              We
            </em>{" "}
            Offer
          </h2>

          {/* Decorative leaf under headline */}
          <div className="flex justify-center my-3">
            <img src="/icons/leaf.png" alt="" className="w-5 h-5 object-contain opacity-40" />
          </div>
          <div className="mx-auto h-px max-w-[200px] bg-[#6E7E45]/20 mb-5" />

          {/* Subtext */}
          <p className={`${montserrat.className} text-[13px] lg:text-[15px] text-[#5f5146] leading-7 max-w-xl mx-auto`}
            style={{ fontWeight: 400 }}>
            From farm fresh eggs to premium quality dry fish, we bring you wholesome products
            with trust, hygiene and consistent quality.
          </p>
        </div>

        {/* ── PRODUCT CARDS ────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ── Card 1: Farm Fresh Eggs ── */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#e8e0d4] shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
            {/* Image */}
            <div className="relative h-[240px] lg:h-[300px] overflow-hidden">
              <img
                src="/images/products-eggs.jpg"
                alt="Farm Fresh Eggs"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8">
              {/* Title row */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-[#edf3de] border border-[#c5db8e] flex items-center justify-center flex-shrink-0">
                  <img src="/icons/egg.png" alt="" className="w-7 h-7 object-contain" />
                </div>
                <div>
                  <h3 className={`${cormorant.className} text-[28px] lg:text-[32px] font-semibold text-[#241A12] leading-tight`}>
                    Farm Fresh Eggs
                  </h3>
                  <p className={`${montserrat.className} text-[12px] text-[#5f5146] leading-relaxed mt-1`}
                    style={{ fontWeight: 400 }}>
                    A wide range of fresh, nutritious eggs sourced from trusted farms.
                    Carefully handled for purity, freshness and wholesome nutrition.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#6E7E45]/10 mb-5" />

              {/* Features grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {eggFeatures.map((f, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1.5">
                      <img src={f.icon} alt="" className="w-4 h-4 object-contain opacity-70" />
                      <p className={`${montserrat.className} text-[11px] text-[#241A12]`}
                        style={{ fontWeight: 600 }}>
                        {f.title}
                      </p>
                    </div>
                    <p className={`${montserrat.className} text-[10px] text-[#5f5146] leading-[1.5]`}
                      style={{ fontWeight: 400 }}>
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/products#eggs"
                className="inline-flex items-stretch rounded-lg overflow-hidden w-full transition-all duration-300 hover:scale-[1.01] group"
              >
                <span className="bg-[#3f4a22] px-5 flex items-center justify-center">
                  <ArrowRight size={16} className="text-[#f5f0e7]" />
                </span>
                <span className={`${montserrat.className} flex-1 bg-[#4D5B2A] px-6 py-3.5 text-center text-[11px] uppercase tracking-[0.15em] text-[#f5f0e7]`}
                  style={{ fontWeight: 600 }}>
                  View All Eggs
                </span>
              </Link>
            </div>
          </div>

          {/* ── Card 2: Premium Dry Fish ── */}
          <div className="bg-white rounded-2xl overflow-hidden border border-[#e8e0d4] shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
            {/* Image */}
            <div className="relative h-[240px] lg:h-[300px] overflow-hidden">
              <img
                src="/images/products-fish.jpg"
                alt="Premium Dry Fish"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              {/* Badge */}
              <div className="absolute top-4 right-4 w-[90px] h-[90px] rounded-full
                bg-[#4D5B2A] border-[2px] border-dashed border-[#c5db8e]
                flex flex-col items-center justify-center text-center p-2">
                <img src="/icons/fish.png" alt="" className="w-5 h-5 object-contain mb-0.5 brightness-0 invert opacity-80"
                  onError={(e) => e.target.style.display = 'none'} />
                <p className={`${montserrat.className} text-[7px] uppercase tracking-[0.08em] text-[#f5f0e7] leading-tight`}
                  style={{ fontWeight: 600 }}>
                  Naturally<br />Dried<br />Premium<br />Quality
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8">
              {/* Title row */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-[#edf3de] border border-[#c5db8e] flex items-center justify-center flex-shrink-0">
                  <img src="/icons/fish.png" alt="" className="w-7 h-7 object-contain"
                    onError={(e) => { e.target.src = '/icons/sprout.png' }} />
                </div>
                <div>
                  <h3 className={`${cormorant.className} text-[28px] lg:text-[32px] font-semibold text-[#241A12] leading-tight`}>
                    Premium Dry Fish
                  </h3>
                  <p className={`${montserrat.className} text-[12px] text-[#5f5146] leading-relaxed mt-1`}
                    style={{ fontWeight: 400 }}>
                    Carefully selected and naturally dried to preserve authentic taste,
                    nutrition and freshness.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#6E7E45]/10 mb-5" />

              {/* Features grid — 3 cols for fish */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {fishFeatures.map((f, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1.5">
                      <img src={f.icon} alt="" className="w-4 h-4 object-contain opacity-70" />
                      <p className={`${montserrat.className} text-[11px] text-[#241A12]`}
                        style={{ fontWeight: 600 }}>
                        {f.title}
                      </p>
                    </div>
                    <p className={`${montserrat.className} text-[10px] text-[#5f5146] leading-[1.5]`}
                      style={{ fontWeight: 400 }}>
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/products#fish"
                className="inline-flex items-stretch rounded-lg overflow-hidden w-full transition-all duration-300 hover:scale-[1.01] group"
              >
                <span className="bg-[#3f4a22] px-5 flex items-center justify-center">
                  <ArrowRight size={16} className="text-[#f5f0e7]" />
                </span>
                <span className={`${montserrat.className} flex-1 bg-[#4D5B2A] px-6 py-3.5 text-center text-[11px] uppercase tracking-[0.15em] text-[#f5f0e7]`}
                  style={{ fontWeight: 600 }}>
                  Explore Dry Fish
                </span>
              </Link>
            </div>
          </div>

        </div>

        {/* ── BOTTOM TAGLINE ───────────────────────────────── */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <img src="/icons/leaf.png" alt="" className="w-5 h-5 object-contain opacity-40 scale-x-[-1]" />
          <p className={`${cormorant.className} text-[18px] lg:text-[22px] italic text-[#5f5146] text-center`}
            style={{ fontWeight: 500 }}>
            Quality you can trust. Freshness you can taste.
          </p>
          <img src="/icons/leaf.png" alt="" className="w-5 h-5 object-contain opacity-40" />
        </div>

      </div>
    </section>
  );
}