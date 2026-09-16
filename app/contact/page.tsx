import type { Metadata } from "next";
import { Contact } from "@/components/portfolio/contact";

export const metadata: Metadata = {
  title: "Contact — Matadantelinga",
  description:
    "Have a project, product or idea you'd like to discuss? Let's talk.",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <Contact />
    </div>
  );
}
