"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CelestialMonogram from "@/components/celestial/CelestialMonogram";
import { siteConfig } from "@/lib/config/site-config";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isInnerPage = pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Experiences", href: "/services" },
    { label: "Zodiac", href: "/horoscope" },
    { label: "Tarot", href: "/tarot" },
    { label: "Numerology", href: "/numerology" },
    { label: "Journal", href: "/journal" },
    { label: "Events", href: "/events" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isInnerPage || scrolled
            ? "bg-[#120B20]/95 backdrop-blur-md border-b border-[#B89A6A]/25 py-3 shadow-lg shadow-black/40"
            : "bg-gradient-to-b from-[#120B20]/90 via-[#120B20]/40 to-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo & Monogram */}
          <CelestialMonogram variant="gold" showWordmark={true} />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] xl:text-xs uppercase tracking-[0.16em] font-sans-editorial transition-all duration-300 relative py-1 whitespace-nowrap ${
                    isActive
                      ? "text-[#D9CDF5] font-semibold"
                      : "text-[#F3EDE3]/75 hover:text-[#D9CDF5]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#B89A6A] to-transparent" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/book"
              className="hidden sm:inline-flex items-center gap-2 px-4 xl:px-5 py-2 xl:py-2.5 rounded-full border border-[#B89A6A]/80 text-[#F3EDE3] text-[11px] xl:text-xs uppercase tracking-[0.18em] font-sans-editorial bg-[#120B20]/80 hover:bg-[#B89A6A] hover:text-[#120B20] transition-all duration-300 group shadow-sm whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B89A6A] group-hover:text-[#120B20] transition-colors" />
              <span>Book a Reading</span>
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#F3EDE3] hover:text-[#D9CDF5] transition-colors focus:outline-none focus:ring-1 focus:ring-[#B89A6A] rounded-lg"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex flex-col justify-between bg-[#120B20]/98 backdrop-blur-xl border-b border-[#B89A6A]/30 pt-24 pb-8 px-6 transition-all duration-300">
          <div className="flex flex-col gap-4 pt-2">
            <Link
              href="/"
              className={`text-xl font-serif-editorial tracking-[0.1em] transition-colors py-1 ${
                pathname === "/" ? "text-[#D9CDF5] font-semibold" : "text-[#F3EDE3]/80"
              }`}
            >
              Home
            </Link>
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xl font-serif-editorial tracking-[0.1em] transition-colors py-1 ${
                    isActive ? "text-[#D9CDF5] font-semibold" : "text-[#F3EDE3]/80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-[#B89A6A]/20 flex flex-col gap-3">
            <Link
              href="/book"
              className="w-full text-center py-3.5 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#D4BD8B] transition-colors"
            >
              Reserve a Consultation
            </Link>
            <div className="text-center text-[11px] text-[#B89A6A]/75 font-sans-editorial">
              {siteConfig.brand.location}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
