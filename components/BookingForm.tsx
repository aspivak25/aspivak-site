"use client";

import { useState } from "react";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [eventInfo, setEventInfo] = useState("");
  const [details, setDetails] = useState("");
  const [agreed, setAgreed] = useState(false);

  const field =
    "w-full border border-cream/30 bg-transparent px-5 py-4 text-sm text-cream placeholder:text-cream/50 focus:border-gold focus:outline-none";

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Speaking inquiry: ${eventInfo}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nEvent & date:\n${eventInfo}\n\nAbout the event:\n${details}\n`,
    );
    window.location.href = `mailto:aaron@aspivak.com?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-3.5">
      <div className="grid gap-3.5 md:grid-cols-2">
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          autoComplete="name"
          className={field}
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          autoComplete="email"
          className={field}
        />
      </div>
      <input
        type="text"
        required
        value={eventInfo}
        onChange={(e) => setEventInfo(e.target.value)}
        placeholder="Event & date"
        className={field}
      />
      <textarea
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder="Tell us about your event"
        rows={4}
        className={`${field} resize-y`}
      />
      <label className="flex items-start gap-3 text-[13px] font-light leading-relaxed text-cream/70">
        <input
          type="checkbox"
          required
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-gold"
        />
        I understand that Aaron’s speaking engagements range from $5,000 to
        $50,000 depending on location and date.
      </label>
      <button
        type="submit"
        disabled={!agreed}
        className="mt-1 self-start bg-gold px-7 py-4 text-[13px] font-semibold tracking-[0.14em] text-forest transition hover:bg-gold-deep disabled:cursor-not-allowed disabled:opacity-40"
      >
        REQUEST AARON
      </button>
    </form>
  );
}
