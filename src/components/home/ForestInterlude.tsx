"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ForestInterlude() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const maskWrapperRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const quoteRef = useRef<HTMLQuoteElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Expanding image mask transition from Zodiac to full-bleed Forest Sanctuary
      if (maskWrapperRef.current) {
        gsap.fromTo(
          maskWrapperRef.current,
          {
            clipPath: "inset(48px round 40px)",
          },
          {
            clipPath: "inset(0px round 0px)",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              end: "top 25%",
              scrub: 1,
            },
          }
        );
      }

      // Image subtle scale on scroll
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1.1 },
          {
            scale: 1.0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      }

      // Quote reveal
      if (quoteRef.current) {
        gsap.fromTo(
          quoteRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: quoteRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="forest-interlude"
      className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#120B20] py-20"
    >
      {/* Expanding Masked Woodland Container */}
      <div
        ref={maskWrapperRef}
        className="absolute inset-0 z-0 overflow-hidden will-change-[clip-path]"
      >
        <div ref={imageRef} className="absolute inset-0 w-full h-full will-change-transform">
          <Image
            src="/images/forest-sanctuary.jpg"
            alt="Ancient mossy forest pathway with golden morning mist and deep natural depth"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Deep atmospheric tint for cinematic luxury */}
          <div className="absolute inset-0 bg-[#263D36]/45 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120B20] via-transparent to-[#120B20]" />
        </div>
      </div>

      {/* Expressive Editorial Typography Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Delicate Celestial Emblem */}
        <div className="w-12 h-12 mb-6 flex items-center justify-center text-[#F3EDE3]/90 drop-shadow-md">
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <circle cx="12" cy="12" r="11" stroke="#F3EDE3" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.8" />
            <path
              d="M12 4C8 4 6 8 6 12C6 16 8 20 12 20C9.5 18 8.5 15 8.5 12C8.5 9 9.5 6 12 4Z"
              fill="#F3EDE3"
              opacity="0.9"
            />
            <circle cx="15" cy="10" r="1.2" fill="#F3EDE3" />
          </svg>
        </div>

        <blockquote
          ref={quoteRef}
          className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-light text-[#F3EDE3] tracking-wide leading-[1.14] drop-shadow-2xl text-balance"
        >
          Some answers arrive <br />
          <span className="italic font-normal text-[#D9CDF5] bg-gradient-to-r from-[#D9CDF5] via-[#B6A1EC] to-[#F3EDE3] bg-clip-text text-transparent">
            when the world grows quiet.
          </span>
        </blockquote>

        <p className="mt-8 text-xs uppercase tracking-[0.32em] text-[#D9CDF5]/80 font-sans-editorial">
          Rooted in the living earth • Calibrated to the sky
        </p>
      </div>
    </section>
  );
}
