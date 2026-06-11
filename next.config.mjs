/** @type {import('next').NextConfig} */
const nextConfig = {

  // your existing line — kept as-is
  allowedDevOrigins: ['192.168.2.58'],

  // ── Image Optimization ──────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  // ── Compression ─────────────────────────────────────
  compress: true,

  // ── No trailing slash ────────────────────────────────
  trailingSlash: false,

  // ── Security + Cache Headers ─────────────────────────
    async headers() {
    const isProd = process.env.NODE_ENV === "production";

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options",         value: "SAMEORIGIN" },
          { key: "X-XSS-Protection",       value: "1; mode=block" },
          { key: "Referrer-Policy",        value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",     value: "camera=(), microphone=(), geolocation=(self)" },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, immutable" }],
      },
      {
        source: "/products/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, immutable" }],
      },
      // only set static cache in production — avoids dev warning
      ...(isProd ? [{
        source: "/_next/static/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      }] : []),
      {
        source: "/sitemap.xml",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, must-revalidate" }],
      },
      {
        source: "/robots.txt",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, must-revalidate" }],
      },
    ];
  },

  // ── 301 Redirects ────────────────────────────────────
  async redirects() {
    return [];
  },
};

export default nextConfig;