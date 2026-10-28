import React from "react";
import Image from "next/image";
import Link from "next/link";
import CelestialDivider from "@/components/celestial/CelestialDividers";
import { Sparkles, Moon, BookOpen, Compass, Flame } from "lucide-react";

export default function CosmicJournalGrid() {
  return (
    <section className="bg-[#22132E] text-[#F3EDE3] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-b border-[#B89A6A]/15">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B89A6A] font-semibold">
            Daily Sanctuary Bulletin
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl font-light text-[#F3EDE3] mt-2">
            The Cosmic Journal
          </h2>
          <p className="mt-3 text-sm text-[#F3EDE3]/70 font-sans-editorial leading-relaxed">
            Curated daily reflections, seasonal lunar contemplation, and mindful grounding prompts for your quiet hour.
          </p>
        </div>

        {/* Asymmetric Information Grid with Fine Divider Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#B89A6A]/25 rounded-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-[#B89A6A]/20 bg-[#120B20]/60 backdrop-blur-sm">
          {/* Module 1: Today's Reflection */}
          <div className="p-8 sm:p-10 flex flex-col justify-between group hover:bg-[#22132E]/40 transition-colors">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B89A6A] font-semibold mb-4">
                <Sparkles className="w-4 h-4 text-[#B89A6A]" />
                <span>Today's Reflection</span>
              </div>
              <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#D9CDF5] leading-snug">
                "Find a moment of stillness. Not every question requires an immediate answer."
              </h3>
              <p className="mt-4 text-xs sm:text-sm text-[#F3EDE3]/70 font-sans-editorial leading-relaxed">
                When the world urges urgency, the cosmos invites patience. What feels urgent to the ego is often simply waiting for deeper emotional sediment to settle into clarity.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#B89A6A]/15 text-[11px] uppercase tracking-[0.2em] text-[#B89A6A]/80 font-sans-editorial">
              Contemplative Anchor
            </div>
          </div>

          {/* Module 2: Seasonal Moon Phase Reflection */}
          <div className="p-8 sm:p-10 flex flex-col justify-between group hover:bg-[#22132E]/40 transition-colors">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B89A6A] font-semibold mb-4">
                <Moon className="w-4 h-4 text-[#B6A1EC]" />
                <span>Lunar Cadence</span>
              </div>
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-4 border border-[#B89A6A]/20">
                <Image
                  src="/images/moon-phases-art.jpg"
                  alt="Lunar phases cycle artwork"
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif-editorial text-2xl text-[#F3EDE3]">
                Waxing Gibbous • Gathering Power
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#F3EDE3]/70 font-sans-editorial leading-relaxed">
                As the moon approaches full radiance, energy naturally gathers. Focus on cultivating refinement rather than starting entirely new ventures today.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#B89A6A]/15 text-[11px] uppercase tracking-[0.2em] text-[#B89A6A]/80 font-sans-editorial">
              Astronomical Cycle
            </div>
          </div>

          {/* Module 3: Daily Ritual & Journal Prompt */}
          <div className="p-8 sm:p-10 flex flex-col justify-between group hover:bg-[#22132E]/40 transition-colors">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B89A6A] font-semibold mb-4">
                <Flame className="w-4 h-4 text-[#A8654C]" />
                <span>Daily Micro-Ritual</span>
              </div>
              <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#F3EDE3]">
                Evening Incense & Sensory Grounding
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#F3EDE3]/70 font-sans-editorial leading-relaxed">
                Light a cedarwood or lavender stick. Close your eyes for three intentional exhalations. Name three things that kept you physically safe today.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-[#22132E] border border-[#B89A6A]/25">
                <div className="flex items-center gap-2 text-xs text-[#D9CDF5] font-semibold mb-1">
                  <BookOpen className="w-3.5 h-3.5 text-[#B89A6A]" />
                  <span>Journal Inquiry</span>
                </div>
                <p className="text-xs text-[#F3EDE3]/85 italic font-serif-editorial">
                  "What burden am I carrying today that does not belong to me?"
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#B89A6A]/15 flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#B89A6A]/80 font-sans-editorial">
                Daily Practice
              </span>
              <Link
                href="/journal"
                className="text-xs text-[#D9CDF5] hover:text-[#F3EDE3] transition-colors"
              >
                Read Journal →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
