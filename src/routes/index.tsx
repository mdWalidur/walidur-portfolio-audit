import { createFileRoute } from "@tanstack/react-router";

import {
  About,
  Contact,
  Credentials,
  Experience,
  Hero,
  SiteFooter,
  SiteHeader,
  Skills,
  ThemeProvider,
  Work,
} from "@/components/portfolio";
import { certifications, portfolioContentVersion, profile, projects } from "@/data";
import { buildPersonStructuredData, defaultSeo } from "@/lib/seo";

const structuredData = buildPersonStructuredData(profile, certifications, projects);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: defaultSeo.title },
      { name: "description", content: defaultSeo.description },
      { name: "author", content: profile.name },
      { property: "og:title", content: defaultSeo.title },
      { property: "og:description", content: defaultSeo.description },
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
      <main id="main" tabIndex={-1} data-content-version={portfolioContentVersion}>
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
