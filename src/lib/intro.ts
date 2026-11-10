// Seconds the opening lotus animation runs before the hero starts to appear.
// Zero on repeat visits in the same session and for people who prefer reduced motion.
export const INTRO_SECONDS = 2.45;

function computeIntroDelay(): number {
  if (typeof window === "undefined") return INTRO_SECONDS;
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return 0;
    return sessionStorage.getItem("lw-intro") ? 0 : INTRO_SECONDS;
  } catch {
    return INTRO_SECONDS;
  }
}

// Evaluated once, before the Loader component marks the session as seen.
export const introDelay = computeIntroDelay();
