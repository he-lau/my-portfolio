import { skills } from "@/data/portfolio";
import { techIcons } from "@/lib/tech-icons";
import AnimateIn from "./AnimateIn";

const categoryIcons: Record<string, string> = {
  "Langages": "{ }",
  "Front-end": "</>",
  "Back-end": "⚙",
  "Bases de données": "🗄",
  "DevOps": "⚡",
  "CMS": "☰",
  "IA & Automatisation": "✦",
  "Monitoring": "◎",
};

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <AnimateIn direction="left">
          <h2 className="section__title">
            <span className="section__num">02.</span> Compétences
          </h2>
        </AnimateIn>
        <div className="skills__grid">
          {skills.map((group, i) => (
            <AnimateIn key={group.category} delay={i * 0.07}>
              <article className="skills__card">
                <h3 className="skills__category">
                  <span className="skills__category-icon">
                    {categoryIcons[group.category]}
                  </span>
                  {group.category}
                </h3>
                <ul className="skills__list">
                  {group.items.map((item) => {
                    const Icon = techIcons[item];
                    return (
                      <li key={item} className="skills__chip">
                        {Icon && <Icon className="skills__chip-icon" />}
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
