// components/seo/Analytics.js
// ============================================================
// GVR FARM FOODS — Google Analytics 4 + GTM
// ============================================================
//
// SETUP STEPS:
// 1. Create GA4 property at analytics.google.com
//    → Copy Measurement ID (format: G-XXXXXXXXXX)
// 2. Create GTM container at tagmanager.google.com
//    → Copy Container ID (format: GTM-XXXXXXX)
// 3. Replace the placeholder values below
// 4. Add <GTMHeadScript /> in app/layout.js <head>
//    Add <GTMBodyScript /> right after <body>
// ============================================================

// 🔁 Replace with your actual IDs
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";
const GTM_ID = "GTM-XXXXXXX";

// ── GTM Head Script ──────────────────────────────────────────
export function GTMHeadScript() {
  return (
    <script
      id="gtm-head"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `,
      }}
    />
  );
}

// ── GTM Body NoScript ─────────────────────────────────────────
export function GTMBodyScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="GTM"
      />
    </noscript>
  );
}

// ── GA4 Direct (without GTM) ─────────────────────────────────
// Use this only if you prefer GA4 without GTM
export function GA4Script() {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script
        id="ga4-init"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true,
            });
          `,
        }}
      />
    </>
  );
}

// ── Event Tracking Helpers ────────────────────────────────────

// Track WhatsApp button clicks
export function trackWhatsAppClick(page) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "whatsapp_click", {
      event_category: "CTA",
      event_label: `WhatsApp from ${page}`,
      value: 1,
    });
  }
}

// Track "Enquire Now" clicks
export function trackEnquiryClick(page) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "enquiry_click", {
      event_category: "CTA",
      event_label: `Enquiry from ${page}`,
      value: 1,
    });
  }
}

// Track phone number clicks
export function trackPhoneClick() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "phone_click", {
      event_category: "Contact",
      event_label: "Phone number clicked",
      value: 1,
    });
  }
}

// Track product card views
export function trackProductView(productName) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "view_item", {
      event_category: "Product",
      event_label: productName,
      currency: "INR",
    });
  }
}
