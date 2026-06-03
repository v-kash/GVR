"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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

const commitments = [
  {
    icon: "/icons/hen.png",
    title: "Happy & Healthy Hens",
    desc: "Because their well-being brings you better nutrition.",
  },
  {
    icon: "/icons/eggnest.png",
    title: "Honest Quality",
    desc: "No compromises. Just pure, natural eggs.",
  },
  {
    icon: "/icons/sprout.png",
    title: "Sustainable Practices",
    desc: "Caring for our land today for a better tomorrow.",
  },
  {
    icon: "/icons/Untitled-5.png",
    title: "Community First",
    desc: "Proudly supporting our farmers and communities.",
  },
  {
    icon: "/icons/Shield.png",
    title: "Trust & Transparency",
    desc: "We believe in openness in everything we do.",
  },
];

export default function FounderMessage() {
  return (
    <section className="relative bg-[#f5f0e7] overflow-hidden py-20 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        {/* ── TOP: Left text + Right image collage ── */}
         <div className="absolute bottom-6 left-0 right-0 h-[100%] pointer-events-none ">
    <img
      src="about/sketchfarm.png"
      alt=""
      className="w-full h-full object-cover object-bottom"
      style={{ mixBlendMode: "multiply", opacity: 0.25 }}
    />
    {/* Fade top edge */}
  </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ── LEFT — Text ── */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex flex-col items-center">
                <img
                  src="/icons/Untitle1.png"
                  alt=""
                  className="w-8 h-8 object-contain opacity-70"
                />
                <div className="mb-2 border-t border-[#d8d2c4] w-10" />
              </div>
              <div className="flex flex-col">
                <p
                  className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`}
                  style={{ fontWeight: 500 }}
                >
                  Founder's Message
                </p>
                <div className="mt-2 h-[0.5px] w-[130px] bg-[#d8d2c4]" />
              </div>
            </div>

            {/* Headline */}
            <h2
              className={`${cormorant.className} leading-[1.0] text-[#241A12]`}
            >
              <span className="block text-[52px] lg:text-[60px] font-semibold">
                Our Commitment,
              </span>
              <span className="block text-[52px] lg:text-[60] italic font-medium text-[#6E7E45]">
                To You.
              </span>
            </h2>

            {/* Gold underline + leaf */}
            <div className="flex items-center gap-3 mt-4 mb-7">
              <div className="h-px w-16 bg-[#C49A2A]/50" />
              <img
                src="/icons/Untitle1.png"
                alt=""
                className="w-4 h-4 object-contain opacity-30"
              />
              <div className="h-px w-16 bg-[#C49A2A]/50" />
            </div>

            {/* Body paragraphs */}
            <div
              className={`${montserrat.className} space-y-4 text-[13px] lg:text-[14px] leading-[1.9] text-[#5f5146]`}
              style={{ fontWeight: 400 }}
            >
              <p>
                At GVR Farm Foods, our journey began with a simple belief – good
                food starts with care and honesty.
              </p>
              <p>
                Every egg we produce is a reflection of the care we put into our
                hens, our land, and our processes. We are committed to
                delivering freshness, nutrition, and trust in every single egg.
              </p>
              <p>
                Thank you for welcoming us into your homes and for being a part
                of our journey.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8">
              <p
                className={`${caveat.className} text-[32px] text-[#241A12]`}
                style={{ fontWeight: 500 }}
              >
                Ramesh Varma
              </p>
              <p
                className={`${montserrat.className} text-[11px] text-[#5f5146] mt-1`}
                style={{ fontWeight: 400 }}
              >
                Founder, GVR Farm Foods
              </p>
            </div>

            {/* Farm sketch below signature */}
            
          </div>

          {/* ── RIGHT — Polaroid + farm sketch bg ── */}
<div className="relative h-[500px] lg:h-[560px] ">

  

  <div
    className="absolute backdrop-blur- top-20 left-16 right-0 bg-white/5  rounded-[8px] shadow-[0_20px_50px_rgba(0,0,0,0.12)] z-10 h-[320px] lg:w-[330px] lg:h-[350px]  "
    style={{ transform: "rotate(7deg)" }}
  >

    
    <div className="overflow-hidden rounded-[4px] h-full w-full  ">
      <img
  src="/about/ceo.png"
  alt="Founder"
  className="w-full h-full object-cover"
  style={{ objectPosition: "75% center" }}
/>
    </div>
  </div>

</div>
        </div>
      </div>
    </section>
  );
}
