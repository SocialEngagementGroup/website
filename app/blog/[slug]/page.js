import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import {
  blogs,
  getBlogBySlug,
  getRelatedPosts,
  getRelatedServices,
} from "@/data/blogsData";
import siteMetadata from "@/data/metadata";
import BlogContent from "@/components/BlogPage/BlogContent";
import BlogFaq from "@/components/BlogPage/BlogFaq";
import RelatedPosts from "@/components/BlogPage/RelatedPosts";
import RelatedServices from "@/components/BlogPage/RelatedServices";

const SITE_URL = "https://socialengagementgroup.com";
const DEFAULT_OG = "/assets/images/brand/og-image.png";

// Format an ISO date (YYYY-MM-DD) into a readable label
const formatDate = (iso) => {
  if (!iso) return "";
  const date = new Date(iso);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Pre-render every published post at build time (SSG → fast + crawlable)
export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | " + siteMetadata.blog.title,
      robots: { index: false, follow: false },
    };
  }

  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt;
  const url = `/blog/${post.slug}`;
  const ogImage = post.image || DEFAULT_OG;

  return {
    title,
    description,
    keywords: post.keywords,
    authors: [{ name: post.author?.name || "Social Engagement Group" }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      siteName: "Social Engagement Group",
      publishedTime: post.datePublished || undefined,
      modifiedTime: post.dateModified || post.datePublished || undefined,
      authors: [post.author?.name || "Social Engagement Group"],
      tags: post.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.imageAlt || post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  // Unknown or unpublished slug → 404 (uses app/not-found.js)
  if (!post) notFound();

  const related = getRelatedPosts(slug);
  const relatedServices = getRelatedServices(post.category);
  const url = `${SITE_URL}/blog/${post.slug}`;
  const ogImage = post.image
    ? `${SITE_URL}${post.image}`
    : `${SITE_URL}${DEFAULT_OG}`;

  // ── Structured data (SEO + AI crawl) ──────────────────────────────────────
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: [ogImage],
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: {
      "@type": "Organization",
      name: post.author?.name || "Social Engagement Group",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Social Engagement Group",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/images/site-logo/logo.svg`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: (post.keywords || []).join(", "),
    articleSection: post.categoryLabel,
    wordCount: (post.content || [])
      .map((b) => b.text || (b.items || []).join(" "))
      .join(" ")
      .split(/\s+/)
      .filter(Boolean).length,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const faqSchema =
    post.faqs && post.faqs.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return (
    <main className="min-h-screen bg-brand-gray relative overflow-hidden">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Gradient blob accents */}
      <div
        className="absolute -right-20 top-20 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 180, 150, 0.4) 0%, rgba(255, 200, 180, 0.2) 30%, rgba(255, 220, 200, 0.1) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute right-10 sm:right-20 top-40 sm:top-60 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 150, 180, 0.3) 0%, rgba(255, 180, 200, 0.15) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl pt-24 sm:pt-32 pb-16 sm:pb-24 relative z-10">
        {/* Reading column — kept narrower than the frame for comfortable line length */}
        <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500 list-none p-0 flex-wrap">
            <li>
              <Link href="/" className="hover:text-brand-brick transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="hover:text-brand-brick transition-colors">
                Blog
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li
              aria-current="page"
              className="text-gray-700 font-medium truncate max-w-[200px] sm:max-w-[420px]"
            >
              {post.title}
            </li>
          </ol>
        </nav>

        <article>
          {/* Header */}
          <header className="mb-8 sm:mb-10">
            {/* Back button (left) + category tag (right) on one row */}
            <div className="flex items-center justify-between gap-4 mb-5">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-brand-brick font-medium text-sm hover:text-gray-900 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to all articles
              </Link>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-brand-brick/10 text-brand-brick whitespace-nowrap">
                <Tag className="w-3.5 h-3.5 flex-shrink-0" />
                {post.categoryLabel}
              </span>
            </div>

            <h1 className="!text-3xl sm:!text-4xl md:!text-5xl font-bold text-gray-900 !leading-tight tracking-tight mb-5">
              {post.title}
            </h1>

            <p className="!text-base sm:!text-lg md:!text-xl text-gray-600 !leading-relaxed mb-6">
              {post.excerpt}
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500 pb-6 border-b border-gray-200">
              <span className="inline-flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {post.author?.name}
              </span>
              {post.datePublished && (
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.datePublished}>
                    {formatDate(post.datePublished)}
                  </time>
                </span>
              )}
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* Cover image */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-8 sm:mb-10 border border-gray-200 bg-gradient-to-br from-gray-100 to-gray-200">
            {post.image ? (
              <Image
                src={post.image}
                alt={post.imageAlt || post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            ) : (
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 25% 20%, rgba(255, 180, 150, 0.4) 0%, transparent 55%), radial-gradient(ellipse at 80% 80%, rgba(255, 150, 180, 0.3) 0%, transparent 55%)",
                }}
              />
            )}
          </div>

          {/* Body */}
          <BlogContent content={post.content} />

          {/* Tags are kept in data for SEO / OpenGraph but not rendered here. */}

          {/* FAQ */}
          <BlogFaq faqs={post.faqs} />
        </article>

        {/* CTA */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 mt-10 sm:mt-12">
          <h2 className="!text-lg sm:!text-2xl font-bold text-gray-900 mb-3">
            Ready to grow your brand?
          </h2>
          <p className="!text-base sm:!text-lg text-gray-600 !leading-relaxed mb-5">
            Social Engagement Group blends human creativity with AI-powered
            execution to drive real, measurable growth. Let&apos;s talk about
            what that could look like for you.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-brick text-white font-medium rounded-full hover:bg-gray-900 transition-all duration-200"
          >
            Book a Free Strategy Call
          </Link>
        </section>

        {/* Related services — internal links from blog → service pages */}
        <RelatedServices services={relatedServices} />
        </div>
        {/* End reading column */}

        {/* Related — spans the full frame so cards match the master page width */}
        <RelatedPosts posts={related} />
      </div>
    </main>
  );
}
