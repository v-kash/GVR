import "./globals.css";
import { Libre_Baskerville } from "next/font/google";
import ScrollReset from "@/components/ScrollReset";
import { SITE } from "@/lib/seo.config";

const libre = Libre_Baskerville({
  variable: "--font-main",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// ── Viewport ──────────────────────────────────────────────
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2D4A1E", // GVR dark green
};

// ── Default Metadata ──────────────────────────────────────
export const metadata = {
  title: {
    default: "GVR Farm Foods | Pure Fresh Eggs & Dry Fish – Delivered Daily",
    template: "%s | GVR Farm Foods",
  },
  description: SITE.description,

  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
    },
  },

  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: "GVR Farm Foods | Pure Fresh Eggs & Dry Fish – Delivered Daily",
    description: SITE.description,
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "GVR Farm Foods – Farm Fresh Eggs and Dry Fish from Tamil Nadu",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GVR Farm Foods | Pure Fresh Eggs & Dry Fish",
    description: SITE.description,
    images: ["/images/og-default.jpg"],
    // site: "@gvrfarmfoods",   // 🔁 Add when Twitter handle is ready
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#2D4A1E" },
    ],
  },

  manifest: "/site.webmanifest",

  // 🔁 Add these once GSC and Bing Webmaster Tools are set up
  verification: {
    google: "REPLACE_WITH_GSC_VERIFICATION_CODE",
  },

  applicationName: SITE.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "farm fresh eggs Tamil Nadu",
    "buy eggs online",
    "country eggs",
    "brown eggs",
    "Kadaknath eggs",
    "duck eggs",
    "quail eggs",
    "premium dry fish",
    "egg supplier Tamil Nadu",
    "GVR farm foods",
    "bulk egg supply",
  ],
  authors: [{ name: "GVR Farm Foods", url: SITE.url }],
  creator: "GVR Farm Foods",
  publisher: "GVR Farm Foods",

  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": SITE.shortName,
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${libre.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#f8f4ee] text-[#3e2f26] font-[family-name:var(--font-main)]">
        <ScrollReset />
        {children}
      </body>
    </html>
  );
}
