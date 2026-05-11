import { profile } from "@/data/portfolio";

export default function About() {
  const stack = ["PHP", "React", "Next.js", "Node.js", "Python"];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section__title">
          <span className="section__num">01.</span> À propos
        </h2>
        <div className="about__code">
          <div className="about__code-bar">
            <span className="about__code-dot about__code-dot--red" />
            <span className="about__code-dot about__code-dot--yellow" />
            <span className="about__code-dot about__code-dot--green" />
            <span className="about__code-filename">dev.js</span>
          </div>
          <pre className="about__code-body">
            <code>
              <span className="code-kw">const </span>
              <span className="code-var">dev</span>
              <span className="code-plain"> = {"{"}</span>
              {"\n"}
              {"  "}
              <span className="code-key">name</span>
              <span className="code-plain">: </span>
              <span className="code-str">&quot;{profile.name}&quot;</span>
              <span className="code-plain">,</span>
              {"\n"}
              {"  "}
              <span className="code-key">stack</span>
              <span className="code-plain">: [</span>
              {stack.map((tech, i) => (
                <span key={tech}>
                  <span className="code-str">&quot;{tech}&quot;</span>
                  {i < stack.length - 1 && (
                    <span className="code-plain">, </span>
                  )}
                </span>
              ))}
              <span className="code-plain">],</span>
              {"\n"}
              {"  "}
              <span className="code-key">location</span>
              <span className="code-plain">: </span>
              <span className="code-str">&quot;{profile.location}&quot;</span>
              <span className="code-plain">,</span>
              {"\n"}
              {"  "}
              <span className="code-key">open_to_work</span>
              <span className="code-plain">: </span>
              <span className="code-bool">true</span>
              <span className="code-plain">,</span>
              {"\n"}
              <span className="code-plain">{"}"}</span>
              <span className="code-plain">;</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
