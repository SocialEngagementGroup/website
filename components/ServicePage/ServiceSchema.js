/**
 * ServiceSchema Component (server)
 *
 * Injects JSON-LD structured data into a service page:
 *   - `Service`  — describes the offering and its provider (SEG)
 *   - `FAQPage`  — mirrors the page's visible FAQ section
 *
 * AEO: this is what lets search engines and AI assistants surface service
 * pages as direct answers. The visible FAQ lives in <FAQ/> (a client
 * component); schema stays here so it's always in the server-rendered HTML.
 *
 * Usage: <ServiceSchema title={siteMetadata.seo.title} description={...}
 *                       url="/services/seo" faqs={seoData.FAQ.items} />
 */

const SITE_URL = "https://socialengagementgroup.com";

// FAQ questions in data files carry "1. " prefixes and answers may contain
// HTML — schema.org expects plain text.
const clean = (text = "") =>
  text
    .replace(/<[^>]*>/g, "")
    .replace(/^\s*\d+\.\s*/, "")
    .trim();

const ServiceSchema = ({ title = "", description = "", url = "", faqs = [] }) => {
  const serviceName = title.split("|")[0].trim() || title;
  const pageUrl = `${SITE_URL}${url}`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: serviceName,
      description,
      url: pageUrl,
      provider: {
        "@type": "Organization",
        name: "Social Engagement Group",
        url: SITE_URL,
      },
      areaServed: "United States",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${SITE_URL}/services`,
        },
        { "@type": "ListItem", position: 3, name: serviceName, item: pageUrl },
      ],
    },
  ];

  if (faqs.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: clean(faq.question),
        acceptedAnswer: {
          "@type": "Answer",
          text: clean(faq.answer),
        },
      })),
    });
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export default ServiceSchema;
