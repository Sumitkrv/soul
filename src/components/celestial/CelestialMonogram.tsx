import Link from "next/link";
import Image from "next/image";
import React from "react";

interface CelestialMonogramProps {
  variant?: "light" | "gold" | "dark";
  showWordmark?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function CelestialMonogram({
  variant = "gold",
  showWordmark = true,
  className = "",
  size = "md",
}: CelestialMonogramProps) {
  const textColor =
    variant === "light"
      ? "text-[#F3EDE3]"
      : variant === "dark"
      ? "text-[#211B25]"
      : "text-[#B89A6A]";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group select-none shrink-0 ${className}`}
    >
      {/* Golden Angel Infinity Logo Badge (Preserves natural horizontal lemniscate shape) */}
      <div className="relative h-9 w-14 sm:h-10 sm:w-16 rounded-xl overflow-hidden border border-[#B89A6A]/60 bg-[#120B20] p-0.5 shadow-md shadow-black/40 transition-all duration-300 group-hover:scale-105 group-hover:border-[#B89A6A] group-hover:shadow-[0_0_15px_rgba(184,154,106,0.35)] shrink-0 flex items-center justify-center">
        <Image
          src="/images/brand-logo.jpg"
          alt="Soul Vera Angel Golden Logo"
          width={128}
          height={80}
          priority
          className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {showWordmark && (
        <div className="flex flex-col justify-center">
          <span
            className={`font-serif-editorial text-base sm:text-lg tracking-[0.15em] uppercase font-medium leading-none transition-colors duration-300 ${textColor} group-hover:text-[#D9CDF5] whitespace-nowrap`}
          >
            The Celestial Atelier
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-[#B89A6A]/85 font-sans-editorial mt-1 whitespace-nowrap">
            Soul Vera Angel
          </span>
        </div>
      )}
    </Link>
  );
}
