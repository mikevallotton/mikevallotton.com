"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const CONSENT_KEY = "mv-analytics-consent";
const CONSENT_VERSION = "v1";
const OPEN_EVENT = "mv:open-privacy-choices";

function readConsent() {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    if (value === `${CONSENT_VERSION}:accepted`) return "accepted";
    if (value === `${CONSENT_VERSION}:declined`) return "declined";
  } catch {
    // Storage may be unavailable. Treat that as no consent.
  }
  return "unknown";
}

function writeConsent(value) {
  try {
    window.localStorage.setItem(CONSENT_KEY, `${CONSENT_VERSION}:${value}`);
  } catch {
    // The in-memory choice still applies for the current page.
  }
}

function expireCookie(name, domain) {
  const domainPart = domain ? `; Domain=${domain}` : "";
  document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax${domainPart}`;
}

function removeAnalyticsCookies() {
  const hostname = window.location.hostname;
  const hostnameParts = hostname.split(".");
  const domains = hostnameParts.length > 1
    ? hostnameParts.slice(0, -1).map((_, index) => `.${hostnameParts.slice(index).join(".")}`)
    : [];
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0]?.trim();
    if (!name || (!name.startsWith("_ga") && name !== "_gid" && name !== "_gat")) return;
    expireCookie(name);
    domains.forEach((domain) => expireCookie(name, domain));
  });
}

function loadAnalytics(measurementId) {
  if (!measurementId) return;

  window[`ga-disable-${measurementId}`] = false;
  if (document.querySelector(`script[data-ga-id="${measurementId}"]`)) {
    window.gtag?.("consent", "update", { analytics_storage: "granted" });
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("config", measurementId, { send_page_view: false });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  script.dataset.gaId = measurementId;
  document.head.appendChild(script);
}

export function openPrivacyChoices() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export default function AnalyticsConsent({ measurementId }) {
  const pathname = usePathname();
  const [consent, setConsent] = useState("loading");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    setConsent(stored);
    setOpen(stored === "unknown");

    const handleOpen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_EVENT, handleOpen);
  }, []);

  useEffect(() => {
    if (consent !== "accepted" || !measurementId) return;
    loadAnalytics(measurementId);
    window.gtag?.("event", "page_view", {
      page_location: window.location.href,
      page_path: `${window.location.pathname}${window.location.search}`,
      page_title: document.title,
    });
  }, [consent, measurementId, pathname]);

  function choose(value) {
    writeConsent(value);
    setConsent(value);
    setOpen(false);
    if (value === "declined") {
      if (measurementId) window[`ga-disable-${measurementId}`] = true;
      window.gtag?.("consent", "update", { analytics_storage: "denied" });
      removeAnalyticsCookies();
    }
  }

  if (!measurementId || consent === "loading" || !open) return null;

  return (
    <section
      className="consent-banner"
      aria-label="Analytics privacy choices"
      aria-live="polite"
    >
      <div>
        <h2>Help improve this site?</h2>
        <p>
          I use Google Analytics to review site traffic and understand which
          guides are useful. Nothing is sent to Google unless you accept. You
          can change this choice later from the footer.{" "}
          <a href="/privacy">Read the privacy notice.</a>
        </p>
      </div>
      <div className="consent-banner__actions">
        <button type="button" className="btn btn-primary" onClick={() => choose("accepted")}>
          Accept analytics
        </button>
        <button type="button" className="btn btn-secondary" onClick={() => choose("declined")}>
          Decline
        </button>
      </div>
    </section>
  );
}
