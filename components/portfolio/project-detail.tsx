import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { getAdjacentProjects } from "@/data/projects";

export function ProjectDetail({ project }: { project: Project }) {
  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <article>
      <section className="container-edit pt-32 pb-16 md:pt-44 md:pb-20">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-secondary hover:text-blue transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Work
        </Link>

        <span className="label-meta">{project.index}</span>
        <h1 className="mt-3 text-4xl md:text-6xl font-medium tracking-tight leading-[0.98] max-w-3xl">
          {project.title.toUpperCase()}
        </h1>
        <p className="mt-6 text-secondary max-w-xl text-lg">{project.description}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 border-t border-border pt-8">
          <div>
            <p className="label-meta mb-2">Role</p>
            <p>{project.role[0]}</p>
          </div>
          <div>
            <p className="label-meta mb-2">Year</p>
            <p>{project.year}</p>
          </div>
          <div>
            <p className="label-meta mb-2">Stack</p>
            <p>{project.technologies.slice(0, 3).join(" · ")}</p>
          </div>
          <div>
            <p className="label-meta mb-2">Type</p>
            <p>{project.type}</p>
          </div>
        </div>
      </section>

      <section className="container-edit pb-20">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-white border border-border">
          <Image src={project.coverImage} alt={project.title} fill className="object-cover" />
        </div>
      </section>

      <section className="container-edit py-16 border-t border-border grid grid-cols-1 lg:grid-cols-12 gap-8">
        <h2 className="lg:col-span-4 text-2xl md:text-3xl font-medium tracking-tight">
          THE PROBLEM
        </h2>
        <p className="lg:col-span-7 lg:col-start-6 text-secondary text-lg max-w-2xl">
          {project.problem}
        </p>
      </section>

      <section className="container-edit py-16 border-t border-border grid grid-cols-1 lg:grid-cols-12 gap-8">
        <h2 className="lg:col-span-4 text-2xl md:text-3xl font-medium tracking-tight">
          THE APPROACH
        </h2>
        <ul className="lg:col-span-7 lg:col-start-6 space-y-3 text-secondary text-lg max-w-2xl">
          {project.approach.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="container-edit py-16 border-t border-border">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-10">
          THE RESULT
        </h2>
        <div className="space-y-6">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-white border border-border">
            <Image src={project.coverImage} alt={`${project.title} overview`} fill className="object-cover" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((img) => (
              <div key={img} className="relative aspect-[4/3] overflow-hidden bg-white border border-border">
                <Image src={img} alt={project.title} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-edit py-16 border-t border-border grid grid-cols-1 lg:grid-cols-12 gap-8">
        <h2 className="lg:col-span-4 text-2xl md:text-3xl font-medium tracking-tight">
          MY ROLE
        </h2>
        <ul className="lg:col-span-7 lg:col-start-6 space-y-2 text-secondary text-lg">
          {project.role.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </section>

      <section className="container-edit py-16 border-t border-border grid grid-cols-1 lg:grid-cols-12 gap-8">
        <h2 className="lg:col-span-4 text-2xl md:text-3xl font-medium tracking-tight">
          TECHNOLOGY
        </h2>
        <div className="lg:col-span-7 lg:col-start-6 flex flex-wrap gap-x-8 gap-y-2 text-secondary text-lg uppercase tracking-[0.08em]">
          {project.technologies.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </section>

      <section className="container-edit py-14 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {prev ? (
          <Link href={`/work/${prev.slug}`} className="group flex items-center gap-3 text-sm uppercase tracking-[0.14em] hover:text-blue transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Previous Project
          </Link>
        ) : <span />}

        <Link href="/work" className="text-sm uppercase tracking-[0.14em] text-secondary hover:text-blue transition-colors">
          Back to All Work
        </Link>

        {next ? (
          <Link href={`/work/${next.slug}`} className="group flex items-center gap-3 text-sm uppercase tracking-[0.14em] hover:text-blue transition-colors">
            Next Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        ) : <span />}
      </section>
    </article>
  );
}
