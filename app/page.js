import Link from "next/link";
import { siteConfig } from "../content/siteConfig";
import { principles } from "../content/principles";
import PrinciplesGrid from "../components/PrinciplesGrid";
import TopicsSection from "../components/TopicsSection";

export const metadata = {
  title: "Practical AI Guidance for Work and Life",
  description:
    "Practical guidance from CTO Mike Vallotton to help you understand AI, use it effectively, and become more capable at work and in everyday life.",
  alternates: {
    canonical: "/",
  },
};

const audiences = [
  "Executives and business leaders modernizing their organizations",
  "Department leaders adopting AI with their teams",
  "Professionals using AI in daily knowledge work",
  "People building personal AI workflows and automations",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.siteUrl}/#website`,
      url: siteConfig.siteUrl,
      name: siteConfig.name,
      description: metadata.description,
      publisher: { "@id": `${siteConfig.siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.siteUrl}/#person`,
      name: siteConfig.name,
      url: `${siteConfig.siteUrl}/about`,
      image: `${siteConfig.siteUrl}/headshot.jpg`,
      jobTitle: "Chief Technology Officer",
      worksFor: {
        "@type": "Organization",
        name: "Sagepath Reply",
        url: siteConfig.urls.sagepath,
      },
      sameAs: [
        siteConfig.urls.linkedin,
        siteConfig.urls.youtube,
        siteConfig.urls.tiktok,
        siteConfig.urls.x,
      ].filter(Boolean),
      knowsAbout: [
        "Artificial intelligence",
        "AI-enabled workflows",
        "Organizational AI adoption",
        "Enterprise architecture",
        "Digital experience",
        "Software engineering",
        "Technology strategy",
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="home-hero relative flex min-h-[calc(100svh-7rem)] flex-col justify-between overflow-hidden border-b border-library-parchment pb-14 pt-2 md:pb-16 md:pt-8">
        <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit--two" aria-hidden="true" />
        <p className="eyebrow relative z-10 text-library-walnut">
          AI fluency, work, and human capability
        </p>
        <div className="relative z-10 mt-auto grid gap-10 pt-20 lg:grid-cols-[minmax(0,1.6fr)_minmax(17rem,0.4fr)] lg:items-end">
          <div>
            <h1 className="hero-title max-w-6xl font-semibold">
              Become more<br />capable <em>with AI.</em>
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-library-ink md:text-2xl">
              Clear, grounded guidance to help you understand AI, use it well,
              and develop the thinking, habits, and hands-on skills that make it
              genuinely useful—at work and in everyday life.
            </p>
            <p className="mt-6 max-w-2xl leading-relaxed text-library-muted">
              I&apos;m Mike Vallotton, Chief Technology Officer at Sagepath Reply.
              I&apos;ve worked professionally in technology since 1996, progressing
              from hands-on software development and architecture into technology
              strategy, team leadership, and enterprise delivery.
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-library-muted">
              This site answers practical questions about how AI works, how it
              changes professional work, where automation creates value, and
              where human judgment remains essential.
            </p>
          </div>
          <div className="hero-aside border-l border-library-ink/40 pl-5">
            <p className="font-serif text-xl font-medium leading-relaxed text-library-ink">
              AI accelerates execution. People still choose the constraints,
              weigh the tradeoffs, and decide what matters.
            </p>
            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold no-underline"
            >
              More about my perspective <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="relative z-10 mt-9 flex flex-wrap gap-3">
          <Link href="/ai-fundamentals" className="topic-destination-link btn btn-primary no-underline">
            Start building AI fluency
          </Link>
          <Link href="#topics" className="btn btn-secondary no-underline">
            Explore all topics
          </Link>
        </div>
      </section>

      <section
        aria-labelledby="audience-title"
        className="audience-section border-b border-library-parchment py-16 md:py-24"
      >
        <div className="grid gap-6 md:grid-cols-[15rem_1fr] md:gap-12">
          <div>
            <p className="type-label text-library-walnut">
              Who this is for
            </p>
            <h2 id="audience-title" className="mt-3 text-3xl font-semibold">
              Practical guidance for modern knowledge work
            </h2>
          </div>
          <ul className="audience-list grid sm:grid-cols-2">
            {audiences.map((audience) => (
              <li
                key={audience}
                className="flex gap-3 border-t border-library-ink/30 py-5 text-lg leading-snug text-library-ink"
              >
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{audience}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="perspective-title"
        className="perspective-section -mx-5 border-b border-library-parchment bg-library-forest px-5 py-20 text-library-paper md:-mx-8 md:px-8 md:py-28 lg:-mx-12 lg:px-12"
      >
        <div className="grid gap-6 md:grid-cols-[15rem_1fr] md:gap-12">
          <div>
            <p className="eyebrow text-library-brassText">
              My perspective
            </p>
            <h2 id="perspective-title" className="mt-3 text-3xl font-semibold !text-library-paper">
              Capability, not just output
            </h2>
          </div>
          <div className="max-w-3xl space-y-5">
            <p className="text-2xl leading-relaxed text-library-paper md:text-4xl">
              AI is becoming a general-purpose capability for supporting how
              people think and work.
            </p>
            <p className="leading-relaxed text-library-paper">
              It can help people research, learn, create, communicate, plan, and
              execute at a level that was previously out of reach—but only when
              it is paired with clear goals, good context, deliberate iteration,
              and human judgment.
            </p>
            <p className="font-serif text-xl font-medium leading-relaxed text-library-paper">
              Learning to use AI is not primarily about memorizing prompts. It is
              about developing better habits for working with increasingly
              capable systems.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 border-b-2 border-library-brassText pb-1 text-sm font-semibold text-library-paper no-underline"
            >
              More about my perspective <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <TopicsSection />

      <section
        aria-labelledby="why-now-title"
        className="why-now-section border-b border-library-parchment py-20 md:py-28"
      >
        <div className="grid gap-6 md:grid-cols-[15rem_1fr] md:gap-12">
          <div>
            <p className="type-label text-library-walnut">
              Why now
            </p>
            <h2 id="why-now-title" className="mt-3 text-3xl font-semibold">
              Practical capability compounds
            </h2>
          </div>
          <p className="max-w-4xl font-serif text-3xl font-medium leading-tight text-library-ink md:text-5xl" data-drift="-8">
            AI has crossed into practical capability. People who learn to use it
            deliberately can research faster, explore ideas more deeply,
            communicate more clearly, and accomplish work that previously
            required more time, specialized knowledge, or coordination. Those
            advantages compound as the habit develops.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="principles-title"
        className="border-b border-library-parchment py-14 md:py-20"
      >
        <div className="max-w-3xl">
          <p className="type-label text-library-walnut">
            A durable approach
          </p>
          <h2 id="principles-title" className="mt-3 text-3xl font-semibold md:text-4xl">
            Better habits matter more than better prompts.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-library-muted">
            These principles guide how I evaluate AI tools, design workflows,
            and teach others to use them.
          </p>
        </div>
        <PrinciplesGrid items={principles} />
      </section>

      <section className="py-14 md:py-20">
        <div className="panel -mx-5 grid gap-7 md:-mx-8 md:grid-cols-[1fr_auto] md:items-end lg:-mx-12">
          <div>
            <p className="type-label text-library-walnut">
              About Mike
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold">
              From hands-on software and architecture to enterprise technology
              leadership.
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-library-muted">
              I&apos;m an engineer and the Chief Technology Officer at Sagepath
              Reply. I joined the company as an architect in 2013 and became CTO
              in 2021. I explain emerging technology plainly, show practical
              workflows, and focus on systems that hold up beyond the demo.
            </p>
          </div>
          <Link href="/about" className="btn btn-secondary shrink-0 no-underline">
            Read about my work
          </Link>
        </div>
      </section>
    </div>
  );
}
