import Breadcrumbs from "../Breadcrumbs";
import FurtherReading from "../FurtherReading";
import JsonLd from "../JsonLd";
import VideoStructuredData from "../VideoStructuredData";
import ContentContinuation from "../ContentContinuation";
import {
  compareVideosByPublishedDesc,
  getVideoSection,
  getVideoTopicBySourcePath,
  getVideosByIds,
} from "../../content/videos";
import TopicHero from "./TopicHero";
import TopicAudience from "./TopicAudience";
import TopicSection from "./TopicSection";
import TopicImage from "./TopicImage";
import TopicSectionNav from "./TopicSectionNav";

function getSectionVideos(section, archiveSection) {
  const videos = archiveSection
    ? getVideosByIds(archiveSection.videoIds)
    : section.videos || getVideosByIds(section.videoIds);

  return [...videos].sort(compareVideosByPublishedDesc);
}

export default function TopicPage({
  topicKey,
  articleSchema,
  faqSchema,
  path,
  breadcrumb,
  hero,
  audience,
  audienceEyebrow,
  sectionTitles,
  sections,
  getFaqItems,
  sources,
  afterSections,
  next,
  sidebar,
}) {
  const videoTopic = getVideoTopicBySourcePath(path);
  const sectionsWithVideos = sections.map((section) => {
    const archiveSection = getVideoSection(videoTopic, section.id);
    const videos = getSectionVideos(section, archiveSection);

    return { section, archiveSection, videos };
  });
  const visibleVideos = sectionsWithVideos.flatMap(({ videos }) =>
    videos.slice(0, 3),
  );

  return (
    <article className={`topic-page topic--${topicKey}`}>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <VideoStructuredData videos={visibleVideos} pagePath={path} />
      <Breadcrumbs current={breadcrumb} path={path} />
      <TopicHero {...hero} />
      <TopicAudience
        items={audience}
        eyebrow={audienceEyebrow}
        title={sectionTitles?.audience}
      />
      <TopicSectionNav sections={sections} />
      <div className={sidebar ? "topic-sections-layout" : ""}>
        <div className="topic-sections-layout__content">
          {sectionsWithVideos.map(({ section, archiveSection, videos }) => (
            <TopicSection
              key={section.id}
              section={section}
              faqItems={getFaqItems?.(section)}
              videoTopic={videoTopic}
              archiveSection={archiveSection}
              videos={videos}
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
      <FurtherReading sources={sources} title={sectionTitles?.evidence} />
      <ContentContinuation {...next} />
    </article>
  );
}
