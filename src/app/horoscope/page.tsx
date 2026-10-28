"use client";

import React, { useState } from "react";
import Link from "next/link";
import { zodiacData } from "@/data/zodiac";
import ZodiacSymbol from "@/components/celestial/ZodiacSymbols";
import Starfield from "@/components/celestial/Starfield";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HoroscopeHubPage() {
  const [activeElement, setActiveElement] = useState<string>("All");

  const elements = ["All", "Fire", "Earth", "Air", "Water"];

  const filteredSigns =
    activeElement === "All"
      ? zodiacData
      : zodiacData.filter((s) => s.element === activeElement);

  return (
    <div className="relative min-h-screen bg-[#120B20] text-[#F3EDE3] pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Starfield density={50} speed={0.15} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B89A6A] font-semibold">
            The Twelve Celestial Houses
          </span>
          <h1 className="font-serif-editorial text-5xl sm:text-7xl font-light text-[#F3EDE3] mt-3">
            Zodiac Discovery
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#F3EDE3]/80 font-sans-editorial leading-relaxed max-w-2xl mx-auto">
            Discover the symbolic architecture, ruling luminaries, and contemplative inquiries associated with each archetypal sign.
          </p>

          {/* Elemental Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {elements.map((elem) => (
              <button
                key={elem}
                onClick={() => setActiveElement(elem)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-sans-editorial transition-all border ${
                  activeElement === elem
                    ? "bg-[#B89A6A] text-[#120B20] border-[#B89A6A] font-medium"
                    : "bg-[#22132E] text-[#F3EDE3]/80 border-[#B89A6A]/20 hover:border-[#B89A6A]"
                }`}
              >
                {elem}
              </button>
            ))}
          </div>
        </div>

        {/* 12 Signs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSigns.map((sign) => (
            <Link
              key={sign.id}
              href={`/horoscope/${sign.id}`}
              className="group p-8 rounded-3xl border border-[#B89A6A]/25 bg-[#22132E]/60 hover:bg-[#22132E] hover:border-[#B89A6A] transition-all duration-400 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#120B20] border border-[#B89A6A]/30 flex items-center justify-center group-hover:scale-110 group-hover:border-[#B89A6A] transition-all">
                    <ZodiacSymbol sign={sign.id} size={30} color="#B89A6A" />
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#B89A6A] block">
                      {sign.dates}
                    </span>
                    <span className="text-xs text-[#D9CDF5] font-sans-editorial">
                      {sign.element} • {sign.ruler}
                    </span>
                  </div>
                </div>

                <h3 className="font-serif-editorial text-3xl text-[#F3EDE3] group-hover:text-[#D9CDF5] transition-colors">
                  {sign.name} <span className="text-xl font-normal opacity-70">({sign.symbol})</span>
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#F3EDE3]/70 font-sans-editorial leading-relaxed line-clamp-3">
                  {sign.essence}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {sign.keywords.slice(0, 3).map((kw) => (
                    <span
                      key={kw}
                      className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#120B20] text-[#B89A6A] border border-[#B89A6A]/15"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#B89A6A]/15 flex items-center justify-between text-xs text-[#D9CDF5]">
                <span>Explore In-Depth Guide</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
