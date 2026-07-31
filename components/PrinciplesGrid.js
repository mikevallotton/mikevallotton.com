import Link from "next/link";

export default function PrinciplesGrid({ items }) {
  return (
    <ul className="editorial-grid">
      {items.map((item) => {
        const [title, description, href] = Array.isArray(item)
          ? [item[0], item[1], null]
          : [item.title, item.description, item.href];
        const content = (
          <>
            <h3>
              {title}
              {href ? <span aria-hidden="true"> {"\u2192"}</span> : null}
            </h3>
            {description ? <p>{description}</p> : null}
          </>
        );

        return (
          <li
            key={title}
            className={`editorial-grid__item ${href ? "editorial-grid__item--linked" : ""}`}
          >
            {href ? (
              <Link href={href} className="block h-full no-underline">
                {content}
              </Link>
            ) : (
              content
            )}
          </li>
        );
      })}
    </ul>
  );
}
