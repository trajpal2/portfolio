import { isEmailConfigured, logError, sendContactEmails } from "@/lib/mail";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { name, email, company, project, message } = body || {};

  if (!name || String(name).trim().length < 2) {
    return Response.json({ error: "Please enter your name (at least 2 characters)." }, { status: 400 });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim())) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!message || String(message).trim().length < 10) {
    return Response.json({ error: "Message should be at least 10 characters." }, { status: 400 });
  }

  const entry = {
    name: String(name).trim(),
    email: String(email).trim(),
    company: String(company || "").trim(),
    project: String(project || "").trim(),
    message: String(message).trim(),
  };

  try {
    await sendContactEmails(entry);
    return Response.json(
      {
        success: true,
        message: "Thanks! Your message was sent successfully.",
      },
      { status: 201 }
    );
  } catch (err) {
    const details = [
      err.failedStep ? `Failed while sending ${err.failedStep}.` : null,
      err.message,
      err.code ? `code=${err.code}` : null,
      err.response ? `response=${err.response}` : null,
    ]
      .filter(Boolean)
      .join(" ");

    logError("Contact form email delivery failed.", err);

    return Response.json(
      {
        error: "Something occurred.",
        details: details || "Contact email delivery failed.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return Response.json({
    ok: true,
    service: "portfolio-api",
    emailConfigured: isEmailConfigured(),
  });
}
