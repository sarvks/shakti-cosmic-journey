import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { CosmicParticles } from "@/components/cosmic/CosmicParticles";
import { Chip, Environment, Note, Prose, Reveal, ScholarOnly, Title } from "@/components/cosmic/ui";
import { texts } from "@/data/library";

export const Route = createFileRoute("/texts")({
  head: () => ({
    meta: [
      { title: "The Sacred Text Library — Śākta Scriptures & Their Ideas" },
      {
        name: "description",
        content:
          "A browsable library of Śākta sources: the Devī Māhātmya, Devī Bhāgavata, Śākta Tantras, Saundaryalaharī and more — with period, language, tradition and scholarly debate for each.",
      },
      { property: "og:title", content: "The Sacred Text Library" },
      {
        property: "og:description",
        content:
          "Ten major Śākta texts, opened as manuscript leaves: what each says, why it matters, and what scholars dispute.",
      },
    ],
  }),
  component: TextLibrary,
});

function TextLibrary() {
  const [open, setOpen] = useState<string | null>(null);
  const [theme, setTheme] = useState<string | null>(null);

  const themes = useMemo(
    () => Array.from(new Set(texts.flatMap((t) => t.themes))).sort(),
    [],
  );
  const shown = theme ? texts.filter((t) => t.themes.includes(theme)) : texts;
  const active = texts.find((t) => t.title === open) ?? null;

  return (
    <Environment gradient="var(--grad-void)" className="py-24">
      <CosmicParticles mode="field" hue={88} count={280} />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <Title deva="ग्रन्थ" title="The Sacred Text Library" sub="Sources of the Tradition" />
        </Reveal>

        <div className="mx-auto mt-8 max-w-2xl">
          <Prose>
            <p>
              Śāktism has no single scripture. Its authority is distributed across Purāṇic
              narrative, Tantric revelation, hymnody and philosophical commentary — composed over
              more than a millennium, in tension as often as in agreement.
            </p>
          </Prose>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => setTheme(null)}
            aria-pressed={theme === null}
            className={`rounded-full border px-4 py-2 text-[11px] tracking-[0.16em] uppercase ${
              theme === null ? "border-gold/70 bg-gold/15 text-gold" : "border-border text-muted-foreground"
            }`}
          >
            All themes
          </button>
          {themes.map((th) => (
            <button
              key={th}
              type="button"
              onClick={() => setTheme(th === theme ? null : th)}
              aria-pressed={theme === th}
              className={`rounded-full border px-4 py-2 text-[11px] tracking-[0.16em] uppercase ${
                theme === th ? "border-gold/70 bg-gold/15 text-gold" : "border-border text-muted-foreground hover:border-gold/40"
              }`}
            >
              {th}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.04}>
              <button
                type="button"
                onClick={() => setOpen(t.title)}
                className="group h-full w-full rounded-sm border border-border/60 bg-card/40 p-6 text-left transition-colors hover:border-gold/50 hover:bg-card/70"
              >
                <p className="deva text-xl text-lotus/90">{t.deva}</p>
                <h3 className="font-display mt-2 text-2xl leading-tight">{t.title}</h3>
                <p className="mt-2 text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                  {t.period}
                </p>
                <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {t.significance}
                </p>
                <p className="eyebrow mt-5 text-gold/70 opacity-0 transition-opacity group-hover:opacity-100">
                  Open the leaf
                </p>
              </button>
            </Reveal>
          ))}
        </div>

        <AnimatePresence>
          {active && (
            <motion.div
              className="fixed inset-0 z-50 grid place-items-center bg-background/85 p-4 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="dialog"
              aria-modal="true"
              aria-label={active.title}
              onClick={() => setOpen(null)}
            >
              <motion.article
                initial={{ opacity: 0, rotateX: -8, y: 24 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="max-h-[86vh] w-full max-w-2xl overflow-y-auto rounded-sm border border-gold/30 bg-card p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="deva text-2xl text-lotus">{active.deva}</p>
                    <h2 className="font-display mt-2 text-3xl">{active.title}</h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpen(null)}
                    aria-label="Close"
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground hover:border-gold/50"
                  >
                    Close
                  </button>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Chip>{active.period}</Chip>
                  <Chip>{active.language}</Chip>
                </div>

                <p className="eyebrow mt-6">Tradition</p>
                <p className="mt-1 text-sm text-muted-foreground">{active.tradition}</p>

                <p className="eyebrow mt-6">Key ideas</p>
                <Prose>
                  <p className="mt-1">{active.ideas}</p>
                </Prose>

                <p className="eyebrow mt-6">Why it matters</p>
                <Prose>
                  <p className="mt-1">{active.significance}</p>
                </Prose>

                <div className="mt-6 flex flex-wrap gap-2">
                  {active.themes.map((th) => (
                    <Chip key={th}>{th}</Chip>
                  ))}
                </div>

                <div className="mt-6">
                  <Note>
                    <p>{active.scholarly}</p>
                  </Note>
                </div>
                <ScholarOnly>
                  <p>
                    Dating of Śākta sources is rarely secure: manuscripts are late, texts grew by
                    accretion, and traditional attributions are frequently honorific. Ranges given
                    here follow mainstream philology and remain contested.
                  </p>
                </ScholarOnly>
              </motion.article>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Environment>
  );
}
