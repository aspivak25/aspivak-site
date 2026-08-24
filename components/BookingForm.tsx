"use client";

import { useState } from "react";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [eventInfo, setEventInfo] = useState("");

  const field =
    "w-full border border-cream/30 bg-transparent px-5 py-4 text-sm text-cream placeholder:text-cream/50 focus:border-gold focus:outline-none";

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Speaking inquiry — ${eventInfo}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nEvent & date:\n${eventInfo}\n`,
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
      <button
        type="submit"
        className="mt-1 self-start bg-gold px-7 py-4 text-[13px] font-semibold tracking-[0.14em] text-forest transition hover:bg-gold-deep"
      >
        REQUEST AARON
      </button>
    </form>
  );
}
