import Link from "next/link";

export default function ContentContinuation({
  title,
  description,
  href,
  linkLabel,
  topicKey,
}) {
  return (
    <section className={`${topicKey ? `topic--${topicKey}` : ""} content-continuation mt-6 md:mt-10`}>
      <Link
        href={href}
        className="panel group block space-y-4 no-underline transition-transform duration-300 hover:-translate-y-1"
      >
        <p className="type-label text-library-walnut">
          Continue exploring
        </p>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="max-w-2xl leading-relaxed text-library-muted">
          {description}
        </p>
        <span className="inline-flex items-center gap-2 font-semibold">
          {linkLabel}
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </Link>
    </section>
  );
}
