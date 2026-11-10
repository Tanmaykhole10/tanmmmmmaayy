import { useEffect, type AnimationEvent, type CSSProperties } from "react";

// Neon lotus built from outlines. Each group is drawn in turn (--i = order), then it glows.
const left = [
  { i: 0, d: "M33 183 C52 156 92 146 120 166 C96 182 62 188 33 183 Z" }, // bottom petal
  { i: 1, d: "M10 107 C30 106 52 104 72 120 C90 133 106 141 120 144 C98 152 70 152 52 146 C30 136 14 120 10 107 Z" }, // lower leaf
  { i: 2, d: "M44 53 C32 68 34 92 56 108 C74 121 98 132 118 138 C96 110 70 82 44 53 Z" }, // side petal
];
const center = [
  { i: 3, d: "M120 20 C96 58 84 100 96 128 C102 140 112 144 120 144 C128 144 138 140 144 128 C156 100 144 58 120 20 Z" },
  { i: 4, d: "M120 74 C108 92 104 112 110 128 C113 136 117 141 120 144 C123 141 127 136 130 128 C136 112 132 92 120 74 Z" },
];
const mirror = "translate(240 0) scale(-1 1)";

function Petals() {
  return (
    <>
      {left.map((p) => (
        <path key={`l${p.i}`} d={p.d} pathLength={1} style={{ "--i": p.i } as CSSProperties} />
      ))}
      {left.map((p) => (
        <path key={`r${p.i}`} d={p.d} transform={mirror} pathLength={1} style={{ "--i": p.i } as CSSProperties} />
      ))}
      {center.map((p) => (
        <path key={`c${p.i}`} d={p.d} pathLength={1} style={{ "--i": p.i } as CSSProperties} />
      ))}
    </>
  );
}

// The intro counts as "seen" only after it has finished, so a refresh or a slow load
// in the middle of it never cuts it short. (An inline script in the page head reads this
// flag before the first paint, so repeat visits never flash the intro.)
function markSeen() {
  try {
    sessionStorage.setItem("lw-intro", "1");
  } catch {
    /* storage blocked: the intro simply plays again next time */
  }
  document.documentElement.setAttribute("data-intro", "seen");
}

export function Loader() {
  // Safety net in case the animation-end event fires before the page has hydrated
  useEffect(() => {
    const t = window.setTimeout(markSeen, 3800);
    return () => window.clearTimeout(t);
  }, []);

  const onEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) markSeen();
  };

  return (
    <div className="site-loader" aria-hidden="true" onAnimationEnd={onEnd}>
      <div className="loader-glow" />
      <div className="loader-stack">
        <div className="loader-mark">
          <div className="loader-base-glow" />
          <svg className="neon neon-bloom" viewBox="0 0 240 190">
            <Petals />
          </svg>
          <svg className="neon neon-crisp" viewBox="0 0 240 190">
            <Petals />
          </svg>
        </div>
        <p className="loader-name">LAXMIKANT</p>
        <p className="loader-sub">
          <span /> WORLDLINK <span />
        </p>
      </div>
    </div>
  );
}
