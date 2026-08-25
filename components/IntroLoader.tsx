"use client";

import { useEffect, useState } from "react";

export default function IntroLoader() {
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHidden(true);
      return;
    }
    try {
      if (sessionStorage.getItem("introSeen")) {
        setHidden(true);
        return;
      }
      sessionStorage.setItem("introSeen", "1");
    } catch {
      // sessionStorage unavailable (private mode, blocked cookies): play it
    }
    const t1 = setTimeout(() => setFading(true), 2100);
    const t2 = setTimeout(() => setHidden(true), 2900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-100 flex flex-col items-center justify-center gap-6 bg-forest transition-opacity duration-700 ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <p className="intro-eyebrow text-[11px] tracking-[0.34em] text-gold">
        OFFICIAL SITE OF
      </p>
      <div className="relative font-display text-5xl font-medium md:text-7xl">
        <span className="text-cream/15">Aaron Spivak</span>
        <span className="intro-fill absolute inset-0 overflow-hidden whitespace-nowrap">
          <span className="text-cream">Aaron Spivak</span>
        </span>
      </div>
    </div>
  );
}
