// components/seo/JsonLd.js
// ============================================================
// GVR FARM FOODS — All Schema.org JSON-LD Structured Data
// Drop the relevant component into each page
// ============================================================

import { SITE, PRODUCTS, FAQ_DATA } from "@/lib/seo.config";

// ─────────────────────────────────────────────────────────────
// 1. LOCAL BUSINESS SCHEMA
//    Use on: Home, Contact
// ─────────────────────────────────────────────────────────────
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FoodEstablishment"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: "GVR Fresh Foods",
    description: SITE.description,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/images/gvr-logo.png`,
      width: 200,
      height: 60,
    },
    image: `${SITE.url}/images/og-default.jpg`,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tamil Nadu",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "15.3173", // 🔁 Replace with exact lat/long
      longitude: "75.7139",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "06:00",
        closes: "20:00",
      },
    ],
    servesCuisine: "Farm Fresh Produce",
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Bank Transfer",
    areaServed: {
      "@type": "State",
      name: "Tamil Nadu",
    },
    sameAs: [
      // 🔁 Add social URLs when ready
      // "https://www.instagram.com/gvrfarmfoods",
      // "https://www.facebook.com/gvrfarmfoods",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Kannada"],
      },
      {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English", "Kannada"],
      },
    ],
    founder: {
      "@type": "Person",
      name: "GVR Founder", // 🔁 Replace with actual name
      jobTitle: "Founder & CEO",
    },
    foundingDate: "2020", // 🔁 Replace with actual year
    knowsAbout: [
      "Farm Fresh Eggs",
      "Country Eggs",
      "Brown Eggs",
      "Kadaknath Eggs",
      "Duck Eggs",
      "Quail Eggs",
      "Premium Dry Fish",
      "Bulk Egg Supply",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─────────────────────────────────────────────────────────────
// 2. WEBSITE SCHEMA (enables Sitelinks Searchbox)
//    Use on: Home only
// ─────────────────────────────────────────────────────────────
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "en-IN",
    publisher: {
      "@id": `${SITE.url}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/products?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─────────────────────────────────────────────────────────────
// 3. PRODUCTS SCHEMA
//    Use on: Products page
// ─────────────────────────────────────────────────────────────
export function ProductsSchema() {
  return (
    <>
      {PRODUCTS.map((product) => {
        const schema = {
          "@context": "https://schema.org",
          "@type": "Product",
          "@id": `${SITE.url}/products#${product.id}`,
          name: product.name,
          description: product.description,
          image: `${SITE.url}${product.image}`,
          url: `${SITE.url}/products`,
          brand: {
            "@type": "Brand",
            name: SITE.name,
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            seller: {
              "@id": `${SITE.url}/#organization`,
            },
            areaServed: {
              "@type": "State",
              name: "Tamil Nadu",
            },
          },
          category: product.category,
        };

        return (
          <script
            key={product.id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        );
      })}
    </>
  );
}

// ─────────────────────────────────────────────────────────────
// 4. FAQ SCHEMA (pulls featured snippets from Google)
//    Use on: Products page, Contact page
// ─────────────────────────────────────────────────────────────
export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─────────────────────────────────────────────────────────────
// 5. BREADCRUMB SCHEMA
//    Use on: About, Products, Contact
// ─────────────────────────────────────────────────────────────
export function BreadcrumbSchema({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Usage:
// <BreadcrumbSchema items={[
//   { name: "Home", url: "https://www.gvrfreshfoods.com/" },
//   { name: "Products", url: "https://www.gvrfreshfoods.com/products" },
// ]} />

// ─────────────────────────────────────────────────────────────
// 6. ABOUT PAGE SCHEMA
//    Use on: About page
// ─────────────────────────────────────────────────────────────
export function AboutPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE.url}/about`,
    url: `${SITE.url}/about`,
    name: "About GVR Farm Foods",
    description:
      "GVR Farm Foods started as a small family farm and has grown into a trusted brand delivering farm-fresh eggs and dry fish across Tamil Nadu with honesty, care, and quality.",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#organization` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE.url}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: `${SITE.url}/about`,
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─────────────────────────────────────────────────────────────
// 7. CONTACT PAGE SCHEMA
//    Use on: Contact page
// ─────────────────────────────────────────────────────────────
export function ContactPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE.url}/contact`,
    url: `${SITE.url}/contact`,
    name: "Contact GVR Farm Foods",
    description:
      "Contact GVR Farm Foods for bulk egg orders, dry fish supply, and business partnerships across Tamil Nadu.",
    isPartOf: { "@id": `${SITE.url}/#website` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE.url}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact",
          item: `${SITE.url}/contact`,
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
