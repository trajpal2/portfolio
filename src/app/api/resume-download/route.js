import { NextResponse } from "next/server";
import { incrementResumeDownloads } from "@/lib/siteStats";

export async function POST() {
  try {
    const count = await incrementResumeDownloads();
    return NextResponse.json({ ok: true, count });
  } catch (error) {
    console.error("resume-download POST:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
