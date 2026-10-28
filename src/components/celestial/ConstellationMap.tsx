"use client";

import React, { useEffect, useState } from "react";

interface StarNode {
  x: number;
  y: number;
  r?: number;
  name?: string;
}

interface ConstellationData {
  stars: StarNode[];
  lines: [number, number][]; // pairs of star indices to connect
}

const CONSTELLATIONS: Record<string, ConstellationData> = {
  aries: {
    stars: [
      { x: 50, y: 160, r: 2.5, name: "Mesarthim" },
      { x: 95, y: 130, r: 3, name: "Sheratan" },
      { x: 175, y: 80, r: 4, name: "Hamal" },
      { x: 210, y: 65, r: 2.5, name: "41 Arietis" },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
    ],
  },
  taurus: {
    stars: [
      { x: 45, y: 165, r: 3.5, name: "Aldebaran" },
      { x: 80, y: 140, r: 2.5 },
      { x: 120, y: 120, r: 3 },
      { x: 185, y: 70, r: 3.5, name: "Elnath" },
      { x: 170, y: 140, r: 3, name: "Tianguan" },
      { x: 75, y: 85, r: 2.5, name: "Pleiades" },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [2, 4],
      [1, 5],
    ],
  },
  gemini: {
    stars: [
      { x: 70, y: 55, r: 4, name: "Castor" },
      { x: 105, y: 65, r: 4.5, name: "Pollux" },
      { x: 60, y: 120, r: 2.5 },
      { x: 100, y: 135, r: 2.5 },
      { x: 50, y: 190, r: 3, name: "Alhena" },
      { x: 95, y: 195, r: 3 },
    ],
    lines: [
      [0, 2],
      [2, 4],
      [1, 3],
      [3, 5],
      [0, 1],
    ],
  },
  cancer: {
    stars: [
      { x: 120, y: 120, r: 3.5, name: "Asellus" },
      { x: 80, y: 80, r: 2.5 },
      { x: 160, y: 80, r: 2.5 },
      { x: 120, y: 170, r: 3, name: "Acubens" },
      { x: 70, y: 190, r: 3, name: "Al Tarf" },
    ],
    lines: [
      [0, 1],
      [0, 2],
      [0, 3],
      [3, 4],
    ],
  },
  leo: {
    stars: [
      { x: 60, y: 160, r: 4.5, name: "Regulus" },
      { x: 80, y: 110, r: 3 },
      { x: 115, y: 80, r: 3.5, name: "Algieba" },
      { x: 110, y: 50, r: 2.5 },
      { x: 155, y: 100, r: 3, name: "Zosma" },
      { x: 195, y: 120, r: 3.5, name: "Denebola" },
      { x: 140, y: 160, r: 3, name: "Chertan" },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [2, 4],
      [4, 5],
      [5, 6],
      [6, 0],
    ],
  },
  virgo: {
    stars: [
      { x: 170, y: 175, r: 4.5, name: "Spica" },
      { x: 140, y: 130, r: 3, name: "Porrima" },
      { x: 150, y: 80, r: 3, name: "Vindemiatrix" },
      { x: 110, y: 105, r: 2.5 },
      { x: 75, y: 120, r: 3, name: "Zavijava" },
      { x: 50, y: 160, r: 2.5 },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [1, 3],
      [3, 4],
      [4, 5],
    ],
  },
  libra: {
    stars: [
      { x: 120, y: 70, r: 3.5, name: "Zubeneschamali" },
      { x: 70, y: 145, r: 3.5, name: "Zubenelgenubi" },
      { x: 170, y: 135, r: 3, name: "Brachium" },
      { x: 185, y: 175, r: 2.5 },
      { x: 55, y: 185, r: 2.5 },
    ],
    lines: [
      [0, 1],
      [0, 2],
      [1, 2],
      [1, 4],
      [2, 3],
    ],
  },
  scorpio: {
    stars: [
      { x: 60, y: 70, r: 3, name: "Graffias" },
      { x: 70, y: 100, r: 3, name: "Dschubba" },
      { x: 95, y: 125, r: 4.5, name: "Antares" },
      { x: 120, y: 160, r: 3 },
      { x: 145, y: 185, r: 3 },
      { x: 180, y: 175, r: 3.5, name: "Sargas" },
      { x: 195, y: 140, r: 4, name: "Shaula" },
      { x: 185, y: 115, r: 2.5, name: "Lesath" },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
    ],
  },
  sagittarius: {
    stars: [
      { x: 70, y: 140, r: 3.5, name: "Kaus Media" },
      { x: 65, y: 175, r: 4, name: "Kaus Australis" },
      { x: 110, y: 165, r: 3.5, name: "Ascella" },
      { x: 120, y: 125, r: 4, name: "Nunki" },
      { x: 90, y: 105, r: 3, name: "Kaus Borealis" },
      { x: 155, y: 120, r: 2.5 },
      { x: 145, y: 80, r: 2.5 },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 0],
      [0, 2],
      [3, 5],
      [5, 6],
    ],
  },
  capricorn: {
    stars: [
      { x: 65, y: 80, r: 3.5, name: "Algedi" },
      { x: 80, y: 100, r: 3.5, name: "Dabih" },
      { x: 110, y: 165, r: 2.5 },
      { x: 160, y: 155, r: 3 },
      { x: 185, y: 120, r: 3.5, name: "Nashira" },
      { x: 195, y: 95, r: 4, name: "Deneb Algedi" },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 0],
    ],
  },
  aquarius: {
    stars: [
      { x: 90, y: 65, r: 4, name: "Sadalmelik" },
      { x: 135, y: 60, r: 4, name: "Sadalsuud" },
      { x: 165, y: 90, r: 3 },
      { x: 135, y: 125, r: 3 },
      { x: 105, y: 145, r: 2.5 },
      { x: 75, y: 175, r: 3.5, name: "Skat" },
      { x: 60, y: 195, r: 2.5 },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
    ],
  },
  pisces: {
    stars: [
      { x: 125, y: 175, r: 4, name: "Alrescha" },
      { x: 95, y: 145, r: 2.5 },
      { x: 65, y: 120, r: 2.5 },
      { x: 50, y: 80, r: 3 },
      { x: 155, y: 140, r: 2.5 },
      { x: 180, y: 110, r: 3 },
      { x: 195, y: 70, r: 3.5, name: "Fumalsamakah" },
    ],
    lines: [
      [0, 1],
      [1, 2],
      [2, 3],
      [0, 4],
      [4, 5],
      [5, 6],
    ],
  },
};

interface ConstellationMapProps {
  signId: string;
  className?: string;
  size?: number;
}

export default function ConstellationMap({
  signId,
  className = "",
  size = 240,
}: ConstellationMapProps) {
  const [activeKey, setActiveKey] = useState(signId.toLowerCase());
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setActiveKey(signId.toLowerCase());
    setAnimating(true);
    const timer = setTimeout(() => setAnimating(false), 800);
    return () => clearTimeout(timer);
  }, [signId]);

  const constellation = CONSTELLATIONS[activeKey] || CONSTELLATIONS["aries"];

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Background celestial coordinate grid */}
      <svg
        viewBox="0 0 240 240"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-25"
      >
        <circle cx="120" cy="120" r="105" stroke="#B89A6A" strokeWidth="0.5" strokeDasharray="2 3" />
        <circle cx="120" cy="120" r="75" stroke="#B89A6A" strokeWidth="0.5" strokeDasharray="1 3" />
        <line x1="120" y1="15" x2="120" y2="225" stroke="#B89A6A" strokeWidth="0.5" strokeDasharray="3 4" />
        <line x1="15" y1="120" x2="225" y2="120" stroke="#B89A6A" strokeWidth="0.5" strokeDasharray="3 4" />
      </svg>

      {/* Main Dynamic Constellation */}
      <svg
        viewBox="0 0 240 240"
        className="w-full h-full relative z-10 overflow-visible"
      >
        {/* Connecting Constellation Lines */}
        {constellation.lines.map(([i1, i2], idx) => {
          const s1 = constellation.stars[i1];
          const s2 = constellation.stars[i2];
          if (!s1 || !s2) return null;

          return (
            <line
              key={`line-${idx}-${activeKey}`}
              x1={s1.x}
              y1={s1.y}
              x2={s2.x}
              y2={s2.y}
              stroke="#D4BD8B"
              strokeWidth="1.2"
              strokeOpacity="0.8"
              strokeDasharray="180"
              strokeDashoffset={animating ? "180" : "0"}
              style={{
                transition: "stroke-dashoffset 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                filter: "drop-shadow(0 0 3px rgba(212, 189, 139, 0.5))",
              }}
            />
          );
        })}

        {/* Luminous Star Nodes */}
        {constellation.stars.map((star, idx) => (
          <g key={`star-${idx}-${activeKey}`}>
            {/* Outer Star Glow */}
            <circle
              cx={star.x}
              cy={star.y}
              r={(star.r || 3) * 2}
              fill="#D4BD8B"
              opacity="0.2"
              className="animate-pulse"
            />
            {/* Core Star Body */}
            <circle
              cx={star.x}
              cy={star.y}
              r={star.r || 3}
              fill="#F3EDE3"
              stroke="#B89A6A"
              strokeWidth="1"
              style={{
                filter: "drop-shadow(0 0 4px #D4BD8B)",
                transition: "all 0.5s ease-out",
              }}
            />
            {/* Star Name Label (if available) */}
            {star.name && (
              <text
                x={star.x + 6}
                y={star.y - 6}
                fill="#D9CDF5"
                fontSize="8"
                fontFamily="var(--font-manrope), sans-serif"
                letterSpacing="0.08em"
                opacity="0.75"
              >
                {star.name}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
