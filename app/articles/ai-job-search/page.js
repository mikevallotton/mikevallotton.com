import Link from "next/link";
import Breadcrumbs from "../../../components/Breadcrumbs";
import ArticleVideoLink from "../../../components/article/ArticleVideoLink";
import ContentContinuation from "../../../components/ContentContinuation";
import ContentMeta from "../../../components/ContentMeta";
import EvidenceNote from "../../../components/EvidenceNote";
import FaqList from "../../../components/FaqList";
import FurtherReading from "../../../components/FurtherReading";
import JobSearchPrivacyWarning from "../../../components/JobSearchPrivacyWarning";
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
import { withPageSocial } from "../../../content/metadata";
import { contentDates } from "../../../content/dates";
import { getVideosByIds } from "../../../content/videos";

const published = contentDates.aiJobSearch.published;
const articleTitle = "How I Would Use AI If I Was Looking for a Job";
const jobSearchVideoPlacements = {
  "capability-profile": {
    slug: "how-i-would-find-a-job-part-1-know-what-you-offer",
    part: 1,
  },
  "find-companies": {
    slug: "how-i-would-find-a-job-part-2-find-where-you-fit",
    part: 2,
  },
  "find-overlap": {
    slug: "how-i-would-find-a-job-part-3-find-where-you-can-help",
    part: 3,
  },
  "approach-plan": {
    slug: "how-i-would-find-a-job-part-4-get-their-attention",
    part: 4,
  },
  "how-to-use-it": {
    slug: "how-i-would-find-a-job-part-5-learn-and-keep-going",
    part: 5,
  },
};
const jobSearchVideoIds = Object.values(jobSearchVideoPlacements).map(
  ({ slug }) => slug,
);
const jobSearchVideos = getVideosByIds(jobSearchVideoIds);
const jobSearchVideosBySlug = new Map(
  jobSearchVideos.map((video) => [video.slug, video]),
);
const jobSearchVideoTotal = Object.keys(jobSearchVideoPlacements).length;

function videoPlacementFor(sectionId) {
  const placement = jobSearchVideoPlacements[sectionId];

  if (!placement) return null;

  return {
    ...placement,
    video: jobSearchVideosBySlug.get(placement.slug),
  };
}

export const metadata = withPageSocial({
  title: {
    absolute: articleTitle,
  },
  description: aiJobSearchDescription,
  alternates: { canonical: aiJobSearchPath },
  openGraph: {
    title: articleTitle,
    description: aiJobSearchDescription,
    url: aiJobSearchPath,
    type: "article",
    publishedTime: published,
    authors: [`${siteConfig.siteUrl}/about`],
  },
});

const faqs = [
  {
    question: "Is this a resume prompt?",
    answer:
      "No. I would use resume material as evidence, not as something to polish first. The point is to create a reusable capability profile that later prompts can use to find employers, evaluate fit, and plan action without exaggerating what the person can offer.",
  },
  {
    question: "Should I use these prompts instead of applying to jobs?",
    answer:
      "No. I would use them to make applications and outreach more targeted. They help decide where to spend attention, what proof to prepare, which roles or employers deserve effort, and when a company should be deprioritized.",
  },
  {
    question: "Why does the company-finding prompt require sources?",
    answer:
      "Because I would not trust a company list just because the employers are famous, nearby, or attached to attractive job titles. Sources force the recommendation to connect with current evidence about the employer instead of becoming a wish list.",
  },
  {
    question: "What should I do if the overlap analysis says the fit is weak?",
    answer:
      "I would treat that as useful information. A weak fit may become a watchlist target, a learning conversation, or a reason to build proof first. I would not give it the same effort as an employer with a clear role path and credible overlap.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: articleTitle,
  description: aiJobSearchDescription,
  datePublished: published,
  dateModified: contentDates.aiJobSearch.modified,
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
      aria-label={`Examples for ${prompt.title}`}
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
            aria-label={`${example.label} example for ${prompt.title}`}
            className="no-underline"
          >
            <span>{example.label}</span>
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
  const howToUseVideoPlacement = videoPlacementFor("how-to-use-it");

  return (
    <article className="article-page article-page--job-search">
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs current="AI Job Search" path={aiJobSearchPath} />

      <header className="article-hero border-b border-library-parchment pb-14 pt-2 md:pb-20 md:pt-6">
        <div className="reading-surface max-w-5xl">
          <p className="eyebrow text-library-walnut">Article / AI and work</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-[0.98] sm:text-5xl md:text-7xl">
            {articleTitle}
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-library-ink md:text-2xl">
            If I was looking for a job right now, I would not start by asking
            AI for job titles. I would give it enough context to help me see
            where my skills, interests, and proof might matter.
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-library-muted">
            The prompts below are the sequence I would work through: figure out
            what I can offer, find sourced companies, research one employer at
            a time, test the overlap, and make a plan that matches the evidence.
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
              Download the prompts I would use
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

      <JobSearchPrivacyWarning />

      <TopicSectionNav sections={aiJobSearchSections} />

      <section
        id="overview"
        aria-labelledby="overview-title"
        className="article-section border-b border-library-parchment py-14 md:py-20"
      >
        <div className="job-search-section-grid">
          <div>
            <p className="type-label text-library-walnut">The approach</p>
            <h2 id="overview-title" className="mt-3 text-3xl font-semibold">
              I would start by figuring out what I have to offer
            </h2>
          </div>
          <div className="reading-surface space-y-5 text-lg leading-relaxed text-library-muted">
            <p>
              A lot of AI job-search advice starts too late. It jumps to a
              resume rewrite, a list of job titles, or a generic outreach
              message before the person has enough context about where they may
              actually be useful.
            </p>
            <p>
              If I was doing this, I would start with context. What have I done?
              What can I prove? What am I interested in? What constraints are
              real? Which claims would be dishonest or premature? Once that is
              clear, AI can help research employers and compare opportunities
              without pretending every company is a fit.
            </p>
            <p className="font-serif text-2xl font-medium leading-relaxed text-library-ink">
              I would not be trying to convince every employer to make room for
              me. I would be looking for places where I can point at something
              that matters to them and say, &quot;I can help with that.&quot;
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

      {aiJobSearchPrompts.map((prompt) => {
        const videoPlacement = videoPlacementFor(prompt.id);

        return (
          <section
            key={prompt.id}
            id={prompt.id}
            aria-labelledby={`${prompt.id}-title`}
            className="article-section border-b border-library-parchment py-14 md:py-20"
          >
            <div className="job-search-section-grid">
              <div>
                <p className="type-label text-library-walnut">
                  Copy/paste prompt
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
                {videoPlacement ? (
                  <ArticleVideoLink
                    video={videoPlacement.video}
                    part={videoPlacement.part}
                    total={jobSearchVideoTotal}
                  />
                ) : null}
              </div>
            </div>
            <PromptBlock
              label={`Copy/paste: ${prompt.title}`}
              text={prompt.copyPrompt}
            />
            <PromptExampleLinks prompt={prompt} />
          </section>
        );
      })}

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
            These examples use synthetic profiles to show what this approach
            can look like in different search situations: senior operators,
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
        <div className="job-search-section-grid">
          <div>
            <p className="type-label text-library-walnut">How to use it</p>
            <h2 id="how-to-use-it-title" className="mt-3 text-3xl font-semibold">
              Keep going and keep updating the context
            </h2>
          </div>
          <div className="reading-surface space-y-5 text-lg leading-relaxed text-library-muted">
            <p>
              I would do the prompts in order and keep the reusable artifact
              from each step, because the next step depends on it. When I learn
              something new from a posting, conversation, rejection, or company
              research, I would put that information back into the relevant
              thread and update the plan.
            </p>
            <p>
              Some people will not respond. Some conversations will show that
              the problem, role, or fit is different than I thought. That is
              still useful information. I would give it back to AI, ask what it
              changes, and keep moving across more than one company.
            </p>
            <EvidenceNote note={evidenceNotes.thinkingConfidence} />
            {howToUseVideoPlacement ? (
              <ArticleVideoLink
                video={howToUseVideoPlacement.video}
                part={howToUseVideoPlacement.part}
                total={jobSearchVideoTotal}
              />
            ) : null}
          </div>
        </div>
      </section>

      <section
        id="frequently-asked-questions"
        aria-labelledby="frequently-asked-questions-title"
        className="article-section border-b border-library-parchment py-14 md:py-20"
      >
        <div className="job-search-section-grid">
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
              Download the five prompts and try the same sequence on your search.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-library-muted">
              Start with the capability profile. Save it. Then use it to build
              the company list, employer research, overlap analysis, and
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
