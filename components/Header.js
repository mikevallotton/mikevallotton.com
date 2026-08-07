"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { principles } from "../content/principles";

const NAV_SECTIONS = [
  {
    key: "topics",
    label: "Topics",
    description:
      "Durable guidance for understanding AI, applying it to work, and preserving the human judgment that meaningful decisions require.",
    items: [
      {
        topicKey: "fundamentals",
        href: "/ai-fundamentals",
        label: "AI Fundamentals",
        linkLabel: "Understand how modern AI works",
        description:
          "Build an accurate mental model of modern AI: how language models generate responses, why context and iteration matter, where errors come from, and how to use these systems responsibly.",
      },
      {
        topicKey: "work",
        href: "/ai-and-work",
        label: "AI and Work",
        linkLabel: "See how AI is changing work",
        description:
          "Understand how AI changes workflows, careers, teams, leadership, and organizational expectations—and how people can build practical capability as the nature of knowledge work evolves.",
      },
      {
        topicKey: "agents",
        href: "/ai-agents",
        label: "AI Agents",
        linkLabel: "Understand how AI agents work",
        description:
          "Explore how AI moves beyond answering questions to planning and completing multi-step work with tools, memory, boundaries, human oversight, and clear measures of success.",
      },
      {
        topicKey: "search",
        href: "/ai-search-and-geo",
        label: "AI Search and GEO",
        linkLabel: "Learn how AI is changing search",
        description:
          "Learn how generative systems are changing discovery, visibility, and trust—and what makes information understandable, credible, and useful to both people and AI-powered search.",
      },
      {
        topicKey: "software",
        href: "/software-development-and-ai",
        label: "Software Development and AI",
        linkLabel: "See how AI changes development",
        description:
          "Examine how AI changes software delivery, technical roles, engineering workflows, and the human judgment required to build systems that remain reliable beyond the initial demo.",
      },
      {
        topicKey: "thinking",
        href: "/ai-and-thinking",
        label: "AI and Thinking",
        linkLabel: "Strengthen thinking with AI",
        description:
          "Use AI to expand reasoning, learning, creativity, and exploration while preserving the independent thought, reflection, and human judgment that meaningful decisions require.",
      },
    ],
  },
  {
    key: "principles",
    label: "Operating Principles",
    description:
      "Five durable principles for bringing clearer intent, stronger judgment, deliberate quality, and reliable systems to AI-enabled work.",
    items: principles.map((principle) => ({
      ...principle,
      label: principle.title,
      linkLabel: `Read ${principle.title}`,
    })),
  },
  {
    key: "articles",
    label: "Articles",
    description:
      "Practical resources for applying AI to specific questions, methods, and workflows.",
    items: [
      {
        href: "/articles/news-investigator",
        label: "News Investigator Agent",
        linkLabel: "Use the News Investigator Agent",
        description:
          "Use the News Investigator Agent to compare current reporting, evaluate evidence, identify uncertainty, and strengthen your judgment without outsourcing what to think.",
      },
      {
        href: "/articles/agentic-soc-enterprise-ai",
        label: "Agentic SOC and Enterprise AI",
        linkLabel: "Read the Agentic SOC article",
        description:
          "A field note from the Agentic SOC Forum on process design, orchestration, bounded autonomy, auditability, governance, and human accountability.",
      },
    ],
  },
  {
    key: "about",
    label: "About Mike",
    href: "/about",
    linkLabel: "Learn about Mike",
    description:
      "Learn how Mike Vallotton’s background in software development, architecture, enterprise delivery, and technology leadership shapes his practical approach to AI and work.",
    items: [],
  },
];

const UTILITY_PAGE_LABELS = {
  "/about": "About Mike",
  "/links": "Links",
  "/privacy": "Privacy",
};

const PAGE_LABELS = Object.fromEntries([
  ...NAV_SECTIONS.flatMap((section) => [
    ...(section.href ? [[section.href, section.label]] : []),
    ...section.items.map((item) => [item.href, item.label]),
  ]),
  ...Object.entries(UTILITY_PAGE_LABELS),
]);

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState(0);
  const [activeItem, setActiveItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const pageLabel = PAGE_LABELS[pathname] || "AI Fluency";

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
    const getFocusable = () =>
      Array.from(menuRef.current?.querySelectorAll("a, button") || []).filter(
        (element) => element.tabIndex >= 0 && element.offsetParent !== null,
      );
    getFocusable()[0]?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      const focusable = getFocusable();
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
          <span>{pageLabel}</span>
        </div>
        <button
          ref={triggerRef}
          type="button"
          className="menu-trigger"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() =>
            setMenuOpen((open) => {
              if (!open) {
                setOpenSection(0);
                setActiveItem(null);
              }
              return !open;
            })
          }
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
              <nav aria-label="Primary navigation" className="site-menu__sections">
                {NAV_SECTIONS.map((section, index) => {
                  const isOpen = openSection === index;
                  const sectionClassName = `site-menu__section no-underline ${isOpen ? "is-active" : ""}`;

                  return (
                    <div key={section.key} className="site-menu__section-group">
                      {section.items.length ? (
                        <button
                          type="button"
                          tabIndex={menuOpen ? 0 : -1}
                          aria-expanded={isOpen}
                          aria-controls={`menu-section-${section.key}`}
                          onClick={() => {
                            const nextOpen = isOpen ? null : index;
                            setOpenSection(nextOpen);
                            setActiveItem(null);
                          }}
                          onMouseEnter={() => setActiveItem(null)}
                          onFocus={() => setActiveItem(null)}
                          className={sectionClassName}
                        >
                          <span>{section.label}</span>
                          <span className="site-menu__section-mark" aria-hidden="true">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                      ) : (
                        <Link
                          href={section.href}
                          tabIndex={menuOpen ? 0 : -1}
                          onClick={() => setMenuOpen(false)}
                          onMouseEnter={() => setActiveItem(section)}
                          onFocus={() => setActiveItem(section)}
                          className={sectionClassName}
                        >
                          <span>{section.label}</span>
                          <span className="site-menu__arrow" aria-hidden="true">
                            {"\u2192"}
                          </span>
                        </Link>
                      )}

                      {section.items.length ? (
                        <div
                          id={`menu-section-${section.key}`}
                          className={`site-menu__mobile-children ${isOpen ? "is-open" : ""}`}
                        >
                          {section.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              tabIndex={menuOpen && isOpen ? 0 : -1}
                              onClick={() => setMenuOpen(false)}
                              onMouseEnter={() => setActiveItem(item)}
                              onFocus={() => setActiveItem(item)}
                              className={`site-menu__mobile-child no-underline ${item.topicKey ? `topic--${item.topicKey}` : ""}`}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </nav>
            </div>

            {activeItem ? (
              <div className={`site-menu__preview ${activeItem.topicKey ? `topic--${activeItem.topicKey}` : ""}`}>
                <p className="eyebrow">{activeItem.label}</p>
                <p>{activeItem.description}</p>
                <Link
                  href={activeItem.href}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={() => setMenuOpen(false)}
                  className="site-menu__preview-link no-underline"
                >
                  {activeItem.linkLabel || `Explore ${activeItem.label}`}{" "}
                  <span aria-hidden="true">{"\u2192"}</span>
                </Link>
              </div>
            ) : null}
          </div>
          <div className="site-menu__footer">
            <p>Mike Vallotton / Chief Technology Officer</p>
          </div>
        </div>
      </div>

      <noscript>
        <nav aria-label="Navigation without JavaScript" className="no-script-nav">
          {NAV_SECTIONS.flatMap((section) => [
            ...(section.href
              ? [{ href: section.href, label: section.label }]
              : []),
            ...section.items,
          ]).map((item) => (
            <span key={item.href}>
              <a href={item.href}>{item.label}</a>
            </span>
          ))}
        </nav>
      </noscript>
    </header>
  );
}
