"use client";

import { useEffect, useRef } from "react";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Camera, MessageCircle } from "lucide-react";
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

export default function GallerySection() {
  // ── Refs ──────────────────────────────────────────────
  const sectionRef        = useRef(null);
  const headingMobileRef  = useRef(null);
  const headingDesktopRef = useRef(null);
  const subtaglineRef     = useRef(null);
  const mobileGridRef     = useRef(null);
  const desktopGridRef    = useRef(null);
  const bottomBarRef      = useRef(null);

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

      // ── Desktop heading — eyebrow then staggered spans ─
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

      // ── Mobile grid — staggered fade-up + scale-in ─────
      // Each cell reveals individually for a mosaic feel.
      if (mobileGridRef.current) {
        const cells = mobileGridRef.current.querySelectorAll("[data-cell]");
        gsap.fromTo(
          cells,
          { opacity: 0, y: 28, scale: 0.96 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: mobileGridRef.current, start: "top 80%", once: true },
          }
        );
      }

      // ── Desktop/tablet grid — grouped reveal ───────────
      // The absolute layout can't safely stagger by DOM order since
      // images overlap spatially. Instead reveal in two visual waves:
      // top-row images first, then bottom-row images.
      if (desktopGridRef.current) {
        const allCells = desktopGridRef.current.querySelectorAll("[data-cell]");

        // Split into top group (indices 0–2) and bottom group (3–7)
        const topGroup    = Array.from(allCells).slice(0, 3);
        const bottomGroup = Array.from(allCells).slice(3);

        const tl = gsap.timeline({
          scrollTrigger: { trigger: desktopGridRef.current, start: "top 80%", once: true },
        });

        tl.fromTo(
          topGroup,
          { opacity: 0, y: 24, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out", stagger: 0.1 }
        ).fromTo(
          bottomGroup,
          { opacity: 0, y: 24, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out", stagger: 0.1 },
          "-=0.45"
        );
      }

      // ── Bottom bar — fade-up ───────────────────────────
      if (bottomBarRef.current) {
        gsap.fromTo(
          bottomBarRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: bottomBarRef.current, start: "top 80%", once: true },
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ── CTA hover ─────────────────────────────────────────
  const hoverIn  = (e) => gsap.to(e.currentTarget, { scale: 1.03, duration: 0.25, ease: "power2.out" });
  const hoverOut = (e) => gsap.to(e.currentTarget, { scale: 1,    duration: 0.25, ease: "power2.out" });

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f5f0e7] py-12 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16">

        {/* ── HEADING ──────────────────────────────────────── */}
        <div className="mb-10">

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
                <div className="mb-2 w-10" />
              </div>
              <div className="flex flex-col">
                <p
                  className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`}
                  style={{ fontWeight: 500 }}
                >
                  Gallery
                </p>
                <div className="mt-2 h-[0.5px] w-[60px] bg-[#d8d2c4]" />
              </div>
            </div>
            <h2 className={`${cormorant.className} leading-[1.0] text-[#241A12] text-center`}>
              <span className="text-[34px] sm:text-[38px] font-semibold">Moments from </span>
              <span className="text-[34px] sm:text-[38px] italic font-medium text-[#6E7E45]">Our farm</span>
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
                <p
                  className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`}
                  style={{ fontWeight: 500 }}
                >
                  Gallery
                </p>
                <div className="mt-2 h-[0.5px] w-[60px] bg-[#d8d2c4]" />
              </div>
            </div>
            <h2
              data-headline
              className={`${cormorant.className} leading-[1.0] text-[#241A12] absolute left-0 right-0 text-center`}
            >
              <span className="text-[38px] lg:text-[60px] font-semibold">Moments from </span>
              <span className="text-[38px] lg:text-[60px] italic font-medium text-[#6E7E45]">Our farm</span>
            </h2>
          </div>

          <p
            ref={subtaglineRef}
            className={`${montserrat.className} text-[13px] lg:text-[15px] text-[#5f5146] leading-7 text-center max-w-xl mx-auto pt-6 sm:pt-8 lg:pt-12`}
            style={{ fontWeight: 400 }}
          >
            A glimpse into our daily operations – from healthy hens and careful
            handling to safe packaging and timely delivery.
          </p>
        </div>

        {/* ── MOBILE GRID (< md) ────────────────────────────── */}
        <div
          ref={mobileGridRef}
          className="grid grid-cols-2 gap-2 md:hidden"
        >
          {[
            { src: "/gallery/g1.webp",  h: "h-[180px]" },
            { src: "/gallery/g3.webp",  h: "h-[180px]" },
            { src: "/gallery/g11.webp", h: "h-[140px]" },
            { src: "/gallery/g4.webp",  h: "h-[140px]" },
            { src: "/gallery/g6.webp",  h: "h-[150px]" },
            { src: "/gallery/g7.webp",  h: "h-[150px]" },
            { src: "/gallery/g5.webp",  h: "h-[140px]" },
            { src: "/gallery/g10.webp", h: "h-[140px]" },
          ].map((img, i) => (
            <div
              key={i}
              data-cell
              className={`overflow-hidden rounded-[4px] group ${img.h}`}
            >
              <img
                src={img.src}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>

        {/* ── TABLET + DESKTOP GRID (md+) ──────────────────── */}
        <div className="hidden md:flex justify-center min-h-17">
          <div
            ref={desktopGridRef}
            className="relative flex w-full md:w-full lg:w-[950px] md:h-[396px] lg:h-[550px]"
          >
            {/* img1 — big left */}
            <div
              data-cell
              className="absolute overflow-hidden group rounded-[4px]"
              style={{ top: 0, width: "50%", height: "var(--img1-h, 300px)" }}
            >
              <img src="/gallery/g1.webp" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
            </div>

            {/* img2 — top middle */}
            <div
              data-cell
              className="absolute overflow-hidden group rounded-[4px]"
              style={{ top: 0, left: "51%", width: "24%", height: "var(--img2-h, 110px)" }}
            >
              <img src="/gallery/g11.webp" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
            </div>

            {/* img3 — top right */}
            <div
              data-cell
              className="absolute overflow-hidden group rounded-[4px]"
              style={{ top: 0, left: "76%", width: "24%", height: "var(--img3-h, 265px)" }}
            >
              <img src="/gallery/g3.webp" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
            </div>

            {/* img4 — overlaps img1 right edge */}
            <div
              data-cell
              className="absolute overflow-hidden group rounded-[4px]"
              style={{ top: "var(--img4-t, 120px)", left: "51%", width: "24%", height: "var(--img4-h, 300px)" }}
            >
              <img src="/gallery/g4.webp" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
            </div>

            {/* img5 */}
            <div
              data-cell
              className="absolute overflow-hidden group rounded-[4px]"
              style={{ top: "var(--img5-t, 275px)", left: "76%", width: "24%", height: "var(--img5-h, 265px)" }}
            >
              <img src="/gallery/g5.webp" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
            </div>

            {/* img6 */}
            <div
              data-cell
              className="absolute overflow-hidden group rounded-[4px]"
              style={{ top: "var(--img6-t, 310px)", left: 0, width: "24.5%", height: "var(--img6-h, 230px)" }}
            >
              <img src="/gallery/g6.webp" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
            </div>

            {/* img7 */}
            <div
              data-cell
              className="absolute overflow-hidden group rounded-[4px]"
              style={{ top: "var(--img7-t, 310px)", left: "25.5%", width: "24.5%", height: "var(--img7-h, 230px)" }}
            >
              <img src="/gallery/g7.webp" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
            </div>

            {/* img8 */}
            <div
              data-cell
              className="absolute overflow-hidden group rounded-[4px]"
              style={{ top: "var(--img8-t, 430px)", left: "51%", width: "24%", height: "var(--img8-h, 110px)" }}
            >
              <img src="/gallery/g10.webp" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
            </div>

            {/* CSS custom properties for md breakpoint */}
            <style>{`
              @media (min-width: 768px) and (max-width: 1023px) {
                .relative.flex.w-full {
                  --img1-h: 216px;
                  --img2-h: 79px;
                  --img3-h: 191px;
                  --img4-t: 86px;
                  --img4-h: 216px;
                  --img5-t: 198px;
                  --img5-h: 191px;
                  --img6-t: 223px;
                  --img6-h: 166px;
                  --img7-t: 223px;
                  --img7-h: 166px;
                  --img8-t: 310px;
                  --img8-h: 79px;
                }
              }
            `}</style>
          </div>
        </div>

        {/* ── BOTTOM BAR ───────────────────────────────────── */}
        <div ref={bottomBarRef} className="max-w-[550px] mx-auto">
          <div className="mt-8 bg-[#f0ece2] border border-[#6E7E45]/15 rounded-xl px-4 sm:px-6 py-4 sm:py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#4D5B2A] flex items-center justify-center flex-shrink-0">
                <Camera size={14} className="text-[#f5f0e7]" />
              </div>
              <p
                className={`${montserrat.className} text-[11px] sm:text-[12px] text-[#241A12]`}
                style={{ fontWeight: 400 }}
              >
                Quality is not just our promise,{" "}
                <span style={{ fontWeight: 700 }}>
                  it's what we do every single day.
                </span>
              </p>
            </div>
            <a
              href="https://wa.me/919448453609"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-stretch rounded-lg overflow-hidden flex-shrink-0"
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              <span className="bg-[#3f4a22] px-2 sm:px-3 flex items-center justify-center">
                <MessageCircle size={13} className="text-[#f5f0e7]" />
              </span>
              <span
                className={`${montserrat.className} bg-[#4D5B2A] px-3 sm:px-5 py-2.5 text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-[#f5f0e7]`}
                style={{ fontWeight: 600 }}
              >
                WhatsApp Us
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}