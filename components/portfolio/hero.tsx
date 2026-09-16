"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const line = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.15 + i * 0.08,
    },
  }),
};

export function Hero() {
  return (
    <section className="relative container-edit pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-start">
        {/* Headline */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <h1 className="font-sans text-[2.6rem] leading-[0.98] tracking-tightest sm:text-6xl md:text-7xl xl:text-[5.5rem] font-medium">
            {["I BUILD", "DIGITAL PRODUCTS", "THAT "].map((row, i) => (
              <span key={row} className="block overflow-hidden">
                <motion.span
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={line}
                  className="block"
                >
                  {row === "THAT " ? (
                    <>
                      THAT{" "}
                      <span className="relative inline-block text-blue underline-blue">
                        FEEL RIGHT.
                      </span>
                    </>
                  ) : (
                    row
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-md space-y-1"
          >
            <p className="text-ink">Frontend / Full-Stack Developer</p>
            <p className="text-secondary">React · Next.js · TypeScript</p>
            <p className="text-secondary">Based in Indonesia</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.75,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.14em] text-secondary">
              Open to New Projects
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 bg-ink text-white px-6 py-3 text-xs uppercase tracking-[0.14em] hover:bg-blue transition-colors"
            >
              View My Work
              <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-[0.14em] border border-border hover:border-blue hover:text-blue transition-colors"
            >
              Let&apos;s Talk
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Photo */}
        <div className="lg:col-span-5 order-1 lg:order-2 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative ml-auto max-w-sm lg:max-w-none"
          >
            {/* blue accent shape behind photo */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-blue-light -z-10" />

            <div className="relative overflow-hidden bg-white border border-border">
              <Image
                src="/images/profile.jpg"
                alt="Portrait of Matadantelinga, Frontend / Full-Stack Developer"
                width={1043}
                height={1405}
                priority
                className="w-full h-auto object-cover grayscale-[0.06]"
              />
              {/* subtle blue tint overlay to tie photo into palette */}
              <div className="pointer-events-none absolute inset-0 bg-blue mix-blend-multiply opacity-[0.05]" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
            </div>

            <div className="absolute -bottom-5 left-4 bg-blue text-white text-[10px] uppercase tracking-[0.14em] px-3 py-2">
              Open to New Projects
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
