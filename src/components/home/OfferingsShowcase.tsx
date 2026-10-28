"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/services";
import MagneticButton from "@/components/motion/MagneticButton";
import { Clock, ArrowUpRight, Sparkles } from "lucide-react";

export default function OfferingsShowcase() {
  const mainOffering = servicesData[0]; // Astrology Consultation
  const sideOfferings = [servicesData[1], servicesData[2]]; // Tarot & Solar Return
  const bottomOffering = servicesData[3]; // Numerology Blueprint

  return (
    <section className="bg-[#120B20] text-[#F3EDE3] py-24 sm:py-36 px-4 sm:px-6 lg:px-8 relative">
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
          <p className="mt-4 md:mt-0 text-sm text-[#F3EDE3]/75 font-sans-editorial max-w-md leading-relaxed">
            Each consultation is crafted as a private, unhurried sanctuary to illuminate your life transitions.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main 50% Feature: Astrology Consultation */}
          <div className="lg:col-span-7 group relative rounded-3xl overflow-hidden border border-[#B89A6A]/30 bg-[#22132E] transition-all duration-500 hover:border-[#B89A6A] hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col justify-between">
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

                <MagneticButton strength={0.2}>
                  <Link
                    href="/book"
                    className="px-5 py-2.5 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#D4BD8B] transition-colors shadow-md"
                  >
                    Reserve Date
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Two Stacked Side Features */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {sideOfferings.map((offering) => (
              <div
                key={offering.id}
                className="group relative rounded-3xl overflow-hidden border border-[#B89A6A]/25 bg-[#22132E] transition-all duration-500 hover:border-[#B89A6A] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between flex-1"
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
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#120B20]/80 backdrop-blur-md border border-[#B89A6A]/30 text-[10px] uppercase tracking-[0.2em] text-[#D9CDF5]">
                    {offering.category}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#B89A6A] font-sans-editorial mb-2">
                      <span>{offering.durationMin} Minutes</span>
                      <span className="font-semibold">${offering.price} USD</span>
                    </div>
                    <h3 className="font-serif-editorial text-2xl text-[#F3EDE3] group-hover:text-[#D9CDF5] transition-colors">
                      {offering.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#F3EDE3]/75 font-sans-editorial leading-relaxed line-clamp-2">
                      {offering.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#B89A6A]/15 flex items-center justify-between">
                    <Link
                      href={`/services/${offering.slug}`}
                      className="text-xs uppercase tracking-[0.2em] text-[#D9CDF5] hover:text-[#F3EDE3] inline-flex items-center gap-1 group/link"
                    >
                      <span>Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>

                    <MagneticButton strength={0.15}>
                      <Link
                        href={`/book?service=${offering.id}`}
                        className="px-4 py-2 rounded-full border border-[#B89A6A]/60 text-[#F3EDE3] text-xs uppercase tracking-[0.18em] hover:bg-[#B89A6A] hover:text-[#120B20] transition-colors"
                      >
                        Book
                      </Link>
                    </MagneticButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4th Offering Minimal Horizon Banner */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl border border-[#B89A6A]/20 bg-[#22132E]/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#B89A6A]/50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#120B20] border border-[#B89A6A]/40 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-[#B89A6A]" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89A6A] font-semibold">
                Foundation Analysis
              </span>
              <h4 className="font-serif-editorial text-xl sm:text-2xl text-[#F3EDE3]">
                {bottomOffering.title}
              </h4>
              <p className="text-xs text-[#F3EDE3]/70 font-sans-editorial mt-0.5">
                {bottomOffering.summary}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 shrink-0 w-full md:w-auto justify-between md:justify-end">
            <span className="font-serif-editorial text-xl text-[#D9CDF5]">
              ${bottomOffering.price} USD
            </span>
            <MagneticButton strength={0.2}>
              <Link
                href={`/book?service=${bottomOffering.id}`}
                className="px-6 py-2.5 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#D4BD8B] transition-colors"
              >
                Reserve Blueprint
              </Link>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
