"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Starfield from "@/components/celestial/Starfield";
import MagneticButton from "@/components/motion/MagneticButton";
import { Sparkles, ArrowDown, Compass } from "lucide-react";
import { gsap } from "gsap";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const bgImageRef = useRef<HTMLDivElement | null>(null);
  const orbitLinesRef = useRef<SVGSVGElement | null>(null);
  const moonSculptureRef = useRef<HTMLDivElement | null>(null);
  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const line1Ref = useRef<HTMLSpanElement | null>(null);
  const line2Ref = useRef<HTMLSpanElement | null>(null);
  const line3Ref = useRef<HTMLSpanElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 01. Background scale from 1.08 to 1.0
      if (bgImageRef.current) {
        tl.fromTo(
          bgImageRef.current,
          { scale: 1.08, opacity: 0.85 },
          { scale: 1.0, opacity: 1, duration: 2.2, ease: "power2.out" },
          0
        );
      }

      // 02. Decorative orbit lines draw into position
      if (orbitLinesRef.current) {
        const paths = orbitLinesRef.current.querySelectorAll("circle, line, ellipse");
        tl.fromTo(
          paths,
          { strokeDashoffset: 600, opacity: 0 },
          { strokeDashoffset: 0, opacity: 0.7, duration: 2.0, stagger: 0.15, ease: "power2.inOut" },
          0.2
        );
      }

      // 03. Moon sculpture floating entrance & initial scale
      if (moonSculptureRef.current) {
        tl.fromTo(
          moonSculptureRef.current,
          { opacity: 0, scale: 0.88, y: 30 },
          { opacity: 0.9, scale: 1, y: 0, duration: 1.8, ease: "power2.out" },
          0.3
        );
      }

      // 04. Eyebrow badge reveal
      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.5
        );
      }

      // 05. Masked headline reveals line by line
      if (line1Ref.current) {
        tl.fromTo(
          line1Ref.current,
          { y: "115%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1.0 },
          0.7
        );
      }

      if (line2Ref.current) {
        tl.fromTo(
          line2Ref.current,
          { y: "115%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1.1 },
          0.85
        );
      }

      if (line3Ref.current) {
        tl.fromTo(
          line3Ref.current,
          { y: "115%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1.0 },
          1.0
        );
      }

      // 06. Supporting description
      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.9 },
          1.15
        );
      }

      // 07. CTA buttons appear last
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9 },
          1.3
        );
      }

      // 08. Scroll indicator
      if (scrollIndicatorRef.current) {
        tl.fromTo(
          scrollIndicatorRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.8 },
          1.5
        );
      }
    }, containerRef);

    // Mouse parallax for the Moon Sculpture
    const handleMouseMove = (e: MouseEvent) => {
      if (!moonSculptureRef.current) return;
      const xPercent = (e.clientX / window.innerWidth - 0.5) * 2;
      const yPercent = (e.clientY / window.innerHeight - 0.5) * 2;
      gsap.to(moonSculptureRef.current, {
        x: xPercent * 18,
        y: yPercent * 18,
        rotation: xPercent * 3,
        duration: 1.5,
        ease: "power1.out",
        overwrite: "auto",
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#120B20] pt-28 pb-20"
      id="hero-scene"
    >
      {/* Background Cinematic Woodland & Celestial Horizon */}
      <div ref={bgImageRef} className="absolute inset-0 z-0 will-change-transform">
        <Image
          src="/images/hero-celestial-forest.jpg"
          alt="Ancient woodland at twilight opening onto luminous celestial horizon"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Atmospheric Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120B20] via-[#120B20]/65 to-[#120B20]/45" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#120B20]/40 to-[#120B20]/90" />
      </div>

      {/* Decorative Orbit Lines Drawing Animation */}
      <svg
        ref={orbitLinesRef}
        viewBox="0 0 1200 800"
        className="absolute inset-0 w-full h-full pointer-events-none z-[1] opacity-70"
        fill="none"
        aria-hidden="true"
      >
        <ellipse
          cx="600"
          cy="400"
          rx="520"
          ry="300"
          stroke="#B89A6A"
          strokeWidth="0.8"
          strokeDasharray="600"
          strokeDashoffset="600"
          opacity="0.35"
        />
        <ellipse
          cx="600"
          cy="400"
          rx="380"
          ry="200"
          stroke="#B6A1EC"
          strokeWidth="0.6"
          strokeDasharray="600"
          strokeDashoffset="600"
          opacity="0.25"
        />
        <line
          x1="80"
          y1="400"
          x2="1120"
          y2="400"
          stroke="#B89A6A"
          strokeWidth="0.5"
          strokeDasharray="600"
          strokeDashoffset="600"
          opacity="0.2"
        />
      </svg>

      {/* Subtle twinkling starfield */}
      <Starfield density={70} speed={0.25} />

      {/* Floating Moon Sculpture Artwork Element with Parallax */}
      <div
        ref={moonSculptureRef}
        className="hidden xl:block absolute right-12 top-1/2 -translate-y-1/2 z-10 w-[360px] h-[360px] pointer-events-none opacity-90 will-change-transform"
      >
        <div className="relative w-full h-full rounded-full p-2 animate-float-slow">
          {/* Subtle orbital glow */}
          <div className="absolute inset-0 rounded-full bg-[#B6A1EC]/20 blur-2xl animate-pulse-glow" />
          <Image
            src="/images/moon-sculpture.jpg"
            alt="Floating antique celestial moon sculpture with brass orbital rings"
            fill
            sizes="360px"
            className="object-contain drop-shadow-2xl rounded-full"
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Golden Angel Infinity Logo Emblem */}
        <div className="relative mb-6 group cursor-pointer">
          <div className="absolute -inset-2 rounded-full bg-[#B89A6A]/25 blur-xl group-hover:bg-[#B89A6A]/45 transition-all duration-700 animate-pulse-glow" />
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#B89A6A] p-1 bg-[#120B20] shadow-[0_0_30px_rgba(184,154,106,0.45)] transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/images/brand-logo.jpg"
              alt="Soul Vera Angel Golden Logo Emblem"
              fill
              priority
              sizes="96px"
              className="object-cover scale-110 group-hover:scale-120 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Eyebrow badge */}
        <div
          ref={eyebrowRef}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#B89A6A]/40 bg-[#120B20]/60 backdrop-blur-md mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B89A6A] animate-pulse" />
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#D9CDF5] font-sans-editorial">
            Soul Vera Angel • Sanctuary for Conscious Seekers
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#B89A6A] animate-pulse" />
        </div>

        {/* Hero Headline with Masked Upward Motion */}
        <h1 className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[0.06em] text-[#F3EDE3] leading-[1.06] max-w-4xl text-balance">
          <span className="block overflow-hidden pb-1">
            <span ref={line1Ref} className="inline-block will-change-transform">
              The Sky Holds
            </span>
          </span>
          <span className="block overflow-hidden pb-1">
            <span
              ref={line2Ref}
              className="inline-block italic font-normal text-[#D9CDF5] bg-gradient-to-r from-[#D9CDF5] via-[#B6A1EC] to-[#F3EDE3] bg-clip-text text-transparent will-change-transform"
            >
              A Story.
            </span>
          </span>
          <span className="block overflow-hidden pb-1">
            <span ref={line3Ref} className="inline-block will-change-transform">
              So Do You.
            </span>
          </span>
        </h1>

        {/* Supporting description */}
        <p
          ref={descRef}
          className="mt-8 text-base sm:text-lg md:text-xl text-[#F3EDE3]/85 font-sans-editorial max-w-2xl leading-relaxed text-balance"
        >
          Discover a quieter space for celestial insight, intentional reflection, and meaningful connection with your inner world.
        </p>

        {/* CTA Actions with Magnetic Physics */}
        <div
          ref={ctaRef}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <MagneticButton strength={0.3}>
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#D4BD8B] transition-all duration-300 shadow-xl shadow-[#B89A6A]/20 text-center group inline-flex items-center justify-center gap-2"
            >
              <span>Explore Experiences</span>
              <Compass className="w-4 h-4 transition-transform group-hover:rotate-45" />
            </Link>
          </MagneticButton>

          <MagneticButton strength={0.3}>
            <Link
              href="/book"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#D9CDF5]/40 text-[#F3EDE3] text-xs uppercase tracking-[0.25em] font-medium bg-[#120B20]/50 backdrop-blur-md hover:bg-[#D9CDF5]/15 hover:border-[#D9CDF5] transition-all duration-300 text-center inline-flex items-center justify-center gap-2 group shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-[#B89A6A] group-hover:text-[#D9CDF5] transition-colors" />
              <span>Begin Your Journey</span>
            </Link>
          </MagneticButton>
        </div>

        {/* Scroll Indicator with Delicate Looping Movement */}
        <div
          ref={scrollIndicatorRef}
          className="mt-16 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B89A6A]/80 cursor-pointer"
          onClick={() => {
            const nextSec = document.getElementById("editorial-intro");
            if (nextSec) nextSec.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-[10px] tracking-[0.28em] text-[#D9CDF5]">Descend Within</span>
          <div className="w-6 h-9 rounded-full border border-[#B89A6A]/60 flex items-start justify-center p-1.5 shadow-[0_0_10px_rgba(184,154,106,0.2)]">
            <div className="w-1.5 h-2 rounded-full bg-[#B89A6A] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
