import Image from "next/image";
import { education } from "@/data/portfolio";
import AnimateIn from "./AnimateIn";

function extractYear(period: string): string {
  const match = period.match(/(\d{4})\s*$/);
  return match ? match[1] : period;
}

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <AnimateIn direction="left">
          <h2 className="section__title">
            <span className="section__num">01.</span> Formation
          </h2>
        </AnimateIn>
        <div className="edu__list">
          {education.map((edu, i) => (
            <AnimateIn key={`${edu.degree}-${edu.period}`} delay={i * 0.1}>
              <article className="edu__card">
                <div className="edu__left">
                  {edu.logo ? (
                    <div className="edu__logo">
                      <Image
                        src={edu.logo}
                        alt={edu.school}
                        width={72}
                        height={40}
                        unoptimized
                        style={{
                          objectFit: "contain",
                          width: "auto",
                          height: "auto",
                        }}
                      />
                    </div>
                  ) : null}
                  <span className="edu__year">{extractYear(edu.period)}</span>
                  <span className="edu__period-full">{edu.period}</span>
                </div>
                <div className="edu__divider" />
                <div className="edu__right">
                  <h3 className="edu__degree">{edu.degree}</h3>
                  <p className="edu__school">
                    {edu.school}
                    <span className="edu__location"> · {edu.location}</span>
                  </p>
                  {edu.detail && (
                    <span className="edu__detail">{edu.detail}</span>
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
