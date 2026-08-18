import { getJobBySlug } from "@/data/jobsData";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  const title = job
    ? `${job.title} | Careers at Social Engagement Group - SEG`
    : "Career Opportunity | Social Engagement Group - SEG";
  const description = job?.summary || "Explore career opportunities at Social Engagement Group.";

  return {
    title,
    description,
    alternates: {
      canonical: `/careers/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/careers/${slug}`,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default function JobLayout({ children }) {
  return children;
}
