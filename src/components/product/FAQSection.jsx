"use client";

import { useState, useRef, useEffect } from "react";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { ChevronUp, ChevronDown, Phone, Mail, Clock } from "lucide-react";
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

const faqs = [
  {
    num: "01",
    q: "Are your eggs farm fresh?",
    a: "Yes! All our eggs are collected daily from our trusted farms to ensure maximum freshness, quality and natural nutrition.",
  },
  {
    num: "02",
    q: "What types of eggs do you offer?",
    a: "We offer 7 varieties — Country, Brown, White, Duck, Jumbo, Quail and Kadaknath eggs. Each variety is carefully sourced and handled with care.",
  },
  {
    num: "03",
    q: "How do you ensure egg quality and safety?",
    a: "Every batch goes through strict quality checks including size grading, freshness testing and hygiene inspection before dispatch.",
  },
  {
    num: "04",
    q: "Do you deliver bulk orders?",
    a: "Yes, we cater to retailers, restaurants, hotels, bakeries, cafes and distributors. Contact us for bulk pricing and delivery schedules.",
  },
  {
    num: "05",
    q: "What is the shelf life of your eggs?",
    a: "Our eggs are delivered fresh daily. Shelf life is typically 2–3 weeks when stored properly in a cool, dry place or refrigerator.",
  },
  {
    num: "06",
    q: "How should eggs be stored?",
    a: "Store eggs in a cool, dry place away from strong odors. Refrigeration at 4°C extends freshness. Keep pointed end down for best results.",
  },
  {
    num: "07",
    q: "Do you offer subscriptions?",
    a: "Yes! We offer weekly and monthly subscription plans for regular home and business customers. Contact us to set up your plan.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  // ── Refs ──────────────────────────────────────────────
  const sectionRef        = useRef(null);
  const headingMobileRef  = useRef(null);
  const headingDesktopRef = useRef(null);
  const subtaglineRef     = useRef(null);
  const leftCardRef       = useRef(null);
  const faqListRef        = useRef(null);

  // ── Animations ────────────────────────────────────────
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {

      // ── Mobile heading ─────────────────────────────────
      if (headingMobileRef.current) {
        gsap.fromTo(
          headingMobileRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: headingMobileRef.current, start: "top 80%", once: true },
          }
        );
      }

      // ── Desktop heading ────────────────────────────────
      if (headingDesktopRef.current) {
        const eyebrow = headingDesktopRef.current.querySelector("[data-eyebrow]");
        const spans   = headingDesktopRef.current.querySelectorAll("[data-headline] span");
        const tl = gsap.timeline({
          scrollTrigger: { trigger: headingDesktopRef.current, start: "top 80%", once: true },
        });
        if (eyebrow) tl.fromTo(eyebrow, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" });
        if (spans.length) tl.fromTo(spans, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.13 }, "-=0.4");
      }

      // ── Sub-tagline ────────────────────────────────────
      if (subtaglineRef.current) {
        gsap.fromTo(
          subtaglineRef.current,
          { opacity: 0, y: 16 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
            scrollTrigger: { trigger: subtaglineRef.current, start: "top 80%", once: true },
          }
        );
      }

      // ── Left card — slide in from left ────────────────
      // The card is a self-contained panel; treating it as one unit
      // feels more premium than staggering its internals.
      if (leftCardRef.current) {
        gsap.fromTo(
          leftCardRef.current,
          { opacity: 0, x: -32 },
          {
            opacity: 1, x: 0, duration: 0.85, ease: "power3.out",
            scrollTrigger: { trigger: leftCardRef.current, start: "top 80%", once: true },
          }
        );
      }

      // ── FAQ rows — staggered fade-up ──────────────────
      // Each accordion row enters individually with a short stagger.
      // The CSS max-h transition still handles open/close — GSAP only
      // handles the entrance reveal; it never touches max-height.
      if (faqListRef.current) {
        const rows = faqListRef.current.querySelectorAll("[data-faq-row]");
        gsap.fromTo(
          rows,
          { opacity: 0, y: 20, x: 16 },
          {
            opacity: 1, y: 0, x: 0,
            duration: 0.65,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: faqListRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f5f0e7] overflow-hidden py-16 sm:py-18 md:py-20 lg:py-20 xl:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16">

        {/* ── HEADING ──────────────────────────────────────── */}
        <div className="mb-10 sm:mb-10 md:mb-12 lg:mb-12">

          {/* Mobile + Tablet */}
          <div
            ref={headingMobileRef}
            className="flex flex-col items-center lg:hidden gap-3"
          >
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
                  FAQ
                </p>
                <div className="mt-2 h-[0.5px] w-[30px] bg-[#d8d2c4]" />
              </div>
            </div>
            <h2 className={`${cormorant.className} leading-[1.0] text-[#241A12] text-center`}>
              <span className="text-[32px] sm:text-[34px] md:text-[46px] font-semibold">Frequently </span>
              <span className="text-[32px] sm:text-[34px] md:text-[46px] italic font-medium text-[#6E7E45]">Asked Questions.</span>
            </h2>
          </div>

          {/* Desktop */}
          <div
            ref={headingDesktopRef}
            className="hidden lg:flex items-start gap-8 relative"
          >
            <div data-eyebrow className="flex items-center gap-3 flex-shrink-0 pt-2">
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
                  FAQ
                </p>
                <div className="mt-2 h-[0.5px] w-[30px] bg-[#d8d2c4]" />
              </div>
            </div>
            <h2
              data-headline
              className={`${cormorant.className} leading-[1.0] text-[#241A12] absolute left-0 right-0 text-center`}
            >
              <span className="text-[36px] lg:text-[52px] xl:text-[64px] font-semibold">Frequently </span>
              <span className="text-[36px] lg:text-[52px] xl:text-[64px] italic font-medium text-[#6E7E45]">Asked Questions.</span>
            </h2>
          </div>

          {/* Subtext */}
          <p
            ref={subtaglineRef}
            className={`${montserrat.className} text-[13px] lg:text-[14px] text-[#5f5146] leading-[1.8] pt-6 sm:pt-8 lg:pt-12 text-center max-w-lg mx-auto`}
            style={{ fontWeight: 400 }}
          >
            Everything you need to know about our eggs, quality and services.
          </p>
        </div>

        {/* ── MAIN GRID ────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[300px_1fr] xl:grid-cols-[320px_1fr] gap-5 md:gap-6 items-start">

          {/* LEFT CARD */}
          <div
            ref={leftCardRef}
            className="bg-white border border-[#e8e0d4] rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-4 flex flex-col items-center text-center flex-1">
              {/* Icon circle */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#6E7E45]/25 bg-[#edf3de]/50 flex items-center justify-center mb-4 sm:mb-5">
                <img
                  src="/products/qicon.webp"
                  alt=""
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain opacity-50"
                />
              </div>

              <h3 className={`${cormorant.className} text-[22px] sm:text-[24px] md:text-[22px] lg:text-[26px] xl:text-[28px] font-semibold text-[#241A12] leading-tight mb-3`}>
                Have a Question?
                <br />
                We're Here to Help.
              </h3>
              <p
                className={`${montserrat.className} text-[11px] sm:text-[12px] text-[#5f5146] leading-[1.7] mb-4 sm:mb-5`}
                style={{ fontWeight: 400 }}
              >
                Can't find the answer you're looking for?
                <br />
                Our team is happy to assist you.
              </p>

              <div className="w-16 h-px bg-[#6E7E45]/20 mb-4 sm:mb-5" />

              {/* Contact details */}
              <div className="flex flex-col gap-3 w-full text-left">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-[#6E7E45]/20 bg-[#edf3de]/40 flex items-center justify-center flex-shrink-0">
                    <Phone size={13} className="text-[#6E7E45]" />
                  </div>
                  <a
                    href="tel:+919448453609"
                    className={`${montserrat.className} text-[12px] text-[#5f5146] hover:text-[#4D5B2A] transition-colors`}
                    style={{ fontWeight: 500 }}
                  >
                    +91 94484 53609
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-[#6E7E45]/20 bg-[#edf3de]/40 flex items-center justify-center flex-shrink-0">
                    <Mail size={13} className="text-[#6E7E45]" />
                  </div>
                  <a
                    href="mailto:support@gvrfarmfoods.com"
                    className={`${montserrat.className} text-[11px] sm:text-[12px] text-[#5f5146] hover:text-[#4D5B2A] transition-colors break-all`}
                    style={{ fontWeight: 500 }}
                  >
                    gvrfreshfoodsprivatelimited@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-[#6E7E45]/20 bg-[#edf3de]/40 flex items-center justify-center flex-shrink-0">
                    <Clock size={13} className="text-[#6E7E45]" />
                  </div>
                  <p
                    className={`${montserrat.className} text-[11px] sm:text-[12px] text-[#5f5146]`}
                    style={{ fontWeight: 400 }}
                  >
                    Mon – Sat : 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Egg basket image */}
            <div className="relative h-[220px] sm:h-[180px] md:h-[160px] lg:h-[180px] xl:h-[200px] pt-0 md:pt-1 overflow-hidden">
              <img
                src="/products/eggbasket.webp"
                alt="Farm fresh eggs"
                className="absolute bottom-0 right-0 w-full object-contain object-bottom"
              />
            </div>
          </div>

          {/* RIGHT: FAQ accordion */}
          <div ref={faqListRef} className="flex flex-col gap-2 sm:gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                data-faq-row
                className={`bg-white border rounded-xl overflow-hidden transition-colors duration-200 cursor-pointer
                  ${open === i ? "border-[#6E7E45]/30 shadow-[0_4px_16px_rgba(110,126,69,0.08)]" : "border-[#e8e0d4]"}
                `}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                {/* Question row */}
                <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4">
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${open === i ? "bg-[#4D5B2A]" : "bg-[#edf3de]"}`}
                  >
                    <span
                      className={`${montserrat.className} text-[10px] ${open === i ? "text-[#f5f0e7]" : "text-[#4D5B2A]"}`}
                      style={{ fontWeight: 600 }}
                    >
                      {faq.num}
                    </span>
                  </div>
                  <p className={`${cormorant.className} text-[15px] sm:text-[16px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-semibold text-[#241A12] flex-1 leading-tight`}>
                    {faq.q}
                  </p>
                  <div className="flex-shrink-0 text-[#6E7E45]">
                    {open === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>

                {/* Answer */}
                <div className={`transition-all duration-300 overflow-hidden ${open === i ? "max-h-40" : "max-h-0"}`}>
                  <p
                    className={`${montserrat.className} text-[12px] lg:text-[13px] text-[#5f5146] leading-[1.8] px-4 sm:px-6 pb-4 sm:pb-5 pl-[52px] sm:pl-[60px] md:pl-[60px] lg:pl-[72px] xl:pl-[72px]`}
                    style={{ fontWeight: 400 }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}