



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

export default function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-[#f5f0e7] min-h-[60vh] lg:min-h-[55vh] ">
<div className="absolute z-0">
        <img
          src="/products/texture.png"
          alt="GVR Products"
          className="h-[90%] w-auto object-contain"
        />
        </div>
      {/* Product Image */}
      <div className="absolute inset-y-0 right-24 w-[58%] lg:w-[70%] flex items-center justify-end  ">
        <img
          src="/products/producthero2.png"
          alt="GVR Products"
          className="h-[90%] w-auto object-cover scale-[1.3]"
        />
      </div>

      

      {/* Soft fade between content and image */}

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

            <ChevronRight
              size={13}
              className="text-[#5f5146]/50"
            />

            <span
              className={`${montserrat.className} text-[11px] uppercase tracking-[0.15em] text-[#5f5146]/60`}
              style={{ fontWeight: 400 }}
            >
              Products
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`${cormorant.className} text-[72px] lg:text-[96px] font-semibold text-[#241A12] leading-[0.95]`}
          >
            Our
            Products
          </h1>

          {/* Accent Line */}
          <div className="mt-5 mb-6 h-[2px] w-10 bg-[#C49A2A]" />

          {/* Description */}
          <p
            className={`${montserrat.className} text-[14px] lg:text-[15px] text-[#5f5146] leading-[1.8]`}
            style={{ fontWeight: 400 }}
          >
            Explore our collection of farm-fresh eggs
            and premium dry fish, sourced with care,
            quality checked, and delivered with trust.
          </p>

        </div>
      </div>
    </section>
  );
}