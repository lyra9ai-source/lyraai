import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Golem AI — Generative Operational Logistics × Enterprise Management",
  description:
    "Golem AI is a multi-agent enterprise platform powered by Federated Live Learning, Accountable AI, and proprietary SPY agents that give your enterprise the edge.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
