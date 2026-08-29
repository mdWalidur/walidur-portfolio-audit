/** Reusable compact stat grid for hero and summary blocks. */
export function StatGrid({ stats }: { stats: ReadonlyArray<{ label: string; value: string }> }) {
  return (
    <dl className="grid max-w-xl grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-background p-4">
          <dt className="label-eyebrow text-muted-foreground">{stat.label}</dt>
          <dd className="mt-2 text-sm text-foreground">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
