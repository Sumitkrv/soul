import React from "react";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { Clock, ArrowUpRight, Sparkles } from "lucide-react";

export default function OfferingsShowcase() {
  const mainOffering = servicesData[0]; // Astrology Consultation
  const sideOfferings = [servicesData[1], servicesData[2]]; // Tarot & Solar Return
  const bottomOffering = servicesData[3]; // Numerology Blueprint

  return (
    <section className="bg-[#120B20] text-[#F3EDE3] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#B89A6A]/20">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#B89A6A] font-semibold">
              Curated Offerings
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-light text-[#F3EDE3] mt-2">
              Bespoke Celestial Experiences
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#F3EDE3]/70 font-sans-editorial max-w-md leading-relaxed">
            Each consultation is crafted as a private, unhurried sanctuary to illuminate your life transitions.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main 50% Feature: Astrology Consultation */}
          <div className="lg:col-span-7 group relative rounded-2xl overflow-hidden border border-[#B89A6A]/30 bg-[#22132E] transition-all duration-500 hover:border-[#B89A6A] flex flex-col justify-between">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={mainOffering.image}
                alt={mainOffering.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#22132E] via-[#22132E]/30 to-transparent" />
              <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#120B20]/80 backdrop-blur-md border border-[#B89A6A]/40 text-[11px] uppercase tracking-[0.25em] text-[#D9CDF5]">
                {mainOffering.category} Signature
              </div>
            </div>

            <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between text-xs text-[#B89A6A] font-sans-editorial mb-3">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {mainOffering.durationMin} Minutes Private Consultation
                  </span>
                  <span className="text-sm font-semibold tracking-wider">${mainOffering.price} USD</span>
                </div>

                <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#F3EDE3] group-hover:text-[#D9CDF5] transition-colors">
                  {mainOffering.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#F3EDE3]/75 font-sans-editorial leading-relaxed">
                  {mainOffering.summary}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#B89A6A]/15 flex items-center justify-between">
                <Link
                  href={`/services/${mainOffering.slug}`}
                  className="text-xs uppercase tracking-[0.25em] text-[#D9CDF5] hover:text-[#F3EDE3] inline-flex items-center gap-1.5 group/link"
                >
                  <span>Explore Syllabus</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>

                <Link
                  href="/book"
                  className="px-5 py-2.5 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#D4BD8B] transition-colors"
                >
                  Reserve Date
                </Link>
              </div>
            </div>
          </div>

          {/* Two Stacked Side Features */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {sideOfferings.map((offering) => (
              <div
                key={offering.id}
                className="group relative rounded-2xl overflow-hidden border border-[#B89A6A]/25 bg-[#22132E] transition-all duration-500 hover:border-[#B89A6A] flex flex-col justify-between flex-1"
              >
                <div className="relative aspect-[16/8] w-full overflow-hidden">
                  <Image
                    src={offering.image}
                    alt={offering.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#22132E] via-[#22132E]/40 to-transparent" />
                  <div className="absolute top-3 left-3 px-3 py-0.5 rounded-full bg-[#120B20]/80 backdrop-blur-md border border-[#B89A6A]/40 text-[10px] uppercase tracking-[0.2em] text-[#D9CDF5]">
                    {offering.category}
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#B89A6A] font-sans-editorial mb-2">
                      <span>{offering.durationMin} Minutes</span>
                      <span className="font-semibold">${offering.price} USD</span>
                    </div>
                    <h3 className="font-serif-editorial text-2xl text-[#F3EDE3] group-hover:text-[#D9CDF5] transition-colors">
                      {offering.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#F3EDE3]/70 font-sans-editorial line-clamp-2">
                      {offering.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#B89A6A]/15 flex items-center justify-between">
                    <Link
                      href={`/services/${offering.slug}`}
                      className="text-xs uppercase tracking-[0.2em] text-[#D9CDF5] hover:text-[#F3EDE3] inline-flex items-center gap-1"
                    >
                      <span>Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/book"
                      className="text-xs uppercase tracking-[0.2em] text-[#B89A6A] hover:text-[#D4BD8B] font-medium"
                    >
                      Book →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Horizontal Banner Feature Beneath for Numerology / Workshops */}
          <div className="lg:col-span-12 group rounded-2xl border border-[#B89A6A]/25 bg-gradient-to-r from-[#22132E] via-[#120B20] to-[#22132E] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-[#B89A6A] transition-all duration-400">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B89A6A] font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Pythagorean & Archetypal Mathematics</span>
              </div>
              <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#F3EDE3]">
                {bottomOffering.title}
              </h3>
              <p className="mt-2 text-sm text-[#F3EDE3]/75 font-sans-editorial max-w-2xl leading-relaxed">
                {bottomOffering.summary}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link
                href="/numerology"
                className="px-6 py-3 rounded-full border border-[#D9CDF5]/40 text-[#F3EDE3] text-xs uppercase tracking-[0.25em] hover:bg-[#D9CDF5]/15 transition-colors"
              >
                Free Calculator
              </Link>
              <Link
                href="/services/numerology-session"
                className="px-6 py-3 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#D4BD8B] transition-colors"
              >
                Explore Session (${bottomOffering.price})
              </Link>
            </div>
          </div>
        </div>

        {/* View All Offerings Link */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B89A6A] hover:text-[#D9CDF5] transition-colors pb-1 border-b border-[#B89A6A]/40"
          >
            <span>View All Sanctuary Readings & Mentorships</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
