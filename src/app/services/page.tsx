import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/services";
import Starfield from "@/components/celestial/Starfield";
import { Clock, ArrowUpRight, Check, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Readings & Sacred Experiences | The Celestial Atelier",
  description:
    "Explore our complete suite of bespoke astrological consultations, contemplative tarot readings, Pythagorean numerology blueprints, and ceremonial workshops.",
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#120B20] text-[#F3EDE3] pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Starfield density={45} speed={0.15} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B89A6A] font-semibold">
            Bespoke Sanctuary Catalog
          </span>
          <h1 className="font-serif-editorial text-5xl sm:text-7xl font-light text-[#F3EDE3] mt-3">
            Readings & Offerings
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#F3EDE3]/80 font-sans-editorial leading-relaxed max-w-2xl mx-auto">
            Each consultation is held as a confidential, unhurried collaborative dialogue. Designed to bring clarity, peace, and soulful direction to your life transitions.
          </p>
        </div>

        {/* Services List with Detailed Editorial Cards */}
        <div className="space-y-12">
          {servicesData.map((svc, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={svc.id}
                className="p-8 sm:p-12 rounded-3xl bg-[#22132E] border border-[#B89A6A]/30 shadow-2xl overflow-hidden"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Service Image */}
                  <div className={`lg:col-span-5 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-[#B89A6A]/20 group">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 450px"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#120B20]/80 backdrop-blur-md border border-[#B89A6A]/40 text-[10px] uppercase tracking-[0.2em] text-[#D9CDF5]">
                        {svc.category}
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className={`lg:col-span-7 flex flex-col justify-between ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#B89A6A] font-sans-editorial mb-2">
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {svc.durationMin} Minutes
                        </span>
                        <span className="text-sm font-semibold">${svc.price} USD</span>
                      </div>

                      <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#F3EDE3]">
                        {svc.title}
                      </h2>
                      <div className="text-xs uppercase tracking-[0.2em] text-[#D9CDF5] mt-1 font-sans-editorial">
                        {svc.subtitle}
                      </div>

                      <p className="mt-4 text-xs sm:text-sm text-[#F3EDE3]/75 font-sans-editorial leading-relaxed">
                        {svc.description}
                      </p>

                      <div className="mt-6 space-y-2">
                        {svc.highlights.slice(0, 3).map((hl, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#F3EDE3]/85 font-sans-editorial">
                            <Check className="w-3.5 h-3.5 text-[#B89A6A] shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#B89A6A]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <Link
                        href={`/services/${svc.slug}`}
                        className="text-xs uppercase tracking-[0.2em] text-[#D9CDF5] hover:text-[#F3EDE3] inline-flex items-center gap-1"
                      >
                        <span>View Syllabus & Details</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>

                      <Link
                        href={`/book?service=${svc.id}`}
                        className="px-6 py-3 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#D4BD8B] transition-colors text-center"
                      >
                        Reserve Session (${svc.price})
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
