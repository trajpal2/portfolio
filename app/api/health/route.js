import { isEmailConfigured } from "@/lib/mail";

export async function GET() {
  return Response.json({
    ok: true,
    service: "portfolio-api",
    emailConfigured: isEmailConfigured(),
  });
}
