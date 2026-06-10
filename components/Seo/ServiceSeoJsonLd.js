const BASE_URL = "https://www.socialengagementgroup.com";

function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function stripHtml(value = "") {
  return value.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function serviceNameFromTitle(title = "") {
  return title.split("|")[0].trim();
}

export default function ServiceSeoJsonLd({ title, description, path, faqItems = [] }) {
  const url = `${BASE_URL}${path}`;
  const serviceName = serviceNameFromTitle(title);

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    serviceType: serviceName,
    description,
    provider: {
      "@type": "Organization",
      name: "Social Engagement Group",
      url: BASE_URL,
    },
    areaServed: "US",
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${BASE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: serviceName,
        item: url,
      },
    ],
  };

  const faq =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: stripHtml(item.question),
            acceptedAnswer: {
              "@type": "Answer",
              text: stripHtml(item.answer),
            },
          })),
        }
      : null;

  return (
    <>
      <JsonLd data={service} />
      <JsonLd data={breadcrumbs} />
      {faq ? <JsonLd data={faq} /> : null}
    </>
  );
}
