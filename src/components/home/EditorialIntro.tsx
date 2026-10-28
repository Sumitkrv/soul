"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import CelestialDivider from "@/components/celestial/CelestialDividers";
import ImageReveal from "@/components/motion/ImageReveal";
import MagneticButton from "@/components/motion/MagneticButton";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function EditorialIntro() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const narrativeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Dark cosmic hero -> Ivory introduction rising transition
      gsap.fromTo(
        sectionRef.current,
        {
          y: 60,
          boxShadow: "0 -30px 60px rgba(0,0,0,0.6)",
        },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top 40%",
            scrub: 0.8,
          },
        }
      );

      // Narrative text reveal on enter
      if (narrativeRef.current) {
        gsap.fromTo(
          narrativeRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: narrativeRef.current,
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
      id="editorial-intro"
      className="bg-[#F3EDE3] text-[#211B25] py-24 sm:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden rounded-t-[36px] sm:rounded-t-[54px] z-20 shadow-2xl"
    >
      {/* Decorative architectural lip highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-[#B89A6A]/40 rounded-full mt-3" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetrical Editorial Narrative */}
          <div ref={narrativeRef} className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs uppercase tracking-[0.3em] text-[#A8654C] font-semibold mb-4">
              An Invitation to Look Within
            </span>

            <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-light text-[#211B25] leading-[1.14] mb-8 text-balance">
              Where ancient wisdom meets the{" "}
              <span className="italic font-normal text-[#A8654C]">art of becoming.</span>
            </h2>

            <div className="w-20 h-[1.5px] bg-[#B89A6A] mb-8" />

            <div className="space-y-6 text-[#211B25]/85 font-sans-editorial text-base sm:text-lg leading-relaxed max-w-xl">
              <p>
                We do not believe that the stars dictate your decisions or seal your destiny behind stone walls. The heavens offer something vastly more gentle and enduring: an archetypal mirror for what is already stirring within your soul.
              </p>
              <p>
                At The Celestial Atelier, consultations are conducted as quiet, contemplative dialogues. We strip away superstition, rapid-fire horoscopes, and digital noise to restore the sacred cadence of personal reflection, seasonal grounding, and authentic insight.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <MagneticButton strength={0.2}>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-medium text-[#211B25] hover:text-[#A8654C] transition-colors py-2 border-b border-[#211B25]/30 hover:border-[#A8654C]"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </MagneticButton>

              <span className="text-xs tracking-wider text-[#A8654C]/90 font-serif-editorial italic">
                Established for intentional seekers
              </span>
            </div>
          </div>

          {/* Right Column: Decorative Astrological Artwork & Artifact with Image Reveal */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border border-[#B89A6A]/40 p-2.5 bg-[#F3EDE3]">
              <ImageReveal
                src="/images/birth-chart-wheel.jpg"
                alt="Archival hand-engraved circular astrological chart diagram on deckle-edge parchment"
                direction="right"
                sizes="(max-width: 1024px) 100vw, 500px"
                containerClassName="w-full h-full rounded-2xl"
                hoverDepth={true}
              />

              {/* Decorative Corner Gold Emblems */}
              <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-[#B89A6A]" />
              <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t border-r border-[#B89A6A]" />
              <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b border-l border-[#B89A6A]" />
              <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-[#B89A6A]" />
            </div>

            {/* Captioned note */}
            <div className="mt-4 text-center">
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#A8654C] font-sans-editorial">
                The Astrological Wheel of Houses & Archetypes
              </span>
            </div>
          </div>
        </div>

        {/* Hairline Divider at bottom */}
        <div className="mt-20">
          <CelestialDivider variant="star" color="#B89A6A" />
        </div>
      </div>
    </section>
  );
}
