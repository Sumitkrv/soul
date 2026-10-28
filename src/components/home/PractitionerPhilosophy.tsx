import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site-config";
import { ArrowRight, ShieldCheck, Heart } from "lucide-react";

export default function PractitionerPhilosophy() {
  const { practitioner } = siteConfig;

  return (
    <section className="bg-[#22132E] text-[#F3EDE3] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-[#B89A6A]/15">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Portrait Column Asset 03 */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border border-[#B89A6A]/30">
              <Image
                src={practitioner.image}
                alt={practitioner.name}
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120B20]/80 via-transparent to-transparent" />
            </div>

            {/* Clear Draft / Sample Indicator Badge */}
            <div className="mt-4 text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#120B20] border border-[#B89A6A]/30 text-[10px] uppercase tracking-[0.2em] text-[#B89A6A]">
                <ShieldCheck className="w-3 h-3 text-[#B89A6A]" />
                {practitioner.tag}
              </span>
            </div>
          </div>

          {/* Philosophy and Bio Column */}
          <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B89A6A] font-semibold mb-3">
              Guiding Philosophy
            </span>

            <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-[#F3EDE3] leading-[1.1] mb-6 text-balance">
              Guidance rooted in <span className="italic font-normal text-[#D9CDF5]">presence, intuition, and care.</span>
            </h2>

            <div className="w-16 h-[1px] bg-[#B89A6A] mb-8" />

            <blockquote className="text-lg sm:text-xl text-[#D9CDF5] font-serif-editorial italic leading-relaxed mb-6">
              "{practitioner.philosophy}"
            </blockquote>

            <p className="text-sm sm:text-base text-[#F3EDE3]/75 font-sans-editorial leading-relaxed mb-8 max-w-xl">
              {practitioner.bio}
            </p>

            {/* Credentials / Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl mb-10">
              {practitioner.credentials.map((cred, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-[#F3EDE3]/85 font-sans-editorial">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B89A6A] shrink-0" />
                  <span>{cred}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-medium text-[#D9CDF5] hover:text-[#F3EDE3] transition-colors py-2 border-b border-[#B89A6A]/40 hover:border-[#D9CDF5]"
            >
              <span>Read Our Full Story & Ethics</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
