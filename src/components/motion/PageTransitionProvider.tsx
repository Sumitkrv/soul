"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetHref, setTargetHref] = useState<string | null>(null);
  const veilRef = useRef<HTMLDivElement | null>(null);

  // When pathname updates, finish transition immediately
  useEffect(() => {
    setIsTransitioning(false);
    setTargetHref(null);

    // Scroll to top smoothly if not hash link
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname]);

  // Intercept internal link clicks for smooth transitions
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      // Ignore if modified click (cmd, ctrl, shift, alt) or not primary button
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Ignore external, anchor links, mailto, tel, downloads
      if (
        href.startsWith("http") ||
        href.startsWith("//") ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        target.getAttribute("target") === "_blank" ||
        target.hasAttribute("download")
      ) {
        return;
      }

      // If already on the exact same page, don't re-trigger transition
      if (href === pathname || (href === "/" && pathname === "/")) return;

      // Prevent default instant navigation and perform smooth transition
      e.preventDefault();

      // Check if browser supports View Transitions API
      if ("startViewTransition" in document) {
        try {
          (document as unknown as { startViewTransition: (cb: () => void) => void }).startViewTransition(() => {
            router.push(href);
          });
          return;
        } catch {
          // Fallback to veil transition below
        }
      }

      // Smooth custom celestial wipe transition
      setIsTransitioning(true);
      setTargetHref(href);

      setTimeout(() => {
        router.push(href);
      }, 280);
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleLinkClick, { capture: true });
    };
  }, [pathname, router]);

  return (
    <>
      {/* Delicate Celestial Plum & Gold Veil Wipe */}
      <div
        ref={veilRef}
        className={`fixed inset-0 z-[9990] pointer-events-none transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isTransitioning
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
        style={{
          backgroundColor: "#120B20",
          borderBottom: "2px solid rgba(184, 154, 106, 0.45)",
          boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
        }}
        aria-hidden="true"
      >
        {/* Subtle center celestial emblem while transitioning */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border border-[#B89A6A]/60 flex items-center justify-center animate-spin">
            <div className="w-1.5 h-1.5 rounded-full bg-[#B89A6A]" />
          </div>
        </div>
      </div>

      {/* Main Page Content with gentle entry reveal */}
      <div
        key={pathname}
        className="w-full flex-1 transition-all duration-400 ease-out animate-fade-in"
      >
        {children}
      </div>
    </>
  );
}
