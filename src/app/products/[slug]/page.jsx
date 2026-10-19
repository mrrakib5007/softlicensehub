import { notFound } from "next/navigation";
import ProductDetailsPageClient from "./ProductDetailsPageClient";

const PRODUCTS_API =
  "https://raw.githubusercontent.com/mrrakib5007/softlicensehub/main/public/products.json";

async function getProducts() {
  try {
    const res = await fetch(PRODUCTS_API, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return null;
    }

    return await res.json();
  } catch (error) {
    return null;
  }
}

export async function generateStaticParams() {
  const products = await getProducts();
  if (!products || !Array.isArray(products)) return [];

  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const products = await getProducts();

  if (!products) {
    return {
      title: "Product Not Found",
    };
  }

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const title = `${product.title} - SoftLicenseHub`;
  const description =
    product.shortDescription ||
    "Best software license deals and premium subscriptions.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: product.image,
          width: 950,
          height: 700,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailsPage({ params }) {
  const { slug } = await params;
  const products = await getProducts();

  if (!products) {
    notFound();
  }

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailsPageClient product={product} />;
}