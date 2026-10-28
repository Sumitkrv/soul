import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config/site-config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CelestialCursor from "@/components/motion/CelestialCursor";
import PageTransitionProvider from "@/components/motion/PageTransitionProvider";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#120B20",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://thecelestialatelier.com"),
  title: {
    default: `${siteConfig.brand.name} — ${siteConfig.brand.tagline}`,
    template: `%s | ${siteConfig.brand.name}`,
  },
  description: siteConfig.brand.description,
  keywords: [
    "luxury astrology",
    "spiritual wellness",
    "natal chart reading",
    "tarot guidance",
    "celestial reflection",
    "astrology atelier",
    "cosmic rituals",
  ],
  authors: [{ name: siteConfig.brand.name }],
  openGraph: {
    title: `${siteConfig.brand.name} — ${siteConfig.brand.tagline}`,
    description: siteConfig.brand.description,
    url: "https://thecelestialatelier.com",
    siteName: siteConfig.brand.name,
    images: [
      {
        url: "/images/hero-celestial-forest.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.brand.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand.name} — ${siteConfig.brand.tagline}`,
    description: siteConfig.brand.description,
    images: ["/images/hero-celestial-forest.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#120B20] text-[#F3EDE3] font-sans-editorial selection:bg-[#B6A1EC] selection:text-[#120B20]">
        <CelestialCursor />
        <Navbar />
        <main className="flex-1">
          <PageTransitionProvider>{children}</PageTransitionProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}

