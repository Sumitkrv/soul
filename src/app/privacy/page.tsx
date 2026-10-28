import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Starfield from "@/components/celestial/Starfield";
import { siteConfig } from "@/lib/config/site-config";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | The Celestial Atelier",
  description: "Privacy policy and client data confidentiality standards for The Celestial Atelier.",
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-[#120B20] text-[#F3EDE3] pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Starfield density={35} speed={0.15} />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="p-8 sm:p-14 rounded-3xl bg-[#22132E] border border-[#B89A6A]/30 shadow-2xl space-y-8 font-sans-editorial text-xs sm:text-sm text-[#F3EDE3]/80 leading-relaxed">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#120B20] border border-[#B89A6A]/30 text-xs text-[#B89A6A] mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>Draft Policy for Client Review</span>
            </div>
            <h1 className="font-serif-editorial text-4xl sm:text-5xl font-light text-[#F3EDE3]">
              Privacy & Sacred Data Policy
            </h1>
            <p className="mt-2 text-xs text-[#B89A6A]">
              Last updated: October 2024 • Governed by {siteConfig.brand.name}
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-[#B89A6A]/20">
            <h2 className="font-serif-editorial text-2xl text-[#F3EDE3]">
              1. Our Foundational Confidentiality Pledge
            </h2>
            <p>
              At The Celestial Atelier, we treat your birth coordinates, personal reflections, session recordings, and contact details with absolute sanctity. We never sell, rent, commercialize, or publicly disclose any client data under any circumstances.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif-editorial text-2xl text-[#F3EDE3]">
              2. Information We Collect
            </h2>
            <p>We collect only the essential information needed to conduct your consultation:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#F3EDE3]/75">
              <li><strong>Contact Information:</strong> Full name and email address for scheduling and delivery of session archives.</li>
              <li><strong>Astrological Coordinates:</strong> Date of birth, exact time of birth, and city/country of birth—used solely to calculate your astronomical chart wheel.</li>
              <li><strong>Inquiry Notes:</strong> Contextual questions you choose to submit to guide our dialogue.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif-editorial text-2xl text-[#F3EDE3]">
              3. Client-Side Processing Notice
            </h2>
            <p>
              Interactive features such as the <strong>Pythagorean Life Path Calculator</strong> on this website process your birth date entirely locally within your browser. No birth date information entered into the public calculator is transmitted or saved on external servers.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif-editorial text-2xl text-[#F3EDE3]">
              4. Session Audio & Video Archives
            </h2>
            <p>
              Recordings of virtual sessions are provided to you via private encrypted cloud links. Archives are automatically purged from our temporary storage after 30 calendar days to guarantee long-term privacy.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif-editorial text-2xl text-[#F3EDE3]">
              5. Your Rights & Deletion Requests
            </h2>
            <p>
              You maintain the perpetual right to request complete deletion of your booking history, inquiry notes, and contact coordinates. Simply notify our concierge at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-[#D9CDF5] underline">
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
