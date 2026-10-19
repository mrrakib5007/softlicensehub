"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiStar,
  FiDownload,
  FiShield,
  FiRefreshCw,
  FiMinus,
  FiPlus,
  FiCheckCircle,
} from "react-icons/fi";

export default function ProductDetailsPageClient({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.[0] || null
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <nav className="mb-6 flex items-center gap-2 text-sm">
          <Link
            href="/"
            className="font-bold text-gray-500 transition-colors hover:text-(--primary)"
          >
            Home
          </Link>
          <span className="text-slate-400">»</span>
          <Link
            href="/products"
            className="font-bold text-gray-500 transition-colors hover:text-(--primary)"
          >
            Products
          </Link>
          <span className="text-slate-400">»</span>
          <span className="font-bold text-(--primary)">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <div className="relative aspect-950/700 w-full overflow-hidden rounded-2xl border border-slate-200">
              <Image
                src={product.image}
                alt={product.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="flex flex-col lg:col-span-6">
            <span className="text-sm font-semibold text-(--primary)">
              {product.category}
            </span>

            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {product.title}
            </h1>

            <div className="mt-3 flex items-center gap-1.5 text-sm">
              <FiStar className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="font-medium text-slate-700">
                {product.rating} rating
              </span>
              <span className="text-slate-400">
                ({product.reviewsCount} reviews)
              </span>
            </div>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {product.shortDescription}
            </p>

            <div className="mt-6">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-extrabold text-slate-900">
                  ৳{selectedVariant ? selectedVariant.price.toFixed(2) : "0.00"}
                </span>
                {selectedVariant?.originalPrice && (
                  <span className="text-lg text-slate-400 line-through">
                    ৳{selectedVariant.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            {product.variants && product.variants.length > 0 && (
              <div className="mt-6">
                <label className="text-sm font-semibold text-slate-900">
                  Select Plan / Duration
                </label>
                <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {product.variants.map((variant) => {
                    const isSelected = selectedVariant?.id === variant.id;
                    return (
                      <button
                        key={variant.id}
                        type="button"
                        onClick={() => setSelectedVariant(variant)}
                        className={`flex flex-col items-start rounded-xl border p-3.5 text-left transition-all ${
                          isSelected
                            ? "border-(--primary) bg-emerald-50/40 text-emerald-950 shadow-xs ring-1 ring-(--primary)"
                            : "border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        <span className="text-sm font-bold">
                          {variant.duration}
                        </span>
                        <span
                          className={`mt-1 text-xs ${
                            isSelected ? "text-emerald-700" : "text-slate-500"
                          }`}
                        >
                          ৳{variant.price.toFixed(2)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex h-11 w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-3 sm:w-auto sm:justify-center sm:px-2">
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 active:scale-95"
                >
                  <FiMinus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center text-sm font-semibold text-slate-900 sm:w-10">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 active:scale-95"
                >
                  <FiPlus className="h-4 w-4" />
                </button>
              </div>

              <button
                type="button"
                className="flex h-11 w-full items-center justify-center rounded-xl border border-(--primary) bg-white px-6 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-50 active:scale-98 sm:w-auto"
              >
                Add to Cart
              </button>

              <button
                type="button"
                className="flex h-11 w-full items-center justify-center rounded-xl bg-(--primary) px-7 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 active:scale-98 sm:w-auto"
              >
                Buy Now
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3.5 py-2.5 text-xs font-medium text-slate-700">
                <FiDownload className="h-4 w-4 shrink-0 text-(--primary)" />
                <span>Instant download</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3.5 py-2.5 text-xs font-medium text-slate-700">
                <FiShield className="h-4 w-4 shrink-0 text-(--primary)" />
                <span>Secure checkout</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3.5 py-2.5 text-xs font-medium text-slate-700">
                <FiRefreshCw className="h-4 w-4 shrink-0 text-(--primary)" />
                <span>Refund policy</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-200 pt-10">
          <div className="max-w-4xl space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Product Description
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {product.longDescription}
              </p>
            </div>

            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Key Features
                </h3>
                <ul className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/60 p-3.5"
                    >
                      <FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-(--primary)" />
                      <span className="text-sm font-medium text-slate-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}