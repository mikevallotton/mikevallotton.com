import Link from "next/link";
import { getVideoArchivePath } from "../content/videos";

export default function VideoArchiveFilters({
  topics,
  selectedTopic,
  selectedSection,
  currentPage = 1,
}) {
  const topic = topics.find((item) => item.slug === selectedTopic);

  return (
    <nav className="video-archive-filters" aria-label="Filter videos">
      <div>
        <p>Topic</p>
        <div className="video-archive-filters__options">
          <Link
            href="/videos"
            aria-current={!topic && currentPage === 1 ? "page" : undefined}
          >
            All topics
          </Link>
          {topics.map((item) => (
            <Link
              key={item.slug}
              href={getVideoArchivePath(item)}
              aria-current={
                item.slug === selectedTopic && !selectedSection && currentPage === 1
                  ? "page"
                  : undefined
              }
            >
              {item.title.replace(/ Videos$/, "")}
            </Link>
          ))}
        </div>
      </div>
      {topic ? (
        <div>
          <p>Section</p>
          <div className="video-archive-filters__options">
            <Link
              href={getVideoArchivePath(topic)}
              aria-current={!selectedSection ? "page" : undefined}
            >
              All sections
            </Link>
            {topic.sections.map((section) => (
              <Link
                key={section.id}
                href={getVideoArchivePath(topic, section)}
                aria-current={section.id === selectedSection ? "page" : undefined}
              >
                {section.title}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
