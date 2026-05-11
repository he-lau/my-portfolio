import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border py-6 font-mono text-sm text-text-dim">
      <div className="container flex flex-wrap justify-between gap-2">
        <span>
          © {new Date().getFullYear()} {profile.name} — Conçu & codé avec Next.js.
        </span>
        <span>v1.0</span>
      </div>
    </footer>
  );
}
