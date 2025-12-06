"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">

      {/* Background gradients */}
      <motion.div
        className="pointer-events-none absolute -top-40 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ x: [0, 40, -20, 0], y: [0, 25, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-violet-500/25 blur-3xl"
        animate={{ x: [0, -35, 20, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* Page container */}
      <div className="relative mx-auto max-w-6xl px-4 pt-6 pb-16">

        {/* HERO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-300 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Available for serious AI & automation work
          </div>

          <h1 className="mt-6 text-4xl font-bold text-slate-100 sm:text-5xl lg:text-6xl max-w-3xl leading-tight">
            I build{" "}
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-300 bg-[length:200%_200%] bg-clip-text text-transparent"
            >
              AI-powered systems
            </motion.span>{" "}
            that actually ship.
          </h1>

          <p className="mt-4 max-w-2xl text-slate-300 text-sm leading-relaxed">
            I enjoy building backend-heavy systems: AI automation, vector search,
            RAG-inspired bots, security workflows, dashboards, and scalable tools
            that don’t collapse under pressure.
          </p>

          {/* Hero buttons */}
          <div className="mt-8 flex gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/70 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-100 hover:bg-cyan-500/20"
            >
              View projects
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-sm text-slate-200 hover:border-cyan-400/70 hover:text-cyan-100"
            >
              Contact me
            </Link>
          </div>

          {/* Skill tags */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-400">
            {[
              "AI Automation",
              "RAG-style systems",
              "FastAPI",
              "PostgreSQL / pgvector",
              "Cyber Security basics",
              "Linux & Docker",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className="mb-20">
          <h2 className="text-xl font-semibold text-slate-100">Featured work</h2>
          <p className="mt-1 text-xs text-slate-400">Some things I’ve built recently.</p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Excel Cleaner SaaS",
                desc: "Clean & normalize Excel files instantly. Built using Python, Pandas & a clean UI.",
                tech: ["Python", "Pandas", "SaaS"],
              },
              {
                title: "Resume Screener AI",
                desc: "Embedding-based resume ranking tool powered by FastAPI + PGVector.",
                tech: ["FastAPI", "Postgres", "Embeddings"],
              },
              {
                title: "SentinelTrace IDS",
                desc: "Lightweight intrusion detection prototype with API-based alerts.",
                tech: ["Security", "FastAPI", "Python"],
              },
            ].map((p) => (
              <Tilt key={p.title} tiltMaxAngleX={6} tiltMaxAngleY={6}>
                <motion.article
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-slate-800 bg-slate-950 p-4 hover:border-cyan-400/70"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-slate-100">{p.title}</h3>
                    <ExternalLink className="h-4 w-4 text-slate-400" />
                  </div>
                  <p className="mt-2 text-xs text-slate-300">{p.desc}</p>
                  <div className="mt-3 flex gap-2 flex-wrap">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-slate-700 bg-slate-900 px-2 py-0.5 text-[0.65rem] text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </Tilt>
            ))}
          </div>
        </section>

        {/* CONTACT CTA */}
        <section id="contact" className="mt-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
            <h2 className="text-lg font-semibold text-slate-100">
              Let&apos;s build something productive.
            </h2>
            <p className="mt-1 text-xs text-slate-400">
              Prefer backend-heavy, AI-driven, automation-focused work.
            </p>

            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/70 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-100 hover:bg-cyan-500/20"
            >
              Contact page
            </Link>
          </div>

          <p className="mt-4 text-center text-[0.7rem] text-slate-500">
            Built by Zaid with focus, clarity, and clean architecture.
          </p>
        </section>
      </div>
    </main>
  );
}
