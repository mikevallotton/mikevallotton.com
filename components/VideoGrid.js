function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M8 5.5v13l10-6.5L8 5.5z" />
    </svg>
  );
}

function formatPublishedDate(value) {
  if (!value) return "Date pending";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function VideoCard({ video }) {
  const available = Boolean(video.url);
  const cardClassName =
    "group grid grid-cols-[7.25rem_1fr] overflow-hidden rounded-xl border border-library-parchment bg-library-paper sm:block";
  const cardContent = (
    <>
      <div
        className="relative aspect-[9/16] min-h-[12.75rem] overflow-hidden bg-library-forest bg-cover bg-center transition sm:group-hover:brightness-90"
        style={
          available
            ? {
                backgroundImage: `linear-gradient(to top, rgba(14, 47, 37, 0.72), rgba(14, 47, 37, 0.04) 50%), url("https://i.ytimg.com/vi/${video.videoId}/maxresdefault.jpg")`,
              }
            : undefined
        }
      >
        <div
          aria-hidden="true"
          className={`absolute inset-0 ${
            available
              ? ""
              : "bg-[radial-gradient(circle_at_25%_20%,rgba(221,227,218,0.22),transparent_34%),linear-gradient(145deg,transparent_35%,rgba(141,110,82,0.28)_35%,rgba(141,110,82,0.28)_58%,transparent_58%)]"
          }`}
        />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="hidden rounded-full border border-library-paper/25 bg-library-ink/20 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-library-paper/80 backdrop-blur sm:inline-flex">
            {available ? "Watch video" : "Link pending"}
          </span>
          <span className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-library-paper text-library-forest shadow-sm">
            <PlayIcon />
          </span>
        </div>
      </div>
      <div className="flex min-w-0 flex-col justify-center p-4 sm:min-h-[10.5rem] sm:justify-start sm:p-5">
        <h3 className="text-lg font-semibold leading-snug">{video.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-library-muted">
          {video.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-[0.12em] text-library-walnut">
          <span>{formatPublishedDate(video.published)}</span>
          {!available ? (
            <>
              <span aria-hidden="true">·</span>
              <span>Link pending</span>
            </>
          ) : null}
        </div>
      </div>
    </>
  );

  return available ? (
    <a
      href={video.url}
      target="_blank"
      rel="noreferrer"
      className={`${cardClassName} no-underline transition hover:-translate-y-0.5 hover:border-library-walnut hover:shadow-[0_12px_30px_rgba(14,47,37,0.12)]`}
    >
      {cardContent}
    </a>
  ) : (
    <article className={cardClassName}>{cardContent}</article>
  );
}

export default function VideoGrid({ videos, articles }) {
  if (!videos?.length && !articles?.length) return null;

  return (
    <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {articles?.map((article) => (
        <ArticleCard key={article.href} article={article} />
      ))}
      {videos?.map((video) => (
        <VideoCard key={video.title} video={video} />
      ))}
    </div>
  );
}
import { ArticleCard } from "./article/ArticleGrid";
