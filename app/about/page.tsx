import type { Metadata } from "next";
import Image from "next/image";
import { About } from "@/components/portfolio/about";

export const metadata: Metadata = {
  title: "About — Matadantelinga",
  description:
    "Frontend & Designer focused on clean interfaces and maintainable code.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="container-edit pt-32 pb-16 md:pt-44 md:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <span className="label-meta">About</span>
          <h1 className="mt-4 text-5xl md:text-7xl font-medium tracking-tight leading-[0.96]">
            HELLO,
            <br />
            I&apos;M <span className="text-blue">Matadantelinga.</span>
          </h1>
          <p className="mt-8 text-secondary text-lg max-w-lg">
            Frontend developer & designer based in Indonesia, blending code,
            UI/UX, and visual design to turn ideas into thoughtful digital
            experiences.
          </p>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-white border border-border">
            <Image
              src="/images/profile.jpg"
              alt="Matadantelinga"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <About />
    </div>
  );
}
