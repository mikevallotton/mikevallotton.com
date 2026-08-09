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
    const videoId = video.videoId || video.youtubeVideoId;
    if (!videoId || seenVideoIds.has(videoId)) return false;
    seenVideoIds.add(videoId);
    return true;
  });

  const graph = uniqueVideos
    .filter((video) => {
      const url = video.url || video.youtubeUrl;
      const videoId = video.videoId || video.youtubeVideoId;
      const description = video.description || video.summary;
      return url && videoId && video.published && video.title && description;
    })
    .map((video) => {
      const url = video.url || video.youtubeUrl;
      const videoId = video.videoId || video.youtubeVideoId;
      const description = video.description || video.summary;

      return {
        "@type": "VideoObject",
        name: video.title,
        description,
        thumbnailUrl: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
        uploadDate: toIsoDate(video.published),
        embedUrl: `https://www.youtube.com/embed/${videoId}`,
        url,
        publisher: { "@id": `${siteConfig.siteUrl}/#person` },
        isPartOf: { "@id": `${siteConfig.siteUrl}${pagePath}` },
      };
    })
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
