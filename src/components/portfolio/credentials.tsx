import { ArrowUpRight, GraduationCap } from "lucide-react";

import { certifications, experience, filterExperienceByType, learning } from "@/data";
import { getStaggerDelay } from "@/lib/animation";
import { LinkButton } from "./link-button";
import { PortfolioSection } from "./section";
import { Reveal, SectionHeading } from "./reveal";
import { TagList } from "./tag-list";

export function Credentials() {
  const education = filterExperienceByType(experience, "education");

  return (
    <PortfolioSection id="credentials" labelledBy="credentials-heading">
      <SectionHeading
        id="credentials-heading"
        eyebrow="Credentials"
        title="Verified coursework and certifications."
        intro="Every badge below links to its issued credential. Nothing here is self-awarded."
      />

      <div className="grid gap-px border border-border bg-border lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <Reveal
            key={cert.title}
            delay={getStaggerDelay(index, 70)}
            className="bg-background p-6 sm:p-8"
          >
            <div className="flex items-start gap-4">
              <img
                src={cert.image}
                alt=""
                width={72}
                height={72}
                loading="lazy"
                decoding="async"
                className="size-16 shrink-0 object-contain"
              />
              <div className="min-w-0">
                <h3 className="text-base font-medium leading-snug">{cert.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                <p className="mt-1 font-mono text-xs text-muted-foreground">{cert.date}</p>
              </div>
            </div>
            <div className="mt-5">
              <TagList tags={cert.tags} />
            </div>
            <LinkButton href={cert.credentialUrl} external className="mt-6">
              <span aria-label={`Verify ${cert.title} credential`}>Verify credential</span>
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </LinkButton>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        {education.map((item) => (
          <Reveal key={item.title} className="border border-border p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-2 text-primary">
              <GraduationCap className="size-4 shrink-0" aria-hidden="true" />
              <span className="label-eyebrow">Education</span>
            </div>
            <h3 className="text-lg font-medium sm:text-xl">{item.title}</h3>
            <p className="mt-1 text-sm text-foreground/85">
              {item.organization} · {item.location}
            </p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">{item.period}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </Reveal>
        ))}

        <Reveal delay={80} className="border border-border p-6 sm:p-8">
          <span className="label-eyebrow text-primary">Currently learning</span>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Areas I am actively studying — listed as growth, not as expertise.
          </p>
          <ul className="mt-6 space-y-3">
            {learning.map((item) => (
              <li
                key={item.area}
                className="grid gap-1 border-b border-border pb-3 last:border-b-0 sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)] sm:gap-4"
              >
                <span className="font-mono text-xs text-foreground">{item.area}</span>
                <span className="text-sm text-muted-foreground">{item.focus}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </PortfolioSection>
  );
}
