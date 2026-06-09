"use client";

import { useEffect, useRef } from "react";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Caveat } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const leftFeatures = [
  {
    icon: "/icons/Shield.svg",
    circle: "/Circle.png",
    title: "Hygienic Handling",
    desc: "Strict hygiene standards and clean processes at every step.",
  },
  {
    icon: "/icons/Truck.svg",
    circle: "/Circle.png",
    title: "Daily Delivery",
    desc: "On-time delivery, every day to keep your business running smoothly.",
  },
  {
    icon: "/icons/Sprout.svg",
    circle: "/Circle.png",
    title: "Natural Feed",
    desc: "Hens are fed with natural, nutritious feed for healthy and better eggs.",
  },
];

const rightFeatures = [
  {
    icon: "/icons/Bulksupply.svg",
    circle: "/Circle.png",
    title: "Bulk Orders",
    desc: "Flexible bulk supply options for retailers, wholesalers and businesses.",
  },
  {
    icon: "/icons/Assure.svg",
    circle: "/Circle.png",
    title: "FSSAI Certified",
    desc: "FSSAI certified for food safety, quality and your complete peace of mind.",
  },
  {
    icon: "/icons/Farm.svg",
    circle: "/Circle.png",
    title: "Direct From Farm",
    desc: "Fresh eggs straight from our farms to your table.",
  },
];

export default function WhyChooseUs() {
  // ── Refs ──────────────────────────────────────────────
  const sectionRef = useRef(null);

  // Headings
  const headingMobileRef = useRef(null);
  const headingDesktopRef = useRef(null);
  const subtaglineRef = useRef(null);

  // Center image (mobile/tablet)
  const centerImgMobileRef = useRef(null);
  // Center image (desktop)
  const centerImgDesktopRef = useRef(null);

  // Feature columns
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  // Bottom banner
  const bannerRef = useRef(null);

  // ── Animations ────────────────────────────────────────
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {

      // ── Mobile heading ───────────────────────────────
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

      // ── Desktop heading — eyebrow + staggered headline ─
      if (headingDesktopRef.current) {
        const eyebrow = headingDesktopRef.current.querySelector("[data-eyebrow]");
        const spans   = headingDesktopRef.current.querySelectorAll("[data-headline] span");
        const tl = gsap.timeline({
          scrollTrigger: { trigger: headingDesktopRef.current, start: "top 80%", once: true },
        });
        if (eyebrow) tl.fromTo(eyebrow, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" });
        if (spans.length) tl.fromTo(spans, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.13 }, "-=0.4");
      }

      // ── Sub-tagline ──────────────────────────────────
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

      // ── Center image (mobile/tablet) — scale-in ──────
      if (centerImgMobileRef.current) {
        gsap.fromTo(
          centerImgMobileRef.current,
          { opacity: 0, scale: 0.94, y: 20 },
          {
            opacity: 1, scale: 1, y: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: centerImgMobileRef.current, start: "top 80%", once: true },
          }
        );
      }

      // ── Center image (desktop) — scale-in + float loop ─
      if (centerImgDesktopRef.current) {
        // Entrance
        gsap.fromTo(
          centerImgDesktopRef.current,
          { opacity: 0, scale: 0.94 },
          {
            opacity: 1, scale: 1, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: centerImgDesktopRef.current, start: "top 80%", once: true },
          }
        );
        // Subtle ambient float after entrance
        
      }

      // ── Left features — stagger from left ────────────
      if (leftColRef.current) {
        const items = leftColRef.current.querySelectorAll("[data-feature]");
        gsap.fromTo(
          items,
          { opacity: 0, x: -24 },
          {
            opacity: 1, x: 0, duration: 0.75, ease: "power3.out", stagger: 0.13,
            scrollTrigger: { trigger: leftColRef.current, start: "top 80%", once: true },
          }
        );
      }

      // ── Right features — stagger from right ──────────
      if (rightColRef.current) {
        const items = rightColRef.current.querySelectorAll("[data-feature]");
        gsap.fromTo(
          items,
          { opacity: 0, x: 24 },
          {
            opacity: 1, x: 0, duration: 0.75, ease: "power3.out", stagger: 0.13,
            scrollTrigger: { trigger: rightColRef.current, start: "top 80%", once: true },
          }
        );
      }

      // ── Bottom banner — fade-up ───────────────────────
      if (bannerRef.current) {
        gsap.fromTo(
          bannerRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: bannerRef.current, start: "top 80%", once: true },
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f5f0e7] py-12 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16">

        {/* ── HEADING ──────────────────────────────────────── */}
        <div className="mb-10 lg:mb-18">

          {/* Mobile + Tablet heading */}
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
                <div className="mb-2 w-10" />
              </div>
              <div className="flex flex-col">
                <p className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`} style={{ fontWeight: 500 }}>
                  Why Choose Us
                </p>
                <div className="mt-2 h-[0.5px] w-[115px] bg-[#d8d2c4]" />
              </div>
            </div>
            <h2 className={`${cormorant.className} leading-[1.0] text-[#241A12] text-center`}>
              <span className="text-[36px] sm:text-[36px] md:text-[48px] font-semibold">Why Trust </span>
              <span className="text-[36px] sm:text-[36px] md:text-[48px] italic font-medium text-[#6E7E45]">GVR</span>
            </h2>
          </div>

          {/* Desktop heading */}
          <div
            ref={headingDesktopRef}
            className="hidden lg:flex items-start gap-8 relative"
          >
            <div data-eyebrow className="flex items-center gap-3 flex-shrink-0 pt-2">
              <div className="flex flex-col items-center">
                <div
                  className="w-7 h-7 lg:w-8 lg:h-8 bg-[#6E7E45]"
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
                <div className="mb-2 w-10" />
              </div>
              <div className="flex flex-col">
                <p className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`} style={{ fontWeight: 500 }}>
                  Why Choose Us
                </p>
                <div className="mt-2 h-[0.5px] w-[115px] bg-[#d8d2c4]" />
              </div>
            </div>
            <h2
              data-headline
              className={`${cormorant.className} leading-[1.0] text-[#241A12] flex-1 text-center absolute left-0 right-0`}
            >
              <span className="text-[48px] lg:text-[64px] xl:text-[80px] font-semibold">Why Trust </span>
              <span className="text-[48px] lg:text-[64px] xl:text-[80px] italic font-medium text-[#6E7E45]">GVR</span>
            </h2>
          </div>

          {/* Subtext */}
          <p
            ref={subtaglineRef}
            className={`${montserrat.className} text-[14px] lg:text-[15px] text-[#5f5146] leading-7 pt-6 sm:pt-8 md:pt-10 lg:pt-12 text-center max-w-lg mx-auto`}
            style={{ fontWeight: 400 }}
          >
            Natural quality, families and businesses rely on.
          </p>
        </div>

        {/* ── CENTER IMAGE (mobile/tablet) ─────────────────── */}
        <div
          ref={centerImgMobileRef}
          className="flex lg:hidden items-center justify-center mb-8 relative"
        >
          <img
            src="/images2/Whyusbg.webp"
            alt=""
            className="w-[220px] sm:w-[260px] md:w-[300px] h-auto object-contain scale-[1.3] sm:scale-[1.3] md:scale-[1.3]"
          />
          <img
            src="/images2/whyusmain.webp"
            alt="Farm fresh eggs"
            className="absolute bottom-[-20px] sm:bottom-[-24px] md:bottom-[-28px] left-1/2 -translate-x-1/2 w-[180px] sm:w-[220px] md:w-[260px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.12)]"
          />
        </div>

        {/* ── FEATURES GRID ────────────────────────────────── */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 lg:gap-2 items-center">

          {/* LEFT FEATURES */}
          <div ref={leftColRef} className="flex flex-col gap-6 sm:gap-7 md:gap-8">
            {leftFeatures.map((f, i) => (
              <div key={i} data-feature className="flex items-start gap-4 lg:justify-end">
                {/* Text — right aligned, desktop only */}
                <div className="text-right hidden lg:block">
                  <p className={`${montserrat.className} text-[13px] text-[#241A12] leading-tight`} style={{ fontWeight: 700 }}>
                    {f.title}
                  </p>
                  <p className={`${montserrat.className} mt-1.5 text-[12px] text-[#5f5146] leading-[1.6]`} style={{ fontWeight: 400 }}>
                    {f.desc}
                  </p>
                </div>

                {/* Icon circle */}
                <div className="relative flex-shrink-0 w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[95px] md:h-[95px] lg:w-[105px] lg:h-[105px]">
                  <div
                    className="absolute inset-0 w-full h-full bg-[#E7E1BC]"
                    style={{
                      WebkitMaskImage: "url(/svgs/Circlebrush.svg)",
                      maskImage: "url(/svgs/Circlebrush.svg)",
                      WebkitMaskSize: "contain",
                      maskSize: "cover",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pb-2">
                    <div
                      className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-18 lg:h-18 bg-[#717f3d]"
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
                </div>

                {/* Vertical accent line — desktop only */}
                <div className="hidden lg:block w-[2px] h-full self-stretch bg-[#6E7E45]/20 flex-shrink-0" />

                {/* Text — mobile & tablet */}
                <div className="lg:hidden md:mt-4 mt-3">
                  <p className={`${montserrat.className} text-[13px] sm:text-[14px] text-[#241A12] leading-tight`} style={{ fontWeight: 700 }}>
                    {f.title}
                  </p>
                  <p className={`${montserrat.className} mt-1.5 text-[11px] sm:text-[12px] text-[#5f5146] leading-[1.6]`} style={{ fontWeight: 400 }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CENTER — desktop only */}
          <div
            ref={centerImgDesktopRef}
            className="relative hidden lg:flex items-center justify-center w-[360px] xl:w-[600px] flex-shrink-0"
          >
            <img
              src="/images2/Whyusbg.webp"
              alt=""
              className="w-full h-auto object-contain scale-[1.5]"
            />
            <img
              data-float-img
              src="/images2/whyusmain.webp"
              alt="Farm fresh eggs"
              className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-[100%] scale-[1.2] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.12)]"
            />
          </div>

          {/* RIGHT FEATURES */}
          <div ref={rightColRef} className="flex flex-col gap-6 sm:gap-7 md:gap-8">
            {rightFeatures.map((f, i) => (
              <div key={i} data-feature className="flex items-start gap-4">
                {/* Vertical accent line — desktop only */}
                <div className="hidden lg:block w-[2px] h-full self-stretch bg-[#6E7E45]/20 flex-shrink-0" />

                {/* Icon circle */}
                <div className="relative flex-shrink-0 w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[95px] md:h-[95px] lg:w-[105px] lg:h-[105px]">
                  <div
                    className="absolute inset-0 w-full h-full bg-[#E7E1BC]"
                    style={{
                      WebkitMaskImage: "url(/svgs/Circlebrush.svg)",
                      maskImage: "url(/svgs/Circlebrush.svg)",
                      WebkitMaskSize: "contain",
                      maskSize: "cover",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pb-2">
                    <div
                      className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-18 lg:h-18 bg-[#717f3d]"
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
                </div>

                {/* Text */}
                <div className="mt-3 md:mt-4 sm:mt-3 lg:mt-0 xl:mt-0">
                  <p className={`${montserrat.className} text-[13px] sm:text-[14px] text-[#241A12] leading-tight`} style={{ fontWeight: 700 }}>
                    {f.title}
                  </p>
                  <p className={`${montserrat.className} mt-1.5 text-[11px] sm:text-[12px] text-[#5f5146] leading-[1.6]`} style={{ fontWeight: 400 }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── BOTTOM BANNER ────────────────────────────────── */}
        <div
          ref={bannerRef}
          className="relative overflow-hidden mx-auto mt-10 lg:mt-8 w-full min-h-[80px] sm:min-h-[90px] lg:min-h-[100px] hidden sm:block"
        >
          {/* Brushstroke bg */}
          <img
            src="/whyusbrush.png"
            alt=""
            className="absolute inset-0 w-full h-full object-fill pointer-events-none"
          />

          {/* Content row */}
          <div className="relative z-10 flex items-center h-full min-h-[80px] sm:min-h-[90px] lg:min-h-[100px] px-8 sm:px-12 md:px-16 lg:px-30">

            {/* LEFT: icon + text */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div
                className="w-6 h-6 sm:w-20 sm:h-20 lg:w-25 lg:h-25 bg-[#b7c290] flex-shrink-0"
                style={{
                  WebkitMaskImage: "url(/icons/Eggnest.svg)",
                  maskImage: "url(/icons/Eggnest.svg)",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              />
              <p
                className={`${montserrat.className} text-[11px] sm:text-[11px] md:text-[12px] lg:text-[12.5px] text-[#f5f0e7] leading-[1.75]`}
                style={{ fontWeight: 400 }}
              >
                Trusted by thousands of
                <br />
                happy families and businesses
                <br />
                across the region.
              </p>
            </div>

            {/* Divider */}
            <div className="w-px bg-[#f5f0e7]/30 mx-8 sm:mx-10 md:mx-14 lg:mx-20 self-stretch my-[18px]" />

            {/* RIGHT: tagline */}
            <div
              className={`${caveat.className} text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] text-[#f5f0e7] leading-snug px-2`}
              style={{ fontWeight: 500 }}
            >
              <div>Good eggs.</div>
              <div className="flex items-baseline gap-1">
                <span>Strong relationships.</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-[#c6e086] text-[20px] sm:text-[22px] lg:text-[26px] inline-block -rotate-4 origin-left">
                  Better tomorrow.
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}