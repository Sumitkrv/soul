"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { journalArticles } from "@/data/journal";
import Starfield from "@/components/celestial/Starfield";
import { ArrowUpRight, Search, Clock, Calendar } from "lucide-react";

export default function JournalHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Celestial Transits",
    "Rituals & Sacred Space",
    "Archetypal Psychology",
    "Esoteric Arts",
  ];

  const filteredArticles = journalArticles.filter((art) => {
    const matchesCategory =
      selectedCategory === "All" || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featured = journalArticles[0];

  return (
    <div className="relative min-h-screen bg-[#120B20] text-[#F3EDE3] pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Starfield density={45} speed={0.15} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B89A6A] font-semibold">
            The Atelier Periodical
          </span>
          <h1 className="font-serif-editorial text-5xl sm:text-7xl font-light text-[#F3EDE3] mt-3">
            Cosmic Journal & Essays
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#F3EDE3]/80 font-sans-editorial leading-relaxed max-w-2xl mx-auto">
            Deep-dive essays on archetypal psychology, seasonal lunar pacing, contemplative tarot, and grounding somatic rituals.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#B89A6A] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search essays by keyword, theme, or transit..."
              className="w-full bg-[#22132E] border border-[#B89A6A]/30 rounded-full pl-11 pr-5 py-3 text-xs text-[#F3EDE3] placeholder:text-[#F3EDE3]/40 focus:outline-none focus:border-[#B89A6A]"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-sans-editorial transition-all border ${
                  selectedCategory === cat
                    ? "bg-[#B89A6A] text-[#120B20] border-[#B89A6A] font-semibold"
                    : "bg-[#22132E] text-[#F3EDE3]/75 border-[#B89A6A]/20 hover:border-[#B89A6A]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article Hero (When no search query is active) */}
        {!searchQuery && selectedCategory === "All" && (
          <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-[#22132E] border border-[#B89A6A]/30 shadow-2xl overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-xl border border-[#B89A6A]/20">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#B89A6A] font-sans-editorial mb-3">
                    <span className="uppercase tracking-wider">{featured.category}</span>
                    <span>•</span>
                    <span>{featured.publishedAt}</span>
                    <span>•</span>
                    <span>{featured.readTime}</span>
                  </div>

                  <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#F3EDE3] group-hover:text-[#D9CDF5] transition-colors leading-snug">
                    {featured.title}
                  </h2>

                  <p className="mt-4 text-sm text-[#F3EDE3]/75 font-sans-editorial leading-relaxed">
                    {featured.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[#B89A6A]/15">
                  <Link
                    href={`/journal/${featured.slug}`}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D9CDF5] hover:text-[#F3EDE3] font-medium"
                  >
                    <span>Read Full Essay</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filtered Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              href={`/journal/${article.slug}`}
              className="group p-6 rounded-3xl bg-[#22132E]/60 border border-[#B89A6A]/25 hover:bg-[#22132E] hover:border-[#B89A6A] transition-all duration-400 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-5 border border-[#B89A6A]/20">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 px-3 py-0.5 rounded-full bg-[#120B20]/85 text-[10px] uppercase tracking-wider text-[#D9CDF5]">
                    {article.category}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[10px] text-[#B89A6A] font-sans-editorial mb-2">
                  <span>{article.publishedAt}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-serif-editorial text-2xl text-[#F3EDE3] group-hover:text-[#D9CDF5] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#F3EDE3]/70 font-sans-editorial leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#B89A6A]/15 flex items-center justify-between text-xs text-[#D9CDF5]">
                <span>Read Article</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
