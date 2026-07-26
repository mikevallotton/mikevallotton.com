export default function TopicAudience({
  items,
  eyebrow = "A practical starting point",
}) {
  return (
    <section
      aria-labelledby="who-this-is-for"
      className="grid gap-6 border-b border-library-parchment py-10 md:grid-cols-[1fr_2fr] md:py-12"
    >
      <div>
        <p className="topic-accent-text text-xs font-semibold uppercase tracking-[0.18em]">
          {eyebrow}
        </p>
        <h2 id="who-this-is-for" className="mt-2 text-2xl font-semibold">
          Who this page is for
        </h2>
      </div>
      <ul className="grid gap-x-8 gap-y-3 text-library-muted sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-relaxed">
            <span
              aria-hidden="true"
              className="topic-accent-bg mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
