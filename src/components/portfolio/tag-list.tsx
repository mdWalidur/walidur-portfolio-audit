/** Reusable tag rendering for project technologies and labels. */
export function TagList({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
