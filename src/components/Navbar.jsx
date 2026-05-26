"use client";

import { Raleway } from "next/font/google";
import { useState, useEffect } from "react";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f8f4ee]/85 backdrop-blur-xl border-b border-[#e7ddd2]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="flex h-20 items-center justify-between">
          {/* ── Logo ───────────────────────── */}
          <a href="#home" className="flex items-center gap-3">
            {/* Logo Image */}
            <img
              src="logo.png"
              alt="GVR Fresh Foods"
              className="h-12 w-auto object-contain"
            />

            {/* Brand Text */}
            <div className="leading-none">
              <p
                className={`${raleway.className} text-[15px] tracking-[-0.3px] ${
                  scrolled ? "text-[#3E2F26]" : "text-white"
                }`}
                style={{ fontWeight: 700 }}
              >
                GVR Fresh Foods
              </p>

              <p
                className={`${raleway.className} mt-1 text-[11px] ${
                  scrolled ? "text-[#8B7355]" : "text-white/70"
                }`}
                style={{ fontWeight: 500 }}
              >
                Farm Fresh Eggs & Dry Fish
              </p>
            </div>
          </a>

          {/* ── Desktop Nav ───────────────── */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`${raleway.className} text-[14px] transition-colors duration-300 ${
                  scrolled
                    ? "text-[#5f4a3a] hover:text-[#8B5E3C]"
                    : "text-white/80 hover:text-white"
                }`}
                style={{ fontWeight: 600 }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ── Desktop CTA ───────────────── */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/919448453609"
              target="_blank"
              rel="noopener noreferrer"
              className={`${raleway.className} rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-[13px] text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#3E2F26] ${
                scrolled
                  ? "!border-[#d8c7b6] !bg-white/70 !text-[#5f4a3a]"
                  : ""
              }`}
              style={{ fontWeight: 600 }}
            >
              WhatsApp
            </a>

            <a
              href="tel:+919448453609"
              className={`${raleway.className} rounded-xl bg-[#8B5E3C] px-5 py-3 text-[13px] text-white transition-all duration-300 hover:bg-[#74492b]`}
              style={{ fontWeight: 700 }}
            >
              Call Now
            </a>
          </div>

          {/* ── Mobile Menu Button ────────── */}
          <button
            className="lg:hidden flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
                scrolled ? "bg-[#3E2F26]" : "bg-white"
              } ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />

            <span
              className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
                scrolled ? "bg-[#3E2F26]" : "bg-white"
              } ${menuOpen ? "opacity-0" : ""}`}
            />

            <span
              className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
                scrolled ? "bg-[#3E2F26]" : "bg-white"
              } ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ─────────────────── */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          menuOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-[#eadfd2] bg-[#f8f4ee] px-6 py-6">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`${raleway.className} text-[15px] text-[#5f4a3a]`}
                style={{ fontWeight: 600 }}
              >
                {link.label}
              </a>
            ))}

            <div className="flex gap-3 pt-4">
              <a
                href="tel:+919448453609"
                className={`${raleway.className} flex-1 rounded-xl bg-[#8B5E3C] px-4 py-3 text-center text-sm text-white`}
                style={{ fontWeight: 700 }}
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919448453609"
                className={`${raleway.className} flex-1 rounded-xl border border-[#d8c7b6] px-4 py-3 text-center text-sm text-[#5f4a3a]`}
                style={{ fontWeight: 600 }}
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