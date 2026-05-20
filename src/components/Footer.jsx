import { unstable_noStore as noStore } from "next/cache";
import { readStats } from "@/lib/siteStats";
import { siteName } from "@/config/site";

export default async function Footer() {
  noStore();
  const stats = await readStats();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-black-100 py-8 px-6 text-center">
      <p className="text-secondary text-sm">
        © {year} {siteName}. All rights reserved.
      </p>
      {/* Inspect in DevTools — hidden; counts from data/site-stats.json */}
      <span
        id="site-stats"
        data-resume-downloads={stats.resumeDownloads}
        data-visits={stats.visits}
        data-contact-submissions={stats.contactSubmissions}
        data-stats-updated-at={stats.updatedAt ?? ""}
        aria-hidden="true"
        tabIndex={-1}
        className="pointer-events-none absolute left-[-9999px] h-px w-px overflow-hidden opacity-0"
      />
    </footer>
  );
}
