"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  Cpu,
  ShieldCheck,
  Database,
  Terminal,
} from "lucide-react";

const projects = [
  {
    title: "TaskMind AI Automation Suite",
    description:
      "AI-powered automation for businesses: document pipelines, Excel cleaners, and smart agents wired to real data.",
    tags: ["AI Automation", "FastAPI", "Postgres", "RAG"],
    link: "https://github.com/zaidkhan-automation",
  },
  {
    title: "SentinelTrace IDS",
    description:
      "Intrusion detection system with log analysis, alerting pipeline, and API-ready architecture for real infra.",
    tags: ["Cyber Security", "Python", "FastAPI"],
    link: "#",
  },
  {
    title: "Nebula Graph Experiments",
    description:
      "Custom graph-based neural architecture: metric spaces, activation fields, and hybrid semantic prediction.",
    tags: ["Graph DB", "Nebula", "Research"],
    link: "#",
  },
];

const skills = [
  {
    icon: Cpu,
    title: "AI & Automation",
    items: [
      "RAG pipelines & vector search",
      "Document processing & agents",
      "LLM-based internal tools",
    ],
  },
  {
    icon: Database,
    title: "Backend & Data",
    items: [
      "FastAPI / REST APIs",
      "PostgreSQL + pgvector",
      "Data pipelines & ETL",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security & Reliability",
    items: [
      "Auth, rate-limit, replay protection",
      "Basic intrusion detection flows",
      "Secure API design",
    ],
  },
  {
    icon: Terminal,
    title: "Dev & Ops",
    items: [
      "Linux, Docker basics",
      "Prod-style project structure",
      "Monitoring-ready architecture",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-violet-500/25 blur-3xl" />
      </div>

      {/* Subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#1e293b_0,_transparent_55%)] opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b33_1px,transparent_1px),linear-gradient(to_bottom,#1e293b33_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        {/* Navbar */}
        <header className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/60 bg-slate-900/80 shadow-[0_0_30px_rgba(34,211,238,0.4)]">
              <span className="text-lg font-semibold tracking-tight text-cyan-300">
                U
              </span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-medium text-slate-200">
                Zaid
              </p>
              <p className="text-xs text-slate-400">
                AI • Automation • Security
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <a
              href="#projects"
              className="hidden rounded-full border border-slate-700 bg-slate-900/70 px-4 py-1.5 text-slate-300 backdrop-blur hover:border-cyan-400/80 hover:text-cyan-200 sm:inline-flex"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hidden rounded-full border border-cyan-400/60 bg-cyan-500/10 px-4 py-1.5 text-cyan-200 backdrop-blur hover:bg-cyan-500/20 sm:inline-flex"
            >
              Contact
            </a>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-700 bg-slate-900/80 p-2 text-slate-300 hover:border-cyan-400/80 hover:text-cyan-200"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-700 bg-slate-900/80 p-2 text-slate-300 hover:border-cyan-400/80 hover:text-cyan-200"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="mb-14 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-300 backdrop-blur">
              <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
              Available for serious projects
            </div>

            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-[2.85rem]">
                I build{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-300 bg-clip-text text-transparent">
                  AI-powered systems
                </span>{" "}
                that actually ship.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-[0.95rem]">
                Backend, AI automation, and security-focused workflows. From
                RAG pipelines to intrusion detection and graph-based neural
                experiments, I like building things that feel slightly illegal
                in how effective they are.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/70 bg-cyan-500/15 px-5 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_40px_rgba(34,211,238,0.4)] backdrop-blur hover:bg-cyan-500/25"
              >
                View projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-5 py-2 text-sm font-medium text-slate-200 backdrop-blur hover:border-cyan-400/70 hover:text-cyan-100"
              >
                Contact me
              </a>
            </div>

            {/* Stack pills */}
            <div className="mt-2 flex flex-wrap gap-2 text-[0.68rem] text-slate-300">
              {[
                "AI Automation",
                "RAG & Vector DB",
                "FastAPI",
                "PostgreSQL / pgvector",
                "Cyber Security",
                "Linux & Docker basics",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right hero visual */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-3xl border border-slate-700/80 bg-slate-900/70 p-4 backdrop-blur shadow-[0_0_60px_rgba(15,23,42,0.9)]">
              <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
                <span>live-systems.ts</span>
                <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-[0.65rem] text-emerald-300">
                  status: running
                </span>
              </div>

              <div className="space-y-2 rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                <LabelRow label="pipelines" value="3 active" />
                <LabelRow label="threat_monitor" value="online" />
                <LabelRow label="vector_index" value="synced • 4D metric" />
                <LabelRow label="latency" value="~89 ms" />
                <LabelRow label="uptime" value="99.2%" />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 text-[0.7rem]">
                <MiniCard title="RAG Bots" subtitle="Docs, contracts, resumes" />
                <MiniCard title="Security" subtitle="Gateway • IDS • logs" />
                <MiniCard title="Graph Space" subtitle="Nebula neurons grid" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-14">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-slate-50">
                Featured work
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                A few things that represent how I think and build.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="group relative flex flex-col rounded-2xl border border-slate-800/90 bg-slate-950/80 p-4 backdrop-blur hover:border-cyan-400/70 hover:shadow-[0_0_50px_rgba(34,211,238,0.35)]"
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 group-hover:border-cyan-400/80 group-hover:text-cyan-200"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
                <p className="mb-3 text-xs leading-relaxed text-slate-300">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-700 bg-slate-900/80 px-2 py-0.5 text-[0.65rem] text-slate-300 group-hover:border-cyan-400/70 group-hover:text-cyan-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-14">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-slate-50">What I do</h2>
            <p className="mt-1 text-xs text-slate-400">
              From quick MVPs to more serious, production-minded systems.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-950/75 p-4 backdrop-blur"
              >
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/70 bg-cyan-500/10">
                  <skill.icon className="h-5 w-5 text-cyan-300" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {skill.title}
                  </h3>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {skill.items.map((item) => (
                      <li key={item} className="flex gap-1.5">
                        <span className="mt-[6px] h-1 w-1 rounded-full bg-cyan-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-auto">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5 backdrop-blur md:p-6">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-slate-50">
                  Let&apos;s build something that actually matters.
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  Prefer projects with depth: AI, security, backend-heavy, or
                  automation that saves real time and money.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm">
              <a
                href="mailto:contact@taskmindai.net"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/70 bg-cyan-500/15 px-5 py-2 text-cyan-100 hover:bg-cyan-500/25"
              >
                <Mail className="h-4 w-4" />
                contact@taskmindai.net
              </a>

              <div className="flex gap-2 text-xs text-slate-400">
                <span>Based in India</span>
                <span className="text-slate-600">•</span>
                <span>Remote-friendly</span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-[0.7rem] text-slate-500">
            Built with attention to detail, late nights, and too many logs.
          </p>
        </section>
      </div>
    </main>
  );
}

function LabelRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 text-[0.7rem]">
      <span className="text-slate-400">{label}</span>
      <span className="text-slate-100">{value}</span>
    </div>
  );
}

function MiniCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-2.5">
      <p className="text-[0.7rem] font-semibold text-slate-100">{title}</p>
      <p className="mt-1 text-[0.65rem] text-slate-400">{subtitle}</p>
    </div>
  );
}
