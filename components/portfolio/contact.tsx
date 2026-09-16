import { ArrowUpRight } from "lucide-react";
import { CONTACT } from "@/data/site";

export function Contact() {
  return (
    <section className="container-edit py-24 md:py-32 border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-8">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-[0.98]">
            HAVE SOMETHING
            <br />
            WORTH <span className="text-blue">BUILDING?</span>
          </h2>
          <p className="mt-6 text-secondary max-w-md">
            Have a project, product or idea you&apos;d like to discuss?
            Let&apos;s talk.
          </p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="group mt-10 inline-flex items-center gap-2 bg-ink text-white px-6 py-3 text-xs uppercase tracking-[0.14em] hover:bg-blue transition-colors"
          >
            Start a Conversation
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end text-sm">
          <a href={`mailto:${CONTACT.email}`} className="hover:text-blue transition-colors">
            {CONTACT.email}
          </a>
          <a href={CONTACT.whatsapp} className="hover:text-blue transition-colors" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={CONTACT.linkedin} className="hover:text-blue transition-colors" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={CONTACT.github} className="hover:text-blue transition-colors" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
