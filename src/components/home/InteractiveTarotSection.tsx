"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { tarotCards } from "@/data/tarot";
import MagneticButton from "@/components/motion/MagneticButton";
import { Sparkles, RotateCcw, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function InteractiveTarotSection() {
  const featuredCards = [tarotCards[0], tarotCards[1], tarotCards[2]]; // The Star, The Moon, The Sun
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [tiltStates, setTiltStates] = useState<Record<number, { rotX: number; rotY: number }>>({});
  const [isShuffling, setIsShuffling] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsContainerRef = useRef<HTMLDivElement | null>(null);
  const interpretationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Consultation -> Tarot transition: aubergine flows in, 3 cards reveal with staggered rotations
      if (cardsContainerRef.current) {
        const cardElements = cardsContainerRef.current.children;
        const initialRotations = [-6, 0, 6];

        gsap.fromTo(
          cardElements,
          {
            opacity: 0,
            y: 60,
            rotation: (i) => initialRotations[i] || 0,
            scale: 0.92,
          },
          {
            opacity: 1,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 1.1,
            stagger: 0.18,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardMouseMove = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    if (flippedIndex !== null) return; // disable tilt after flip
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setTiltStates((prev) => ({
      ...prev,
      [index]: {
        rotX: -y * 12,
        rotY: x * 12,
      },
    }));
  };

  const handleCardMouseLeave = (index: number) => {
    setTiltStates((prev) => ({
      ...prev,
      [index]: { rotX: 0, rotY: 0 },
    }));
  };

  const handleCardClick = (index: number) => {
    if (flippedIndex === null) {
      setFlippedIndex(index);
    }
  };

  const handleReset = () => {
    setIsShuffling(true);
    setFlippedIndex(null);
    setTimeout(() => {
      setIsShuffling(false);
    }, 500);
  };

  const activeCard = flippedIndex !== null ? featuredCards[flippedIndex] : null;

  return (
    <section
      ref={sectionRef}
      id="interactive-tarot"
      className="bg-[#22132E] text-[#F3EDE3] py-24 sm:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-[#B89A6A]/20 transition-colors duration-700"
    >
      {/* Background radial celestial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#B6A1EC]/8 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#120B20]/60 border border-[#B89A6A]/40 text-xs uppercase tracking-[0.3em] text-[#B89A6A] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Archetypal Oracle</span>
          </div>

          <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#F3EDE3] mt-2 leading-tight">
            Choose a card. <br />
            <span className="italic font-normal text-[#D9CDF5]">Meet a new perspective.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#F3EDE3]/80 font-sans-editorial leading-relaxed">
            Take a slow breath, bring an unspoken question to mind, and select one of the three face-down cards to reveal an archetypal mirror.
          </p>
        </div>

        {/* 3 Interactive Cards Container with 3D Tilt & Flip */}
        <div
          ref={cardsContainerRef}
          className={`grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12 transition-all duration-500 ${
            isShuffling ? "scale-95 opacity-50" : "scale-100 opacity-100"
          }`}
        >
          {featuredCards.map((card, index) => {
            const isFlipped = flippedIndex === index;
            const isAnyFlipped = flippedIndex !== null;
            const isDimmed = isAnyFlipped && !isFlipped;
            const tilt = tiltStates[index] || { rotX: 0, rotY: 0 };

            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(index)}
                onMouseMove={(e) => handleCardMouseMove(index, e)}
                onMouseLeave={() => handleCardMouseLeave(index)}
                className={`perspective-1000 cursor-pointer transition-all duration-500 select-none ${
                  isDimmed
                    ? "opacity-30 scale-95 pointer-events-none"
                    : isFlipped
                    ? "scale-105 z-20"
                    : "hover:scale-105"
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleCardClick(index);
                  }
                }}
                aria-label={`Select Tarot card ${index + 1}: ${card.name}`}
              >
                <div
                  className="relative aspect-[3/4.4] w-full rounded-2xl transform-style-3d shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  style={{
                    transform: isFlipped
                      ? "rotateY(180deg) translateZ(15px)"
                      : `perspective(1000px) rotateX(${tilt.rotX}deg) rotateY(${tilt.rotY}deg)`,
                    boxShadow: isFlipped
                      ? "0 20px 45px rgba(184,154,106,0.35)"
                      : undefined,
                  }}
                >
                  {/* Card Front: Gold-Foil Velvet Back Asset */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden bg-[#120B20] border border-[#B89A6A]/40 shadow-xl">
                    <Image
                      src="/images/tarot-card-back.jpg"
                      alt="Antique gold foil celestial tarot card back design"
                      fill
                      sizes="(max-width: 640px) 100vw, 300px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/25 hover:bg-transparent transition-colors flex items-end justify-center p-4">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#D9CDF5] bg-[#120B20]/80 px-4 py-1.5 rounded-full backdrop-blur-md border border-[#B89A6A]/40 shadow-md">
                        Select Card
                      </span>
                    </div>
                  </div>

                  {/* Card Back: Revealed Face with Custom Artwork */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden bg-[#120B20] border-2 border-[#D4BD8B] shadow-[0_0_25px_rgba(212,189,139,0.4)]">
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
          <div
            ref={interpretationRef}
            className="max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl bg-[#120B20]/95 border border-[#B89A6A]/50 backdrop-blur-xl shadow-2xl animate-fade-in text-center transition-all duration-500"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B89A6A]/20 text-[#D9CDF5] text-xs uppercase tracking-[0.2em] font-sans-editorial mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#B89A6A]" />
              <span>
                {activeCard.romanNumeral} • {activeCard.name}
              </span>
            </div>

            <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#F3EDE3] font-light leading-snug">
              "{activeCard.summary}"
            </h3>

            <p className="mt-4 text-sm text-[#F3EDE3]/85 font-sans-editorial leading-relaxed max-w-lg mx-auto">
              {activeCard.presentMeaning}
            </p>

            <div className="mt-6 p-4 rounded-xl bg-[#22132E] border border-[#B89A6A]/30 text-xs sm:text-sm text-[#D9CDF5] italic font-serif-editorial max-w-md mx-auto shadow-inner">
              Affirmation: "{activeCard.affirmation}"
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#B89A6A]/60 text-xs uppercase tracking-[0.2em] text-[#F3EDE3] hover:bg-[#B89A6A] hover:text-[#120B20] transition-all shadow-md"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Shuffle & Draw Again</span>
              </button>

              <MagneticButton strength={0.2}>
                <Link
                  href="/tarot"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D9CDF5] hover:text-[#F3EDE3] transition-colors group py-2"
                >
                  <span>Explore Full 3-Card Spread</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
            </div>
          </div>
        )}

        {/* Responsible Disclaimer */}
        <p className="text-center text-xs text-[#F3EDE3]/55 mt-10 max-w-xl mx-auto font-sans-editorial">
          The tarot is practiced here as an archetypal mirror for introspection and intuitive clarity, not a fatalistic forecast.
        </p>
      </div>
    </section>
  );
}
