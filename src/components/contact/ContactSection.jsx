"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";
import {
  Phone, Mail, MapPin, MessageCircle, ArrowRight, ShieldCheck, ChevronDown,
} from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inputStyle =
  "h-[48px] sm:h-[54px] w-full rounded-[5px] border border-[#e3d8c8] bg-transparent px-4 text-[13px] sm:text-[14px] text-[#241A12] outline-none transition-all placeholder:text-[#9a8f81] focus:border-[#6E7E45]";

export default function ContactSection() {
  return (
    <section className="bg-[#f5f0e7] py-8 sm:py-10 md:py-8 lg:py-12 xl:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* ── GRID ─────────────────────────────────────────────────────────
            sm : 1-col stacked — left card on top, form below
            md : 2-col side by side, no fixed height
            lg : 2-col with fixed height (original)                       */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-[0.95fr_1.05fr] lg:h-[680px]">

          {/* ── LEFT ─────────────────────────────────────────────────────── */}
          <div className="h-full rounded-[2px] border border-[#e8e0d4] bg-transparent p-5 sm:p-6 md:p-6 lg:p-8">
            <div className="h-full flex flex-col">

              {/* Top Label */}
              <div className="text-center">
                <p className={`${montserrat.className} text-[11px] uppercase tracking-[0.22em] text-[#B08A3D]`}>
                  Get In Touch
                </p>
                <div className="mx-auto mt-3 h-[2px] w-12 bg-[#B08A3D]" />
              </div>

              {/* Heading
                  sm: 32px  md: 38px  lg: 48px  xl: 56px (original)     */}
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

              {/* Description
                  sm: 13px  md/lg/xl: 14px (original)                   */}
              <p className={`${montserrat.className} text-center text-[13px] sm:text-[13px] md:text-[13px] lg:text-[14px] xl:text-[14px] leading-7 text-[#4f4337]`}>
                Have a question, need assistance, or want to place a bulk order?
                Our team is here to help and will get back to you as soon as possible.
              </p>

              {/* Contact Info */}
              <div className="mt-5 sm:mt-6 space-y-1">
                <ContactItem icon={<Phone size={18} />} value="+91 94484 53609" subtitle="Mon - Sat, 9 AM - 6 PM" />
                <ContactItem icon={<Mail size={18} />} value="gvrfreshfoodsprivatelimited@gmail.com" subtitle="Response within 24 hours" />
                <ContactItem icon={<MapPin size={18} />} value="GVR Eggs Farm" subtitle="Tamil Nadu, India" />
              </div>

              {/* WhatsApp Box */}
              <div className="mt-auto pt-4 sm:pt-5">
                <a
  href="https://wa.me/919448453609"
  target="_blank"
  rel="noopener noreferrer"
  className="block transition-transform duration-300 hover:scale-[1.02]"
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

    <ArrowRight
      size={18}
      className="text-[#6E7E45] transition-transform duration-300 group-hover:translate-x-1"
    />
  </div>
</a>
              </div>
            </div>
          </div>

          {/* ── RIGHT ────────────────────────────────────────────────────── */}
          <div className="h-full rounded-[2px] border border-[#e8e0d4] bg-transparent p-5 sm:p-6 md:p-6 lg:p-8">
            <div className="h-full flex flex-col">

              <div className="text-center mb-5 sm:mb-6">
                <p className={`${montserrat.className} text-[11px] uppercase tracking-[0.22em] text-[#B08A3D]`}>
                  Send Us A Message
                </p>
                <div className="mx-auto mt-3 h-[2px] w-12 bg-[#B08A3D]" />
              </div>

              <form className="flex flex-col flex-1 space-y-3 sm:space-y-4">

                {/* Name + Phone — stacked on mobile, 2-col on sm+ */}
                <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                  <Field label="Full Name">
                    <input className={inputStyle} placeholder="Your name" />
                  </Field>
                  <Field label="Phone">
                    <input className={inputStyle} placeholder="Phone number" />
                  </Field>
                </div>

                <Field label="Email Address">
                  <input className={inputStyle} placeholder="Email address" />
                </Field>

                <Field label="Subject">
                  <div className="relative">
                    <select className={`${inputStyle} appearance-none`}>
                      <option>Select subject</option>
                      <option>Bulk Order</option>
                      <option>Partnership</option>
                      <option>General Inquiry</option>
                    </select>
                    <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9a8f81]" />
                  </div>
                </Field>

                <Field label="Message">
                  <textarea
                    rows={3}
                    placeholder="Write your message..."
                    className="w-full rounded-[5px] border border-[#e3d8c8] bg-transparent p-3 sm:p-4 text-[13px] sm:text-[14px] text-[#241A12] outline-none placeholder:text-[#9a8f81] focus:border-[#6E7E45]"
                  />
                </Field>

                <button
                  type="submit"
                  className={`${montserrat.className} mt-auto flex h-[48px] sm:h-[54px] items-center justify-center gap-2 rounded-xl bg-[#6E7E45] text-[13px] sm:text-[14px] font-semibold text-white transition hover:bg-[#5e6d3b]`}
                >
                  Send Message
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
        <p className="text-[12px] sm:text-[13px] font-medium text-[#6E7E45]">{value}</p>
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