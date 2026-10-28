"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { tarotCards } from "@/data/tarot";
import { Sparkles, RotateCcw, ArrowRight } from "lucide-react";

export default function InteractiveTarotSection() {
  // Use the 3 featured cards with custom artwork
  const featuredCards = [tarotCards[0], tarotCards[1], tarotCards[2]]; // The Star, The Moon, The Sun
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    if (flippedIndex === null) {
      setFlippedIndex(index);
    }
  };

  const handleReset = () => {
    setFlippedIndex(null);
  };

  const activeCard = flippedIndex !== null ? featuredCards[flippedIndex] : null;

  return (
    <section className="bg-[#22132E] text-[#F3EDE3] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-[#B89A6A]/20">
      {/* Background radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#B6A1EC]/5 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B89A6A] font-semibold">
            Interactive Archetypal Oracle
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#F3EDE3] mt-3 leading-tight">
            Choose a card. <br />
            <span className="italic font-normal text-[#D9CDF5]">Meet a new perspective.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#F3EDE3]/75 font-sans-editorial leading-relaxed">
            Take a slow breath, bring an unspoken question to mind, and select one of the three face-down cards to reveal an archetypal mirror.
          </p>
        </div>

        {/* 3 Interactive Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {featuredCards.map((card, index) => {
            const isFlipped = flippedIndex === index;
            const isAnyFlipped = flippedIndex !== null;
            const isDimmed = isAnyFlipped && !isFlipped;

            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(index)}
                className={`perspective-1000 cursor-pointer transition-all duration-500 ${
                  isDimmed ? "opacity-35 scale-95 pointer-events-none" : "hover:-translate-y-2"
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleCardClick(index);
                  }
                }}
                aria-label={`Select Tarot card ${index + 1}`}
              >
                <div
                  className={`relative aspect-[3/4.4] w-full rounded-2xl transform-style-3d transition-transform duration-700 shadow-2xl border border-[#B89A6A]/30 ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Card Front: Original Gold-Foil Velvet Back Asset 13 */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden bg-[#120B20]">
                    <Image
                      src="/images/tarot-card-back.jpg"
                      alt="Antique gold foil celestial tarot card back design"
                      fill
                      sizes="(max-width: 640px) 100vw, 300px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors flex items-end justify-center p-4">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9CDF5] bg-[#120B20]/80 px-3 py-1 rounded-full backdrop-blur-sm border border-[#B89A6A]/30">
                        Select Card
                      </span>
                    </div>
                  </div>

                  {/* Card Back: Revealed Card Face with Custom Artwork */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-[#120B20]">
                    <Image
                      src={card.image}
                      alt={card.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 300px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Revealed Interpretation Dialogue Box */}
        {activeCard && (
          <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-[#120B20]/90 border border-[#B89A6A]/40 backdrop-blur-md shadow-2xl animate-fade-in text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B89A6A]/20 text-[#D9CDF5] text-xs uppercase tracking-[0.2em] font-sans-editorial mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#B89A6A]" />
              <span>{activeCard.romanNumeral} • {activeCard.name}</span>
            </div>

            <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#F3EDE3]">
              "{activeCard.summary}"
            </h3>

            <p className="mt-4 text-sm text-[#F3EDE3]/80 font-sans-editorial leading-relaxed">
              {activeCard.presentMeaning}
            </p>

            <div className="mt-6 p-4 rounded-xl bg-[#22132E] border border-[#B89A6A]/20 text-xs sm:text-sm text-[#D9CDF5] italic font-serif-editorial">
              Affirmation: "{activeCard.affirmation}"
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#B89A6A]/60 text-xs uppercase tracking-[0.2em] text-[#F3EDE3] hover:bg-[#B89A6A] hover:text-[#120B20] transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Shuffle & Draw Again</span>
              </button>

              <Link
                href="/tarot"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D9CDF5] hover:text-[#F3EDE3] transition-colors group"
              >
                <span>Explore Full 3-Card Spread</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        )}

        {/* Responsible Disclaimer */}
        <p className="text-center text-xs text-[#F3EDE3]/55 mt-10 max-w-xl mx-auto">
          The tarot is practiced here as an archetypal mirror for introspection and intuitive clarity, not a fatalistic forecast.
        </p>
      </div>
    </section>
  );
}
