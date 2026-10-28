"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import MagneticButton from "@/components/motion/MagneticButton";
import OrbitalRings from "@/components/celestial/OrbitalRings";
import { Sparkles, Calendar } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CelestialInvitationCta() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const apertureRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Tarot -> Final CTA: A refined celestial crescent aperture expands to introduce closing invitation
      if (apertureRef.current) {
        gsap.fromTo(
          apertureRef.current,
          {
            clipPath: "circle(35% at 50% 50%)",
            opacity: 0.85,
          },
          {
            clipPath: "circle(120% at 50% 50%)",
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "top 20%",
              scrub: 1,
            },
          }
        );
      }

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 75%",
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
      id="celestial-invitation-cta"
      className="relative min-h-[640px] flex items-center justify-center overflow-hidden bg-[#120B20] text-[#F3EDE3] py-28 px-4 sm:px-6 lg:px-8 border-t border-[#B89A6A]/20"
    >
      {/* Background Celestial Invitation Artwork Asset with Aperture Mask */}
      <div
        ref={apertureRef}
        className="absolute inset-0 z-0 will-change-[clip-path]"
      >
        <Image
          src="/images/celestial-invitation.jpg"
          alt="Luminous crescent moon in deep violet night sky with cosmic particles and sacred geometry"
          fill
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Soft atmospheric gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120B20] via-transparent to-[#120B20]" />
        <div className="absolute inset-0 bg-[#120B20]/45" />
      </div>

      {/* Subtle Counter-Rotating Celestial Rings in background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
        <OrbitalRings size={680} speed={0.4} />
      </div>

      {/* Main Content Box */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center"
      >
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B89A6A]/50 bg-[#120B20]/80 backdrop-blur-md mb-8">
          <Sparkles className="w-3.5 h-3.5 text-[#B89A6A]" />
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#D9CDF5] font-sans-editorial">
            The Doorway to Your Blueprint
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-serif-editorial text-5xl sm:text-7xl md:text-8xl font-light text-[#F3EDE3] tracking-wide leading-[1.08] text-balance">
          Your next chapter <br />
          <span className="italic font-normal text-[#D9CDF5] bg-gradient-to-r from-[#D9CDF5] via-[#B6A1EC] to-[#F3EDE3] bg-clip-text text-transparent">
            begins within.
          </span>
        </h2>

        {/* Supporting text */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#F3EDE3]/90 font-sans-editorial max-w-2xl leading-relaxed text-balance">
          An invitation to slow down, look inward, and discover what feels deeply meaningful to you under the guidance of the stars.
        </p>

        {/* CTA Buttons with Magnetic Hover */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-5">
          <MagneticButton strength={0.3}>
            <Link
              href="/book"
              className="px-10 py-4 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#D4BD8B] transition-all duration-300 shadow-xl shadow-black/50 inline-flex items-center gap-2.5 group"
            >
              <Calendar className="w-4 h-4 text-[#120B20]" />
              <span>Reserve Your Reading</span>
            </Link>
          </MagneticButton>

          <MagneticButton strength={0.25}>
            <Link
              href="/services"
              className="px-8 py-4 rounded-full border border-[#D9CDF5]/40 text-[#F3EDE3] text-xs uppercase tracking-[0.25em] hover:bg-[#D9CDF5]/15 hover:border-[#D9CDF5] transition-all text-center backdrop-blur-sm"
            >
              Review Offerings
            </Link>
          </MagneticButton>
        </div>

        <span className="mt-8 text-xs text-[#B89A6A]/85 font-sans-editorial tracking-widest">
          Sessions limited monthly • Worldwide virtual consultations
        </span>
      </div>
    </section>
  );
}
