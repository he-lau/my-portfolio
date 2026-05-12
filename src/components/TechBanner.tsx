import { skills } from "@/data/portfolio";
import { techIcons } from "@/lib/tech-icons";

const allTechs = skills.flatMap((g) => g.items);
const row1 = allTechs;
const row2 = [...allTechs].reverse();

function TechChip({ tech }: { tech: string }) {
  const Icon = techIcons[tech];
  return (
    <span className="tech-chip">
      {Icon && <Icon className="tech-chip__icon" />}
      {tech}
    </span>
  );
}

function Row({
  items,
  direction,
}: {
  items: string[];
  direction: "left" | "right";
}) {
  const doubled = [...items, ...items];
  return (
    <div className="tech-row">
      <div
        className={`tech-row__track tech-row__track--${direction}`}
        aria-hidden="true"
      >
        {doubled.map((tech, i) => (
          <TechChip key={`${tech}-${i}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}

export default function TechBanner() {
  return (
    <div className="tech-banner" aria-label="Technologies maîtrisées">
      <Row items={row1} direction="left" />
      <Row items={row2} direction="right" />
    </div>
  );
}
