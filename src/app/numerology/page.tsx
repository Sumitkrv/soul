import React from "react";
import type { Metadata } from "next";
import NumerologyCalculator from "@/components/numerology/NumerologyCalculator";
import Starfield from "@/components/celestial/Starfield";

export const metadata: Metadata = {
  title: "Pythagorean Numerology Sanctuary | The Celestial Atelier",
  description:
    "Explore the sacred mathematics of your birth date. Calculate your Life Path number and discover the vibrational blueprints of Pythagorean archetypes.",
};

export default function NumerologyPage() {
  return (
    <div className="relative min-h-screen bg-[#120B20] text-[#F3EDE3] pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Starfield density={45} speed={0.15} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B89A6A] font-semibold">
            Sacred Mathematical Harmony
          </span>
          <h1 className="font-serif-editorial text-5xl sm:text-7xl font-light text-[#F3EDE3] mt-3">
            The Architecture of Numbers
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#F3EDE3]/80 font-sans-editorial leading-relaxed max-w-2xl mx-auto">
            From ancient Pythagorean sanctuaries to modern archetypal contemplation, numbers represent the underlying geometry of consciousness.
          </p>
        </div>

        <NumerologyCalculator />
      </div>
    </div>
  );
}
