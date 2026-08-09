import VideoArchivePage from "../../components/VideoArchivePage";
import { withPageSocial } from "../../content/metadata";
import {
  getAllTopicVideos,
  pageCountForVideos,
  videosForArchivePage,
} from "../../content/videos";

const path = "/videos";
const title = "Videos";
const description =
  "Short explanations about AI fluency, work, agents, search, software development, and human judgment.";

export const metadata = withPageSocial({
  title: { absolute: "Videos | Mike Vallotton" },
  description,
  alternates: { canonical: path },
  openGraph: { title: "Videos | Mike Vallotton", description, url: path, type: "website" },
});

export default function VideosPage() {
  const allVideos = getAllTopicVideos({ includeTranscript: true });
  return (
    <VideoArchivePage
      path={path}
      title={title}
      description={description}
      videos={videosForArchivePage(allVideos)}
      totalVideos={allVideos.length}
      pageCount={pageCountForVideos(allVideos)}
      pathForPage={(page) => page === 1 ? path : `${path}/page/${page}`}
    />
  );
}
