"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import SectionHeading from "@/components/Shared/SectionHeading";
import ProductCard from "@/components/Cards/Productcard";

const PRODUCTS_API =
  "https://raw.githubusercontent.com/mrrakib5007/softlicensehub/main/public/products.json";

export default function AllProductsSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchProducts() {
      try {
        const res = await fetch(PRODUCTS_API);
        if (!res.ok) return;
        const data = await res.json();
        if (isMounted && Array.isArray(data)) {
          setProducts(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  const displayedProducts = products.slice(0, 20);
  const hasMore = products.length > 20;

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[95%] px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Products" title="Explore All Products" />

        {loading ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="h-80 w-full animate-pulse rounded-2xl bg-slate-100"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {displayedProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}

        {hasMore && !loading && (
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