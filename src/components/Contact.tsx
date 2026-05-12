import { profile } from "@/data/portfolio";
import AnimateIn from "./AnimateIn";

export default function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <AnimateIn direction="up">
          <h2 className="section__title">
            <span className="section__num">05.</span> Contact
          </h2>
          <p className="text-text-dim mb-8 text-base">
            Une idée, un projet, ou juste envie d'échanger sur le code ?
            Écrivez-moi, je réponds sous 48 h.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="btn btn--primary btn--lg"
          >
            {profile.email}
          </a>
          <div className="mt-8 flex gap-6 font-mono text-[0.95rem]">
            <a href={profile.socials.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
