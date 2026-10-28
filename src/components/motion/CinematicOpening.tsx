"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Sparkles, X } from "lucide-react";
import { gsap } from "gsap";

interface CinematicOpeningProps {
  onComplete?: () => void;
}

export default function CinematicOpening({ onComplete }: CinematicOpeningProps) {
  const [mounted, setMounted] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(true);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<SVGSVGElement | null>(null);
  const moonRef = useRef<HTMLDivElement | null>(null);
  const emblemRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  // 01. Mount check: verify session storage & motion preferences
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("celestial_intro_completed");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasSeenIntro || prefersReducedMotion) {
      setIsActive(false);
      if (onComplete) onComplete();
      return;
    }

    setMounted(true);
  }, [onComplete]);

  // 02. Animation effect: runs only once mounted in DOM
  useEffect(() => {
    if (!mounted || !isActive) return;
    if (!overlayRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("celestial_intro_completed", "true");
        setIsActive(false);
        if (onComplete) onComplete();
      },
    });

    // Initial setup
    tl.set(overlayRef.current, {
      opacity: 1,
      clipPath: "circle(150% at 50% 50%)",
    });

    if (emblemRef.current && textRef.current) {
      tl.set([emblemRef.current, textRef.current], {
        opacity: 0,
        y: 16,
        scale: 0.94,
      });
    }

    if (ringRef.current) {
      tl.set(ringRef.current, {
        opacity: 0,
        scale: 0.8,
        rotation: -30,
      });

      // Ring entrance
      tl.to(ringRef.current, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.1,
        ease: "power2.out",
      });
    }

    // Moon slow orbit around the central ring
    if (moonRef.current) {
      gsap.to(moonRef.current, {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center",
      });
    }

    // Monogram & emblem reveal
    if (emblemRef.current) {
      tl.to(
        emblemRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.6"
      );
    }

    if (textRef.current) {
      tl.to(
        textRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      );
    }

    // Atmospheric reverence hold
    tl.to({}, { duration: 0.8 });

    // The Celestial Eclipse Aperture Reveal (circular aperture contracts smoothly, unveiling the hero)
    if (overlayRef.current) {
      tl.to(overlayRef.current, {
        clipPath: "circle(0% at 50% 50%)",
        duration: 1.1,
        ease: "power3.inOut",
      });
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        skipIntro();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      tl.kill();
    };
  }, [mounted, isActive, onComplete]);

  const skipIntro = () => {
    sessionStorage.setItem("celestial_intro_completed", "true");
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          setIsActive(false);
          if (onComplete) onComplete();
        },
      });
    } else {
      setIsActive(false);
      if (onComplete) onComplete();
    }
  };

  if (!mounted || !isActive) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#120B20] text-[#F3EDE3] overflow-hidden select-none cursor-pointer"
      onClick={skipIntro}
      role="dialog"
      aria-label="Celestial Atelier Opening Prologue"
      aria-modal="true"
    >
      {/* Background Starry Particles */}
      <div className="absolute inset-0 bg-radial from-[#22132E]/80 via-[#120B20] to-[#120B20] pointer-events-none" />

      {/* Centerpiece Container */}
      <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
        {/* Orbital Ring & Orbiting Crescent Moon */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
          {/* Subtle Outer Glowing Halo */}
          <div className="absolute inset-0 rounded-full bg-[#B89A6A]/10 blur-2xl animate-pulse-glow" />

          {/* Golden Celestial Ring SVG */}
          <svg
            ref={ringRef}
            viewBox="0 0 300 300"
            className="w-full h-full text-[#B89A6A]"
            fill="none"
          >
            {/* Outer fine orbital track */}
            <circle
              cx="150"
              cy="150"
              r="135"
              stroke="#B89A6A"
              strokeWidth="0.75"
              strokeDasharray="4 6"
              opacity="0.6"
            />
            {/* Middle golden celestial ring */}
            <circle
              cx="150"
              cy="150"
              r="115"
              stroke="url(#celestial-gold-grad-opening)"
              strokeWidth="1.2"
              opacity="0.9"
            />
            {/* Cardinal celestial tick marks */}
            <line x1="150" y1="30" x2="150" y2="40" stroke="#B89A6A" strokeWidth="1.5" />
            <line x1="150" y1="260" x2="150" y2="270" stroke="#B89A6A" strokeWidth="1.5" />
            <line x1="30" y1="150" x2="40" y2="150" stroke="#B89A6A" strokeWidth="1.5" />
            <line x1="260" y1="150" x2="270" y2="150" stroke="#B89A6A" strokeWidth="1.5" />

            <defs>
              <linearGradient id="celestial-gold-grad-opening" x1="0" y1="0" x2="300" y2="300">
                <stop offset="0%" stopColor="#D4BD8B" />
                <stop offset="50%" stopColor="#B89A6A" />
                <stop offset="100%" stopColor="#D9CDF5" />
              </linearGradient>
            </defs>
          </svg>

          {/* Orbiting Crescent Moon */}
          <div
            ref={moonRef}
            className="absolute inset-0 flex items-start justify-center pointer-events-none"
          >
            <div className="w-5 h-5 -mt-2.5 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 drop-shadow-[0_0_8px_#D4BD8B]">
                <path
                  d="M12 3C7 3 3 7 3 12C3 17 7 21 12 21C10.5 19 9.5 16 9.5 12C9.5 8 10.5 5 12 3Z"
                  fill="#D4BD8B"
                />
              </svg>
            </div>
          </div>

          {/* Center Brand Emblem & Logo */}
          <div
            ref={emblemRef}
            className="absolute flex flex-col items-center justify-center p-3 rounded-full border border-[#B89A6A]/60 bg-[#120B20]/90 shadow-[0_0_35px_rgba(184,154,106,0.3)] backdrop-blur-md"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden">
              <Image
                src="/images/brand-logo.jpg"
                alt="Soul Vera Angel Emblem"
                fill
                priority
                sizes="80px"
                className="object-cover scale-110"
              />
            </div>
          </div>
        </div>

        {/* Monogram & Title Reveal */}
        <div ref={textRef} className="mt-8 text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B89A6A]/30 bg-[#22132E]/60 text-[10px] uppercase tracking-[0.3em] text-[#D9CDF5]">
            <Sparkles className="w-3 h-3 text-[#B89A6A]" />
            <span>Soul Vera Angel</span>
          </div>

          <h1 className="font-serif-editorial text-2xl sm:text-3xl tracking-[0.2em] uppercase text-[#F3EDE3] font-light">
            The Celestial Atelier
          </h1>

          <p className="text-[11px] uppercase tracking-[0.25em] text-[#B89A6A]/80 font-sans-editorial">
            A quieter way to read the stars
          </p>
        </div>
      </div>

      {/* Skip Button (Bottom Right) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          skipIntro();
        }}
        className="absolute bottom-8 right-8 z-20 px-4 py-2 rounded-full border border-[#B89A6A]/40 bg-[#120B20]/80 text-[#D9CDF5] text-[11px] uppercase tracking-[0.2em] font-sans-editorial hover:bg-[#B89A6A] hover:text-[#120B20] transition-colors flex items-center gap-2 pointer-events-auto shadow-md"
        aria-label="Skip Prologue"
      >
        <span>Skip</span>
        <X className="w-3.5 h-3.5" />
      </button>

      {/* Instruction indicator */}
      <span className="absolute bottom-8 left-8 text-[10px] tracking-[0.2em] uppercase text-[#B89A6A]/60 font-sans-editorial hidden sm:inline-block">
        Click anywhere or press Esc to enter
      </span>
    </div>
  );
}
