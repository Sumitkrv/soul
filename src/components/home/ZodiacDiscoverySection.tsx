"use client";

import React, { useState } from "react";
import Link from "next/link";
import { zodiacData } from "@/data/zodiac";
import ZodiacSymbol from "@/components/celestial/ZodiacSymbols";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ZodiacDiscoverySection() {
  const [selectedSign, setSelectedSign] = useState(zodiacData[0]); // Defaults to Aries

  return (
    <section className="bg-[#B6A1EC] text-[#211B25] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background celestial watermark rings */}
      <div
        className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full border border-[#120B20]/10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -right-20 -top-20 w-[400px] h-[400px] rounded-full border border-[#120B20]/15 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#211B25]/75 font-semibold">
            Archetypal Astrological Wheel
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#211B25] mt-3 leading-tight">
            Written in the stars. <br />
            <span className="italic font-normal">Explored by you.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#211B25]/80 font-sans-editorial leading-relaxed max-w-xl mx-auto">
            Select an archetype to explore the symbolic qualities, elemental wisdom, and reflective invitations woven into each constellation.
          </p>
        </div>

        {/* 12 Sign Selector Pills / Badges */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-12">
          {zodiacData.map((sign) => {
            const isSelected = selectedSign.id === sign.id;
            return (
              <button
                key={sign.id}
                onClick={() => setSelectedSign(sign)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-[#120B20] ${
                  isSelected
                    ? "bg-[#120B20] text-[#D9CDF5] border-[#120B20] shadow-lg scale-105"
                    : "bg-[#F3EDE3]/70 hover:bg-[#F3EDE3] text-[#211B25] border-transparent hover:border-[#120B20]/20"
                }`}
                aria-pressed={isSelected}
              >
                <ZodiacSymbol
                  sign={sign.id}
                  size={24}
                  color={isSelected ? "#B89A6A" : "#211B25"}
                  className="mb-1"
                />
                <span className="text-[11px] font-sans-editorial font-semibold tracking-wider">
                  {sign.name}
                </span>
                <span className="text-[9px] opacity-75 font-sans-editorial">{sign.symbol}</span>
              </button>
            );
          })}
        </div>

        {/* Central Detailed Sign Display Card */}
        <div className="bg-[#F3EDE3] rounded-3xl p-8 sm:p-12 border border-[#120B20]/10 shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Giant Emblem & Basic Placements */}
            <div className="md:col-span-4 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-[#120B20]/15 pb-6 md:pb-0 md:pr-6">
              <div className="w-24 h-24 rounded-full bg-[#120B20] flex items-center justify-center mb-4 shadow-md">
                <ZodiacSymbol sign={selectedSign.id} size={52} color="#B89A6A" />
              </div>
              <h3 className="font-serif-editorial text-4xl text-[#211B25] font-medium">
                {selectedSign.name}
              </h3>
              <span className="text-xs uppercase tracking-[0.2em] text-[#A8654C] font-semibold mt-1">
                {selectedSign.dates}
              </span>

              <div className="mt-6 flex flex-wrap gap-2 justify-center text-[11px] font-sans-editorial">
                <span className="px-2.5 py-1 rounded-full bg-[#B6A1EC]/30 text-[#211B25] border border-[#211B25]/10">
                  Element: <strong>{selectedSign.element}</strong>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#B6A1EC]/30 text-[#211B25] border border-[#211B25]/10">
                  Ruler: <strong>{selectedSign.ruler}</strong>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#B6A1EC]/30 text-[#211B25] border border-[#211B25]/10">
                  Modality: <strong>{selectedSign.modality}</strong>
                </span>
              </div>
            </div>

            {/* Right: Archetypal Essence & Contemplative Prompt */}
            <div className="md:col-span-8 flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#A8654C] font-semibold">
                  Archetypal Essence
                </span>
                <p className="font-serif-editorial text-2xl text-[#211B25] leading-snug mt-1">
                  "{selectedSign.essence}"
                </p>

                <p className="mt-4 text-sm text-[#211B25]/85 font-sans-editorial leading-relaxed">
                  {selectedSign.overview}
                </p>

                <div className="mt-6 p-4 rounded-xl bg-[#B6A1EC]/20 border border-[#B6A1EC]/40">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#211B25] mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#A8654C]" />
                    <span>Contemplative Inquiry</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#211B25]/90 italic font-serif-editorial">
                    "{selectedSign.reflectionPrompt}"
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#120B20]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-[#211B25]/70 font-sans-editorial">
                  Botanical: <strong className="text-[#211B25]">{selectedSign.botanical}</strong> • Stone: <strong className="text-[#211B25]">{selectedSign.gemstone}</strong>
                </div>

                <Link
                  href={`/horoscope/${selectedSign.id}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#211B25] hover:text-[#A8654C] transition-colors group"
                >
                  <span>Read Complete Guide</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Astrological Disclosure */}
        <p className="text-center text-xs text-[#211B25]/75 mt-8 max-w-xl mx-auto">
          Sun sign archetypes offer symbolic starting points. A complete natal chart incorporates the Moon, Rising sign, and ten planetary coordinates cast for your exact minute of birth.
        </p>
      </div>
    </section>
  );
}
