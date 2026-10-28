import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Starfield from "@/components/celestial/Starfield";
import { siteConfig } from "@/lib/config/site-config";
import { Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Sanctuary | The Celestial Atelier",
  description: "Terms of engagement, consultation policies, and ethical scope of practice.",
};

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-[#120B20] text-[#F3EDE3] pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Starfield density={35} speed={0.15} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="p-8 sm:p-14 rounded-3xl bg-[#22132E] border border-[#B89A6A]/30 shadow-2xl space-y-8 font-sans-editorial text-xs sm:text-sm text-[#F3EDE3]/80 leading-relaxed">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#120B20] border border-[#B89A6A]/30 text-xs text-[#B89A6A] mb-4">
              <Scale className="w-4 h-4" />
              <span>Draft Terms for Client Review</span>
            </div>
            <h1 className="font-serif-editorial text-4xl sm:text-5xl font-light text-[#F3EDE3]">
              Terms of Sanctuary & Engagement
            </h1>
            <p className="mt-2 text-xs text-[#B89A6A]">
              Governing consultations, workshops, and digital publications
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-[#B89A6A]/20">
            <h2 className="font-serif-editorial text-2xl text-[#F3EDE3]">
              1. Contemplative & Symbolic Scope of Practice
            </h2>
            <p>
              Consultations, horoscopes, tarot draws, and numerology readings offered by {siteConfig.brand.name} are intended solely as contemplative, educational, and introspective arts. They do not constitute deterministic prophecies, medical diagnoses, psychological therapies, legal advisement, or financial strategies. Clients maintain full, sovereign agency for all personal and business decisions.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif-editorial text-2xl text-[#F3EDE3]">
              2. Rescheduling & Cancellation Policy
            </h2>
            <p>
              Due to the extensive individual research required to delineate a natal chart prior to meeting, appointments may be rescheduled free of charge with at least <strong>48 hours advance notice</strong>. Cancellations made within 48 hours of the scheduled time are non-refundable, but may be credited toward a future offering at our discretion.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif-editorial text-2xl text-[#F3EDE3]">
              3. Accuracy of Birth Information
            </h2>
            <p>
              The precision of house systems, rising degree, and lunar placement relies heavily on the birth time provided. While we verify and rectify where possible, the client is responsible for obtaining accurate time from birth records.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif-editorial text-2xl text-[#F3EDE3]">
              4. Code of Mutual Respect & Sanctuary
            </h2>
            <p>
              We reserve the right to decline or gently terminate any session where mutual respect, safety, or ethical boundaries are compromised.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
