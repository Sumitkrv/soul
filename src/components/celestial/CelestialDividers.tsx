import React from "react";

interface CelestialDividerProps {
  variant?: "star" | "moon" | "diamond" | "minimal";
  className?: string;
  color?: string;
}

export default function CelestialDivider({
  variant = "star",
  className = "",
  color = "#B89A6A",
}: CelestialDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-4 w-full py-4 ${className}`} aria-hidden="true">
      <div className="h-[1px] flex-1 max-w-[140px] bg-gradient-to-r from-transparent via-[#B89A6A]/40 to-[#B89A6A]/80" />

      {variant === "star" && (
        <div className="flex items-center gap-1.5 text-[#B89A6A]">
          <span className="w-1 h-1 rounded-full bg-[#B89A6A]/60" />
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#B89A6A]">
            <path
              d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z"
              fill={color}
              opacity="0.9"
            />
          </svg>
          <span className="w-1 h-1 rounded-full bg-[#B89A6A]/60" />
        </div>
      )}

      {variant === "moon" && (
        <div className="flex items-center gap-1.5 text-[#B89A6A]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C10.5 19 9.5 16 9.5 12C9.5 8 10.5 5 12 3Z"
              fill={color}
              opacity="0.9"
            />
            <circle cx="16" cy="11" r="1.5" fill={color} />
          </svg>
        </div>
      )}

      {variant === "diamond" && (
        <div className="w-2 h-2 rotate-45 border border-[#B89A6A] bg-[#B89A6A]/30" />
      )}

      {variant === "minimal" && (
        <div className="w-1.5 h-1.5 rounded-full bg-[#B89A6A]/70" />
      )}

      <div className="h-[1px] flex-1 max-w-[140px] bg-gradient-to-l from-transparent via-[#B89A6A]/40 to-[#B89A6A]/80" />
    </div>
  );
}
