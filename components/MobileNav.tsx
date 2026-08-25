"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Story", href: "/#story" },
  { label: "The Film", href: "/hush" },
  { label: "Speaking", href: "/#speaking" },
  { label: "Workshop", href: "/#workshop" },
  { label: "Coaching", href: "/#coaching" },
  { label: "Podcast", href: "/#podcast" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // Stop the page behind the overlay from scrolling while it is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="flex flex-col justify-center gap-[5px] p-2 lg:hidden"
      >
        <span className="block h-px w-[18px] bg-cream" />
        <span className="block h-px w-[18px] bg-cream" />
        <span className="block h-px w-[18px] bg-cream" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-forest px-6 py-6 lg:hidden">
          <div className="flex items-center justify-between">
            <Link
              href="/#top"
              onClick={() => setOpen(false)}
              className="font-display text-2xl tracking-wide text-cream"
            >
              Aaron Spivak
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 text-cream"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.25">
                <path d="M4 4 16 16M16 4 4 16" />
              </svg>
            </button>
          </div>

          <nav className="mt-14 flex flex-col gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-cream transition hover:text-gold"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <a
            href="#newsletter"
            onClick={() => setOpen(false)}
            className="mt-auto w-full bg-gold px-7 py-4 text-center text-[13px] font-semibold tracking-[0.14em] text-forest transition hover:bg-gold-deep"
          >
            JOIN THE NEWSLETTER
          </a>
        </div>
      )}
    </>
  );
}
