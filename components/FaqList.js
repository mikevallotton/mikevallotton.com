function Answer({ answer }) {
  const paragraphs = Array.isArray(answer)
    ? answer
    : typeof answer === "string"
      ? answer.split("\n\n")
      : [answer];

  return (
    <div className="max-w-2xl space-y-3 whitespace-pre-line pb-6 pr-8 leading-relaxed text-library-muted">
      {paragraphs.map((paragraph, index) => (
        <p key={typeof paragraph === "string" ? paragraph : index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default function FaqList({ items, className = "", label }) {
  if (!items?.length) return null;

  return (
    <div className={`faq-surface ${className}`}>
      {label ? (
        <p className="type-label mb-3 text-library-walnut">
          {label}
        </p>
      ) : null}
      <div className="divide-y divide-library-parchment border-y border-library-parchment">
        {items.map((item) => (
          <details key={item.question} className="group py-1">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-5 text-left font-sans text-xl font-semibold leading-snug text-library-ink marker:content-none">
              <span>{item.question}</span>
              <span
                aria-hidden="true"
                className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-library-walnut text-sm font-sans font-normal text-library-walnut transition group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <Answer answer={item.answer} />
          </details>
        ))}
      </div>
    </div>
  );
}
