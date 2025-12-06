// app/contact/page.tsx
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold text-slate-50">Contact</h1>
          <p className="mt-2 text-sm text-slate-400">
            Backend, AI, automation, or security-flavoured work? Let&apos;s talk.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
            <h2 className="text-sm font-semibold text-slate-50">
              Work & collaborations
            </h2>
            <p className="text-xs text-slate-300">
              Prefer backend-heavy, AI, automation, or security-focused projects.
            </p>
            <a
              href="mailto:zaidkhan93315@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/70 bg-cyan-500/15 px-5 py-2 text-sm text-cyan-100 hover:bg-cyan-500/25"
            >
              <Mail className="h-4 w-4" />
              zaidkhan93315@gmail.com
            </a>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
            <h2 className="text-sm font-semibold text-slate-50">Links</h2>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="https://github.com/zaidkhan-automation"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-200"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-200"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn (soon)
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
