import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-border text-text-dim border-t py-6 font-mono text-sm">
      <div className="container flex flex-wrap justify-between gap-2">
        <span>
          © {new Date().getFullYear()} {profile.name} — Conçu & codé avec
          Next.js.
        </span>
        <span>v1.0</span>
      </div>
    </footer>
  );
}
