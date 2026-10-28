import React from "react";
import Link from "next/link";
import { Sparkles, Compass, CalendarCheck, Moon, HeartHandshake } from "lucide-react";

export default function JourneyTimeline() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Experience",
      description:
        "Select the consultation format that resonates with your present inquiries—whether natal astrology, contemplative tarot, or personal year numerology.",
      icon: Compass,
    },
    {
      number: "02",
      title: "Reserve Your Session",
      description:
        "Choose an unhurried time slot calibrated to your local time zone. Provide your exact birth coordinates for precise chart delineation.",
      icon: CalendarCheck,
    },
    {
      number: "03",
      title: "Explore Your Reading",
      description:
        "Meet in our private virtual sanctuary or intimate atelier for a 60–90 minute dialogue centered on your questions, psychological patterns, and soul trajectory.",
      icon: Moon,
    },
    {
      number: "04",
      title: "Carry the Insight Forward",
      description:
        "Receive your permanent audio recording, personalized chart wheel, and grounding integration prompts to anchor cosmic insights into daily choices.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="bg-[#120B20] text-[#F3EDE3] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B89A6A] font-semibold">
            The Consultation Path
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#F3EDE3] mt-3">
            How Your Journey Unfolds
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#F3EDE3]/75 font-sans-editorial leading-relaxed">
            From the initial question to lasting integration, every step is held with discretion, warmth, and care.
          </p>
        </div>

        {/* Desktop Horizontal / Mobile Vertical Stepper with Flowing Golden Line */}
        <div className="relative">
          {/* Flowing Golden Path Line (Desktop) */}
          <div
            className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-12 h-[1px] bg-gradient-to-r from-transparent via-[#B89A6A]/60 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative flex flex-col items-center lg:items-start text-center lg:text-left group p-6 rounded-2xl border border-[#B89A6A]/15 bg-[#22132E]/40 hover:bg-[#22132E] hover:border-[#B89A6A]/40 transition-all duration-400"
                >
                  {/* Step Number & Node */}
                  <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-[#120B20] border border-[#B89A6A] text-[#B89A6A] mb-6 shadow-lg group-hover:scale-110 group-hover:bg-[#B89A6A] group-hover:text-[#120B20] transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-serif-editorial text-[#B89A6A] tracking-[0.25em] mb-1 font-semibold">
                    STEP {step.number}
                  </span>

                  <h3 className="font-serif-editorial text-2xl text-[#F3EDE3] group-hover:text-[#D9CDF5] transition-colors mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#F3EDE3]/70 font-sans-editorial leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA at Bottom of Journey */}
        <div className="mt-16 text-center">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#D4BD8B] transition-colors shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Schedule Your Session</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
