import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/**
 * RelatedServices Component
 *
 * Links a blog article to the SEG service pages most relevant to its category.
 * Automatic internal linking from blog → services with no per-article config.
 */
const RelatedServices = ({ services = [] }) => {
  if (!services.length) return null;

  return (
    <section className="mt-10 sm:mt-12">
      <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-brand-gray p-6 sm:p-8">
        <div className="mb-5 sm:mb-6 text-center">
          <h2 className="!text-xl sm:!text-2xl font-bold text-gray-900 mb-1.5">
            How we can help
          </h2>
          <p className="p3 text-gray-500">
            Related services to put these ideas into action.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex items-center justify-between gap-4 rounded-2xl bg-white border border-gray-200 p-4 sm:p-5 hover:border-brand-brick hover:shadow-[0_8px_24px_rgba(151,85,84,0.12)] transition-all duration-200"
            >
              <span className="font-bold text-gray-900 group-hover:text-brand-brick transition-colors">
                {service.name}
              </span>
              <span className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-gray text-gray-600 group-hover:bg-brand-brick group-hover:text-white transition-all duration-200">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
