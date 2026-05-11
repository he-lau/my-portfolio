import { experiences } from "@/data/portfolio";
import AnimateIn from "./AnimateIn";

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <AnimateIn direction="left">
          <h2 className="section__title">
            <span className="section__num">03.</span> Expériences professionnelles
          </h2>
        </AnimateIn>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <AnimateIn key={`${exp.company}-${exp.period}`} delay={index * 0.1} direction="left">
              <article className="timeline__item">
                <div className="timeline__aside">
                  <div className="timeline__dot" />
                  {index < experiences.length - 1 && (
                    <div className="timeline__line" />
                  )}
                </div>
                <div className="timeline__card">
                  <div className="timeline__top">
                    <div>
                      <h3 className="timeline__title">{exp.title}</h3>
                      <p className="timeline__company">
                        {exp.company}
                        <span className="timeline__location">
                          &nbsp;&mdash;&nbsp;{exp.location}
                        </span>
                      </p>
                    </div>
                    <div className="timeline__meta">
                      <span className="timeline__badge">{exp.type}</span>
                      <span className="timeline__period">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="timeline__tasks">
                    {exp.tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
