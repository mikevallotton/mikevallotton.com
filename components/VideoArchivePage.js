import Breadcrumbs from "./Breadcrumbs";
import JsonLd from "./JsonLd";
import VideoArchiveFilters from "./VideoArchiveFilters";
import VideoArchiveList from "./VideoArchiveList";
import VideoStructuredData from "./VideoStructuredData";
import Pagination from "./Pagination";
import {
  getVideoArchivePath,
  videoArchivePageSize,
  videoTopics,
} from "../content/videos";
import { siteConfig } from "../content/siteConfig";

export default function VideoArchivePage({
  path,
  title,
  description,
  videos,
  totalVideos = videos.length,
  topic,
  section,
  currentPage = 1,
  pageCount = 1,
  pathForPage,
}) {
  const ancestors = path === "/videos" ? [] : [{ name: "Videos", href: "/videos" }];
  if (section || (topic && currentPage > 1)) {
    ancestors.push({ name: topic.title, href: getVideoArchivePath(topic) });
  }
  const firstResult = (currentPage - 1) * videoArchivePageSize + 1;
  const lastResult = Math.min(firstResult + videos.length - 1, totalVideos);
  const resultsLabel = pageCount > 1
    ? `Showing ${firstResult}–${lastResult} of ${totalVideos} videos`
    : `${totalVideos} ${totalVideos === 1 ? "video" : "videos"}`;
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteConfig.siteUrl}${path}`,
    name: title,
    description,
    url: `${siteConfig.siteUrl}${path}`,
    publisher: { "@id": `${siteConfig.siteUrl}/#person` },
  };

  return (
    <article className="article-page">
      <JsonLd data={pageSchema} />
      <VideoStructuredData videos={videos} pagePath={path} />
      <Breadcrumbs
        current={currentPage > 1 ? `Page ${currentPage}` : title}
        path={path}
        ancestors={ancestors}
      />

      <header className="article-hero border-b border-library-parchment pb-14 pt-2 md:pb-20 md:pt-6">
        <div className="reading-surface max-w-5xl">
          <p className="eyebrow text-library-walnut">Video library</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] sm:text-6xl md:text-7xl">
            {title}
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-library-ink md:text-2xl">
            {description}
          </p>
        </div>
      </header>

      <section aria-labelledby="video-results-title" className="article-section py-14 md:py-20">
        <div className="reading-surface max-w-3xl">
          <p className="type-label text-library-walnut">Browse the library</p>
          <h2 id="video-results-title" className="mt-3 text-3xl font-semibold md:text-4xl">
            {resultsLabel}
          </h2>
          <VideoArchiveFilters
            topics={videoTopics}
            selectedTopic={topic?.slug}
            selectedSection={section?.id}
            currentPage={currentPage}
          />
        </div>
        <VideoArchiveList videos={videos} />
        {pathForPage ? (
          <Pagination currentPage={currentPage} pageCount={pageCount} pathForPage={pathForPage} />
        ) : null}
      </section>
    </article>
  );
}
