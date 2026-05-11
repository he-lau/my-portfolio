"use client";

import { motion } from "framer-motion";
import { profile, about } from "../data/portfolio";

const item = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <motion.p className="hero__hello" {...item(0.1)}>
          <span className="hero__dot" /> Disponible pour de nouveaux projets
        </motion.p>
        <motion.h1 className="hero__title" {...item(0.2)}>
          Salut, moi c'est <span className="accent">{profile.name}</span>.
          <br />
          {profile.role}.
        </motion.h1>
        <motion.p className="hero__tagline" {...item(0.3)}>
          {profile.tagline}
        </motion.p>
        <motion.div className="hero__bio" {...item(0.4)}>
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </motion.div>
        <motion.ul className="hero__highlights" {...item(0.5)}>
          {about.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </motion.ul>
        <motion.div className="hero__actions" {...item(0.6)}>
          <a href="#projects" className="btn btn--primary">
            Voir mes projets
          </a>
          <a href="#contact" className="btn btn--ghost">
            Me contacter
          </a>
        </motion.div>
      </div>
    </section>
  );
}
