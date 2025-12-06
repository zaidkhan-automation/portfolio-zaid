import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Excel Cleaner SaaS",
    role: "Solo builder",
    description:
      "Web app to clean and transform messy Excel files using Python, Pandas, and a simple SaaS-style interface.",
    tech: ["Python", "Pandas", "Streamlit/Next.js", "Automation"],
    link: "#",
  },
  {
    title: "Smart Resume Screener",
    role: "AI + Backend",
    description:
      "Embeddings-based resume screener with FastAPI backend, PDF parsing, and scoring logic.",
    tech: ["FastAPI", "PostgreSQL", "Embeddings", "RAG-lite"],
    link: "#",
  },
  {
    title: "SentinelTrace IDS",
    role: "Security & backend",
    description:
      "Intrusion detection prototype that processes logs, flags patterns, and exposes an API for alerts.",
    tech: ["Python", "FastAPI", "Security"],
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold text-slate-50">
            Projects
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            A deeper look at some of the systems I&apos;ve built.
          </p>
        </header>

        <div className="space-y-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4"
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <div>
                  <h2 className="text-sm font-semibold text-slate-50">
                    {project.title}
                  </h2>
                  <p className="text-[0.7rem] text-slate-400">
                    {project.role}
                  </p>
                </div>
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 hover:border-cyan-400/80 hover:text-cyan-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              <p className="text-xs text-slate-300">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-700 bg-slate-900/80 px-2 py-0.5 text-[0.65rem] text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
