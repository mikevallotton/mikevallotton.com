import Link from "next/link";

export default function RelatedConcepts({ links }) {
  if (!links?.length) return null;

  return (
    <nav aria-label="Related concepts" className="mt-6 flex flex-wrap items-center gap-2 text-sm">
      <span className="font-semibold text-library-ink">Related:</span>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="topic-destination-link pill no-underline"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
