import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { CosmicParticles } from "@/components/cosmic/CosmicParticles";
import { Chip, Environment, Note, Prose, Reveal, ScholarOnly, Title } from "@/components/cosmic/ui";
import { festivals, pithaNote, places, type SacredPlace } from "@/data/library";

export const Route = createFileRoute("/sacred-places")({
  head: () => ({
    meta: [
      { title: "Sacred Geography — Śakti Pīṭhas, Temples & the Goddess Year" },
      {
        name: "description",
        content:
          "A stylised map of Śākta sacred geography across South Asia: Śakti Pīṭhas, major temples and centres of philosophy, plus the seasonal cycle of Goddess festivals.",
      },
      { property: "og:title", content: "Sacred Geography of the Goddess" },
      {
        property: "og:description",
        content:
          "Where the Goddess is worshipped: pīṭhas, temples and the festival year, with the disagreements between lists shown rather than hidden.",
      },
    ],
  }),
  component: SacredPlaces,
});

const kinds: { id: SacredPlace["kind"] | "all"; label: string; color: string }[] = [
  { id: "all", label: "All", color: "var(--color-gold)" },
  { id: "pitha", label: "Śakti Pīṭhas", color: "var(--color-vermilion)" },
  { id: "temple", label: "Temples", color: "var(--color-gold)" },
  { id: "philosophy", label: "Philosophy", color: "var(--color-mist)" },
  { id: "festival", label: "Festival centres", color: "var(--color-lotus)" },
];

function colorFor(kind: SacredPlace["kind"]) {
  return kinds.find((k) => k.id === kind)?.color ?? "var(--color-gold)";
}

function SacredPlaces() {
  const [filter, setFilter] = useState<SacredPlace["kind"] | "all">("all");
  const [selected, setSelected] = useState<SacredPlace | null>(null);
  const shown = places.filter((p) => filter === "all" || p.kind === filter);

  return (
    <>
      <Environment gradient="var(--grad-void)" className="py-24">
        <CosmicParticles mode="field" hue={32} count={320} />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal>
            <Title
              deva="शक्तिपीठ"
              title="Sacred Geography"
              sub="Where the Goddess is Worshipped"
            />
          </Reveal>

          <div className="mx-auto mt-8 max-w-2xl">
            <Prose>
              <p>
                Much of Śākta tradition is geographic before it is doctrinal. Story and landscape are
                bound together: places are said to hold the Goddess, and pilgrimage rather than
                argument is often the primary practice.
              </p>
            </Prose>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {kinds.map((k) => (
              <button
                key={k.id}
                type="button"
                onClick={() => setFilter(k.id)}
                aria-pressed={filter === k.id}
                className={`rounded-full border px-4 py-2 text-[11px] tracking-[0.16em] uppercase transition-colors ${
                  filter === k.id
                    ? "border-gold/70 bg-gold/15 text-gold"
                    : "border-border text-muted-foreground hover:border-gold/40"
                }`}
              >
                {k.label}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_1fr]">
            <div
              className="relative aspect-[4/5] w-full rounded-sm border border-border/60"
              style={{ background: "var(--grad-mist)" }}
            >
              <svg viewBox="0 0 100 125" className="absolute inset-0 h-full w-full" aria-hidden>
                {/* Stylised, non-cartographic plate of the subcontinent */}
                <path
                  d="M28 14 L46 8 L64 12 L80 20 L88 34 L84 48 L74 58 L66 74 L56 96 L48 116 L40 96 L30 74 L20 56 L16 38 Z"
                  fill="oklch(0.98 0 0 / 0.03)"
                  stroke="var(--color-border)"
                  strokeWidth="0.4"
                />
                {[26, 44, 62, 80, 98].map((y) => (
                  <line
                    key={y}
                    x1="10"
                    y1={y}
                    x2="92"
                    y2={y}
                    stroke="var(--color-border)"
                    strokeWidth="0.12"
                  />
                ))}
              </svg>

              {shown.map((p) => {
                const active = selected?.name === p.name;
                return (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => setSelected(p)}
                    aria-label={`${p.name}, ${p.region}`}
                    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform hover:scale-125 focus-visible:scale-125"
                    style={{ left: `${p.x}%`, top: `${(p.y / 100) * 100}%` }}
                  >
                    <motion.span
                      animate={active ? { scale: [1, 1.5, 1] } : { scale: 1 }}
                      transition={{ duration: 2, repeat: active ? Infinity : 0 }}
                      className="block size-3 rounded-full"
                      style={{
                        background: colorFor(p.kind),
                        boxShadow: `0 0 12px ${colorFor(p.kind)}`,
                      }}
                    />
                  </button>
                );
              })}
              <p className="absolute right-3 bottom-3 left-3 text-[10px] leading-relaxed tracking-[0.08em] text-muted-foreground uppercase">
                Stylised diagram — positions are indicative, not cartographic
              </p>
            </div>

            <div>
              {selected ? (
                <div className="rounded-sm border border-gold/30 bg-card/50 p-6">
                  {selected.deva && <p className="deva text-2xl text-lotus">{selected.deva}</p>}
                  <h2 className="font-display mt-2 text-3xl">{selected.name}</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Chip>{selected.region}</Chip>
                    <Chip>{kinds.find((k) => k.id === selected.kind)?.label ?? selected.kind}</Chip>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {selected.note}
                  </p>
                  <p className="eyebrow mt-5">Claimed by</p>
                  <p className="mt-1 text-sm text-muted-foreground">{selected.source}</p>
                </div>
              ) : (
                <div className="rounded-sm border border-border/60 bg-card/40 p-6 text-sm leading-relaxed text-muted-foreground">
                  Select a point on the map to read about a site, the tradition that names it, and
                  what is and is not historically settled about it.
                </div>
              )}

              <ol className="mt-6 max-h-80 space-y-1 overflow-y-auto pr-2">
                {shown.map((p) => (
                  <li key={p.name}>
                    <button
                      type="button"
                      onClick={() => setSelected(p)}
                      className={`flex w-full items-baseline justify-between gap-4 border-b border-border/50 py-2 text-left text-sm transition-colors hover:text-gold ${
                        selected?.name === p.name ? "text-gold" : "text-muted-foreground"
                      }`}
                    >
                      <span className="font-display text-base">{p.name}</span>
                      <span className="text-[11px] tracking-[0.12em] uppercase">{p.region}</span>
                    </button>
                  </li>
                ))}
              </ol>

              <div className="mt-6 space-y-4">
                <Note kind="tradition">
                  <p>{pithaNote}</p>
                </Note>
                <ScholarOnly>
                  <p>
                    Pīṭha lists are best read as claims made by particular texts and regional
                    networks at particular times, often to affiliate a local goddess with a
                    pan-Indian body. The narrative frame — Satī's dismembered body falling across the
                    land — appears in developed form relatively late, in Purāṇic and Tantric sources,
                    and earlier local cults were subsequently absorbed into it.
                  </p>
                </ScholarOnly>
              </div>
            </div>
          </div>
        </div>
      </Environment>

      {/* Festival year */}
      <Environment gradient="var(--grad-void)" className="py-24" minHeight="min-h-0">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <Title deva="उत्सव" title="The Goddess Year" sub="Season by Season" />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {festivals.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.05}>
                <article className="relative h-full overflow-hidden rounded-sm border border-border/60 p-6">
                  <div
                    aria-hidden
                    className="absolute inset-0 -z-10 opacity-45"
                    style={{ background: f.gradient }}
                  />
                  <p className="eyebrow">{f.season}</p>
                  <h3 className="font-display mt-2 text-2xl">{f.name}</h3>
                  <p className="mt-1 text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                    {f.region}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Note kind="tradition">
              <p>
                Dates follow regional luni-solar calendars and differ between traditions; the same
                festival may be observed at different times, under different names, and with entirely
                different rites in Bengal, Tamil Nadu, Gujarat and Nepal.
              </p>
            </Note>
          </div>
        </div>
      </Environment>
    </>
  );
}
