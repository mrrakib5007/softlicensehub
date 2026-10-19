import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://softlicensehub.com"),

  title: {
    default: "Soft License Hub | Software Licenses & Digital Products",
    template: "%s | Soft License Hub",
  },

  description:
    "Discover software licenses, activation keys, digital subscriptions, and premium digital products at Soft License Hub. Shop digital products with ease.",

  applicationName: "SoftLicenseHub",

  keywords: [
    "SoftLicenseHub",
    "Soft License Hub",
    "Soft License Hub BD",
    "software licenses",
    "software activation keys",
    "digital products",
    "genuine software keys",
    "digital subscriptions",
    "premium digital products",
    "buy software online",
  ],

  authors: [{ name: "Soft License Hub" }],
  creator: "Soft License Hub",
  publisher: "Soft License Hub",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://softlicensehub.com",
    siteName: "Soft License Hub",
    title: "Soft License Hub | Software Licenses & Digital Products",
    description:
      "Explore software licenses, activation keys, subscriptions, and digital products at SoftLicenseHub.",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Soft License Hub",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Soft License Hub | Software Licenses & Digital Products",
    description:
      "Shop software licenses, activation keys, subscriptions, and digital products at SoftLicenseHub.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${plusJakartaSans.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-(--primary)/5">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}