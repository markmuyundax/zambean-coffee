"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui";

// Same metadata works fine via layout or generateMetadata in server components,
// but as a client component we set the page title via the layout.

const HOURS = [
  { day: "Mon – Fri", hours: "7:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "7:00 AM – 8:00 PM" },
  { day: "Sunday", hours: "8:00 AM – 3:00 PM" },
];

export default function ReservationsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    requests: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      // Reset form
      setForm({ name: "", email: "", phone: "", date: "", time: "", guests: "2", requests: "" });
    } catch (err: unknown) {
      setStatus("error");
      const message = err instanceof Error ? err.message : "Submission failed. Try WhatsApp instead.";
      setErrorMsg(message);
    }
  }

  return (
    <>
      <section className="pt-24 md:pt-32 pb-12 bg-espresso-900 relative">
        <div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=600&fit=crop)] bg-cover bg-center opacity-25" />
        <div className="container-page relative z-10">
          <SectionHeader
            title="Reservations"
            subtitle="Secure a spot in the garden. Walk-ins welcome but we fill up fast."
            centered
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div className="card p-6 md:p-8">
              <h3 className="font-display text-xl font-bold mb-6">Book a Table</h3>

              {status === "success" ? (
                <div className="bg-garden-50 dark:bg-garden-900/30 border border-garden-300 dark:border-garden-700 rounded-xl p-6 text-center">
                  <span className="text-4xl">✅</span>
                  <h4 className="font-bold text-lg mt-3">Reservation Requested!</h4>
                  <p className="text-sm text-espresso-600 dark:text-cream-400 mt-2">
                    We&apos;ll confirm your table shortly via WhatsApp. For immediate confirmation,{" "}
                    <a
                      href="https://wa.me/260968773386"
                      className="text-garden-600 underline font-semibold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      message us on WhatsApp
                    </a>
                    .
                  </p>
                  <button
                    className="btn-primary mt-4"
                    onClick={() => setStatus("idle")}
                  >
                    Book Another
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="input-field"
                      placeholder="Your name"
                      required
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="input-field"
                      placeholder="you@email.com"
                      required
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="input-field"
                      placeholder="+260 97..."
                      required
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-semibold mb-1" htmlFor="date">
                        Date
                      </label>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        className="input-field"
                        required
                        value={form.date}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1" htmlFor="time">
                        Time
                      </label>
                      <input
                        id="time"
                        name="time"
                        type="time"
                        className="input-field"
                        required
                        value={form.time}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="guests">
                      Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      className="input-field"
                      value={form.guests}
                      onChange={handleChange}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "guest" : "guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1" htmlFor="requests">
                      Special Requests
                    </label>
                    <textarea
                      id="requests"
                      name="requests"
                      className="input-field"
                      rows={3}
                      placeholder="Allergies, celebration, seating preference..."
                      value={form.requests}
                      onChange={handleChange}
                    />
                  </div>

                  {status === "error" && (
                    <div className="bg-clay-50 dark:bg-clay-900/30 border border-clay-300 dark:border-clay-700 rounded-lg p-3 text-sm text-clay-700 dark:text-clay-300">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn-primary w-full"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending..." : "Reserve Table"}
                  </button>

                  <p className="text-xs text-center text-espresso-500 dark:text-cream-400 mt-2">
                    Or WhatsApp us directly:{" "}
                    <a
                      href="https://wa.me/260968773386"
                      className="text-garden-600 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +260 96 877 3386
                    </a>
                  </p>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-bold mb-4">Hours</h3>
                <div className="space-y-3 text-sm">
                  {HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between">
                      <span>{h.day}</span>
                      <span className="font-semibold">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop"
                  alt="Garden seating at Zambean"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>

              <div className="card p-6">
                <h4 className="font-bold mb-2">🐾 Groups &amp; Events</h4>
                <p className="text-sm text-espresso-600 dark:text-cream-400">
                  For parties of 10+ or private events, email us at{" "}
                  <a href="mailto:muyundamark0@gmail.com" className="text-garden-600 underline">
                    muyundamark0@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
