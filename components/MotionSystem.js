"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MotionSystem() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const narrow = window.matchMedia("(max-width: 767px)").matches;
    let disposed = false;
    let cleanup = () => {};

    async function initialize() {
      const sections = Array.from(document.querySelectorAll("main section, main article > header"));
      sections.forEach((section) => section.classList.add("motion-section"));

      const chapterNav = document.querySelector('[aria-label="On this page"]');
      const chapterLinks = chapterNav ? Array.from(chapterNav.querySelectorAll('a[href^="#"]')) : [];
      const chapterTargets = chapterLinks
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);
      const chapterObserver = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (!visible) return;
          chapterLinks.forEach((link) => {
            const active = link.getAttribute("href") === `#${visible.target.id}`;
            link.classList.toggle("is-active", active);
            if (active) link.setAttribute("aria-current", "location");
            else link.removeAttribute("aria-current");
          });
        },
        { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.2, 0.6] }
      );
      chapterTargets.forEach((target) => chapterObserver.observe(target));

      if (reduced) {
        document.documentElement.classList.add("reduce-motion");
        cleanup = () => {
          chapterObserver.disconnect();
          document.documentElement.classList.remove("reduce-motion");
        };
        return;
      }

      const [{ gsap }, { ScrollTrigger }, { default: Lenis }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("lenis"),
      ]);

      if (disposed) {
        chapterObserver.disconnect();
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      let lenis;
      let raf;
      if (!narrow) {
        lenis = new Lenis({ duration: 1.05, smoothWheel: true });
        const tick = (time) => {
          lenis.raf(time);
          raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      }

      let revealObserver;
      const context = gsap.context(() => {
        gsap.utils.toArray(".motion-section").forEach((section) => {
          gsap.fromTo(
            section,
            { y: 48 },
            {
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: { trigger: section, start: "top 88%", once: true },
            }
          );
        });
        const revealTargets = new Map();
        gsap.utils.toArray("[data-evidence-note]").forEach((note) => {
          const trigger = note.closest("[data-evidence-note-trigger]");
          gsap.set(note, {
            x: () => window.innerWidth - trigger.getBoundingClientRect().left + 24,
          });
          revealTargets.set(trigger, { element: note, duration: 1.35 });
        });
        gsap.utils.toArray("main details > summary").forEach((question) => {
          const trigger = question.parentElement;
          gsap.set(question, {
            x: () => -(trigger.getBoundingClientRect().right + 24),
          });
          revealTargets.set(trigger, { element: question, duration: 1.2 });
        });
        revealObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              const reveal = revealTargets.get(entry.target);
              if (!reveal) return;
              gsap.to(reveal.element, {
                x: 0,
                duration: reveal.duration,
                ease: "power4.out",
                clearProps: "transform",
                overwrite: true,
              });
              revealObserver.unobserve(entry.target);
            });
          },
          { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
        );
        revealTargets.forEach((_, trigger) => revealObserver.observe(trigger));
        gsap.utils.toArray("[data-drift]").forEach((element) => {
          gsap.to(element, {
            yPercent: Number(element.dataset.drift || -12),
            ease: "none",
            scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub: 0.8 },
          });
        });
        gsap.utils.toArray("[data-page-orbit]").forEach((orbit) => {
          gsap.fromTo(
            orbit,
            { yPercent: -Number(orbit.dataset.orbitDrift || 0) / 2, rotate: 0 },
            {
              yPercent: Number(orbit.dataset.orbitDrift || 0),
              rotate: Number(orbit.dataset.orbitRotate || 0),
              ease: "none",
              scrollTrigger: {
                trigger: orbit,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          );
          const satellite = orbit.querySelector("[data-orbit-satellite]");
          if (satellite) {
            gsap.fromTo(
              satellite,
              { rotate: 0, xPercent: -4, yPercent: 3 },
              {
                rotate: -Number(orbit.dataset.orbitRotate || 0) * 1.35,
                xPercent: 8,
                yPercent: -7,
                ease: "none",
                scrollTrigger: {
                  trigger: orbit,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1.4,
                },
              }
            );
          }
        });
        const homeHero = document.querySelector(".home-hero");
        if (!narrow && homeHero) {
          const orbitOne = homeHero.querySelector(".hero-orbit--one");
          const orbitTwo = homeHero.querySelector(".hero-orbit--two");
          if (orbitOne) {
            gsap.to(orbitOne, {
              rotate: 35,
              yPercent: -18,
              scrollTrigger: {
                trigger: homeHero,
                start: "top top",
                end: "bottom top",
                scrub: 1,
              },
            });
          }
          if (orbitTwo) {
            gsap.to(orbitTwo, {
              rotate: -28,
              yPercent: 22,
              scrollTrigger: {
                trigger: homeHero,
                start: "top top",
                end: "bottom top",
                scrub: 1,
              },
            });
          }
        }

        const aboutPage = document.querySelector(".about-page");
        if (aboutPage) {
          gsap.from(".about-hero__copy > *", {
            opacity: 0,
            y: 32,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
          });
          gsap.from(".about-portrait", {
            clipPath: "inset(0 100% 0 0)",
            duration: 1.25,
            delay: 0.15,
            ease: "power4.inOut",
          });
          gsap.from(".about-portrait__image", {
            scale: 1.12,
            duration: 1.5,
            delay: 0.15,
            ease: "power3.out",
          });

          const aboutOrbit = aboutPage.querySelector(".about-portrait__orbit");
          if (aboutOrbit) {
            gsap.to(aboutOrbit, {
              rotate: 55,
              yPercent: 20,
              ease: "none",
              scrollTrigger: {
                trigger: ".about-hero",
                start: "top top",
                end: "bottom top",
                scrub: 1,
              },
            });
          }

          gsap.utils.toArray(".about-section").forEach((section) => {
            const heading = section.querySelector("h2");
            const content = Array.from(section.children).filter((child) => child !== heading);
            if (heading) {
              gsap.from(heading, {
                opacity: 0,
                x: narrow ? 0 : -36,
                y: narrow ? 24 : 0,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: { trigger: section, start: "top 84%", once: true },
              });
            }
            if (content.length) {
              gsap.from(content, {
                opacity: 0,
                x: narrow ? 0 : 36,
                y: narrow ? 24 : 0,
                duration: 0.9,
                stagger: 0.09,
                ease: "power3.out",
                scrollTrigger: { trigger: section, start: "top 84%", once: true },
              });
            }
          });

          gsap.from(".about-section--principles .editorial-grid__item", {
            opacity: 0,
            y: 30,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".about-section--principles .editorial-grid",
              start: "top 86%",
              once: true,
            },
          });
        }
      });

      cleanup = () => {
        chapterObserver.disconnect();
        revealObserver?.disconnect();
        context.revert();
        lenis?.destroy();
        if (raf) cancelAnimationFrame(raf);
      };
    }

    initialize();
    return () => {
      disposed = true;
      cleanup();
    };
  }, [pathname]);

  return null;
}
