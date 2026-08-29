/** Shared animation timing values in milliseconds. */
export const motionDuration = {
  fast: 180,
  base: 360,
  slow: 700,
} as const;

/** Shared easing curves used across reveal and page transitions. */
export const motionEasing = {
  smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
  standard: "cubic-bezier(0.2, 0.6, 0.2, 1)",
} as const;

/** Default reveal observer options for section entrance animation. */
export const revealObserverOptions: IntersectionObserverInit = {
  threshold: 0.12,
  rootMargin: "0px 0px -8% 0px",
};

export function getStaggerDelay(index: number, step = 80): number {
  return index * step;
}
