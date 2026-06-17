// ============================================================
// GVR FARM FOODS — Page Metadata (Plain JavaScript)
// Copy the relevant export into each page.js file
// ============================================================

import { SITE, PAGE_SEO } from "@/lib/seo.config";

// ─────────────────────────────────────────────────────────────
// HOME — copy into app/page.js
// ─────────────────────────────────────────────────────────────
export const homeMetadata = {
  title: PAGE_SEO.home.title,
  description: PAGE_SEO.home.description,
  keywords: PAGE_SEO.home.keywords,
  alternates: {
    canonical: `${SITE.url}/`,
  },
  openGraph: {
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    url: `${SITE.url}/`,
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "GVR Farm Foods – Pure Fresh Eggs Everyday",
      },
    ],
  },
  twitter: {
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    images: ["/images/og-default.jpg"],
  },
};

// ─────────────────────────────────────────────────────────────
// ABOUT — copy into app/about/page.js
// ─────────────────────────────────────────────────────────────
export const aboutMetadata = {
  title: PAGE_SEO.about.title,
  description: PAGE_SEO.about.description,
  keywords: PAGE_SEO.about.keywords,
  alternates: {
    canonical: `${SITE.url}/about`,
  },
  openGraph: {
    title: PAGE_SEO.about.title,
    description: PAGE_SEO.about.description,
    url: `${SITE.url}/about`,
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "About GVR Farm Foods – Our Story and Farm",
      },
    ],
  },
  twitter: {
    title: PAGE_SEO.about.title,
    description: PAGE_SEO.about.description,
    images: ["/images/og-default.jpg"],
  },
};

// ─────────────────────────────────────────────────────────────
// PRODUCTS — copy into app/products/page.js
// ─────────────────────────────────────────────────────────────
export const productsMetadata = {
  title: PAGE_SEO.products.title,
  description: PAGE_SEO.products.description,
  keywords: PAGE_SEO.products.keywords,
  alternates: {
    canonical: `${SITE.url}/products`,
  },
  openGraph: {
    title: PAGE_SEO.products.title,
    description: PAGE_SEO.products.description,
    url: `${SITE.url}/products`,
    images: [
      {
        url: "/images/og-defaults.jpg",
        width: 1200,
        height: 630,
        alt: "GVR Farm Foods Products – Eggs and Dry Fish",
      },
    ],
  },
  twitter: {
    title: PAGE_SEO.products.title,
    description: PAGE_SEO.products.description,
    images: ["/images/og-defaults.jpg"],
  },
};

// ─────────────────────────────────────────────────────────────
// CONTACT — copy into app/contact/page.js
// ─────────────────────────────────────────────────────────────
export const contactMetadata = {
  title: PAGE_SEO.contact.title,
  description: PAGE_SEO.contact.description,
  keywords: PAGE_SEO.contact.keywords,
  alternates: {
    canonical: `${SITE.url}/contact`,
  },
  openGraph: {
    title: PAGE_SEO.contact.title,
    description: PAGE_SEO.contact.description,
    url: `${SITE.url}/contact`,
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Contact GVR Farm Foods – Bulk Orders and Partnerships",
      },
    ],
  },
  twitter: {
    title: PAGE_SEO.contact.title,
    description: PAGE_SEO.contact.description,
    images: ["/images/og-default.jpg"],
  },
};
