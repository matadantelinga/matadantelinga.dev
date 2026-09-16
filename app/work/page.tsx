import type { Metadata } from "next";
import { ProjectList } from "@/components/portfolio/project-list";

export const metadata: Metadata = {
  title: "Selected Work — Matadantelinga",
  description:
    "A selection of products, interfaces and systems designed and built by Matadantelinga.",
};

export default function WorkPage() {
  return (
    <section className="container-edit pt-32 pb-24 md:pt-44 md:pb-32">
      <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[0.96]">
        SELECTED
        <br />
        WORK
      </h1>
      <p className="mt-6 text-secondary max-w-md text-lg">
        A selection of products, interfaces and systems I&apos;ve designed and
        built.
      </p>

      <div className="mt-16">
        <ProjectList />
      </div>
    </section>
  );
}
