import Link from "next/link";
import { siteConfig } from "../content/siteConfig";

export default function Breadcrumbs({ current, path, ancestors = [] }) {
  const items = [
    { name: "Home", url: siteConfig.siteUrl, href: "/" },
    ...ancestors.map((item) => ({
      ...item,
      url: `${siteConfig.siteUrl}${item.href}`,
    })),
    { name: current, url: `${siteConfig.siteUrl}${path}` },
  ];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav aria-label="Breadcrumb" className="type-meta mb-6 text-library-muted">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="no-underline hover:underline">
              Home
            </Link>
          </li>
          {ancestors.map((item) => (
            <li key={item.href} className="contents">
              <span aria-hidden="true">/</span>
              <Link href={item.href} className="no-underline hover:underline">
                {item.name}
              </Link>
            </li>
          ))}
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-library-ink">
            {current}
          </li>
        </ol>
      </nav>
    </>
  );
}
