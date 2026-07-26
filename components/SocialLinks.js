import { siteConfig } from "../content/siteConfig";

const socialLinks = [
  {
    key: "linkedin",
    label: "LinkedIn",
    href: siteConfig.urls.linkedin,
    path: "M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.6h.05c.53-1 1.82-2.05 3.75-2.05 4 0 4.75 2.63 4.75 6.05V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.05 1.38-2.05 2.8V21H9z",
  },
  {
    key: "youtube",
    label: "YouTube",
    href: siteConfig.urls.youtube,
    path: "M23.5 6.2a2.9 2.9 0 0 0-2.04-2.06C19.7 3.7 12 3.7 12 3.7s-7.7 0-9.46.44A2.9 2.9 0 0 0 .5 6.2 30 30 0 0 0 0 12a30 30 0 0 0 .5 5.8 2.9 2.9 0 0 0 2.04 2.06c1.76.44 9.46.44 9.46.44s7.7 0 9.46-.44a2.9 2.9 0 0 0 2.04-2.06A30 30 0 0 0 24 12a30 30 0 0 0-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z",
  },
  {
    key: "tiktok",
    label: "TikTok",
    href: siteConfig.urls.tiktok,
    path: "M19.6 6.7a4.8 4.8 0 0 1-3.4-1.4 4.8 4.8 0 0 1-1.4-3.4H11v13.7a3.2 3.2 0 1 1-2.3-3V8.7a6.6 6.6 0 1 0 6.6 6.6V9.9a8.7 8.7 0 0 0 5.5 2V8.3a4.8 4.8 0 0 1-1.2-1.6z",
  },
  {
    key: "x",
    label: "X",
    href: siteConfig.urls.x,
    path: "M18.25 2.25h3.1l-6.77 7.74 8 9.76h-6.12l-4.8-6.29-5.49 6.29H2.75l7.24-8.3-7.5-9.2h6.3l4.45 5.88 5.01-5.88zm-1.09 15.9h1.7L6.78 4.03H4.95l12.21 14.12z",
  },
].filter((link) => Boolean(link.href));

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex flex-wrap gap-3 text-library-muted ${className}`.trim()}>
      {socialLinks.map((link) => (
        <a
          key={link.key}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-library-parchment/70 transition hover:text-library-ink hover:border-library-ink"
          aria-label={link.label}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d={link.path} />
          </svg>
          <span className="sr-only">{link.label}</span>
        </a>
      ))}
    </div>
  );
}
