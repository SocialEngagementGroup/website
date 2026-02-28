export default function sitemap() {
  const baseUrl = "https://socialengagementgroup.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/contact-us",
    "/careers",
    "/services",
    "/cookies",
    "/legal-notice",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  // Service subpages
  const serviceRoutes = [
    // Creative
    "/services/3D-animation-and-rendering",
    "/services/branding",
    "/services/content-creation",
    "/services/logo-design",
    "/services/social-media-content",
    "/services/videography-and-photography",
    // Digital
    "/services/google-business-profile-management",
    "/services/google-location-services-ads",
    "/services/ppc-campaigns",
    "/services/retargeting-and-remarketing",
    "/services/review-and-reputation-management",
    "/services/seo",
    "/services/social-media-marketing",
    "/services/website-development",
    // Industry
    "/services/solution-for-doctors",
    "/services/solution-for-lawyers",
    "/services/solution-for-restaurants",
    "/services/solution-for-techstartups",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
