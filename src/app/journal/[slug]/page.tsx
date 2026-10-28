import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { journalArticles } from "@/data/journal";
import Starfield from "@/components/celestial/Starfield";
import CelestialDivider from "@/components/celestial/CelestialDividers";
import { ArrowLeft, Clock, Calendar, Share2, Sparkles, BookOpen } from "lucide-react";

export async function generateStaticParams() {
  return journalArticles.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolved = await params;
  const article = journalArticles.find((a) => a.slug === resolved.slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | The Celestial Atelier Journal`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolved = await params;
  const article = journalArticles.find((a) => a.slug === resolved.slug);

  if (!article) {
    notFound();
  }

  const related = journalArticles.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <article className="relative min-h-screen bg-[#120B20] text-[#F3EDE3] pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Starfield density={40} speed={0.15} />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B89A6A] hover:text-[#D9CDF5] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Cosmic Journal</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22132E] border border-[#B89A6A]/30 text-xs text-[#B89A6A] mb-4">
            <span>{article.category}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#F3EDE3] leading-tight max-w-3xl mx-auto">
            {article.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#D9CDF5] font-serif-editorial italic max-w-2xl mx-auto">
            {article.subtitle}
          </p>

          <div className="mt-6 flex items-center justify-center gap-4 text-xs text-[#F3EDE3]/60 font-sans-editorial">
            <span>Written by {article.author}</span>
            <span>•</span>
            <span>{article.publishedAt}</span>
          </div>
        </header>

        {/* Hero Artwork for Article */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl border border-[#B89A6A]/30 mb-14">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
          />
        </div>

        {/* Long-form Editorial Body Typography */}
        <div className="p-8 sm:p-14 rounded-3xl bg-[#22132E] border border-[#B89A6A]/25 space-y-6 text-base sm:text-lg text-[#F3EDE3]/85 font-sans-editorial leading-relaxed">
          {article.content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {index === 0 ? (
                <span className="first-letter:float-left first-letter:text-5xl first-letter:font-serif-editorial first-letter:text-[#B89A6A] first-letter:pr-3 first-letter:leading-none">
                  {paragraph}
                </span>
              ) : (
                paragraph
              )}
            </p>
          ))}

          {/* Tags */}
          <div className="pt-8 border-t border-[#B89A6A]/20 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-[#120B20] text-[#D9CDF5] border border-[#B89A6A]/20"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-12 border-t border-[#B89A6A]/20">
          <h3 className="font-serif-editorial text-3xl text-[#F3EDE3] text-center mb-8">
            Continue Reading
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((rel) => (
              <Link
                key={rel.id}
                href={`/journal/${rel.slug}`}
                className="group p-6 rounded-2xl bg-[#22132E] border border-[#B89A6A]/20 hover:border-[#B89A6A] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#B89A6A] mb-1">
                    {rel.category}
                  </div>
                  <h4 className="font-serif-editorial text-xl text-[#F3EDE3] group-hover:text-[#D9CDF5] transition-colors">
                    {rel.title}
                  </h4>
                  <p className="mt-2 text-xs text-[#F3EDE3]/70 font-sans-editorial line-clamp-2">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#B89A6A]/10 text-xs text-[#D9CDF5]">
                  Read Essay →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
