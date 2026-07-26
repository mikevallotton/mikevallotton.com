import Breadcrumbs from "../Breadcrumbs";
import FurtherReading from "../FurtherReading";
import JsonLd from "../JsonLd";
import VideoStructuredData from "../VideoStructuredData";
import ContentContinuation from "../ContentContinuation";
import TopicHero from "./TopicHero";
import TopicAudience from "./TopicAudience";
import TopicSection from "./TopicSection";
import TopicImage from "./TopicImage";
import TopicSectionNav from "./TopicSectionNav";

export default function TopicPage({
  topicKey,
  articleSchema,
  faqSchema,
  path,
  breadcrumb,
  hero,
  audience,
  audienceEyebrow,
  sections,
  getFaqItems,
  sources,
  afterSections,
  next,
  sidebar,
}) {
  return (
    <article className={`topic-page topic--${topicKey}`}>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <VideoStructuredData
        videos={sections.flatMap((section) => section.videos || [])}
        pagePath={path}
      />
      <Breadcrumbs current={breadcrumb} path={path} />
      <TopicHero {...hero} />
      <TopicAudience items={audience} eyebrow={audienceEyebrow} />
      <TopicSectionNav sections={sections} />
      <div className={sidebar ? "topic-sections-layout" : ""}>
        <div className="topic-sections-layout__content">
          {sections.map((section) => (
            <TopicSection
              key={section.id}
              section={section}
              faqItems={getFaqItems?.(section)}
            />
          ))}
        </div>
        {sidebar ? (
          <aside className="topic-sections-layout__aside" aria-hidden="true">
            <TopicImage {...sidebar} variant="sidebar" />
          </aside>
        ) : null}
      </div>
      {afterSections}
      <FurtherReading sources={sources} />
      <ContentContinuation {...next} />
    </article>
  );
}
