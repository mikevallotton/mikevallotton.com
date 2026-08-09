import { siteConfig } from "./siteConfig";

function metadataTitle(title) {
  if (typeof title === "string") return title;
  return title?.absolute || siteConfig.title;
}

export function withPageSocial(metadata) {
  const title = metadataTitle(metadata.title);
  const description = metadata.description || siteConfig.description;
  const path = metadata.alternates?.canonical || "/";
  const openGraph = metadata.openGraph || {};
  const twitter = metadata.twitter || {};

  return {
    ...metadata,
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [{
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} headshot and site title`,
      }],
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      creator: siteConfig.socialHandle,
      title,
      description,
      images: [siteConfig.twitterImage],
      ...twitter,
    },
  };
}
