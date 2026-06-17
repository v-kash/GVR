// components/seo/HeadingStructure.js
// ============================================================
// GVR FARM FOODS — Recommended Heading Hierarchy
// This file documents the correct H1→H2→H3 structure
// for each page for SEO crawlability.
//
// RULE: One H1 per page. It must contain the primary keyword.
// H2s are section-level. H3s are item-level inside sections.
// ============================================================

// ─────────────────────────────────────────────────────────────
// HOME PAGE  /
// ─────────────────────────────────────────────────────────────
//
// <h1>Pure Fresh Eggs Everyday – GVR Farm Foods, Tamil Nadu</h1>
//
//   <h2>From Our Farm, To Your Table</h2>
//     (stats: 1000+ customers, 30M+ eggs, 100+ varieties, 30+ districts)
//
//   <h2>What We Offer</h2>
//     <h3>Farm Fresh Eggs</h3>
//       (list of egg types as links)
//     <h3>Premium Dry Fish</h3>
//
//   <h2>Why Trust GVR</h2>
//     <h3>Hygienic Handling</h3>
//     <h3>Daily Delivery</h3>
//     <h3>Natural Feed</h3>
//     <h3>Bulk Orders</h3>
//     <h3>FSSAI Certified</h3>
//     <h3>Direct from Farm</h3>
//
//   <h2>We Deliver to Everyone</h2>
//     <h3>Households</h3>
//     <h3>Restaurants & Cafes</h3>
//     <h3>Bakers & Sweets</h3>
//     <h3>Hotels & Resorts</h3>
//     <h3>Food Industries</h3>
//
//   <h2>Moments from Our Farm</h2>
//
//   <h2>Ready to Partner With GVR?</h2>
//
//   <h2>What Our Partners Say</h2>
//     (testimonials — each name as <h3> optional)
//

// ─────────────────────────────────────────────────────────────
// ABOUT PAGE  /about
// ─────────────────────────────────────────────────────────────
//
// <h1>About GVR Farm Foods – Rooted in Care, Driven by Purpose</h1>
//
//   <h2>Our Story</h2>
//     (narrative paragraphs — no sub-headings needed)
//
//   <h2>Our Philosophy</h2>
//     "Care deeply, farm naturally, and do what's right."
//
//   <h2>Our Process – Farm to Table</h2>
//     <h3>Farming & Collection</h3>
//     <h3>Quality Check</h3>
//     <h3>Packaging</h3>
//     <h3>Delivery</h3>
//
//   <h2>A Message from Our Founder</h2>
//

// ─────────────────────────────────────────────────────────────
// PRODUCTS PAGE  /products
// ─────────────────────────────────────────────────────────────
//
// <h1>Our Products – Farm Fresh Eggs & Premium Dry Fish</h1>
//
//   <h2>Premium Collection</h2>
//     <h3>Premium Dry Fish</h3>
//     <h3>Country Eggs</h3>
//     <h3>Brown Eggs</h3>
//     <h3>White Eggs</h3>
//     <h3>Duck Eggs</h3>
//     <h3>Kadaknath Eggs</h3>
//     <h3>Quail Eggs</h3>
//
//   <h2>A Trusted Partner for Your Business</h2>
//     <h3>Retailers</h3>
//     <h3>Restaurants</h3>
//     <h3>Cafes</h3>
//     <h3>Distributors</h3>
//
//   <h2>Frequently Asked Questions</h2>
//     <h3>Are your eggs farm fresh?</h3>
//     <h3>What types of eggs do you offer?</h3>
//     <h3>What is the shelf life of your eggs?</h3>
//     <h3>How should eggs be stored?</h3>
//     <h3>Do you offer subscriptions?</h3>
//     <h3>Do you supply in bulk for businesses?</h3>
//     <h3>Are your eggs FSSAI certified?</h3>
//     <h3>Do you deliver dry fish as well?</h3>
//

// ─────────────────────────────────────────────────────────────
// CONTACT PAGE  /contact
// ─────────────────────────────────────────────────────────────
//
// <h1>Contact GVR Farm Foods – Bulk Orders & Partnerships</h1>
//
//   <h2>Get In Touch</h2>
//     (contact form)
//
//   <h2>Our Contact Details</h2>
//     <h3>Phone</h3>
//     <h3>Email</h3>
//     <h3>Location</h3>
//
//   <h2>Frequently Asked Questions</h2>
//     (reuse FAQ component from products page)
//

// ─────────────────────────────────────────────────────────────
// IMPLEMENTATION EXAMPLE (Home Page Hero)
// ─────────────────────────────────────────────────────────────
//
// ❌ WRONG — keyword not in H1:
// <h1>Pure Fresh Eggs Everyday</h1>
//
// ✅ CORRECT — primary keyword in H1:
// <h1>Pure Fresh Eggs Everyday – GVR Farm Foods Tamil Nadu</h1>
//
// ❌ WRONG — skipping heading levels:
// <h1>Our Products</h1>
// <h3>Country Eggs</h3>   ← skipped H2
//
// ✅ CORRECT:
// <h1>Our Products</h1>
// <h2>Premium Collection</h2>
// <h3>Country Eggs</h3>

export {};
