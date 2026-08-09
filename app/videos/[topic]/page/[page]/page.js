import { notFound } from "next/navigation";
import VideoArchivePage from "../../../../../components/VideoArchivePage";
import { withPageSocial } from "../../../../../content/metadata";
import {
  getVideoArchivePath,
  getVideosForTopic,
  getVideoTopic,
  pageCountForVideos,
  videoTopics,
  videosForArchivePage,
} from "../../../../../content/videos";

export function generateStaticParams() {
  return videoTopics.flatMap((topic) => {
    const pageCount = pageCountForVideos(getVideosForTopic(topic));
    return Array.from({ length: pageCount - 1 }, (_, index) => ({
      topic: topic.slug,
      page: String(index + 2),
    }));
  });
}

export async function generateMetadata({ params }) {
  const { topic: topicSlug, page: pageValue } = await params;
  const topic = getVideoTopic(topicSlug);
  const page = Number(pageValue);
  if (!topic) return {};
  const pageCount = pageCountForVideos(getVideosForTopic(topic));
  if (!Number.isInteger(page) || page < 2 || page > pageCount) return {};
  const basePath = getVideoArchivePath(topic);
  const path = `${basePath}/page/${page}`;
  const title = `${topic.title} — Page ${page}`;
  const description = `Page ${page} of ${topic.description.charAt(0).toLowerCase()}${topic.description.slice(1)}`;
  return withPageSocial({
    title: { absolute: `${title} | Mike Vallotton` },
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website" },
  });
}

export default async function VideoTopicPaginationPage({ params }) {
  const { topic: topicSlug, page: pageValue } = await params;
  const topic = getVideoTopic(topicSlug);
  const page = Number(pageValue);
  if (!topic) notFound();
  const allVideos = getVideosForTopic(topic, { includeTranscript: true });
  const pageCount = pageCountForVideos(allVideos);
  if (!Number.isInteger(page) || page < 2 || page > pageCount) notFound();
  const basePath = getVideoArchivePath(topic);
  const path = `${basePath}/page/${page}`;
  return (
    <VideoArchivePage
      path={path}
      title={`${topic.title} — Page ${page}`}
      description={topic.description}
      videos={videosForArchivePage(allVideos, page)}
      totalVideos={allVideos.length}
      topic={topic}
      currentPage={page}
      pageCount={pageCount}
      pathForPage={(targetPage) => targetPage === 1 ? basePath : `${basePath}/page/${targetPage}`}
    />
  );
}
