export interface Project {
  slug: string;
  index: string;
  title: string;
  description: string;
  problem: string;
  approach: string[];
  role: string[];
  year: string;
  type: string;
  technologies: string[];
  coverImage: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: "admin-platform",
    index: "01",
    title: "Admin Platform",
    description:
      "A scalable administrative platform for managing users, content and operational workflows.",
    problem:
      "Placeholder — replace with the real problem this product solved. Describe the operational pain point, who experienced it, and why the existing solution (if any) fell short.",
    approach: [
      "Placeholder — describe the architecture decisions (e.g. Next.js App Router, server components).",
      "Placeholder — describe the component system and design tokens used.",
      "Placeholder — describe the responsive strategy across breakpoints.",
      "Placeholder — describe API integration and data-fetching approach.",
      "Placeholder — describe state management decisions.",
    ],
    role: [
      "Frontend Development",
      "UI Implementation",
      "Responsive Development",
      "API Integration",
      "Component Architecture",
    ],
    year: "2026",
    type: "Web Application",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "shadcn/ui", "REST API"],
    coverImage: "/projects/project-01-cover.jpg",
    images: ["/projects/project-01-01.jpg", "/projects/project-01-02.jpg"],
  },
  {
    slug: "ecommerce-platform",
    index: "02",
    title: "E-Commerce Platform",
    description:
      "A modern commerce experience focused on simplicity and conversion.",
    problem:
      "Placeholder — replace with the real problem this product solved.",
    approach: [
      "Placeholder — describe the architecture decisions.",
      "Placeholder — describe the UX decisions around browsing and checkout.",
      "Placeholder — describe the responsive strategy.",
      "Placeholder — describe API integration and data-fetching approach.",
      "Placeholder — describe state management decisions.",
    ],
    role: [
      "Frontend Development",
      "UI Implementation",
      "Responsive Development",
      "API Integration",
    ],
    year: "2025",
    type: "Web Application",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API"],
    coverImage: "/projects/project-02-cover.jpg",
    images: ["/projects/project-02-01.jpg", "/projects/project-02-02.jpg"],
  },
  {
    slug: "booking-platform",
    index: "03",
    title: "Booking Platform",
    description:
      "A streamlined booking system built for clarity and speed across devices.",
    problem:
      "Placeholder — replace with the real problem this product solved.",
    approach: [
      "Placeholder — describe the architecture decisions.",
      "Placeholder — describe the UX decisions around the booking flow.",
      "Placeholder — describe the responsive strategy.",
      "Placeholder — describe API integration and data-fetching approach.",
      "Placeholder — describe state management decisions.",
    ],
    role: ["Frontend Development", "UI Implementation", "Responsive Development"],
    year: "2025",
    type: "Web Application",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    coverImage: "/projects/project-03-cover.jpg",
    images: ["/projects/project-03-01.jpg", "/projects/project-03-02.jpg"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  const prev = i > 0 ? projects[i - 1] : null;
  const next = i < projects.length - 1 ? projects[i + 1] : null;
  return { prev, next };
}
