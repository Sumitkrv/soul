import React, { Suspense } from "react";
import type { Metadata } from "next";
import BookingWizard from "@/components/booking/BookingWizard";
import Starfield from "@/components/celestial/Starfield";

export const metadata: Metadata = {
  title: "Reserve a Consultation | The Celestial Atelier",
  description:
    "Schedule your private 1-on-1 natal astrology consultation, contemplative tarot reading, or numerology blueprint.",
};

function BookingContent({ searchParams }: { searchParams?: Promise<{ service?: string }> }) {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-[#B89A6A] font-semibold">
          Private Sanctuary Reservations
        </span>
        <h1 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#F3EDE3] mt-3">
          Reserve Your Consultation
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[#F3EDE3]/75 font-sans-editorial leading-relaxed">
          Select an experience, choose your calendar coordinates, and submit your inquiry for individualized chart preparation.
        </p>
      </div>

      <BookingWizard />
    </div>
  );
}

export default function BookPage(props: {
  searchParams?: Promise<{ service?: string }>;
}) {
  return (
    <div className="relative min-h-screen bg-[#120B20] text-[#F3EDE3] pt-32 pb-24 overflow-hidden">
      <Starfield density={40} speed={0.15} />
      <Suspense fallback={<div className="text-center text-xs text-[#B89A6A] py-20">Loading sanctuary booking...</div>}>
        <BookingContent searchParams={props.searchParams} />
      </Suspense>
    </div>
  );
}
