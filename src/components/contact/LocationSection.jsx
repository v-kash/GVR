"use client";

import { useEffect, useRef } from "react";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { MapPin, Leaf, Navigation } from "lucide-react";
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

export default function LocationSection() {
  // ── Refs ──────────────────────────────────────────────
  const sectionRef    = useRef(null);
  const headingRef    = useRef(null);
  const subtextRef    = useRef(null);
  const mapRef        = useRef(null);
  const bottomBarRef  = useRef(null);

  // ── Animations ────────────────────────────────────────
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      [headingRef, subtextRef, mapRef, bottomBarRef].forEach((r) => {
        if (r.current)
          gsap.set(r.current, { opacity: 1, y: 0 });
      });
      return;
    }

    const ctx = gsap.context(() => {
      // ── Initial hidden states ──────────────────────────
      gsap.set(
        [
          headingRef.current,
          subtextRef.current,
          mapRef.current,
          bottomBarRef.current,
        ].filter(Boolean),
        { opacity: 0 }
      );

      // ── Scroll-triggered timeline ──────────────────────
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
        );
      }

      if (subtextRef.current) {
        tl.fromTo(
          subtextRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.35"
        );
      }

      if (mapRef.current) {
        tl.fromTo(
          mapRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.2"
        );
      }

      if (bottomBarRef.current) {
        tl.fromTo(
          bottomBarRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.3"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f5f0e7] overflow-hidden py-8 sm:py-10 md:py-12 lg:py-16 xl:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16">

        {/* ── HEADING ───────────────────────────────────────── */}
        <div className="text-center mb-8 sm:mb-8 md:mb-10 lg:mb-10">
          <h2
            ref={headingRef}
            className={`${cormorant.className} font-semibold text-[#241A12] leading-tight opacity-0
              text-[34px] sm:text-[34px] md:text-[44px] lg:text-[62px] xl:text-[72px]`}
          >
            Find Us Here
          </h2>

          <p
            ref={subtextRef}
            className={`${montserrat.className} text-[13px] sm:text-[13px] md:text-[14px] lg:text-[14px] xl:text-[15px] text-[#5f5146] leading-[1.8] mt-2 font-normal opacity-0`}
          >
            We proudly serve customers across the region.
          </p>
        </div>

        {/* ── MAP ───────────────────────────────────────────── */}
        <div
          ref={mapRef}
          className="rounded-[5px] overflow-hidden border border-[#e8e0d4] shadow-[0_4px_24px_rgba(0,0,0,0.06)] opacity-0"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3890.9583919342444!2d77.7889823750732!3d12.781212787516898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDQ2JzUyLjQiTiA3N8KwNDcnMjkuNiJF!5e0!3m2!1sen!2sin!4v1781178468269!5m2!1sen!2sin"
            width="100%"
            height="260"
            className="block sm:hidden"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="GVR Farm Foods Location"
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3890.9583919342444!2d77.7889823750732!3d12.781212787516898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDQ2JzUyLjQiTiA3N8KwNDcnMjkuNiJF!5e0!3m2!1sen!2sin!4v1781178468269!5m2!1sen!2sin"
            width="100%"
            height="320"
            className="hidden sm:block md:hidden"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="GVR Farm Foods Location"
          />
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3890.9583919342444!2d77.7889823750732!3d12.781212787516898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDQ2JzUyLjQiTiA3N8KwNDcnMjkuNiJF!5e0!3m2!1sen!2sin!4v1781178468269!5m2!1sen!2sin"
            width="100%"
            height="280"
            className="hidden md:block"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="GVR Farm Foods Location"
          />
        </div>

        {/* ── BOTTOM INFO BAR ───────────────────────────────── */}
        <div
          ref={bottomBarRef}
          className="mt-4 bg-[#5e6d3b] border border-[#4D5B2A] rounded-[5px] overflow-hidden opacity-0"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">

            {/* Location */}
            <div className="flex items-center gap-3 sm:gap-4 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 border-b md:border-b-0 lg:border-r border-[#f5f0e7]/15">
              <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full border border-[#f5f0e7]/20 bg-[#f5f0e7]/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={16} className="text-[#c5db8e]" strokeWidth={1.5} />
              </div>
              <div>
                <p
                  className={`${montserrat.className} text-[13px] sm:text-[13px] md:text-[14px] text-[#f5f0e7] font-bold`}
                >
                  Krishnagiri, Hosur
                </p>
                <p
                  className={`${montserrat.className} text-[11px] sm:text-[11px] md:text-[12px] text-[#f5f0e7]/60 mt-0.5 font-normal`}
                >
                  Tamil Nadu, India
                </p>
              </div>
            </div>

            {/* Serving area */}
            <div className="flex items-center gap-3 sm:gap-4 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 border-b md:border-b-0 md:border-r lg:border-r border-[#f5f0e7]/15">
              <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full border border-[#f5f0e7]/20 bg-[#f5f0e7]/10 flex items-center justify-center flex-shrink-0">
                <Leaf size={16} className="text-[#c5db8e]" strokeWidth={1.5} />
              </div>
              <p
                className={`${montserrat.className} text-[12px] sm:text-[12px] md:text-[13px] text-[#f5f0e7]/80 leading-[1.7] font-normal`}
              >
                Serving households, restaurants,<br />
                hotels and retailers across the region.
              </p>
            </div>

            {/* Get Directions */}
            <div className="flex items-center justify-center px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 md:col-span-2 lg:col-span-1">
              <a
                href="https://www.google.com/maps/place/12%C2%B046'52.4%22N+77%C2%B047'29.6%22E/@12.7812128,77.7889824,17z/data=!3m1!4b1!4m4!3m3!8m2!3d12.7812128!4d77.7915573?hl=en&entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-[#f5f0e7]/30 rounded-lg px-5 sm:px-6 py-3 sm:py-3.5 transition-all duration-200 hover:border-[#c5db8e] hover:bg-[#f5f0e7]/10 group"
              >
                <Navigation size={15} className="text-[#c5db8e] group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
                <span
                  className={`${montserrat.className} text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-[#f5f0e7] font-semibold`}
                >
                  Get Directions
                </span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}



<iframe  width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>