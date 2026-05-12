import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${profile.name} — Développeur Web`,
  description: "Portfolio full-stack — projets, compétences et contact.",
  openGraph: {
    title: `${profile.name} — Développeur Web`,
    description: "Portfolio full-stack — projets, compétences et contact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
