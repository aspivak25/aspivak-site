"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "done" | "error";

export default function SubscribeForm({
  showName = false,
  compact = false,
}: {
  showName?: boolean;
  compact?: boolean;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("done");
        setMessage("You're in. Check your inbox for a welcome note.");
      } else {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong, please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong, please try again.");
    }
  }

  if (status === "done") {
    return (
      <p className="font-display text-xl italic text-gold" role="status">
        {message}
      </p>
    );
  }

  return (
    <form
      onSubmit={submit}
      className={`flex flex-wrap gap-3 ${compact ? "" : "mt-1"}`}
    >
      {showName && (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="First name"
          autoComplete="given-name"
          className="w-full border border-cream/30 sm:w-40 bg-transparent px-5 py-4 text-sm text-cream placeholder:text-cream/50 focus:border-gold focus:outline-none"
        />
      )}
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        autoComplete="email"
        className="w-full border border-cream/30 sm:w-60 bg-transparent px-5 py-4 text-sm text-cream placeholder:text-cream/50 focus:border-gold focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center bg-gold px-7 py-4 text-[13px] font-semibold tracking-[0.14em] text-forest transition hover:bg-gold-deep disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "SUBSCRIBING…" : "SUBSCRIBE FREE"}
      </button>
      {status === "error" && (
        <p className="w-full text-sm text-gold" role="alert">
          {message}
        </p>
      )}
    </form>
  );
}
