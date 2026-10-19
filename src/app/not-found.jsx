import Link from "next/link";
import { FiHome, FiShoppingBag, FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-90px)] w-full items-center justify-center px-4 py-16">
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <div className="relative flex items-center justify-center">
          <span className="text-[130px] font-extrabold leading-none tracking-tight gradient-text sm:text-[180px]">
            404
          </span>
        </div>
        <p className="mt-2 text-xl font-bold text-gray-900 sm:text-2xl">
          Page Not Found
        </p>

        <p className="mt-4 max-w-md text-sm text-gray-600 sm:text-base">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#16A34A] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#15803D] active:scale-95 sm:w-auto"
          >
            <FiHome className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/products"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-xs transition-all duration-200 hover:bg-gray-50 hover:text-[#16A34A] active:scale-95 sm:w-auto"
          >
            <FiShoppingBag className="h-4 w-4" />
            <span>Browse Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
