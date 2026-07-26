import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 19 19 5M9 5h10v10" />
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

export function ArticleCard({ article }) {
  return (
    <Link
      href={article.href}
      className="group grid grid-cols-[7.25rem_1fr] overflow-hidden rounded-xl border border-library-parchment bg-library-paper no-underline transition hover:-translate-y-0.5 hover:border-library-walnut hover:shadow-[0_12px_30px_rgba(14,47,37,0.12)] sm:block"
    >
      <div className="relative aspect-[9/16] min-h-[12.75rem] overflow-hidden bg-library-forest sm:group-hover:brightness-95">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px),radial-gradient(circle_at_80%_12%,rgba(46,233,209,0.38),transparent_45%),linear-gradient(145deg,rgba(63,124,255,0.42),rgba(14,47,37,0.2)_62%)] bg-[length:28px_28px,28px_28px,auto,auto]"
        />
        <p className="absolute left-4 top-5 max-w-[7ch] font-serif text-3xl font-semibold leading-[0.9] text-library-paper sm:left-5 sm:top-7 sm:text-4xl">
          Better information. Better judgment.
        </p>
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <span className="hidden rounded-full border border-library-paper/25 bg-library-ink/20 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-library-paper/80 backdrop-blur sm:inline-flex">
            Read article
          </span>
          <span className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-library-paper text-library-forest shadow-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowIcon />
          </span>
        </div>
      </div>
      <div className="flex min-w-0 flex-col justify-center p-4 sm:min-h-[10.5rem] sm:justify-start sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-library-walnut">
          {article.category || "Article"}
        </p>
        <h3 className="mt-2 text-lg font-semibold leading-snug">
          {article.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-library-muted">
          {article.description}
        </p>
        {article.published ? (
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-library-walnut">
            {formatPublishedDate(article.published)}
          </p>
        ) : null}
      </div>
    </Link>
  );
}
