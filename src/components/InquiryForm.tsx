"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import type { Tour } from "@/lib/types";

const steps = ["Choose tour", "Date & guests", "Your details"];

export function InquiryForm({ tours }: { tours: Tour[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const preselected = searchParams.get("tour") ?? "";

  const [step, setStep] = useState(0);
  const [tourId, setTourId] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [passengers, setPassengers] = useState(2);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (preselected) {
      const tour = tours.find((t) => t.slug === preselected);
      if (tour) setTourId(tour.id);
    } else if (tours.length > 0 && !tourId) {
      setTourId(tours[0].id);
    }
  }, [preselected, tours, tourId]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tourId,
          preferredDate,
          passengers,
          name,
          email,
          phone,
          message: message || undefined,
        }),
      });

      const data = (await res.json()) as { error?: string; id?: string };
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      router.push(`/success?id=${data.id}`);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function nextStep() {
    if (step === 0 && !tourId) {
      setError("Please select a tour.");
      return;
    }
    if (step === 1 && (!preferredDate || passengers < 1)) {
      setError("Please choose a date and number of passengers.");
      return;
    }
    setError(null);
    setStep((s) => Math.min(s + 1, 2));
  }

  const inputClass =
    "mt-1 w-full min-h-11 rounded-lg border-2 border-cr-blue/20 px-3 py-2 text-cr-blue focus:border-cr-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-cr-blue";

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <ol className="flex gap-2">
        {steps.map((label, i) => (
          <li
            key={label}
            className={`flex-1 rounded-lg px-2 py-2 text-center text-xs font-bold uppercase tracking-wide sm:text-sm ${
              i === step
                ? "bg-cr-blue text-cr-white"
                : i < step
                  ? "bg-cr-green/10 text-cr-green"
                  : "bg-cr-blue-light text-cr-blue/50"
            }`}
          >
            {label}
          </li>
        ))}
      </ol>

      {step === 0 && (
        <div>
          <label htmlFor="tour" className="block text-sm font-bold text-cr-blue">
            Tour *
          </label>
          <select
            id="tour"
            required
            value={tourId}
            onChange={(e) => setTourId(e.target.value)}
            className={inputClass}
          >
          {tours.map((tour) => (
            <option key={tour.id} value={tour.id}>
              {tour.name}
              {tour.duration ? ` (${tour.duration})` : ""}
            </option>
          ))}
          </select>
        </div>
      )}

      {step === 1 && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="date" className="block text-sm font-bold text-cr-blue">
              Preferred date *
            </label>
            <input
              id="date"
              type="date"
              required
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="passengers" className="block text-sm font-bold text-cr-blue">
              Passengers *
            </label>
            <select
              id="passengers"
              required
              value={passengers}
              onChange={(e) => setPassengers(Number(e.target.value))}
              className={inputClass}
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {step === 2 && (
        <>
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-cr-blue">
              Full name *
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-cr-blue">
                Email *
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-cr-blue">
                Phone / WhatsApp *
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-bold text-cr-blue">
              Message (optional)
            </label>
            <textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your group, special requests, or questions..."
              className={inputClass}
            />
          </div>
        </>
      )}

      {error && (
        <p className="rounded-lg border border-cr-blue/20 bg-cr-blue/5 px-4 py-3 text-sm text-cr-blue">
          {error}
        </p>
      )}

      {step < 2 ? (
        <button
          type="button"
          onClick={nextStep}
          className="w-full min-h-11 rounded-full bg-cr-orange px-8 py-3 text-sm font-bold uppercase tracking-wide text-cr-white transition hover:brightness-110"
        >
          Continue
        </button>
      ) : (
        <>
          <p className="text-sm text-cr-blue/75">
            No payment required now. We&apos;ll confirm availability and pricing, then
            get back to you shortly.
          </p>
          <button
            type="submit"
            disabled={submitting}
            className="w-full min-h-11 rounded-full bg-cr-orange px-8 py-3 text-sm font-bold uppercase tracking-wide text-cr-white transition hover:brightness-110 disabled:opacity-60"
          >
            {submitting ? "Sending..." : "Send Inquiry"}
          </button>
        </>
      )}

      {step > 0 && (
        <button
          type="button"
          onClick={() => {
            setError(null);
            setStep((s) => s - 1);
          }}
          className="w-full text-sm font-bold text-cr-blue/70 hover:text-cr-blue"
        >
          ← Back
        </button>
      )}
    </form>
  );
}
