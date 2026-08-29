export function joinFragments(
  parts: readonly (string | null | undefined)[],
  separator = " · ",
): string {
  return parts.filter((part): part is string => Boolean(part && part.trim())).join(separator);
}
