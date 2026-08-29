import { ArrowUpRight, Github } from "lucide-react";

import { projects, type Project } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./reveal";

function Links({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3">
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex min-h-11 items-center gap-2 border border-border px-4 text-sm transition-colors hover:border-primary hover:text-primary"
        >
          Live demo
          <ArrowUpRight className="size-4" aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ) : null}
      {project.githubUrl ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex min-h-11 items-center gap-2 border border-border px-4 text-sm transition-colors hover:border-primary hover:text-primary"
        >
          <Github className="size-4" aria-hidden="true" />
          Source
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ) : null}
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

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
              <dd className="mt-2 text-sm leading-relaxed text-foreground/85">
                {project.problem}
              </dd>
            </div>
            <div>
              <dt className="label-eyebrow text-muted-foreground">Solution</dt>
              <dd className="mt-2 text-sm leading-relaxed text-foreground/85">
                {project.solution}
              </dd>
            </div>
            <div>
              <dt className="label-eyebrow text-muted-foreground">Result</dt>
              <dd className="mt-2 text-sm leading-relaxed text-foreground/85">
                {project.result}
              </dd>
            </div>
          </dl>

          <div className="mt-8 space-y-5">
            <Tags tags={project.tags} />
            <Links project={project} />
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
      className="grid gap-6 border border-border p-6 transition-colors hover:border-primary/50 sm:p-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]"
    >
      <div>
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs text-primary">{project.number}</span>
          <span className="label-eyebrow text-muted-foreground">{project.category}</span>
        </div>
        <h3 className="text-xl font-medium sm:text-2xl">{project.title}</h3>
        <div className="mt-5">
          <Tags tags={project.tags} />
        </div>
      </div>
      <div className="space-y-5">
        <p className="text-sm leading-relaxed text-foreground/85">{project.solution}</p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          <span className="text-foreground">Result — </span>
          {project.result}
        </p>
        <Links project={project} />
      </div>
    </Reveal>
  );
}

export function Work() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p.id !== featured.id);

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-20 border-b border-border px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          id="work-heading"
          eyebrow="Selected work"
          title="Projects built to understand a system, not to fill a page."
          intro="Each project starts from a concrete problem. Below: what it solves, how it is put together, and what came out of it."
        />
        <div className="space-y-6">
          <FeaturedProject project={featured} />
          {rest.map((project, i) => (
            <ProjectRow key={project.id} project={project} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
