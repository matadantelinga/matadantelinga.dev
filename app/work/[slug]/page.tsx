import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import { ProjectDetail } from "@/components/portfolio/project-detail";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Matadantelinga`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
