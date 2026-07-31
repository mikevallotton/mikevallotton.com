import Breadcrumbs from "../Breadcrumbs";
import ContentMeta from "../ContentMeta";
import EvidenceNote from "../EvidenceNote";
import FurtherReading from "../FurtherReading";
import JsonLd from "../JsonLd";
import RelatedConcepts from "../RelatedConcepts";
import VideoGrid from "../VideoGrid";
import VideoStructuredData from "../VideoStructuredData";
import { evidenceNotes, sourcesFor } from "../../content/evidence";
import { operatingPrinciples } from "../../content/operatingPrinciples";
import { siteConfig } from "../../content/siteConfig";

export const operatingPrinciplePublished = "2026-07-30";
export const operatingPrinciplePublishedLabel = "July 30, 2026";

export function metadataForOperatingPrinciple(slug) {
  const principle = operatingPrinciples[slug];
  const path = `/${slug}`;

  return {
    title: {
      absolute: `${principle.title} | Practical AI Guidance`,
    },
    description: principle.description,
    alternates: { canonical: path },
    openGraph: {
      title: principle.title,
      description: principle.description,
      url: path,
      type: "article",
      publishedTime: operatingPrinciplePublished,
      authors: [`${siteConfig.siteUrl}/about`],
    },
  };
}

function schemaForOperatingPrinciple(principle, path) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: principle.title,
    description: principle.description,
    datePublished: operatingPrinciplePublished,
    dateModified: operatingPrinciplePublished,
    mainEntityOfPage: `${siteConfig.siteUrl}${path}`,
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
  };
}

export default function OperatingPrinciplePage({ slug }) {
  const principle = operatingPrinciples[slug];
  const path = `/${slug}`;

  return (
    <article className={`article-page topic--${principle.topicKey}`}>
      <JsonLd data={schemaForOperatingPrinciple(principle, path)} />
      <VideoStructuredData videos={principle.videos} pagePath={path} />
      <Breadcrumbs current={principle.title} path={path} />

      <header className="article-hero border-b border-library-parchment pb-14 pt-2 md:pb-20 md:pt-6">
        <div className="reading-surface max-w-5xl">
          <p className="eyebrow text-library-walnut">Operating Principle</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] sm:text-6xl md:text-7xl">
            {principle.title}
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-library-ink md:text-2xl">
            {principle.lead}
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-library-muted">
            {principle.introduction}
          </p>
          <ContentMeta
            published={operatingPrinciplePublished}
            publishedLabel={operatingPrinciplePublishedLabel}
            className="mt-6"
          />
        </div>
      </header>

      {principle.sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          aria-labelledby={`${section.id}-title`}
          className="article-section scroll-mt-36 border-b border-library-parchment py-14 md:py-20"
        >
          <div className="reading-surface max-w-3xl">
            <p className="eyebrow text-library-walnut">{section.eyebrow}</p>
            <h2
              id={`${section.id}-title`}
              className="mt-3 text-3xl font-semibold md:text-4xl"
            >
              {section.title}
            </h2>
            <div className="mt-5 space-y-5 text-lg leading-relaxed text-library-muted">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {section.checklist ? (
              <ul className="mt-7 space-y-3 border-l-2 border-library-walnut pl-5 text-library-ink">
                {section.checklist.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="text-library-walnut">
                      {"\u2022"}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {section.evidence?.map((noteName) => (
              <EvidenceNote key={noteName} note={evidenceNotes[noteName]} />
            ))}
            <RelatedConcepts links={section.links} />
          </div>
        </section>
      ))}

      {principle.videos.length ? (
        <section
          aria-labelledby="related-video-title"
          className="border-b border-library-parchment py-14 md:py-20"
        >
          <div className="reading-surface max-w-3xl">
            <p className="eyebrow text-library-walnut">Related video</p>
            <h2 id="related-video-title" className="mt-3 text-3xl font-semibold">
              The principle in brief
            </h2>
          </div>
          <VideoGrid videos={principle.videos} />
        </section>
      ) : null}

      <FurtherReading sources={sourcesFor(principle.sourceNotes)} />
    </article>
  );
}
