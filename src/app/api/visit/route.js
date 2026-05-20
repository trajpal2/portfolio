import { NextResponse } from "next/server";
import { incrementVisits } from "@/lib/siteStats";

export async function POST() {
  try {
    const count = await incrementVisits();
    return NextResponse.json({ ok: true, visits: count });
  } catch (error) {
    console.error("visit POST:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
