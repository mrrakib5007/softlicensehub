"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import SectionHeading from "@/components/Shared/SectionHeading";
import ProductCard from "@/components/Cards/Productcard";

export const allProducts = [
  {
    _id: "66fa89c1a1e4d8f12a000002",
    title: "Canva Pro Subscription",
    category: "Design & Creative",
    badge: "Popular",
    discount: "-35%",
    rating: 4.9,
    reviewsCount: 310,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=950&h=700&auto=format&fit=crop&q=80",
    slug: "canva-pro-subscription",
    shortDescription: "Unlimited premium templates, brand kits, and cloud storage.",
    longDescription:
      "Take your creative branding to the next level with Canva Pro. Access over 100+ million premium stock photos, graphics, audio, videos, background removal tools, and unlimited folder organization.",
    features: [
      "100M+ Premium Stock Photos & Videos",
      "One-Click Background Remover",
      "Brand Kit Support with Custom Fonts",
      "Magic Resizer for Social Formats",
      "1TB Cloud Storage",
    ],
    variants: [
      { id: 1, duration: "6 Months", price: 29.0, originalPrice: 45.0 },
      { id: 2, duration: "1 Year", price: 49.0, originalPrice: 75.0 },
    ],
    createdAt: "2026-01-18T09:00:00.000Z",
    updatedAt: "2026-03-22T14:40:00.000Z",
  },
  {
    _id: "66fa89c1a1e4d8f12a000003",
    title: "WA Sender Marketing Suite",
    category: "Marketing Tools",
    badge: "Hot Deal",
    discount: "-38%",
    rating: 4.7,
    reviewsCount: 89,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=950&h=700&auto=format&fit=crop&q=80",
    slug: "wa-sender-marketing-suite",
    shortDescription: "Automated bulk campaign manager with smart delays.",
    longDescription:
      "WA Sender Marketing Suite is built to scale customer reach through smart automated messaging, detailed transmission metrics, delay intervals to prevent spam flags, and seamless contact list import.",
    features: [
      "Automated Bulk Message Dispatcher",
      "Anti-Block Delay Protection Engine",
      "Dynamic Name & Variable Tag Insertion",
      "Direct Excel & CSV Contact Import",
      "Real-Time Delivery & Click Reports",
    ],
    variants: [
      { id: 1, duration: "6 Months", price: 49.0, originalPrice: 79.0 },
      { id: 2, duration: "1 Year", price: 89.0, originalPrice: 129.0 },
      { id: 3, duration: "Lifetime", price: 189.0, originalPrice: 249.0 },
    ],
    createdAt: "2026-02-01T11:20:00.000Z",
    updatedAt: "2026-03-25T16:10:00.000Z",
  },
];

export default function AllProductsSection() {
  const displayedProducts = allProducts.slice(0, 20);
  const hasMore = allProducts.length > 20;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="mx-auto w-full max-w-[95%] px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Products" title="Explore All Products" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {displayedProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 flex justify-center sm:mt-12 lg:mt-14">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-800 shadow-xs transition-all duration-200 hover:border-(--primary) hover:text-(--primary) active:scale-95 sm:text-base"
            >
              <span>Browse More</span>
              <FiArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}