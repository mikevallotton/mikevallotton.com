import { unstable_cache } from "next/cache";
import { parseLatestYouTubeVideo } from "./youtubeFeedParser";

export const youtubeChannelId = "UClpM4lSPVu8v9rcQzxKbdrg";
export const youtubeFeedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${youtubeChannelId}`;
export const youtubeFeedRevalidateSeconds = 3600;

export const fallbackLatestVideo = {
  title: "AI Redesigns Marketing Work Through Task Automation",
  published: "2026-08-06T12:31:15+00:00",
  url: "https://www.youtube.com/shorts/hysaUcYuXx4",
  videoId: "hysaUcYuXx4",
  description:
    "AI shifts marketing from saving time to creating more value by enabling more experimentation, customer understanding, competitive analysis, and effective execution. It automates tasks, not roles, requiring work itself to be redesigned.",
  thumbnailUrl: "https://i.ytimg.com/vi/hysaUcYuXx4/hqdefault.jpg",
};

async function fetchLatestYouTubeVideo() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(youtubeFeedUrl, {
      headers: {
        "User-Agent": "mikevallotton.com latest content",
      },
      next: { revalidate: youtubeFeedRevalidateSeconds },
      signal: controller.signal,
    });

    if (!response.ok) return fallbackLatestVideo;

    return parseLatestYouTubeVideo(await response.text()) || fallbackLatestVideo;
  } catch {
    return fallbackLatestVideo;
  } finally {
    clearTimeout(timeout);
  }
}

export const getLatestYouTubeVideo = unstable_cache(
  fetchLatestYouTubeVideo,
  ["latest-youtube-video", youtubeChannelId],
  {
    revalidate: youtubeFeedRevalidateSeconds,
    tags: ["latest-youtube-video"],
  },
);
