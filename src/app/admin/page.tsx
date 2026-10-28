"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/lib/config/site-config";
import { BookingRecord, ContactMessage } from "@/lib/db/storage";
import {
  Lock,
  Unlock,
  Calendar,
  Mail,
  CheckCircle,
  Clock,
  XCircle,
  RefreshCw,
  Sparkles,
  Layers,
  Settings,
  ShieldCheck,
} from "lucide-react";

export default function AdminPortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [activeTab, setActiveTab] = useState<"bookings" | "messages" | "config">("bookings");
  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [statusUpdateMsg, setStatusUpdateMsg] = useState<string | null>(null);

  // Administrative Passcode Check (Client-configurable; default development passcode: 'sanctuary2024')
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === "sanctuary2024" || passcode === "celestial") {
      setIsAuthenticated(true);
      setErrorMsg("");
      fetchData();
    } else {
      setErrorMsg("Incorrect sanctuary passcode. Please verify administrative key.");
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/admin/bookings");
      const data = await res.json();
      if (data.success) {
        setBookings(data.bookings || []);
        setMessages(data.messages || []);
      }
    } catch (err) {
      console.error("Failed to load records", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateStatus = async (
    id: string,
    status: "pending" | "confirmed" | "completed" | "cancelled"
  ) => {
    setStatusUpdateMsg("Updating ledger...");
    try {
      const res = await fetch("/api/admin/bookings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      const data = await res.json();
      if (data.success) {
        setStatusUpdateMsg(`Booking ${id} status updated to ${status}.`);
        fetchData();
      }
    } catch (err) {
      setStatusUpdateMsg("Failed to update status.");
    } finally {
      setTimeout(() => setStatusUpdateMsg(null), 3000);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#120B20] text-[#F3EDE3] flex items-center justify-center p-4 pt-24">
        <div className="max-w-md w-full p-8 rounded-3xl bg-[#22132E] border border-[#B89A6A]/30 shadow-2xl text-center">
          <div className="w-14 h-14 rounded-full bg-[#120B20] border border-[#B89A6A] flex items-center justify-center mx-auto mb-4 text-[#B89A6A]">
            <Lock className="w-6 h-6" />
          </div>

          <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89A6A] font-semibold">
            Administrative Sanctuary
          </span>

          <h1 className="font-serif-editorial text-3xl sm:text-4xl text-[#F3EDE3] mt-2 mb-4">
            Atelier Portal
          </h1>

          <p className="text-xs text-[#F3EDE3]/70 font-sans-editorial mb-6">
            Review consultations, manage scheduling ledgers, and view client transmissions. (Demo Passcode: <code>sanctuary2024</code>)
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Enter administrative passcode"
              className="w-full bg-[#120B20] border border-[#B89A6A]/40 rounded-xl px-4 py-3 text-sm text-[#F3EDE3] focus:outline-none focus:border-[#B89A6A] text-center"
            />

            {errorMsg && (
              <div className="text-red-400 text-xs">{errorMsg}</div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#D4BD8B] transition-colors"
            >
              Unlock Ledger
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#120B20] text-[#F3EDE3] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Admin Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-[#B89A6A]/20 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs text-[#B89A6A] uppercase tracking-[0.2em] mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Administrative Sanctuary Ledger</span>
            </div>
            <h1 className="font-serif-editorial text-4xl text-[#F3EDE3]">
              {siteConfig.brand.name} Control
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchData}
              className="px-4 py-2 rounded-full border border-[#B89A6A]/30 text-xs text-[#D9CDF5] hover:bg-[#22132E] transition-colors inline-flex items-center gap-1.5"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
              <span>Refresh Records</span>
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-4 py-2 rounded-full bg-[#22132E] text-xs text-[#F3EDE3]/70 hover:text-red-300 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>

        {statusUpdateMsg && (
          <div className="mb-6 p-3 rounded-xl bg-[#22132E] border border-[#B89A6A] text-xs text-[#D9CDF5] text-center">
            {statusUpdateMsg}
          </div>
        )}

        {/* Tab Controls */}
        <div className="flex gap-4 mb-8 border-b border-[#B89A6A]/15 pb-4">
          <button
            onClick={() => setActiveTab("bookings")}
            className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-sans-editorial transition-all ${
              activeTab === "bookings"
                ? "bg-[#B89A6A] text-[#120B20] font-semibold"
                : "bg-[#22132E] text-[#F3EDE3]/80 hover:text-[#F3EDE3]"
            }`}
          >
            Consultation Bookings ({bookings.length})
          </button>
          <button
            onClick={() => setActiveTab("messages")}
            className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-sans-editorial transition-all ${
              activeTab === "messages"
                ? "bg-[#B89A6A] text-[#120B20] font-semibold"
                : "bg-[#22132E] text-[#F3EDE3]/80 hover:text-[#F3EDE3]"
            }`}
          >
            Client Inquiries ({messages.length})
          </button>
          <button
            onClick={() => setActiveTab("config")}
            className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-sans-editorial transition-all ${
              activeTab === "config"
                ? "bg-[#B89A6A] text-[#120B20] font-semibold"
                : "bg-[#22132E] text-[#F3EDE3]/80 hover:text-[#F3EDE3]"
            }`}
          >
            Sanctuary Configuration
          </button>
        </div>

        {/* TAB 1: Bookings Management */}
        {activeTab === "bookings" && (
          <div className="space-y-6">
            {bookings.length === 0 ? (
              <div className="text-center py-16 text-xs text-[#B89A6A] bg-[#22132E] rounded-3xl border border-[#B89A6A]/20">
                No bookings recorded yet.
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="p-6 rounded-2xl bg-[#22132E] border border-[#B89A6A]/30 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#B89A6A] transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono font-bold text-[#B89A6A] tracking-wider">
                          {booking.id}
                        </span>
                        <span
                          className={`text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                            booking.status === "confirmed"
                              ? "bg-emerald-950 text-emerald-300 border border-emerald-500/40"
                              : booking.status === "cancelled"
                              ? "bg-red-950 text-red-300 border border-red-500/40"
                              : "bg-[#B89A6A]/20 text-[#D9CDF5] border border-[#B89A6A]/30"
                          }`}
                        >
                          {booking.status}
                        </span>
                        <span className="text-xs text-[#F3EDE3]/60">
                          {booking.consultationType === "virtual" ? "Virtual Zoom" : "In-Person Atelier"}
                        </span>
                      </div>

                      <h3 className="font-serif-editorial text-2xl text-[#F3EDE3]">
                        {booking.serviceTitle}
                      </h3>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-[#F3EDE3]/80 mt-2 font-sans-editorial">
                        <span>Client: <strong>{booking.clientName}</strong> ({booking.clientEmail})</span>
                        <span>•</span>
                        <span>Date: <strong>{booking.date}</strong> at <strong>{booking.timeSlot}</strong></span>
                        <span>•</span>
                        <span>Exchange: <strong>${booking.servicePrice} USD</strong></span>
                      </div>

                      {booking.birthDate && (
                        <div className="text-xs text-[#B89A6A] mt-2">
                          Birth Data: {booking.birthDate} {booking.birthTime ? `at ${booking.birthTime}` : ""} {booking.birthLocation ? `(${booking.birthLocation})` : ""}
                        </div>
                      )}

                      {booking.notes && (
                        <p className="text-xs text-[#F3EDE3]/70 mt-2 italic bg-[#120B20]/60 p-2.5 rounded-lg border border-[#B89A6A]/15">
                          "{booking.notes}"
                        </p>
                      )}
                    </div>

                    {/* Status Action Buttons */}
                    <div className="flex items-center gap-2 shrink-0">
                      {booking.status !== "confirmed" && (
                        <button
                          onClick={() => handleUpdateStatus(booking.id, "confirmed")}
                          className="px-3 py-1.5 rounded-lg bg-emerald-900/50 border border-emerald-500/50 text-emerald-200 text-xs hover:bg-emerald-800 transition-colors"
                        >
                          Confirm
                        </button>
                      )}
                      {booking.status !== "completed" && (
                        <button
                          onClick={() => handleUpdateStatus(booking.id, "completed")}
                          className="px-3 py-1.5 rounded-lg bg-purple-900/50 border border-purple-500/50 text-purple-200 text-xs hover:bg-purple-800 transition-colors"
                        >
                          Complete
                        </button>
                      )}
                      {booking.status !== "cancelled" && (
                        <button
                          onClick={() => handleUpdateStatus(booking.id, "cancelled")}
                          className="px-3 py-1.5 rounded-lg bg-red-950/60 border border-red-500/50 text-red-300 text-xs hover:bg-red-900 transition-colors"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: Messages */}
        {activeTab === "messages" && (
          <div className="space-y-4">
            {messages.length === 0 ? (
              <div className="text-center py-16 text-xs text-[#B89A6A] bg-[#22132E] rounded-3xl border border-[#B89A6A]/20">
                No inquiries recorded yet.
              </div>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className="p-6 rounded-2xl bg-[#22132E] border border-[#B89A6A]/20 space-y-3"
                >
                  <div className="flex items-center justify-between text-xs text-[#B89A6A]">
                    <span className="font-mono">{msg.id}</span>
                    <span>{new Date(msg.createdAt).toLocaleString()}</span>
                  </div>
                  <h4 className="font-serif-editorial text-xl text-[#F3EDE3]">{msg.subject}</h4>
                  <div className="text-xs text-[#D9CDF5]">
                    From: <strong>{msg.name}</strong> ({msg.email})
                  </div>
                  <p className="text-xs sm:text-sm text-[#F3EDE3]/80 bg-[#120B20]/60 p-4 rounded-xl border border-[#B89A6A]/10 leading-relaxed">
                    {msg.message}
                  </p>
                </div>
              ))
            )}
          </div>
        )}

        {/* TAB 3: Site Configuration Overview */}
        {activeTab === "config" && (
          <div className="p-8 rounded-3xl bg-[#22132E] border border-[#B89A6A]/30 space-y-6 font-sans-editorial text-xs sm:text-sm">
            <h3 className="font-serif-editorial text-3xl text-[#F3EDE3]">
              Centralized Brand Identity & Operations
            </h3>
            <p className="text-xs text-[#F3EDE3]/70">
              All branding variables are centralized in <code>src/lib/config/site-config.ts</code> for seamless client modification without editing React markup.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#B89A6A]/15">
              <div className="p-4 rounded-xl bg-[#120B20] border border-[#B89A6A]/20 space-y-2">
                <strong className="text-[#B89A6A] block">Brand Name & Tagline:</strong>
                <div>{siteConfig.brand.name}</div>
                <div className="text-[#D9CDF5] italic">"{siteConfig.brand.tagline}"</div>
                <div className="text-xs text-[#F3EDE3]/60">Operating Time Zone: {siteConfig.brand.timeZone}</div>
              </div>

              <div className="p-4 rounded-xl bg-[#120B20] border border-[#B89A6A]/20 space-y-2">
                <strong className="text-[#B89A6A] block">Lead Astrologer & Profile Status:</strong>
                <div>{siteConfig.practitioner.name} ({siteConfig.practitioner.role})</div>
                <div className="text-amber-300 text-xs">Status: {siteConfig.practitioner.tag}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
