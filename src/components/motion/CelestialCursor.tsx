"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CelestialCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  // Position references for smooth interpolation (lerp)
  const posRef = useRef({
    currentX: -100,
    currentY: -100,
    targetX: -100,
    targetY: -100,
  });

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFinePointer || prefersReducedMotion) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      posRef.current.targetX = e.clientX;
      posRef.current.targetY = e.clientY;

      if (!isVisible) setIsVisible(true);

      // Check if hovering an interactive target
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest("a, button, [role='button'], input, select, textarea, .interactive, [data-cursor]")
        );
        setIsHovering(isInteractive);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    let animationFrameId: number;

    const render = () => {
      const pos = posRef.current;
      // Smooth linear interpolation for outer celestial ring
      pos.currentX += (pos.targetX - pos.currentX) * 0.18;
      pos.currentY += (pos.targetY - pos.currentY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.currentX}px, ${pos.currentY}px, 0) translate(-50%, -50%)`;
      }

      if (dotRef.current) {
        // Direct snappy tracking for inner celestial point
        dotRef.current.style.transform = `translate3d(${pos.targetX}px, ${pos.targetY}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Outer Easing Celestial Orbital Halo */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border pointer-events-none transition-all duration-300 will-change-transform ${
          isHovering
            ? "w-12 h-12 border-[#D4BD8B] bg-[#B89A6A]/15 shadow-[0_0_20px_rgba(184,154,106,0.35)] scale-110"
            : "w-8 h-8 border-[#B89A6A]/45 bg-transparent opacity-65 scale-100"
        }`}
      />

      {/* Center Delicate Golden Star Point */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none transition-opacity duration-200 will-change-transform ${
          isHovering
            ? "w-2 h-2 bg-[#D4BD8B] opacity-100 shadow-[0_0_8px_#D4BD8B]"
            : "w-1 h-1 bg-[#F3EDE3] opacity-75"
        }`}
      />
    </div>
  );
}
