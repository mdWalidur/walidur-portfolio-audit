import { BriefcaseBusiness, GraduationCap, MapPin } from "lucide-react";

import { experience } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./reveal";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-20 border-b border-border px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          id="experience-heading"
          eyebrow="Experience"
          title="Study, work and the path between them."
          intro="An engineering degree in progress, freelance development work, and an operational background that taught me how deadlines actually behave."
        />

        <ol className="relative space-y-px border-l border-border pl-6 sm:pl-10">
          {experience.map((item, index) => {
            const Icon = item.type === "education" ? GraduationCap : BriefcaseBusiness;
            return (
              <Reveal
                key={`${item.organization}-${item.period}`}
                as="li"
                delay={index * 80}
                className="relative -ml-6 border border-border bg-surface p-6 sm:-ml-10 sm:p-8"
              >
                <span
                  className="absolute -left-[7px] top-9 hidden size-3 rounded-full border border-primary bg-background sm:block"
                  aria-hidden="true"
                />
                <div className="grid gap-6 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)]">
                  <div>
                    <div className="mb-3 flex items-center gap-2 text-primary">
                      <Icon className="size-4 shrink-0" aria-hidden="true" />
                      <span className="label-eyebrow">
                        {item.type === "education" ? "Education" : "Work"}
                      </span>
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
                    <p className="text-sm leading-relaxed text-foreground/85">
                      {item.description}
                    </p>
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
                    <ul className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
