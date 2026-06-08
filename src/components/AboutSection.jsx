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
    icon: "/icons/Houseiri.svg",
    top: "Trusted by",
    num: "1000+",
    bottom: "Customers",
  },
  {
    icon: "/icons/Egg.svg",
    top: "Delivering",
    num: "10M+",
    bottom: "Eggs Monthly",
  },
  {
    icon: "/icons/Location.svg",
    top: "Serving",
    num: "100+",
    bottom: "Cities",
  },
  {
    icon: "/icons/Person.svg",
    top: "More than",
    num: "50+",
    bottom: "Business Partners",
  },
];

const features = [
  {
    icon: "/icons/Shield.svg",
    title: "Hygienic & Safe",
    desc: "Strict hygiene and handling standards at every step.",
  },
  {
    icon: "/icons/Hen.svg",
    title: "Farm Fresh Quality",
    desc: "Sourced from trusted farms with proper care and nutrition.",
  },
  {
    icon: "/icons/Truck.svg",
    title: "Timely Delivery",
    desc: "Reliable supply chain ensuring fresh eggs, delivered on time.",
  },
  {
    icon: "/icons/Assure.svg",
    title: "Quality Assured",
    desc: "Every egg is quality checked for size, cleanliness & freshness.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f5f0e7] py-12 lg:py-16"
    >
      {/* Decorative leaf — bottom left */}
      <div className="hidden sm:block pointer-events-none absolute bottom-0 left-[-100px] w-60 opacity-10">
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
                <div
                  className="w-7 h-7 lg:w-8 lg:h-8 bg-[#6E7E45] "
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
                {/* underline under leaf */}
              </div>

              <div className="flex flex-col">
                <p
                  className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`}
                  style={{ fontWeight: 500 }}
                >
                  Our Story
                </p>

                {/* underline under text */}
                <div className="mt-2 h-[0.5px] w-[76px] bg-[#d8d2c4]" />
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
                className={`${montserrat.className} text-[10px] uppercase  pt-1 md:pt-0 md:tracking-[0.2em] text-[#735033]`}
                style={{ fontWeight: 600 }}
              >
                Freshness. Quality. Trust. Every Time.
              </p>
              <div className="flex-1 h-px bg-[#6E7E45]/25" />
              <div
                className="w-7 h-7 lg:w-8 lg:h-8 bg-[#6E7E45] opacity-50 "
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
            <div className="grid grid-cols-4 gap-0 ">
              {stats.map((s, i) => (
                <div key={i} className="flex items-center ">
                  {/* Stat item */}
                  <div className="flex-1 flex flex-col items-center gap-1.5 py-3 md:py-5 px-4">
                    <div className="w-14 h-14 rounded-full bg-transparent border border-[#6E7E45]/20 flex items-center justify-center">
                      <div
                        className="w-11 h-11 lg:w-11 lg:h-11 bg-[#717f3d] "
                        style={{
                          WebkitMaskImage: `url(${s.icon})`,
                          maskImage: `url(${s.icon})`,
                          WebkitMaskSize: "contain",
                          maskSize: "contain",
                          WebkitMaskRepeat: "no-repeat",
                          maskRepeat: "no-repeat",
                          WebkitMaskPosition: "center",
                          maskPosition: "center",
                        }}
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
          <div className="relative w-full max-w-[480px] sm:max-w-[480px] md:max-w-[520px] lg:max-w-[580px] xl:max-w-[620px] mx-auto pb-28 sm:pb-28 md:pb-28 lg:pb-32 xl:pb-36">
            {/* MAIN IMAGE — w-full so it scales fluidly with container */}
            <div className="relative h-[260px] sm:h-[260px] md:h-[340px] lg:h-[340px] xl:h-[380px] overflow-hidden">
              <img
                src="/images2/aboutmain2.webp"
                alt="Farm fresh eggs"
                className="w-full h-[260px] sm:h-[260px] md:h-[290px] lg:h-[340px] xl:h-[380px] object-cover rounded-[8px]"
              />
            </div>

            {/* PAPER BADGE
      left: fixed small negative (safe, no % weirdness with negatives)
      top: fixed px — vertical doesn't need to scale horizontally
      w: % based → scales with container fluidly                        */}
            <div
              className="
      absolute
      left-[-16px] sm:left-[-16px] md:left-[-50px] lg:left-[-40px] xl:left-[-40px]
      top-[150px]  sm:top-[150px]  md:top-[95px]  lg:top-[120px]  xl:top-[120px]
      z-30
      w-[30%]
      sm:w-[20%]
      md:w-[20%]
      lg:w-[25%]
      xl:w-[20%]
      drop-shadow-[0_10px_25px_rgba(0,0,0,0.18)]
      rotate-10
    "
            >
              <img
                src="/images2/badge.webp"
                alt="Farm Fresh Badge"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* LEFT POLAROID
      left: small fixed negative — % negatives don't work well in Tailwind
      bottom: fixed px — vertical axis fine as fixed
      w: % based → 300/620 = 48% of container                           */}
            <div
              className="
      absolute
      left-[100px] sm:left-[-10px] md:left-[-14px] lg:left-[-18px] xl:left-[-18px]
      bottom-[38px] sm:bottom-[38px] md:bottom-[38px] lg:bottom-[40px] xl:bottom-[40px]
      rotate-[-6deg]
      z-20
      bg-[#fffdf9]
      pt-2 px-2 pb-2
      rounded-[6px]
      shadow-[0_20px_45px_rgba(0,0,0,0.14)]
      sm:w-[68%]
      md:w-[52%]
      lg:w-[52%]
      xl:w-[52%]
      w-[68%]
    "
            >
              <div className="overflow-hidden rounded-[3px]">
                {/* Image height stays fixed px — height scaling with % width is handled
          by object-cover; aspect feel stays consistent                    */}
                <img
                  src="/images2/Quality.webp"
                  alt="Fresh eggs"
                  className="w-full h-[115px] sm:h-[115px] md:h-[130px] lg:h-[120px] xl:h-[175px] object-cover"
                />
              </div>
              <p
                className={`${caveat.className} text-center text-[18px] text-[#8d7b67] mt-2`}
              >
                Care in every step ♡
              </p>
            </div>

            {/* RIGHT POLAROID
      left: % based → 240/620 = 38% — moves with container fluidly
      w: % based → 280/620 = 45% — shrinks with container fluidly
      bottom: fixed px — vertical axis fine                               */}
            <div
              className="
    hidden sm:block
      absolute
      left-[40%]
      bottom-[10px] sm:bottom-[10px] md:bottom-[10px] lg:bottom-[10px] xl:bottom-[10px]
      rotate-[6deg]
      z-10
      bg-[#fffdf9]
      pt-2 px-2 pb-2
      rounded-[6px]
      shadow-[0_25px_50px_rgba(0,0,0,0.16)]
      w-[55%]
    "
            >
              <div className="overflow-hidden rounded-[3px]">
                <img
                  src="/images2/Delivary.webp"
                  alt="Farm sunset"
                  className="w-full h-[120px] sm:h-[120px] md:h-[135px] lg:h-[128px] xl:h-[165px] object-cover"
                />
              </div>
              <p
                className={`${caveat.className} text-center text-[18px] text-[#8d7b67] mt-2`}
              >
                From our farm to your family ♡
              </p>
            </div>

            {/* LEAF DECORATION — right/bottom fixed px, width % based */}
            <img
              src="/leaf-decoration.png"
              alt=""
              className="
    hidden lg:block
    absolute
    right-[-30px]
    bottom-[20px]
    w-[100px] xl:w-[125px]
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
                <div
                  className="w-10 h-10 lg:w-10 lg:h-10 bg-[#717f3d] "
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
