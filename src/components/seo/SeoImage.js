// components/seo/SeoImage.js
// ============================================================
// GVR FARM FOODS — SEO Image Component + Alt Text Library
// ============================================================

import Image from "next/image";

// ── Alt Text for All Key Images ──────────────────────────────
// Use these exact strings on the corresponding images
export const IMAGE_ALTS = {
  hero: "Farm fresh eggs in a basket with a rooster – GVR Farm Foods Karnataka",
  heroEggs: "Pure fresh eggs everyday delivered from GVR Farm Foods",
  countryEggs: "Country eggs from naturally raised hens – GVR Farm Foods",
  brownEggs: "Farm fresh brown eggs with rich flavor – GVR Farm Foods Karnataka",
  whiteEggs: "Fresh white eggs for daily nutrition – GVR Farm Foods",
  duckEggs: "Premium duck eggs from GVR Farm Foods Karnataka",
  kadaknathEggs: "Kadaknath eggs – rare indigenous breed eggs from GVR Farm Foods",
  quailEggs: "Quail eggs nutrient-dense farm fresh – GVR Farm Foods",
  dryFish: "Premium dry fish naturally dried with authentic flavor – GVR Farm Foods",
  eggsCrate: "GVR Farm Foods bulk egg crate for wholesale supply Karnataka",
  farmPhoto: "GVR farm in Karnataka – hens in natural free-range environment",
  founderPhoto: "GVR Farm Foods founder – family farm started in Karnataka",
  farmSunrise: "GVR farm at sunrise – hens roaming naturally",
  farmCollection: "Daily egg collection at GVR Farm Foods Karnataka",
  qualityCheck: "FSSAI quality check process at GVR Farm Foods",
  packaging: "Hygienic egg packaging at GVR Farm Foods",
  delivery: "GVR Farm Foods delivery van – fresh eggs delivered daily",
  logo: "GVR Farm Foods logo",
};

// ── Hero Image (above fold — priority load for LCP) ──────────
export function HeroImage() {
  return (
    <Image
      src="/images/hero-eggs.jpg"
      alt={IMAGE_ALTS.hero}
      width={1920}
      height={1080}
      priority={true}
      quality={85}
      sizes="100vw"
      style={{ objectFit: "cover", width: "100%", height: "auto" }}
    />
  );
}

// ── Product Card Image ────────────────────────────────────────
export function ProductImage({ src, alt, width = 400, height = 400 }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      quality={80}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      style={{ objectFit: "cover", borderRadius: "8px" }}
    />
  );
}

// ── Farm / About Photo ────────────────────────────────────────
export function FarmPhoto({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={600}
      loading="lazy"
      quality={85}
      sizes="(max-width: 768px) 100vw, 50vw"
      style={{ objectFit: "cover" }}
    />
  );
}

// ── Logo ──────────────────────────────────────────────────────
export function Logo({ width = 120, height = 40 }) {
  return (
    <Image
      src="/images/gvr-logo.png"
      alt={IMAGE_ALTS.logo}
      width={width}
      height={height}
      priority={true}
      quality={100}
    />
  );
}
