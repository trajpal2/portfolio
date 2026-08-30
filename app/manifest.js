import { SITE } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";

export default function manifest() {
  return {
    name: `${SITE.name} — ${SITE.title}`,
    short_name: SITE.shortName,
    description: SITE.lead,
    start_url: "/",
    display: "standalone",
    background_color: "#f3f6f8",
    theme_color: "#0f766e",
    lang: "en",
    icons: [
      {
        src: "/images/architecture-hero.png",
        sizes: "1600x900",
        type: "image/png",
        purpose: "any",
      },
    ],
    id: absoluteUrl("/"),
  };
}
