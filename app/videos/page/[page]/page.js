import { notFound } from "next/navigation";
import VideoArchivePage from "../../../../components/VideoArchivePage";
import { withPageSocial } from "../../../../content/metadata";
import {
  getAllTopicVideos,
  pageCountForVideos,
  videosForArchivePage,
} from "../../../../content/videos";

const basePath = "/videos";
const description =
  "Short explanations about AI fluency, work, agents, search, software development, and human judgment.";

export function generateStaticParams() {
  const pageCount = pageCountForVideos(getAllTopicVideos());
  return Array.from({ length: pageCount - 1 }, (_, index) => ({
    page: String(index + 2),
  }));
}

export async function generateMetadata({ params }) {
  const page = Number((await params).page);
  const pageCount = pageCountForVideos(getAllTopicVideos());
  if (!Number.isInteger(page) || page < 2 || page > pageCount) return {};
  const title = `Videos — Page ${page}`;
  const path = `${basePath}/page/${page}`;
  return withPageSocial({
    title: { absolute: `${title} | Mike Vallotton` },
    description: `Page ${page} of ${description.charAt(0).toLowerCase()}${description.slice(1)}`,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: `Page ${page} of ${description.charAt(0).toLowerCase()}${description.slice(1)}`,
      url: path,
      type: "website",
    },
  });
}

export default async function VideosPaginationPage({ params }) {
  const page = Number((await params).page);
  const allVideos = getAllTopicVideos({ includeTranscript: true });
  const pageCount = pageCountForVideos(allVideos);
  if (!Number.isInteger(page) || page < 2 || page > pageCount) notFound();
  const path = `${basePath}/page/${page}`;
  return (
    <VideoArchivePage
      path={path}
      title={`Videos — Page ${page}`}
      description={description}
      videos={videosForArchivePage(allVideos, page)}
      totalVideos={allVideos.length}
      currentPage={page}
      pageCount={pageCount}
      pathForPage={(targetPage) => targetPage === 1 ? basePath : `${basePath}/page/${targetPage}`}
    />
  );
}
