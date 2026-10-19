"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

const sliderImages = [
  {
    id: 1,
    title: "WA Sender Marketing Tool Offer",
    imageUrl:
      "https://i.ibb.co.com/Gv1GBtWZ/WA-Sender-Marketing-Tool-Offer.png",
    productUrl: "/products/wa-sender",
  },
  {
    id: 2,
    title: "Canva Pro 1 Year Subscription Offer",
    imageUrl:
      "https://i.ibb.co.com/dznrYkj/Canva-Pro-1-Year-Subscription-Deal.png",
    productUrl: "/products/canva-pro",
  },
];

export default function BannerSection() {
  const count = sliderImages.length;
  const isMultiple = count > 1;

  const extendedSlides = isMultiple
    ? [sliderImages[count - 1], ...sliderImages, sliderImages[0]]
    : sliderImages;

  const [currentIndex, setCurrentIndex] = useState(isMultiple ? 1 : 0);
  const [hasTransition, setHasTransition] = useState(true);

  useEffect(() => {
    if (!isMultiple) return;

    const interval = setInterval(() => {
      setHasTransition(true);
      setCurrentIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [isMultiple, currentIndex]);

  const handleTransitionEnd = () => {
    if (!isMultiple) return;

    if (currentIndex >= count + 1) {
      setHasTransition(false);
      setCurrentIndex(1);
    } else if (currentIndex <= 0) {
      setHasTransition(false);
      setCurrentIndex(count);
    }
  };

  const activeDotIndex = isMultiple
    ? (currentIndex - 1 + count) % count
    : 0;

  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] lg:h-[calc(100svh-4rem)] items-center overflow-hidden py-6 lg:py-0">
      <div className="mx-auto w-full max-w-[95%] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-1 text-xs font-semibold text-(--primary) shadow-xs sm:text-sm">
              <FiCheckCircle className="h-4 w-4 shrink-0 text-(--primary)" />
              <span>Smart Digital Solutions. Trusted Software.</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl xl:text-6xl">
              <span>Everything Digital.</span>
              <br />
              <span className="gradient-text">One Trusted Hub.</span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base lg:text-lg">
              Discover genuine software licenses, premium digital tools,
              creative assets, and productivity solutions - all in one convenient
              marketplace.
            </p>

            <div className="mt-6 flex w-full flex-col items-center gap-3.5 sm:w-auto sm:flex-row sm:mt-8 sm:gap-4">
              <Link
                href="/products"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-(--primary) px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-(--primary-hover) active:scale-95 sm:w-auto sm:px-6 sm:py-3.5"
              >
                <span>Explore Products</span>
                <FiArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/special-offers"
                className="inline-flex w-full items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-800 shadow-xs transition-all duration-200 hover:bg-neutral-50 active:scale-95 sm:w-auto sm:px-6 sm:py-3.5"
              >
                Browse Special Offers
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="group relative aspect-square w-full max-w-80 overflow-hidden rounded-xl bg-(--primary)/20 p-2.5 shadow-md sm:max-w-100 lg:max-w-96 xl:max-w-105">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <div
                  onTransitionEnd={handleTransitionEnd}
                  className={`flex h-full w-full ${
                    hasTransition
                      ? "transition-transform duration-700 ease-in-out"
                      : ""
                  }`}
                  style={{
                    transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
                  }}
                >
                  {extendedSlides.map((item, index) => (
                    <Link
                      key={`${item.id}-${index}`}
                      href={item.productUrl}
                      className="relative h-full w-full shrink-0 basis-full overflow-hidden bg-gray-200"
                    >
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        priority={index === 1 || (!isMultiple && index === 0)}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 400px"
                        className="object-cover select-none"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              {isMultiple && (
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 sm:bottom-4 sm:gap-2">
                  {sliderImages.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setHasTransition(true);
                        setCurrentIndex(index + 1);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        activeDotIndex === index
                          ? "w-6 bg-(--primary)"
                          : "w-2 bg-white/80 hover:bg-white"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}