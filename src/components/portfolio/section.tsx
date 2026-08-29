import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Standard shell for portfolio sections with shared spacing and anchor offset. */
export function PortfolioSection({
  id,
  labelledBy,
  className,
  children,
}: {
  id: string;
  labelledBy: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "scroll-mt-20 border-b border-border px-5 py-20 sm:px-8 sm:py-28 lg:px-12",
        className,
      )}
    >
      <div className="mx-auto max-w-[1440px]">{children}</div>
    </section>
  );
}
