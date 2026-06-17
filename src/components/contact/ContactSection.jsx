"use client";

import { useEffect, useRef, useState } from "react";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inputStyle =
  "h-[48px] sm:h-[54px] w-full rounded-[5px] border border-[#e3d8c8] bg-transparent px-4 text-[13px] sm:text-[14px] text-[#241A12] outline-none transition-colors placeholder:text-[#9a8f81] focus:border-[#6E7E45]";

export default function ContactSection() {
  // ── Refs ──────────────────────────────────────────────
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Select subject",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ── Animations ────────────────────────────────────────
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // ── Left panel — slide from left ──────────────────
      // The left panel is a single cohesive info card.
      // One directional entrance keeps it clean.
      if (leftRef.current) {
        gsap.fromTo(
          leftRef.current,
          { opacity: 0, x: -36 },
          {
            opacity: 1,
            x: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: leftRef.current,
              start: "top 80%",
              once: true,
            },
          },
        );
      }

      // ── Right panel — slide from right ────────────────
      // Symmetric reveal: both panels open toward the center.
      if (rightRef.current) {
        gsap.fromTo(
          rightRef.current,
          { opacity: 0, x: 36 },
          {
            opacity: 1,
            x: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: rightRef.current,
              start: "top 80%",
              once: true,
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ── CTA hover ─────────────────────────────────────────
  const hoverIn = (e) =>
    gsap.to(e.currentTarget, {
      scale: 1.03,
      duration: 0.25,
      ease: "power2.out",
    });
  const hoverOut = (e) =>
    gsap.to(e.currentTarget, { scale: 1, duration: 0.25, ease: "power2.out" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setErrors({});
    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            "Thank you! Your enquiry has been sent successfully. We'll contact you soon.",
        });

        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "Select subject",
          message: "",
        });
      } else if (data.errors) {
        setErrors(data.errors);

        setStatus({
          type: "error",
          message: "Please correct the highlighted fields.",
        });
      } else {
        throw new Error();
      }
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#f5f0e7] py-8 sm:py-10 md:py-8 lg:py-12 xl:py-12"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-[0.95fr_1.05fr] lg:h-[680px]">
          {/* ── LEFT ─────────────────────────────────────── */}
          <div
            ref={leftRef}
            className="h-full rounded-[2px] border border-[#e8e0d4] bg-transparent p-5 sm:p-6 md:p-6 lg:p-8"
          >
            <div className="h-full flex flex-col">
              {/* Top Label */}
              <div className="text-center">
                <p
                  className={`${montserrat.className} text-[11px] uppercase tracking-[0.22em] text-[#B08A3D]`}
                >
                  Get In Touch
                </p>
                <div className="mx-auto mt-3 h-[2px] w-12 bg-[#B08A3D]" />
              </div>

              {/* Heading */}
              <h2
                className={`${cormorant.className} mt-4 sm:mt-5 text-center leading-[0.9] font-semibold text-[#241A12]
                  text-[32px] sm:text-[32px] md:text-[36px] lg:text-[48px] xl:text-[56px]`}
              >
                We'd Love to Hear From You
              </h2>

              {/* Divider */}
              <div className="my-5 sm:my-6 flex items-center justify-center gap-3">
                <div className="h-px w-16 sm:w-20 bg-[#d8d0c2]" />
                <div className="w-2 h-2 rounded-full bg-[#6E7E45]" />
                <div className="h-px w-16 sm:w-20 bg-[#d8d0c2]" />
              </div>

              {/* Description */}
              <p
                className={`${montserrat.className} text-center text-[13px] sm:text-[13px] md:text-[13px] lg:text-[14px] xl:text-[14px] leading-7 text-[#4f4337]`}
              >
                Have a question, need assistance, or want to place a bulk order?
                Our team is here to help and will get back to you as soon as
                possible.
              </p>

              {/* Contact Info */}
              <div className="mt-5 sm:mt-6 space-y-1">
                <ContactItem
                  icon={<Phone size={18} />}
                  value="+91 94484 53609"
                  subtitle="Mon - Sat, 9 AM - 6 PM"
                />
                <ContactItem
                  icon={<Mail size={18} />}
                  value="gvrfreshfoodsprivatelimited@gmail.com"
                  subtitle="Response within 24 hours"
                />
                <ContactItem
                  icon={<MapPin size={18} />}
                  value="GVR Eggs Farm"
                  subtitle="SF No 6/2A1, Plot No 6, Upkar Royal Garden, Sector I, Hosur Industrial
Complex, Krishnagiri, Hosur, Tamil Nadu, India – 635126"
                />
              </div>

              {/* WhatsApp Box */}
              <div className="mt-auto pt-4 sm:pt-5">
                <a
                  href="https://wa.me/919448453609"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  onMouseEnter={hoverIn}
                  onMouseLeave={hoverOut}
                >
                  <div className="flex items-center justify-between rounded-2xl bg-[#ddd4bd] px-4 sm:px-5 py-3 sm:py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#6E7E45]">
                        <MessageCircle size={16} className="text-white" />
                      </div>
                      <div>
                        <p
                          className={`${montserrat.className} text-[12px] sm:text-[13px] text-[#241A12]`}
                          style={{ fontWeight: 600 }}
                        >
                          Faster Support
                        </p>
                        <p
                          className={`${montserrat.className} text-[11px] sm:text-[12px] text-[#6E7E45]`}
                        >
                          Chat on WhatsApp
                        </p>
                      </div>
                    </div>
                    <ArrowRight size={18} className="text-[#6E7E45]" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* ── RIGHT ────────────────────────────────────── */}
          <div
            ref={rightRef}
            className="h-full rounded-[2px] border border-[#e8e0d4] bg-transparent p-5 sm:p-6 md:p-6 lg:p-8"
          >
            <div className="h-full flex flex-col">
              <div className="text-center mb-5 sm:mb-6">
                <p
                  className={`${montserrat.className} text-[11px] uppercase tracking-[0.22em] text-[#B08A3D]`}
                >
                  Send Us A Message
                </p>
                <div className="mx-auto mt-3 h-[2px] w-12 bg-[#B08A3D]" />
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col flex-1 space-y-3 sm:space-y-4"
              >
                {" "}
                <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                  <Field label="Full Name">
                    <>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`${inputStyle} ${
                          errors.name ? "border-red-400" : ""
                        }`}
                        placeholder="Your name"
                      />

                      <div className="h-4 mt-1">
                        {errors.name && (
                          <p className="text-xs text-red-600">{errors.name}</p>
                        )}
                      </div>
                    </>{" "}
                  </Field>
                  <Field label="Phone">
                    <>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`${inputStyle} ${
                          errors.phone ? "border-red-400" : ""
                        }`}
                        placeholder="Phone number"
                      />

                      <div className="h-4 mt-1">
                        {errors.phone && (
                          <p className="text-xs text-red-600">{errors.phone}</p>
                        )}
                      </div>
                    </>{" "}
                  </Field>
                </div>
                <Field label="Email Address">
                  <>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`${inputStyle} ${
                        errors.email ? "border-red-400" : ""
                      }`}
                      placeholder="Email address"
                    />

                    <div className="h-4 mt-1">
                      {errors.email && (
                        <p className="text-xs text-red-600">{errors.email}</p>
                      )}
                    </div>
                  </>{" "}
                </Field>
                <Field label="Subject">
                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`${inputStyle} appearance-none ${
                        errors.subject ? "border-red-400" : ""
                      }`}
                    >
                      <option>Select subject</option>
                      <option>Bulk Order</option>
                      <option>Partnership</option>
                      <option>General Inquiry</option>
                    </select>

                    <ChevronDown
                      size={18}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9a8f81]"
                    />
                  </div>

                  {/* Validation message */}
                  <div className="h-4 mt-1">
                    {errors.subject && (
                      <p className="text-xs text-red-600">{errors.subject}</p>
                    )}
                  </div>
                </Field>
                <Field label="Message">
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className={`w-full rounded-[5px] border bg-transparent p-3 sm:p-4 text-[13px] sm:text-[14px] text-[#241A12] outline-none placeholder:text-[#9a8f81] focus:border-[#6E7E45] transition-colors ${
                      errors.message ? "border-red-400" : "border-[#e3d8c8]"
                    }`}
                  />

                  <div className="h-4 mt-1">
                    {errors.message && (
                      <p className="text-xs text-red-600">{errors.message}</p>
                    )}
                  </div>
                </Field>
                {status.message && (
                  <div
                    className={`rounded-xl px-4 py-3 text-sm ${
                      status.type === "success"
                        ? "bg-[#edf4df] border border-[#6E7E45] text-[#4D5B2A]"
                        : "bg-red-50 border border-red-200 text-red-700"
                    }`}
                  >
                    {status.message}
                  </div>
                )}
                <button
                  type="submit"
                  className={`${montserrat.className}
  mt-auto flex h-[48px] sm:h-[54px]
  items-center justify-center gap-2
  rounded-xl bg-[#6E7E45]
  text-[13px] sm:text-[14px]
  font-semibold text-white
  transition-colors
  hover:bg-[#5e6d3b]
  disabled:opacity-70
  disabled:cursor-not-allowed
`}
                  onMouseEnter={hoverIn}
                  onMouseLeave={hoverOut}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, value, subtitle }) {
  return (
    <div className="flex gap-3 border-b border-[#ebe4d8] py-2 sm:py-3 last:border-none">
      <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-[#f3eee3] text-[#6E7E45]">
        {icon}
      </div>
      <div>
        <p className="text-[12px] sm:text-[13px] font-medium text-[#6E7E45]">
          {value}
        </p>
        <p className="text-[11px] sm:text-[12px] text-[#5c5246]">{subtitle}</p>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="mb-1.5 sm:mb-2 block text-[12px] sm:text-[13px] font-semibold text-[#241A12]">
        {label}
      </label>
      {children}
    </div>
  );
}
