"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { MapPin, Leaf, Navigation } from "lucide-react";

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
  return (
    <section className="relative bg-[#f5f0e7] overflow-hidden py-8 sm:py-10 md:py-12 lg:py-16 xl:py-16">

      <div className="mx-auto max-w-7xl px-6 lg:px-16">

        {/* ── HEADING ──────────────────────────────────────────────────── */}
        <div className="text-center mb-8 sm:mb-8 md:mb-10 lg:mb-10">

          {/* Headline
              FIXED: xl: text-[72px] had a space — broken class
              sm: 34px  md: 44px  lg: 56px  xl: 72px                    */}
          <h2
            className={`${cormorant.className} font-semibold text-[#241A12] leading-tight
              text-[34px] sm:text-[34px] md:text-[44px] lg:text-[62px] xl:text-[72px]`}
          >
            Find Us Here
          </h2>

          {/* Subtext */}
          <p
            className={`${montserrat.className} text-[13px] sm:text-[13px] md:text-[14px] lg:text-[14px] xl:text-[15px] text-[#5f5146] leading-[1.8] mt-2`}
            style={{ fontWeight: 400 }}
          >
            We proudly serve customers across the region.
          </p>
        </div>

        {/* ── MAP ──────────────────────────────────────────────────────────
            Height scaled per breakpoint — shorter on mobile               */}
        <div className="rounded-[5px] overflow-hidden border border-[#e8e0d4] shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62726.45!2d78.82!3d10.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfb0d0000001%3A0x1234567890abcdef!2sPudukkottai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62726.45!2d78.82!3d10.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfb0d0000001%3A0x1234567890abcdef!2sPudukkottai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62726.45!2d78.82!3d10.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfb0d0000001%3A0x1234567890abcdef!2sPudukkottai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
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

        {/* ── BOTTOM INFO BAR ──────────────────────────────────────────────
            Mobile: 1-col stacked
            md    : 2-col (location + serving), directions below
            lg+   : original 3-col                                        */}
        <div className="mt-4 bg-[#5e6d3b] border border-[#4D5B2A] rounded-[5px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">

            {/* Location */}
            <div className="flex items-center gap-3 sm:gap-4 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 border-b md:border-b-0 lg:border-r border-[#f5f0e7]/15">
              <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full border border-[#f5f0e7]/20 bg-[#f5f0e7]/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={16} className="text-[#c5db8e]" strokeWidth={1.5} />
              </div>
              <div>
                <p
                  className={`${montserrat.className} text-[13px] sm:text-[13px] md:text-[14px] text-[#f5f0e7]`}
                  style={{ fontWeight: 700 }}
                >
                  Pudukkottai, Tamil Nadu
                </p>
                <p
                  className={`${montserrat.className} text-[11px] sm:text-[11px] md:text-[12px] text-[#f5f0e7]/60 mt-0.5`}
                  style={{ fontWeight: 400 }}
                >
                  Karnataka, India
                </p>
              </div>
            </div>

            {/* Serving area */}
            <div className="flex items-center gap-3 sm:gap-4 px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 border-b md:border-b-0 md:border-r lg:border-r border-[#f5f0e7]/15">
              <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full border border-[#f5f0e7]/20 bg-[#f5f0e7]/10 flex items-center justify-center flex-shrink-0">
                <Leaf size={16} className="text-[#c5db8e]" strokeWidth={1.5} />
              </div>
              <p
                className={`${montserrat.className} text-[12px] sm:text-[12px] md:text-[13px] text-[#f5f0e7]/80 leading-[1.7]`}
                style={{ fontWeight: 400 }}
              >
                Serving households, restaurants,<br />
                hotels and retailers across the region.
              </p>
            </div>

            {/* Get Directions
                md: spans 2 cols and centers  lg+: single col original   */}
            <div className="flex items-center justify-center px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 md:col-span-2 lg:col-span-1">
              <a
                href="https://maps.google.com/?q=Pudukkottai,Tamil+Nadu,India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-[#f5f0e7]/30 rounded-lg px-5 sm:px-6 py-3 sm:py-3.5 transition-all duration-200 hover:border-[#c5db8e] hover:bg-[#f5f0e7]/10 group"
              >
                <Navigation size={15} className="text-[#c5db8e] group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
                <span
                  className={`${montserrat.className} text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-[#f5f0e7]`}
                  style={{ fontWeight: 600 }}
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