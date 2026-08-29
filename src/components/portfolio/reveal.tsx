import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import type { HTMLAttributes } from "react";

import { motionDuration, motionEasing, revealObserverOptions } from "@/lib/animation";
import { cn } from "@/lib/utils";

/** Shared reveal wrapper for section content that animates in on first viewport entry. */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  ...props
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
} & HTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, revealObserverOptions);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={
        delay
          ? {
              transitionDelay: `${delay}ms`,
              transitionDuration: `${motionDuration.slow}ms`,
              transitionTimingFunction: motionEasing.smooth,
            }
          : undefined
      }
      className={cn("reveal-init", visible && "reveal-in", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

/** Heading pattern shared by each major portfolio section. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  id: string;
}) {
  return (
    <Reveal className="mb-12 border-b border-border pb-8 sm:mb-16">
      <div className="mb-5 flex items-center gap-4">
        <span className="h-px w-10 bg-primary" aria-hidden="true" />
        <span className="label-eyebrow text-primary">{eyebrow}</span>
      </div>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-end">
        <h2 id={id} className="text-balance text-3xl font-medium sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {intro ? (
          <p className="max-w-prose text-sm leading-relaxed text-muted-foreground sm:text-base">
            {intro}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
