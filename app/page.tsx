import Image from "next/image";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import InstagramFeed from "@/components/InstagramFeed";
import IntroLoader from "@/components/IntroLoader";
import SubscribeForm from "@/components/SubscribeForm";

const eyebrow = "text-xs tracking-[0.28em]";
const navLink =
  "text-xs tracking-[0.22em] text-cream/75 transition hover:text-gold";
const footerLink =
  "text-[11px] tracking-[0.2em] text-cream/50 transition hover:text-gold";
const beatCta =
  "self-start border border-forest/40 px-[18px] py-2.5 text-xs tracking-[0.16em] text-forest transition hover:bg-forest hover:text-cream";

function Rule({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`h-px w-[34px] ${dark ? "bg-gold-deep" : "bg-gold"}`}
      aria-hidden
    />
  );
}

function Nav() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-cream/10 px-6 py-6 md:px-16">
      <a href="#top" className="font-display text-2xl tracking-wide text-cream">
        Aaron Spivak
      </a>
      <nav className="hidden items-center gap-9 md:flex">
        <a href="#story" className={navLink}>STORY</a>
        <Link href="/hush" className={navLink}>THE FILM</Link>
        <a href="#speaking" className={navLink}>SPEAKING</a>
        <a href="#workshop" className={navLink}>WORKSHOP</a>
        <a href="#coaching" className={navLink}>COACHING</a>
        <a href="#podcast" className={navLink}>PODCAST</a>
      </nav>
      <a
        href="#newsletter"
        className="bg-gold px-5 py-3 text-xs font-semibold tracking-[0.18em] text-forest transition hover:bg-gold-deep md:px-7 md:py-3.5"
      >
        <span className="md:hidden">NEWSLETTER</span>
        <span className="hidden md:inline">JOIN THE NEWSLETTER</span>
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden" id="top">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3428] via-ink to-ink" />
      <div className="absolute inset-y-0 right-0 hidden w-[44%] lg:block">
        <Image
          src="/images/hero-stage.jpg"
          alt="Aaron Spivak speaking on stage"
          fill
          priority
          sizes="44vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 hidden bg-gradient-to-r from-forest from-[28%] via-forest/85 via-[46%] to-transparent to-[75%] lg:block" />
      <div className="relative flex max-w-3xl flex-col gap-7 px-6 pb-24 pt-20 md:px-16 lg:pb-32 lg:pt-24">
        <div className="flex items-center gap-3.5">
          <Rule />
          <p className={`${eyebrow} text-gold`}>FOUNDER · SPEAKER · INVESTOR</p>
        </div>
        <h1 className="font-display text-5xl font-medium leading-[1.05] text-cream [text-wrap:balance] md:text-7xl lg:text-[84px]">
          $0 to $48 million{" "}
          <span className="italic text-gold">in 48 months.</span>
        </h1>
        <p className="max-w-lg text-lg font-light leading-relaxed text-cream/80">
          I built Hush from a Toronto basement to a $48M exit. Now I share
          everything I learned, every week, founder to founder.
        </p>
        <SubscribeForm compact />
        <p className="text-[13px] text-cream/50">
          The Founder to Founder letter. Weekly insights on starting, scaling,
          and succeeding. Free, forever.
        </p>
        <Link
          href="/hush"
          className="flex items-center gap-2.5 text-xs tracking-[0.18em] text-gold transition hover:text-cream"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden fill="currentColor">
            <path d="M2 1.2 10.4 6 2 10.8z" />
          </svg>
          WATCH THE FILM: THE STORY OF HUSH
        </Link>
      </div>
      <div className="relative h-80 lg:hidden">
        <Image
          src="/images/hero-stage.jpg"
          alt="Aaron Spivak speaking on stage"
          fill
          sizes="100vw"
          className="object-cover object-[50%_15%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest via-transparent to-transparent" />
      </div>
    </section>
  );
}

function PressBar() {
  const outlets = ["Business Insider", "Bloomberg", "CNBC", "Forbes", "Entrepreneur", "CBC"];
  return (
    <section className="border-y border-gold/25 bg-forest-deep px-6 py-7 md:px-16">
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3">
        <p className="text-[11px] tracking-[0.24em] text-cream/55">FEATURED IN</p>
        {outlets.map((o) => (
          <p key={o} className="font-display text-lg text-cream/65">{o}</p>
        ))}
      </div>
    </section>
  );
}

function Story() {
  const intro = [
    "I build businesses, and I love the people who build them.",
    "I’ve taken three companies from zero. The first I started at 18, an organic cold-pressed juice company now at 12 locations across Toronto. The second was Hush: eight figures in 24 months, $1.5 million on Kickstarter in 30 days, the “Most Epic Pitch” of the season on Dragons’ Den, and a $48 million sale to Sleep Country in 2021. The third is where I spend my time now: Founders Club, a private, vetted community I’m building with Chris Meade for high-growth founders, because the chaos and loneliness of scaling a company shouldn’t be carried alone.",
    "I’m based in Miami Beach. When I’m not building, I’m on a padel court, on a stage, or teaching the goal-setting workshop I’ve run for the past 13 years.",
  ];
  const beats = [
    {
      label: "Age 18",
      title: "Revitasize",
      text: "Co-founded a cold-pressed juice company at 18 and grew it location by location across the GTA. Still pouring today.",
      img: "/images/revitasize.jpg",
      objectPosition: "50% 20%",
      alt: "Aaron and the Revitasize team in the juice-kitchen days",
      note: "In Toronto? Go taste chapter one.",
      cta: { label: "CHECK OUT REVITASIZE", href: "https://revitasize.ca" },
    },
    {
      label: "The exit",
      title: "Hush",
      text: "Scaled Hush from $0 to $48 million in 48 months and sold it, a Canadian DTC story told on Dragons’ Den and beyond.",
      img: "/images/hush.jpg",
      objectPosition: "50% 18%",
      alt: "Aaron Spivak in Hush gear at a launch event",
      cta: { label: "THE STORY OF HUSH", href: "/hush" },
    },
    {
      label: "Today",
      title: "Founders Club",
      text: "Co-building Founders Club with Chris Meade: a private, vetted community for high-growth CPG, e-commerce and retail founders. No agencies, no investors, no fluff.",
      img: "/images/founders-club.jpg",
      objectPosition: "50% 30%",
      alt: "Aaron Spivak with members of Founders Club",
      cta: {
        label: "APPLY TO JOIN THE FOUNDERS CLUB",
        href: "https://www.foundersclubofficial.com/become-a-member",
      },
    },
  ];
  return (
    <section id="story" className="bg-cream px-6 py-20 text-forest md:px-16 md:py-28">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-stretch">
          <div className="flex max-w-2xl flex-col gap-5">
            <div className="flex items-center gap-3.5">
              <Rule dark />
              <p className={`${eyebrow} font-medium text-gold-ink`}>MY STORY</p>
            </div>
            <h2 className="font-display text-4xl font-medium leading-[1.1] [text-wrap:balance] md:text-[56px]">
              No shortcuts. No secrets.{" "}
              <span className="italic text-gold-deep">Just the work.</span>
            </h2>
            <div className="flex max-w-xl flex-col gap-7">
              <div className="flex flex-col gap-5">
                {intro.map((t) => (
                  <p key={t} className="text-[15px] font-light leading-relaxed text-forest/75">
                    {t}
                  </p>
                ))}
              </div>
              <p className="text-[11px] leading-relaxed tracking-[0.2em] text-gold-ink">
                FORBES 30 UNDER 30 · EY ENTREPRENEUR OF THE YEAR FINALIST · #172 ON THE INC. 5000
              </p>
            </div>
          </div>
          <div className="relative h-72 w-full shrink-0 overflow-hidden lg:h-auto lg:w-[440px] lg:self-stretch">
            <Image
              src="/images/portrait.jpg"
              alt="Portrait of Aaron Spivak"
              fill
              sizes="(min-width: 1024px) 440px, 100vw"
              className="object-cover object-[50%_20%]"
            />
          </div>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {beats.map((b) => (
            <div key={b.title} className="flex h-full flex-col gap-4 border-t border-forest/20 pt-7">
              {b.img ? (
                <div className="relative h-64 overflow-hidden">
                  <Image src={b.img} alt={b.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" style={{ objectPosition: b.objectPosition }} />
                </div>
              ) : (
                <div className="flex h-64 items-center justify-center bg-gradient-to-br from-[#dccfb4] to-[#c9b893]">
                  <p className="text-[11px] tracking-[0.2em] text-forest/50">THE JUICE YEARS</p>
                </div>
              )}
              <p className="font-display text-3xl italic text-gold-deep">{b.label}</p>
              <p className="text-[15px] font-semibold tracking-wide">{b.title}</p>
              <p className="text-[15px] font-light leading-relaxed text-forest/75">{b.text}</p>
              {b.cta && (
                <div className="mt-auto flex flex-col items-start gap-3 pt-4">
                  {b.note && (
                    <p className="font-display text-[17px] italic text-gold-deep">
                      {b.note}
                    </p>
                  )}
                  {b.cta.href.startsWith("http") ? (
                    <a
                      href={b.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={beatCta}
                    >
                      {b.cta.label}
                    </a>
                  ) : (
                    <Link href={b.cta.href} className={beatCta}>
                      {b.cta.label}
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Speaking() {
  const testimonials = [
    {
      quote:
        "I’ve done this workshop for 3 years now and it’s changed my life, but also how I approach my years.",
      name: "Chris Meade, Co-founder of Founders Club",
    },
    {
      quote:
        "This is the best workshop I have ever done. I wish I found out about this years ago.",
      name: "Mendel Felig",
    },
  ];
  const keynotes = [
    {
      title: "No Founder Wins Alone",
      text: "Why the network you build decides the company you build.",
    },
    {
      title: "$0 to $48M: The Unsexy Truth",
      text: "What actually scaled Hush, and what was a waste of four years.",
    },
    {
      title: "Break the Belief",
      text: "The goal-setting system 15,000 people have used to get unstuck.",
    },
  ];
  return (
    <section id="speaking" className="bg-forest px-6 py-20 md:px-16 md:py-28">
      <div className="flex flex-col gap-14">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="flex max-w-2xl flex-col gap-5">
            <div className="flex items-center gap-3.5">
              <Rule />
              <p className={`${eyebrow} text-gold`}>SPEAKING</p>
            </div>
            <h2 className="font-display text-4xl font-medium leading-[1.1] text-cream [text-wrap:balance] md:text-[56px]">
              Inspiring founders through the power of{" "}
              <span className="italic text-gold">storytelling.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-1 lg:text-right">
            <p className="font-display text-6xl text-gold tabular-nums">10,000+</p>
            <p className="text-xs tracking-[0.22em] text-cream/60">FOUNDERS ADDRESSED WORLDWIDE</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          <div className="relative h-96 overflow-hidden md:h-[560px]">
            <Image src="/images/speaking-stage.jpg" alt="Aaron Spivak on stage at a Founders Club event" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-[50%_12%]" />
          </div>
          <div className="flex flex-col gap-7 md:justify-center">
            <p className={`${eyebrow} text-gold`}>SIGNATURE KEYNOTES</p>
            <p className="text-[15px] font-light leading-relaxed text-cream/70">
              These are not motivational talks. Each keynote is built from three
              companies, a $48 million exit, and 13 years of teaching founders
              how to get out of their own way. Audiences leave with tools they
              can use the next morning, told through stories they will not
              forget.
            </p>
            <div className="flex flex-col">
              {keynotes.map((k) => (
                <div key={k.title} className="flex flex-col gap-2 border-t border-cream/15 py-7">
                  <p className="font-display text-2xl text-cream md:text-3xl">{k.title}</p>
                  <p className="text-sm leading-relaxed text-cream/60">{k.text}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              {testimonials.map((t) => (
                <figure key={t.name} className="flex flex-col gap-2.5 border-t border-cream/15 py-6">
                  <blockquote className="font-display text-lg italic leading-snug text-cream/90">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="text-xs tracking-[0.14em] text-cream/50">
                    {t.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 border border-gold/25 bg-forest-deep p-11">
          <h3 className="font-display text-3xl font-medium text-cream md:text-4xl">
            Bring Aaron to your stage.
          </h3>
          <BookingForm />
        </div>
      </div>
    </section>
  );
}

function Workshop() {
  const steps = [
    { n: "01. Name the goal", d: "Get specific about the life and business you actually want." },
    { n: "02. Find the belief", d: "Surface the story you’re telling yourself that’s in the way." },
    { n: "03. Break it", d: "Replace it with a plan you can execute this quarter." },
  ];
  return (
    <section id="workshop" className="bg-gold px-6 py-20 text-forest md:px-16 md:py-28">
      <div className="flex flex-col gap-14">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
          <div className="flex max-w-2xl flex-col gap-5">
            <div className="flex items-center gap-3.5">
              <div className="h-px w-[34px] bg-forest" aria-hidden />
              <p className={`${eyebrow} font-semibold`}>THE WORKSHOP</p>
            </div>
            <h2 className="font-display text-4xl font-medium leading-[1.08] [text-wrap:balance] md:text-6xl">
              Goal setting & the limiting beliefs{" "}
              <span className="italic">holding you back.</span>
            </h2>
            <p className="max-w-xl text-[17px] leading-relaxed text-forest/85">
              The workshop I&rsquo;ve taught for 13 years. A working session
              where you name the goal, find the belief in the way, and break
              it. Not theory. The same process I used at every stage of Hush.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-8 md:flex-row md:gap-10 lg:flex-col lg:gap-9 lg:text-right">
            <div>
              <p className="font-display text-6xl leading-none tabular-nums md:text-7xl">15,000+</p>
              <p className="mt-1 max-w-[220px] text-xs tracking-[0.22em] text-forest/75 lg:max-w-none">PEOPLE THROUGH IT</p>
            </div>
            <div>
              <p className="font-display text-6xl leading-none tabular-nums md:text-7xl">13</p>
              <p className="mt-1 max-w-[220px] text-xs tracking-[0.22em] text-forest/75 lg:max-w-none">YEARS TEACHING IT</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-10 border-t border-forest/30 pt-9 lg:flex-row lg:items-center">
          <div className="grid gap-8 sm:grid-cols-3 sm:gap-12">
            {steps.map((s) => (
              <div key={s.n} className="flex max-w-60 flex-col gap-1.5">
                <p className="font-display text-2xl italic">{s.n}</p>
                <p className="text-sm text-forest/75">{s.d}</p>
              </div>
            ))}
          </div>
          <a
            href="#newsletter"
            className="shrink-0 bg-forest px-8 py-4.5 text-[13px] font-semibold tracking-[0.14em] text-cream transition hover:bg-forest-deep"
          >
            GET NOTIFIED ABOUT THE NEXT WORKSHOP
          </a>
        </div>
      </div>
    </section>
  );
}

function Coaching() {
  return (
    <section id="coaching" className="bg-cream px-6 py-24 text-forest md:px-16">
      <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
        <div className="flex max-w-2xl flex-col gap-5">
          <div className="flex items-center gap-3.5">
            <Rule dark />
            <p className={`${eyebrow} font-medium text-gold-ink`}>1:1 COACHING</p>
          </div>
          <h2 className="font-display text-4xl font-medium leading-[1.1] [text-wrap:balance] md:text-[56px]">
            The mentor I wish I had at{" "}
            <span className="italic text-gold-deep">$0.</span>
          </h2>
          <p className="text-base font-light leading-relaxed text-forest/75">
            A handful of founders a year, working directly with Aaron on the
            exact problems in front of them. Serious inquiries only.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 lg:items-end">
          <a
            href="mailto:aaron@aspivak.com?subject=Coaching%20inquiry"
            className="self-start bg-forest px-7 py-4 text-[13px] font-semibold tracking-[0.14em] text-cream transition hover:bg-forest-deep lg:self-auto"
          >
            ENQUIRE ABOUT COACHING
          </a>
          <p className="text-[13px] text-forest/55">
            Coaching starts at $5,000 per hour.
          </p>
        </div>
      </div>
    </section>
  );
}

function Instagram() {
  const handle = "https://www.instagram.com/spivak";
  return (
    <section
      id="instagram"
      className="border-t border-forest/15 bg-cream px-6 py-20 text-forest md:px-16 md:py-24"
    >
      <div className="flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3.5">
              <Rule dark />
              <p className={`${eyebrow} font-medium text-gold-ink`}>OFF THE RECORD</p>
            </div>
            <h2 className="font-display text-4xl font-medium leading-[1.1] [text-wrap:balance] md:text-[56px]">
              Day to day, on{" "}
              <span className="italic text-gold-deep">@spivak.</span>
            </h2>
          </div>
          <a
            href={handle}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 border border-forest/40 px-[18px] py-2.5 text-xs tracking-[0.16em] text-forest transition hover:bg-forest hover:text-cream"
          >
            FOLLOW ON INSTAGRAM
          </a>
        </div>
        <InstagramFeed />
      </div>
    </section>
  );
}

function Podcast() {
  const episodes = [
    {
      title:
        "Scaling a Billion-Dollar Brand: George Heaton of Represent",
      href: "https://podcasts.apple.com/us/podcast/founder2founder-with-aaron-spivak/id1800303984",
    },
    {
      title:
        "Shelby Sapp Didn\u2019t Just Break Into Sales, She Rebuilt It For Women Everywhere",
      href: "https://open.spotify.com/episode/2071dXormTC6QfSnu4NOAm",
    },
  ];
  const platforms = [
    { label: "APPLE PODCASTS", href: "https://podcasts.apple.com/us/podcast/founder2founder-with-aaron-spivak/id1800303984" },
    { label: "SPOTIFY", href: "https://open.spotify.com/episode/2071dXormTC6QfSnu4NOAm" },
    { label: "YOUTUBE", href: "https://www.youtube.com/watch?v=JZYz5FdY1wk" },
  ];
  return (
    <section id="podcast" className="bg-forest px-6 py-20 md:px-16 md:py-28">
      <div className="flex flex-col gap-12">
        <div className="flex items-center gap-3.5">
          <Rule />
          <p className={`${eyebrow} text-gold`}>LISTEN &amp; WATCH</p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="relative flex min-h-[460px] flex-col justify-end gap-5 overflow-hidden border border-gold/25 bg-forest-deep p-8 md:p-13">
            <Image
              src="/images/podcast-couch.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover opacity-55"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/20 to-ink/90" />
            <p className="relative text-[11px] tracking-[0.24em] text-gold">
              THE PODCAST · HOSTED BY AARON
            </p>
            <p className="relative font-display text-4xl font-medium leading-tight text-cream md:text-6xl">
              Founder2Founder
            </p>
            <p className="relative max-w-xl text-sm leading-relaxed text-cream/75">
              Raw and unfiltered. Aaron pulls back the curtain on what it
              really takes to build something from the ground up.
            </p>
            <div className="relative flex flex-col">
              {episodes.map((ep) => (
                <a
                  key={ep.href}
                  href={ep.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-t border-cream/15 py-4 font-display text-lg leading-snug text-cream transition hover:text-gold md:text-xl"
                >
                  {ep.title}
                </a>
              ))}
            </div>
            <div className="relative flex flex-wrap gap-3">
              {platforms.map((pl) => (
                <a
                  key={pl.label}
                  href={pl.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gold/50 px-4 py-2.5 text-xs tracking-[0.16em] text-gold transition hover:bg-gold hover:text-forest"
                >
                  {pl.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <p className={`${eyebrow} text-gold`}>AARON AS A GUEST</p>
            <a
              href="https://www.youtube.com/watch?v=F6lmW3vS_fM"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2.5 border-b border-cream/15 pb-8"
            >
              <p className="text-[11px] tracking-[0.24em] text-cream/50">PODCAST</p>
              <p className="font-display text-2xl text-cream transition group-hover:text-gold">
                &ldquo;I sold my company for $48,000,000 and felt nothing.&rdquo;
              </p>
              <p className="text-sm text-cream/60">Reroot with Eamon &amp; Bec · May 2025</p>
            </a>
            <a
              href="https://www.youtube.com/watch?v=QrkjlbCPz3U"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2.5 border-b border-cream/15 pb-8"
            >
              <p className="text-[11px] tracking-[0.24em] text-cream/50">TV</p>
              <p className="font-display text-2xl text-cream transition group-hover:text-gold">
                The Dragons&rsquo; Den pitch
              </p>
              <p className="text-sm text-cream/60">Money Buys Happiness</p>
            </a>
            <a
              href="https://www.youtube.com/watch?v=LLwRlmijbUw"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2.5"
            >
              <p className="text-[11px] tracking-[0.24em] text-cream/50">PODCAST</p>
              <p className="font-display text-2xl text-cream transition group-hover:text-gold">
                The full founder story
              </p>
              <p className="text-sm text-cream/60">with Gary Lipovetsky</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsletterClose() {
  return (
    <section
      id="newsletter"
      className="grid items-center gap-12 border-t border-gold/30 bg-forest-deep px-6 py-20 md:px-16 md:py-28 lg:grid-cols-[minmax(0,560px)_1fr] lg:gap-18"
    >
      <div className="flex flex-col gap-3.5">
        <div className="relative h-80 overflow-hidden md:h-[520px]">
          <Image
            src="/images/hush-day-one.jpg"
            alt="The early days of Hush in a Toronto apartment"
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover object-[50%_40%]"
          />
        </div>
        <p className="font-display text-[17px] italic text-cream/60">
          Hush, day one. A Toronto apartment.
        </p>
      </div>
      <div className="flex flex-col gap-7">
        <p className={`${eyebrow} text-gold`}>THE FOUNDER TO FOUNDER LETTER</p>
        <h2 className="font-display text-4xl font-medium leading-[1.1] text-cream [text-wrap:balance] md:text-6xl">
          It started in this room. Subscribe and build a future{" "}
          <span className="italic text-gold">you&rsquo;re proud of.</span>
        </h2>
        <SubscribeForm showName />
        <p className="text-[13px] text-cream/50">
          Weekly insights on starting, scaling, and succeeding. Free, forever.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  const links = [
    { label: "INSTAGRAM", href: "https://www.instagram.com/aspivak" },
    { label: "YOUTUBE", href: "https://www.youtube.com" },
    { label: "LINKEDIN", href: "https://www.linkedin.com" },
    { label: "FOUNDERS CLUB", href: "https://foundersclubofficial.com" },
  ];
  const filmLink = { label: "THE FILM", href: "/hush" };
  return (
    <footer className="flex flex-col items-center justify-between gap-6 bg-ink px-6 py-8 md:flex-row md:px-16">
      <p className="font-display text-lg tracking-wide text-cream/70">Aaron Spivak</p>
      <nav className="flex flex-wrap justify-center gap-7">
        <Link href={filmLink.href} className={footerLink}>
          {filmLink.label}
        </Link>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className={footerLink}
          >
            {l.label}
          </a>
        ))}
      </nav>
      <p className="text-xs text-cream/55">© 2026 Aaron Spivak</p>
    </footer>
  );
}

export default function Page() {
  return (
    <main>
      <IntroLoader />
      <Nav />
      <Hero />
      <PressBar />
      <Story />
      <Speaking />
      <Workshop />
      <Coaching />
      <Instagram />
      <Podcast />
      <NewsletterClose />
      <Footer />
    </main>
  );
}
