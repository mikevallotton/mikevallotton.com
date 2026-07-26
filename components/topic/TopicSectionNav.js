export default function TopicSectionNav({ sections }) {
  return (
    <nav
      aria-label="On this page"
      className="sticky top-[61px] z-20 -mx-6 border-b border-library-parchment bg-library-paper/95 px-6 py-4 backdrop-blur"
    >
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-sm [scrollbar-width:none]">
        <span className="mr-2 shrink-0 font-semibold text-library-ink">Explore</span>
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="pill topic-section-nav__link shrink-0 bg-library-paper no-underline"
          >
            {section.navTitle || section.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
