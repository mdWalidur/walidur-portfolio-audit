import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Shared anchor button pattern used across hero, work, and credentials. */
export function LinkButton({
  href,
  children,
  className,
  external,
  download,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  download?: boolean;
}) {
  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className={cn(
        "inline-flex min-h-11 items-center gap-2 border border-border px-4 text-sm transition-colors hover:border-primary hover:text-primary",
        className,
      )}
    >
      {children}
      {external ? <span className="sr-only">(opens in a new tab)</span> : null}
    </a>
  );
}
