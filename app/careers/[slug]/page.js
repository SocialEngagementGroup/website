import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Globe,
  Clock,
  Briefcase,
  Calendar,
  Check,
  Lock,
} from "lucide-react";
import { getJobBySlug, isJobOpen } from "@/data/jobsData";
import siteMetadata, { ogDefaults, twitterDefaults } from "@/data/metadata";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  
  if (!job) return {};

  const title = `${job.title} | ${siteMetadata.careers.title}`;
  const description = job.summary || siteMetadata.careers.description;

  return {
    title,
    description,
    alternates: {
      canonical: `/careers/${slug}`,
    },
    openGraph: {
      ...ogDefaults,
      title,
      description,
      url: `/careers/${slug}`,
    },
    twitter: {
      ...twitterDefaults,
      title,
      description,
    },
  };
}

/**
 * JobDetailPage
 *
 * Full job description page with clean, minimal design.
 * Uses global CSS heading/paragraph sizing from globals.css.
 */
export default async function JobDetailPage({ params }) {
  const { slug } = await params;
  const job = slug ? getJobBySlug(slug) : undefined;
  const open = job ? isJobOpen(job) : false;

  return (
    <main className="min-h-screen bg-brand-gray relative overflow-hidden">
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

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl pt-24 sm:pt-32 pb-16 sm:pb-24 relative z-10">
        {/* Back Link */}
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-brand-brick hover:text-gray-900 transition-colors mb-6 sm:mb-8 group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="p3 font-medium">
            Back to all positions
          </span>
        </Link>

        {job ? (
          <div>
            {/* Job Header */}
            <div className="mb-8 sm:mb-10">
              <h1 className="!text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl font-bold text-gray-900 !leading-tight mb-5 sm:mb-6">
                {job.title}
              </h1>

              {/* Job Meta Pills */}
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white border border-gray-200 text-gray-600">
                  <Clock className="w-3.5 h-3.5" />
                  {job.type}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white border border-gray-200 text-gray-600">
                  <Briefcase className="w-3.5 h-3.5" />
                  {job.experience}
                </span>
                {open ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white border border-gray-200 text-gray-600">
                    <Calendar className="w-3.5 h-3.5" />
                    Apply by {job.deadline}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-red-50 border border-red-200 text-red-600">
                    <Lock className="w-3.5 h-3.5" />
                    Application Closed
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white border border-gray-200 text-gray-600">
                  <Globe className="w-3.5 h-3.5" />
                  {job.location}
                </span>
              </div>
            </div>

            {/* Job Content */}
            <div className="space-y-10 sm:space-y-12">
              {/* About the Role */}
              <section>
                <h2 className="!text-xl sm:!text-2xl font-bold text-gray-900 mb-4">
                  About the Role
                </h2>
                <p className="!text-base sm:!text-lg text-gray-600 !leading-relaxed">
                  {job.aboutRole}
                </p>
              </section>

              {/* What You'll Do */}
              <section>
                <h2 className="!text-xl sm:!text-2xl font-bold text-gray-900 mb-4">
                  What You&apos;ll Do
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-brand-brick" />
                      <span className="p3 text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* What We're Looking For */}
              <section>
                <h2 className="!text-xl sm:!text-2xl font-bold text-gray-900 mb-4">
                  What We&apos;re Looking For
                </h2>
                <ul className="space-y-3">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-brand-brick" />
                      <span className="p3 text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* What We Offer */}
              <section>
                <h2 className="!text-xl sm:!text-2xl font-bold text-gray-900 mb-4">
                  What We Offer
                </h2>
                <ul className="space-y-3">
                  {job.benefits ? (
                    job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-brand-brick mt-0.5" />
                        <span className="p3 text-gray-600 font-medium">
                          {benefit}
                        </span>
                      </li>
                    ))
                  ) : (
                    <>
                      <li className="flex items-start gap-3">
                        <Check className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-brand-brick mt-0.5" />
                        <span className="p3 text-gray-600">
                          <strong className="text-gray-900">
                            Remote-first culture:
                          </strong>{" "}
                          Work from anywhere with flexible hours
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-brand-brick mt-0.5" />
                        <span className="p3 text-gray-600">
                          <strong className="text-gray-900">
                            Competitive compensation:
                          </strong>{" "}
                          {job.compensation}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-brand-brick mt-0.5" />
                        <span className="p3 text-gray-600">
                          <strong className="text-gray-900">
                            Growth opportunities:
                          </strong>{" "}
                          Learn and grow with a fast-paced team
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-brand-brick mt-0.5" />
                        <span className="p3 text-gray-600">
                          <strong className="text-gray-900">
                            Collaborative environment:
                          </strong>{" "}
                          Flat hierarchy with open communication
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-brand-brick mt-0.5" />
                        <span className="p3 text-gray-600">
                          <strong className="text-gray-900">
                            Meaningful work:
                          </strong>{" "}
                          Make real impact on client success
                        </span>
                      </li>
                    </>
                  )}
                </ul>
              </section>

              {/* Apply CTA */}
              <section className="pt-6 border-t border-gray-200">
                {open ? (
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200">
                    <h3 className="!text-lg sm:!text-xl font-bold text-gray-900 mb-3" style={{ textTransform: 'none' }}>
                      Interested in this role?
                    </h3>
                    <p className="p3 text-gray-600 leading-relaxed mb-5">
                      We&apos;d love to hear from you. Reach out through our
                      contact page and we&apos;ll get back to you about next
                      steps.
                    </p>
                    <Link
                      href="/contact-us"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-brand-brick text-white font-medium rounded-full hover:bg-gray-900 transition-all duration-200 cursor-pointer"
                    >
                      Apply Now
                    </Link>
                  </div>
                ) : (
                  <div className="bg-red-50 rounded-2xl p-6 sm:p-8 border border-red-200">
                    <h3 className="!text-lg sm:!text-xl font-bold text-gray-900 mb-3 inline-flex items-center gap-2" style={{ textTransform: 'none' }}>
                      <Lock className="w-5 h-5 text-red-600" />
                      Application Closed
                    </h3>
                    <p className="p3 text-gray-600 leading-relaxed mb-5">
                      We&apos;re no longer accepting applications for this role.
                      Browse our other opportunities to find your fit.
                    </p>
                    <Link
                      href="/careers"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-brand-brick text-white font-medium rounded-full hover:bg-gray-900 transition-all duration-200 cursor-pointer"
                    >
                      View Open Jobs
                    </Link>
                  </div>
                )}
              </section>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <h1 className="font-bold text-gray-900 mb-4">
              Position Not Found
            </h1>
            <p className="text-gray-500 mb-6 sm:mb-8">
              The job you&apos;re looking for doesn&apos;t exist or has been
              filled.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-brick text-white font-medium rounded-full hover:bg-gray-900 transition-all duration-200 cursor-pointer"
            >
              View All Positions
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
