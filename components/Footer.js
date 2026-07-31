import Link from "next/link";
import { siteConfig } from "../content/siteConfig";
import SocialLinks from "./SocialLinks";
import PrivacyChoicesButton from "./PrivacyChoicesButton";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-library-parchment py-10">
      <div className="container-page space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="font-serif text-2xl font-medium text-library-ink md:text-3xl">
              {siteConfig.name}
            </p>
            <p className="max-w-3xl pt-2 text-sm leading-relaxed text-library-muted">
              Clear, grounded guidance to help people understand how AI works,
              use it effectively, and become more capable at work and in
              everyday life. I focus on practical AI fluency: better context,
              stronger judgment, useful workflows, reliable systems, and the
              human skills that matter as automation expands. The goal is to
              build durable habits for working with increasingly capable
              technology while remaining responsible for the choices,
              tradeoffs, and consequences that matter.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <Link href="/about" className="no-underline">About Mike</Link>
            <a href={siteConfig.urls.sagepath} target="_blank" rel="noreferrer" className="no-underline">Sagepath Reply</a>
            <Link href="/privacy" className="no-underline">Privacy</Link>
            <PrivacyChoicesButton enabled={Boolean(process.env.NEXT_PUBLIC_GA_ID)} />
          </div>
        </div>
        <SocialLinks />
        <p className="text-xs text-library-muted">Copyright {year} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

