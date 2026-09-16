"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { iProject } from "@/lib/interfaces/project";

export function ProjectItem({ project }: { project: iProject }) {
  return (
    <Link href={`/work/${project.slug}`} className="block group">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="border-t border-border py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center"
      >
        <div className="md:col-span-1">
          <span className="label-meta">{project.index}</span>
        </div>

        <div className="md:col-span-5 order-3 md:order-2">
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight flex items-center gap-2">
            <span className="transition-colors group-hover:text-blue">
              {project.title.toUpperCase()}
            </span>
            <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue" />
          </h3>
          <p className="mt-3 text-secondary max-w-sm">{project.description}</p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-secondary">
            {project.technologies.slice(0, 3).join(" / ")}
          </p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-secondary">
            {project.year}
          </p>
        </div>

        <div className="md:col-span-6 order-2 md:order-3">
          <div className="relative overflow-hidden aspect-[4/3] bg-white border border-border">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover scale-[0.98] group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
