import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useShakti } from "@/lib/shakti-context";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { reducedMotion } = useShakti();
  if (reducedMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Environment({
  gradient,
  children,
  className,
  minHeight = "min-h-screen",
}: {
  gradient: string;
  children: ReactNode;
  className?: string;
  minHeight?: string;
}) {
  return (
    <section
      className={cn("relative isolate overflow-hidden", minHeight, className)}
      style={{ background: gradient }}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function Title({
  deva,
  title,
  sub,
  align = "center",
}: {
  deva?: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {deva && <p className="deva mb-3 text-2xl text-lotus/90 md:text-3xl">{deva}</p>}
      <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-balance md:text-6xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-sm tracking-[0.2em] text-muted-foreground uppercase">{sub}</p>}
    </div>
  );
}

/** Framed editorial note used to separate scholarship from tradition. */
export function Note({
  kind = "scholarship",
  children,
}: {
  kind?: "scholarship" | "caution" | "tradition";
  children: ReactNode;
}) {
  const label =
    kind === "caution"
      ? "Please note"
      : kind === "tradition"
        ? "Tradition, not consensus"
        : "Scholarly note";
  return (
    <aside
      className={cn(
        "rounded-sm border-l-2 bg-card/50 p-5 text-sm leading-relaxed text-muted-foreground",
        kind === "caution" ? "border-vermilion" : "border-gold/70",
      )}
    >
      <p className="eyebrow mb-2">{label}</p>
      {children}
    </aside>
  );
}

export function ScholarOnly({ children }: { children: ReactNode }) {
  const { scholar } = useShakti();
  if (!scholar) return null;
  return (
    <div className="mt-4 rounded-sm border border-gold/25 bg-gold/5 p-5 text-sm leading-relaxed text-muted-foreground">
      <p className="eyebrow mb-2 text-gold/80">Scholar mode</p>
      {children}
    </div>
  );
}

export function DevotionalOnly({ children }: { children: ReactNode }) {
  const { devotional } = useShakti();
  if (!devotional) return null;
  return (
    <p className="font-display mt-4 text-xl leading-relaxed text-lotus/90 italic">{children}</p>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="prose-shakti max-w-prose text-[15px]">{children}</div>;
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border px-3 py-1 text-[11px] tracking-[0.12em] text-muted-foreground uppercase">
      {children}
    </span>
  );
}
