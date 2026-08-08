import Link from "next/link";
import Breadcrumbs from "../../../components/Breadcrumbs";
import ContentContinuation from "../../../components/ContentContinuation";
import ContentMeta from "../../../components/ContentMeta";
import EvidenceNote from "../../../components/EvidenceNote";
import FaqList from "../../../components/FaqList";
import FurtherReading from "../../../components/FurtherReading";
import JsonLd from "../../../components/JsonLd";
import TopicSectionNav from "../../../components/topic/TopicSectionNav";
import { evidenceNotes, sourcesFor } from "../../../content/evidence";
import {
  aiJobSearchDescription,
  aiJobSearchExampleCases,
  aiJobSearchPath,
  aiJobSearchPromptDownloadPath,
  aiJobSearchPrompts,
  aiJobSearchSections,
} from "../../../content/aiJobSearch";
import { siteConfig } from "../../../content/siteConfig";

const published = "2026-08-08";

export const metadata = {
  title: {
    absolute: "Use AI to Find Work Where You Can Be Useful",
  },
  description: aiJobSearchDescription,
  alternates: { canonical: aiJobSearchPath },
  openGraph: {
    title: "Use AI to Find Work Where You Can Be Useful",
    description: aiJobSearchDescription,
    url: aiJobSearchPath,
    type: "article",
    publishedTime: published,
    authors: [`${siteConfig.siteUrl}/about`],
  },
};

const faqs = [
  {
    question: "Is this a resume prompt?",
    answer:
      "No. The first prompt uses resume material as evidence, but the workflow is not trying to rewrite a resume. It creates a reusable capability profile that later prompts can use to find employers, evaluate fit, and plan action without exaggerating what the person can offer.",
  },
  {
    question: "Should I use these prompts instead of applying to jobs?",
    answer:
      "No. The workflow is meant to make applications and outreach more targeted. It helps decide where to spend attention, what proof to prepare, which roles or employers deserve effort, and when a company should be deprioritized.",
  },
  {
    question: "Why does the company-finding prompt require sources?",
    answer:
      "A company can sound plausible because it is famous, nearby, or has an attractive job title. The source requirement forces the recommendation to connect with current evidence about the employer instead of becoming a wish list.",
  },
  {
    question: "What should I do if the overlap analysis says the fit is weak?",
    answer:
      "Treat that as useful information. A weak fit may become a watchlist target, a learning conversation, or a reason to build proof first. It should not receive the same effort as an employer with a clear role path and credible overlap.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Use AI to Find Work Where You Can Be Useful",
  description: aiJobSearchDescription,
  datePublished: published,
  dateModified: published,
  mainEntityOfPage: `${siteConfig.siteUrl}${aiJobSearchPath}`,
  image: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
  author: {
    "@type": "Person",
    name: siteConfig.name,
    url: `${siteConfig.siteUrl}/about`,
  },
  publisher: {
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
  },
  citation: sourcesFor(["fundamentalsContext", "thinkingConfidence"]).map(
    (source) => source.href,
  ),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function PromptBlock({ label, text }) {
  return (
    <figure className="prompt-block">
      <figcaption>{label}</figcaption>
      <pre aria-label={`${label}, copy/paste prompt`}>
        <code>{text}</code>
      </pre>
    </figure>
  );
}

function PromptExampleLinks({ prompt }) {
  return (
    <nav
      aria-label={`Examples for prompt ${prompt.number}`}
      className="job-search-section-examples"
    >
      <p className="type-label text-library-walnut">
        See examples for this prompt
      </p>
      <div>
        {aiJobSearchExampleCases.map((example) => (
          <Link
            key={`${prompt.id}-${example.slug}`}
            href={`${aiJobSearchPath}/examples/${example.slug}#${prompt.id}`}
            aria-label={`${example.label} example for prompt ${prompt.number}: ${prompt.title}`}
            className="no-underline"
          >
            <span>{example.label}</span>
            <small>Prompt {prompt.number}</small>
          </Link>
        ))}
      </div>
    </nav>
  );
}

function ExampleArrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 19 19 5M9 5h10v10" />
    </svg>
  );
}

export default function AiJobSearchPage() {
  return (
    <article className="article-page article-page--job-search">
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs current="AI Job Search" path={aiJobSearchPath} />

      <header className="article-hero border-b border-library-parchment pb-14 pt-2 md:pb-20 md:pt-6">
        <div className="reading-surface max-w-5xl">
          <p className="eyebrow text-library-walnut">Article / AI and work</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-[0.98] sm:text-5xl md:text-7xl">
            Use AI to Find Work Where You Can Be Useful
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-library-ink md:text-2xl">
            Do not start by asking AI to find job titles. Start by giving it
            enough context to help you find where your skills, interests, and
            proof might matter.
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-library-muted">
            This five-prompt workflow turns a job search into a learning loop:
            understand what you can offer, find sourced employers, research one
            employer at a time, test the overlap, and build a proportional plan
            for action.
          </p>
          <ContentMeta
            published={published}
            publishedLabel="August 8, 2026"
            className="mt-6"
          />
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={aiJobSearchPromptDownloadPath}
              download
              className="btn btn-primary no-underline"
            >
              Download the five prompts
            </a>
            <Link
              href="#examples"
              className="btn btn-secondary no-underline"
            >
              View examples
            </Link>
          </div>
        </div>
      </header>

      <TopicSectionNav sections={aiJobSearchSections} />

      <section
        id="overview"
        aria-labelledby="overview-title"
        className="article-section border-b border-library-parchment py-14 md:py-20"
      >
        <div className="grid gap-8 md:grid-cols-[15rem_minmax(0,48rem)] md:gap-12">
          <div>
            <p className="type-label text-library-walnut">The workflow</p>
            <h2 id="overview-title" className="mt-3 text-3xl font-semibold">
              A job search should produce better information
            </h2>
          </div>
          <div className="reading-surface space-y-5 text-lg leading-relaxed text-library-muted">
            <p>
              Most bad AI job-search advice starts too late. It asks for a
              resume rewrite, a list of job titles, or a generic outreach
              message before the person understands where they may actually be
              useful.
            </p>
            <p>
              The better starting point is context. What have you done? What can
              you prove? What are you interested in? What constraints are real?
              Which claims would be dishonest or premature? Once that is clear,
              AI can help research employers and compare opportunities without
              pretending every company is a fit.
            </p>
            <p className="font-serif text-2xl font-medium leading-relaxed text-library-ink">
              The goal is not to convince every employer to make room for you.
              The goal is to find places where you can point at something that
              matters to them and say, &quot;I can help with that.&quot;
            </p>
            <EvidenceNote note={evidenceNotes.fundamentalsContext} />
          </div>
        </div>

        <ol className="job-search-step-list mt-12">
          {aiJobSearchPrompts.map((prompt) => (
            <li key={prompt.id}>
              <span>{prompt.number}</span>
              <div>
                <h3>{prompt.title}</h3>
                <p>{prompt.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {aiJobSearchPrompts.map((prompt) => (
        <section
          key={prompt.id}
          id={prompt.id}
          aria-labelledby={`${prompt.id}-title`}
          className="article-section border-b border-library-parchment py-14 md:py-20"
        >
          <div className="grid gap-8 md:grid-cols-[15rem_minmax(0,48rem)] md:gap-12">
            <div>
              <p className="type-label text-library-walnut">
                Prompt {prompt.number}
              </p>
              <h2
                id={`${prompt.id}-title`}
                className="mt-3 text-3xl font-semibold"
              >
                {prompt.title}
              </h2>
            </div>
            <div className="reading-surface space-y-5 text-lg leading-relaxed text-library-muted">
              <p>{prompt.summary}</p>
              <div className="job-search-prompt-notes">
                <div>
                  <p className="type-label text-library-walnut">Output</p>
                  <p>{prompt.outcome}</p>
                </div>
                <div>
                  <p className="type-label text-library-walnut">Avoid</p>
                  <p>{prompt.failure}</p>
                </div>
              </div>
            </div>
          </div>
          <PromptBlock
            label={`Prompt ${prompt.number}: ${prompt.title}`}
            text={prompt.copyPrompt}
          />
          <PromptExampleLinks prompt={prompt} />
        </section>
      ))}

      <section
        id="examples"
        aria-labelledby="examples-title"
        className="article-section border-b border-library-parchment py-14 md:py-20"
      >
        <div className="reading-surface max-w-3xl">
          <p className="type-label text-library-walnut">Examples</p>
          <h2 id="examples-title" className="mt-3 text-3xl font-semibold md:text-4xl">
            Five complete example runs
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-library-muted">
            These examples use synthetic profiles to show what the workflow
            should produce for different search situations: senior operators,
            early-career candidates, career changers, broad generalists, and
            local small-employer searches.
          </p>
        </div>
        <div className="job-search-example-grid mt-10">
          {aiJobSearchExampleCases.map((example) => (
            <Link
              key={example.slug}
              href={`${aiJobSearchPath}/examples/${example.slug}`}
              className="job-search-example-card no-underline"
            >
              <p className="type-label text-library-walnut">{example.label}</p>
              <h3>{example.title}</h3>
              <p>{example.description}</p>
              <span>
                View input and output <ExampleArrow />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="how-to-use-it"
        aria-labelledby="how-to-use-it-title"
        className="article-section border-b border-library-parchment py-14 md:py-20"
      >
        <div className="grid gap-8 md:grid-cols-[15rem_minmax(0,48rem)] md:gap-12">
          <div>
            <p className="type-label text-library-walnut">How to use it</p>
            <h2 id="how-to-use-it-title" className="mt-3 text-3xl font-semibold">
              Keep the work proportional
            </h2>
          </div>
          <div className="reading-surface space-y-5 text-lg leading-relaxed text-library-muted">
            <p>
              Do the prompts in order. Keep the reusable artifact from each
              step, because the next step depends on it. When you learn
              something new from a posting, conversation, rejection, or company
              research, put that information back into the relevant thread and
              update the plan.
            </p>
            <p>
              The workflow should also tell you when to stop. A company can be
              interesting without being worth active effort right now. If the
              evidence is weak, the employment path is unclear, or the fit is
              mostly aspirational, keep parallel targets moving.
            </p>
            <EvidenceNote note={evidenceNotes.thinkingConfidence} />
          </div>
        </div>
      </section>

      <section
        id="frequently-asked-questions"
        aria-labelledby="frequently-asked-questions-title"
        className="article-section border-b border-library-parchment py-14 md:py-20"
      >
        <div className="grid gap-8 md:grid-cols-[15rem_minmax(0,48rem)] md:gap-12">
          <div>
            <p className="type-label text-library-walnut">Practical guidance</p>
            <h2
              id="frequently-asked-questions-title"
              className="mt-3 text-3xl font-semibold"
            >
              Frequently asked questions
            </h2>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="panel -mx-5 grid gap-8 md:-mx-8 md:grid-cols-[1fr_auto] md:items-end lg:-mx-12">
          <div>
            <p className="type-label text-library-walnut">Prompt pack</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">
              Download the five prompts and run the workflow on your own search.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-library-muted">
              Start with the capability profile. Save the artifact. Then move
              through the company list, employer research, overlap analysis, and
              approach plan.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <a
              href={aiJobSearchPromptDownloadPath}
              download
              className="btn btn-primary no-underline"
            >
              Download prompts
            </a>
            <Link href="#examples" className="text-sm font-semibold">
              Review the example runs
            </Link>
          </div>
        </div>
      </section>

      <FurtherReading
        sources={sourcesFor(["fundamentalsContext", "thinkingConfidence"])}
      />
      <ContentContinuation
        title="Understand how AI changes work"
        description="Explore how AI changes workflows, careers, organizations, leadership, and the skills that create value."
        href="/ai-and-work"
        linkLabel="Explore AI and Work"
        topicKey="work"
      />
    </article>
  );
}
