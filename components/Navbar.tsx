"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const linkBase =
    "text-sm px-3 py-1 rounded-full border transition-colors";
  const inactive =
    "border-slate-700 text-slate-300 hover:border-cyan-400/70 hover:text-cyan-200";
  const active =
    "border-cyan-400/80 text-cyan-200 bg-cyan-500/10";

  const isActive = (path: string) => {
    return pathname === path
      ? `${linkBase} ${active}`
      : `${linkBase} ${inactive}`;
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        
        {/* LEFT SECTION */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-cyan-400/60 bg-slate-950 shadow-[0_0_14px_rgba(34,211,238,0.4)]">
            <span className="text-sm font-semibold text-cyan-300">Z</span>
          </div>

          <div className="leading-tight">
            <p className="text-sm font-medium text-slate-200">Zaid</p>
            <p className="text-xs text-slate-500">
              AI • Automation • Security-ish
            </p>
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <nav className="flex items-center gap-2">
          <Link href="/" className={isActive("/")}>Home</Link>
          <Link href="/projects" className={isActive("/projects")}>Projects</Link>
          <Link href="/contact" className={isActive("/contact")}>Contact</Link>

          <a
            href="https://github.com/zaidkhan-automation"
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-full border border-slate-700 bg-slate-900 px-2 py-1 text-slate-300 hover:border-cyan-400 hover:text-cyan-200"
          >
            <Github className="h-4 w-4" />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 bg-slate-900 px-2 py-1 text-slate-300 hover:border-cyan-400 hover:text-cyan-200"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </nav>

      </div>
    </header>
  );
}
