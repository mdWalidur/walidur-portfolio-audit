import { ArrowDownRight, ArrowUpRight, Download, MapPin } from "lucide-react";

import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-border pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      <div className="tech-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-40 top-0 size-[34rem] rounded-full bg-primary opacity-[0.07] blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-16 lg:px-12">
        <div>
          <p className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="label-eyebrow text-primary">{profile.subtitle}</span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="size-3.5" aria-hidden="true" />
              {profile.location}
            </span>
          </p>

          <h1
            id="hero-heading"
            className="text-balance text-4xl font-medium leading-[1.02] sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </h1>

          <p className="mt-5 max-w-xl text-lg text-foreground/85 sm:text-xl">
            {profile.title}
          </p>

          <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            {profile.valueProposition}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex min-h-12 items-center gap-2 bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 active:opacity-80"
            >
              View my work
              <ArrowDownRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center gap-2 border border-border px-6 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              Contact me
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex min-h-12 items-center gap-2 px-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Download className="size-4" aria-hidden="true" />
              Download CV
            </a>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3">
            {[
              { k: "Studying", v: "BEng Information Technology" },
              { k: "Focus", v: "Web · Cloud · DevOps" },
              { k: "Credentials", v: "3× AWS Academy" },
            ].map((stat) => (
              <div key={stat.k} className="bg-background p-4">
                <dt className="label-eyebrow text-muted-foreground">{stat.k}</dt>
                <dd className="mt-2 text-sm text-foreground">{stat.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative border border-border bg-surface">
            <span
              className="absolute -left-px -top-px size-3 border-l-2 border-t-2 border-primary"
              aria-hidden="true"
            />
            <span
              className="absolute -bottom-px -right-px size-3 border-b-2 border-r-2 border-primary"
              aria-hidden="true"
            />
            <div className="aspect-[4/5] w-full overflow-hidden sm:aspect-[5/6]">
              <img
                src={profile.portrait}
                alt={`Portrait of ${profile.name}`}
                width={900}
                height={1125}
                fetchPriority="high"
                decoding="async"
                className="size-full object-cover object-top"
              />
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-border px-4 py-3">
              <span className="label-eyebrow text-muted-foreground">Available</span>
              <span className="min-w-0 truncate text-xs text-foreground">
                {profile.availability}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
