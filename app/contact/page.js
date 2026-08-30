import ContactView from "@/components/ContactView";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata = PAGE_SEO["contact"];

export default function ContactPage() {
  return <ContactView />;
}
