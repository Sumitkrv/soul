"use client";

import React, { useEffect, useRef, useState } from "react";

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  delay?: number; // ms
  stagger?: number; // ms
  type?: "lines" | "words";
  highlightWords?: string[];
}

export default function TextReveal({
  children,
  as: Component = "h2",
  className = "",
  delay = 100,
  stagger = 60,
  type = "words",
  highlightWords = [],
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Use IntersectionObserver so text reveals as it scrolls into viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const items = type === "words" ? children.split(" ") : children.split("\n");

  return (
    <div
      ref={containerRef}
      className={`inline-block ${className}`}
    >
      {items.map((item, index) => {
        const isHighlighted = highlightWords.some(
          (hw) => item.toLowerCase().includes(hw.toLowerCase())
        );

        return (
          <span
            key={index}
            className="inline-block overflow-hidden align-top mr-[0.25em] last:mr-0"
          >
            <span
              className={`inline-block will-change-transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[120%] opacity-0"
              } ${isHighlighted ? "italic text-[#D9CDF5]" : ""}`}
              style={{
                transitionDelay: `${delay + index * stagger}ms`,
              }}
            >
              {item}
            </span>
          </span>
        );
      })}
    </div>
  );
}
