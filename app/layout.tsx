import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Umar | AI & Automation Engineer",
  description:
    "I build AI-powered automation, secure backends, and experimental graph-based systems for serious projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-950">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
