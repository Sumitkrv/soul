"use client";

import React, { useState } from "react";
import { faqsData } from "@/data/faqs";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(faqsData[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-[#120B20] text-[#F3EDE3] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative border-t border-[#B89A6A]/15">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B89A6A] font-semibold">
            Common Inquiries
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl font-light text-[#F3EDE3] mt-2">
            Frequently Explored Questions
          </h2>
          <p className="mt-3 text-sm text-[#F3EDE3]/70 font-sans-editorial max-w-xl mx-auto leading-relaxed">
            Everything you need to know about preparing for your reading, session ethics, and scheduling.
          </p>
        </div>

        {/* Minimalist Accordion */}
        <div className="divide-y divide-[#B89A6A]/20 border-t border-b border-[#B89A6A]/20">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-6 transition-colors">
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B89A6A]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-editorial text-xl sm:text-2xl text-[#F3EDE3] group-hover:text-[#D9CDF5] transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#B89A6A]/30 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#B89A6A] text-[#120B20]" : "text-[#B89A6A]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-12 text-sm sm:text-base text-[#F3EDE3]/75 font-sans-editorial leading-relaxed animate-fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
