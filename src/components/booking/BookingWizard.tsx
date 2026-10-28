"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { servicesData, ServiceItem } from "@/data/services";
import { siteConfig } from "@/lib/config/site-config";
import {
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Video,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export default function BookingWizard({ initialServiceId }: { initialServiceId?: string }) {
  // Find initial service or default to first
  const defaultSvc =
    servicesData.find((s) => s.id === initialServiceId || s.slug === initialServiceId) ||
    servicesData[0];

  const [step, setStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<ServiceItem>(defaultSvc);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [consultationType, setConsultationType] = useState<"virtual" | "in_person">("virtual");

  // Form Fields
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [birthLocation, setBirthLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false);

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [confirmedBooking, setConfirmedBooking] = useState<{
    id: string;
    date: string;
    timeSlot: string;
    serviceTitle: string;
    servicePrice: number;
    clientEmail: string;
  } | null>(null);

  // Available Time Slots for the Atelier
  const timeSlots = [
    "10:00 AM",
    "11:30 AM",
    "02:00 PM",
    "03:30 PM",
    "05:00 PM",
    "06:30 PM",
  ];

  // Generate next 14 available dates (skipping Sundays as per siteConfig)
  const availableDates: { dateStr: string; display: string; dayName: string }[] = [];
  const today = new Date();
  for (let i = 1; availableDates.length < 12; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const dayOfWeek = d.getDay(); // 0 is Sunday
    if (dayOfWeek !== 0) {
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      const dateStr = `${year}-${month}-${day}`;
      const display = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      const dayName = d.toLocaleDateString("en-US", { weekday: "short" });
      availableDates.push({ dateStr, display, dayName });
    }
  }

  // Handle Form Submission
  const handleSubmitBooking = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const payload = {
        serviceId: selectedService.id,
        serviceTitle: selectedService.title,
        servicePrice: selectedService.price,
        durationMin: selectedService.durationMin,
        date: selectedDate,
        timeSlot: selectedTime,
        timeZone: siteConfig.brand.timeZone,
        clientName,
        clientEmail,
        clientPhone: clientPhone || undefined,
        consultationType,
        birthDate: birthDate || undefined,
        birthTime: birthTime || undefined,
        birthLocation: birthLocation || undefined,
        notes: notes || undefined,
        privacyConsent,
      };

      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to finalize reservation.");
      }

      setConfirmedBooking(data.booking);
      setStep(6); // Success Step
    } catch (err: unknown) {
      if (err instanceof Error) {
        setSubmitError(err.message);
      } else {
        setSubmitError("An unexpected error occurred.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-[#22132E] rounded-3xl border border-[#B89A6A]/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Step Indicator Header (Steps 1–5) */}
      {step < 6 && (
        <div className="mb-8 border-b border-[#B89A6A]/20 pb-6">
          <div className="flex items-center justify-between text-xs text-[#B89A6A] font-sans-editorial mb-3">
            <span className="uppercase tracking-[0.25em]">Step {step} of 5</span>
            <span>
              {step === 1 && "Choose Experience"}
              {step === 2 && "Select Date"}
              {step === 3 && "Select Time Slot"}
              {step === 4 && "Client Information"}
              {step === 5 && "Review & Confirm"}
            </span>
          </div>

          <div className="w-full bg-[#120B20] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#B89A6A] to-[#D9CDF5] h-full transition-all duration-500 ease-out"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* STEP 1: Select Service */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#F3EDE3]">
              Select Your Consultation Experience
            </h3>
            <p className="mt-2 text-sm text-[#F3EDE3]/70 font-sans-editorial">
              Each session is individually prepared and tailored to your personal inquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            {servicesData.map((svc) => {
              const isSelected = selectedService.id === svc.id;
              return (
                <div
                  key={svc.id}
                  onClick={() => setSelectedService(svc)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#120B20] border-[#B89A6A] shadow-lg ring-1 ring-[#B89A6A]"
                      : "bg-[#120B20]/40 border-[#B89A6A]/20 hover:border-[#B89A6A]/50"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#B89A6A] mb-2 font-sans-editorial">
                      <span className="uppercase tracking-wider">{svc.category}</span>
                      <span className="font-semibold">${svc.price} USD</span>
                    </div>
                    <h4 className="font-serif-editorial text-xl text-[#F3EDE3]">{svc.title}</h4>
                    <p className="mt-2 text-xs text-[#F3EDE3]/70 font-sans-editorial line-clamp-2">
                      {svc.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#B89A6A]/15 flex items-center justify-between text-xs text-[#D9CDF5]">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {svc.durationMin} Minutes
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-[#B89A6A]">
                      {isSelected ? "Selected ✓" : "Choose"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-6 flex justify-end">
            <button
              onClick={() => setStep(2)}
              className="px-8 py-3.5 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#D4BD8B] transition-colors inline-flex items-center gap-2"
            >
              <span>Next: Select Date</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Select Date */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#F3EDE3]">
              Choose an Available Date
            </h3>
            <p className="mt-2 text-sm text-[#F3EDE3]/70 font-sans-editorial">
              Consultations are scheduled Tuesday through Saturday. Sunday & Monday are reserved for chart research.
            </p>
          </div>

          {/* Dates Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-4">
            {availableDates.map((item) => {
              const isSelected = selectedDate === item.dateStr;
              return (
                <button
                  key={item.dateStr}
                  type="button"
                  onClick={() => setSelectedDate(item.dateStr)}
                  className={`p-4 rounded-xl border text-center transition-all duration-200 ${
                    isSelected
                      ? "bg-[#120B20] border-[#B89A6A] ring-1 ring-[#B89A6A] text-[#D9CDF5]"
                      : "bg-[#120B20]/40 border-[#B89A6A]/20 hover:border-[#B89A6A]/60 text-[#F3EDE3]"
                  }`}
                >
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#B89A6A] mb-1">
                    {item.dayName}
                  </div>
                  <div className="font-serif-editorial text-2xl font-medium">{item.display}</div>
                  <div className="text-[10px] text-[#F3EDE3]/60 mt-1">Available</div>
                </button>
              );
            })}
          </div>

          <div className="pt-8 flex items-center justify-between border-t border-[#B89A6A]/15">
            <button
              onClick={() => setStep(1)}
              className="px-6 py-3 rounded-full border border-[#B89A6A]/40 text-xs uppercase tracking-[0.2em] text-[#F3EDE3] hover:bg-[#B89A6A]/10 transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              disabled={!selectedDate}
              onClick={() => setStep(3)}
              className="px-8 py-3.5 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#D4BD8B] transition-colors disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-2"
            >
              <span>Next: Select Time</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Select Time Slot & Format */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#F3EDE3]">
              Select Your Consultation Time
            </h3>
            <p className="mt-2 text-sm text-[#F3EDE3]/70 font-sans-editorial">
              All appointments coordinated in <strong>{siteConfig.brand.timeZone}</strong> (Indian Standard Time).
            </p>
          </div>

          {/* Format Selection (Virtual vs In-Person) */}
          <div className="p-4 rounded-2xl bg-[#120B20]/60 border border-[#B89A6A]/20">
            <span className="text-xs uppercase tracking-[0.2em] text-[#B89A6A] font-semibold block mb-3">
              Consultation Format
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setConsultationType("virtual")}
                className={`p-3.5 rounded-xl border flex items-center gap-3 text-left transition-all ${
                  consultationType === "virtual"
                    ? "bg-[#22132E] border-[#B89A6A] text-[#D9CDF5] ring-1 ring-[#B89A6A]"
                    : "bg-[#120B20]/40 border-[#B89A6A]/15 text-[#F3EDE3]"
                }`}
              >
                <Video className="w-4 h-4 text-[#B89A6A] shrink-0" />
                <div>
                  <div className="text-xs font-semibold">Virtual Sanctuary (Zoom)</div>
                  <div className="text-[10px] text-[#F3EDE3]/60">Encrypted HD Video & Audio Recording</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setConsultationType("in_person")}
                className={`p-3.5 rounded-xl border flex items-center gap-3 text-left transition-all ${
                  consultationType === "in_person"
                    ? "bg-[#22132E] border-[#B89A6A] text-[#D9CDF5] ring-1 ring-[#B89A6A]"
                    : "bg-[#120B20]/40 border-[#B89A6A]/15 text-[#F3EDE3]"
                }`}
              >
                <MapPin className="w-4 h-4 text-[#B89A6A] shrink-0" />
                <div>
                  <div className="text-xs font-semibold">Private Atelier Studio</div>
                  <div className="text-[10px] text-[#F3EDE3]/60">Herbal Elixir & Deckled Chart Folio</div>
                </div>
              </button>
            </div>
          </div>

          {/* Time Slots */}
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#B89A6A] font-semibold block mb-3">
              Available Slots for {selectedDate}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {timeSlots.map((slot) => {
                const isSelected = selectedTime === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTime(slot)}
                    className={`py-3 px-4 rounded-xl border text-center transition-all ${
                      isSelected
                        ? "bg-[#120B20] border-[#B89A6A] ring-1 ring-[#B89A6A] text-[#D9CDF5]"
                        : "bg-[#120B20]/40 border-[#B89A6A]/20 hover:border-[#B89A6A]/60 text-[#F3EDE3]"
                    }`}
                  >
                    <div className="text-sm font-semibold">{slot}</div>
                    <div className="text-[10px] text-[#F3EDE3]/60">IST</div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-8 flex items-center justify-between border-t border-[#B89A6A]/15">
            <button
              onClick={() => setStep(2)}
              className="px-6 py-3 rounded-full border border-[#B89A6A]/40 text-xs uppercase tracking-[0.2em] text-[#F3EDE3] hover:bg-[#B89A6A]/10 transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              disabled={!selectedTime}
              onClick={() => setStep(4)}
              className="px-8 py-3.5 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#D4BD8B] transition-colors disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-2"
            >
              <span>Next: Your Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: Client Information */}
      {step === 4 && (
        <div className="space-y-6">
          <div>
            <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#F3EDE3]">
              Personal Coordinates & Inquiry
            </h3>
            <p className="mt-2 text-sm text-[#F3EDE3]/70 font-sans-editorial">
              Your information is strictly confidential. If booking astrology, birth details allow us to prepare your chart in advance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-[#B89A6A] font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="e.g. Aurelia Morgan"
                className="w-full bg-[#120B20] border border-[#B89A6A]/30 rounded-xl px-4 py-3 text-sm text-[#F3EDE3] focus:outline-none focus:border-[#B89A6A]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-[#B89A6A] font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                placeholder="aurelia@example.com"
                className="w-full bg-[#120B20] border border-[#B89A6A]/30 rounded-xl px-4 py-3 text-sm text-[#F3EDE3] focus:outline-none focus:border-[#B89A6A]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-[#B89A6A] font-semibold mb-2">
                Phone / WhatsApp (Optional)
              </label>
              <input
                type="tel"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
                className="w-full bg-[#120B20] border border-[#B89A6A]/30 rounded-xl px-4 py-3 text-sm text-[#F3EDE3] focus:outline-none focus:border-[#B89A6A]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-[#B89A6A] font-semibold mb-2">
                Date of Birth (For Astrology)
              </label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full bg-[#120B20] border border-[#B89A6A]/30 rounded-xl px-4 py-3 text-sm text-[#F3EDE3] focus:outline-none focus:border-[#B89A6A]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-[#B89A6A] font-semibold mb-2">
                Exact Birth Time (e.g. 04:22 AM)
              </label>
              <input
                type="text"
                value={birthTime}
                onChange={(e) => setBirthTime(e.target.value)}
                placeholder="Exact minute from birth certificate"
                className="w-full bg-[#120B20] border border-[#B89A6A]/30 rounded-xl px-4 py-3 text-sm text-[#F3EDE3] focus:outline-none focus:border-[#B89A6A]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-[#B89A6A] font-semibold mb-2">
                Birth City & Country
              </label>
              <input
                type="text"
                value={birthLocation}
                onChange={(e) => setBirthLocation(e.target.value)}
                placeholder="e.g. Kyoto, Japan"
                className="w-full bg-[#120B20] border border-[#B89A6A]/30 rounded-xl px-4 py-3 text-sm text-[#F3EDE3] focus:outline-none focus:border-[#B89A6A]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-[#B89A6A] font-semibold mb-2">
              Primary Inquiry or Themes You Wish to Explore
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="What life chapters, career crossroads, or questions are currently alive for you?"
              className="w-full bg-[#120B20] border border-[#B89A6A]/30 rounded-xl px-4 py-3 text-sm text-[#F3EDE3] focus:outline-none focus:border-[#B89A6A]"
            />
          </div>

          {/* Privacy Consent Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={privacyConsent}
                onChange={(e) => setPrivacyConsent(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-[#B89A6A] text-[#B89A6A] focus:ring-0 bg-[#120B20]"
              />
              <span className="text-xs text-[#F3EDE3]/75 font-sans-editorial leading-relaxed">
                I understand that consultations are held under strict confidentiality and agree to the{" "}
                <Link href="/privacy" className="text-[#D9CDF5] underline underline-offset-2">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/terms" className="text-[#D9CDF5] underline underline-offset-2">
                  Terms of Sanctuary
                </Link>
                .
              </span>
            </label>
          </div>

          <div className="pt-8 flex items-center justify-between border-t border-[#B89A6A]/15">
            <button
              onClick={() => setStep(3)}
              className="px-6 py-3 rounded-full border border-[#B89A6A]/40 text-xs uppercase tracking-[0.2em] text-[#F3EDE3] hover:bg-[#B89A6A]/10 transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              disabled={!clientName || !clientEmail || !privacyConsent}
              onClick={() => setStep(5)}
              className="px-8 py-3.5 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#D4BD8B] transition-colors disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-2"
            >
              <span>Next: Review Reservation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: Review Appointment */}
      {step === 5 && (
        <div className="space-y-6">
          <div>
            <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#F3EDE3]">
              Review Your Appointment Request
            </h3>
            <p className="mt-2 text-sm text-[#F3EDE3]/70 font-sans-editorial">
              Please verify your appointment details prior to submitting your reservation request.
            </p>
          </div>

          {submitError && (
            <div className="p-4 rounded-xl bg-red-900/40 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{submitError}</span>
            </div>
          )}

          {/* Summary Dossier Card */}
          <div className="p-6 rounded-2xl bg-[#120B20] border border-[#B89A6A]/30 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#B89A6A]/15 gap-2">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#B89A6A]">
                  Selected Experience
                </span>
                <h4 className="font-serif-editorial text-2xl text-[#F3EDE3]">
                  {selectedService.title}
                </h4>
              </div>
              <div className="sm:text-right">
                <span className="text-xl font-serif-editorial text-[#B89A6A]">
                  ${selectedService.price} USD
                </span>
                <div className="text-[11px] text-[#F3EDE3]/60">{selectedService.durationMin} Minutes</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans-editorial">
              <div>
                <span className="text-[#B89A6A] block mb-0.5">Date & Time:</span>
                <span className="text-[#F3EDE3] font-medium">
                  {selectedDate} at {selectedTime} ({siteConfig.brand.timeZone})
                </span>
              </div>
              <div>
                <span className="text-[#B89A6A] block mb-0.5">Format:</span>
                <span className="text-[#F3EDE3] capitalize font-medium">
                  {consultationType === "virtual" ? "Virtual Sanctuary (Zoom)" : "In-Person Atelier"}
                </span>
              </div>
              <div>
                <span className="text-[#B89A6A] block mb-0.5">Client:</span>
                <span className="text-[#F3EDE3]">{clientName} ({clientEmail})</span>
              </div>
              {birthDate && (
                <div>
                  <span className="text-[#B89A6A] block mb-0.5">Birth Coordinates:</span>
                  <span className="text-[#F3EDE3]">
                    {birthDate} {birthTime ? `at ${birthTime}` : ""} {birthLocation ? `(${birthLocation})` : ""}
                  </span>
                </div>
              )}
            </div>

            {notes && (
              <div className="pt-2 text-xs text-[#F3EDE3]/70 border-t border-[#B89A6A]/10">
                <strong className="text-[#B89A6A]">Inquiry Focus:</strong> {notes}
              </div>
            )}
          </div>

          <div className="p-4 rounded-xl bg-[#22132E] border border-[#B89A6A]/20 flex items-start gap-3 text-xs text-[#F3EDE3]/70 font-sans-editorial">
            <ShieldCheck className="w-4 h-4 text-[#B89A6A] shrink-0 mt-0.5" />
            <p>
              <strong>Sanctuary Commitment:</strong> Upon confirmation, you will receive encrypted calendar coordinates and preparation guidelines. You may reschedule up to 48 hours prior without penalty.
            </p>
          </div>

          <div className="pt-8 flex items-center justify-between border-t border-[#B89A6A]/15">
            <button
              onClick={() => setStep(4)}
              disabled={isSubmitting}
              className="px-6 py-3 rounded-full border border-[#B89A6A]/40 text-xs uppercase tracking-[0.2em] text-[#F3EDE3] hover:bg-[#B89A6A]/10 transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              onClick={handleSubmitBooking}
              disabled={isSubmitting}
              className="px-8 py-3.5 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#D4BD8B] transition-colors disabled:opacity-50 inline-flex items-center gap-2"
            >
              {isSubmitting ? (
                <span>Preserving in Sanctuary...</span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[#120B20]" />
                  <span>Confirm Reservation Request</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* STEP 6: Confirmation Dossier */}
      {step === 6 && confirmedBooking && (
        <div className="text-center py-8 space-y-6 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-[#B89A6A]/20 border border-[#B89A6A] text-[#B89A6A] flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="text-xs uppercase tracking-[0.3em] text-[#B89A6A] font-semibold">
            Reservation Request Preserved
          </span>

          <h3 className="font-serif-editorial text-4xl sm:text-5xl text-[#F3EDE3]">
            Welcome to the Sanctuary, {clientName.split(" ")[0]}.
          </h3>

          <div className="p-6 rounded-2xl bg-[#120B20] border border-[#B89A6A]/40 max-w-md mx-auto text-left space-y-3 font-sans-editorial text-xs">
            <div className="flex justify-between pb-2 border-b border-[#B89A6A]/15">
              <span className="text-[#B89A6A]">Reference ID:</span>
              <strong className="text-[#D9CDF5] tracking-wider">{confirmedBooking.id}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-[#F3EDE3]/70">Experience:</span>
              <span className="text-[#F3EDE3] font-medium">{confirmedBooking.serviceTitle}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#F3EDE3]/70">Scheduled Slot:</span>
              <span className="text-[#F3EDE3] font-medium">
                {confirmedBooking.date} • {confirmedBooking.timeSlot}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#F3EDE3]/70">Status:</span>
              <span className="px-2 py-0.5 rounded-full bg-[#B89A6A]/20 text-[#D9CDF5] text-[10px]">
                Pending Concierge Approval
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#F3EDE3]/75 font-sans-editorial max-w-lg mx-auto leading-relaxed">
            A confirmation record has been logged in our secure ledger. Our concierge will review your chart inquiry and contact you at <strong>{confirmedBooking.clientEmail}</strong> with encrypted preparation notes.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="px-8 py-3 rounded-full bg-[#B89A6A] text-[#120B20] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#D4BD8B] transition-colors"
            >
              Return to Atelier Home
            </Link>
            <Link
              href="/journal"
              className="px-8 py-3 rounded-full border border-[#D9CDF5]/40 text-[#F3EDE3] text-xs uppercase tracking-[0.2em] hover:bg-[#D9CDF5]/15 transition-colors"
            >
              Explore Journal While Waiting
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
