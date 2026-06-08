"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#f5f0e7] min-h-[55vh] flex items-center">
      {/* Background image — right side bleeds in */}
      <img
        src="/products/h2.png"
        alt="Farm fresh eggs"
        className="absolute right-0 top-0 h-full w-[100%] md:w-[80%] lg:w-[75%] xl:w-[60%] object-cover object-left"
      />

      {/* Gradient fade — left edge of image blends into cream */}
      <div
        className="absolute inset-y-0 left-0 z-10
    w-[30%] md:w-[40%] lg:w-[45%] xl:w-[60%]"
        style={{
          background:
            "linear-gradient(to right, #f5f0e7 70%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-16 py-20">
        <div className="max-w-[520px]">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link
              href="/"
              className={`${montserrat.className} text-[11px] uppercase tracking-[0.15em] text-[#4D5B2A]`}
              style={{ fontWeight: 700 }}
            >
              Home
            </Link>
            <ChevronRight size={13} className="text-[#5f5146]/50" />
            <span
              className={`${montserrat.className} text-[11px] uppercase tracking-[0.15em] text-[#5f5146]/60`}
              style={{ fontWeight: 400 }}
            >
              Our Products
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`${cormorant.className} text-[48px] md:text-[58px] lg:text-[72px] xl:text-[96px] font-semibold text-[#241A12] leading-[0.95]`}
          >
            Our Products{" "}
          </h1>

          {/* Gold accent line */}
          <div className="mt-5 mb-6 h-[2px] w-10 bg-[#C49A2A]" />

          {/* Subtext */}
          <p
            className={`${montserrat.className} md:text-[13px] lg:text-[14px] xl:text-[15px] text-[#5f5146] leading-[1.8]`}
            style={{ fontWeight: 400 }}
          >
            Explore our collection of farm-fresh eggs <br/>
            and premium dry fish, sourced with care, <br/>
            quality checked, and delivered with trust.
          </p>
        </div>
      </div>
    </section>
  );
}
