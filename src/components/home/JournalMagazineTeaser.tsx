import React from "react";
import Image from "next/image";
import Link from "next/link";
import { journalArticles } from "@/data/journal";
import { eventsData } from "@/data/events";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

export default function JournalMagazineTeaser() {
  const featuredArticle = journalArticles[0];
  const sideArticles = [journalArticles[1], journalArticles[2]];
  const nextEvent = eventsData[0];

  return (
    <section className="bg-[#120B20] text-[#F3EDE3] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#B89A6A]/20">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#B89A6A] font-semibold">
              The Atelier Periodical
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-light text-[#F3EDE3] mt-2">
              Cosmic Journal & Gatherings
            </h2>
          </div>
          <Link
            href="/journal"
            className="mt-4 md:mt-0 text-xs uppercase tracking-[0.25em] text-[#D9CDF5] hover:text-[#F3EDE3] transition-colors inline-flex items-center gap-1.5"
          >
            <span>Explore All Essays</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Magazine Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Large Featured Article */}
          <div className="lg:col-span-7 group flex flex-col rounded-2xl overflow-hidden border border-[#B89A6A]/25 bg-[#22132E] hover:border-[#B89A6A] transition-all duration-400">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#120B20]/80 backdrop-blur-md border border-[#B89A6A]/40 text-[10px] uppercase tracking-[0.2em] text-[#D9CDF5]">
                {featuredArticle.category}
              </div>
            </div>

            <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center gap-3 text-xs text-[#B89A6A] font-sans-editorial mb-3">
                  <span>{featuredArticle.publishedAt}</span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#F3EDE3] group-hover:text-[#D9CDF5] transition-colors leading-snug">
                  {featuredArticle.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#F3EDE3]/70 font-sans-editorial leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#B89A6A]/15">
                <Link
                  href={`/journal/${featuredArticle.slug}`}
                  className="text-xs uppercase tracking-[0.25em] text-[#D9CDF5] hover:text-[#F3EDE3] font-medium inline-flex items-center gap-1.5"
                >
                  <span>Read Full Essay</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Side Column: 2 Supporting Articles + Upcoming Event Teaser */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {sideArticles.map((article) => (
              <Link
                key={article.id}
                href={`/journal/${article.slug}`}
                className="group p-6 rounded-2xl border border-[#B89A6A]/20 bg-[#22132E]/60 hover:bg-[#22132E] hover:border-[#B89A6A]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#B89A6A] mb-2 font-sans-editorial">
                  <span>{article.category}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h4 className="font-serif-editorial text-xl text-[#F3EDE3] group-hover:text-[#D9CDF5] transition-colors leading-snug">
                  {article.title}
                </h4>
                <p className="mt-2 text-xs text-[#F3EDE3]/65 font-sans-editorial line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="mt-4 pt-3 border-t border-[#B89A6A]/10 text-[11px] text-[#D9CDF5] flex items-center justify-between">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}

            {/* Upcoming Event Teaser Card */}
            {nextEvent && (
              <div className="p-6 rounded-2xl border border-[#B89A6A]/40 bg-gradient-to-br from-[#22132E] via-[#120B20] to-[#22132E] relative overflow-hidden">
                <div className="flex items-center justify-between text-xs text-[#B89A6A] mb-2">
                  <span className="uppercase tracking-[0.25em] font-semibold">Next Gathering</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#B89A6A]/20 text-[#D9CDF5]">
                    {nextEvent.status}
                  </span>
                </div>
                <h4 className="font-serif-editorial text-2xl text-[#F3EDE3] mt-1">
                  {nextEvent.title}
                </h4>
                <div className="mt-3 flex items-center gap-4 text-xs text-[#F3EDE3]/70 font-sans-editorial">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#B89A6A]" />
                    {nextEvent.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#B89A6A]" />
                    {nextEvent.time}
                  </span>
                </div>
                <div className="mt-5 pt-4 border-t border-[#B89A6A]/20 flex items-center justify-between">
                  <span className="text-xs text-[#B89A6A] font-semibold">${nextEvent.price} USD</span>
                  <Link
                    href="/events"
                    className="text-xs uppercase tracking-[0.2em] text-[#D9CDF5] hover:text-[#F3EDE3] font-medium"
                  >
                    View Gathering →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
