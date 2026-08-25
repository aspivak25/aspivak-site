"use client";

import { useState } from "react";

export default function CoachingInquiry() {
  const [agreed, setAgreed] = useState(false);

  function enquire() {
    const subject = encodeURIComponent("Coaching inquiry");
    window.location.href = `mailto:aaron@aspivak.com?subject=${subject}`;
  }

  return (
    <div className="flex flex-col gap-6">
      <label className="flex items-start gap-3 text-[13px] font-light leading-relaxed text-forest/75">
        <input
          type="checkbox"
          required
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-forest"
        />
        I understand that coaching starts at $5,000 per hour.
      </label>
      <button
        type="button"
        onClick={enquire}
        disabled={!agreed}
        className="self-start bg-forest px-7 py-4 text-[13px] font-semibold tracking-[0.14em] text-cream transition hover:bg-forest-deep disabled:cursor-not-allowed disabled:opacity-40"
      >
        ENQUIRE ABOUT COACHING
      </button>
    </div>
  );
}
