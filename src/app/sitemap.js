// app/sitemap.js
// ============================================================
// GVR FARM FOODS — XML Sitemap
// Auto-generated at: https://www.gvrfreshfoods.com/sitemap.xml
// ============================================================

import { SITE } from "@/lib/seo.config";

export default function sitemap() {
  const baseUrl = SITE.url;
  const now = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // 🔁 Uncomment when individual product pages are built:
    // { url: `${baseUrl}/products/country-eggs`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // { url: `${baseUrl}/products/brown-eggs`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // { url: `${baseUrl}/products/kadaknath-eggs`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // { url: `${baseUrl}/products/duck-eggs`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // { url: `${baseUrl}/products/premium-dry-fish`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
