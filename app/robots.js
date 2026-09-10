import { SITE_URL } from "@/lib/site";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // NOTE: a `disallow: "/private/"` rule was removed here — no such route
        // exists under app/ or public/, so it was dead configuration that
        // implied a protected area. Re-add it only alongside a real /private/ path.
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "Claude-Web", "anthropic-ai", "Google-Extended", "CCBot", "PerplexityBot", "Omgilibot", "FacebookBot"],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
