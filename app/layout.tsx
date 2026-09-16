import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/portfolio/navbar";
import { Footer } from "@/components/portfolio/footer";

export const metadata: Metadata = {
  title: "Matadantelinga — Frontend Developer & Digital Designer",
  description:
    "Matadantelinga is building digital products that feel right — with React, Next.js, Angular and TypeScript.",
  openGraph: {
    title: "Matadantelinga — Frontend Developer & Digital Designer",
    description: "Matadantelinga is building digital products that feel right",
    images: ["/images/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
