"use client";

import { openPrivacyChoices } from "./AnalyticsConsent";

export default function PrivacyChoicesButton({ enabled }) {
  if (!enabled) return null;

  return (
    <button type="button" className="footer-link-button" onClick={openPrivacyChoices}>
      Privacy choices
    </button>
  );
}
