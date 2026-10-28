"use client";

import React, { useState } from "react";
import Link from "next/link";
import { calculateLifePath, lifePathData, LifePathInfo } from "@/data/numerology";
import { Sparkles, Calculator, Check, ArrowRight, ShieldCheck } from "lucide-react";

export default function NumerologyCalculator() {
  const [birthDate, setBirthDate] = useState<string>("");
  const [result, setResult] = useState<{
    lifePathNumber: number;
    steps: {
      monthSum: number;
      monthReduced: number;
      daySum: number;
      dayReduced: number;
      yearSum: number;
      yearReduced: number;
      totalSum: number;
    };
  } | null>(null);

  const [activeNumber, setActiveNumber] = useState<LifePathInfo>(lifePathData[1]);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!birthDate) return;

    const res = calculateLifePath(birthDate);
    if (res) {
      setResult(res);
      const info = lifePathData[res.lifePathNumber] || lifePathData[1];
      setActiveNumber(info);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      {/* Interactive Calculator Form (Client-Side Only) */}
      <div className="bg-[#22132E] rounded-3xl border border-[#B89A6A]/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B89A6A] font-semibold">
            Pythagorean Life Path Engine
          </span>
          <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#F3EDE3] mt-2">
            Calculate Your Sacred Life Path
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#F3EDE3]/70 font-sans-editorial leading-relaxed">
            Your birth date is processed securely in your browser. No private birth information is submitted or stored on external servers for this free calculation.
          </p>
        </div>

        <form onSubmit={handleCalculate} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <input
            type="date"
            required
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="flex-1 bg-[#120B20] border border-[#B89A6A]/40 rounded-full px-5 py-3.5 text-sm text-[#F3EDE3] focus:outline-none focus:border-[#B89A6A]"
          />
          <button
            type="submit"
            className="px-8 py-3.5 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#D4BD8B] transition-colors shrink-0 inline-flex items-center justify-center gap-2"
          >
            <Calculator className="w-4 h-4 text-[#120B20]" />
            <span>Calculate</span>
          </button>
        </form>

        {/* Calculation Step-by-Step Breakdown */}
        {result && (
          <div className="mt-10 p-6 rounded-2xl bg-[#120B20]/80 border border-[#B89A6A]/25 max-w-2xl mx-auto animate-fade-in">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89A6A] block mb-2 font-semibold">
              Pythagorean Reduction Breakdown
            </span>
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-sans-editorial pb-4 border-b border-[#B89A6A]/15">
              <div className="p-2 rounded-lg bg-[#22132E]">
                <div className="text-[#F3EDE3]/60 text-[10px]">Month</div>
                <div className="text-[#D9CDF5] font-semibold text-sm">{result.steps.monthReduced}</div>
              </div>
              <div className="p-2 rounded-lg bg-[#22132E]">
                <div className="text-[#F3EDE3]/60 text-[10px]">Day</div>
                <div className="text-[#D9CDF5] font-semibold text-sm">{result.steps.dayReduced}</div>
              </div>
              <div className="p-2 rounded-lg bg-[#22132E]">
                <div className="text-[#F3EDE3]/60 text-[10px]">Year</div>
                <div className="text-[#D9CDF5] font-semibold text-sm">{result.steps.yearReduced}</div>
              </div>
            </div>
            <div className="pt-3 text-center text-xs text-[#F3EDE3]/80">
              {result.steps.monthReduced} + {result.steps.dayReduced} + {result.steps.yearReduced} ={" "}
              <strong>{result.steps.totalSum}</strong> → Life Path{" "}
              <strong className="text-xl text-[#B89A6A] font-serif-editorial">
                {result.lifePathNumber}
              </strong>
            </div>
          </div>
        )}
      </div>

      {/* Numerical Matrix Browser (Selectable numbers 1–9, 11, 22, 33) */}
      <div>
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B89A6A] font-semibold">
            Explore All Vibrational Frequencies
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33].map((num) => {
            const isSelected = activeNumber.number === num;
            return (
              <button
                key={num}
                onClick={() => setActiveNumber(lifePathData[num])}
                className={`w-11 h-11 rounded-full text-sm font-serif-editorial transition-all border ${
                  isSelected
                    ? "bg-[#B89A6A] text-[#120B20] border-[#B89A6A] font-bold scale-110 shadow-lg"
                    : "bg-[#22132E] text-[#F3EDE3] border-[#B89A6A]/25 hover:border-[#B89A6A]"
                }`}
              >
                {num}
              </button>
            );
          })}
        </div>

        {/* Detailed Number Dossier */}
        <div className="bg-[#22132E] rounded-3xl border border-[#B89A6A]/30 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Giant Number Badge */}
            <div className="lg:col-span-4 flex flex-col items-center text-center border-b lg:border-b-0 lg:border-r border-[#B89A6A]/20 pb-8 lg:pb-0 lg:pr-8">
              <div className="w-28 h-28 rounded-full bg-[#120B20] border border-[#B89A6A] flex items-center justify-center mb-4 shadow-xl">
                <span className="font-serif-editorial text-6xl text-[#B89A6A]">
                  {activeNumber.number}
                </span>
              </div>
              <h4 className="font-serif-editorial text-3xl text-[#F3EDE3]">
                {activeNumber.title}
              </h4>
              <span className="text-xs uppercase tracking-[0.2em] text-[#D9CDF5] mt-1 font-sans-editorial">
                Archetype: {activeNumber.archetype}
              </span>
              <span className="text-xs text-[#B89A6A] mt-2">
                Element: {activeNumber.element}
              </span>
            </div>

            {/* In-depth Details */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#B89A6A] font-semibold">
                  Vibrational Essence
                </span>
                <p className="font-serif-editorial text-2xl text-[#F3EDE3] leading-snug mt-1">
                  "{activeNumber.essence}"
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {activeNumber.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="text-xs px-3 py-1 rounded-full bg-[#120B20] border border-[#B89A6A]/30 text-[#D9CDF5]"
                    >
                      {kw}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-6 border-t border-[#B89A6A]/15 text-xs font-sans-editorial">
                  <div>
                    <strong className="text-[#B89A6A] block mb-2 uppercase tracking-wider">
                      Innate Strengths
                    </strong>
                    <ul className="space-y-1 text-[#F3EDE3]/80">
                      {activeNumber.strengths.map((str, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#B89A6A]" />
                          <span>{str}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <strong className="text-[#B89A6A] block mb-2 uppercase tracking-wider">
                      Evolutionary Growth
                    </strong>
                    <ul className="space-y-1 text-[#F3EDE3]/80">
                      {activeNumber.growthLessons.map((lesson, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D9CDF5]" />
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-[#120B20] border border-[#B89A6A]/20">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#B89A6A] block mb-1">
                    Contemplative Anchor
                  </span>
                  <p className="text-xs sm:text-sm text-[#D9CDF5] italic font-serif-editorial">
                    "{activeNumber.affirmation}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsible Practice Disclaimer */}
      <div className="p-4 rounded-xl bg-[#120B20]/60 border border-[#B89A6A]/20 flex items-start gap-3 text-xs text-[#F3EDE3]/65 font-sans-editorial max-w-3xl mx-auto">
        <ShieldCheck className="w-4 h-4 text-[#B89A6A] shrink-0 mt-0.5" />
        <p>
          <strong>Interpretive Practice Notice:</strong> Pythagorean numerology is an ancient symbolic art for exploring patterns, personal cycles, and psychological archetypes. It does not replace independent decision-making, professional advice, or scientific determinism.
        </p>
      </div>
    </div>
  );
}
