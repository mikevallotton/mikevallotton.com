import { siteConfig } from "../content/siteConfig";

function toIsoDate(value) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toISOString().slice(0, 10);
}

export default function VideoStructuredData({ videos, pagePath }) {
  const seenVideoIds = new Set();
  const uniqueVideos = videos.filter((video) => {
    if (!video.videoId || seenVideoIds.has(video.videoId)) return false;
    seenVideoIds.add(video.videoId);
    return true;
  });

  const graph = uniqueVideos
    .filter(
      (video) =>
        video.url &&
        video.videoId &&
        video.published &&
        video.title &&
        video.description,
    )
    .map((video) => ({
      "@type": "VideoObject",
      name: video.title,
      description: video.description,
      thumbnailUrl: `https://i.ytimg.com/vi/${video.videoId}/maxresdefault.jpg`,
      uploadDate: toIsoDate(video.published),
      contentUrl: video.url,
      embedUrl: `https://www.youtube.com/embed/${video.videoId}`,
      url: video.url,
      publisher: { "@id": `${siteConfig.siteUrl}/#person` },
      isPartOf: { "@id": `${siteConfig.siteUrl}${pagePath}` },
    }))
    .filter((video) => video.uploadDate);

  if (!graph.length) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}
