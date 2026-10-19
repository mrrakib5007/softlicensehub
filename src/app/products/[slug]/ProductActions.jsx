"use client";

import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function ProductActions({ variants = [] }) {
  const [selectedVariant, setSelectedVariant] = useState(variants[0] || null);
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="mt-6">
        <div className="flex items-baseline gap-3">
          <span className="text-4xl font-extrabold text-slate-900">
            \${selectedVariant ? selectedVariant.price.toFixed(2) : "0.00"}
          </span>
          {selectedVariant?.originalPrice && (
            <span className="text-lg text-slate-400 line-through">
              \${selectedVariant.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>

      {variants.length > 0 && (
        <div className="mt-6">
          <label className="text-sm font-semibold text-slate-900">
            Select Plan / Duration
          </label>
          <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {variants.map((variant) => {
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
                  <span className="text-sm font-bold">{variant.duration}</span>
                  <span
                    className={`mt-1 text-xs ${
                      isSelected ? "text-emerald-700" : "text-slate-500"
                    }`}
                  >
                    ${variant.price.toFixed(2)}
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
    </>
  );
}