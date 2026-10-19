"use client";

import Link from "next/link";
import { 
  FiArrowRight, 
  FiSend, 
  FiPenTool, 
  FiBriefcase, 
  FiCpu, 
  FiShield, 
  FiTv, 
  FiCode,
  FiDatabase,    
  FiGrid,
} from "react-icons/fi";
import SectionHeading from "@/components/Shared/SectionHeading";

const categories = [
  {
    slug: "marketing-tools",
    title: "Marketing Tools",
    itemCount: "18+ Products",
    href: "/categories/marketing-tools",
    icon: FiSend,
  },
  {
    slug: "software-apps",
    title: "Software & Apps",
    itemCount: "25+ Products",
    href: "/categories/software-apps",
    icon: FiGrid,
  },
  {
    slug: "ai-tools",
    title: "AI Tools",
    itemCount: "14+ Products",
    href: "/categories/ai-tools",
    icon: FiCpu,
  },
  {
    slug: "security-vpn",
    title: "Security & VPN",
    itemCount: "12+ Products",
    href: "/categories/security-vpn",
    icon: FiShield,
  },
  {
    slug: "design-creative",
    title: "Design & Creative",
    itemCount: "25+ Products",
    href: "/categories/design-creative",
    icon: FiPenTool,
  },
  {
    slug: "office-productivity",
    title: "Office & Productivity",
    itemCount: "32+ Products",
    href: "/categories/office-productivity",
    icon: FiBriefcase,
  },
  {
    slug: "developer-tools",
    title: "Developer Tools",
    itemCount: "16+ Products",
    href: "/categories/developer-tools",
    icon: FiCode,
  },
  {
    slug: "streaming-entertainment",
    title: "Streaming",
    itemCount: "20+ Products",
    href: "/categories/streaming-entertainment",
    icon: FiTv,
  },
  {
    slug: "cloud-storage",
    title: "Cloud & Storage",
    itemCount: "10+ Products",
    href: "/categories/cloud-storage",
    icon: FiDatabase,
  },
];

export default function CategorySection() {
  const displayedCategories = categories.slice(0, 10);
  const hasMoreCategories = categories.length > 10;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-neutral-50/60">
      <div className="mx-auto w-full max-w-[95%] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Categories"
          title="Browse by Category"
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 lg:gap-5">
          {displayedCategories.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.slug}
                href={item.href}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-4 sm:p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-(--primary)/40 hover:shadow-lg active:scale-98"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-(--primary)/10 text-(--primary) transition-all duration-300 group-hover:bg-(--primary) group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full text-neutral-400 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:text-(--primary) group-hover:translate-x-0.5">
                    <FiArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>

                <div className="mt-4 sm:mt-5">
                  <h3 className="text-sm font-bold text-neutral-900 group-hover:text-(--primary) transition-colors duration-200 sm:text-base line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-500">
                    {item.itemCount}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {hasMoreCategories && (
          <div className="mt-8 flex justify-center sm:mt-10 lg:mt-12">
            <Link
              href="/categories"
              className="group inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-800 shadow-xs transition-all duration-200 hover:border-(--primary) hover:text-(--primary) active:scale-95 sm:text-base"
            >
              <span>View All Categories</span>
              <FiArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}