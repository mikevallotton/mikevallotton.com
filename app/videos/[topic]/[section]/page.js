import { notFound } from "next/navigation";
import VideoArchivePage from "../../../../components/VideoArchivePage";
import { withPageSocial } from "../../../../content/metadata";
import {
  getVideoArchivePath,
  getVideoSection,
  getVideosForSection,
  getVideoTopic,
  videoTopics,
} from "../../../../content/videos";

export function generateStaticParams() {
  return videoTopics.flatMap((topic) =>
    topic.sections.map((section) => ({ topic: topic.slug, section: section.id })),
  );
}

export async function generateMetadata({ params }) {
  const { topic: topicSlug, section: sectionSlug } = await params;
  const topic = getVideoTopic(topicSlug);
  const section = getVideoSection(topic, sectionSlug);
  if (!topic || !section) return {};
  const path = getVideoArchivePath(topic, section);
  const title = `${section.title} Videos`;
  const description = section.description;
  return withPageSocial({
    title: { absolute: `${title} | Mike Vallotton` },
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website" },
  });
}

export default async function VideoSectionPage({ params }) {
  const { topic: topicSlug, section: sectionSlug } = await params;
  const topic = getVideoTopic(topicSlug);
  const section = getVideoSection(topic, sectionSlug);
  if (!topic || !section) notFound();
  const path = getVideoArchivePath(topic, section);
  const title = `${section.title} Videos`;
  const description = section.description;
  const videos = getVideosForSection(section, { includeTranscript: true });
  return (
    <VideoArchivePage
      path={path}
      title={title}
      description={description}
      videos={videos}
      topic={topic}
      section={section}
    />
  );
}
