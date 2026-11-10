import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { images } from "@/data/site";

/** Full-page message (404, errors) in the Laxmikant Worldlink style. */
export function BrandedMessage({
  code,
  title,
  message,
  children,
}: {
  code?: string;
  title: string;
  message: string;
  children: ReactNode;
}) {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-navy-deep px-5 py-16 text-center text-cream">
      {/* soft light behind the content */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_38%,rgba(40,70,170,0.35),transparent_62%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[38%] h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[38%] h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/[0.06]"
      />

      {/* brand mark, links home */}
      <Link to="/" aria-label="Laxmikant Worldlink home" className="absolute left-1/2 top-8 -translate-x-1/2">
        <span className="flex items-center gap-3">
          <img src={images.logoMark} alt="" width={480} height={407} className="h-10 w-auto" />
          <span className="flex flex-col text-left leading-none">
            <span
              style={{ fontFamily: "var(--font-display)" }}
              className="text-xl font-semibold tracking-[0.14em] text-cream"
            >
              LAXMIKANT
            </span>
            <span className="mt-1.5 flex items-center gap-2 text-[0.6rem] font-medium tracking-[0.46em] text-gold">
              <span aria-hidden="true" className="h-px w-4 bg-gold/70" />
              WORLDLINK
            </span>
          </span>
        </span>
      </Link>

      <div className="relative max-w-xl">
        {code ? (
          <p
            style={{ fontFamily: "var(--font-display)" }}
            className="bg-[image:var(--gradient-gold)] bg-clip-text text-[7rem] font-semibold leading-none text-transparent sm:text-[10rem]"
          >
            {code}
          </p>
        ) : (
          <img
            src={images.logoMark}
            alt=""
            width={480}
            height={407}
            className="mx-auto h-24 w-auto drop-shadow-[0_10px_30px_rgba(236,72,153,0.35)]"
          />
        )}
        <h1 className="mt-4 text-3xl text-cream sm:text-4xl">{title}</h1>
        <div className="gold-rule mx-auto mt-5" aria-hidden="true" />
        <p className="mt-5 text-sm leading-relaxed text-cream/70 sm:text-base">{message}</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">{children}</div>
      </div>
    </main>
  );
}

export const primaryBtn =
  "lift-btn inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-gold)] px-7 py-3 text-sm font-semibold text-navy-deep";
export const secondaryBtn =
  "lift-btn inline-flex items-center justify-center rounded-full border border-cream/25 px-7 py-3 text-sm font-medium text-cream hover:border-gold hover:text-gold";
