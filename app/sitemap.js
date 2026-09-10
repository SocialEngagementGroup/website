import { blogs } from "@/data/blogsData";
import { jobs } from "@/data/jobsData";
import { SITE_URL } from "@/lib/site";

export default function sitemap() {
  const baseUrl = SITE_URL;

  // Static routes
  const staticRoutes = [
    "",

    "/contact-us",
    "/careers",
    "/blog",
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
    "/services/solution-for-jewelers",
    // Technology
    "/services/ai-automation",
    "/services/cloud-modernization",
    "/services/it-consultation",
    "/services/saas-implementation",
    "/services/web-application",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Blog post pages (published articles only)
  const blogRoutes = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.dateModified || post.datePublished
      ? new Date(post.dateModified || post.datePublished)
      : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Job detail pages. These were live, internally linked from
  // components/CareersPage/JobCard.js and fully indexable, but absent from the
  // sitemap entirely — orphaned from a crawler's point of view.
  //
  // Driven by `jobs` (data/jobsData.js), which is already filtered to
  // `active: true`. Setting a listing to `active: false` therefore removes it
  // from the sitemap automatically — that flag stays the single control.
  const careerRoutes = jobs.map((job) => ({
    url: `${baseUrl}/careers/${job.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...careerRoutes];
}
