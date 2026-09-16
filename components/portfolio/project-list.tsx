import { projects } from "@/data/projects";
import { ProjectItem } from "./project-item";

export function ProjectList() {
  return (
    <div>
      {projects.map((project) => (
        <ProjectItem key={project.slug} project={project} />
      ))}
      <div className="border-t border-border" />
    </div>
  );
}
