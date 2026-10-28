import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site-config";
import Starfield from "@/components/celestial/Starfield";
import CelestialDivider from "@/components/celestial/CelestialDividers";
import { ShieldCheck, Sparkles, Compass, Heart, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story & Sanctuary Philosophy | The Celestial Atelier",
  description:
    "Discover the foundational story of The Celestial Atelier, our practitioner philosophy, ethical commitments, and dedication to contemplative astrology.",
};

export default function AboutPage() {
  const { practitioner, brand } = siteConfig;

  return (
    <div className="relative min-h-screen bg-[#120B20] text-[#F3EDE3] pt-32 pb-24 overflow-hidden">
      <Starfield density={45} speed={0.15} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B89A6A] font-semibold">
            Our Origin & Ethos
          </span>
          <h1 className="font-serif-editorial text-5xl sm:text-7xl font-light text-[#F3EDE3] mt-3 leading-tight">
            A Quieter Sanctuary for the Soul
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#F3EDE3]/80 font-sans-editorial leading-relaxed max-w-2xl mx-auto">
            Founded on the conviction that ancient celestial wisdom belongs in spaces of unhurried presence, intellectual rigor, and heartfelt care.
          </p>
        </div>

        {/* Narrative Section */}
        <div className="p-8 sm:p-14 rounded-3xl bg-[#22132E] border border-[#B89A6A]/30 shadow-2xl mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[#F3EDE3]/80 font-sans-editorial leading-relaxed">
              <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#F3EDE3] font-light">
                Reclaiming the Contemplative Art of the Heavens
              </h2>
              <div className="w-12 h-[1px] bg-[#B89A6A]" />
              <p>
                In a modern digital landscape inundated with algorithmic horoscopes and anxiety-inducing doom predictions, The Celestial Atelier was born as an intentional antidote.
              </p>
              <p>
                We view your birth chart not as a stone tablet of predetermined fates, but as a living poem. It maps the celestial atmosphere at the moment you drew your first earthly breath—illuminating your natural talents, psychological complexities, and seasonal turning points.
              </p>
              <p>
                Our consultations are held as unhurried collaborative dialogues. We do not tell you what to do; we provide a grounded celestial lens through which you can listen to your own inner sovereignty.
              </p>
            </div>

            {/* Visual Artifact Asset 08 */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-[#B89A6A]/30">
                <Image
                  src="/images/astrology-consultation.jpg"
                  alt="Atmospheric consultation desk"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Practitioner Profile Area */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B89A6A] font-semibold">
              The Guiding Presence
            </span>
            <h3 className="font-serif-editorial text-4xl sm:text-5xl font-light text-[#F3EDE3] mt-2">
              Meet Your Astrological Guide
            </h3>
          </div>

          <div className="p-8 sm:p-14 rounded-3xl bg-[#22132E] border border-[#B89A6A]/30 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Portrait */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border border-[#B89A6A]/30">
                  <Image
                    src={practitioner.image}
                    alt={practitioner.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#120B20] border border-[#B89A6A]/30 text-[10px] uppercase tracking-[0.2em] text-[#B89A6A]">
                    <ShieldCheck className="w-3 h-3 text-[#B89A6A]" />
                    {practitioner.tag}
                  </span>
                </div>
              </div>

              {/* Bio & Philosophy */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif-editorial text-4xl text-[#F3EDE3]">
                    {practitioner.name}
                  </h4>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#D9CDF5] mt-1 font-sans-editorial">
                    {practitioner.role}
                  </div>

                  <blockquote className="my-6 p-4 rounded-xl bg-[#120B20] border border-[#B89A6A]/20 text-sm sm:text-base text-[#D9CDF5] italic font-serif-editorial leading-relaxed">
                    "{practitioner.philosophy}"
                  </blockquote>

                  <p className="text-xs sm:text-sm text-[#F3EDE3]/80 font-sans-editorial leading-relaxed">
                    {practitioner.bio}
                  </p>

                  <div className="mt-8 space-y-2">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#B89A6A] font-semibold block mb-2">
                      Areas of Practice & Techniques
                    </span>
                    {practitioner.credentials.map((cred, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#F3EDE3]/85 font-sans-editorial">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#B89A6A] shrink-0" />
                        <span>{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-[#B89A6A]/15">
                  <Link
                    href="/book"
                    className="px-8 py-3.5 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#D4BD8B] transition-colors inline-block"
                  >
                    Schedule Dialogue with Elena
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nature Photographic Storytelling Interlude */}
        <div className="relative rounded-3xl overflow-hidden min-h-[400px] flex items-center justify-center p-8 sm:p-14 mb-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/forest-sanctuary.jpg"
              alt="Ancient woodland sanctuary"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#120B20]/60 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 text-center max-w-2xl">
            <h3 className="font-serif-editorial text-3xl sm:text-5xl text-[#F3EDE3] font-light leading-snug">
              "We cannot study the stars while ignoring the earth beneath our feet."
            </h3>
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[#D9CDF5] font-sans-editorial">
              Our Commitment to Somatic & Earth-Honoring Practice
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B89A6A] hover:text-[#D9CDF5] transition-colors pb-1 border-b border-[#B89A6A]/40"
          >
            <span>Explore Our Full Suite of Offerings</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
