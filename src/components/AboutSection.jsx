"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500"],
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

const stats = [
  {
    icon: "/icons/Untitled-2.png",
    top: "Trusted by",
    num: "1000+",
    bottom: "Customers",
  },
  {
    icon: "/icons/Untitled-3.png",
    top: "Delivering",
    num: "10M+",
    bottom: "Eggs Monthly",
  },
  {
    icon: "/icons/Untitled-4.png",
    top: "Serving",
    num: "100+",
    bottom: "Cities",
  },
  {
    icon: "/icons/Untitled-5.png",
    top: "More than",
    num: "50+",
    bottom: "Business Partners",
  },
];

const features = [
  {
    icon: "/icons/Shield.png",
    title: "Hygienic & Safe",
    desc: "Strict hygiene and handling standards at every step.",
  },
  {
    icon: "/icons/hen.png",
    title: "Farm Fresh Quality",
    desc: "Sourced from trusted farms with proper care and nutrition.",
  },
  {
    icon: "/icons/truck.png",
    title: "Timely Delivery",
    desc: "Reliable supply chain ensuring fresh eggs, delivered on time.",
  },
  {
    icon: "/icons/Assure.png",
    title: "Quality Assured",
    desc: "Every egg is quality checked for size, cleanliness & freshness.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f5f0e7] py-20 lg:py-16"
    >
      {/* Decorative leaf — bottom left */}
      <div className="pointer-events-none absolute bottom-0 left-[-100px] w-60 opacity-10">
        <img src="/leaf-decoration.png" alt="" className="w-full" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        {/* ── TOP: Left text + Right image grid ───────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT — Text */}
          <div>
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <div className="flex flex-col items-center">
                <img
                  src="/icons/Untitle1.png"
                  alt=""
                  className="w-8 h-8 object-contain opacity-70"
                />
                {/* underline under leaf */}
                <div className="mb-2 border-t border-[#d8d2c4] w-10" />{" "}
              </div>

              <div className="flex flex-col">
                <p
                  className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`}
                  style={{ fontWeight: 500 }}
                >
                  Our Story
                </p>

                {/* underline under text */}
                <div className="mt-2 h-[0.5px] w-[85px] bg-[#d8d2c4]" />
              </div>
            </div>

            {/* Headline */}
            <h2
              className={`${cormorant.className} leading-[1.0] text-[#241A12]`}
            >
              <span className="block text-[48px] lg:text-[64px] font-semibold">
                From Our Farm,
              </span>
              <span className="block text-[48px] lg:text-[64px] italic font-medium text-[#6E7E45]">
                To Your Table.
              </span>
            </h2>

            {/* Sub tagline */}
            <div className=" flex items-center gap-3">
              <p
                className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#735033]`}
                style={{ fontWeight: 600 }}
              >
                Freshness. Quality. Trust. Every Time.
              </p>
              <div className="flex-1 h-px bg-[#6E7E45]/25" />
              <img
                src="/icons/Untitle1.png"
                alt=""
                className="w-8 h-8 object-contain opacity-50"
              />
            </div>

            {/* Body text */}
            <div
              className={`${montserrat.className} mt-6 space-y-4 text-[13px] lg:text-[14px] leading-7 text-[#5f5146]`}
              style={{ fontWeight: 400 }}
            >
              <p>
                At GVR Fresh Foods, our journey began with a simple belief —
                that everyone deserves access to fresh, safe, and nutritious
                eggs every day. What started as a small step has grown into a
                trusted supply network serving thousands of happy customers.
              </p>
              {/* <p>
                We work closely with trusted farms, follow strict hygiene and
                quality standards, and ensure every egg reaches you fresh, on
                time, and with care.
              </p>
              <p>
                Whether it's your home, your business, or your customers — we
                are proud to be the partner you can rely on.
              </p> */}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-0">
              {stats.map((s, i) => (
                <div key={i} className="flex items-center">
                  {/* Stat item */}
                  <div className="flex-1 flex flex-col items-center gap-1.5 py-5 px-4">
                    <div className="w-14 h-14 rounded-full bg-transparent border border-[#6E7E45]/20 flex items-center justify-center">
                      <img
                        src={s.icon}
                        alt=""
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <p
                      className={`${montserrat.className} text-[10px] text-[#8B7355] text-center mt-2`}
                      style={{ fontWeight: 400 }}
                    >
                      {s.top}
                    </p>
                    <p
                      className={`${montserrat.className} text-[20px] font-semibold text-[#4D5B2A] leading-none`}
                    >
                      {s.num}
                    </p>
                    <p
                      className={`${montserrat.className} text-[10px] text-[#5f5146] text-center`}
                      style={{ fontWeight: 500 }}
                    >
                      {s.bottom}
                    </p>
                  </div>

                  {/* Divider — hidden after last item */}
                  {i !== stats.length - 1 && (
                    <div className="h-26 w-[0.5px] bg-[#6E7E45]/20 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Image collage */}
          <div className="relative w-full max-w-[620px] mx-auto pb-28 ">
            {/* MAIN IMAGE */}
            <div className="relative h-[320px] lg:h-[420px]   overflow-hidden">
              <img
                src="/images/aboutmain2.png"
                alt="Farm fresh eggs"
                className="w-full h-[320px] lg:h-[340px] object-cover rounded-[8px] "
              />

              {/* warm overlay */}
            </div>

            {/* BADGE */}
            {/* PAPER BADGE */}
            <div
              className="
    absolute
    left-[-40px]
    top-[190px]
    lg:top-[120px]
    z-30
    w-[110px]
    lg:w-[125px]
    drop-shadow-[0_10px_25px_rgba(0,0,0,0.18)]
    rotate-10
  "
            >
              <img
                src="/badge.png"
                alt="Farm Fresh Badge"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* LEFT POLAROID */}
            <div
              className="
    absolute
    left-[-18px]
    bottom-[38px]
    lg:bottom-[40px]
    rotate-[-6deg]
    z-20
    bg-[#fffdf9]
    pt-2
    px-2
    pb-2
    rounded-[6px]
    shadow-[0_20px_45px_rgba(0,0,0,0.14)]
    w-[250px]
    lg:w-[300px]
  "
            >
              <div className="overflow-hidden rounded-[3px]">
                <img
                  src="/images/Quality.png"
                  alt="Fresh eggs"
                  className="w-full h-[150px] lg:h-[175px] object-cover"
                />
              </div>

              <p
                className={`${caveat.className} text-center text-[18px] text-[#8d7b67] mt-2`}
              >
                Care in every step ♡
              </p>
            </div>

            {/* RIGHT POLAROID */}
            <div
              className="
    absolute
    left-[240px]
    bottom-[10px]
    rotate-[6deg]
    z-10
    bg-[#fffdf9]
    pt-2
    px-2
    pb-2
    rounded-[6px]
    shadow-[0_25px_50px_rgba(0,0,0,0.16)]
    w-[250px]
    lg:w-[280px]
  "
            >
              <div className="overflow-hidden rounded-[3px]">
                <img
                  src="/images/Delivary.png"
                  alt="Farm sunset"
                  className="w-full h-[150px] lg:h-[165px] object-cover"
                />
              </div>

              <p
                className={`${caveat.className} text-center text-[18px] text-[#8d7b67] mt-2`}
              >
                From our farm to your family ♡
              </p>
            </div>

            {/* LEAF DECORATION */}
            <img
              src="/leaf-decoration.png"
              alt=""
              className="
      absolute
      right-[-30px]
      bottom-[20px]
      w-[80px]
      lg:w-[125px]
      opacity-80
      
    "
            />
          </div>
        </div>

        {/* ── FEATURES ROW ─────────────────────────────────── */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-md bg-[#f5f0e7]/90">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-4 ">
              <div className="w-12 h-12 rounded-full bg-transparent border border-[#6E7E45]/20 flex items-center justify-center flex-shrink-0">
                <img src={f.icon} alt="" className="w-7 h-7 object-contain" />
              </div>
              <div>
                <p
                  className={`${montserrat.className} text-[12px] text-[#241A12]`}
                  style={{ fontWeight: 600 }}
                >
                  {f.title}
                </p>
                <p
                  className={`${montserrat.className} mt-1.5 text-[11px] leading-[1.6] text-[#5f5146]`}
                  style={{ fontWeight: 400 }}
                >
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── BOTTOM BANNER ────────────────────────────────── */}
        <div className="mt-10 rounded-xl bg-[#505c31] px-4 py-3 flex items-center justify-center gap-4">
          <img
            src="/icons/heart.png"
            alt=""
            className="w-6 h-6 object-contain brightness-0 invert opacity-70 flex-shrink-0"
          />
          <p
            className={`${cormorant.className} text-center text-[18px] lg:text-[22px] italic text-[#f5f0e7] leading-snug`}
            style={{ fontWeight: 400 }}
          >
            We don't just deliver eggs, we deliver{" "}
            <span className="text-[#c5db8e] not-italic font-semibold">
              trust,
            </span>{" "}
            <span className="text-[#c5db8e] not-italic font-semibold">
              nutrition,
            </span>{" "}
            and{" "}
            <span className="text-[#c5db8e] not-italic font-semibold">
              happiness.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
