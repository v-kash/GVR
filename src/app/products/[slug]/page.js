import { notFound } from "next/navigation";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Link from "next/link";
import { ChevronRight, Phone, CheckCircle2 } from "lucide-react";
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
      <div className="mx-auto max-w-7xl px-6 lg:px-16 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start " >
          {/* Left — Product image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[400px] lg:h-[440px] object-cover "
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
              <img
                src="/icons/Untitle1.png"
                alt=""
                className="w-4 h-4 object-contain opacity-30"
              />
              <div className="h-px flex-1 bg-[#6E7E45]/15" />
            </div>

            {/* Benefits checklist */}
            <ul className="flex flex-col gap-3 mb-8">
              {product.benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-[#4D5B2A] flex-shrink-0"
                    strokeWidth={2}
                  />
                  <span
                    className={`${montserrat.className} text-[13px] text-[#241A12]`}
                    style={{ fontWeight: 500 }}
                  >
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            {/* Enquire button */}
            <a
              href="https://wa.me/919448453609"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-stretch rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="bg-[#3f4a22] px-5 flex items-center justify-center">
                <Phone size={17} className="text-[#f5f0e7]" />
              </span>
              <span
                className={`${montserrat.className} bg-[#4D5B2A] px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-[#f5f0e7]`}
                style={{ fontWeight: 600 }}
              >
                Enquire Now →
              </span>
            </a>
          </div>
        </div>
      </div>

 {/* PRODUCT DETAILS */}
<section className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
  <div className="bg-[#F8F6F1] border border-[#e6dfd2] rounded-md overflow-hidden">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

      {/* IDEAL FOR */}
      <div className="p-8 border-b lg:border-b-0 lg:border-r border-[#e5ddd0]">

        <div className="text-center mb-8">
          <h3
            className={`${montserrat.className} text-[13px] uppercase tracking-[0.12em] text-[#2B2621]`}
            style={{ fontWeight: 700 }}
          >
            Ideal For
          </h3>

          <div className="w-10 h-[2px] bg-[#C49A2A] mx-auto mt-3" />
        </div>

        <div className="space-y-6">
          {product.bestSuitedFor.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4"
            >
              <img
                src={suitedIcons[item] || "/icons/home.png"}
                alt=""
                className="w-7 h-7 object-contain opacity-75"
              />

              <span
                className={`${montserrat.className} text-[14px] text-[#413931] leading-5`}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* NUTRITION */}
      <div className="p-8 border-b lg:border-b-0 lg:border-r border-[#e5ddd0]">

        <div className="text-center mb-8">
          <h3
            className={`${montserrat.className} text-[13px] uppercase tracking-[0.12em] text-[#2B2621]`}
            style={{ fontWeight: 700 }}
          >
            Nutrition (Per Egg)
          </h3>

          <div className="w-10 h-[2px] bg-[#C49A2A] mx-auto mt-3" />
        </div>

        <div className="space-y-3">
          {product.nutrition.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center border-b border-[#ece4d8] pb-2"
            >
              <span
                className={`${montserrat.className} text-[13px] text-[#72675D]`}
              >
                {item.title}
              </span>

              <span
                className={`${montserrat.className} text-[13px] text-[#2B2621]`}
                style={{ fontWeight: 600 }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <img
          src="/images/farm-sketch.png"
          alt=""
          className="mt-10 w-full object-contain opacity-60"
        />
      </div>

      {/* PACKAGING */}
      <div className="p-8 border-b lg:border-b-0 lg:border-r border-[#e5ddd0]">

        <div className="text-center mb-8">
          <h3
            className={`${montserrat.className} text-[13px] uppercase tracking-[0.12em] text-[#2B2621]`}
            style={{ fontWeight: 700 }}
          >
            Packaging Options
          </h3>

          <div className="w-10 h-[2px] bg-[#C49A2A] mx-auto mt-3" />
        </div>

        <div className="space-y-8">

          {product.packaging.map((item, i) => (
            <div
              key={i}
              className="text-center"
            >
              {/* <img
                src={packagingImages[item]}
                alt=""
                className="w-32 mx-auto object-contain"
              /> */}

              <p
                className={`${montserrat.className} text-[14px] text-[#413931] mt-3`}
              >
                {item}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* PACKING STYLE */}
      <div className="p-8">

        <div className="text-center mb-8">
          <h3
            className={`${montserrat.className} text-[13px] uppercase tracking-[0.12em] text-[#2B2621]`}
            style={{ fontWeight: 700 }}
          >
            Packing Style
          </h3>

          <div className="w-10 h-[2px] bg-[#C49A2A] mx-auto mt-3" />
        </div>

        <div className="space-y-8">

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#F0ECE3] flex items-center justify-center flex-shrink-0">
              <img
                src="/icons/leaf.svg"
                alt=""
                className="w-6 h-6"
              />
            </div>

            <p
              className={`${montserrat.className} text-[14px] leading-6 text-[#413931]`}
            >
              Safe & Secure Packaging
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#F0ECE3] flex items-center justify-center flex-shrink-0">
              <img
                src="/icons/snowflake.svg"
                alt=""
                className="w-6 h-6"
              />
            </div>

            <p
              className={`${montserrat.className} text-[14px] leading-6 text-[#413931]`}
            >
              Maintains Freshness During Delivery
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#F0ECE3] flex items-center justify-center flex-shrink-0">
              <img
                src="/icons/leaf.svg"
                alt=""
                className="w-6 h-6"
              />
            </div>

            <p
              className={`${montserrat.className} text-[14px] leading-6 text-[#413931]`}
            >
              Eco-Friendly Materials
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
    </main>
  );
}
