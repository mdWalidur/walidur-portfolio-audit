import { skillGroups, skillLegend, type SkillLevel } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./reveal";

const levelStyles: Record<SkillLevel, string> = {
  Primary: "bg-primary text-primary-foreground",
  "Working knowledge": "border border-primary/60 text-primary",
  Familiar: "border border-border text-muted-foreground",
  Learning: "border border-dashed border-border text-muted-foreground",
};

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-20 border-b border-border px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          id="skills-heading"
          eyebrow="Technical skills"
          title="What I use, and how well I actually know it."
          intro="No percentage bars. Each technology is labelled by how I have used it — in projects, in coursework, or as something I am learning now."
        />

        <Reveal className="mb-10 flex flex-wrap gap-x-6 gap-y-3">
          {skillLegend.map((entry) => (
            <p key={entry.level} className="flex items-center gap-2 text-xs">
              <span
                className={`inline-block px-2 py-0.5 font-mono text-[10px] ${levelStyles[entry.level]}`}
              >
                {entry.level}
              </span>
              <span className="text-muted-foreground">{entry.meaning}</span>
            </p>
          ))}
        </Reveal>

        <div className="grid gap-px border border-border bg-border md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.category}
              delay={index * 60}
              className="bg-background p-6 sm:p-8"
            >
              <h3 className="label-eyebrow text-primary">{group.category}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{group.note}</p>
              <ul className="mt-6 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border pb-2 last:border-b-0"
                  >
                    <span className="min-w-0 truncate text-sm">{item.name}</span>
                    <span
                      className={`shrink-0 px-2 py-0.5 font-mono text-[10px] ${levelStyles[item.level]}`}
                    >
                      {item.level}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
