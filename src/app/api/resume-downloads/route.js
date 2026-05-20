import { NextResponse } from "next/server";
import { readStats } from "@/lib/siteStats";

export async function GET(request) {
  const secret = request.nextUrl.searchParams.get("secret");
  const expected = process.env.STATS_SECRET;

  if (!expected) {
    return NextResponse.json(
      { error: "STATS_SECRET is not set on the server." },
      { status: 503 }
    );
  }
  if (secret !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const stats = await readStats();
  // `count` mirrors resumeDownloads for older clients
  return NextResponse.json({
    resumeDownloads: stats.resumeDownloads,
    visits: stats.visits,
    contactSubmissions: stats.contactSubmissions,
    updatedAt: stats.updatedAt,
    count: stats.resumeDownloads,
  });
}
