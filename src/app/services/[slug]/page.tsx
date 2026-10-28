import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/services";
import Starfield from "@/components/celestial/Starfield";
import { Clock, Check, ArrowLeft, Sparkles, Video } from "lucide-react";

export async function generateStaticParams() {
  return servicesData.map((svc) => ({
    slug: svc.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolved = await params;
  const svc = servicesData.find((s) => s.slug === resolved.slug);
  if (!svc) return { title: "Offering Not Found" };

  return {
    title: `${svc.title} | The Celestial Atelier`,
    description: svc.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolved = await params;
  const svc = servicesData.find((s) => s.slug === resolved.slug);

  if (!svc) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-[#120B20] text-[#F3EDE3] pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Starfield density={45} speed={0.15} />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B89A6A] hover:text-[#D9CDF5] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Experiences</span>
          </Link>
        </div>

        {/* Hero Banner for Service */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#22132E] border border-[#B89A6A]/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#120B20] border border-[#B89A6A]/30 text-xs text-[#B89A6A] mb-4">
                <span>{svc.category}</span>
                <span>•</span>
                <span>{svc.durationMin} Minutes</span>
                <span>•</span>
                <span>${svc.price} USD</span>
              </div>

              <h1 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#F3EDE3] leading-tight">
                {svc.title}
              </h1>

              <div className="text-xs uppercase tracking-[0.2em] text-[#D9CDF5] mt-2 font-sans-editorial">
                {svc.subtitle}
              </div>

              <p className="mt-6 text-sm sm:text-base text-[#F3EDE3]/80 font-sans-editorial leading-relaxed">
                {svc.description}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  href={`/book?service=${svc.id}`}
                  className="px-8 py-3.5 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#D4BD8B] transition-colors"
                >
                  Reserve Date (${svc.price})
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-[#B89A6A]/30">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Highlights */}
          <div className="p-8 rounded-3xl bg-[#22132E]/60 border border-[#B89A6A]/20 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#B89A6A] font-semibold block mb-4">
                What Is Included
              </span>
              <ul className="space-y-3 font-sans-editorial text-xs sm:text-sm">
                {svc.highlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[#F3EDE3]/85">
                    <Check className="w-4 h-4 text-[#B89A6A] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Who It Is For */}
          <div className="p-8 rounded-3xl bg-[#22132E]/60 border border-[#B89A6A]/20 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#B89A6A] font-semibold block mb-4">
                Who It Is For
              </span>
              <ul className="space-y-3 font-sans-editorial text-xs sm:text-sm">
                {svc.whoIsItFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[#F3EDE3]/85">
                    <Sparkles className="w-4 h-4 text-[#D9CDF5] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* What To Expect */}
          <div className="p-8 rounded-3xl bg-[#22132E]/60 border border-[#B89A6A]/20 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#B89A6A] font-semibold block mb-4">
                What To Expect
              </span>
              <ul className="space-y-3 font-sans-editorial text-xs sm:text-sm">
                {svc.whatToExpect.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[#F3EDE3]/85">
                    <Video className="w-4 h-4 text-[#B89A6A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Format note */}
        <div className="mt-8 p-6 rounded-2xl bg-[#120B20] border border-[#B89A6A]/20 text-center text-xs text-[#F3EDE3]/70 font-sans-editorial">
          <strong className="text-[#B89A6A]">Session Format:</strong> {svc.format}
        </div>
      </div>
    </div>
  );
}
