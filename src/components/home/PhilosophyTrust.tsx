import React from "react";
import CelestialDivider from "@/components/celestial/CelestialDividers";
import { Lock, EyeOff, Sparkles, Feather } from "lucide-react";

export default function PhilosophyTrust() {
  const commitments = [
    {
      icon: Lock,
      title: "Complete Discretion",
      description:
        "Every chart, personal inquiry, and dialogue is held under absolute confidentiality. We never share client identities or session notes.",
    },
    {
      icon: EyeOff,
      title: "Free of Fatalism",
      description:
        "We reject doom-laden forecasts and fear-based superstitions. We honor your free will, human sovereignty, and conscious agency.",
    },
    {
      icon: Feather,
      title: "Unhurried Presence",
      description:
        "We intentionally limit client consultations per lunar cycle to ensure extensive chart preparation and calm, unhurried attention.",
    },
    {
      icon: Sparkles,
      title: "Ethical Integrity",
      description:
        "Clear distinction between contemplative archetypal symbolism and medical, legal, or psychological healthcare.",
    },
  ];

  return (
    <section className="bg-[#22132E] text-[#F3EDE3] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-[#B89A6A]/15">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B89A6A] font-semibold">
            Our Sanctuary Code
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl font-light text-[#F3EDE3] mt-2">
            The Pillars of Trust & Practice
          </h2>
          <p className="mt-3 text-sm text-[#F3EDE3]/70 font-sans-editorial leading-relaxed">
            In an industry fraught with sensationalism, The Celestial Atelier stands firmly on four unwavering commitments.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-[#B89A6A]/20 bg-[#120B20]/60 flex flex-col items-start hover:border-[#B89A6A]/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#22132E] border border-[#B89A6A]/30 flex items-center justify-center text-[#B89A6A] mb-6">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif-editorial text-2xl text-[#F3EDE3] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#F3EDE3]/70 font-sans-editorial leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Ethical Quotation */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <CelestialDivider variant="minimal" color="#B89A6A" />
          <p className="text-xs sm:text-sm text-[#D9CDF5] font-serif-editorial italic mt-4">
            "True guidance does not claim to hold the keys to your destiny; it simply reminds you that you have always held them yourself."
          </p>
        </div>
      </div>
    </section>
  );
}
