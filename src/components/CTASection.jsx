"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { MessageCircle, Phone } from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const features = [
  { icon: "/icons/leaf.png", line1: "Farm Fresh", line2: "Every Day" },
  { icon: "/icons/Shield.png", line1: "Hygienic", line2: "& Safe" },
  { icon: "/icons/truck.png", line1: "On-Time", line2: "Delivery" },
  { icon: "/icons/hen.png", line1: "Bulk Orders", line2: "Welcome" },
];

const testimonials = [
  {
    quote: "GVR Fresh Foods has been our trusted supplier for over a year. The quality, freshness, and timely delivery are always on point.",
    name: "Ramesh Patel",
    role: "Retail Store Owner",
    icon: "/icons/Shield.png",
  },
  {
    quote: "We rely on GVR for our daily egg supply. Their eggs are always fresh and of the best quality. Highly recommended!",
    name: "Sanjay Mehta",
    role: "Hotel Manager",
    icon: "/icons/Assure.png",
  },
  {
    quote: "Perfect partner for our restaurant business. Consistent quality and excellent service every time.",
    name: "Priya Sharma",
    role: "Restaurant Owner",
    icon: "/icons/hen.png",
  },
];

const stats = [
  { icon: "/icons/Untitled-5.png", num: "500+", label: "Happy Partners" },
  { icon: "/icons/Untitled-4.png", num: "20+", label: "Cities Served" },
  { icon: "/icons/Assure.png", num: "100%", label: "Quality Assured" },
  { icon: "/icons/truck.png", num: "7 Days", label: "Fresh Delivery" },
];

export default function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#f5f0e7]">

      {/* ── TOP CTA BANNER ───────────────────────────────── */}
      <div className="relative overflow-hidden min-h-[420px] lg:min-h-[460px]">
        {/* Background image */}
        <img
          src="/images2/ctahome.webp"
          alt="GVR Fresh Foods"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlay for text readability */}

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-16 py-16 lg:py-20">
          <div className="max-w-[580px]">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#C49A2A]/60" />
              <p className={`${montserrat.className} text-[10px] uppercase tracking-[0.25em] text-[#C49A2A]`}
                style={{ fontWeight: 600 }}>
                Let's Grow Together
              </p>
              <div className="h-px w-8 bg-[#C49A2A]/60" />
            </div>

            {/* Headline */}
            <h2 className={`${cormorant.className} leading-[1.0] text-[#f5f0e7]`}>
              <span className="block text-[48px] lg:text-[72px] font-semibold">
                Ready to Partner
              </span>
              <span className="block text-[48px] lg:text-[72px] font-semibold">
                With{" "}
                <span className="text-[#C49A2A]">GVR?</span>
              </span>
            </h2>

            {/* Subtext */}
            <p className={`${montserrat.className} mt-5 text-[13px] lg:text-[15px] text-[#f5f0e7]/80 leading-[1.8] max-w-[460px]`}
              style={{ fontWeight: 400 }}>
              Whether you need eggs for your home, shop, restaurant,
              hotel, or bulk business – we've got you covered.
            </p>

            {/* Feature pills row */}
            <div className="mt-6 flex items-center gap-0 flex-wrap">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-0">
                  <div className="flex items-center gap-2 px-4 py-1">
                    <div className="w-8 h-8 rounded-full border border-[#f5f0e7]/20 bg-[#f5f0e7]/10 flex items-center justify-center flex-shrink-0">
                      <img src={f.icon} alt="" className="w-4 h-4 object-contain brightness-0 invert opacity-80" />
                    </div>
                    <div>
                      <p className={`${montserrat.className} text-[10px] text-[#f5f0e7] leading-tight`}
                        style={{ fontWeight: 600 }}>
                        {f.line1}
                      </p>
                      <p className={`${montserrat.className} text-[10px] text-[#f5f0e7]/70 leading-tight`}
                        style={{ fontWeight: 400 }}>
                        {f.line2}
                      </p>
                    </div>
                  </div>
                  {i !== features.length - 1 && (
                    <div className="w-px h-6 bg-[#f5f0e7]/20 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex items-center gap-4 flex-wrap">
              {/* WhatsApp — primary */}
              <a
                href="https://wa.me/919448453609"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-stretch rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="bg-[#3f4a22] px-5 flex items-center justify-center">
                  <MessageCircle size={18} className="text-[#f5f0e7]" />
                </span>
                <span className={`${montserrat.className} bg-[#4D5B2A] px-7 py-3.5 text-[12px] uppercase tracking-[0.15em] text-[#f5f0e7]`}
                  style={{ fontWeight: 600 }}>
                  WhatsApp Us
                </span>
              </a>

              {/* OR */}
              <span className={`${montserrat.className} text-[11px] text-[#f5f0e7]/50 uppercase tracking-[0.1em]`}
                style={{ fontWeight: 500 }}>
                or
              </span>

              {/* Enquire — outline */}
              <a
                href="tel:+919448453609"
                className="inline-flex items-stretch rounded-full overflow-hidden  transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="bg-[#C49A2A] px-5 flex items-center justify-center">
                  <Phone size={18} className="text-[#f5f0e7]" />
                </span>
                <span className={`${montserrat.className} bg-[#c7a548] px-7 py-3.5 text-[12px] uppercase tracking-[0.15em] text-[#f5f0e7]`}
                  style={{ fontWeight: 600 }}>
                  Enquire Now
                </span>
              </a>
            </div>
          </div>
        </div>
 
        
      </div>

      {/* Brush edge bottom */}
       

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <div className="relative bg-[#f5f0e7] pt-10 pb-10">
        <div className="mx-auto max-w-5xl px-6 lg:px-16">

          {/* Section label */}
          <div className="text-center mb-2">
            <div className="flex items-center justify-center gap-3 ">
              <div className="h-px w-10 bg-[#6E7E45]/30" />
              <p className={`${montserrat.className} text-[18px] uppercase tracking-[0.25em] text-[#6E7E45]`}
                style={{ fontWeight: 600 }}>
                What Our Partners Say
              </p>
              <div className="h-px w-10 bg-[#6E7E45]/30" />
            </div>
            <div className="flex justify-center">
              <img src="/icons/Untitle1.png" alt="" className="w-5 h-5 object-contain opacity-30" />
            </div>
          </div>

          {/* 3 testimonial cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 ">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#e8e0d4] p-6 flex flex-col justify-between">
                <div>
                  {/* Quote mark + stars */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`${cormorant.className} text-[40px] text-[#C49A2A] leading-none`}
                      style={{ fontWeight: 600, lineHeight: 0.8 }}>
                      "
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} className="text-[#C49A2A] text-[14px]">★</span>
                      ))}
                    </div>
                  </div>
                  {/* Quote text */}
                  <p className={`${montserrat.className} text-[12px] lg:text-[13px] text-[#5f5146] leading-[1.8]`}
                    style={{ fontWeight: 400 }}>
                    {t.quote}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-[#6E7E45]/10 my-4" />

                {/* Person */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#3f4a22] border border-[#6E7E45]/20 flex items-center justify-center flex-shrink-0">
                    <img src={t.icon} alt="" className="w-6 h-6 object-contain brightness-0 invert opacity-80" />
                  </div>
                  <div>
                    <p className={`${montserrat.className} text-[12px] text-[#241A12]`}
                      style={{ fontWeight: 700 }}>
                      {t.name}
                    </p>
                    <p className={`${montserrat.className} text-[11px] text-[#5f5146]`}
                      style={{ fontWeight: 400 }}>
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── STATS ROW ── */}
          <div className="mt-8 bg-[#ebe3d3] ml-14 border border-[#e8e0d4] rounded-2xl max-w-3xl px-4 py-2 ">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 bg-amber">
              {stats.map((s, i) => (
                <div key={i} className="flex items-center gap-0">
                  <div className="flex-1 flex items-center gap-3 px-4 py-2 justify-center">
                    <img src={s.icon} alt="" className="w-10 h-10 object-contain opacity-60 flex-shrink-0" />
                    <div>
                      <p className={`${montserrat.className} text-[25px] font-semibold text-[#4D5B2A] leading-none`}>
                        {s.num}
                      </p>
                      <p className={`${montserrat.className} text-[10px] text-[#5f5146] mt-0.5`}
                        style={{ fontWeight: 500 }}>
                        {s.label}
                      </p>
                    </div>
                  </div>
                  {i !== stats.length - 1 && (
                    <div className="w-px h-10 bg-[#6E7E45]/15 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}