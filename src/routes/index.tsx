import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/portfolio/about";
import { Contact } from "@/components/portfolio/contact";
import { Credentials } from "@/components/portfolio/credentials";
import { Experience } from "@/components/portfolio/experience";
import { Hero } from "@/components/portfolio/hero";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SiteHeader } from "@/components/portfolio/site-header";
import { Skills } from "@/components/portfolio/skills";
import { ThemeProvider } from "@/components/portfolio/theme-provider";
import { Work } from "@/components/portfolio/work";
import { certifications, profile, projects } from "@/data/portfolio";

const title = "Md Walidur Rahman — IT Engineering Student & Developer";
const description =
  "Portfolio of Md Walidur Rahman, IT engineering student and developer in Tampere, Finland. Web development, cloud and DevOps projects, AWS credentials and experience.";

const structuredData = {
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
  hasCredential: certifications.map((c) => ({
    "@type": "EducationalOccupationalCredential",
    name: c.title,
    url: c.credentialUrl,
  })),
  workExample: projects.map((p) => ({
    "@type": "CreativeWork",
    name: p.title,
    abstract: p.solution,
    url: p.liveUrl ?? p.githubUrl,
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: profile.name },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-primary focus:px-4 focus:py-3 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Credentials />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </ThemeProvider>
  );
}
