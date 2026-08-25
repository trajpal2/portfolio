const path = require("path");
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5050;
const DIST = path.resolve(__dirname, "../dist");
const PUBLIC = path.resolve(__dirname, "../public");

/** Where admin notification emails are delivered; also used as Reply-To on user confirmation */
const CONTACT_REPLY_TO = process.env.CONTACT_REPLY_TO || "tushant.rajpal23@gmail.com";
/** From address shown on outgoing mail */
const CONTACT_FROM = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER || "";

const SMTP_HOST = process.env.SMTP_HOST || "";
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_SECURE = String(process.env.SMTP_SECURE || "false").toLowerCase() === "true";
const SMTP_USER = process.env.SMTP_USER || "";
const SMTP_PASS = process.env.SMTP_PASS || "";

function isEmailConfigured() {
  return Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS && CONTACT_FROM && CONTACT_REPLY_TO);
}

function createTransporter() {
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function firstName(fullName) {
  return String(fullName).trim().split(/\s+/)[0] || "there";
}

function normalizeContact({ name, email, company, project, message }) {
  const safeName = String(name || "").trim();
  const safeEmail = String(email || "").trim();
  const safeCompany = String(company || "").trim();
  const safeProject = String(project || "").trim();
  const safeMessage = String(message || "").trim();

  return {
    name: safeName,
    email: safeEmail,
    company: safeCompany || "Not provided",
    project: safeProject || "Not provided",
    message: safeMessage || "No additional message was provided.",
    hasMessage: Boolean(safeMessage),
  };
}

function buildAdminEmail(contact) {
  const { name, email, company, project, message } = contact;

  const text = `Hello Team,

A new contact request has been submitted through the portfolio website.

Contact Details

Name: ${name}
Email: ${email}
Company: ${company}

Project Details

Project: ${project}

Message

${message}

Next Steps

Please review the request and follow up with the contact if the inquiry is relevant.

Regards,
`;

  const html = `
    <p>Hello Team,</p>
    <p>A new contact request has been submitted through the portfolio website.</p>
    <h3>Contact Details</h3>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    <p><strong>Company:</strong> ${escapeHtml(company)}</p>
    <h3>Project Details</h3>
    <p><strong>Project:</strong> ${escapeHtml(project)}</p>
    <h3>Message</h3>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    <h3>Next Steps</h3>
    <p>Please review the request and follow up with the contact if the inquiry is relevant.</p>
    <p>Regards,</p>
  `;

  return {
    from: {
      name: "Request Received From Portfolio",
      address: CONTACT_FROM,
    },
    to: CONTACT_REPLY_TO,
    replyTo: {
      name,
      address: email,
    },
    subject: `New Portfolio Contact Request — ${name}`,
    text,
    html,
  };
}

function buildUserConfirmationEmail(contact) {
  const { name, email, company, project } = contact;
  const greetingName = firstName(name);

  const text = `Hello ${greetingName},

Thank you for reaching out to us.

We have successfully received your request regarding ${project} at ${company}. Our team will review the information you provided and get back to you as soon as possible.

If you have any additional details, requirements, or documents that may help us better understand your project, feel free to reply to this email.

We appreciate your interest and look forward to speaking with you.

Best regards,
Tushant Rajpal
`;

  const html = `
    <p>Hello ${escapeHtml(greetingName)},</p>
    <p>Thank you for reaching out to us.</p>
    <p>
      We have successfully received your request regarding
      <strong>${escapeHtml(project)}</strong> at
      <strong>${escapeHtml(company)}</strong>.
      Our team will review the information you provided and get back to you as soon as possible.
    </p>
    <p>
      If you have any additional details, requirements, or documents that may help us better
      understand your project, feel free to reply to this email.
    </p>
    <p>We appreciate your interest and look forward to speaking with you.</p>
    <p>Best regards,<br><strong>Tushant Rajpal</strong></p>
  `;

  return {
    from: {
      name: "Tushant Rajpal",
      address: CONTACT_FROM,
    },
    to: email,
    replyTo: CONTACT_REPLY_TO,
    subject: "We've Received Your Request",
    text,
    html,
  };
}

function logError(context, err) {
  const details =
    err && typeof err === "object"
      ? {
          failedStep: err.failedStep,
          message: err.message,
          code: err.code,
          response: err.response,
          responseCode: err.responseCode,
          command: err.command,
          stack: err.stack,
        }
      : { message: String(err) };

  console.error("Something occurred.", context, details);
}

async function sendContactEmails(payload) {
  if (!isEmailConfigured()) {
    throw new Error(
      "Email is not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS, CONTACT_FROM_EMAIL, and CONTACT_REPLY_TO in .env"
    );
  }

  const contact = normalizeContact(payload);
  const transporter = createTransporter();

  try {
    await transporter.sendMail(buildAdminEmail(contact));
  } catch (err) {
    err.failedStep = "admin notification email to CONTACT_REPLY_TO";
    throw err;
  }

  try {
    await transporter.sendMail(buildUserConfirmationEmail(contact));
  } catch (err) {
    err.failedStep = "user confirmation email";
    throw err;
  }

  return contact;
}

app.use(cors());
app.use(express.json());

const messages = [];

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    service: "portfolio-api",
    emailConfigured: isEmailConfigured(),
  });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, company, project, message } = req.body || {};

  if (!name || String(name).trim().length < 2) {
    return res.status(400).json({ error: "Please enter your name (at least 2 characters)." });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim())) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }
  if (!message || String(message).trim().length < 10) {
    return res.status(400).json({ error: "Message should be at least 10 characters." });
  }

  const entry = {
    id: Date.now(),
    name: String(name).trim(),
    email: String(email).trim(),
    company: String(company || "").trim(),
    project: String(project || "").trim(),
    message: String(message).trim(),
    createdAt: new Date().toISOString(),
  };

  messages.push(entry);

  try {
    await sendContactEmails(entry);

    return res.status(201).json({
      success: true,
      message: "Thanks! Your message was sent successfully.",
    });
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

    return res.status(500).json({
      error: "Something occurred.",
      details: details || "Contact email delivery failed.",
    });
  }
});

app.get("/api/messages", (_req, res) => {
  res.json({ count: messages.length, messages });
});

app.use(express.static(DIST));
app.use(express.static(PUBLIC));

app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api")) return next();
  res.sendFile(path.join(DIST, "index.html"), (err) => {
    if (err) {
      logError("Failed to serve the built index.html (missing dist build).", err);
      res
        .status(404)
        .type("text")
        .send("Something occurred. Build not found. Run `npm run build` first, or use `npm run serve`.");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Portfolio server running at http://localhost:${PORT}`);
});
