import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Story of Hush: Aaron Spivak",
  description:
    "From a Toronto basement to a $48 million exit. The full Hush story, on film.",
};

const chapters = [
  {
    label: "I. THE LAST $4,000",
    body: "In 2018, Aaron Spivak and Lior Ohayon started Hush out of a Toronto apartment with weighted blankets, a borrowed couch to work from, and what was left of Aaron’s money, about $4,000. There was no funding, no warehouse, no plan B. Early orders were packed by hand and delivered the same way.",
  },
  {
    label: "II. THE BLANKET CANADA COULDN’T IGNORE",
    body: "The bet was simple: sleep was broken for a lot of people, and a heavy blanket fixed something no app could. When Hush put its Iced cooling blanket on Kickstarter, it raised over $1.5 million in 30 days, one of the most-funded Canadian campaigns ever. In 2019 the founders walked into Dragons’ Den and walked out with all six dragons bidding: the season’s Most Epic Pitch.",
  },
  {
    label: "III. $0 TO $48 MILLION IN 48 MONTHS",
    body: "Within 24 months, Hush was an eight-figure brand. It grew from a single product into a full sleep company: blankets, sheets, pillows, mattresses. All of it sold direct and in retail across Canada and into the U.S. No shortcuts: relentless customer obsession, community before ads, and two founders who answered their own support emails long after they didn’t have to.",
  },
  {
    label: "IV. THE EXIT",
    body: "In October 2021, Sleep Country Canada, the country’s biggest name in sleep, acquired Hush. Forty-eight months after the apartment, the journey ended in a $48 million exit. Aaron has been honest about what happened next: the wire hit, and he felt nothing. The money was never the point. Building was.",
  },
  {
    label: "V. WHY FOUNDERS CLUB EXISTS",
    body: (
      <>
        That realization became the next company. Aaron poured the exit into the
        people who make exits happen: founders. Today he invests eight figures a
        year in founder-led brands and co-built Founders Club, a community of
        entrepreneurs who push each other in business, health, and life. Because
        if Hush proved anything,{" "}
        <strong className="font-semibold text-cream">
          it’s this: no founder wins alone.
        </strong>
      </>
    ),
  },
];

const dealFacts = [
  { v: "OCT 2021", l: "ACQUIRED BY SLEEP COUNTRY CANADA" },
  { v: "$48M", l: "EXIT VALUE" },
  { v: "48", l: "MONTHS FROM DAY ONE" },
];

const coverage = [
  {
    title: "Sleep Country buys controlling stake in Hush Blankets",
    outlet: "CBC News",
    href: "https://www.cbc.ca/news/business/sleep-country-canada-hush-blankets-1.6216706",
  },
  {
    title: "Sleep Country acquires DTC sleep brand to grow market share",
    outlet: "Retail Insider",
    href: "https://retail-insider.com/retail-insider/2023/01/sleep-country-canada-acquires-dtc-sleep-brand-in-effort-to-grow-market-share-interviews/",
  },
  {
    title: "Aaron Spivak on Hush’s transition to a full sleep company",
    outlet: "Retail Insider Podcast",
    href: "https://retail-insider.com/podcast/2023/08/interview-with-hush-blankets-co-founder-aaron-spivak-on-the-companys-transition/",
  },
  {
    title: "Hush expands sleep product line under Sleep Country ownership",
    outlet: "Retail Insider",
    href: "https://retail-insider.com/retail-insider/2025/04/hush-expands-sleep-product-line-under-sleep-country-ownership/",
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
          From a Toronto basement to a $48 million exit. The full story, on
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

        <div className="mt-4 flex w-full max-w-2xl flex-col gap-10">
          <p className="text-[11px] tracking-[0.24em] text-gold">THE DEAL</p>
          <div className="grid gap-8 sm:grid-cols-3">
            {dealFacts.map((f) => (
              <div key={f.l} className="border-t border-cream/15 pt-5">
                <p className="font-display text-3xl text-gold md:text-4xl">{f.v}</p>
                <p className="mt-2 text-[11px] leading-relaxed tracking-[0.14em] text-cream/50">
                  {f.l}
                </p>
              </div>
            ))}
          </div>
          <p className="text-base font-light leading-loose text-cream/80">
            In October 2021, Sleep Country Canada, the biggest name in Canadian
            sleep retail, acquired Hush. The headlines wrote themselves: a
            weighted blanket company started in a Toronto apartment had become
            one of Canada&rsquo;s fastest growing consumer brands, and it sold
            for $48 million, 48 months after day one.
          </p>
          <div className="flex flex-col gap-6">
            <p className="text-[11px] tracking-[0.24em] text-gold">READ THE COVERAGE</p>
            <div className="flex flex-col">
              {coverage.map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1 border-t border-cream/15 py-4"
                >
                  <span className="font-display text-lg leading-snug text-cream transition group-hover:text-gold">
                    {c.title}
                  </span>
                  <span className="text-[11px] tracking-[0.14em] text-cream/45">
                    {c.outlet}
                  </span>
                </a>
              ))}
            </div>
          </div>
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
