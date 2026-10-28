"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ImageReveal from "@/components/motion/ImageReveal";
import MagneticButton from "@/components/motion/MagneticButton";
import { Check, Clock, Compass, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ConsultationSpotlight() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const benefits = [
    "Precise natal chart delineation using exact time and coordinates",
    "Synthesis of primary luminaries: Sun, Moon, and Ascendant axis",
    "Karmic lunar node exploration to illuminate your growth trajectory",
    "Current planetary transits and upcoming seasonal cycle roadmap",
    "Permanent audio archive and high-resolution natal wheel PDF",
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Transition from Forest Sanctuary to asymmetric consultation layout
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0.95, y: 40 },
        {
          opacity: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top 35%",
            scrub: 0.8,
          },
        }
      );

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, x: 25 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            stagger: 0.12,
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
      id="consultation-spotlight"
      className="bg-[#F3EDE3] text-[#211B25] py-24 sm:py-36 px-4 sm:px-6 lg:px-8 relative shadow-2xl z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Atmospheric Consultation Still Life with Image Reveal */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border border-[#B89A6A]/40 bg-[#120B20]">
              <ImageReveal
                src="/images/astrology-consultation.jpg"
                alt="Atmospheric consultation desk with natal chart, antique brass instruments, leather journal, and window light"
                direction="left"
                sizes="(max-width: 1024px) 100vw, 50vw"
                containerClassName="w-full h-full"
                hoverDepth={true}
              />
            </div>

            {/* Floating Luxury Detail Badge */}
            <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:right-6 bg-[#120B20] text-[#F3EDE3] p-6 rounded-2xl shadow-2xl border border-[#B89A6A]/50 max-w-[270px] backdrop-blur-md transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-2 text-[#B89A6A] text-xs uppercase tracking-[0.2em] font-sans-editorial mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>75 Minutes</span>
              </div>
              <div className="font-serif-editorial text-xl font-medium text-[#F3EDE3]">
                Private Atelier Consultation
              </div>
              <div className="text-xs text-[#F3EDE3]/70 font-sans-editorial mt-1">
                Virtual via Encrypted HD or Sanctuary Studio
              </div>
            </div>
          </div>

          {/* Right: Detailed Offer Narrative & Benefits */}
          <div ref={contentRef} className="lg:col-span-6 flex flex-col items-start pt-6 lg:pt-0">
            <span className="text-xs uppercase tracking-[0.3em] text-[#A8654C] font-semibold mb-3">
              Signature Consultation
            </span>

            <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-[#211B25] leading-[1.1] text-balance">
              A deeper conversation with <span className="italic font-normal text-[#A8654C]">your own universe.</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#211B25]/85 font-sans-editorial leading-relaxed max-w-xl">
              We do not speak in predictions of dread or deterministic fatalism. Our consultations honor your agency, holding space for you to see your psychological patterns, creative gifts, and personal seasons with profound tenderness and clear direction.
            </p>

            {/* Structured Session Elements */}
            <div className="mt-8 space-y-3.5 w-full max-w-xl">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#A8654C]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#A8654C]" />
                  </div>
                  <span className="text-sm text-[#211B25]/85 font-sans-editorial">{item}</span>
                </div>
              ))}
            </div>

            {/* Session Price & Action */}
            <div className="mt-10 pt-6 border-t border-[#211B25]/15 flex flex-col sm:flex-row sm:items-center gap-6 w-full max-w-xl">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#A8654C] font-semibold block">
                  Exchange
                </span>
                <span className="text-2xl font-serif-editorial font-medium text-[#211B25]">
                  $280 USD <span className="text-xs font-sans-editorial text-[#211B25]/60 font-normal">/ Session</span>
                </span>
              </div>

              <MagneticButton strength={0.25}>
                <Link
                  href="/book?service=svc_astrology_natal"
                  className="px-8 py-3.5 rounded-full bg-[#120B20] text-[#F3EDE3] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#A8654C] transition-colors shadow-lg text-center block"
                >
                  Reserve Your Reading
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
