"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CelestialMonogram from "@/components/celestial/CelestialMonogram";
import OrbitalRings from "@/components/celestial/OrbitalRings";
import MagneticButton from "@/components/motion/MagneticButton";
import { siteConfig } from "@/lib/config/site-config";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();
  const isInnerPage = pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isInnerPage || scrolled
            ? "bg-[#120B20]/95 backdrop-blur-xl border-b border-[#B89A6A]/25 py-3 shadow-xl shadow-black/50"
            : "bg-gradient-to-b from-[#120B20]/95 via-[#120B20]/50 to-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo & Monogram */}
          <CelestialMonogram variant="gold" showWordmark={true} />

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-2 xl:gap-4 relative"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              const isHovered = hoveredLink === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  className={`text-[11px] xl:text-xs uppercase tracking-[0.16em] font-sans-editorial transition-all duration-300 relative px-3 py-2 whitespace-nowrap rounded-full ${
                    isActive
                      ? "text-[#D9CDF5] font-semibold"
                      : "text-[#F3EDE3]/80 hover:text-[#D9CDF5]"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>

                  {/* Sophisticated Animated Underline Indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-gradient-to-r from-transparent via-[#B89A6A] to-transparent rounded-full shadow-[0_0_8px_rgba(184,154,106,0.8)]" />
                  )}

                  {/* Subtle Hover Aura */}
                  {isHovered && !isActive && (
                    <span className="absolute inset-0 bg-[#B6A1EC]/10 rounded-full -z-0 transition-opacity duration-200" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <MagneticButton strength={0.2}>
              <Link
                href="/book"
                className="hidden sm:inline-flex items-center gap-2 px-4 xl:px-5 py-2 xl:py-2.5 rounded-full border border-[#B89A6A]/80 text-[#F3EDE3] text-[11px] xl:text-xs uppercase tracking-[0.18em] font-sans-editorial bg-[#120B20]/80 hover:bg-[#B89A6A] hover:text-[#120B20] hover:shadow-[0_0_20px_rgba(184,154,106,0.4)] transition-all duration-300 group shadow-sm whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#B89A6A] group-hover:text-[#120B20] transition-transform duration-300 group-hover:rotate-12" />
                <span>Book a Reading</span>
              </Link>
            </MagneticButton>

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

      {/* Mobile Full-Screen Plum Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden flex flex-col justify-between bg-[#120B20]/98 backdrop-blur-2xl border-b border-[#B89A6A]/30 pt-24 pb-8 px-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Background Celestial Orbital Watermark Emblem */}
        <div className="absolute right-0 bottom-12 opacity-15 pointer-events-none">
          <OrbitalRings size={320} speed={0.5} />
        </div>

        {/* Sequential Navigation Links */}
        <div className="flex flex-col gap-3 pt-2 relative z-10">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`text-2xl font-serif-editorial tracking-[0.1em] transition-all duration-300 py-1.5 border-b border-[#B89A6A]/15 ${
              pathname === "/" ? "text-[#D9CDF5] font-semibold" : "text-[#F3EDE3]/85"
            }`}
            style={{
              transitionDelay: mobileMenuOpen ? "50ms" : "0ms",
              transform: mobileMenuOpen ? "translateY(0)" : "translateY(12px)",
              opacity: mobileMenuOpen ? 1 : 0,
            }}
          >
            Home
          </Link>

          {navLinks.map((link, idx) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-serif-editorial tracking-[0.1em] transition-all duration-300 py-1.5 border-b border-[#B89A6A]/10 ${
                  isActive ? "text-[#D9CDF5] font-semibold" : "text-[#F3EDE3]/85"
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${(idx + 2) * 45}ms` : "0ms",
                  transform: mobileMenuOpen ? "translateY(0)" : "translateY(12px)",
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Drawer Bottom Section */}
        <div className="pt-6 border-t border-[#B89A6A]/20 flex flex-col gap-3 relative z-10">
          <Link
            href="/book"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3.5 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#D4BD8B] transition-colors shadow-lg"
          >
            Reserve a Consultation
          </Link>
          <div className="text-center text-[11px] text-[#B89A6A]/75 font-sans-editorial tracking-wider">
            {siteConfig.brand.location}
          </div>
        </div>
      </div>
    </>
  );
}
