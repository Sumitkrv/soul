"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { zodiacData } from "@/data/zodiac";
import ZodiacSymbol from "@/components/celestial/ZodiacSymbols";
import ConstellationMap from "@/components/celestial/ConstellationMap";
import OrbitalRings from "@/components/celestial/OrbitalRings";
import MagneticButton from "@/components/motion/MagneticButton";
import { ArrowRight, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ZodiacDiscoverySection() {
  const [selectedSign, setSelectedSign] = useState(zodiacData[0]); // Defaults to Aries
  const [isChanging, setIsChanging] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const detailCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Softly expanding lavender reveal as it scrolls into view
      gsap.fromTo(
        sectionRef.current,
        {
          clipPath: "inset(24px round 32px)",
          opacity: 0.9,
        },
        {
          clipPath: "inset(0px round 0px)",
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "top 30%",
            scrub: 0.8,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSelectSign = (sign: typeof zodiacData[0]) => {
    if (sign.id === selectedSign.id) return;
    setIsChanging(true);
    setSelectedSign(sign);
    setTimeout(() => setIsChanging(false), 300);
  };

  return (
    <section
      ref={sectionRef}
      id="zodiac-discovery"
      className="bg-[#B6A1EC] text-[#211B25] py-24 sm:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-all duration-700"
    >
      {/* Background celestial watermark rings */}
      <div className="absolute -right-20 -top-20 opacity-20 pointer-events-none">
        <OrbitalRings size={550} speed={0.6} />
      </div>
      <div className="absolute -left-32 -bottom-32 opacity-15 pointer-events-none">
        <OrbitalRings size={650} speed={0.4} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#120B20]/10 text-xs uppercase tracking-[0.3em] text-[#211B25]/85 font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#120B20]" />
            <span>Archetypal Astrological Wheel</span>
          </div>

          <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#211B25] mt-2 leading-tight">
            Written in the stars. <br />
            <span className="italic font-normal">Explored by you.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#211B25]/85 font-sans-editorial leading-relaxed max-w-xl mx-auto">
            Select an archetype to explore the symbolic qualities, elemental wisdom, and reflective invitations woven into each constellation.
          </p>
        </div>

        {/* 12 Sign Selector Pills with Interactive Ring Highlights */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-12">
          {zodiacData.map((sign) => {
            const isSelected = selectedSign.id === sign.id;
            return (
              <button
                key={sign.id}
                onClick={() => handleSelectSign(sign)}
                className={`flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-[#120B20] relative group select-none ${
                  isSelected
                    ? "bg-[#120B20] text-[#D9CDF5] border-[#120B20] shadow-xl scale-105"
                    : "bg-[#F3EDE3]/75 hover:bg-[#F3EDE3] text-[#211B25] border-transparent hover:border-[#120B20]/20 hover:shadow-md"
                }`}
                aria-pressed={isSelected}
              >
                {/* Active Celestial Selection Ring Indicator */}
                {isSelected && (
                  <span className="absolute -inset-1 rounded-2xl border border-[#B89A6A]/60 animate-pulse pointer-events-none" />
                )}

                <ZodiacSymbol
                  sign={sign.id}
                  size={24}
                  color={isSelected ? "#B89A6A" : "#211B25"}
                  className="mb-1 transition-transform group-hover:scale-110 duration-300"
                />
                <span className="text-[11px] font-sans-editorial font-semibold tracking-wider">
                  {sign.name}
                </span>
                <span className="text-[9px] opacity-75 font-sans-editorial">{sign.symbol}</span>
              </button>
            );
          })}
        </div>

        {/* Central Detailed Sign Display Card with Interactive Constellation */}
        <div
          ref={detailCardRef}
          className="bg-[#F3EDE3] rounded-3xl p-8 sm:p-12 border border-[#120B20]/15 shadow-2xl max-w-5xl mx-auto backdrop-blur-md relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Giant Emblem & Constellation Map */}
            <div className="lg:col-span-5 flex flex-col items-center text-center border-b lg:border-b-0 lg:border-r border-[#120B20]/15 pb-8 lg:pb-0 lg:pr-8">
              {/* Constellation Star Drawing */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-4 flex items-center justify-center bg-[#120B20] rounded-3xl p-4 shadow-xl border border-[#B89A6A]/30">
                <ConstellationMap signId={selectedSign.id} size={200} />
              </div>

              {/* Dynamic Sign Heading & Rotation Crossfade */}
              <div
                className={`transition-all duration-300 ${
                  isChanging ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
              >
                <div className="inline-flex items-center gap-2 mb-1">
                  <ZodiacSymbol sign={selectedSign.id} size={28} color="#B89A6A" />
                  <h3 className="font-serif-editorial text-4xl text-[#211B25] font-medium">
                    {selectedSign.name}
                  </h3>
                </div>

                <span className="text-xs uppercase tracking-[0.2em] text-[#A8654C] font-semibold block">
                  {selectedSign.dates}
                </span>
              </div>

              {/* Elemental Pills */}
              <div className="mt-5 flex flex-wrap gap-2 justify-center text-[11px] font-sans-editorial">
                <span className="px-3 py-1 rounded-full bg-[#B6A1EC]/30 text-[#211B25] border border-[#211B25]/10 font-medium">
                  Element: <strong>{selectedSign.element}</strong>
                </span>
                <span className="px-3 py-1 rounded-full bg-[#B6A1EC]/30 text-[#211B25] border border-[#211B25]/10 font-medium">
                  Ruler: <strong>{selectedSign.ruler}</strong>
                </span>
                <span className="px-3 py-1 rounded-full bg-[#B6A1EC]/30 text-[#211B25] border border-[#211B25]/10 font-medium">
                  Modality: <strong>{selectedSign.modality}</strong>
                </span>
              </div>
            </div>

            {/* Right: Archetypal Essence & Contemplative Prompt */}
            <div
              className={`lg:col-span-7 flex flex-col justify-between transition-all duration-300 ${
                isChanging ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
              }`}
            >
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#A8654C] font-semibold">
                  Archetypal Essence
                </span>
                <p className="font-serif-editorial text-2xl sm:text-3xl text-[#211B25] leading-snug mt-1 font-light">
                  "{selectedSign.essence}"
                </p>

                <p className="mt-4 text-sm text-[#211B25]/85 font-sans-editorial leading-relaxed">
                  {selectedSign.overview}
                </p>

                <div className="mt-6 p-5 rounded-2xl bg-[#B6A1EC]/20 border border-[#B6A1EC]/40 shadow-inner">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#211B25] mb-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#A8654C]" />
                    <span>Contemplative Inquiry</span>
                  </div>
                  <p className="text-sm text-[#211B25]/90 italic font-serif-editorial leading-relaxed">
                    "{selectedSign.reflectionPrompt}"
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#120B20]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-[#211B25]/75 font-sans-editorial">
                  Botanical: <strong className="text-[#211B25]">{selectedSign.botanical}</strong> • Stone:{" "}
                  <strong className="text-[#211B25]">{selectedSign.gemstone}</strong>
                </div>

                <MagneticButton strength={0.2}>
                  <Link
                    href={`/horoscope/${selectedSign.id}`}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#211B25] hover:text-[#A8654C] transition-colors group"
                  >
                    <span>Read Complete Guide</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Astrological Disclosure */}
        <p className="text-center text-xs text-[#211B25]/75 mt-8 max-w-xl mx-auto font-sans-editorial">
          Sun sign archetypes offer symbolic starting points. A complete natal chart incorporates the Moon, Rising sign, and ten planetary coordinates cast for your exact minute of birth.
        </p>
      </div>
    </section>
  );
}
