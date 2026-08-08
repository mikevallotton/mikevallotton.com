import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../../../../components/Breadcrumbs";
import ContentContinuation from "../../../../../components/ContentContinuation";
import ContentMeta from "../../../../../components/ContentMeta";
import JsonLd from "../../../../../components/JsonLd";
import SemanticMarkdown from "../../../../../components/SemanticMarkdown";
import TopicSectionNav from "../../../../../components/topic/TopicSectionNav";
import {
  aiJobSearchDescription,
  aiJobSearchExampleCases,
  aiJobSearchPath,
  getAiJobSearchExample,
} from "../../../../../content/aiJobSearch";
import { siteConfig } from "../../../../../content/siteConfig";

const published = "2026-08-08";

export function generateStaticParams() {
  return aiJobSearchExampleCases.map((example) => ({ slug: example.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const example = getAiJobSearchExample(slug);
  if (!example) return {};

  const title = `${example.title} | AI Job Search Example`;
  const description = `${example.description} Review the synthetic input and five workflow outputs.`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: example.path },
    openGraph: {
      title,
      description,
      url: example.path,
      type: "article",
      publishedTime: published,
      authors: [`${siteConfig.siteUrl}/about`],
    },
  };
}

export default async function AiJobSearchExamplePage({ params }) {
  const { slug } = await params;
  const example = getAiJobSearchExample(slug);
  if (!example) notFound();

  const sections = [
    { id: "input", title: "Synthetic input", navTitle: "Input" },
    ...example.outputs.map((output) => ({
      id: output.id,
      title: output.title,
      navTitle: output.number,
    })),
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${example.title} | AI Job Search Example`,
    description: example.description,
    datePublished: published,
    dateModified: published,
    mainEntityOfPage: `${siteConfig.siteUrl}${example.path}`,
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
    isPartOf: {
      "@type": "Article",
      name: "Use AI to Find Work Where You Can Be Useful",
      url: `${siteConfig.siteUrl}${aiJobSearchPath}`,
      description: aiJobSearchDescription,
    },
  };

  return (
    <article className="article-page article-page--job-search">
      <JsonLd data={articleSchema} />
      <Breadcrumbs current={example.title} path={example.path} />

      <header className="article-hero border-b border-library-parchment pb-14 pt-2 md:pb-20 md:pt-6">
        <div className="reading-surface max-w-5xl">
          <p className="eyebrow text-library-walnut">
            AI job search example / {example.label}
          </p>
          <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-[0.98] sm:text-5xl md:text-7xl">
            {example.title}
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-library-ink md:text-2xl">
            {example.description}
          </p>
          <div className="job-search-example-meta mt-7">
            <span>{example.profileName}</span>
            <span>{example.target}</span>
          </div>
          <ContentMeta
            published={published}
            publishedLabel="August 8, 2026"
            className="mt-6"
          />
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={aiJobSearchPath} className="btn btn-primary no-underline">
              Back to the workflow
            </Link>
            <Link
              href={`${aiJobSearchPath}#examples`}
              className="btn btn-secondary no-underline"
            >
              View all examples
            </Link>
          </div>
        </div>
      </header>

      <TopicSectionNav sections={sections} />

      <section
        id="input"
        aria-labelledby="input-title"
        className="article-section border-b border-library-parchment py-14 md:py-20"
      >
        <div className="reading-surface max-w-3xl">
          <p className="type-label text-library-walnut">Input</p>
          <h2 id="input-title" className="mt-3 text-3xl font-semibold md:text-4xl">
            Synthetic profile and target employer
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-library-muted">
            This is the profile information supplied to the workflow. The
            employer listed here is the company used for the full research,
            overlap, and approach-planning sequence.
          </p>
        </div>
        <SemanticMarkdown
          text={example.inputMarkdown}
          className="job-search-example-content"
        />
      </section>

      {example.outputs.map((output) => (
        <section
          key={output.id}
          id={output.id}
          aria-labelledby={`${output.id}-title`}
          className="article-section border-b border-library-parchment py-14 md:py-20"
        >
          <div className="reading-surface max-w-3xl">
            <p className="type-label text-library-walnut">
              Prompt {output.number} output
            </p>
            <h2
              id={`${output.id}-title`}
              className="mt-3 text-3xl font-semibold md:text-4xl"
            >
              {output.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-library-muted">
              This is the output from prompt {output.number} for the{" "}
              {example.label.toLowerCase()} example. It shows the level of
              grounding, skepticism, and practical detail the workflow is meant
              to produce before moving to the next step.
            </p>
          </div>
          <SemanticMarkdown
            text={output.output}
            className="job-search-example-content"
          />
        </section>
      ))}

      <ContentContinuation
        title="Use the five-prompt workflow"
        description="Read the main article, copy the prompts, and run the same sequence on your own search."
        href={aiJobSearchPath}
        linkLabel="Back to AI Job Search"
        topicKey="work"
      />
    </article>
  );
}
