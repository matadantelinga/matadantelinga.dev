import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export function ProjectsPreview() {
  return (
    <section className="container-edit py-24 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[0.98]">
          SELECTED
          <br />
          WORK
        </h2>
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] hover:text-blue transition-colors"
        >
          View All Work
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="space-y-1">
        {projects.slice(0, 3).map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group flex items-baseline justify-between border-t border-border py-6 hover:pl-2 transition-all"
          >
            <span className="flex items-baseline gap-4">
              <span className="label-meta">{project.index}</span>
              <span className="text-xl md:text-2xl tracking-tight group-hover:text-blue transition-colors">
                {project.title.toUpperCase()}
              </span>
            </span>
            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-blue" />
          </Link>
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
}
