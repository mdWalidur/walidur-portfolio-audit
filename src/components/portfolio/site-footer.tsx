import { Github, Linkedin, Mail } from "lucide-react";

import { navigation, profile } from "@/data/portfolio";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div>
          <p className="text-lg font-medium">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {profile.title} · {profile.location}
          </p>
          <nav aria-label="Footer" className="mt-6">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {[...navigation, { label: "Contact", href: "#contact" }].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex gap-2">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email Walidur"
            className="inline-flex size-11 items-center justify-center border border-border transition-colors hover:border-primary hover:text-primary"
          >
            <Mail className="size-4" aria-hidden="true" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile (opens in a new tab)"
            className="inline-flex size-11 items-center justify-center border border-border transition-colors hover:border-primary hover:text-primary"
          >
            <Github className="size-4" aria-hidden="true" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile (opens in a new tab)"
            className="inline-flex size-11 items-center justify-center border border-border transition-colors hover:border-primary hover:text-primary"
          >
            <Linkedin className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1440px] border-t border-border pt-6">
        <p className="font-mono text-xs text-muted-foreground">
          © {year} {profile.name} — built with React, TanStack Start and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
