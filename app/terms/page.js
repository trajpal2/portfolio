import LegalDoc from "@/components/LegalDoc";
import { LEGAL_LAST_UPDATED, LEGAL_LINKS } from "@/lib/legal";
import { SITE } from "@/lib/site";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata = PAGE_SEO["terms"];

const relatedLinks = LEGAL_LINKS.filter((l) => l.to !== "/terms");

export default function TermsPage() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Terms & Conditions"
      lead={`Terms of use for ${SITE.name}'s portfolio website — a professional showcase of engineering work across industries and technologies.`}
      lastUpdated={LEGAL_LAST_UPDATED}
      relatedLinks={relatedLinks}
      sections={[
        {
          heading: "1. Agreement to these terms",
          paragraphs: [
            `By accessing or using this website (the “Site”), you agree to these Terms & Conditions. If you do not agree, please do not use the Site.`,
            `The Site is operated by ${SITE.name} (“I”, “me”, or “the Operator”) as a personal portfolio and professional information resource.`,
          ],
        },
        {
          heading: "2. Nature of the Site",
          paragraphs: [
            "This Site presents professional background, skills, industries served, technologies used, architecture thinking, and selected case studies / project narratives. It is informational and promotional in nature.",
            "Content on the Site does not, by itself, create an employment, consulting, partnership, joint venture, or client engagement. Any paid work or formal engagement requires a separate written agreement.",
          ],
        },
        {
          heading: "3. Acceptable use",
          paragraphs: ["You agree not to:"],
          list: [
            "Use the Site in any unlawful way, or to harass, spam, or abuse the contact channels.",
            "Attempt to disrupt, scrape aggressively, reverse engineer, or gain unauthorized access to the Site’s infrastructure.",
            "Misrepresent your identity when submitting the contact form.",
            "Copy portfolio content and present it as your own commercial offering without permission.",
          ],
        },
        {
          heading: "4. Intellectual property",
          paragraphs: [
            `Unless otherwise noted, text, layout, graphics, diagrams, and original case-study narratives on the Site are owned by ${SITE.name} or used with permission.`,
            "You may browse and share links to public pages for professional reference. You may not republish substantial portions of the Site (including case studies) for commercial training products, competing portfolios, or marketing collateral without prior written consent.",
            "Names, logos, and trademarks of clients, employers, or third-party technologies mentioned in industry or project context remain the property of their respective owners. Mentions are for descriptive and attribution purposes only.",
          ],
        },
        {
          heading: "5. Case studies and project descriptions",
          paragraphs: [
            "Case studies summarize approaches, architectures, and outcomes across multiple industries and technology stacks. Details may be generalized, anonymized, or combined for clarity and confidentiality.",
            "They are not a guarantee that identical results will be achieved in a future engagement, and they are not technical specifications or formal proposals.",
          ],
        },
        {
          heading: "6. No professional advice warranty",
          paragraphs: [
            "Information on the Site is provided “as is” for general professional presentation. It is not legal, financial, security, or compliance advice.",
            "While reasonable care is taken to keep content accurate, the Operator does not warrant that the Site is complete, error-free, or continuously available.",
          ],
        },
        {
          heading: "7. Third-party links and services",
          paragraphs: [
            "The Site may link to LinkedIn, GitHub, résumé downloads, or other external resources. Those sites are governed by their own terms and privacy practices. The Operator is not responsible for third-party content or availability.",
            "See the Third-Party Access page for how external processors relate to this portfolio.",
          ],
        },
        {
          heading: "8. Contact submissions",
          paragraphs: [
            "When you send a message through the contact form or email, you confirm that the information you provide is accurate to the best of your knowledge and that you have the right to share it.",
            "Submitting a message does not obligate either party to enter a contract. Responses are provided in good faith and may be delayed or declined.",
          ],
        },
        {
          heading: "9. Limitation of liability",
          paragraphs: [
            "To the fullest extent permitted by applicable law, the Operator is not liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or reliance on its content.",
            "If liability cannot be excluded in your jurisdiction, it is limited to the greater of (a) fees you paid specifically for Site access in the prior 12 months (typically zero for this free portfolio) or (b) the minimum amount required by law.",
          ],
        },
        {
          heading: "10. Indemnity",
          paragraphs: [
            "You agree to indemnify and hold harmless the Operator from claims arising out of your misuse of the Site, your violation of these Terms, or your infringement of others’ rights in connection with Site use.",
          ],
        },
        {
          heading: "11. Changes",
          paragraphs: [
            "These Terms may be updated periodically. Continued use of the Site after changes are posted constitutes acceptance of the revised Terms. The “Last updated” date indicates the current version.",
          ],
        },
        {
          heading: "12. Governing law",
          paragraphs: [
            "These Terms are interpreted under the laws applicable to the Operator’s primary place of business, without regard to conflict-of-law rules, except where mandatory consumer or privacy laws in your location provide otherwise.",
          ],
        },
        {
          heading: "13. Contact",
          paragraphs: [
            `Questions about these Terms: ${SITE.email}`,
            `Operator: ${SITE.name}`,
          ],
        },
      ]}
    />
  );
}
