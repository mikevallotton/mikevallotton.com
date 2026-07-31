export default function FurtherReading({
  sources,
  title = "Evidence and further reading",
}) {
  const uniqueSources = [...new Map(sources.map((source) => [source.href, source])).values()];

  return (
    <section
      aria-labelledby="evidence-title"
      className="border-t border-library-parchment py-14 md:py-20"
    >
      <div className="grid gap-8 md:grid-cols-[15rem_1fr] md:gap-10">
        <div>
          <p className="type-label text-library-walnut">
            Evidence base
          </p>
          <h2 id="evidence-title" className="mt-2 text-2xl font-semibold">
            {title}
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {uniqueSources.map((source) => (
            <a
              key={source.href}
              href={source.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-library-parchment p-5 no-underline transition hover:border-library-walnut"
            >
              <p className="type-label text-library-walnut">
                {source.publisher}
                {source.year ? ` · ${source.year}` : ""}
              </p>
              <h3 className="mt-2 text-lg font-semibold leading-snug">
                {source.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-library-muted">
                {source.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
