import type { Certification, Profile, Project } from "@/types";

export const defaultSeo = {
  title: "Md Walidur Rahman — IT Engineering Student & Developer",
  description:
    "Portfolio of Md Walidur Rahman, IT engineering student and developer in Tampere, Finland. Web development, cloud and DevOps projects, AWS credentials and experience.",
} as const;

export function buildPersonStructuredData(
  profile: Profile,
  certifications: Certification[],
  projects: Project[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Tampere", addressCountry: "FI" },
    sameAs: [profile.github, profile.linkedin],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Centria University of Applied Sciences",
    },
    knowsAbout: ["Web development", "Cloud computing", "DevOps", "Networking", "Web security"],
    hasCredential: certifications.map((certification) => ({
      "@type": "EducationalOccupationalCredential",
      name: certification.title,
      url: certification.credentialUrl,
    })),
    workExample: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      abstract: project.solution,
      url: project.liveUrl ?? project.githubUrl,
    })),
  };
}
