import { BriefcaseBusiness, GraduationCap, MapPin } from "lucide-react";

import type { ExperienceItem } from "@/types";

import { TagList } from "./tag-list";

/** Timeline entry used by the experience section. */
export function TimelineItem({ item }: { item: ExperienceItem }) {
  const Icon = item.type === "education" ? GraduationCap : BriefcaseBusiness;

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)]">
      <div>
        <div className="mb-3 flex items-center gap-2 text-primary">
          <Icon className="size-4 shrink-0" aria-hidden="true" />
          <span className="label-eyebrow">{item.type === "education" ? "Education" : "Work"}</span>
        </div>
        <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
        <h3 className="mt-2 text-lg font-medium sm:text-xl">{item.title}</h3>
        <p className="mt-1 text-sm text-foreground/85">{item.organization}</p>
        <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
          <span className="min-w-0">{item.location}</span>
        </p>
      </div>

      <div className="space-y-5">
        <p className="text-sm leading-relaxed text-foreground/85">{item.description}</p>
        <ul className="space-y-2">
          {item.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
            >
              <span className="mt-2 size-1 shrink-0 bg-primary" aria-hidden="true" />
              <span className="min-w-0">{highlight}</span>
            </li>
          ))}
        </ul>
        <TagList tags={item.technologies} />
      </div>
    </div>
  );
}
