import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "../../content/siteConfig";
import { principles } from "../../content/principles";
import Breadcrumbs from "../../components/Breadcrumbs";
import PrinciplesGrid from "../../components/PrinciplesGrid";
import VideoStructuredData from "../../components/VideoStructuredData";
import VideoGrid from "../../components/VideoGrid";

export const metadata = {
  title: "About Mike Vallotton, CTO and Technology Leader",
  description:
    "Mike Vallotton is CTO at Sagepath Reply, with technology experience since 1996 spanning software engineering, architecture, enterprise digital experience, and applied AI.",
  alternates: {
    canonical: "/about",
  },
};

const structuredData = {
  "@context": "https://schema.org",
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
};

const videos = [
  {
    title: "Intro",
    published: "2025-12-01T05:30:48-08:00",
    url: "https://www.youtube.com/watch?v=amz7jADqzG0",
    videoId: "amz7jADqzG0",
    description:
      "AI is already reshaping how work gets done across every industry, not just tech. This video introduces the series and explains why the shift is real, immediate, and already affecting every role, from developers to designers to executives.",
  },
  {
    title: "Teaching at Porsche",
    published: "2026-02-24T12:06:30-08:00",
    url: "https://www.youtube.com/watch?v=3jXhkdJGKZc",
    videoId: "3jXhkdJGKZc",
    description:
      "Executives across industries are actively confronting rapid AI driven shifts in customer behavior, staffing, and digital architecture. Leaders are focused on adapting responsibly, structuring content for AI mediated discovery, and evolving organizations without breaking them.",
  },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <VideoStructuredData videos={videos} pagePath="/about" />
      <Breadcrumbs current="About" path="/about" />
      <section className="about-hero">
        <div className="about-hero__copy">
          <p className="eyebrow text-library-walnut">Engineer / CTO / Translator</p>
          <h1>About Mike Vallotton</h1>
          <p className="about-hero__lead">
            I spend most of my time translating between groups that speak different languages: executive leaders, delivery teams, technologists, and now AI systems.
          </p>
          <p className="mt-6 text-library-muted max-w-prose">
            I&apos;ve worked professionally in technology since 1996, beginning in database administration and hands-on software development before moving through enterprise consulting and architecture into technology leadership. I joined Sagepath Reply as an architect in 2013 and became Chief Technology Officer in 2021.
          </p>
          <p className="text-library-muted max-w-prose">
            Today my work sits at the intersection of enterprise digital experience, software architecture, AI, and the redesign of how people and organizations work. That progression still shapes how I approach emerging technology: it has to operate inside real systems, teams, and constraints.
          </p>
        </div>
        <div className="about-portrait">
          <div className="about-portrait__orbit" aria-hidden="true" />
          <Image
            src="/headshot.jpg"
            alt="Mike Vallotton"
            width={640}
            height={640}
            priority
            className="about-portrait__image"
          />
          <span className="about-portrait__caption">Three decades in technology</span>
        </div>
      </section>

      <section className="about-section about-section--photo">
        <div className="about-section__art">
          <Image
            src="/images/mike-vallotton-teaching-ai-workshop.jpg"
            alt="Mike Vallotton teaching a workshop with a presentation screen and participants in the room."
            fill
            sizes="(min-width: 768px) 48vw, 100vw"
            className="object-cover"
          />
        </div>
        <h2 className="text-2xl font-semibold tracking-tight">Building AI fluency</h2>
        <p className="text-library-muted max-w-prose">
          I create clear, grounded content that helps people understand AI, use it well, and become meaningfully more capable at work and in everyday life. My goal is to teach the thinking, habits, and hands-on skills that make AI genuinely useful.
        </p>
        <p className="text-sm text-library-muted">
          Start with <Link href="/ai-fundamentals" className="topic-destination-link">AI Fundamentals</Link>.
        </p>
      </section>

      <section className="about-section about-section--videos">
        <h2 className="text-2xl font-semibold tracking-tight">Teaching and speaking</h2>
        <div className="about-section__body">
          <p className="text-library-muted max-w-prose">
            I teach and speak about practical AI adoption, agentic workflows, digital experience, and the changing nature of knowledge work. The emphasis is not simply on what AI can generate, but on the information, architecture, governance, and human judgment required to use it responsibly.
          </p>
          <p className="mt-4 text-library-muted max-w-prose">
            At the 2026 Gartner Marketing Symposium/Xpo, I helped lead the CMO Boardroom roundtable{" "}
            <a
              href="https://sagepath-reply.com/blog/news/gartner-marketing-symposium-2026/"
              target="_blank"
              rel="noreferrer"
            >
              AI-Native Marketing: What Every CMO Must Do Now
            </a>
            , exploring the Agentic Web, generative engine optimization, organizational AI adoption, and how AI-mediated discovery is changing marketing operations and customer journeys.
          </p>
          <VideoGrid videos={videos} />
        </div>
      </section>

      <section className="about-section about-section--dark">
        <h2 className="text-2xl font-semibold tracking-tight">Why now</h2>
        <p className="text-library-muted max-w-prose">
          AI has reached a new equilibrium: practical capability. Teams are already feeling the effects, and early adopters are pulling ahead because capability compounds. The habits you build now determine whether you fall behind or move ahead of the curve.
        </p>
      </section>

      <section className="about-section">
        <h2 className="text-2xl font-semibold tracking-tight">Judgment remains human</h2>
        <p className="text-library-muted max-w-prose">
          AI can generate options and make bounded choices inside systems people design, but it cannot determine the values, responsibilities, and consequences that define sound human judgment. I focus on strengthening that judgment while using AI to remove friction.
        </p>
      </section>

      <section className="about-section">
        <h2 className="text-2xl font-semibold tracking-tight">Closing the habit gap</h2>
        <p className="text-library-muted max-w-prose">
          The main barrier is habits, not knowledge. Most people still work the way they did before AI existed, and organizations adapt even more slowly. I teach clarity, iteration, structure, reasoning, and tool usage: a modern workflow where human judgment and machine capability work together.
        </p>
      </section>

      <section className="about-section about-section--principles">
        <h2 className="text-2xl font-semibold tracking-tight">How I operate</h2>
        <PrinciplesGrid items={principles} />
      </section>

      <section className="about-section about-section--dark">
        <h2 className="text-2xl font-semibold tracking-tight">What I&apos;m not doing</h2>
        <p className="text-library-muted max-w-prose">
          I&apos;m not interested in AI theater, isolated pilots without ownership, or tool-of-the-week content. I&apos;m focused on durable workflows, governance, and the habits that compound.
        </p>
      </section>

      <section className="about-section about-section--photo about-section--photo-left">
        <div className="about-section__art">
          <Image
            src="/images/mike-vallotton-gartner-cmo-boardroom-2026.jpg"
            alt="Mike Vallotton beside the CMO Boardroom session sign at the 2026 Gartner Marketing Symposium/Xpo."
            fill
            sizes="(min-width: 768px) 48vw, 100vw"
            className="object-cover"
          />
        </div>
        <h2 className="text-2xl font-semibold tracking-tight">My role</h2>
        <p className="text-library-muted max-w-prose">
          I&apos;m an engineer and CTO whose work spans technical architecture, enterprise delivery, team leadership, and applied AI. I translate emerging capabilities into practical decisions, workflows, and systems that can hold up under real organizational constraints. My perspective comes from building and leading the work.
        </p>
        <p className="mt-4 text-sm text-library-muted max-w-prose">
          At the 2026 Gartner Marketing Symposium/Xpo, I helped lead a CMO Boardroom roundtable on AI-native marketing and the Agentic Web.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Editorial approach</h2>
        <p className="text-library-muted max-w-prose">
          This site reflects my professional experience, analysis, and point of
          view. I use external evidence to support important factual claims while
          remaining responsible for the conclusions and practical guidance I draw
          from it. Sources do not necessarily endorse those conclusions. I update
          articles when the evidence or the technology changes materially.
        </p>
        <p className="text-sm text-library-muted max-w-prose">
          To suggest a correction, connect with me through{" "}
          <a href={siteConfig.urls.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          .
        </p>
      </section>

      <section className="about-cta panel space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Work with me</h2>
        <p className="text-library-ink max-w-prose">
          I work with large organizations and enterprise transformation initiatives through my role at Sagepath Reply. I also independently consider select advisory work with small businesses, along with speaking, teaching, and workshop opportunities.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={siteConfig.urls.sagepath} target="_blank" rel="noreferrer" className="btn btn-primary no-underline">Work with Sagepath Reply</a>
          <a href={siteConfig.urls.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary no-underline">Contact me on LinkedIn</a>
        </div>
      </section>

    </div>
  );
}

