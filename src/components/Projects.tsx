import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "../data/portfolio";
import ProjectCarousel from "./ProjectCarousel";
import AnimateIn from "./AnimateIn";

const STACK_COLORS: Record<string, string> = {
  Python: "#3572A5",
  "Express.js": "#68a063",
  React: "#61dafb",
  PostgreSQL: "#336791",
  Docker: "#2496ed",
  Playwright: "#2ead33",
  PHP: "#8892be",
  "Node.js": "#68a063",
  "Next.js": "#ffffff",
  TypeScript: "#3178c6",
  Symfony: "#ffffff",
};

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <AnimateIn direction="left">
          <h2 className="section__title">
            <span className="section__num">04.</span> Projets
          </h2>
        </AnimateIn>
        <div className="projects__grid">
          {projects.map((project, i) => (
            <AnimateIn key={project.title} delay={i * 0.1} className="flex flex-col">
              <article className="project-card" style={{ flex: 1 }}>
                <div className="project-card__cover">
                  {project.images && project.images.length > 0 ? (
                    <ProjectCarousel images={project.images} title={project.title} />
                  ) : (
                    <div className="project-card__placeholder">
                      <span className="project-card__placeholder-title">{project.title}</span>
                      <ul className="project-card__placeholder-stack">
                        {project.stack.slice(0, 4).map((tech) => (
                          <li
                            key={tech}
                            className="project-card__placeholder-chip"
                            style={{
                              borderColor: STACK_COLORS[tech] ?? "rgba(100,255,218,0.4)",
                              color: STACK_COLORS[tech] ?? "var(--accent)",
                            }}
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="project-card__body">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__description">{project.description}</p>
                  <ul className="project-card__stack">
                    {project.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-card__footer">
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-card__btn">
                    <SiGithub size={15} /> Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="project-card__btn project-card__btn--accent">
                      <FiExternalLink size={15} /> Démo
                    </a>
                  )}
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
