import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Story of Hush — Aaron Spivak",
  description:
    "From a Toronto basement to a $48 million exit — the full Hush story, on film.",
};

const chapters = [
  {
    label: "I. THE LAST $4,000",
    body: "In 2018, Aaron Spivak and Lior Ohayon started Hush out of a Toronto apartment with weighted blankets, a borrowed couch to work from, and what was left of Aaron’s money — about $4,000. There was no funding, no warehouse, no plan B. Early orders were packed by hand and delivered the same way.",
  },
  {
    label: "II. THE BLANKET CANADA COULDN’T IGNORE",
    body: "The bet was simple: sleep was broken for a lot of people, and a heavy blanket fixed something no app could. When Hush put its Iced cooling blanket on Kickstarter, it raised over $1.5 million in 30 days — one of the most-funded Canadian campaigns ever. In 2019 the founders walked into Dragons’ Den and walked out with all six dragons bidding: the season’s Most Epic Pitch.",
  },
  {
    label: "III. $0 TO $48 MILLION IN 48 MONTHS",
    body: "Within 24 months, Hush was an eight-figure brand. It grew from a single product into a full sleep company — blankets, sheets, pillows, mattresses — sold direct and in retail across Canada and into the U.S. No shortcuts: relentless customer obsession, community before ads, and two founders who answered their own support emails long after they didn’t have to.",
  },
  {
    label: "IV. THE EXIT",
    body: "In October 2021, Sleep Country Canada — the country’s biggest name in sleep — acquired Hush. Forty-eight months after the apartment, the journey ended in a $48 million exit. Aaron has been honest about what happened next: the wire hit, and he felt nothing. The money was never the point. Building was.",
  },
  {
    label: "V. WHY FOUNDERS CLUB EXISTS",
    body: (
      <>
        That realization became the next company. Aaron poured the exit into the
        people who make exits happen: founders. Today he invests eight figures a
        year in founder-led brands and co-built Founders Club — a community of
        entrepreneurs who push each other in business, health, and life. Because
        if Hush proved anything,{" "}
        <strong className="font-semibold text-cream">
          it’s this: no founder wins alone.
        </strong>
      </>
    ),
  },
];

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

        <div className="mt-10 flex w-full max-w-2xl flex-col gap-14">
          {chapters.map((c) => (
            <div key={c.label} className="flex flex-col gap-4">
              <p className="text-[11px] tracking-[0.24em] text-gold">{c.label}</p>
              <p className="text-base font-light leading-loose text-cream/80">
                {c.body}
              </p>
            </div>
          ))}
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
