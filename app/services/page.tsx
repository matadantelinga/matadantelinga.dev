import type { Metadata } from "next";
import { Services } from "@/components/portfolio/services";
import { Contact } from "@/components/portfolio/contact";

export const metadata: Metadata = {
  title: "Services — Suteja",
  description: "What you can hire Suteja to do — web applications, dashboards, Figma to production, and more.",
};

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <Services />
      <Contact />
    </div>
  );
}
