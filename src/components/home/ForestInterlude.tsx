import React from "react";
import Image from "next/image";

export default function ForestInterlude() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Full-bleed Nature Photograph Asset 07 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/forest-sanctuary.jpg"
          alt="Ancient mossy forest pathway with golden morning mist and deep natural depth"
          fill
          sizes="100vw"
          className="object-cover object-center scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Deep atmospheric tint for cinematic luxury */}
        <div className="absolute inset-0 bg-[#263D36]/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120B20] via-transparent to-[#120B20]" />
      </div>

      {/* Expressive Editorial Typography Overlay */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Delicate Celestial Emblem */}
        <div className="w-10 h-10 mb-6 flex items-center justify-center text-[#F3EDE3]/90 drop-shadow-md">
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <circle cx="12" cy="12" r="11" stroke="#F3EDE3" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.8" />
            <path
              d="M12 4C8 4 6 8 6 12C6 16 8 20 12 20C9.5 18 8.5 15 8.5 12C8.5 9 9.5 6 12 4Z"
              fill="#F3EDE3"
              opacity="0.9"
            />
            <circle cx="15" cy="10" r="1" fill="#F3EDE3" />
          </svg>
        </div>

        <blockquote className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-light text-[#F3EDE3] tracking-wide leading-[1.15] drop-shadow-lg text-balance">
          Some answers arrive <br />
          <span className="italic font-normal text-[#D9CDF5]">when the world grows quiet.</span>
        </blockquote>

        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[#F3EDE3]/80 font-sans-editorial">
          Rooted in the living earth • Calibrated to the sky
        </p>
      </div>
    </section>
  );
}
