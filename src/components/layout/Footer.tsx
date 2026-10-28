import React from "react";
import Link from "next/link";
import CelestialMonogram from "@/components/celestial/CelestialMonogram";
import CelestialDivider from "@/components/celestial/CelestialDividers";
import { siteConfig } from "@/lib/config/site-config";
import { Mail, Compass, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#120B20] text-[#F3EDE3] border-t border-[#B89A6A]/20 relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#B6A1EC]/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#B89A6A]/15">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col gap-4 pr-0 lg:pr-8">
            <CelestialMonogram variant="gold" showWordmark={true} />
            <p className="text-sm text-[#F3EDE3]/70 font-sans-editorial leading-relaxed max-w-md pt-2">
              A private celestial sanctuary where ancient astrological wisdom, archetypal myth, and contemplative reflection meet modern editorial luxury.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-[#B89A6A]">
              <Compass className="w-4 h-4 shrink-0" />
              <span>Coordinated from {siteConfig.brand.timeZone} for seekers worldwide</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-[#F3EDE3]/60">
              <Mail className="w-4 h-4 shrink-0 text-[#B89A6A]" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#D9CDF5] transition-colors">
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          {/* Offerings Column */}
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89A6A] font-semibold">
              Experiences
            </span>
            <ul className="flex flex-col gap-2.5 text-xs text-[#F3EDE3]/75 font-sans-editorial">
              <li>
                <Link href="/services/astrology-consultation" className="hover:text-[#D9CDF5] transition-colors">
                  Natal Chart Blueprint
                </Link>
              </li>
              <li>
                <Link href="/services/tarot-reading" className="hover:text-[#D9CDF5] transition-colors">
                  Tarot Sanctuary
                </Link>
              </li>
              <li>
                <Link href="/services/birth-chart-exploration" className="hover:text-[#D9CDF5] transition-colors">
                  Solar Return Forecast
                </Link>
              </li>
              <li>
                <Link href="/services/numerology-session" className="hover:text-[#D9CDF5] transition-colors">
                  Numerology Blueprint
                </Link>
              </li>
              <li>
                <Link href="/services/spiritual-guidance" className="hover:text-[#D9CDF5] transition-colors">
                  Esoteric Mentorship
                </Link>
              </li>
              <li>
                <Link href="/services/rituals-workshops" className="hover:text-[#D9CDF5] transition-colors">
                  Ceremonial Circles
                </Link>
              </li>
            </ul>
          </div>

          {/* Sanctuary Navigation */}
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89A6A] font-semibold">
              Explore
            </span>
            <ul className="flex flex-col gap-2.5 text-xs text-[#F3EDE3]/75 font-sans-editorial">
              <li>
                <Link href="/about" className="hover:text-[#D9CDF5] transition-colors">
                  Our Story & Philosophy
                </Link>
              </li>
              <li>
                <Link href="/horoscope" className="hover:text-[#D9CDF5] transition-colors">
                  Zodiac Discovery
                </Link>
              </li>
              <li>
                <Link href="/tarot" className="hover:text-[#D9CDF5] transition-colors">
                  Interactive Tarot Spread
                </Link>
              </li>
              <li>
                <Link href="/numerology" className="hover:text-[#D9CDF5] transition-colors">
                  Life Path Calculator
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-[#D9CDF5] transition-colors">
                  Cosmic Journal
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-[#D9CDF5] transition-colors">
                  Workshops & Gatherings
                </Link>
              </li>
            </ul>
          </div>

          {/* Booking & Concierge */}
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89A6A] font-semibold">
              Reservations
            </span>
            <p className="text-xs text-[#F3EDE3]/70 leading-relaxed font-sans-editorial">
              Consultations are limited each lunar cycle to ensure deep preparation.
            </p>
            <Link
              href="/book"
              className="mt-2 text-center py-2.5 px-4 rounded-full border border-[#B89A6A] text-[#F3EDE3] text-xs uppercase tracking-[0.2em] hover:bg-[#B89A6A] hover:text-[#120B20] transition-all"
            >
              Reserve Session
            </Link>
            <Link
              href="/contact"
              className="text-xs text-[#B89A6A] hover:text-[#D9CDF5] transition-colors text-center pt-1"
            >
              Contact Atelier Concierge →
            </Link>
          </div>
        </div>

        {/* Ethical Sanctuary Notice (Section 15) */}
        <div className="py-6 border-b border-[#B89A6A]/10 text-[11px] text-[#F3EDE3]/50 leading-relaxed font-sans-editorial">
          <div className="flex items-start gap-2.5 max-w-4xl mx-auto">
            <ShieldCheck className="w-4 h-4 text-[#B89A6A] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#B89A6A]/90 font-medium">Contemplative Practice Notice:</strong> Astrology, Tarot, and Numerology at The Celestial Atelier are offered as meditative arts for self-reflection, personal empowerment, and symbolic inquiry. They do not constitute deterministic prediction, legal counsel, financial advisement, or medical/psychological treatment. Consultations celebrate conscious agency and personal sovereignty.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Admin */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F3EDE3]/60 font-sans-editorial">
          <p>© 2024–2025 {siteConfig.brand.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#D9CDF5] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#D9CDF5] transition-colors">
              Terms of Sanctuary
            </Link>
            <Link href="/admin" className="text-[#B89A6A]/70 hover:text-[#B89A6A] transition-colors">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
