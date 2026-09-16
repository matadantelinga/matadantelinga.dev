export interface Service {
  index: string;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    index: "01",
    title: "Frontend & Designer",
    description:
      "End-to-end product builds — from architecture to polished interface — using Next.js and TypeScript.",
  },
  {
    index: "02",
    title: "Admin & Dashboard Systems",
    description:
      "Internal tools and dashboards designed for clarity, built to handle real operational complexity.",
  },
  {
    index: "03",
    title: "Figma → Production",
    description:
      "Turning finished designs into pixel-accurate, responsive, production-ready code.",
  },
  {
    index: "04",
    title: "Existing App Improvement",
    description:
      "Auditing and refactoring existing codebases — performance, structure, and interface quality.",
  },
  {
    index: "05",
    title: "API & Frontend Integration",
    description:
      "Connecting frontend experiences to REST APIs with clean data flow and sensible state management.",
  },
  {
    index: "06",
    title: "Mobile App Development",
    description:
      "Cross-platform apps with React Native, hybrid builds with Ionic, and fully native performance with Flutter.",
  },
];
