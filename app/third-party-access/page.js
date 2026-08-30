import LegalDoc from "@/components/LegalDoc";
import { LEGAL_LAST_UPDATED, LEGAL_LINKS } from "@/lib/legal";
import { SITE } from "@/lib/site";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata = PAGE_SEO["thirdPartyAccess"];

const relatedLinks = LEGAL_LINKS.filter((l) => l.to !== "/third-party-access");

export default function ThirdPartyAccessPage() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Third-Party Access"
      lead={`Which external services may process data when you use ${SITE.name}'s portfolio, and what that means for your privacy.`}
      lastUpdated={LEGAL_LAST_UPDATED}
      relatedLinks={relatedLinks}
      sections={[
        {
          heading: "1. Overview",
          paragraphs: [
            `This personal portfolio is built and operated by ${SITE.name} to showcase engineering work across multiple industries and technologies. Running a modern website and contact channel inevitably involves a small set of third-party infrastructure providers.`,
            "This page describes those categories of access so visitors understand who may process technical or contact-related data — and confirms that personal information is not sold or rented.",
          ],
        },
        {
          heading: "2. Principles",
          paragraphs: ["Third-party access on this Site follows these rules:"],
          list: [
            "Access is limited to what is needed to host pages, deliver email, and keep the Site secure.",
            "Providers act as processors or infrastructure partners, not as buyers of your personal data.",
            "No advertising networks or data brokers are intentionally integrated into this portfolio.",
            "Outbound links (LinkedIn, GitHub, etc.) are optional; leaving the Site means those platforms’ own terms apply.",
          ],
        },
        {
          heading: "3. Categories of third parties",
          paragraphs: ["Depending on configuration and hosting, the following types of services may process data:"],
          list: [
            "Web hosting / application hosting — serves HTML/CSS/JS, handles HTTPS, and may keep access logs (IP, user agent, timestamps).",
            "Email / SMTP delivery — sends the Operator a notification when you use the contact form and may send you a confirmation message.",
            "DNS / CDN / edge network (if enabled by the host) — routes traffic and may cache public assets for performance.",
            "Search and verification tools — for example Google Search Console site verification metadata used for indexing the public portfolio (not for selling visitor profiles).",
            "Open-source and cloud technology references in case studies — descriptive only; visiting those vendors’ sites is separate from this portfolio.",
          ],
        },
        {
          heading: "4. Contact form and email access",
          paragraphs: [
            "When you submit the contact form, your message content and email address are transmitted to the configured mail infrastructure so the Operator can reply. That means the SMTP provider and the Operator’s mailbox provider can process message contents for delivery.",
            "Do not include secrets, passwords, or highly sensitive personal data in the contact form. Prefer a high-level project description first; share confidential details only after a trusted channel is agreed.",
          ],
        },
        {
          heading: "5. Social and professional platforms",
          paragraphs: [
            "The Site links to professional profiles such as LinkedIn and GitHub. Those platforms may set their own cookies and collect data if you interact with them. The Operator does not control third-party tracking on those destinations.",
            "Portfolio content describing industries and technologies may reference tools (for example React, Node.js, n8n, cloud platforms). Naming a technology does not grant that vendor access to your contact data from this Site.",
          ],
        },
        {
          heading: "6. What third parties do not get",
          paragraphs: ["Unless required for the purposes above, third parties are not given:"],
          list: [
            "Permission to use your contact details for their own marketing.",
            "Bulk exports of enquiry data for resale.",
            "Access to private client systems described only at a high level in case studies.",
          ],
        },
        {
          heading: "7. Your controls",
          paragraphs: [
            "You can avoid sharing personal data by browsing without using the contact form. You can request deletion of enquiry-related personal data via the Data Deletion page. You can block non-essential cookies in your browser; essential hosting and security functions may still operate.",
          ],
        },
        {
          heading: "8. Changes to processors",
          paragraphs: [
            "Hosting, email, or CDN providers may change as the portfolio infrastructure evolves. Material changes that affect how visitor data is processed will be reflected in updates to this page and the Privacy Policy.",
          ],
        },
        {
          heading: "9. Contact",
          paragraphs: [
            `Questions about third-party access: ${SITE.email}`,
            `Operator: ${SITE.name} — ${SITE.title}`,
          ],
        },
      ]}
    />
  );
}
