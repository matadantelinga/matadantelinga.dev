import { CONTACT } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-edit py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em]">SUTEJA</p>
          <p className="text-secondary text-sm mt-1">
            Frontend / Full-Stack Developer
          </p>
        </div>
        <p className="text-secondary text-sm">© {new Date().getFullYear()} Suteja</p>
        <div className="flex items-center gap-6 text-xs uppercase tracking-[0.14em]">
          <a href={CONTACT.github} className="hover:text-blue transition-colors" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={CONTACT.linkedin} className="hover:text-blue transition-colors" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${CONTACT.email}`} className="hover:text-blue transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
