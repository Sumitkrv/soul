import React from "react";

interface ZodiacSymbolProps {
  sign: string;
  size?: number;
  className?: string;
  color?: string;
}

export default function ZodiacSymbol({
  sign,
  size = 32,
  className = "",
  color = "#B89A6A",
}: ZodiacSymbolProps) {
  const normalized = sign.toLowerCase();

  const renderPath = () => {
    switch (normalized) {
      case "aries":
        return (
          <path
            d="M6 24C6 14 14 8 20 8C23 8 24 10 24 13V38M42 24C42 14 34 8 28 8C25 8 24 10 24 13"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      case "taurus":
        return (
          <>
            <path
              d="M10 8C12 16 17 20 24 20C31 20 36 16 38 8"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="24" cy="28" r="10" stroke={color} strokeWidth="2" />
          </>
        );
      case "gemini":
        return (
          <>
            <path d="M10 10C18 14 30 14 38 10M10 38C18 34 30 34 38 38" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <path d="M18 12V36M30 12V36" stroke={color} strokeWidth="2" strokeLinecap="round" />
          </>
        );
      case "cancer":
        return (
          <>
            <circle cx="15" cy="18" r="6" stroke={color} strokeWidth="2" />
            <circle cx="33" cy="30" r="6" stroke={color} strokeWidth="2" />
            <path d="M15 12C26 12 36 18 36 24M33 36C22 36 12 30 12 24" stroke={color} strokeWidth="2" strokeLinecap="round" />
          </>
        );
      case "leo":
        return (
          <>
            <circle cx="14" cy="30" r="5" stroke={color} strokeWidth="2" />
            <path
              d="M19 30C19 18 24 12 30 12C36 12 38 18 36 24C34 30 38 34 41 33"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );
      case "virgo":
        return (
          <path
            d="M10 14V34M10 20C12 15 16 14 19 14V34M19 20C21 15 25 14 28 14V34C28 26 36 22 36 30C36 37 30 40 24 38"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      case "libra":
        return (
          <>
            <path d="M8 38H40M8 30H16C18 22 30 22 32 30H40" stroke={color} strokeWidth="2" strokeLinecap="round" />
          </>
        );
      case "scorpio":
        return (
          <path
            d="M8 14V34M8 20C10 15 14 14 17 14V34M17 20C19 15 23 14 26 14V34C26 26 34 26 34 32V36L39 31M34 36L29 31"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      case "sagittarius":
        return (
          <>
            <path d="M12 36L36 12M36 12H24M36 12V24M18 24L26 32" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </>
        );
      case "capricorn":
        return (
          <path
            d="M10 14V30C10 34 14 36 17 34L25 18C28 12 34 12 36 17C38 22 33 26 30 28C28 29 27 34 31 37C35 40 40 37 40 32"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      case "aquarius":
        return (
          <>
            <path
              d="M8 18L13 14L18 18L23 14L28 18L33 14L38 18"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 30L13 26L18 30L23 26L28 30L33 26L38 30"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );
      case "pisces":
        return (
          <>
            <path
              d="M14 10C18 18 18 30 14 38M34 10C30 18 30 30 34 38M10 24H38"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        );
      default:
        return <circle cx="24" cy="24" r="10" stroke={color} strokeWidth="2" />;
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      {renderPath()}
    </svg>
  );
}
