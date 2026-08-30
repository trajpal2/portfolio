import LegalDoc from "@/components/LegalDoc";
import { LEGAL_LAST_UPDATED, LEGAL_LINKS } from "@/lib/legal";
import { SITE } from "@/lib/site";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata = PAGE_SEO["dataDeletion"];

const relatedLinks = LEGAL_LINKS.filter((l) => l.to !== "/data-deletion");

export default function DataDeletionPage() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Data Deletion"
      lead={`How to request deletion of personal data associated with ${SITE.name}'s portfolio website and contact channels.`}
      lastUpdated={LEGAL_LAST_UPDATED}
      relatedLinks={relatedLinks}
      sections={[
        {
          heading: "1. Purpose of this page",
          paragraphs: [
            "This page explains how visitors and contacts can request deletion of personal data that may have been collected through this personal portfolio — for example via the contact form or email correspondence.",
            `The Site is operated by ${SITE.name} to present professional experience across industries and technologies. It is not a user-account product; most visitors leave no stored profile. Deletion requests mainly apply when you have shared personal details with us.`,
          ],
        },
        {
          heading: "2. What personal data may exist",
          paragraphs: ["Depending on how you interacted with the Site, we may hold:"],
          list: [
            "Contact form submissions (name, email, company, project notes, message).",
            "Email threads started from the published contact address.",
            "Short-lived technical logs (IP, user agent, timestamps) retained by hosting infrastructure.",
          ],
        },
        {
          heading: "3. What this deletion request covers",
          paragraphs: ["Upon a verified request, we will take reasonable steps to:"],
          list: [
            "Delete or irreversibly anonymize contact-form records and related inbox copies under our control.",
            "Remove your personal details from any local notes maintained solely for responding to your enquiry.",
            "Confirm completion (or explain any limited retention that still applies).",
          ],
        },
        {
          heading: "4. What deletion typically does not cover",
          paragraphs: [
            "Some information is outside a visitor data-deletion request or may be retained where necessary:",
          ],
          list: [
            "Public portfolio content (case studies, skills, industry lists, résumé summary) that does not store your personal contact details as a Site user.",
            "Aggregated or anonymized operational metrics that cannot reasonably identify you.",
            "Data retained briefly for security, fraud prevention, legal compliance, or dispute resolution.",
            "Copies held by third-party email or hosting providers according to their own backup cycles (we will stop active use and request deletion where the provider supports it).",
            "Content on LinkedIn, GitHub, or other platforms you control — delete or edit those directly on those services.",
          ],
        },
        {
          heading: "5. How to submit a deletion request",
          paragraphs: [
            `Email ${SITE.email} with the subject line: “Data deletion request”.`,
          ],
          list: [
            "Include the email address you used when contacting us (and any alternate addresses).",
            "Approximate date of your message or interaction, if known.",
            "Optional: a short description of what you want removed.",
          ],
          note: "We may ask for simple verification (for example, confirming details from your original message) so we do not delete someone else’s data by mistake.",
        },
        {
          heading: "6. Timeline",
          paragraphs: [
            "We aim to acknowledge requests within 7 days and complete deletion within 30 days of verification, unless a lawful reason requires a different schedule. If more time is needed, we will tell you why.",
          ],
        },
        {
          heading: "7. After deletion",
          paragraphs: [
            "Once deletion is completed, we will no longer use your contact details to follow up on that enquiry. You may still visit the public portfolio freely. If you contact us again later, a new record may be created from that new submission.",
          ],
        },
        {
          heading: "8. Related policies",
          paragraphs: [
            "For broader collection and use practices, see the Privacy Policy. For how external services handle data in transit, see Third-Party Access. Site use is also governed by the Terms & Conditions.",
          ],
        },
        {
          heading: "9. Contact",
          paragraphs: [
            `Data deletion & privacy: ${SITE.email}`,
            `Operator: ${SITE.name}`,
          ],
        },
      ]}
    />
  );
}
