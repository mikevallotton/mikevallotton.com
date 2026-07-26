import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import TopicsSection from "../../components/TopicsSection";
import SocialLinks from "../../components/SocialLinks";

export const metadata = {
  title: "AI Topics and Social Links",
  description: "Practical AI guidance from Mike Vallotton—choose a topic or find Mike online.",
  alternates: {
    canonical: "/links",
  },
};

function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 19 19 5M8 5h11v11" />
    </svg>
  );
}

export default function LinksPage() {
  return (
    <div className="links-page">
      <div className="links-glow links-glow--one" aria-hidden="true" />
      <div className="links-glow links-glow--two" aria-hidden="true" />

      <Breadcrumbs current="Links" path="/links" />

      <header className="page-hero border-b border-library-parchment pb-14 pt-2 md:pb-20 md:pt-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,24rem)] lg:items-center lg:gap-16">
          <div className="page-hero__content reading-surface">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-library-walnut">
              Practical AI / Clear thinking
            </p>
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] sm:text-6xl md:text-7xl">
              Mike Vallotton
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-library-ink md:text-2xl">
              I make AI useful for people who have real work to do.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-library-muted md:text-lg">
              Start with a plain-English guide to what AI is, what it can do,
              and where it falls short, then explore practical guidance about
              work, agents, search, software development, and human judgment.
            </p>
            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold no-underline"
            >
              More about my perspective <span aria-hidden="true">→</span>
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href="/ai-fundamentals"
                className="topic-destination-link btn btn-primary no-underline"
              >
                Start with AI fundamentals
              </Link>
              <SocialLinks className="links-socials links-hero-socials" />
            </div>
          </div>
          <div className="relative mx-auto hidden aspect-[4/5] w-full max-w-72 border-2 border-library-ink bg-library-paper shadow-[10px_10px_0_#0e2f25] lg:block lg:max-w-none">
            <Image
              src="/headshot.jpg"
              alt="Mike Vallotton"
              width={480}
              height={600}
              priority
              className="h-full w-full object-cover object-top saturate-[0.82] contrast-[1.06]"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-3 right-3 h-5 w-5 border-2 border-library-paper bg-library-cyan shadow-[0_0_18px_rgba(46,233,209,0.8)]"
            />
          </div>
        </div>
      </header>

      <section className="links-featured" aria-labelledby="news-investigator-title">
        <p className="eyebrow">Featured article</p>
        <Link href="/articles/news-investigator" className="no-underline">
          <span>
            <span id="news-investigator-title">News Investigator Agent</span>
            <small>
              Compare current reporting, evaluate evidence, identify
              uncertainty, and strengthen your judgment.
            </small>
          </span>
          <Arrow />
        </Link>
      </section>

      <TopicsSection />
    </div>
  );
}
