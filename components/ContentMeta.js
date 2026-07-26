import Link from "next/link";

export default function ContentMeta({
  showAuthor = true,
  published,
  publishedLabel,
  updated,
  updatedLabel,
  className = "",
}) {
  const items = [];

  if (showAuthor) {
    items.push(
      <Link key="author" href="/about" rel="author">
        Mike Vallotton
      </Link>,
      <span key="role">Chief Technology Officer</span>,
    );
  }

  if (published) {
    items.push(
      <time key="published" dateTime={published}>
        Published {publishedLabel}
      </time>,
    );
  }

  if (updated) {
    items.push(
      <time key="updated" dateTime={updated}>
        {showAuthor || published ? "Updated" : "Last updated"} {updatedLabel}
      </time>,
    );
  }

  return (
    <p className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-library-muted ${className}`}>
      {items.map((item, index) => (
        <span key={item.key} className="contents">
          {index > 0 ? <span aria-hidden="true">·</span> : null}
          {item}
        </span>
      ))}
    </p>
  );
}
