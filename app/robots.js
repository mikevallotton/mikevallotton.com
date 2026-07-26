import { siteConfig } from "../content/siteConfig";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: siteConfig.siteUrl,
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}

