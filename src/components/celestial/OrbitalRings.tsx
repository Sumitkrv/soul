"use client";

import React from "react";

interface OrbitalRingsProps {
  size?: number;
  className?: string;
  speed?: number; // relative multiplier
  showPhases?: boolean;
}

export default function OrbitalRings({
  size = 500,
  className = "",
  speed = 1,
  showPhases = true,
}: OrbitalRingsProps) {
  return (
    <div
      className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Outer Golden Astrolabe Ring (Slow Clockwise) */}
      <svg
        viewBox="0 0 500 500"
        className="absolute inset-0 w-full h-full text-[#B89A6A]"
        style={{
          animation: `celestial-orbit ${90 / speed}s linear infinite`,
          willChange: "transform",
        }}
      >
        <circle
          cx="250"
          cy="250"
          r="235"
          fill="none"
          stroke="#B89A6A"
          strokeWidth="0.8"
          strokeDasharray="4 8"
          opacity="0.35"
        />
        {/* Cardinal Astrological Equinox Nodes */}
        <circle cx="250" cy="15" r="3" fill="#B89A6A" opacity="0.8" />
        <circle cx="250" cy="485" r="3" fill="#B89A6A" opacity="0.8" />
        <circle cx="15" cy="250" r="3" fill="#B89A6A" opacity="0.8" />
        <circle cx="485" cy="250" r="3" fill="#B89A6A" opacity="0.8" />
      </svg>

      {/* Middle Delicate Celestial Orbit Ring (Counter-Clockwise) */}
      <svg
        viewBox="0 0 500 500"
        className="absolute inset-0 w-full h-full text-[#B6A1EC]"
        style={{
          animation: `celestial-orbit ${120 / speed}s linear infinite reverse`,
          willChange: "transform",
        }}
      >
        <circle
          cx="250"
          cy="250"
          r="190"
          fill="none"
          stroke="#B6A1EC"
          strokeWidth="0.6"
          strokeDasharray="2 6"
          opacity="0.25"
        />

        {showPhases && (
          <>
            {/* Small subtle moon-phase markers along the ring */}
            <path
              d="M250 50 A 10 10 0 0 0 250 70 A 5 10 0 0 1 250 50 Z"
              fill="#D4BD8B"
              opacity="0.6"
            />
            <circle cx="440" cy="250" r="4.5" fill="#D4BD8B" opacity="0.6" />
            <path
              d="M250 430 A 10 10 0 0 1 250 450 A 5 10 0 0 0 250 430 Z"
              fill="#D4BD8B"
              opacity="0.6"
            />
            <circle cx="60" cy="250" r="4.5" stroke="#D4BD8B" strokeWidth="1" fill="none" opacity="0.6" />
          </>
        )}
      </svg>

      {/* Innermost Ethereal Degree Ring */}
      <svg
        viewBox="0 0 500 500"
        className="absolute inset-0 w-full h-full text-[#B89A6A]"
        style={{
          animation: `celestial-orbit ${160 / speed}s linear infinite`,
          willChange: "transform",
        }}
      >
        <circle
          cx="250"
          cy="250"
          r="135"
          fill="none"
          stroke="#B89A6A"
          strokeWidth="0.5"
          strokeDasharray="1 5"
          opacity="0.3"
        />
        {/* Subtle crosshair axes */}
        <line x1="250" y1="120" x2="250" y2="150" stroke="#B89A6A" strokeWidth="0.75" opacity="0.5" />
        <line x1="250" y1="350" x2="250" y2="380" stroke="#B89A6A" strokeWidth="0.75" opacity="0.5" />
        <line x1="120" y1="250" x2="150" y2="250" stroke="#B89A6A" strokeWidth="0.75" opacity="0.5" />
        <line x1="350" y1="250" x2="380" y2="250" stroke="#B89A6A" strokeWidth="0.75" opacity="0.5" />
      </svg>
    </div>
  );
}
