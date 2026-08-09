function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function stripCdata(value) {
  return value.replace(/^<!\[CDATA\[([\s\S]*)\]\]>$/i, "$1");
}

export function decodeXml(value = "") {
  return stripCdata(value)
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, codePoint) => String.fromCodePoint(Number(codePoint)))
    .replace(/&#x([0-9a-f]+);/gi, (_, codePoint) =>
      String.fromCodePoint(Number.parseInt(codePoint, 16)),
    );
}

function normalizeText(value) {
  return decodeXml(value).replace(/\s+/g, " ").trim();
}

function firstTagText(source, tagName) {
  const tag = escapeRegExp(tagName);
  const match = source.match(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match ? normalizeText(match[1]) : "";
}

function parseAttributes(value) {
  return Object.fromEntries(
    [...value.matchAll(/([:\w-]+)\s*=\s*"([^"]*)"/g)].map(([, name, content]) => [
      name,
      decodeXml(content),
    ]),
  );
}

function firstElementAttributes(source, tagName, predicate = () => true) {
  const tag = escapeRegExp(tagName);
  const pattern = new RegExp(`<${tag}\\b([^>]*)\\/?\\s*>`, "gi");
  for (const match of source.matchAll(pattern)) {
    const attributes = parseAttributes(match[1]);
    if (predicate(attributes)) return attributes;
  }
  return {};
}

function fallbackVideoUrl(videoId) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

function canonicalThumbnailUrl(videoId) {
  return videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : "";
}

export function parseYouTubeFeed(xml) {
  if (!xml) return [];

  return [...xml.matchAll(/<entry\b[^>]*>([\s\S]*?)<\/entry>/gi)]
    .map(([, entry]) => {
      const videoId =
        firstTagText(entry, "yt:videoId") ||
        firstTagText(entry, "id").replace(/^yt:video:/, "");
      const alternateLink = firstElementAttributes(
        entry,
        "link",
        (attributes) => attributes.rel === "alternate" && Boolean(attributes.href),
      );
      const title = firstTagText(entry, "media:title") || firstTagText(entry, "title");

      return {
        title,
        published: firstTagText(entry, "published"),
        url: alternateLink.href || (videoId ? fallbackVideoUrl(videoId) : ""),
        videoId,
        description: firstTagText(entry, "media:description"),
        thumbnailUrl: canonicalThumbnailUrl(videoId),
      };
    })
    .filter((video) => video.title && video.published && video.url && video.videoId);
}

export function parseLatestYouTubeVideo(xml) {
  return parseYouTubeFeed(xml)[0] || null;
}
