"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { MessageCircle, Phone } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

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
  { icon: "/icons/Leaf.svg", line1: "Farm Fresh", line2: "Every Day" },
  { icon: "/icons/Shield.svg", line1: "Hygienic", line2: "& Safe" },
  { icon: "/icons/Truck.svg", line1: "On-Time", line2: "Delivery" },
  { icon: "/icons/Hen.svg", line1: "Bulk Orders", line2: "Welcome" },
];

const testimonials = [
  {
    quote:
      "GVR Fresh Foods has been our trusted supplier for over a year. The quality, freshness, and timely delivery are always on point.",
    name: "Ramesh Patel",
    role: "Retail Store Owner",
    icon: "/icons/Retail.svg",
  },
  {
    quote:
      "We rely on GVR for our daily egg supply. Their eggs are always fresh and of the best quality. Highly recommended!",
    name: "Sanjay Mehta",
    role: "Hotel Manager",
    icon: "/icons/Hotel.svg",
  },
  {
    quote:
      "Perfect partner for our restaurant business. Consistent quality and excellent service every time.",
    name: "Priya Sharma",
    role: "Restaurant Owner",
    icon: "/icons/Reastaurant.svg",
  },
];

const stats = [
  {
    icon: "/icons/Person.svg",
    value: 50,
    suffix: "+",
    display: "50+",
    label: "Happy Partners",
  },
  {
    icon: "/icons/Location.svg",
    value: 78,
    suffix: "+",
    display: "78+",
    label: "Cities Served",
  },
  {
    icon: "/icons/Assure.svg",
    value: 100,
    suffix: "%",
    display: "100%",
    label: "Quality Assured",
  },
  {
    icon: "/icons/Truck.svg",
    value: 7,
    suffix: " Days",
    display: "7 Days",
    label: "Fresh Delivery",
  },
];

export default function CTASection() {
  const sectionRef = useRef(null);
  const statsRef = useRef(null); 
  const hoverIn = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.03,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const hoverOut = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.25,
      ease: "power2.out",
    });
  };


  useGSAP(
  () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {

      gsap.fromTo(
        "[data-hero-image]",
        {
          opacity: 0,
          scale: 1.05,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from("[data-testimonial-heading]", {
  opacity: 0,
  y: 24,
  duration: 0.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "[data-testimonial-heading]",
    start: "top 80%",
    once: true,
  },
});

gsap.to("[data-float-leaf]", {
  y: -16,
  duration: 3.8,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
});

gsap.from("[data-testimonial-card]", {
  opacity: 0,
  y: 28,
  scale: 0.97,
  duration: 0.75,
  stagger: 0.1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "[data-testimonial-heading]",
    start: "top 80%",
    once: true,
  },
});

gsap.from("[data-avatar]", {
  opacity: 0,
  scale: 0.88,
  stagger: 0.1,
  duration: 0.65,
  ease: "power3.out",

  scrollTrigger: {
    trigger: "[data-testimonial-heading]",
    start: "top 80%",
    once: true,
  },
});

gsap.from("[data-stat]", {
  opacity: 0,
  y: 28,
  scale: 0.96,
  duration: 0.75,
  stagger: 0.1,
  ease: "power3.out",

  scrollTrigger: {
    trigger: statsRef.current,
    start: "top 80%",
    once: true,
  },
});

gsap.from("[data-stat-icon]", {
  opacity: 0,
  scale: 0.88,
  duration: 0.65,
  stagger: 0.1,
  ease: "power3.out",

  scrollTrigger: {
    trigger: statsRef.current,
    start: "top 80%",
    once: true,
  },
});
ScrollTrigger.create({
  trigger: statsRef.current,
  start: "top 80%",
  once: true,

  onEnter: () => {
    gsap.utils.toArray("[data-counter]").forEach((counter) => {

      const target = Number(
        counter.dataset.value
      );

      const suffix =
        counter.dataset.suffix || "";

      const obj = { value: 0 };

      gsap.to(obj, {
        value: target,
        duration: 1.5,
        ease: "power2.out",

        onUpdate: () => {

          counter.textContent =
            `${Math.round(obj.value)}${suffix}`;
        },
      });
    });
  },
});

      tl.from("[data-eyebrow]", {
        opacity: 0,
        y: 16,
        duration: 0.7,
        ease: "power3.out",
      })

        .from(
          "[data-segment]",
          {
            opacity: 0,
            y: 28,
            duration: 0.8,
            stagger: 0.14,
            ease: "power3.out",
          },
          "-=0.4"
        )

        .from(
          "[data-description]",
          {
            opacity: 0,
            y: 16,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.35"
        )

        .from(
          "[data-feature]",
          {
            opacity: 0,
            y: 24,
            scale: 0.96,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.3"
        )

        .from(
          "[data-cta-button]",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.35"
        );

    }, sectionRef);

    return () => ctx.revert();
  },
  { scope: sectionRef }
);
  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-[#f5f0e7]"
    >
      {/* ── TOP CTA BANNER ───────────────────────────────────────────────
          sm : stacked buttons, 2-col pills, smaller headline
          md : scaled 72% — 52px headline, medium padding
          lg : 64px headline, original spacing
          xl : original — 72px headline, full padding                     */}
      <div className="relative overflow-hidden min-h-[340px] sm:min-h-[360px] md:min-h-[331px] lg:min-h-[420px] xl:min-h-[460px]">
        <img
          data-hero-image
          src="/images2/ctahome.webp"
          alt="GVR Fresh Foods"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-16 py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20">
          <div className="max-w-[580px]">
            {/* Eyebrow */}
            <div
              data-eyebrow
              className="flex items-center gap-3 mb-4 sm:mb-4 md:mb-5 lg:mb-5 xl:mb-5"
            >
              {" "}
              <div className="h-px w-8 bg-[#C49A2A]/60" />
              <p
                className={`${montserrat.className} text-[10px] uppercase tracking-[0.25em] text-[#C49A2A]`}
                style={{ fontWeight: 600 }}
              >
                Let's Grow Together
              </p>
              <div className="h-px w-8 bg-[#C49A2A]/60" />
            </div>

            {/* Headline
                sm: 34px  md: 52px  lg: 64px  xl: 72px                   */}
            <h2
              data-headline
              className={`${cormorant.className} leading-[1.0] text-[#f5f0e7]`}
            >
              {" "}
              <span
                data-segment
                className="block text-[34px] sm:text-[38px] md:text-[52px] lg:text-[64px] xl:text-[72px] font-semibold"
              >
                Ready to Partner
              </span>
              <span
                data-segment
                className="block text-[34px] sm:text-[38px] md:text-[52px] lg:text-[64px] xl:text-[72px] font-semibold"
              >
                With{" "}
                <span data-segment className="text-[#C49A2A]">
                  GVR?
                </span>
              </span>
            </h2>

            {/* Subtext
                sm: 12px  md: 13px  lg: 14px  xl: 15px                   */}
            <p
              data-description
              className={`${montserrat.className} mt-4 md:mt-5 text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] text-[#f5f0e7]/80 leading-[1.8] max-w-[460px]`}
              style={{ fontWeight: 400 }}
            >
              Whether you need eggs for your home, shop, restaurant, hotel, or
              bulk business – we've got you covered.
            </p>

            {/* Feature pills
                sm: 2×2 grid  md+: original flex row                      */}
            <div className="mt-5 md:mt-6 grid grid-cols-2 sm:grid-cols-2 w-[250px] md:w-full md:flex md:items-center gap-0 ">
              {features.map((f, i) => (
                <div data-feature key={i} className="flex items-center gap-0">
                  <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-1">
                    <div className="w-8 h-8 md:w-8 md:h-8 rounded-full border border-[#f5f0e7]/20 bg-[#f5f0e7]/10 flex items-center justify-center flex-shrink-0">
                      <div
                        className="w-7 h-7 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-8 xl:h-8 bg-[#8d9a5f] opacity-80"
                        style={{
                          WebkitMaskImage: `url(${f.icon})`,
                          maskImage: `url(${f.icon})`,
                          WebkitMaskSize: "contain",
                          maskSize: "contain",
                          WebkitMaskRepeat: "no-repeat",
                          maskRepeat: "no-repeat",
                          WebkitMaskPosition: "center",
                          maskPosition: "center",
                        }}
                      />
                    </div>
                    <div>
                      <p
                        className={`${montserrat.className} text-[10px] text-[#f5f0e7] leading-tight`}
                        style={{ fontWeight: 600 }}
                      >
                        {f.line1}
                      </p>
                      <p
                        className={`${montserrat.className} text-[10px] text-[#f5f0e7]/70 leading-tight`}
                        style={{ fontWeight: 400 }}
                      >
                        {f.line2}
                      </p>
                    </div>
                  </div>
                  {/* Divider only in flex row (md+) */}
                  {i !== features.length - 1 && (
                    <div className="hidden md:block w-px h-6 bg-[#f5f0e7]/20 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons
                sm: stacked full width
                md+: original flex row with scaled px/py                  */}
            <div className="mt-6 md:mt-8 flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4">
              {/* WhatsApp
                  sm: stacked  md: px-5 py-3  lg: px-6 py-3.5  xl: px-7 py-3.5 */}
              <a
                data-cta-button
                onMouseEnter={hoverIn}
                onMouseLeave={hoverOut}
                href="https://wa.me/919448453609"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex  items-stretch  rounded-[10px] md:rounded-full overflow-hidden "
              >
                <span className="bg-[#3f4a22] px-4 md:px-5 lg:px-5 xl:px-5 flex items-center justify-center">
                  <MessageCircle size={16} className="text-[#f5f0e7]" />
                </span>
                <span
                  className={`${montserrat.className} bg-[#4D5B2A] rounded-r-[10px]  md:flex-none text-center px-5 md:px-5 lg:px-6 xl:px-7 py-3 md:py-3 lg:py-3.5 xl:py-3.5 text-[11px] md:text-[11px] lg:text-[12px] xl:text-[12px] uppercase tracking-[0.15em] text-[#f5f0e7]`}
                  style={{ fontWeight: 600 }}
                >
                  WhatsApp Us
                </span>
              </a>

              <span
                className={`${montserrat.className} text-[11px]  pl-[90px] md:pl-0 text-[#f5f0e7]/50 uppercase tracking-[0.1em] md:text-center`}
                style={{ fontWeight: 500 }}
              >
                or
              </span>

              {/* Call */}
              <a
                data-cta-button
                onMouseEnter={hoverIn}
                onMouseLeave={hoverOut}
                href="/contact"
                className="inline-flex  items-stretch rounded-[10px] md:rounded-full overflow-hidden "
              >
                <span className="bg-[#C49A2A] px-4 md:px-5 lg:px-5 xl:px-5 flex items-center justify-center">
                  <Phone size={16} className="text-[#f5f0e7]" />
                </span>
                <span
                  className={`${montserrat.className} bg-[#c7a548] rounded-r-[10px] md:flex-none text-center px-5 md:px-5 lg:px-6 xl:px-7 py-3 md:py-3 lg:py-3.5 xl:py-3.5 text-[11px] md:text-[11px] lg:text-[12px] xl:text-[12px] uppercase tracking-[0.15em] text-[#f5f0e7]`}
                  style={{ fontWeight: 600 }}
                >
                  Enquire Now
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────
          sm : 1-col stacked
          md : 2-col grid, scaled card padding
          lg : 3-col original
          xl : 3-col original                                             */}
      <div className="relative bg-[#f5f0e7] pt-8 md:pt-10 pb-8 md:pb-10">
        <div className="mx-auto max-w-5xl px-6 lg:px-16">
          {/* Section label
              sm: 14px  md: 16px  lg/xl: 18px (original)                 */}
<div
  data-testimonial-heading
  className="text-center mb-4 md:mb-2"
>            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-8 md:w-10 bg-[#6E7E45]/30" />
              <p
                className={`${montserrat.className} text-[12px] sm:text-[12px] md:text-[16px] lg:text-[18px] xl:text-[18px] uppercase tracking-[0.2em] md:tracking-[0.25em] text-[#6E7E45]`}
                style={{ fontWeight: 600 }}
              >
                What Our Partners Say
              </p>
              <div className="h-px w-8 md:w-10 bg-[#6E7E45]/30" />
            </div>
            <div className="flex justify-center mt-1">
              <div
                className=" data-float-leaf w-7 h-7 lg:w-8 lg:h-8 bg-[#6E7E45] opacity-30"
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
          </div>

          {/* Testimonial cards
              sm: 1-col  md: 2-col  lg/xl: 3-col (original)              */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 ">
            {testimonials.map((t, i) => (
              <div
              data-testimonial-card
                key={i}
                className={`bg-white rounded-2xl border border-[#e8e0d4] p-5 md:p-4 lg:p-6 xl:p-6 flex flex-col justify-between
                  ${i === 2 ? "md:col-span-1 lg:col-span-1" : ""}
                `}
              >
                <div>
                  {/* Quote + stars
                      md: 38px quote  lg/xl: 40px (original)             */}
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <span
                      className={`${cormorant.className} text-[36px] md:text-[38px] lg:text-[40px] xl:text-[40px] text-[#C49A2A]`}
                      style={{ fontWeight: 600, lineHeight: 0.8 }}
                    >
                      "
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <span
                          key={j}
                          className="text-[#C49A2A] text-[13px] md:text-[13px] lg:text-[14px] xl:text-[14px]"
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Quote text
                      sm/md: 12px  lg/xl: 13px (original)                */}
                  <p
                    className={`${montserrat.className} text-[12px] md:text-[12px] lg:text-[13px] xl:text-[13px] text-[#5f5146] leading-[1.8]`}
                    style={{ fontWeight: 400 }}
                  >
                    {t.quote}
                  </p>
                </div>

                <div className="h-px bg-[#6E7E45]/10 my-3 md:my-4" />

                {/* Person row */}
                <div className="flex items-center gap-3">
                  <div data-avatar
 className="w-10 h-10 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-11 xl:h-11 rounded-full bg-[#3f4a22] border border-[#6E7E45]/20 flex items-center justify-center flex-shrink-0">
                    <div
                      className="w-9 h-9 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-10 xl:h-10 bg-[#9fac70] opacity-80"
                      style={{
                        WebkitMaskImage: `url(${t.icon})`,
                        maskImage: `url(${t.icon})`,
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                      }}
                    />
                  </div>
                  <div>
                    <p
                      className={`${montserrat.className} text-[12px] text-[#241A12]`}
                      style={{ fontWeight: 700 }}
                    >
                      {t.name}
                    </p>
                    <p
                      className={`${montserrat.className} text-[11px] text-[#5f5146]`}
                      style={{ fontWeight: 400 }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── STATS ROW ────────────────────────────────────────────────
              sm : 2-col grid, mx-auto centered, no ml-14
              md : 2-col, mx-auto, scaled num/icon
              lg : 4-col, ml-14 (original offset restored)
              xl : 4-col, ml-14 (original)                               */}
          <div ref={statsRef} className="mt-6 md:mt-8 bg-[#ebe3d3] border border-[#e8e0d4] rounded-2xl max-w-3xl mx-auto md:mx-auto lg:ml-14 xl:ml-14 px-3 md:px-4 py-2">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-0">
              {stats.map((s, i) => (
                <div data-stat key={i} className="flex items-center gap-0">
                  <div className="flex-1 flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 justify-center">
                    {/* Icon
                        sm: w-6  md: w-8  lg: w-9  xl: w-12 (original)  */}
                    <div
                    data-stat-icon
                      className="w-10 h-10 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 xl:w-12 xl:h-12 bg-[#717f3d] opacity-60 flex-shrink-0"
                      style={{
                        WebkitMaskImage: `url(${s.icon})`,
                        maskImage: `url(${s.icon})`,
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                      }}
                    />
                    <div>
                      {/* Num: sm: 18px  md: 20px  lg: 22px  xl: 25px   */}
                      <p
  data-counter
  data-value={s.value}
  data-suffix={s.suffix}
  className={`${montserrat.className} text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[25px] font-semibold text-[#4D5B2A] leading-none`}
>
  {s.display}
</p>
                      <p
                        className={`${montserrat.className} text-[9px] sm:text-[9px] md:text-[10px] lg:text-[10px] xl:text-[10px] text-[#5f5146] mt-0.5`}
                        style={{ fontWeight: 500 }}
                      >
                        {s.label}
                      </p>
                    </div>
                  </div>
                  {i !== stats.length - 1 && (
                    <div className="w-px h-8 md:h-9 lg:h-10 xl:h-10 bg-[#6E7E45]/15 flex-shrink-0" />
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
