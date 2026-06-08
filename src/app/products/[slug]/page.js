import { notFound } from "next/navigation";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Link from "next/link";
import { ChevronRight, Phone, CheckCircle2, CheckCircle } from "lucide-react";
import products from "@/data/products.json";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Generate static params for all products
export async function generateStaticParams() {
  return products.products.map((p) => ({ slug: p.slug }));
}

// Packaging icons mapping
const packagingIcons = {
  "30 Eggs Tray": "/icons/eggnest.png",
  "60 Eggs Tray": "/icons/eggnest.png",
  "Bulk Supply": "/icons/truck.png",
  "30 Eggs Pack": "/icons/eggnest.png",
  "30 Eggs Tray": "/icons/eggnest.png",
  "500g Pack": "/icons/sprout.png",
  "1kg Pack": "/icons/sprout.png",
};

const packagingDesc = {
  "30 Eggs Tray": "Ideal for small families",
  "60 Eggs Tray": "Perfect for medium requirements",
  "Bulk Supply": "Custom quantity available",
  "30 Eggs Pack": "Perfect small pack",
  "500g Pack": "Perfect for households",
  "1kg Pack": "Great for regular use",
};

const suitedIcons = {
  Households: "/icons/home.png",
  Families: "/icons/home.png",
  Restaurants: "/icons/eggnest.png",
  Hotels: "/icons/Assure.png",
  Retailers: "/icons/truck.png",
  Bakeries: "/icons/sprout.png",
  "Food Service": "/icons/truck.png",
  "Specialty Food Businesses": "/icons/hen.png",
  "Health-Conscious Consumers": "/icons/leaf.png",
  "Fitness Enthusiasts": "/icons/leaf.png",
  "Premium Retailers": "/icons/Assure.png",
};

const features = [
  {
    icon: "/icons/leaf.png",
    title: "Farm Fresh",
    desc: "Sourced daily from trusted local farms",
  },
  {
    icon: "/icons/Shield.png",
    title: "Quality Assured",
    desc: "Strict quality checks for your safety",
  },
  {
    icon: "/icons/sprout.png",
    title: "Natural & Nutritious",
    desc: "Packed with essential nutrients",
  },
  {
    icon: "/icons/truck.png",
    title: "Delivered with Care",
    desc: "Hygienic packaging and timely delivery",
  },
];

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = products.products.find((p) => p.slug === slug);

  if (!product) notFound();

  const otherProducts = products.products.filter((p) => p.slug !== slug);
  return (
    <main className="bg-[#f5f0e7] min-h-screen">
      {/* ── BREADCRUMB ── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-16 pt-14 pb-4">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className={`${montserrat.className} text-[11px] uppercase tracking-[0.12em] text-[#4D5B2A] hover:text-[#6E7E45] transition-colors`}
            style={{ fontWeight: 600 }}
          >
            Home
          </Link>
          <ChevronRight size={13} className="text-[#5f5146]/40" />
          <Link
            href="/products"
            className={`${montserrat.className} text-[11px] uppercase tracking-[0.12em] text-[#4D5B2A] hover:text-[#6E7E45] transition-colors`}
            style={{ fontWeight: 600 }}
          >
            Products
          </Link>
          <ChevronRight size={13} className="text-[#5f5146]/40" />
          <span
            className={`${montserrat.className} text-[11px] uppercase tracking-[0.12em] text-[#5f5146]/60`}
            style={{ fontWeight: 400 }}
          >
            {product.name}
          </span>
        </div>
      </div>

      {/* ── HERO ── */}
      <div className="mx-auto max-w-7xl px-6 lg:px-16 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ">
          {/* Left — Product image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] lg:h-[480px] object-cover pt-4"
          />

          {/* Right — Product info */}
          <div>
            {/* Product name */}
            <h1
              className={`${cormorant.className} text-[48px] lg:text-[64px] font-semibold text-[#241A12] leading-tight mb-2`}
            >
              {product.name}
            </h1>

            {/* Description */}
            <p
              className={`${montserrat.className} text-[13px] lg:text-[14px] text-[#5f5146] leading-[1.9] mb-4`}
              style={{ fontWeight: 400 }}
            >
              {product.description}
            </p>

            {/* Divider with leaf */}
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px flex-1 bg-[#6E7E45]/15" />
               <div
                className="w-7 h-7 lg:w-8 lg:h-8 bg-[#6E7E45] opacity-50 "
                style={{
                  WebkitMaskImage: "url(/icons/HeadLeaf.svg)",
                  maskImage: "url(/icons/HeadLeaf.svg)",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              />
              <div className="h-px flex-1 bg-[#6E7E45]/15" />
            </div>

            {/* Benefits + Ideal For */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Product Highlights */}
              <div>
                <h3
                  className={`${montserrat.className} text-[11px] uppercase tracking-[0.14em] text-[#4D5B2A] mb-4`}
                  style={{ fontWeight: 700 }}
                >
                  Product Highlights
                </h3>

                <ul className="space-y-3">
                  {product.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        size={16}
                        className="text-[#4D5B2A] mt-1 flex-shrink-0"
                        strokeWidth={2}
                      />

                      <span
                        className={`${montserrat.className} text-[13px] text-[#241A12] leading-6`}
                        style={{ fontWeight: 500 }}
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal For */}
              <div>
                <h3
                  className={`${montserrat.className} text-[11px] uppercase tracking-[0.14em] text-[#4D5B2A] mb-4`}
                  style={{ fontWeight: 700 }}
                >
                  Ideal For
                </h3>

                <div className="space-y-3">
                  {product.bestSuitedFor.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle
                        size={16}
                        className="text-[#4D5B2A] mt-1 flex-shrink-0"
                        strokeWidth={2}
                      />

                      <span
                        className={`${montserrat.className} text-[13px] text-[#241A12]`}
                        style={{ fontWeight: 500 }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enquire button */}
            <a
              href="https://wa.me/919448453609"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-stretch rounded-[2px] overflow-hidden transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="bg-[#3f4a22] px-5 flex items-center justify-center">
                <Phone size={17} className="text-[#f5f0e7]" />
              </span>
              <span
                className={`${montserrat.className} bg-[#4D5B2A] px-4 py-3 text-[11px] uppercase tracking-[0.2em] text-[#f5f0e7]`}
                style={{ fontWeight: 600 }}
              >
                Enquire Now 
              </span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
