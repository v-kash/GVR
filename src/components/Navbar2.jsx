"use client";

import { Montserrat } from "next/font/google";
import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Always start at top on refresh
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 5);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#f5f0e7]/90 backdrop-blur-2xl  shadow-[0_4px_24px_rgba(110,126,69,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* ── Logo ─────────────────────────── */}
          <a href="#home" className="flex items-center gap-2 flex-shrink-0 ">
            <img
              src="/GVRLogo.png"
              alt="GVR Fresh Foods"
              className="h-12 w-auto object-contain"
            />
           
          </a>

          {/* ── Desktop Nav ──────────────────── */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`${montserrat.className} text-[11px] uppercase tracking-[0.12em] transition-all duration-300 ${
                  scrolled
                    ? "text-[#5f5146] hover:text-[#4D5B2A]"
                    : "text-[#241A12]/80 hover:text-[#95af55]"
                }`}
                style={{ fontWeight: 500 }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ── Desktop CTA ──────────────────── */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href="https://wa.me/919448453609"
              target="_blank"
              rel="noopener noreferrer"
              className={`${montserrat.className} inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-[10px] uppercase tracking-[0.12em] transition-all duration-300 ${
                scrolled
                  ? "border-[#6E7E45]/30 text-[#4D5B2A] hover:bg-[#6E7E45]/10"
                  : "border-[#241A12]/20 text-[#241A12]/70 hover:border-[#6E7E45]/40 hover:text-[#4D5B2A]"
              }`}
              style={{ fontWeight: 500 }}
            >
              WhatsApp
            </a>
          </div>

          {/* ── Mobile right side: ORDER NOW + hamburger ── */}
          <div className="lg:hidden flex items-center gap-3 flex-shrink-0">
            {/* ORDER NOW split button — mobile only */}

            {/* Hamburger */}
            <button
              className="flex flex-col gap-[5px] p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`h-px w-6 rounded-full bg-[#241A12] transition-all duration-300 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-6 rounded-full bg-[#241A12] transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-px w-6 rounded-full bg-[#241A12] transition-all duration-300 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ──────────────────────── */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          menuOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-[#6E7E45]/15 bg-[#f5f0e7]/97 backdrop-blur-xl px-6 py-6">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`${montserrat.className} text-[11px] uppercase tracking-[0.15em] text-[#5f5146] transition-colors duration-300 hover:text-[#4D5B2A]`}
                style={{ fontWeight: 500 }}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile menu bottom CTAs */}
            <div className="flex gap-3 pt-2 border-t border-[#6E7E45]/10">
              <a
                href="tel:+919448453609"
                className="flex-1 inline-flex items-stretch rounded-lg overflow-hidden"
              >
                <span className="bg-[#3f4a22] px-3.5 flex items-center justify-center">
                  <Phone size={14} className="text-[#f5f0e7]" />
                </span>
                <span
                  className={`${montserrat.className} flex-1 bg-[#4D5B2A] px-4 py-3 text-center text-[10px] uppercase tracking-[0.12em] text-[#f5f0e7]`}
                  style={{ fontWeight: 500 }}
                >
                  Call Now
                </span>
              </a>
              <a
                href="https://wa.me/919448453609"
                target="_blank"
                rel="noopener noreferrer"
                className={`${montserrat.className} flex-1 rounded-lg border border-[#6E7E45]/30 bg-white/60 px-4 py-3 text-center text-[10px] uppercase tracking-[0.12em] text-[#4D5B2A]`}
                style={{ fontWeight: 500 }}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
