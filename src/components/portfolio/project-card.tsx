import { ArrowUpRight, Github } from "lucide-react";

import type { Project } from "@/types";

import { LinkButton } from "./link-button";
import { TagList } from "./tag-list";

/** Reusable summary card for compact project rows. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <>
      <div>
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs text-primary">{project.number}</span>
          <span className="label-eyebrow text-muted-foreground">{project.category}</span>
        </div>
        <h3 className="text-xl font-medium sm:text-2xl">{project.title}</h3>
        <div className="mt-5">
          <TagList tags={project.tags} />
        </div>
      </div>
      <div className="space-y-5">
        <p className="text-sm leading-relaxed text-foreground/85">{project.solution}</p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          <span className="text-foreground">Result — </span>
          {project.result}
        </p>
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
      </div>
    </>
  );
}
