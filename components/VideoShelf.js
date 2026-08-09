import Link from "next/link";
import { getVideosByIds } from "../content/videos";
import VideoGrid from "./VideoGrid";

export default function VideoShelf({
  videos,
  videoIds,
  articles,
  limit = 3,
  moreHref,
  moreLabel = "View all related videos",
}) {
  const resolvedVideos = videos || getVideosByIds(videoIds);
  const visibleVideos =
    typeof limit === "number" ? resolvedVideos.slice(0, limit) : resolvedVideos;
  const hasOverflow =
    typeof limit === "number" && resolvedVideos.length > visibleVideos.length;

  if (!visibleVideos.length && !articles?.length) return null;

  return (
    <div className="video-shelf">
      <VideoGrid videos={visibleVideos} articles={articles} />
      {hasOverflow && moreHref ? (
        <Link href={moreHref} className="video-shelf__more no-underline">
          {moreLabel} <span aria-hidden="true">→</span>
        </Link>
      ) : null}
    </div>
  );
}
