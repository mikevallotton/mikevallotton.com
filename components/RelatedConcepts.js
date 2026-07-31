import Link from "next/link";

export default function RelatedConcepts({ links }) {
  if (!links?.length) return null;

  return (
    <nav aria-label="Related concepts" className="mt-7">
      <p className="type-label text-library-walnut">Explore related ideas</p>
      <div className="mt-3 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:gap-x-7">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group inline-flex items-center gap-2 border-b border-library-walnut/50 pb-0.5 font-semibold text-library-ink no-underline transition-colors hover:border-library-ink"
          >
            {link.label}
            <span
              aria-hidden="true"
              className="text-library-walnut transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
