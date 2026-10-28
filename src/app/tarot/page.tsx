import React from "react";
import type { Metadata } from "next";
import TarotExperience from "@/components/tarot/TarotExperience";
import Starfield from "@/components/celestial/Starfield";

export const metadata: Metadata = {
  title: "Contemplative Tarot Sanctuary | The Celestial Atelier",
  description:
    "An interactive Major Arcana tarot experience. Draw a single daily reflective card or an archetypal 3-card spread for Past, Present, and Possibility.",
};

export default function TarotPage() {
  return (
    <div className="relative min-h-screen bg-[#120B20] text-[#F3EDE3] pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Starfield density={50} speed={0.15} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B89A6A] font-semibold">
            Archetypal Oracle Sanctuary
          </span>
          <h1 className="font-serif-editorial text-5xl sm:text-7xl font-light text-[#F3EDE3] mt-3">
            The Mirror of the Arcana
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#F3EDE3]/80 font-sans-editorial leading-relaxed max-w-2xl mx-auto">
            Step away from deterministic fortune-telling. The tarot offers a rich symbolic vocabulary to illuminate what your intuition already knows.
          </p>
        </div>

        <TarotExperience />
      </div>
    </div>
  );
}
