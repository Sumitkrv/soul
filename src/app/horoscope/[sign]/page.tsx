import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { zodiacData } from "@/data/zodiac";
import ZodiacSymbol from "@/components/celestial/ZodiacSymbols";
import CelestialDivider from "@/components/celestial/CelestialDividers";
import Starfield from "@/components/celestial/Starfield";
import { Check, Sparkles, Compass, ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return zodiacData.map((sign) => ({
    sign: sign.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sign: string }>;
}): Promise<Metadata> {
  const resolved = await params;
  const sign = zodiacData.find((s) => s.id === resolved.sign.toLowerCase());
  if (!sign) return { title: "Sign Not Found" };

  return {
    title: `${sign.name} (${sign.symbol}) Archetypal Astrology Guide`,
    description: `Comprehensive archetypal profile for ${sign.name}: ${sign.dates}. Governed by ${sign.ruler}, elemental wisdom, contemplative reflection prompts.`,
  };
}

export default async function ZodiacDetailPage({
  params,
}: {
  params: Promise<{ sign: string }>;
}) {
  const resolved = await params;
  const sign = zodiacData.find((s) => s.id === resolved.sign.toLowerCase());

  if (!sign) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-[#120B20] text-[#F3EDE3] pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Starfield density={50} speed={0.15} />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/horoscope"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B89A6A] hover:text-[#D9CDF5] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Signs</span>
          </Link>
        </div>

        {/* Hero Banner for Sign */}
        <div className="p-8 sm:p-14 rounded-3xl bg-[#22132E] border border-[#B89A6A]/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#120B20] border border-[#B89A6A]/30 text-xs text-[#B89A6A] mb-4">
                <span>{sign.element} Sign</span>
                <span>•</span>
                <span>Modality: {sign.modality}</span>
                <span>•</span>
                <span>Ruler: {sign.ruler}</span>
              </div>

              <h1 className="font-serif-editorial text-5xl sm:text-7xl font-light text-[#F3EDE3]">
                {sign.name}{" "}
                <span className="text-4xl text-[#B89A6A] font-normal">({sign.symbol})</span>
              </h1>

              <div className="text-xs uppercase tracking-[0.25em] text-[#D9CDF5] mt-2 font-sans-editorial">
                {sign.dates}
              </div>

              <p className="font-serif-editorial text-2xl sm:text-3xl text-[#D9CDF5] italic mt-6 leading-snug">
                "{sign.essence}"
              </p>
            </div>

            <div className="md:col-span-4 flex justify-center">
              <div className="w-36 h-36 rounded-full bg-[#120B20] border-2 border-[#B89A6A] flex items-center justify-center shadow-2xl">
                <ZodiacSymbol sign={sign.id} size={72} color="#B89A6A" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="mt-12 space-y-12">
          {/* Deep Overview */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#22132E]/60 border border-[#B89A6A]/20">
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#F3EDE3] mb-4">
              The Archetypal Narrative
            </h2>
            <p className="text-sm sm:text-base text-[#F3EDE3]/80 font-sans-editorial leading-relaxed">
              {sign.overview}
            </p>
          </div>

          {/* Light & Shadow Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#22132E]/60 border border-[#B89A6A]/20">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B89A6A] font-semibold block mb-4">
                Luminous Strengths
              </span>
              <ul className="space-y-3 font-sans-editorial text-xs sm:text-sm">
                {sign.strengths.map((s, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-[#F3EDE3]/85">
                    <Check className="w-4 h-4 text-[#B89A6A] shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#22132E]/60 border border-[#B89A6A]/20">
              <span className="text-xs uppercase tracking-[0.25em] text-[#A8654C] font-semibold block mb-4">
                Shadow Invitations & Growth
              </span>
              <p className="text-xs sm:text-sm text-[#F3EDE3]/80 font-sans-editorial leading-relaxed">
                {sign.shadow}
              </p>
              <div className="mt-6 pt-4 border-t border-[#B89A6A]/15 text-xs text-[#D9CDF5]/80 font-sans-editorial">
                Botanical: <strong>{sign.botanical}</strong> <br />
                Gemstone: <strong>{sign.gemstone}</strong>
              </div>
            </div>
          </div>

          {/* Contemplative Inquiry & Affirmation */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#22132E] via-[#120B20] to-[#22132E] border border-[#B89A6A]/40 text-center">
            <Sparkles className="w-6 h-6 text-[#B89A6A] mx-auto mb-3" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89A6A] font-semibold">
              Daily Contemplative Inquiry
            </span>
            <blockquote className="font-serif-editorial text-2xl sm:text-3xl text-[#F3EDE3] italic mt-3 max-w-2xl mx-auto leading-relaxed">
              "{sign.reflectionPrompt}"
            </blockquote>

            <div className="mt-6 p-4 rounded-xl bg-[#120B20] max-w-md mx-auto border border-[#B89A6A]/20 text-xs text-[#D9CDF5]">
              Affirmation: "{sign.affirmation}"
            </div>
          </div>

          {/* Consultation CTA */}
          <div className="p-8 rounded-3xl bg-[#22132E] border border-[#B89A6A]/30 text-center">
            <h3 className="font-serif-editorial text-3xl text-[#F3EDE3]">
              Discover Where {sign.name} Sits in Your Birth Chart
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#F3EDE3]/75 font-sans-editorial max-w-xl mx-auto leading-relaxed">
              Whether {sign.name} is your Sun, Moon, Ascendant, or rules an important house, a full natal consultation reveals how its celestial energy influences your destiny.
            </p>
            <div className="mt-6">
              <Link
                href="/book?service=svc_astrology_natal"
                className="px-8 py-3.5 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#D4BD8B] transition-colors inline-block"
              >
                Schedule Natal Reading
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
