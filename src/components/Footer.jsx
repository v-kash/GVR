"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Phone, MapPin, Mail, ArrowRight } from "lucide-react";
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

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Lab Reports", href: "/lab-reports" },

  { label: "Contact", href: "/contact" },
];

const products = [
  { label: "Country Eggs", href: "/products#eggs" },
  { label: "Brown Eggs", href: "/products#eggs" },
  { label: "White Eggs", href: "/products#eggs" },
  { label: "Duck Eggs", href: "/products#eggs" },
  { label: "Kadaknath Eggs", href: "/products#eggs" },
  { label: "Premium Dry Fish", href: "/products#fish" },
];

export default function Footer() {
  const footerRef = useRef(null);
  const hoverIn = (e) => {
    gsap.to(e.currentTarget, {
      x: 4,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const hoverOut = (e) => {
    gsap.to(e.currentTarget, {
      x: 0,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) return;

      const ctx = gsap.context(() => {
        // gsap.to("[data-float-leaf-left]", {
        //   y: -16,
        //   duration: 3.8,
        //   ease: "sine.inOut",
        //   repeat: -1,
        //   yoyo: true,
        // });

        // gsap.to("[data-float-leaf-right]", {
        //   y: -18,
        //   duration: 4.4,
        //   ease: "sine.inOut",
        //   repeat: -1,
        //   yoyo: true,
        // });

        gsap.from("[data-footer-brand]", {
          opacity: 0,
          y: 24,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            once: true,
          },
        });

        gsap.from("[data-footer-link]", {
          opacity: 0,
          y: 20,
          stagger: 0.08,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            once: true,
          },
        });

        gsap.from("[data-footer-product]", {
          opacity: 0,
          y: 20,
          stagger: 0.08,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            once: true,
          },
        });

        gsap.from("[data-contact-item]", {
          opacity: 0,
          y: 20,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            once: true,
          },
        });

        gsap.from("[data-footer-divider]", {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            once: true,
          },
        });

        gsap.from("[data-footer-bottom]", {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }, footerRef);

      return () => ctx.revert();
    },
    { scope: footerRef },
  );
  return (
    <footer ref={footerRef} className="relative bg-[#1e2912] overflow-hidden">
      {/* Decorative leaf — bottom left */}
      <div
        data-float-leaf-left
        className="pointer-events-none absolute bottom-0 left-0 w-40 lg:w-56 opacity-10"
      >
        <img
          src="/leaf-decoration.png"
          alt=""
          className="w-full scale-x-[-1]"
        />
      </div>
      {/* Decorative leaf — top right */}
      <div
        data-float-leaf-right
        className="pointer-events-none absolute bottom-0 right-0 w-40 lg:w-56 opacity-10"
      >
        <img src="/leaf-decoration.png" alt="" className="w-full" />
      </div>

      {/* ── MAIN FOOTER CONTENT ──────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-16 pt-16 pb-8">
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 lg:gap-8">
          {/* ── COL 1: Brand ── */}
          <div data-footer-brand>
            {/* Logo + name */}
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/GVRLogoF.png"
                alt="GVR Fresh Foods"
                className="h-12 w-auto object-contain"
              />
              <div className="leading-none"></div>
            </div>

            {/* Tagline */}
            <p
              className={`${cormorant.className} text-[20px] italic text-[#c5db8e] leading-snug mb-4`}
              style={{ fontWeight: 400 }}
            >
              From our farm,
              <br />
              to your table.
            </p>

            <p
              className={`${montserrat.className} text-[12px] text-[#f5f0e7]/50 leading-[1.8] max-w-[260px]`}
              style={{ fontWeight: 400 }}
            >
              Premium farm fresh eggs and dry fish delivered daily with hygiene,
              care and trusted quality.
            </p>
          </div>

          {/* ── COL 2: Quick Links ── */}
          <div data-footer-links>
            <p
              className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45] mb-5`}
              style={{ fontWeight: 600 }}
            >
              Quick Links
            </p>
            <div className="h-px bg-[#6E7E45]/20 mb-5" />
            <ul className="flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <li data-footer-link key={i}>
                  <a
                    href={link.href}
                    className={`${montserrat.className} text-[12px] text-[#f5f0e7]/60 hover:text-[#c5db8e] transition-colors duration-200 flex items-center gap-2 group`}
                    style={{ fontWeight: 400 }}
                  >
                    <ArrowRight
                      size={11}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#6E7E45]"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 3: Products ── */}
          <div data-footer-products>
            <p
              className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45] mb-5`}
              style={{ fontWeight: 600 }}
            >
              Our Products
            </p>
            <div className="h-px bg-[#6E7E45]/20 mb-5" />
            <ul className="flex flex-col gap-3">
              {products.map((p, i) => (
                <li data-footer-product key={i}>
                  <a
                    href={p.href}
                    className={`${montserrat.className} text-[12px] text-[#f5f0e7]/60 hover:text-[#c5db8e] transition-colors duration-200 flex items-center gap-2 group`}
                    style={{ fontWeight: 400 }}
                  >
                    <ArrowRight
                      size={11}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#6E7E45]"
                    />
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 4: Contact ── */}
          <div data-footer-contact>
            <p
              className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45] mb-5`}
              style={{ fontWeight: 600 }}
            >
              Get In Touch
            </p>
            <div className="h-px bg-[#6E7E45]/20 mb-5" />

            <div className="flex flex-col gap-4">
              {/* Phone */}
              <div data-contact-item className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#4D5B2A]/40 border border-[#6E7E45]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={13} className="text-[#c5db8e]" />
                </div>
                <div>
                  <p
                    className={`${montserrat.className} text-[10px] uppercase tracking-[0.1em] text-[#f5f0e7]/40 mb-0.5`}
                    style={{ fontWeight: 500 }}
                  >
                    Call Us
                  </p>
                  <a
                    href="tel:+919448453609"
                    className={`${montserrat.className} text-[13px] text-[#f5f0e7]/80 hover:text-[#c5db8e] transition-colors`}
                    style={{ fontWeight: 500 }}
                  >
                    +91 94484 53609
                  </a>
                </div>
              </div>

              {/* Email */}
              <div data-contact-item className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#4D5B2A]/40 border border-[#6E7E45]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={13} className="text-[#c5db8e]" />
                </div>
                <div>
                  <p
                    className={`${montserrat.className} text-[10px] uppercase tracking-[0.1em] text-[#f5f0e7]/40 mb-0.5`}
                    style={{ fontWeight: 500 }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:info@gvrfreshfoods.com"
                    className={`${montserrat.className} text-[13px] text-[#f5f0e7]/80 hover:text-[#c5db8e] transition-colors break-all`}
                    style={{ fontWeight: 500 }}
                  >
                    gvrfreshfoodsprivatelimited@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div data-contact-item className=" flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#4D5B2A]/40 border border-[#6E7E45]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={13} className="text-[#c5db8e]" />
                </div>
                <div>
                  <p
                    className={`${montserrat.className} text-[10px] uppercase tracking-[0.1em] text-[#f5f0e7]/40 mb-0.5`}
                    style={{ fontWeight: 500 }}
                  >
                    Location
                  </p>
                  <p
                    className={`${montserrat.className} text-[13px] text-[#f5f0e7]/80 leading-[1.6]`}
                    style={{ fontWeight: 400 }}
                  >
                    SF No 6/2A1, Plot No 6, Upkar Royal Garden, Sector I, Hosur
                    Industrial Complex, Krishnagiri, Hosur, Tamil Nadu, India –
                    635126
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── DIVIDER ──────────────────────────────────────── */}
        <div data-footer-divider className=" mt-12 h-px bg-[#6E7E45]/15" />

        {/* ── BOTTOM BAR ───────────────────────────────────── */}
        <div className="mt-7 flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p
            data-footer-bottom
            className={`${montserrat.className} text-[11px] text-[#f5f0e7]/30`}
            style={{ fontWeight: 400 }}
          >
            © {new Date().getFullYear()} GVR Fresh Foods Pvt. Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
