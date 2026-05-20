"use client";

import { useEffect } from "react";

const SESSION_KEY = "portfolio_site_visit_logged_v1";

/**
 * Records one visit per browser tab session (see POST /api/visit).
 */
export default function VisitTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      return;
    }
    fetch("/api/visit", { method: "POST", keepalive: true }).catch(() => {});
  }, []);
  return null;
}
