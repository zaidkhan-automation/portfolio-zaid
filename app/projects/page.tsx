// app/projects/page.tsx
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Excel Cleaner SaaS",
    description:
      "Clean and normalize messy Excel sheets with one click. Built using Python, Pandas, and a web UI.",
    tech: ["Python", "Pandas", "Automation"],
    link: "https://github.com/zaidkhan-automation",
  },
  {
    title: "Smart Resume Screener",
    description:
      "Upload resumes, get ranked candidates using embeddings and scoring logic.",
    tech: ["FastAPI", "PostgreSQL", "Embeddings"],
    link: "https://github.com/zaidkhan-automation",
  },
  {
    title: "SentinelTrace IDS",
    description:
      "Prototype intrusion detection system with log processing and alerting.",
    tech: ["Python", "FastAPI", "Security"],
    link: "https://github.com/zaidkhan-automation",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold text-slate-50">
            Projects
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            A closer look at what I&apos;ve been building.
          </p>
        </header>

        <div className="space-y-4">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4"
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <div>
                  <h2 className="text-sm font-semibold text-slate-50">
                    {p.title}
                  </h2>
                  <p className="text-[0.7rem] text-slate-400">
                    {p.tech.join(" • ")}
                  </p>
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 hover:border-cyan-400/80 hover:text-cyan-200"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <p className="text-xs text-slate-300">{p.description}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
