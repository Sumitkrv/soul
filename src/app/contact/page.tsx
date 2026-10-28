"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site-config";
import Starfield from "@/components/celestial/Starfield";
import { Mail, Compass, Clock, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          privacyConsent,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to deliver message.");
      }

      setSuccessMsg(data.message);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setPrivacyConsent(false);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("An unexpected transmission error occurred.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#120B20] text-[#F3EDE3] pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Starfield density={45} speed={0.15} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B89A6A] font-semibold">
            Direct Atelier Concierge
          </span>
          <h1 className="font-serif-editorial text-5xl sm:text-7xl font-light text-[#F3EDE3] mt-3">
            Contact the Atelier
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#F3EDE3]/80 font-sans-editorial leading-relaxed max-w-2xl mx-auto">
            Whether inquiring about bespoke mentorship, salon gatherings, or private inquiries, our concierge responds with prompt discretion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Atelier Details Column */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#22132E] border border-[#B89A6A]/30 space-y-8">
            <div>
              <h3 className="font-serif-editorial text-3xl text-[#F3EDE3] mb-2">
                Sanctuary Coordinates
              </h3>
              <p className="text-xs sm:text-sm text-[#F3EDE3]/75 font-sans-editorial leading-relaxed">
                Consultations are held primarily via private encrypted video for clients worldwide, as well as intimate in-person atelier appointments by arrangement.
              </p>
            </div>

            <div className="space-y-4 text-xs font-sans-editorial">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#B89A6A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#B89A6A] block mb-0.5">Concierge Email</strong>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-[#D9CDF5] hover:underline">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#B89A6A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#B89A6A] block mb-0.5">Sanctuary Hours</strong>
                  <span className="text-[#F3EDE3]/80">{siteConfig.contact.hours}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Compass className="w-4 h-4 text-[#B89A6A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#B89A6A] block mb-0.5">Location & Time Zone</strong>
                  <span className="text-[#F3EDE3]/80">{siteConfig.brand.location} • {siteConfig.brand.timeZone}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#B89A6A]/20">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#B89A6A] block mb-2 font-semibold">
                Social Sanctuary
              </span>
              <div className="flex gap-4 text-xs text-[#D9CDF5]">
                <a href={siteConfig.contact.instagram} target="_blank" rel="noreferrer" className="hover:text-[#F3EDE3]">
                  Instagram
                </a>
                <span>•</span>
                <a href={siteConfig.contact.pinterest} target="_blank" rel="noreferrer" className="hover:text-[#F3EDE3]">
                  Pinterest
                </a>
                <span>•</span>
                <a href={siteConfig.contact.spotify} target="_blank" rel="noreferrer" className="hover:text-[#F3EDE3]">
                  Spotify Playlist
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#22132E] border border-[#B89A6A]/30">
            {successMsg ? (
              <div className="text-center py-12 space-y-4 animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-[#B89A6A]/20 border border-[#B89A6A] text-[#B89A6A] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif-editorial text-3xl text-[#F3EDE3]">
                  Transmission Received
                </h3>
                <p className="text-xs sm:text-sm text-[#F3EDE3]/80 font-sans-editorial max-w-md mx-auto leading-relaxed">
                  {successMsg} Our concierge typically replies within 24–48 business hours.
                </p>
                <button
                  onClick={() => setSuccessMsg(null)}
                  className="mt-4 px-6 py-2.5 rounded-full border border-[#B89A6A]/40 text-xs uppercase tracking-[0.2em] text-[#D9CDF5] hover:bg-[#D9CDF5]/15 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMsg && (
                  <div className="p-4 rounded-xl bg-red-900/40 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-[#B89A6A] font-semibold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Cassandra Ward"
                      className="w-full bg-[#120B20] border border-[#B89A6A]/30 rounded-xl px-4 py-3 text-sm text-[#F3EDE3] focus:outline-none focus:border-[#B89A6A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-[#B89A6A] font-semibold mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="cassandra@example.com"
                      className="w-full bg-[#120B20] border border-[#B89A6A]/30 rounded-xl px-4 py-3 text-sm text-[#F3EDE3] focus:outline-none focus:border-[#B89A6A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-[#B89A6A] font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Private Salon Booking / Consultation Question"
                    className="w-full bg-[#120B20] border border-[#B89A6A]/30 rounded-xl px-4 py-3 text-sm text-[#F3EDE3] focus:outline-none focus:border-[#B89A6A]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-[#B89A6A] font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How may our sanctuary support your journey?"
                    className="w-full bg-[#120B20] border border-[#B89A6A]/30 rounded-xl px-4 py-3 text-sm text-[#F3EDE3] focus:outline-none focus:border-[#B89A6A]"
                  />
                </div>

                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={privacyConsent}
                      onChange={(e) => setPrivacyConsent(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-[#B89A6A] text-[#B89A6A] focus:ring-0 bg-[#120B20]"
                    />
                    <span className="text-xs text-[#F3EDE3]/75 font-sans-editorial leading-relaxed">
                      I agree to the{" "}
                      <Link href="/privacy" className="text-[#D9CDF5] underline">
                        Privacy Policy
                      </Link>{" "}
                      and consent to receiving a direct response from the atelier concierge.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#D4BD8B] transition-colors disabled:opacity-50 inline-flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#120B20]" />
                  <span>{isSubmitting ? "Transmitting..." : "Send Message to Concierge"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
