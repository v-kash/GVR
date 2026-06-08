// "use client";

// import { Cormorant_Garamond, Montserrat } from "next/font/google";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// const cormorant = Cormorant_Garamond({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   style: ["normal", "italic"],
// });

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
// });

// const eggVarieties = [
//   {
//     image: "/images2/Country.webp",
//     icon: "/icons/Farm.svg",
//     name: "Country Eggs",
//     desc: "Natural taste, rich nutrition.",
//   },
//   {
//     image: "/images2/Brown.webp",
//     icon: "/icons/Egg.svg",
//     name: "Brown Eggs",
//     desc: "Nutrient rich and wholesome.",
//   },
//   {
//     image: "/images2/Whiteegg.webp",
//     icon: "/icons/Egg.svg",
//     name: "White Eggs",
//     desc: "Pure, fresh and protein packed.",
//   },
//   {
//     image: "/images2/Duck.webp",
//     icon: "/icons/Duck.svg",
//     name: "Duck Eggs",
//     desc: "Larger, richer and delicious.",
//   },
//   {
//     image: "/images2/Jumbo.webp",
//     icon: "/icons/Eggnest.svg",
//     name: "Jumbo Eggs",
//     desc: "Extra large size, extra goodness.",
//   },
//   {
//     image: "/images2/Quail.webp",
//     icon: "/icons/Quails.svg",
//     name: "Quail Eggs",
//     desc: "Tiny in size, big on nutrition.",
//   },
//   {
//     image: "/images2/kadaknath2.webp",
//     icon: "/icons/Kadaknath.svg",
//     name: "Kadaknath Eggs",
//     desc: "Premium quality, naturally unique.",
//   },
// ];

// export default function ProductsSection() {
//   return (
//     <section
//       id="products"
//       className="relative overflow-hidden bg-[#f5f0e7] py-20 lg:py-16"
//     >
      

//       <div className="mx-auto max-w-7xl px-6 lg:px-16">
//         {/* ── SECTION HEADING ─────────────────────────────── */}
//         <div className="mb-8">
//           {/* Row — OUR PRODUCTS left, headline right, same top level */}
//           <div className="flex items-start gap-8 relative ">
//             {/* Left — Eyebrow */}
//             <div className="flex items-center gap-3 flex-shrink-0 pt-2">
//               <div className="flex flex-col items-center ">
//                 <div
//                         className="w-7 h-7 lg:w-8 lg:h-8 bg-[#6E7E45] "
//                         style={{
//                           WebkitMaskImage: "url(/icons/HeadLeaf.svg)",
//                           maskImage: "url(/icons/HeadLeaf.svg)",
//                           WebkitMaskSize: "contain",
//                           maskSize: "contain",
//                           WebkitMaskRepeat: "no-repeat",
//                           maskRepeat: "no-repeat",
//                           WebkitMaskPosition: "center",
//                           maskPosition: "center",
//                         }}
//                       />
//                 <div className="mb-2 border-t border-[#d8d2c4] w-10" />
//               </div>
//               <div className="flex flex-col">
//                 <p
//                   className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`}
//                   style={{ fontWeight: 500 }}
//                 >
//                   Our Products
//                 </p>
//                 <div className="mt-2 h-[0.5px] w-[105px] bg-[#d8d2c4]" />
//               </div>
//             </div>

//             {/* Right — Headline */}
//             <h2
//               className={`${cormorant.className} leading-[1.0] text-[#241A12] flex-1 text-center whitespace-nowrap absolute left-0 right-0`}
//             >
//               <span className="text-[48px] lg:text-[80px] font-semibold">
//                 What We{" "}
//               </span>
//               <span className="text-[48px] lg:text-[80px] italic font-medium text-[#6E7E45]">
//                 Offer.
//               </span>
//             </h2>
//           </div>

//           {/* Subtagline */}
//           <p
//             className={`${montserrat.className} text-[14px] lg:text-[15px] text-[#5f5146] leading-7 pt-12 text-center max-w-lg mx-auto`}
//             style={{ fontWeight: 400 }}
//           >
//             Wholesome products from our farm to your table, delivered with
//             trust, hygiene and consistent quality.
//           </p>
//         </div>

//         {/* ── EGGS SECTION ─────────────────────────────────── */}
//         <div className="mb-6">
//           <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-12 items-start">
//             {/* Left — Eggs label + desc + link */}
//             <div className="lg:pt-4">
//               <p
//                 className={`${montserrat.className} text-[11px] uppercase tracking-[0.2em] text-[#6E7E45] mb-1`}
//                 style={{ fontWeight: 600 }}
//               >
//                 Farm Fresh
//               </p>
//               <h3
//                 className={`${cormorant.className} text-[56px] lg:text-[72px] font-semibold text-[#241A12] leading-none tracking-[-1px]`}
//               >
//                 EGGS
//               </h3>
//               <div className="h-[2px] w-8 bg-[#6E7E45] mt-2 mb-4" />
//               <p
//                 className={`${montserrat.className} text-[14px] lg:text-[13px] text-[#5f5146] leading-[1.8]`}
//                 style={{ fontWeight: 400 }}
//               >
//                 Seven varieties of fresh eggs sourced from trusted farms, packed
//                 with nutrition and delivered with care.
//               </p>
//               <Link
//                 href="/products#eggs"
//                 className={`${montserrat.className} mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-[#4D5B2A] border-b border-[#4D5B2A]/30 pb-0.5 hover:border-[#4D5B2A] transition-all duration-200`}
//                 style={{ fontWeight: 600 }}
//               >
//                 Explore Egg Products
//                 <ArrowRight size={13} />
//               </Link>
//             </div>

//             {/* Right — 7 egg varieties horizontal */}
//             <div className="overflow-x-auto pb-2 -mx-2 px-2">
//               <div className="flex min-w-max lg:min-w-0 lg:grid lg:grid-cols-7">
//                 {eggVarieties.map((egg, i) => (
//                   <div key={i} className="flex items-start">
//                     {/* Egg item */}
//                     <div className="flex flex-col items-center gap-2 w-[120px] lg:w-auto px-3">
//                       {/* Egg image */}
//                       {/* Egg image */}
//                       <div className="mt-8 w-[110px] h-[110px] lg:w-full lg:h-[110px] rounded-xl overflow-visible flex-shrink-0 relative">
//                         <img
//                           src={egg.image}
//                           alt={egg.name}
//                           className="w-full h-full object-contain scale-[1.2]"
//                         />
//                         {/* Contact shadow — ellipse blur underneath */}
//                         <div className="absolute bottom-[16px] left-1/2 -translate-x-1/2 w-[60%] h-[8px] bg-black/20 rounded-full blur-[6px]" />
//                       </div>
//                       {/* Icon */}
//                       <div className="w-10 h-10 rounded-full border border-[#6E7E45]/25 bg-transparent flex items-center justify-center">
//                         <div
//                         className="w-7 h-7 lg:w-11 lg:h-11 bg-[#717f3d] "
//                         style={{
//                           WebkitMaskImage: `url(${egg.icon})`,
//                           maskImage: `url(${egg.icon})`,
//                           WebkitMaskSize: "contain",
//                           maskSize: "contain",
//                           WebkitMaskRepeat: "no-repeat",
//                           maskRepeat: "no-repeat",
//                           WebkitMaskPosition: "center",
//                           maskPosition: "center",
//                         }}
//                       />
//                       </div>
//                       {/* Name + desc */}
//                       <div className="text-center">
//                         <p
//                           className={`${montserrat.className} text-[11px] text-[#241A12] leading-tight`}
//                           style={{ fontWeight: 600 }}
//                         >
//                           {egg.name}
//                         </p>
//                         <p
//                           className={`${montserrat.className} text-[10px] text-[#5f5146] leading-tight mt-0.5`}
//                           style={{ fontWeight: 400 }}
//                         >
//                           {egg.desc}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Divider — hidden after last */}
//                     {i !== eggVarieties.length - 1 && (
//                       <div className="w-px h-24 bg-[#6E7E45]/20 self-center flex-shrink-0 mt-36" />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ── DRY FISH BANNER ──────────────────────────────── */}
//         <div className="relative rounded-md overflow-hidden min-h-[260px] lg:min-h-[200px]">
//           {/* Background image */}
//           <img
//             src="/images2/produc-fish2.webp"
//             alt="Premium Dry Fish"
//             className="absolute inset-0 w-full h-full object-cover object-center"
//           />
//           {/* Dark green overlay — stronger so text is readable */}

//           {/* Content */}
//           <div className="relative z-10 flex items-center h-full min-h-[260px] lg:min-h-[200px] px-8 lg:px-14 py-8">
//             <div className="max-w-sm">
//               <p
//                 className={`${montserrat.className} text-[11px] uppercase tracking-[0.2em] text-[#c5db8e] mb-1`}
//                 style={{ fontWeight: 600 }}
//               >
//                 Premium
//               </p>
//               <div className="flex items-end gap-3 mb-2 ">
//                 <h3
//                   className={`${cormorant.className} text-[52px] lg:text-[72px] font-semibold text-[#f5f0e7] leading-none tracking-[-1px]`}
//                 >
//                   DRY FISH
//                 </h3>
//                 <img
//                   src="/images/waves.png"
//                   alt=""
//                   className="ml-2 mb-4  h-5 w-auto scale-[1.5] object-contain opacity-80"
//                 />
//               </div>
//               <p
//                 className={`${montserrat.className} text-[14px] lg:text-[13px] text-[#f5f0e7]/80 leading-[1.8] mb-7`}
//                 style={{ fontWeight: 400 }}
//               >
//                 Carefully selected and naturally dried to preserve authentic
//                 taste, nutrition and freshness.
//               </p>
//               <Link
//                 href="/products"
//                 className={`${montserrat.className} inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-[#f5f0e7] border-b border-[#f5f0e7]/40 pb-0.5 hover:border-[#f5f0e7] transition-all duration-200`}
//                 style={{ fontWeight: 600 }}
//               >
//                 Explore Dry Fish Products
//                 <ArrowRight size={13} />
//               </Link>
//             </div>

//             {/* Badge — right side */}
//             <div className="absolute right-8 lg:right-14 bottom-8 lg:bottom-auto lg:top-3/4 rotate-[15deg] lg:-translate-y-1/2">
//               <img
//                 src="/images2/dryfishbadge2.webp"
//                 alt="Naturally Dried Premium Quality"
//                 className="w-[100px] h-[100px] lg:w-[160px] lg:h-[160px] object-contain"
//               />
//             </div>
//           </div>
//         </div>

//         {/* ── BOTTOM TAGLINE ───────────────────────────────── */}
//         <div className="mt-8 flex items-center justify-center gap-4">
//           <p
//             className={`${cormorant.className} text-[18px] lg:text-[22px] text-[#5f5146] text-center`}
//             style={{ fontWeight: 500 }}
//           >
//             Good products.{" "}
//             <span className="italic text-[#6E7E45]">Trusted</span> by families.
//             Delivered with <span className="italic text-[#6E7E45]">care.</span>
//           </p>
//         </div>
//       </div>
//       {/* ── PAINT STROKE DIVIDER ───────────────────────── */}
//       {/* <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[105%] h-[100px] z-20 pointer-events-none scale-y-[-1]">
//         <div
//           className="w-full h-full bg-[#d9c6a1]"
//           style={{
//             WebkitMaskImage: "url(/svgs/ps.svg)",
//             maskImage: "url(/svgs/ps.svg)",
//             WebkitMaskSize: "100% auto",
//             maskSize: "100% auto",
//             WebkitMaskRepeat: "no-repeat",
//             maskRepeat: "no-repeat",
//             WebkitMaskPosition: "center",
//             maskPosition: "center",
//           }}
//         />
//       </div> */}
//     </section>
//   );
// }



"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const eggVarieties = [
  {
    image: "/images2/Country.webp",
    icon: "/icons/Farm.svg",
    name: "Country Eggs",
    desc: "Natural taste, rich nutrition.",
  },
  {
    image: "/images2/Brown.webp",
    icon: "/icons/Egg.svg",
    name: "Brown Eggs",
    desc: "Nutrient rich and wholesome.",
  },
  {
    image: "/images2/Whiteegg.webp",
    icon: "/icons/Egg.svg",
    name: "White Eggs",
    desc: "Pure, fresh and protein packed.",
  },
  {
    image: "/images2/Duck.webp",
    icon: "/icons/Duck.svg",
    name: "Duck Eggs",
    desc: "Larger, richer and delicious.",
  },
  {
    image: "/images2/Jumbo.webp",
    icon: "/icons/Eggnest.svg",
    name: "Jumbo Eggs",
    desc: "Extra large size, extra goodness.",
  },
  {
    image: "/images2/Quail.webp",
    icon: "/icons/Quails.svg",
    name: "Quail Eggs",
    desc: "Tiny in size, big on nutrition.",
  },
  {
    image: "/images2/kadaknath2.webp",
    icon: "/icons/Kadaknath.svg",
    name: "Kadaknath Eggs",
    desc: "Premium quality, naturally unique.",
  },
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#f5f0e7] py-12 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-16">

        {/* ── SECTION HEADING ──────────────────────────────────────────────
            FIXED: On mobile/tablet, eyebrow + headline stack vertically.
            The absolute-overlay trick only works on lg+ where there is
            enough horizontal space. Below lg we use a simple flex-col.   */}
        <div className="mb-8">

          {/* Mobile + Tablet (< lg): stacked layout */}
          <div className="flex flex-col items-center lg:hidden gap-3">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <div
                  className="w-7 h-7 bg-[#6E7E45]"
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
                <div className="mb-2  w-10" />
              </div>
              <div className="flex flex-col">
                <p
                  className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`}
                  style={{ fontWeight: 500 }}
                >
                  Our Products
                </p>
                <div className="mt-2 h-[0.5px] w-[105px] bg-[#d8d2c4]" />
              </div>
            </div>

            {/* Headline — stacked, no whitespace-nowrap on mobile */}
            <h2 className={`${cormorant.className} leading-[1.0] text-[#241A12] text-center`}>
              {/* sm: 36px  md: 48px  (lg handled by desktop block below) */}
              <span className="text-[36px] sm:text-[36px] md:text-[48px] font-semibold">
                What We{" "}
              </span>
              <span className="text-[36px] sm:text-[36px] md:text-[48px] italic font-medium text-[#6E7E45]">
                Offer.
              </span>
            </h2>
          </div>

          {/* Desktop (lg+): original absolute overlay layout — untouched */}
          <div className="hidden lg:flex items-start gap-8 relative">
            {/* Left — Eyebrow */}
            <div className="flex items-center gap-3 flex-shrink-0 pt-2">
              <div className="flex flex-col items-center">
                <div
                  className="w-7 h-7 lg:w-8 lg:h-8 bg-[#6E7E45]"
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
                <div className="mb-2  w-10" />
              </div>
              <div className="flex flex-col">
                <p
                  className={`${montserrat.className} text-[10px] uppercase tracking-[0.2em] text-[#6E7E45]`}
                  style={{ fontWeight: 500 }}
                >
                  Our Products
                </p>
                <div className="mt-2 h-[0.5px] w-[105px] bg-[#d8d2c4]" />
              </div>
            </div>

            {/* Right — Headline absolute centered — original untouched */}
            <h2
              className={`${cormorant.className} leading-[1.0] text-[#241A12] flex-1 text-center whitespace-nowrap absolute left-0 right-0`}
            >
              {/* lg: 64px  xl: 80px — original was lg:80px, split for safety */}
              <span className="text-[48px] lg:text-[64px] xl:text-[80px] font-semibold">
                What We{" "}
              </span>
              <span className="text-[48px] lg:text-[64px] xl:text-[80px] italic font-medium text-[#6E7E45]">
                Offer.
              </span>
            </h2>
          </div>

          {/* Subtagline — original unchanged */}
          <p
            className={`${montserrat.className} text-[14px] lg:text-[15px] text-[#5f5146] leading-7 pt-6 sm:pt-8 md:pt-10 lg:pt-12 text-center max-w-lg mx-auto`}
            style={{ fontWeight: 400 }}
          >
            Wholesome products from our farm to your table, delivered with
            trust, hygiene and consistent quality.
          </p>
        </div>

        {/* ── EGGS SECTION ─────────────────────────────────────────────────
            Mobile/tablet: single col stacked
            lg+: original grid-cols-[220px_1fr] layout                   */}
        <div className="mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-12 items-start">

            {/* Left — Eggs label + desc + link — original values untouched */}
            <div className="lg:pt-4">
              <p
                className={`${montserrat.className} text-[11px] uppercase tracking-[0.2em] text-[#6E7E45] mb-1`}
                style={{ fontWeight: 600 }}
              >
                Farm Fresh
              </p>
              {/* EGGS heading: sm: 40px  md: 48px  lg: 72px  xl: 72px (original) */}
              <h3
                className={`${cormorant.className} text-[40px] sm:text-[40px] md:text-[48px] lg:text-[72px] xl:text-[72px] font-semibold text-[#241A12] leading-none tracking-[-1px]`}
              >
                EGGS
              </h3>
              <div className="h-[2px] w-8 bg-[#6E7E45] mt-2 mb-4" />
              <p
                className={`${montserrat.className} text-[14px] lg:text-[13px] text-[#5f5146] leading-[1.8]`}
                style={{ fontWeight: 400 }}
              >
                Seven varieties of fresh eggs sourced from trusted farms, packed
                with nutrition and delivered with care.
              </p>
              <Link
                href="/products#eggs"
                className={`${montserrat.className} mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-[#4D5B2A] border-b border-[#4D5B2A]/30 pb-0.5 hover:border-[#4D5B2A] transition-all duration-200`}
                style={{ fontWeight: 600 }}
              >
                Explore Egg Products
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Right — 7 egg varieties
                Mobile/tablet: horizontal scroll (original pattern kept)
                lg+: original 7-column grid                               */}
            <div className="overflow-x-auto pb-2 -mx-2 px-2">
              <div className="flex min-w-max lg:min-w-0 lg:grid lg:grid-cols-7">
                {eggVarieties.map((egg, i) => (
                  <div key={i} className="flex items-start ">
                    {/* Egg card
                        Mobile: w-[120px] fixed (scroll container)
                        sm: w-[130px]  md: w-[140px]  lg/xl: auto (grid) */}
                    <div className="flex flex-col items-center gap-2 w-[120px] sm:w-[130px] md:w-[140px] lg:w-auto px-3 ">

                      {/* Egg image */}
                      <div className="mt-8 lg:mt-14 xl:mt-8 w-[110px] h-[110px] lg:w-full lg:h-[60px] xl:w-full xl:h-[110px] rounded-xl overflow-visible flex-shrink-0 relative ">
                        <img
                          src={egg.image}
                          alt={egg.name}
                          className="w-full h-full object-contain scale-[1.2]"
                        />
                        {/* Contact shadow */}
                        <div className="absolute bottom-[16px] left-1/2 -translate-x-1/2 w-[60%] h-[8px] bg-black/20 rounded-full blur-[6px]" />
                      </div>

                      {/* Icon circle */}
                      <div className="w-10 h-10 rounded-full border border-[#6E7E45]/25 bg-transparent flex items-center justify-center">
                        <div
                          className="w-7 h-7 lg:w-11 lg:h-11 bg-[#717f3d]"
                          style={{
                            WebkitMaskImage: `url(${egg.icon})`,
                            maskImage: `url(${egg.icon})`,
                            WebkitMaskSize: "contain",
                            maskSize: "contain",
                            WebkitMaskRepeat: "no-repeat",
                            maskRepeat: "no-repeat",
                            WebkitMaskPosition: "center",
                            maskPosition: "center",
                          }}
                        />
                      </div>

                      {/* Name + desc */}
                      <div className="text-center">
                        <p
                          className={`${montserrat.className} text-[11px] text-[#241A12] leading-tight`}
                          style={{ fontWeight: 600 }}
                        >
                          {egg.name}
                        </p>
                        <p
                          className={`${montserrat.className} text-[10px] text-[#5f5146] leading-tight mt-0.5`}
                          style={{ fontWeight: 400 }}
                        >
                          {egg.desc}
                        </p>
                      </div>
                    </div>

                    {/* Divider between egg cards
                        FIXED: mt-36 was 144px — way too large, now self-center */}
                    {i !== eggVarieties.length - 1 && (
                      <div className="w-px h-24 bg-[#6E7E45]/20 self-center flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── DRY FISH BANNER ──────────────────────────────────────────────
            FIXED: On mobile/sm the badge overlapped the text.
            Solution: badge hidden on mobile, shown sm+ with safe positioning.
            Text block gets pr on sm/md so it never goes under the badge.  */}
        <div className="relative rounded-md overflow-hidden min-h-[260px] sm:min-h-[260px] md:min-h-[200px] lg:min-h-[200px] xl:min-h-[200px]">

          {/* Background image */}
          <img
            src="/images2/produc-fish2.webp"
            alt="Premium Dry Fish"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Content */}
          <div className="relative z-10 flex items-center h-full min-h-[260px] sm:min-h-[260px] md:min-h-[240px] lg:min-h-[200px] xl:min-h-[200px] px-6 sm:px-8 md:px-10 lg:px-14 xl:px-14 py-8">

            {/* Text block
                pr on sm/md creates breathing room so badge doesn't overlap */}
            <div className="max-w-sm pr-0 sm:pr-[120px] md:pr-[140px] lg:pr-0 xl:pr-0">
              <p
                className={`${montserrat.className} text-[11px] uppercase tracking-[0.2em] text-[#c5db8e] mb-1`}
                style={{ fontWeight: 600 }}
              >
                Premium
              </p>
              <div className="flex items-end gap-3 mb-2">
                {/* DRY FISH heading: sm: 38px  md: 48px  lg: 72px  xl: 72px (original) */}
                <h3
                  className={`${cormorant.className} text-[38px] sm:text-[38px] md:text-[38px] lg:text-[72px] xl:text-[72px] font-semibold text-[#f5f0e7] leading-none tracking-[-1px]`}
                >
                  DRY FISH
                </h3>
                <img
                  src="/images/waves.png"
                  alt=""
                  className="  ml-2 mb-4 h-5 w-auto scale-[1.5] object-contain opacity-80"
                />
              </div>
              <p
                className={`${montserrat.className} text-[14px] lg:text-[13px] text-[#f5f0e7]/80 leading-[1.8] mb-7`}
                style={{ fontWeight: 400 }}
              >
                Carefully selected and naturally dried to preserve authentic
                taste, nutrition and freshness.
              </p>
              <Link
                href="/products"
                className={`${montserrat.className} inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-[#f5f0e7] border-b border-[#f5f0e7]/40 pb-0.5 hover:border-[#f5f0e7] transition-all duration-200`}
                style={{ fontWeight: 600 }}
              >
                Explore Dry Fish Products
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Badge
                hidden on mobile to avoid text overlap.
                sm: shown, small size.  md: medium.  lg/xl: original size. */}
            <div className="hidden sm:block absolute right-6 sm:right-6 md:right-8 lg:right-14 xl:right-14 bottom-6 sm:bottom-6 md:bottom-8 lg:bottom-auto lg:top-3/4 xl:top-3/4 rotate-[15deg] lg:-translate-y-1/2 xl:-translate-y-1/2">
              <img
                src="/images2/dryfishbadge2.webp"
                alt="Naturally Dried Premium Quality"
                className="w-[90px] h-[90px] sm:w-[90px] sm:h-[90px] md:w-[160px] md:h-[160px] lg:w-[160px] lg:h-[160px] xl:w-[160px] xl:h-[160px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* ── BOTTOM TAGLINE — original unchanged ─────────────────────── */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <p
            className={`${cormorant.className} text-[18px] lg:text-[22px] text-[#5f5146] text-center`}
            style={{ fontWeight: 500 }}
          >
            Good products.{" "}
            <span className="italic text-[#6E7E45]">Trusted</span> by families.
            Delivered with <span className="italic text-[#6E7E45]">care.</span>
          </p>
        </div>

      </div>
    </section>
  );
}