"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { tarotCards, TarotCard } from "@/data/tarot";
import { Sparkles, RotateCcw, Shuffle, Layers } from "lucide-react";

export default function TarotExperience() {
  const [spreadMode, setSpreadMode] = useState<"single" | "three">("three");
  const [drawnCards, setDrawnCards] = useState<TarotCard[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);

  // Shuffle & Draw cards without duplicates
  const handleDraw = (mode: "single" | "three") => {
    setSpreadMode(mode);
    setFlippedIndices([]);

    // Fisher-Yates shuffle
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
    const count = mode === "single" ? 1 : 3;
    setDrawnCards(shuffled.slice(0, count));
  };

  // Flip individual card
  const handleFlipCard = (index: number) => {
    if (!flippedIndices.includes(index)) {
      setFlippedIndices((prev) => [...prev, index]);
    }
  };

  // Flip all cards
  const handleFlipAll = () => {
    setFlippedIndices(drawnCards.map((_, i) => i));
  };

  const spreadLabels = spreadMode === "three" ? ["01. Past / Roots", "02. Present / Core", "03. Possibility / Horizon"] : ["Daily Reflective Anchor"];

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Spread Selector Controls */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => handleDraw("single")}
          className={`px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-sans-editorial transition-all border ${
            spreadMode === "single" && drawnCards.length > 0
              ? "bg-[#B89A6A] text-[#120B20] border-[#B89A6A]"
              : "bg-[#22132E] text-[#F3EDE3] border-[#B89A6A]/30 hover:border-[#B89A6A]"
          }`}
        >
          <span className="inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Single Card Anchor</span>
          </span>
        </button>

        <button
          onClick={() => handleDraw("three")}
          className={`px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-sans-editorial transition-all border ${
            spreadMode === "three" && drawnCards.length > 0
              ? "bg-[#B89A6A] text-[#120B20] border-[#B89A6A]"
              : "bg-[#22132E] text-[#F3EDE3] border-[#B89A6A]/30 hover:border-[#B89A6A]"
          }`}
        >
          <span className="inline-flex items-center gap-2">
            <Layers className="w-3.5 h-3.5" />
            <span>3-Card Spread (Past / Present / Possibility)</span>
          </span>
        </button>
      </div>

      {/* Initial Empty State or Instructions */}
      {drawnCards.length === 0 && (
        <div className="text-center py-16 px-6 rounded-3xl bg-[#22132E]/60 border border-[#B89A6A]/30 max-w-xl mx-auto">
          <Shuffle className="w-10 h-10 text-[#B89A6A] mx-auto mb-4 animate-pulse" />
          <h3 className="font-serif-editorial text-3xl text-[#F3EDE3]">
            Prepare Your Contemplation
          </h3>
          <p className="mt-3 text-sm text-[#F3EDE3]/75 font-sans-editorial leading-relaxed">
            Close your eyes, quiet your mind, and select one of the spreads above to draw from the Major Arcana.
          </p>
          <button
            onClick={() => handleDraw("three")}
            className="mt-6 px-8 py-3.5 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#D4BD8B] transition-colors"
          >
            Draw 3-Card Spread
          </button>
        </div>
      )}

      {/* Cards Display Grid */}
      {drawnCards.length > 0 && (
        <div className="space-y-10">
          <div
            className={`grid gap-8 justify-center ${
              spreadMode === "single" ? "max-w-xs mx-auto" : "grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto"
            }`}
          >
            {drawnCards.map((card, index) => {
              const isFlipped = flippedIndices.includes(index);
              return (
                <div key={card.id} className="flex flex-col items-center">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#B89A6A] font-semibold mb-3">
                    {spreadLabels[index]}
                  </span>

                  <div
                    onClick={() => handleFlipCard(index)}
                    className="perspective-1000 cursor-pointer w-full max-w-[280px] aspect-[3/4.4] group"
                    role="button"
                    tabIndex={0}
                    aria-label={`Flip card ${card.name}`}
                  >
                    <div
                      className={`relative w-full h-full rounded-2xl transform-style-3d transition-transform duration-700 shadow-2xl border border-[#B89A6A]/40 group-hover:border-[#B89A6A] ${
                        isFlipped ? "rotate-y-180" : ""
                      }`}
                    >
                      {/* Face Down Back */}
                      <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden bg-[#120B20]">
                        <Image
                          src="/images/tarot-card-back.jpg"
                          alt="Tarot card back"
                          fill
                          sizes="300px"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-4">
                          <span className="text-[11px] uppercase tracking-[0.25em] text-[#D9CDF5] bg-[#120B20]/85 px-4 py-1.5 rounded-full border border-[#B89A6A]/40 backdrop-blur-sm">
                            Click to Reveal
                          </span>
                        </div>
                      </div>

                      {/* Face Up Revealed Card */}
                      <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-[#120B20]">
                        <Image
                          src={card.image}
                          alt={card.name}
                          fill
                          sizes="300px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Actions (Reveal All / Reset) */}
          <div className="flex items-center justify-center gap-4 pt-2">
            {flippedIndices.length < drawnCards.length && (
              <button
                onClick={handleFlipAll}
                className="px-6 py-2.5 rounded-full border border-[#D9CDF5]/40 text-xs uppercase tracking-[0.2em] text-[#D9CDF5] hover:bg-[#D9CDF5]/15 transition-colors"
              >
                Reveal All Cards
              </button>
            )}
            <button
              onClick={() => handleDraw(spreadMode)}
              className="px-6 py-2.5 rounded-full bg-[#120B20] border border-[#B89A6A]/40 text-xs uppercase tracking-[0.2em] text-[#F3EDE3] hover:bg-[#B89A6A] hover:text-[#120B20] transition-colors inline-flex items-center gap-2"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reshuffle Deck</span>
            </button>
          </div>

          {/* Detailed Interpretation Dossiers for Flipped Cards */}
          {flippedIndices.length > 0 && (
            <div className="space-y-6 pt-6">
              <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#F3EDE3] text-center">
                Archetypal Synthesis
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {drawnCards.map((card, idx) => {
                  const isFlipped = flippedIndices.includes(idx);
                  if (!isFlipped) return null;

                  const meaning =
                    spreadMode === "single"
                      ? card.presentMeaning
                      : idx === 0
                      ? card.pastMeaning
                      : idx === 1
                      ? card.presentMeaning
                      : card.possibilityMeaning;

                  return (
                    <div
                      key={card.id}
                      className="p-6 rounded-2xl bg-[#22132E] border border-[#B89A6A]/30 flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-[#B89A6A] mb-1">
                          {spreadLabels[idx]}
                        </div>
                        <h4 className="font-serif-editorial text-2xl text-[#D9CDF5]">
                          {card.romanNumeral} • {card.name}
                        </h4>
                        <div className="flex flex-wrap gap-1.5 mt-2 mb-4">
                          {card.uprightKeywords.map((k) => (
                            <span
                              key={k}
                              className="text-[10px] px-2 py-0.5 rounded-full bg-[#120B20] text-[#B89A6A]"
                            >
                              {k}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs sm:text-sm text-[#F3EDE3]/85 font-sans-editorial leading-relaxed">
                          {meaning}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-[#B89A6A]/15 text-xs text-[#D9CDF5] italic font-serif-editorial">
                        "{card.affirmation}"
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Booking CTA Integration */}
      <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#22132E] via-[#120B20] to-[#22132E] border border-[#B89A6A]/30 text-center max-w-3xl mx-auto">
        <h4 className="font-serif-editorial text-3xl text-[#F3EDE3]">
          Desire a Deeper Personal Dialogue?
        </h4>
        <p className="mt-2 text-sm text-[#F3EDE3]/75 font-sans-editorial leading-relaxed max-w-xl mx-auto">
          In our 1-on-1 Contemplative Tarot Sanctuary, we unpack multi-card custom spreads tailored specifically to your active life inquiries.
        </p>
        <div className="mt-6">
          <Link
            href="/book?service=svc_tarot_reading"
            className="px-8 py-3.5 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#D4BD8B] transition-colors inline-block"
          >
            Reserve Private Tarot Session ($195)
          </Link>
        </div>
      </div>
    </div>
  );
}
