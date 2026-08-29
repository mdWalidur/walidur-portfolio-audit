import { experience } from "@/data/portfolio";
import { getStaggerDelay } from "@/lib/animation";
import { PortfolioSection } from "./section";
import { Reveal, SectionHeading } from "./reveal";
import { TimelineItem } from "./timeline-item";

export function Experience() {
  return (
    <PortfolioSection id="experience" labelledBy="experience-heading">
      <SectionHeading
        id="experience-heading"
        eyebrow="Experience"
        title="Study, work and the path between them."
        intro="An engineering degree in progress, freelance development work, and an operational background that taught me how deadlines actually behave."
      />

      <ol className="relative space-y-px border-l border-border pl-6 sm:pl-10">
        {experience.map((item, index) => (
          <Reveal
            key={`${item.organization}-${item.period}`}
            as="li"
            delay={getStaggerDelay(index)}
            className="relative -ml-6 border border-border bg-surface p-6 sm:-ml-10 sm:p-8"
          >
            <span
              className="absolute -left-[7px] top-9 hidden size-3 rounded-full border border-primary bg-background sm:block"
              aria-hidden="true"
            />
            <TimelineItem item={item} />
          </Reveal>
        ))}
      </ol>
    </PortfolioSection>
  );
}
