"use client";

import { useState } from "react";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import {
  ChevronUp,
  ChevronDown,
  Phone,
  Mail,
  Clock,
  MessageCircleQuestion,
} from "lucide-react";

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

const features = [
  {
    icon: "/icons/leaf.png",
    title: "Natural & Pure",
    desc: "No additives. No chemicals. Just nature's goodness.",
  },
  {
    icon: "/icons/Shield.png",
    title: "Quality Assured",
    desc: "Strict quality checks at every step.",
  },
  {
    icon: "/icons/farm.png",
    title: "Farm Fresh",
    desc: "Sourced daily from trusted farms.",
  },
  {
    icon: "/icons/truck.png",
    title: "Reliable Delivery",
    desc: "On-time delivery with care, every time.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative bg-[#f5f0e7] overflow-hidden py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        {/* ── HEADING — same style as other sections ── */}
        <div className="mb-12">
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
                  className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`}
                  style={{ fontWeight: 500 }}
                >
                  FAQ
                </p>
                <div className="mt-2 h-[0.5px] w-[40px] bg-[#d8d2c4]" />
              </div>
            </div>

            {/* Headline — absolute centered */}
            <h2
              className={`${cormorant.className} leading-[1.0] text-[#241A12] absolute left-0 right-0 text-center`}
            >
              <span className="text-[36px] lg:text-[64px] font-semibold">
                Frequently{" "}
              </span>
              <span className="text-[36px] lg:text-[64px] italic font-medium text-[#6E7E45]">
                Asked Questions.
              </span>
            </h2>
          </div>

          {/* Subtext */}
          <p
            className={`${montserrat.className} text-[13px] lg:text-[14px] text-[#5f5146] leading-[1.8] pt-12 text-center max-w-lg mx-auto`}
            style={{ fontWeight: 400 }}
          >
            Everything you need to know about our eggs, quality and services.
          </p>
        </div>  

        {/* ── MAIN: Left card + Right FAQs ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">
          {/* ── LEFT CARD ── */}
          <div className="bg-white border border-[#e8e0d4] rounded-2xl overflow-hidden flex flex-col">
            {/* Top content */}
            <div className="px-8 pt-8 pb-4 flex flex-col items-center text-center flex-1">
              {/* Question mark circle */}
              <div className="w-16 h-16 rounded-full border-2 border-[#6E7E45]/25 bg-[#edf3de]/50 flex items-center justify-center mb-5">
                <img
                  src="/products/qicon.png"
                  alt=""
                  className="w-10 h-10 object-contain opacity-50"
                />
              </div>

              {/* Text */}
              <h3
                className={`${cormorant.className} text-[24px] lg:text-[28px] font-semibold text-[#241A12] leading-tight mb-3`}
              >
                Have a Question?
                <br />
                We're Here to Help.
              </h3>
              <p
                className={`${montserrat.className} text-[12px] text-[#5f5146] leading-[1.7] mb-5`}
                style={{ fontWeight: 400 }}
              >
                Can't find the answer you're looking for?
                <br />
                Our team is happy to assist you.
              </p>

              {/* Divider */}
              <div className="w-16 h-px bg-[#6E7E45]/20 mb-5" />

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
                    className={`${montserrat.className} text-[12px] text-[#5f5146] hover:text-[#4D5B2A] transition-colors`}
                    style={{ fontWeight: 500 }}
                  >
                    support@gvrfarmfoods.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-[#6E7E45]/20 bg-[#edf3de]/40 flex items-center justify-center flex-shrink-0">
                    <Clock size={13} className="text-[#6E7E45]" />
                  </div>
                  <p
                    className={`${montserrat.className} text-[12px] text-[#5f5146]`}
                    style={{ fontWeight: 400 }}
                  >
                    Mon – Sat : 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Egg basket image — bottom of card */}
            <div className="relative h-[180px] pt overflow-hidden">
              <img
                src="/products/eggbasket.png"
                alt="Farm fresh eggs"
                className="absolute bottom-0 right-0 w-full object-contain object-bottom"
              />
            </div>
          </div>

          {/* ── RIGHT: FAQ accordion ── */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-white border rounded-xl overflow-hidden transition-all duration-200 cursor-pointer
                  ${open === i ? "border-[#6E7E45]/30 shadow-[0_4px_16px_rgba(110,126,69,0.08)]" : "border-[#e8e0d4]"}
                `}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                {/* Question row */}
                <div className="flex items-center gap-4 px-6 py-4">
                  {/* Number badge */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors
                    ${open === i ? "bg-[#4D5B2A]" : "bg-[#edf3de]"}
                  `}
                  >
                    <span
                      className={`${montserrat.className} text-[10px] ${open === i ? "text-[#f5f0e7]" : "text-[#4D5B2A]"}`}
                      style={{ fontWeight: 600 }}
                    >
                      {faq.num}
                    </span>
                  </div>

                  {/* Question text */}
                  <p
                    className={`${cormorant.className} text-[18px] lg:text-[20px] font-semibold text-[#241A12] flex-1 leading-tight`}
                  >
                    {faq.q}
                  </p>

                  {/* Chevron */}
                  <div className="flex-shrink-0 text-[#6E7E45]">
                    {open === i ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </div>
                </div>

                {/* Answer — animated */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${open === i ? "max-h-40" : "max-h-0"}`}
                >
                  <p
                    className={`${montserrat.className} text-[12px] lg:text-[13px] text-[#5f5146] leading-[1.8] px-6 pb-5 pl-[72px]`}
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
