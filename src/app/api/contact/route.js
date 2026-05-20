import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { incrementContactSubmissions } from "@/lib/siteStats";

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();
    const submitterName = name?.trim() ?? "";
    const submitterEmail = email?.trim() ?? "";
    const submitterPhone = phone?.trim() ?? "";

    if (!submitterName || !submitterEmail || !submitterPhone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(submitterEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER;
    if (!smtpUser || !process.env.SMTP_PASS || !process.env.SMTP_HOST) {
      return NextResponse.json(
        { error: "Email is not configured on the server." },
        { status: 500 }
      );
    }

    const mailFrom = process.env.MAIL_FROM?.trim();
    const from = mailFrom || {
      name: "Notification From Portfolio",
      address: smtpUser,
    };

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: smtpUser,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from,
      to: process.env.CONTACT_EMAIL || "tushant.rajpal23@gmail.com",
      replyTo: {
        name: submitterName,
        address: submitterEmail,
      },
      subject: `Portfolio Contact from ${submitterName}`,
      text: [
        `Name: ${submitterName}`,
        `Email: ${submitterEmail}`,
        `Phone: ${submitterPhone}`,
        "",
        "Message:",
        message || "(no message)",
      ].join("\n"),
      html: `
        <h2>New portfolio message</h2>
        <p><strong>Name:</strong> ${submitterName}</p>
        <p><strong>Email:</strong> ${submitterEmail}</p>
        <p><strong>Phone:</strong> ${submitterPhone}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "(no message)"}</p>
      `,
    });

    try {
      await incrementContactSubmissions();
    } catch (statsErr) {
      console.error("site-stats contact increment:", statsErr);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
