/**
 * Jobs Data
 *
 * Job listings and filter definitions for the Careers page.
 */

export const jobFilters = [
  { value: "open", label: "Open Jobs" },
  { value: "all", label: "View All" },
];

export const allJobs = [
  {
    id: "full-stack-web-developer",
    title: "Full Stack Web Developer",
    department: "Development",
    type: "Full-time",
    location: "100% Remote",
    experience: "2–3 Years",
    compensation: "Competitive, based on experience",
    deadline: "April 30, 2026",
    summary:
      "Build high-performance, scalable web applications using Next.js and modern backend technologies.",
    slug: "full-stack-web-developer",
    active: true,
    aboutRole:
      "We are looking for a passionate and detail-oriented Full Stack Web Developer with hands-on experience in both frontend and backend development. You will be responsible for building high-performance, scalable web applications using modern technologies like Next.js, while working closely with design, product, and marketing teams. This role is ideal for someone who enjoys shipping fast, writing clean code, and solving real-world problems.",
    responsibilities: [
      "Develop and maintain full-stack web applications using modern frameworks",
      "Build responsive, high-performance frontend interfaces using Next.js / React",
      "Design and develop scalable backend services, APIs, and integrations",
      "Work with databases and ensure efficient data handling and storage",
      "Optimize applications for Speed, SEO, and Performance",
      "Collaborate with designers to translate UI/UX into functional applications",
      "Debug, troubleshoot, and improve existing systems",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and contribute to best practices",
    ],
    requirements: [
      "2–3 years of experience in full-stack web development",
      "Strong experience with Next.js, React.js, and modern JavaScript (ES6+)",
      "Solid understanding of backend development (Node.js / APIs)",
      "Experience with REST APIs and third-party integrations",
      "Familiarity with databases (MongoDB, PostgreSQL, or similar)",
      "Understanding of authentication, authorization, and security best practices",
      "Experience with Git and version control workflows",
      "Knowledge of responsive design and cross-browser compatibility",
      "Experience with Supabase / Firebase / serverless architecture (Preferred)",
      "Familiarity with AI integrations or automation tools (n8n, APIs, etc.) (Preferred)",
      "Strong problem-solving mindset and detail-oriented",
      "Ability to work independently and deliver under deadlines",
    ],
    benefits: [
      "Opportunity to work on real-world, high-impact projects",
      "Fast-paced, growth-driven environment",
      "Exposure to modern tools, AI workflows, and scalable systems",
      "Flexible work culture",
    ],
  },
  {
    id: "graphic-designer",
    title: "Graphic Designer – Branding & Social Media",
    department: "Design",
    type: "Full-time",
    location: "100% Remote",
    experience: "3+ years",
    compensation: "Competitive, based on experience",
    deadline: "November 30, 2025",
    summary: "Create visually engaging brand and social media assets.",
    slug: "graphic-designer",
    active: true,
    aboutRole:
      "We're seeking a creative Graphic Designer to help shape brand identities and produce high-quality visual content across digital platforms. You'll collaborate with marketing and content teams to deliver designs that are both visually compelling and strategically aligned.",
    responsibilities: [
      "Design branding assets, social media content, and marketing materials",
      "Create platform-specific designs for Instagram, Facebook, and digital campaigns",
      "Translate creative briefs into polished visuals across multiple formats",
      "Maintain visual consistency across all brand assets",
      "Manage design files, versions, and deliverables efficiently",
      "Stay updated on design trends and visual best practices",
    ],
    requirements: [
      "Minimum 3 years of professional graphic design experience",
      "Strong proficiency in Photoshop, Illustrator, and Canva",
      "Solid understanding of typography, color theory, and layout",
      "Portfolio showcasing branding and social media design work",
    ],
  },
  {
    id: "digital-marketer",
    title: "Digital Marketer",
    department: "Marketing",
    type: "Full-time",
    location: "100% Remote",
    experience: "5+ years",
    compensation: "Competitive, based on experience",
    deadline: "October 15, 2025",
    summary:
      "Manage and optimize paid media campaigns across major platforms.",
    slug: "digital-marketer",
    active: true,
    aboutRole:
      "We are looking for a performance-driven Digital Marketer who thrives on data, experimentation, and continuous optimization. You will manage paid campaigns across multiple platforms and turn insights into actionable growth strategies.",
    responsibilities: [
      "Launch, manage, and optimize paid campaigns across Google, Meta, and TikTok",
      "Conduct audience, keyword, and competitor research",
      "Set up and manage conversion tracking and A/B testing",
      "Monitor performance metrics and optimize for ROI",
      "Build clear, actionable performance reports",
      "Collaborate with creative teams on ads and landing pages",
      "Stay up to date with platform updates and industry trends",
    ],
    requirements: [
      "5+ years of hands-on paid media experience",
      "Strong analytical and reporting skills",
      "Experience managing budgets and scaling campaigns",
      "Clear communication and strategic thinking",
    ],
  },
  {
    id: "video-editor",
    title: "Video Editor – Short Form Content",
    department: "Marketing",
    type: "Full-time",
    location: "100% Remote",
    experience: "4+ years",
    compensation: "Competitive, based on experience",
    deadline: "September 20, 2025",
    summary: "Edit high-retention short-form videos for social platforms.",
    slug: "video-editor",
    active: true,
    aboutRole:
      "We are seeking a highly creative Video Editor to produce engaging short-form content for Instagram Reels, TikTok, and YouTube Shorts. You'll craft fast-paced, high-retention edits that align with trends and brand voice.",
    responsibilities: [
      "Edit short-form videos optimized for social platforms",
      "Add motion graphics, transitions, sound design, and text animations",
      "Repurpose long-form content into high-impact short clips",
      "Implement hooks and trends to maximize retention",
      "Maintain organized assets and version control",
      "Collaborate closely with content and marketing teams",
    ],
    requirements: [
      "4+ years of professional video editing experience",
      "Strong command of Premiere Pro, After Effects, Final Cut Pro, or CapCut",
      "Portfolio showcasing short-form social content",
      "Strong sense of pacing, storytelling, and visual rhythm",
    ],
  },
  {
    id: "hr-intern",
    title: "HR Intern",
    department: "Operations",
    type: "Internship",
    location: "Remote (US Time Zones)",
    experience: "Entry Level",
    compensation: "Competitive stipend",
    deadline: "August 31, 2025",
    summary: "Support recruitment and staffing operations.",
    slug: "hr-intern",
    active: true,
    aboutRole:
      "As an HR Intern, you will support our staffing and recruitment operations while gaining hands-on exposure to US IT staffing and digital marketing workflows.",
    responsibilities: [
      "Format and prepare consultant resumes for client submissions",
      "Source and organize job requirements",
      "Coordinate with vendors and consultants",
      "Maintain submission trackers and CRM records",
      "Support compliance and documentation processes",
      "Research industry trends and market demands",
    ],
    requirements: [
      "Students or recent graduates in HR, Business, IT, or related fields",
      "Strong communication and organizational skills",
      "Proficiency in Google Workspace",
      "Interest in recruitment and staffing operations",
    ],
  },
];

// Active/open jobs only
export const jobs = allJobs.filter((job) => job.active);

// Whether a job is still open for applications (deadline today or in the future)
export const isJobOpen = (job) => {
  if (!job?.deadline || job.deadline.trim() === "") return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const deadlineDate = new Date(job.deadline);
  return deadlineDate >= today;
};

// Get a single job by slug
export const getJobBySlug = (slug) => {
  return jobs.find((job) => job.slug === slug);
};
