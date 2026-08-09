import Link from "next/link";
import Image from "next/image";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="latest-content-card__icon">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="latest-content-card__play">
      <path d="M8 5.5v13l10-6.5L8 5.5z" />
    </svg>
  );
}

function formatPublishedDate(value) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

function previewText(value) {
  if (!value) return "";
  return value.length > 190 ? `${value.slice(0, 187).trim()}...` : value;
}

function ArticleLatestCard({ article }) {
  if (!article) return null;

  return (
    <Link href={article.href} className="latest-content-card latest-content-card--article no-underline">
      <span className="latest-content-card__body">
        <span className="latest-content-card__label">Latest article</span>
        <span className="latest-content-card__title">{article.title}</span>
        <span className="latest-content-card__description">
          {previewText(article.description)}
        </span>
        {article.published ? (
          <span className="latest-content-card__meta">
            {formatPublishedDate(article.published)}
          </span>
        ) : null}
      </span>
      <ArrowIcon />
    </Link>
  );
}

function VideoLatestCard({ video }) {
  if (!video) return null;

  const thumbnailUrl =
    video.thumbnailUrl || `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`;

  return (
    <a
      href={video.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`${video.title} on YouTube (opens in a new tab)`}
      className="latest-content-card latest-content-card--video no-underline"
    >
      <span
        className="latest-content-card__thumb"
        aria-hidden="true"
      >
        <Image src={thumbnailUrl} alt="" fill sizes="(min-width: 768px) 18rem, 40vw" />
        <span>
          <PlayIcon />
        </span>
      </span>
      <span className="latest-content-card__body">
        <span className="latest-content-card__label">Latest video</span>
        <span className="latest-content-card__title">{video.title}</span>
        <span className="latest-content-card__description">
          {previewText(video.description)}
        </span>
        {video.published ? (
          <span className="latest-content-card__meta">
            {formatPublishedDate(video.published)}
          </span>
        ) : null}
      </span>
    </a>
  );
}

export default function LatestContent({
  article,
  video,
  heading = "Latest from Mike",
  headingId = "latest-content-title",
  headingLevel = "h2",
  variant = "default",
  className = "",
  showHeading = true,
}) {
  if (!article && !video) return null;

  const Heading = headingLevel;
  const labelledBy = showHeading ? { "aria-labelledby": headingId } : { "aria-label": heading };

  return (
    <section
      className={`latest-content latest-content--${variant} ${className}`.trim()}
      {...labelledBy}
    >
      {showHeading ? (
        <div className="latest-content__heading">
          <p className="type-label text-library-walnut">Latest</p>
          <Heading id={headingId}>{heading}</Heading>
        </div>
      ) : null}
      <div className="latest-content__grid">
        <ArticleLatestCard article={article} />
        <VideoLatestCard video={video} />
      </div>
    </section>
  );
}
