import { ArrowUpRight, Github } from "lucide-react";

import { getFeaturedProject, getNonFeaturedProjects, projects } from "@/data";
import { getStaggerDelay } from "@/lib/animation";
import type { Project } from "@/types";

import { LinkButton } from "./link-button";
import { PortfolioSection } from "./section";
import { ProjectCard } from "./project-card";
import { Reveal, SectionHeading } from "./reveal";
import { TagList } from "./tag-list";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3">
      {project.liveUrl ? (
        <LinkButton href={project.liveUrl} external>
          Live demo
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </LinkButton>
      ) : null}
      {project.githubUrl ? (
        <LinkButton href={project.githubUrl} external>
          <Github className="size-4" aria-hidden="true" />
          Source
        </LinkButton>
      ) : null}
    </div>
  );
}

/** Featured and supporting project listing section. */
function FeaturedProject({ project }: { project: Project }) {
  return (
    <Reveal as="article" className="border border-border bg-surface">
      <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
        <div className="border-b border-border p-6 sm:p-10 lg:border-b-0 lg:border-r">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-xs text-primary">{project.number}</span>
            <span className="label-eyebrow text-muted-foreground">Featured project</span>
          </div>
          <h3 className="text-2xl font-medium sm:text-3xl">{project.title}</h3>
          <p className="mt-2 text-sm text-primary">{project.category}</p>

          <dl className="mt-8 space-y-6">
            <div>
              <dt className="label-eyebrow text-muted-foreground">Problem</dt>
              <dd className="mt-2 text-sm leading-relaxed text-foreground/85">{project.problem}</dd>
            </div>
            <div>
              <dt className="label-eyebrow text-muted-foreground">Solution</dt>
              <dd className="mt-2 text-sm leading-relaxed text-foreground/85">
                {project.solution}
              </dd>
            </div>
            <div>
              <dt className="label-eyebrow text-muted-foreground">Result</dt>
              <dd className="mt-2 text-sm leading-relaxed text-foreground/85">{project.result}</dd>
            </div>
          </dl>

          <div className="mt-8 space-y-5">
            <TagList tags={project.tags} />
            <ProjectLinks project={project} />
          </div>
        </div>

        <div className="bg-background/40 p-6 sm:p-10">
          <p className="label-eyebrow text-muted-foreground">Architecture</p>
          <ol className="mt-5 space-y-3">
            {project.architecture.map((step, i) => (
              <li key={step} className="flex gap-4 border border-border bg-surface-raised p-4">
                <span className="font-mono text-xs text-primary" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 text-sm leading-relaxed text-foreground/85">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-6 space-y-4 border-t border-border pt-6">
            <div>
              <p className="label-eyebrow text-muted-foreground">Challenges</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.challenges}
              </p>
            </div>
            <div>
              <p className="label-eyebrow text-muted-foreground">What I learned</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.learned}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ProjectRow({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      aria-label={`Project: ${project.title}`}
      className="grid gap-6 border border-border p-6 transition-colors hover:border-primary/50 sm:p-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]"
    >
      <ProjectCard project={project} />
    </Reveal>
  );
}

export function Work() {
  const featured = getFeaturedProject(projects);
  const rest = getNonFeaturedProjects(projects);

  return (
    <PortfolioSection id="work" labelledBy="work-heading">
      <SectionHeading
        id="work-heading"
        eyebrow="Selected work"
        title="Projects built to understand a system, not to fill a page."
        intro="Each project starts from a concrete problem. Below: what it solves, how it is put together, and what came out of it."
      />
      <div className="space-y-6">
        <FeaturedProject project={featured} />
        {rest.map((project, i) => (
          <ProjectRow key={project.id} project={project} delay={getStaggerDelay(i)} />
        ))}
      </div>
    </PortfolioSection>
  );
}
