import AllProductsSection from "@/components/Home/AllProductsSection";
import BannerSection from "@/components/Home/BannerSection";
import CategorySection from "@/components/Home/CategorySection";

export default function Home() {
  return (
    <div>
        <BannerSection />
        <CategorySection />
        <AllProductsSection />
    </div>
  );
}
