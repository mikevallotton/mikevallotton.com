"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const PRIMARY_NAV = [
  {
    topicKey: "fundamentals",
    href: "/ai-fundamentals",
    label: "AI Fundamentals",
    description: "Build an accurate mental model of modern AI: how language models generate responses, why context and iteration matter, where errors come from, and how to use these systems responsibly.",
  },
  {
    topicKey: "work",
    href: "/ai-and-work",
    label: "AI and Work",
    description: "Understand how AI changes workflows, careers, teams, leadership, and organizational expectations—and how people can build practical capability as the nature of knowledge work evolves.",
  },
  {
    topicKey: "agents",
    href: "/ai-agents",
    label: "AI Agents",
    description: "Explore how AI moves beyond answering questions to planning and completing multi-step work with tools, memory, boundaries, human oversight, and clear measures of success.",
  },
  {
    topicKey: "search",
    href: "/ai-search-and-geo",
    label: "AI Search and GEO",
    description: "Learn how generative systems are changing discovery, visibility, and trust—and what makes information understandable, credible, and useful to both people and AI-powered search.",
  },
  {
    topicKey: "software",
    href: "/software-development-and-ai",
    label: "Software Development and AI",
    description: "Examine how AI changes software delivery, technical roles, engineering workflows, and the human judgment required to build systems that remain reliable beyond the initial demo.",
  },
  {
    topicKey: "thinking",
    href: "/ai-and-thinking",
    label: "AI and Thinking",
    description: "Use AI to expand reasoning, learning, creativity, and exploration while preserving the independent thought, reflection, and human judgment that meaningful decisions require.",
  },
  {
    href: "/articles/news-investigator",
    label: "News Investigator Agent",
    groupLabel: "Articles",
    kind: "article",
    description: "Use the News Investigator Agent to compare current reporting, evaluate evidence, identify uncertainty, and strengthen your judgment without outsourcing what to think.",
  },
  {
    href: "/about",
    label: "About Mike",
    description: "Learn how Mike Vallotton’s background in software development, architecture, enterprise delivery, and technology leadership shapes his practical approach to AI and work.",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTopic, setActiveTopic] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const currentIndex = PRIMARY_NAV.findIndex((item) => item.href === pathname);
    if (currentIndex >= 0) setActiveTopic(currentIndex);
  }, [pathname]);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 8);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const scrollY = window.scrollY;
    const previousBodyTop = document.body.style.top;
    const menuTrigger = triggerRef.current;
    document.documentElement.classList.add("menu-open");
    document.body.classList.add("menu-open");
    document.body.style.top = `-${scrollY}px`;
    const focusable = menuRef.current?.querySelectorAll("a, button") || [];
    focusable[0]?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (event.key !== "Tab" || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.documentElement.classList.remove("menu-open");
      document.body.classList.remove("menu-open");
      document.body.style.top = previousBodyTop;
      window.scrollTo(0, scrollY);
      document.removeEventListener("keydown", handleKeyDown);
      menuTrigger?.focus();
    };
  }, [menuOpen]);

  return (
    <header ref={headerRef} className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container-page site-header__bar">
        <Link href="/" className="site-wordmark no-underline">
          <span>Mike</span>
          <span>Vallotton</span>
        </Link>
        <div className="site-header__meta" aria-hidden="true">
          <span>AI fluency</span>
        </div>
        <button
          ref={triggerRef}
          type="button"
          className="menu-trigger"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <span className="menu-trigger__mark" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </div>

      <div
        id="site-menu"
        ref={menuRef}
        className={`site-menu ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="container-page site-menu__inner">
          <div className="site-menu__body">
            <div className="site-menu__index">
              <p className="eyebrow text-library-brassText">Explore</p>
              <nav aria-label="Primary navigation" className="site-menu__topics">
              {PRIMARY_NAV.map((item, index) => (
                <div key={item.href}>
                  {item.groupLabel ? (
                    <p className="site-menu__group-label">{item.groupLabel}</p>
                  ) : null}
                  <Link
                    href={item.href}
                    tabIndex={menuOpen ? 0 : -1}
                    onClick={() => setMenuOpen(false)}
                    onMouseEnter={() => setActiveTopic(index)}
                    onFocus={() => setActiveTopic(index)}
                    className={`site-menu__topic no-underline ${item.topicKey ? `topic--${item.topicKey}` : ""} ${item.href === "/about" ? "site-menu__topic--about" : ""} ${activeTopic === index ? "is-active" : ""}`}
                  >
                    <span className="site-menu__label">{item.label}</span>
                    <span className="site-menu__arrow" aria-hidden="true">↗</span>
                  </Link>
                </div>
              ))}
              </nav>
            </div>
            <div className={`site-menu__preview ${PRIMARY_NAV[activeTopic].topicKey ? `topic--${PRIMARY_NAV[activeTopic].topicKey}` : ""}`}>
              <p className="eyebrow">{PRIMARY_NAV[activeTopic].label}</p>
              <p>{PRIMARY_NAV[activeTopic].description}</p>
              <Link
                href={PRIMARY_NAV[activeTopic].href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => setMenuOpen(false)}
                className="site-menu__preview-link no-underline"
              >
                Explore {PRIMARY_NAV[activeTopic].kind === "article" ? "article" : "topic"} <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <div className="site-menu__footer">
            <p>Mike Vallotton / Chief Technology Officer</p>
          </div>
        </div>
      </div>
      <noscript>
        <nav aria-label="Navigation without JavaScript" className="no-script-nav">
          {PRIMARY_NAV.map((item) => (
            <span key={item.href}>
              {item.groupLabel ? <strong>{item.groupLabel}: </strong> : null}
              <a href={item.href}>{item.label}</a>
            </span>
          ))}
        </nav>
      </noscript>
    </header>
  );
}
