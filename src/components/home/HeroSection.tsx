"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Starfield from "@/components/celestial/Starfield";
import { Sparkles, ArrowDown, Compass } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#120B20] pt-24 pb-16">
      {/* Background Cinematic Woodland & Celestial Horizon */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-celestial-forest.jpg"
          alt="Ancient woodland at twilight opening onto luminous celestial horizon"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Atmospheric Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120B20] via-[#120B20]/60 to-[#120B20]/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#120B20]/40 to-[#120B20]/90" />
      </div>

      {/* Subtle twinkling starfield */}
      <Starfield density={70} speed={0.25} />

      {/* Floating Moon Sculpture Artwork Element (Desktop Feature) */}
      <div className="hidden xl:block absolute right-12 top-1/2 -translate-y-1/2 z-10 w-[360px] h-[360px] pointer-events-none animate-float-slow opacity-85">
        <div className="relative w-full h-full rounded-full p-2">
          {/* Subtle orbital glow */}
          <div className="absolute inset-0 rounded-full bg-[#B6A1EC]/15 blur-2xl animate-pulse-glow" />
          <Image
            src="/images/moon-sculpture.jpg"
            alt="Floating antique celestial moon sculpture with brass orbital rings"
            fill
            sizes="360px"
            className="object-contain drop-shadow-2xl rounded-full"
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Golden Angel Infinity Logo Emblem */}
        <div className="relative mb-6 group cursor-pointer">
          <div className="absolute -inset-2 rounded-full bg-[#B89A6A]/25 blur-xl group-hover:bg-[#B89A6A]/45 transition-all duration-700 animate-pulse-glow" />
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#B89A6A] p-1 bg-[#120B20] shadow-[0_0_25px_rgba(184,154,106,0.4)] transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/images/brand-logo.jpg"
              alt="Soul Vera Angel Golden Logo Emblem"
              fill
              priority
              sizes="96px"
              className="object-cover scale-110 group-hover:scale-120 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#B89A6A]/40 bg-[#120B20]/60 backdrop-blur-md mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B89A6A] animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#D9CDF5] font-sans-editorial">
            Soul Vera Angel • Sanctuary for Conscious Seekers
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#B89A6A] animate-pulse" />
        </div>

        {/* Hero Headline */}
        <h1 className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[0.06em] text-[#F3EDE3] leading-[1.05] max-w-4xl text-balance">
          The Sky Holds <br />
          <span className="italic font-normal text-[#D9CDF5] bg-gradient-to-r from-[#D9CDF5] via-[#B6A1EC] to-[#F3EDE3] bg-clip-text text-transparent">
            A Story.
          </span> <br />
          So Do You.
        </h1>

        {/* Supporting description */}
        <p className="mt-8 text-base sm:text-lg md:text-xl text-[#F3EDE3]/80 font-sans-editorial max-w-2xl leading-relaxed text-balance">
          Discover a quieter space for celestial insight, intentional reflection, and meaningful connection with your inner world.
        </p>

        {/* CTA Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <Link
            href="/services"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#D4BD8B] transition-all duration-300 shadow-lg shadow-[#B89A6A]/15 text-center group inline-flex items-center justify-center gap-2"
          >
            <span>Explore Experiences</span>
            <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
          </Link>

          <Link
            href="/book"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#D9CDF5]/40 text-[#F3EDE3] text-xs uppercase tracking-[0.25em] font-medium bg-[#120B20]/40 backdrop-blur-md hover:bg-[#D9CDF5]/15 hover:border-[#D9CDF5] transition-all duration-300 text-center inline-flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-4 h-4 text-[#B89A6A] group-hover:text-[#D9CDF5] transition-colors" />
            <span>Begin Your Journey</span>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B89A6A]/75 animate-bounce">
          <span className="text-[10px]">Descend Within</span>
          <ArrowDown className="w-4 h-4 text-[#B89A6A]" />
        </div>
      </div>
    </section>
  );
}
