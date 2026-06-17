// ============================================================
// GVR FARM FOODS — Master SEO Configuration
// 🔁 Update SITE.url once domain is finalized
// ============================================================

export const SITE = {
  name: "GVR Fresh Foods",
  shortName: "GVR",
  tagline: "Pure Fresh Eggs Everyday",
  description:
    "GVR Fresh Foods delivers farm-fresh eggs and premium dry fish directly from our trusted farms to your table. Country eggs, brown eggs, white eggs, duck eggs, Kadaknath eggs, and dry fish — sourced with care, delivered with trust across Tamil Nadu.",
  url: "https://www.gvrfreshfoods.com", // 🔁 Replace with final domain
  logo: "/images/gvr-logo.png",
  ogImage: "/images/og-default.jpg",
  locale: "en_IN",
  language: "en",
  country: "IN",
  region: "Tamil Nadu",
  phone: "+91 94484 53609",
  email: "gvrfreshfoodsprivatelimited@gmail.com",
  address: {
    street: "", // 🔁 Fill when available
    city: "Tamil Nadu",
    state: "Tamil Nadu",
    postalCode: "", // 🔁 Fill when available
    country: "India",
  },
};

export const PAGE_SEO = {
  home: {
    title: "GVR Fresh Foods | Pure Fresh Eggs & Dry Fish – Delivered Daily",
    description:
      "Buy farm-fresh eggs and premium dry fish online. GVR Fresh Foods delivers country eggs, brown eggs, white eggs, duck eggs, and Kadaknath eggs directly from our farms to homes, restaurants, cafes, and retailers across Tamil Nadu.",
    keywords: [
      "farm fresh eggs Tamil Nadu",
      "buy eggs online Tamil Nadu",
      "country eggs bulk supply",
      "brown eggs Tamil Nadu",
      "Kadaknath eggs online",
      "duck eggs Tamil Nadu",
      "premium dry fish online",
      "eggs for restaurants bulk",
      "GVR fresh foods",
      "egg supplier Tamil Nadu",
      "fresh eggs home delivery Tamil Nadu",
      "farm to table eggs India",
    ],
    canonical: "/",
  },
  about: {
    title: "About GVR Fresh Foods | Our Story, Philosophy & Farm Process",
    description:
      "Learn about GVR Fresh Foods — a family farm rooted in care, honesty, and quality. From our farm in Tamil Nadu, we raise hens naturally and deliver fresh eggs daily to families and businesses across the region.",
    keywords: [
      "GVR fresh foods about",
      "farm fresh eggs Tamil Nadu story",
      "natural egg farm India",
      "family farm eggs Tamil Nadu",
      "ethical egg farming India",
      "GVR farm founder",
      "free range eggs Tamil Nadu",
    ],
    canonical: "/about",
  },
  products: {
    title:
      "Our Products | Farm Fresh Eggs & Premium Dry Fish – GVR Fresh Foods",
    description:
      "Explore GVR Fresh Foods' full range — country eggs, brown eggs, white eggs, duck eggs, Kadaknath eggs, quail eggs, and premium dry fish. Quality-checked and delivered fresh from our farm to your door.",
    keywords: [
      "country eggs buy online",
      "brown eggs Tamil Nadu",
      "white eggs bulk supply",
      "duck eggs online India",
      "Kadaknath eggs buy",
      "quail eggs Tamil Nadu",
      "premium dry fish online",
      "farm eggs wholesale Tamil Nadu",
      "egg varieties Tamil Nadu",
      "buy dry fish online Tamil Nadu",
    ],
    canonical: "/products",
  },
  contact: {
    title: "Contact GVR Fresh Foods | Bulk Orders & Partnership Enquiries",
    description:
      "Get in touch with GVR Fresh Foods for bulk egg orders, dry fish supply, and business partnerships. We serve retailers, restaurants, cafes, distributors, and households across Tamil Nadu.",
    keywords: [
      "GVR farm foods contact",
      "bulk egg order Tamil Nadu",
      "egg supplier contact Tamil Nadu",
      "egg wholesale enquiry India",
      "GVR partnership",
      "farm fresh eggs wholesale contact",
    ],
    canonical: "/contact",
  },
};

export const PRODUCTS = [
  {
    id: "country-eggs",
    name: "Country Eggs",
    slug: "country-eggs",
    description:
      "Farm-fresh country eggs from naturally raised hens. Rich in nutrition, collected daily from our trusted farms.",
    category: "Eggs",
    image: "/images/products/country-eggs.jpg",
  },
  {
    id: "brown-eggs",
    name: "Brown Eggs",
    slug: "brown-eggs",
    description:
      "Naturally brown eggs with rich flavor and superior nutrition, sourced from free-range hens.",
    category: "Eggs",
    image: "/images/products/brown-eggs.jpg",
  },
  {
    id: "white-eggs",
    name: "White Eggs",
    slug: "white-eggs",
    description:
      "Fresh, clean, and versatile white eggs for daily nutrition. Ideal for homes, bakeries, and food businesses.",
    category: "Eggs",
    image: "/images/products/white-eggs.jpg",
  },
  {
    id: "duck-eggs",
    name: "Duck Eggs",
    slug: "duck-eggs",
    description:
      "Premium duck eggs — richer and creamier than chicken eggs, perfect for baking and specialty dishes.",
    category: "Eggs",
    image: "/images/products/duck-eggs.jpg",
  },
  {
    id: "kadaknath-eggs",
    name: "Kadaknath Eggs",
    slug: "kadaknath-eggs",
    description:
      "Rare and nutritious Kadaknath eggs from the indigenous Kadaknath breed. High in protein and medicinal value.",
    category: "Eggs",
    image: "/images/products/kadaknath-eggs.jpg",
  },
  {
    id: "quail-eggs",
    name: "Quail Eggs",
    slug: "quail-eggs",
    description:
      "Small but nutrient-dense quail eggs. A delicacy valued for taste and health benefits.",
    category: "Eggs",
    image: "/images/products/quail-eggs.jpg",
  },
  {
    id: "premium-dry-fish",
    name: "Premium Dry Fish",
    slug: "premium-dry-fish",
    description:
      "Naturally dried fish with authentic coastal flavor. Carefully selected and hygienically processed.",
    category: "Dry Fish",
    image: "/images/products/dry-fish.jpg",
  },

  // ── Fish & Seafood ──────────────────────────────────
  {
    id: "bombay-duck",
    name: "Bombay Duck",
    slug: "bombay-duck",
    description: "Traditional dried seafood with rich coastal flavor.",
    category: "Dry Fish",
    image: "/products/Bombay-Duck-3.webp",
  },
  {
    id: "nathli-big-anchovies",
    name: "Nathli Big Anchovies",
    slug: "nathli-big-anchovies",
    description: "Premium large anchovies, naturally sun-dried.",
    category: "Dry Fish",
    image: "/products/Nathli-big-Anchovies.webp",
  },
  {
    id: "nathli-big-clean",
    name: "Nathli Big Cut & Clean",
    slug: "nathli-big-clean",
    description: "Cleaned and ready-to-cook dried anchovies.",
    category: "Dry Fish",
    image: "/products/nathli-big-clean.webp",
  },
  {
    id: "nathli-big-spicy",
    name: "Nathli Big Spicy",
    slug: "nathli-big-spicy",
    description: "Flavorful spicy anchovies with authentic taste.",
    category: "Dry Fish",
    image: "/products/nathli-big-spicy.webp",
  },
  {
    id: "nathli-small",
    name: "Nathli Small",
    slug: "nathli-small",
    description: "Small sun-dried anchovies packed with flavor.",
    category: "Dry Fish",
    image: "/products/nathli-small.webp",
  },
  {
    id: "nathli-small-spicy",
    name: "Nathli Small Spicy",
    slug: "nathli-small-spicy",
    description: "Spiced small anchovies for traditional recipes.",
    category: "Dry Fish",
    image: "/products/nathli-small-spicy.webp",
  },
  {
    id: "prawn-big-clean",
    name: "Prawn Big Cut & Clean",
    slug: "prawn-big-clean",
    description: "Premium cleaned prawns, ready for cooking.",
    category: "Dry Fish",
    image: "/products/prawn-big-clean.webp",
  },
  {
    id: "prawn-big-spicy",
    name: "Prawn Big Spicy",
    slug: "prawn-big-spicy",
    description: "Spicy dried prawns with bold coastal flavors.",
    category: "Dry Fish",
    image: "/products/prawn-big-spicy.webp",
  },
  {
    id: "prawns-big",
    name: "Prawns Big",
    slug: "prawns-big",
    description: "Large premium prawns, naturally preserved.",
    category: "Dry Fish",
    image: "/products/prawns-big.webp",
  },
  {
    id: "prawn-small-spicy",
    name: "Prawn Small Spicy",
    slug: "prawn-small-spicy",
    description: "Small spicy prawns with authentic seasoning.",
    category: "Dry Fish",
    image: "/products/prawn-small-spicy.webp",
  },
  {
    id: "prawns-small",
    name: "Prawns Small",
    slug: "prawns-small",
    description: "Carefully selected small dried prawns.",
    category: "Dry Fish",
    image: "/products/prawns-small.webp",
  },
  {
    id: "ribbon-clean",
    name: "Ribbon Cut & Clean",
    slug: "ribbon-clean",
    description: "Neatly cleaned ribbon fish, ready to prepare.",
    category: "Dry Fish",
    image: "/products/ribbon-clean.webp",
  },
  {
    id: "shark-cubes",
    name: "Shark Cubes",
    slug: "shark-cubes",
    description: "Premium shark cubes with traditional taste.",
    category: "Dry Fish",
    image: "/products/shark-cubes.webp",
  },
];

export const FAQ_DATA = [
  {
    question: "Are your eggs farm fresh?",
    answer:
      "Yes! All our eggs are collected daily from our trusted farms to ensure maximum freshness, quality and natural nutrition. We deliver within 24 hours of collection.",
  },
  {
    question: "What types of eggs do you offer?",
    answer:
      "We offer a wide range including Country Eggs, Brown Eggs, White Eggs, Duck Eggs, Kadaknath Eggs, and Quail Eggs — all farm-fresh and quality-checked.",
  },
  {
    question: "What is the shelf life of your eggs?",
    answer:
      "Our farm-fresh eggs have a shelf life of 15–21 days when stored at room temperature, and up to 45 days when refrigerated properly.",
  },
  {
    question: "How should eggs be stored?",
    answer:
      "Store eggs in a cool, dry place away from strong odors. Refrigeration is recommended to extend freshness. Keep them in their original tray to avoid damage.",
  },
  {
    question: "Do you offer subscriptions or regular delivery?",
    answer:
      "Yes, we offer regular supply arrangements for households, restaurants, cafes, and retailers. Contact us to set up a recurring delivery schedule that fits your needs.",
  },
  {
    question: "Do you supply in bulk for businesses?",
    answer:
      "Absolutely. We are a trusted bulk egg supplier for retailers, restaurants, cafes, distributors, and food industries across Tamil Nadu. Reach us at +91 94484 53609 for bulk pricing.",
  },
  {
    question: "Are your eggs FSSAI certified?",
    answer:
      "Yes, GVR Farm Foods operates under FSSAI food safety standards, ensuring every product meets hygiene and quality benchmarks.",
  },
  {
    question: "Do you deliver dry fish as well?",
    answer:
      "Yes! We also supply Premium Dry Fish — naturally dried with authentic flavor, hygienically processed and available for home and bulk orders.",
  },
];
