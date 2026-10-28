import React from "react";
import Link from "next/link";
import Starfield from "@/components/celestial/Starfield";
import { Compass, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#120B20] text-[#F3EDE3] flex items-center justify-center p-4 overflow-hidden">
      <Starfield density={50} speed={0.2} />

      <div className="relative z-10 max-w-lg w-full text-center p-8 sm:p-12 rounded-3xl bg-[#22132E] border border-[#B89A6A]/30 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-[#120B20] border border-[#B89A6A] flex items-center justify-center mx-auto mb-6 text-[#B89A6A]">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <span className="text-[10px] uppercase tracking-[0.3em] text-[#B89A6A] font-semibold">
          Error 404 • Lost in the Celestial Spheres
        </span>

        <h1 className="font-serif-editorial text-4xl sm:text-5xl font-light text-[#F3EDE3] mt-3 mb-4">
          Uncharted Constellation
        </h1>

        <p className="text-xs sm:text-sm text-[#F3EDE3]/75 font-sans-editorial mb-8 leading-relaxed">
          The celestial coordinates you sought do not exist in our current astrological sky. Allow intuition to guide you back to our sanctuary.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#D4BD8B] transition-colors"
          >
            Return to Sanctuary Home
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#D9CDF5]/40 text-[#F3EDE3] text-xs uppercase tracking-[0.2em] hover:bg-[#D9CDF5]/15 transition-colors"
          >
            Explore Readings
          </Link>
        </div>
      </div>
    </div>
  );
}
