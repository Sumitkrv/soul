"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface ImageRevealProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  direction?: "left" | "right" | "up" | "center";
  hoverDepth?: boolean;
}

export default function ImageReveal({
  src,
  alt,
  fill = true,
  width,
  height,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
  className = "",
  containerClassName = "",
  direction = "right",
  hoverDepth = true,
}: ImageRevealProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getInitialClip = () => {
    switch (direction) {
      case "right":
        return "inset(0 100% 0 0)";
      case "left":
        return "inset(0 0 0 100%)";
      case "up":
        return "inset(100% 0 0 0)";
      case "center":
        return "circle(0% at 50% 50%)";
      default:
        return "inset(0 100% 0 0)";
    }
  };

  const isRevealed = isInView && isLoaded;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden group select-none ${containerClassName}`}
    >
      {/* Revealing Mask Wrapper */}
      <div
        className="w-full h-full relative transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          clipPath: isRevealed
            ? direction === "center"
              ? "circle(150% at 50% 50%)"
              : "inset(0 0% 0 0)"
            : getInitialClip(),
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          sizes={sizes}
          priority={priority}
          onLoad={() => setIsLoaded(true)}
          className={`object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isRevealed ? "scale-100" : "scale-110"
          } ${hoverDepth ? "group-hover:scale-105" : ""} ${className}`}
        />

        {/* Delicate golden sheen highlight on hover */}
        {hoverDepth && (
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        )}
      </div>

      {/* Placeholder shimmer while asset is loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#22132E]/60 animate-pulse pointer-events-none" />
      )}
    </div>
  );
}
