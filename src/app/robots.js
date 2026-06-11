// app/robots.js
// ============================================================
// GVR FARM FOODS — robots.txt
// Auto-generated at: https://www.gvrfreshfoods.com/robots.txt
// ============================================================

import { SITE } from "@/lib/seo.config";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/*.json$",
          "/private/",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/images/", "/public/"],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
