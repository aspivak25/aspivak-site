import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Story of Hush — Aaron Spivak",
  description:
    "From a Toronto basement to a $48 million exit — the full Hush story, on film.",
};

export default function HushPage() {
  return (
    <main className="flex min-h-screen flex-col bg-forest">
      <header className="flex items-center justify-between gap-4 border-b border-cream/10 px-6 py-6 md:px-16">
        <Link
          href="/"
          className="font-display text-2xl tracking-wide text-cream"
        >
          Aaron Spivak
        </Link>
        <Link
          href="/"
          className="text-xs tracking-[0.22em] text-cream/75 transition hover:text-gold"
        >
          ← BACK TO SITE
        </Link>
      </header>

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-6 py-20 md:py-28">
        <p className="text-xs tracking-[0.28em] text-gold">THE DOCUMENTARY</p>
        <h1 className="text-center font-display text-5xl font-medium leading-[1.05] text-cream [text-wrap:balance] md:text-7xl">
          The Story of Hush
        </h1>
        <p className="max-w-2xl text-center text-lg font-light leading-relaxed text-cream/70">
          From a Toronto basement to a $48 million exit — the full story, on
          film.
        </p>

        <div className="mt-4 aspect-video w-full overflow-hidden border border-gold/25">
          <iframe
            src="https://www.youtube-nocookie.com/embed/IuoscQiQQLg"
            title="The Story of Hush"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>

        <Link
          href="/#newsletter"
          className="mt-6 bg-gold px-7 py-4 text-[13px] font-semibold tracking-[0.14em] text-forest transition hover:bg-gold-deep"
        >
          JOIN THE NEWSLETTER
        </Link>
      </div>
    </main>
  );
}
