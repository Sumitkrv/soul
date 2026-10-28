import React from "react";
import HeroSection from "@/components/home/HeroSection";
import EditorialIntro from "@/components/home/EditorialIntro";
import OfferingsShowcase from "@/components/home/OfferingsShowcase";
import ZodiacDiscoverySection from "@/components/home/ZodiacDiscoverySection";
import CosmicJournalGrid from "@/components/home/CosmicJournalGrid";
import ForestInterlude from "@/components/home/ForestInterlude";
import ConsultationSpotlight from "@/components/home/ConsultationSpotlight";
import InteractiveTarotSection from "@/components/home/InteractiveTarotSection";
import JourneyTimeline from "@/components/home/JourneyTimeline";
import PractitionerPhilosophy from "@/components/home/PractitionerPhilosophy";
import JournalMagazineTeaser from "@/components/home/JournalMagazineTeaser";
import PhilosophyTrust from "@/components/home/PhilosophyTrust";
import FaqAccordion from "@/components/home/FaqAccordion";
import CelestialInvitationCta from "@/components/home/CelestialInvitationCta";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 01: Cinematic opening scene */}
      <HeroSection />

      {/* 02: Introductory editorial statement */}
      <EditorialIntro />

      {/* 03: Experiences and offerings */}
      <OfferingsShowcase />

      {/* 04: Zodiac discovery */}
      <ZodiacDiscoverySection />

      {/* 05: Cosmic journal / Daily inspiration */}
      <CosmicJournalGrid />

      {/* 06: Immersive forest interlude */}
      <ForestInterlude />

      {/* 07: Personal reading spotlight */}
      <ConsultationSpotlight />

      {/* 08: Interactive tarot moment */}
      <InteractiveTarotSection />

      {/* 09: The journey / How it works */}
      <JourneyTimeline />

      {/* 10: Practitioner and philosophy */}
      <PractitionerPhilosophy />

      {/* 11: Journal, courses, and gatherings */}
      <JournalMagazineTeaser />

      {/* 12: Testimonials & sanctuary trust code */}
      <PhilosophyTrust />

      {/* 13: FAQ minimalist accordion */}
      <FaqAccordion />

      {/* 14: Final celestial invitation */}
      <CelestialInvitationCta />
    </div>
  );
}
