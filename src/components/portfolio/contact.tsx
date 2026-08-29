import { useState, type FormEvent } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Send } from "lucide-react";
import { z } from "zod";

import { profile } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./reveal";
import { PortfolioSection } from "./section";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80),
  email: z.string().trim().email("Please enter a valid email address.").max(120),
  subject: z.string().trim().min(3, "Please add a short subject.").max(120),
  message: z
    .string()
    .trim()
    .min(20, "Please write at least 20 characters so I can reply usefully.")
    .max(2000),
  company: z.string().max(0).optional(),
});

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

const fieldClass =
  "min-h-12 w-full border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-primary";

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStatus("idle");
      return;
    }

    setErrors({});
    const { name, email, subject, message } = parsed.data;
    const body = `${message}\n\n—\n${name}\n${email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  }

  return (
    <PortfolioSection id="contact" labelledBy="contact-heading">
      <SectionHeading
        id="contact-heading"
        eyebrow="Contact"
        title="Open to internships and junior developer roles."
        intro="Tell me what you are building. The form opens your email client with the message prefilled — nothing is stored or sent through a third party."
      />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)] lg:gap-16">
        <Reveal>
          <form onSubmit={onSubmit} noValidate className="space-y-5">
            <div className="absolute left-[-9999px] size-px overflow-hidden" aria-hidden="true">
              <label htmlFor="company">Company (leave empty)</label>
              <input id="company" name="company" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="label-eyebrow text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`mt-2 ${fieldClass}`}
                  placeholder="Your name"
                />
                {errors.name ? (
                  <p id="name-error" className="mt-2 text-xs text-destructive">
                    {errors.name}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor="email" className="label-eyebrow text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`mt-2 ${fieldClass}`}
                  placeholder="you@example.com"
                />
                {errors.email ? (
                  <p id="email-error" className="mt-2 text-xs text-destructive">
                    {errors.email}
                  </p>
                ) : null}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="label-eyebrow text-muted-foreground">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                className={`mt-2 ${fieldClass}`}
                placeholder="Internship opportunity"
              />
              {errors.subject ? (
                <p id="subject-error" className="mt-2 text-xs text-destructive">
                  {errors.subject}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="message" className="label-eyebrow text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`mt-2 ${fieldClass} resize-y`}
                placeholder="A few sentences about the role or project."
              />
              {errors.message ? (
                <p id="message-error" className="mt-2 text-xs text-destructive">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="inline-flex min-h-12 items-center gap-2 bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Send className="size-4" aria-hidden="true" />
                Compose message
              </button>
              <p aria-live="polite" className="text-xs text-muted-foreground">
                {status === "sent"
                  ? "Your email client should now be open with the message ready to send."
                  : ""}
              </p>
            </div>
          </form>
        </Reveal>

        <Reveal delay={100} className="space-y-px border border-border bg-border">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-4 bg-background p-5 transition-colors hover:text-primary"
          >
            <Mail className="size-5 shrink-0" aria-hidden="true" />
            <span className="min-w-0">
              <span className="label-eyebrow block text-muted-foreground">Email</span>
              <span className="block truncate text-sm">{profile.email}</span>
            </span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-4 bg-background p-5 transition-colors hover:text-primary"
          >
            <Linkedin className="size-5 shrink-0" aria-hidden="true" />
            <span className="min-w-0">
              <span className="label-eyebrow block text-muted-foreground">LinkedIn</span>
              <span className="block truncate text-sm">Md Walidur Rahman</span>
            </span>
            <ArrowUpRight className="ml-auto size-4 shrink-0" aria-hidden="true" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-4 bg-background p-5 transition-colors hover:text-primary"
          >
            <Github className="size-5 shrink-0" aria-hidden="true" />
            <span className="min-w-0">
              <span className="label-eyebrow block text-muted-foreground">GitHub</span>
              <span className="block truncate text-sm">mdWalidur</span>
            </span>
            <ArrowUpRight className="ml-auto size-4 shrink-0" aria-hidden="true" />
          </a>
          <div className="bg-background p-5">
            <span className="label-eyebrow block text-muted-foreground">Based in</span>
            <span className="mt-1 block text-sm">{profile.location}</span>
            <span className="mt-3 block text-sm text-muted-foreground">{profile.availability}</span>
          </div>
        </Reveal>
      </div>
    </PortfolioSection>
  );
}
