"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader${done ? " is-done" : ""}`} aria-hidden="true">
      <div className="loader__mark">{SITE.shortName}</div>
    </div>
  );
}
