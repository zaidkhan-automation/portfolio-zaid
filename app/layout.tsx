import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zaid | AI & Automation",
  description:
    "I build AI-powered automation, secure backends, and experimental systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-950">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
