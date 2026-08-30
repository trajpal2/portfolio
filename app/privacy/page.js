import LegalDoc from "@/components/LegalDoc";
import { LEGAL_LAST_UPDATED, LEGAL_LINKS } from "@/lib/legal";
import { SITE } from "@/lib/site";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata = PAGE_SEO["privacy"];

const relatedLinks = LEGAL_LINKS.filter((l) => l.to !== "/privacy");

export default function PrivacyPage() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Privacy Policy"
      lead={`How ${SITE.name}'s personal portfolio collects, uses, and protects information when you visit or get in touch.`}
      lastUpdated={LEGAL_LAST_UPDATED}
      relatedLinks={relatedLinks}
      sections={[
        {
          heading: "1. About this website",
          paragraphs: [
            `This website is the personal professional portfolio of ${SITE.name}, a Senior Full Stack Engineer and Full Stack Architect. It showcases experience across multiple industries and technologies — including enterprise applications, AI systems, cloud platforms, CRM/ERP work, automation, and related engineering projects.`,
            "It is not a consumer marketplace, social network, or multi-user SaaS product. The primary purposes are professional presentation, case-study storytelling, and contact for collaboration or hiring conversations.",
          ],
        },
        {
          heading: "2. Information we collect",
          paragraphs: [
            "We collect only what is needed to operate the portfolio and respond to you:",
          ],
          list: [
            "Contact form data you submit: name, email address, optional company and project details, and your message.",
            "Technical data automatically received by the hosting environment: IP address, browser type, device/OS signals, referring URL, and request timestamps (typical web-server or platform logs).",
            "Communication content if you email us directly at the published contact address.",
          ],
          note: "We do not require account registration, and we do not intentionally collect sensitive personal data (such as government IDs, health, or payment card details) through this site.",
        },
        {
          heading: "3. How we use information",
          paragraphs: ["Personal information from the contact form or email is used to:"],
          list: [
            "Respond to enquiries about projects, architecture, AI/automation, or professional opportunities.",
            "Send a confirmation that your message was received (when email delivery is configured).",
            "Maintain basic security, abuse prevention, and operational reliability of the site.",
            "Improve clarity of portfolio content over time based on the types of questions received (in aggregate, not for advertising profiles).",
          ],
        },
        {
          heading: "4. Portfolio content and professional work",
          paragraphs: [
            "Case studies, project summaries, industry experience, and technology write-ups describe professional work at a high level. They are intended to communicate skills and approach across industries and stacks — not to publish confidential client records or private personal data of third parties.",
            "If you believe portfolio content inadvertently identifies you or your organization in a way that should be corrected, contact us using the details below and we will review the request in good faith.",
          ],
        },
        {
          heading: "5. Sharing and processors",
          paragraphs: [
            "We do not sell your personal information. Limited sharing occurs only as needed to operate the site:",
          ],
          list: [
            "Email/SMTP provider: to deliver contact notifications and confirmations.",
            "Hosting / infrastructure provider: to serve pages and store operational logs.",
            "Professional channels you choose to open (for example LinkedIn or GitHub) when you leave this site — those services have their own policies.",
          ],
          note: "See the Third-Party Access page for more detail on external services.",
        },
        {
          heading: "6. Cookies and similar technologies",
          paragraphs: [
            "This portfolio does not currently run advertising or third-party analytics cookies. The site may use essential technologies required for security, theme preference, or basic session behaviour of the hosting platform.",
            "If analytics or additional cookies are introduced later, this policy will be updated to describe them.",
          ],
        },
        {
          heading: "7. Retention",
          paragraphs: [
            "Contact messages and related email records are kept only as long as useful to manage the conversation and maintain a reasonable professional record (typically up to 24 months, unless a longer period is needed for an ongoing discussion, legal obligation, or dispute).",
            "Server logs are retained according to the hosting provider’s defaults or a shorter operational window.",
          ],
        },
        {
          heading: "8. Your choices and rights",
          paragraphs: [
            "Depending on where you live, you may have rights to access, correct, or delete personal data we hold about you, or to object to certain processing. For deletion specifically, use the Data Deletion page or email the address below.",
            "We will respond to verified requests within a reasonable time (generally within 30 days).",
          ],
        },
        {
          heading: "9. Children",
          paragraphs: [
            "This site is directed at professionals and businesses. It is not intended for children under 16, and we do not knowingly collect their personal information.",
          ],
        },
        {
          heading: "10. Changes",
          paragraphs: [
            "We may update this Privacy Policy as the portfolio, hosting setup, or legal requirements change. The “Last updated” date at the top will reflect the latest revision.",
          ],
        },
        {
          heading: "11. Contact",
          paragraphs: [
            `Privacy questions: ${SITE.email}`,
            `Site operator: ${SITE.name} — ${SITE.title}`,
          ],
        },
      ]}
    />
  );
}
