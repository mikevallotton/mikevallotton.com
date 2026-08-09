import { notFound } from "next/navigation";
import VideoArchivePage from "../../../components/VideoArchivePage";
import { withPageSocial } from "../../../content/metadata";
import {
  getVideoArchivePath,
  getVideosForTopic,
  getVideoTopic,
  pageCountForVideos,
  videoTopics,
  videosForArchivePage,
} from "../../../content/videos";

export function generateStaticParams() {
  return videoTopics.map((topic) => ({ topic: topic.slug }));
}

export async function generateMetadata({ params }) {
  const { topic: topicSlug } = await params;
  const topic = getVideoTopic(topicSlug);
  if (!topic) return {};
  const path = getVideoArchivePath(topic);
  return withPageSocial({
    title: { absolute: `${topic.title} | Mike Vallotton` },
    description: topic.description,
    alternates: { canonical: path },
    openGraph: { title: topic.title, description: topic.description, url: path, type: "website" },
  });
}

export default async function VideoTopicPage({ params }) {
  const { topic: topicSlug } = await params;
  const topic = getVideoTopic(topicSlug);
  if (!topic) notFound();
  const path = getVideoArchivePath(topic);
  const allVideos = getVideosForTopic(topic, { includeTranscript: true });
  return (
    <VideoArchivePage
      path={path}
      title={topic.title}
      description={topic.description}
      videos={videosForArchivePage(allVideos)}
      totalVideos={allVideos.length}
      topic={topic}
      pageCount={pageCountForVideos(allVideos)}
      pathForPage={(page) => page === 1 ? path : `${path}/page/${page}`}
    />
  );
}
