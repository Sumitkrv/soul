import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Calendar } from "lucide-react";

export default function CelestialInvitationCta() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-[#120B20] text-[#F3EDE3] py-28 px-4 sm:px-6 lg:px-8">
      {/* Background Celestial Invitation Artwork Asset 12 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/celestial-invitation.jpg"
          alt="Luminous crescent moon in deep violet night sky with cosmic particles and sacred geometry"
          fill
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Soft atmospheric gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120B20] via-transparent to-[#120B20]" />
        <div className="absolute inset-0 bg-[#120B20]/40" />
      </div>

      {/* Main Content Box */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#B89A6A]/50 bg-[#120B20]/70 backdrop-blur-md mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#B89A6A]" />
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#D9CDF5] font-sans-editorial">
            The Doorway to Your Blueprint
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl font-light text-[#F3EDE3] tracking-wide leading-[1.08] text-balance">
          Your next chapter <br />
          <span className="italic font-normal text-[#D9CDF5]">begins within.</span>
        </h2>

        {/* Supporting text */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#F3EDE3]/85 font-sans-editorial max-w-2xl leading-relaxed text-balance">
          An invitation to slow down, look inward, and discover what feels deeply meaningful to you under the guidance of the stars.
        </p>

        {/* CTA Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-5">
          <Link
            href="/book"
            className="px-10 py-4 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#D4BD8B] transition-all duration-300 shadow-xl shadow-black/50 inline-flex items-center gap-2 group"
          >
            <Calendar className="w-4 h-4 text-[#120B20]" />
            <span>Reserve Your Reading</span>
          </Link>

          <Link
            href="/services"
            className="px-8 py-4 rounded-full border border-[#D9CDF5]/40 text-[#F3EDE3] text-xs uppercase tracking-[0.25em] hover:bg-[#D9CDF5]/15 transition-all text-center"
          >
            Review Offerings
          </Link>
        </div>

        <span className="mt-8 text-xs text-[#B89A6A]/80 font-sans-editorial tracking-widest">
          Sessions limited monthly • Worldwide virtual consultations
        </span>
      </div>
    </section>
  );
}
