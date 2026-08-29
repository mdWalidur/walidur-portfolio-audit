import type { ExperienceItem, Project } from "@/types";

export function getFeaturedProject(projects: readonly Project[]): Project {
  const featured = projects.find((project) => project.featured);
  if (featured) return featured;
  const first = projects[0];
  if (!first) throw new Error("At least one project is required.");
  return first;
}

export function getNonFeaturedProjects(projects: readonly Project[]): Project[] {
  const featured = getFeaturedProject(projects);
  return projects.filter((project) => project.id !== featured.id);
}

export function filterExperienceByType(
  items: readonly ExperienceItem[],
  type: ExperienceItem["type"],
): ExperienceItem[] {
  return items.filter((item) => item.type === type);
}
