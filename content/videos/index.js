import fs from "node:fs";
import path from "node:path";
import { videoTopics } from "./associations.js";

const itemsDirectory = path.join(process.cwd(), "content", "videos", "items");
const transcriptsDirectory = path.join(
  process.cwd(),
  "content",
  "videos",
  "transcripts",
);

let videoCache;

export const videoArchivePageSize = 18;

export function pageCountForVideos(videos = []) {
  return Math.max(1, Math.ceil(videos.length / videoArchivePageSize));
}

export function videosForArchivePage(videos = [], page = 1) {
  const start = (page - 1) * videoArchivePageSize;
  return videos.slice(start, start + videoArchivePageSize);
}

function readVideoRecords() {
  if (videoCache) return videoCache;

  videoCache = fs
    .readdirSync(itemsDirectory)
    .filter((filename) => filename.endsWith(".json"))
    .map((filename) => {
      const record = JSON.parse(
        fs.readFileSync(path.join(itemsDirectory, filename), "utf8"),
      );
      return {
        ...record,
        url: record.youtubeUrl,
        videoId: record.youtubeVideoId,
      };
    });

  return videoCache;
}

function withTranscript(video) {
  if (!video?.transcriptPath) return video;

  const transcriptPath = path.join(transcriptsDirectory, `${video.slug}.md`);
  if (!fs.existsSync(transcriptPath)) return video;

  return {
    ...video,
    transcript: fs.readFileSync(transcriptPath, "utf8").trim(),
  };
}

export function compareVideosByPublishedDesc(a, b) {
  const dateDifference = new Date(b.published).getTime() - new Date(a.published).getTime();
  return dateDifference || a.title.localeCompare(b.title);
}

export function compareVideosByPublishedAsc(a, b) {
  const dateDifference = new Date(a.published).getTime() - new Date(b.published).getTime();
  return dateDifference || a.title.localeCompare(b.title);
}

export function getVideoBySlug(slug, { includeTranscript = false } = {}) {
  const video = readVideoRecords().find((item) => item.slug === slug) || null;
  if (!video) return null;
  return includeTranscript ? withTranscript(video) : video;
}

export function getVideosByIds(videoIds = [], options = {}) {
  return videoIds
    .map((id) => getVideoBySlug(id, options))
    .filter(Boolean);
}

export function getVideoTopic(slug) {
  return videoTopics.find((topic) => topic.slug === slug) || null;
}

export function getVideoTopicBySourcePath(sourcePath) {
  return (
    videoTopics.find((topic) => topic.sourcePath === sourcePath) ||
    null
  );
}

export function getVideoSection(topic, sectionId) {
  return topic?.sections.find((section) => section.id === sectionId) || null;
}

export function getVideoArchivePath(topic, section) {
  if (!topic) return "/videos";
  return `/videos/${topic.slug}${section ? `/${section.id}` : ""}`;
}

export function getVideosForTopic(topic, options = {}) {
  const seen = new Set();
  const videoIds = topic.sections.flatMap((section) => section.videoIds);
  return getVideosByIds(
    videoIds.filter((id) => {
      if (seen.has(id)) return false;
      seen.add(id);
      return true;
    }),
    options,
  ).sort(compareVideosByPublishedAsc);
}

export function getVideosForSection(section, options = {}) {
  return getVideosByIds(section?.videoIds, options).sort(compareVideosByPublishedAsc);
}

export function getAllTopicVideos(options = {}) {
  const seen = new Set();
  return videoTopics
    .flatMap((topic) => topic.sections)
    .flatMap((section) => section.videoIds)
    .filter((id) => {
      if (seen.has(id)) return false;
      seen.add(id);
      return true;
    })
    .map((id) => getVideoBySlug(id, options))
    .filter(Boolean)
    .sort(compareVideosByPublishedAsc);
}

export { videoTopics };
