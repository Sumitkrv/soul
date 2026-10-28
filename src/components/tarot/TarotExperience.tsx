"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { tarotCards, TarotCard } from "@/data/tarot";
import MagneticButton from "@/components/motion/MagneticButton";
import { Sparkles, RotateCcw, Shuffle, Layers } from "lucide-react";

export default function TarotExperience() {
  const [spreadMode, setSpreadMode] = useState<"single" | "three">("three");
  const [drawnCards, setDrawnCards] = useState<TarotCard[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [tiltStates, setTiltStates] = useState<Record<number, { rotX: number; rotY: number }>>({});
  const [isShuffling, setIsShuffling] = useState(false);

  // Shuffle & Draw cards without duplicates
  const handleDraw = (mode: "single" | "three") => {
    setIsShuffling(true);
    setSpreadMode(mode);
    setFlippedIndices([]);
    setTiltStates({});

    setTimeout(() => {
      // Fisher-Yates shuffle
      const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
      const count = mode === "single" ? 1 : 3;
      setDrawnCards(shuffled.slice(0, count));
      setIsShuffling(false);
    }, 400);
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

  const handleCardMouseMove = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    if (flippedIndices.includes(index)) return; // disable tilt after flip
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setTiltStates((prev) => ({
      ...prev,
      [index]: { rotX: -y * 12, rotY: x * 12 },
    }));
  };

  const handleCardMouseLeave = (index: number) => {
    setTiltStates((prev) => ({
      ...prev,
      [index]: { rotX: 0, rotY: 0 },
    }));
  };

  const spreadLabels =
    spreadMode === "three"
      ? ["01. Past / Roots", "02. Present / Core", "03. Possibility / Horizon"]
      : ["Daily Reflective Anchor"];

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Spread Selector Controls */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <MagneticButton strength={0.2}>
          <button
            onClick={() => handleDraw("single")}
            className={`px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-sans-editorial transition-all border ${
              spreadMode === "single" && drawnCards.length > 0
                ? "bg-[#B89A6A] text-[#120B20] border-[#B89A6A] shadow-lg shadow-[#B89A6A]/20"
                : "bg-[#22132E] text-[#F3EDE3] border-[#B89A6A]/30 hover:border-[#B89A6A]"
            }`}
          >
            <span className="inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Single Card Anchor</span>
            </span>
          </button>
        </MagneticButton>

        <MagneticButton strength={0.2}>
          <button
            onClick={() => handleDraw("three")}
            className={`px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-sans-editorial transition-all border ${
              spreadMode === "three" && drawnCards.length > 0
                ? "bg-[#B89A6A] text-[#120B20] border-[#B89A6A] shadow-lg shadow-[#B89A6A]/20"
                : "bg-[#22132E] text-[#F3EDE3] border-[#B89A6A]/30 hover:border-[#B89A6A]"
            }`}
          >
            <span className="inline-flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              <span>3-Card Spread (Past / Present / Possibility)</span>
            </span>
          </button>
        </MagneticButton>
      </div>

      {/* Initial Empty State or Instructions */}
      {drawnCards.length === 0 && (
        <div className="text-center py-16 px-6 rounded-3xl bg-[#22132E]/60 border border-[#B89A6A]/30 max-w-xl mx-auto backdrop-blur-md shadow-2xl">
          <Shuffle className="w-10 h-10 text-[#B89A6A] mx-auto mb-4 animate-pulse" />
          <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#F3EDE3] font-light">
            Prepare Your Contemplation
          </h3>
          <p className="mt-3 text-sm text-[#F3EDE3]/75 font-sans-editorial leading-relaxed">
            Close your eyes, quiet your mind, and select one of the spreads above to draw from the Major Arcana.
          </p>
          <div className="mt-6">
            <MagneticButton strength={0.25}>
              <button
                onClick={() => handleDraw("three")}
                className="px-8 py-3.5 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#D4BD8B] transition-colors shadow-lg"
              >
                Draw 3-Card Spread
              </button>
            </MagneticButton>
          </div>
        </div>
      )}

      {/* Cards Display Grid */}
      {drawnCards.length > 0 && (
        <div className={`space-y-10 transition-opacity duration-300 ${isShuffling ? "opacity-30" : "opacity-100"}`}>
          <div
            className={`grid gap-8 justify-center ${
              spreadMode === "single" ? "max-w-xs mx-auto" : "grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto"
            }`}
          >
            {drawnCards.map((card, index) => {
              const isFlipped = flippedIndices.includes(index);
              const tilt = tiltStates[index] || { rotX: 0, rotY: 0 };

              return (
                <div key={card.id} className="flex flex-col items-center">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#B89A6A] font-semibold mb-3">
                    {spreadLabels[index]}
                  </span>

                  <div
                    onClick={() => handleFlipCard(index)}
                    onMouseMove={(e) => handleCardMouseMove(index, e)}
                    onMouseLeave={() => handleCardMouseLeave(index)}
                    className="perspective-1000 cursor-pointer w-full max-w-[280px] aspect-[3/4.4] group select-none"
                    role="button"
                    tabIndex={0}
                    aria-label={`Flip card ${card.name}`}
                  >
                    <div
                      className="relative w-full h-full rounded-2xl transform-style-3d shadow-2xl border border-[#B89A6A]/40 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                      style={{
                        transform: isFlipped
                          ? "rotateY(180deg) translateZ(10px)"
                          : `perspective(1000px) rotateX(${tilt.rotX}deg) rotateY(${tilt.rotY}deg)`,
                        boxShadow: isFlipped
                          ? "0 20px 40px rgba(184,154,106,0.3)"
                          : undefined,
                      }}
                    >
                      {/* Face Down Back */}
                      <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden bg-[#120B20] border border-[#B89A6A]/30">
                        <Image
                          src="/images/tarot-card-back.jpg"
                          alt="Tarot card back"
                          fill
                          sizes="300px"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center p-4">
                          <span className="text-[11px] uppercase tracking-[0.25em] text-[#D9CDF5] bg-[#120B20]/85 px-4 py-1.5 rounded-full border border-[#B89A6A]/40 backdrop-blur-sm group-hover:border-[#B89A6A]">
                            Click to Reveal
                          </span>
                        </div>
                      </div>

                      {/* Face Up Revealed Card */}
                      <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-[#120B20] border-2 border-[#D4BD8B] shadow-[0_0_20px_rgba(212,189,139,0.35)]">
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
            <MagneticButton strength={0.2}>
              <button
                onClick={() => handleDraw(spreadMode)}
                className="px-6 py-2.5 rounded-full bg-[#120B20] border border-[#B89A6A]/40 text-xs uppercase tracking-[0.2em] text-[#F3EDE3] hover:bg-[#B89A6A] hover:text-[#120B20] transition-colors inline-flex items-center gap-2 shadow-md"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reshuffle Deck</span>
              </button>
            </MagneticButton>
          </div>

          {/* Detailed Interpretation Dossiers for Flipped Cards */}
          {flippedIndices.length > 0 && (
            <div className="space-y-6 pt-6 animate-fade-in">
              <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#F3EDE3] text-center font-light">
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
                      className="p-6 rounded-3xl bg-[#22132E] border border-[#B89A6A]/30 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-[#B89A6A]/60"
                    >
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-[#B89A6A] mb-1">
                          {spreadLabels[idx]}
                        </div>
                        <h4 className="font-serif-editorial text-2xl text-[#F3EDE3] mb-3">
                          {card.romanNumeral} • {card.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#F3EDE3]/85 font-sans-editorial leading-relaxed">
                          {meaning}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-[#B89A6A]/20">
                        <span className="text-[11px] text-[#D9CDF5] italic font-serif-editorial">
                          Affirmation: "{card.affirmation}"
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
