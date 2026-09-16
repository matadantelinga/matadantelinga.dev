import { Hero } from "@/components/portfolio/hero";
import { ProjectsPreview } from "@/components/portfolio/projects-preview";
import { About } from "@/components/portfolio/about";
import { Services } from "@/components/portfolio/services";
import { Contact } from "@/components/portfolio/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsPreview />
      <About />
      <Services />
      <Contact />
    </>
  );
}
