export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/private/",
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "Claude-Web", "anthropic-ai", "Google-Extended", "CCBot", "PerplexityBot", "Omgilibot", "FacebookBot"],
        allow: "/",
      },
    ],
    sitemap: "https://socialengagementgroup.com/sitemap.xml",
  };
}
