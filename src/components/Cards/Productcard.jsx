"use client";

import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { FiHeart, FiShoppingCart, FiStar } from "react-icons/fi";

const badgeStyles = {
  "best seller": "bg-amber-500",
  featured: "bg-violet-600",
  popular: "bg-blue-600",
  "hot deal": "bg-orange-600",
  verified: "bg-emerald-600",
  new: "bg-sky-500",
};

const getBadgeStyle = (badge) =>
  badgeStyles[badge?.trim().toLowerCase()] || "bg-(--primary)";

export default function ProductCard({ product }) {
  const defaultVariant = product.variants?.[0] || {
    id: 1,
    duration: "",
    price: 0,
    originalPrice: null,
  };

  const handleAddToCart = () => {
    console.log(product._id);
    toast.success(`${product.title} added to cart`);
  };

  return (
    <div
      className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-(--primary)/40 hover:shadow-lg"
    >
      <div>
        <div className="relative aspect-950/700 w-full overflow-hidden bg-neutral-100 p-2.5">
          <Link
            href={`/products/${product.slug}`}
            aria-label={`View ${product.title} details`}
            className="relative block h-full w-full overflow-hidden rounded-xl bg-neutral-200"
          >
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          <div className="pointer-events-none absolute top-4 left-4 z-10 flex flex-wrap items-center gap-1.5">
            {product.badge && (
              <span className={`rounded-md px-2 py-0.5 text-[11px] font-bold text-white shadow-xs ${getBadgeStyle(product.badge)}`}>
                {product.badge}
              </span>
            )}
            {product.discount && (
              <span className="rounded-md bg-rose-600 px-1.5 py-0.5 text-[11px] font-bold text-white shadow-xs">
                {product.discount}
              </span>
            )}
          </div>

          <button
            type="button"
            aria-label="Add to wishlist"
            className="absolute top-4 right-4 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/90 text-neutral-700 shadow-xs backdrop-blur-xs transition-all duration-200 hover:bg-white hover:text-rose-500 active:scale-90"
          >
            <FiHeart className="h-4 w-4" />
          </button>
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-semibold text-(--primary)">
              {product.category}
            </span>
            {defaultVariant.duration && (
              <span className="rounded-md bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-600">
                {defaultVariant.duration}
              </span>
            )}
          </div>

          <Link href={`/products/${product.slug}`}>
            <h3 className="mt-1 line-clamp-1 text-base font-bold text-neutral-900 transition-colors duration-200 group-hover:text-(--primary)">
              {product.title}
            </h3>
          </Link>

          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-neutral-500">
            {product.shortDescription}
          </p>

          <div className="mt-2.5 flex items-center gap-1.5 text-xs font-semibold text-neutral-700">
            <FiStar className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span>{product.rating}</span>
            <span className="text-neutral-400 font-normal">
              ({product.reviewsCount})
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-neutral-100 p-4 pt-3 sm:p-5 sm:pt-3">
        <div className="flex flex-col">
          <span className="text-lg font-extrabold text-neutral-950 sm:text-xl">
            ৳{defaultVariant.price.toFixed(2)}
          </span>
          {defaultVariant.originalPrice && (
            <span className="text-xs text-neutral-400 line-through">
              ৳{defaultVariant.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-md lg:rounded-xl bg-(--primary) px-5 py-2 text-xs font-bold text-white shadow-xs transition-all duration-200 hover:bg-(--primary-hover) active:scale-95 sm:text-sm"
        >
          <FiShoppingCart className="h-4 w-4" />
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}