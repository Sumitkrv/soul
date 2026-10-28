import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { eventsData } from "@/data/events";
import Starfield from "@/components/celestial/Starfield";
import { Calendar, Clock, MapPin, Users, Sparkles, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Workshops & Ceremonial Gatherings | The Celestial Atelier",
  description:
    "Join our intimate virtual sanctuaries and in-person solstice circles. Astrological masterclasses, sound meditation, and seasonal threshold rituals.",
};

export default function EventsPage() {
  return (
    <div className="relative min-h-screen bg-[#120B20] text-[#F3EDE3] pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Starfield density={45} speed={0.15} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B89A6A] font-semibold">
            Seasonal Thresholds
          </span>
          <h1 className="font-serif-editorial text-5xl sm:text-7xl font-light text-[#F3EDE3] mt-3">
            Workshops & Gatherings
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#F3EDE3]/80 font-sans-editorial leading-relaxed max-w-2xl mx-auto">
            Small-circle gatherings aligned with new moons, solstices, and astrological masterclasses. Designed for shared contemplation away from digital noise.
          </p>
        </div>

        {/* Events Grid */}
        <div className="space-y-12">
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="p-8 sm:p-12 rounded-3xl bg-[#22132E] border border-[#B89A6A]/30 shadow-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Event Visual */}
                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-[#B89A6A]/20">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 450px"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#120B20]/85 backdrop-blur-md border border-[#B89A6A]/40 text-[10px] uppercase tracking-[0.2em] text-[#D9CDF5]">
                      {event.format}
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-[#B89A6A] font-sans-editorial mb-3">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {event.date}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {event.time}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        {event.spotsRemaining} spots left
                      </span>
                    </div>

                    <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#F3EDE3]">
                      {event.title}
                    </h2>

                    <p className="mt-4 text-xs sm:text-sm text-[#F3EDE3]/75 font-sans-editorial leading-relaxed">
                      {event.description}
                    </p>

                    <div className="mt-6 space-y-2">
                      {event.highlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#F3EDE3]/85 font-sans-editorial">
                          <Check className="w-3.5 h-3.5 text-[#B89A6A] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#B89A6A]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#B89A6A] block">
                        Ticket Investment
                      </span>
                      <span className="text-2xl font-serif-editorial text-[#F3EDE3] font-semibold">
                        ${event.price} USD
                      </span>
                    </div>

                    <Link
                      href="/contact?inquiry=event"
                      className="px-8 py-3.5 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#D4BD8B] transition-colors text-center"
                    >
                      Reserve Gathering Spot
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
