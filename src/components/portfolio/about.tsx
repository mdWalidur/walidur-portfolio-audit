import { principles, profile } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./reveal";
import { PortfolioSection } from "./section";

export function About() {
  return (
    <PortfolioSection id="about" labelledBy="about-heading">
      <SectionHeading
        id="about-heading"
        eyebrow="About"
        title="An engineering student who likes finishing things."
      />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
        <Reveal>
          <p className="max-w-prose text-base leading-relaxed text-foreground/90 sm:text-lg">
            {profile.summary}
          </p>
          <p className="mt-5 max-w-prose text-sm leading-relaxed text-muted-foreground sm:text-base">
            Most of what I know came from building something and then having to make it run
            somewhere: a sensor feeding a live dashboard, a scan report that had to be readable, a
            static tool that had to work on a phone. I care about the part after the demo —
            deployment, accessibility, and whether the next person can read the code.
          </p>
          <p className="mt-5 max-w-prose text-sm leading-relaxed text-muted-foreground sm:text-base">
            Right now I am deepening cloud and DevOps practice alongside my degree: AWS service
            design, containers and orchestration, pipelines, and the observability layer that tells
            you when something is wrong.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="grid gap-px border border-border bg-border">
            {principles.map((principle) => (
              <li key={principle.title} className="bg-background p-6">
                <h3 className="text-base font-medium">{principle.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {principle.text}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </PortfolioSection>
  );
}
