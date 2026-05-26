"use client";

import { useEffect, useState } from "react";
import { Raleway } from "next/font/google";

// ─── FONT ────────────────────────────────────────
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

// ─── HERO IMAGE ──────────────────────────────────
const BG_IMAGE = "/images/hero-17.jpeg";

export default function HeroSection() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      aria-label="GVR Fresh Foods – Farm Fresh Eggs Supplier"
      className="relative h-screen w-full overflow-hidden bg-[#f5efe6]"
    >
      {/* Background */}
      <img
        src={BG_IMAGE}
        alt="Farm fresh eggs"
        className="absolute inset-0 h-full w-full object-cover animate-[kenburns_18s_ease-in-out_forwards]"
      />

      
      {/* Content */}
      <div
        className={`relative z-10 flex h-full items-center transition-all duration-700 ease-out ${
          ready
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-16">
          <div className="max-w-lg">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <div className="h-[1px] w-10 bg-[#9C6644]" />

              <p
                className={`${raleway.className} text-[11px] uppercase tracking-[2px] text-[#8B7355]`}
              >
                Farm Fresh • Naturally Sourced • Delivered Daily
              </p>
            </div>

            {/* Heading */}
            <h1
              className={`${raleway.className} leading-[0.95] text-[#3E2F26]`}
            >
              <span
                className="block text-6xl lg:text-7xl"
                style={{
                  fontWeight: 700,
                  letterSpacing: "-2px",
                }}
              >
                Fresh From
              </span>

              <span
                className="mt-1 block text-6xl italic lg:text-7xl"
                style={{
                  fontWeight: 500,
                  color: "#8B5E3C",
                  letterSpacing: "-1.5px",
                }}
              >
                Farm To Family.
              </span>
            </h1>

            {/* Subtext */}
            <p
              className={`${raleway.className} mt-7 max-w-md text-[15px] leading-8 text-[#6B5B4D]`}
              style={{ fontWeight: 500 }}
            >
              Fresh hygienic eggs in multiple variants and quality dry fish
              supplied to homes, retailers, hotels, and wholesale buyers across
              Hosur and nearby regions.
            </p>

            {/* Trust Line */}
            <div className="mt-5 flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-[#B08968]"
                  />
                ))}
              </div>

              <p
                className={`${raleway.className} text-[12px] tracking-wide text-[#8B7355]`}
              >
                Retail & Wholesale • Hygienic Handling • Reliable Supply
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {/* Primary */}
              <a
                href="tel:+919448453609"
                className={`${raleway.className} inline-flex items-center gap-2 rounded-xl bg-[#8B5E3C] px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(139,94,60,0.18)] transition-all duration-300 hover:bg-[#74492b]`}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>

                Call Now
              </a>

              {/* Secondary */}
              <a
                href="https://wa.me/919448453609"
                target="_blank"
                rel="noopener noreferrer"
                className={`${raleway.className} inline-flex items-center gap-2 rounded-xl border border-[#d8c7b6] bg-white/60 px-7 py-4 text-sm font-semibold text-[#5f4a3a] backdrop-blur-sm transition-all duration-300 hover:border-[#B08968] hover:bg-white`}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>

                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes kenburns {
          from {
            transform: scale(1);
          }

          to {
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
}