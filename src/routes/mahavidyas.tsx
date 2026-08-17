import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { CosmicParticles } from "@/components/cosmic/CosmicParticles";
import { MantraWave } from "@/components/cosmic/MantraWave";
import { Note, Prose, Reveal, Title } from "@/components/cosmic/ui";
import { goddessBySlug, mahavidyaOrder, mahavidyaWorlds } from "@/data/goddesses";

export const Route = createFileRoute("/mahavidyas")({
  head: () => ({
    meta: [
      { title: "Daśa Mahāvidyā — The Ten Great Wisdom Goddesses" },
      {
        name: "description",
        content:
          "A circular mandala interface to the ten Mahāvidyās — Kālī, Tārā, Tripurasundarī, Bhuvaneśvarī, Bhairavī, Chinnamastā, Dhūmāvatī, Bagalāmukhī, Mātaṅgī and Kamalā — each with its own visual world.",
      },
      { property: "og:title", content: "Daśa Mahāvidyā — Ten Great Wisdom Goddesses" },
      {
        property: "og:description",
        content: "Ten portals around an animated mandala; each Goddess becomes an environment.",
      },
    ],
  }),
  component: MahavidyaMandala,
});

function MahavidyaMandala() {
  const [active, setActive] = useState<string>("kali");
  const g = goddessBySlug(active)!;
  const world = mahavidyaWorlds[active];

  return (
    <section
      className="relative min-h-screen overflow-hidden py-24 transition-[background] duration-1000"
      style={{ background: g.gradient }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4 }}
          className="absolute inset-0"
        >
          {active === "matangi" ? (
            <MantraWave hue={155} lines={7} />
          ) : (
            <CosmicParticles
              mode={
                active === "kali"
                  ? "dissolve"
                  : active === "bagalamukhi"
                    ? "converge"
                    : active === "chinnamasta"
                      ? "vertical"
                      : "field"
              }
              hue={
                active === "tara"
                  ? 245
                  : active === "kamala" || active === "tripurasundari"
                    ? 350
                    : active === "bhairavi"
                      ? 40
                      : active === "dhumavati"
                        ? 260
                        : 88
              }
              count={520}
              speed={active === "bagalamukhi" ? 0.25 : 1}
            />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <Title
            deva="दश महाविद्या"
            title="DAŚA MAHĀVIDYĀ"
            sub="The Ten Great Wisdom Goddesses"
          />
        </Reveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="relative mx-auto aspect-square w-[min(86vw,520px)]">
            <div aria-hidden className="animate-spin-slow absolute inset-0 rounded-full border border-gold/20" />
            <div aria-hidden className="animate-spin-slower absolute inset-[10%] rounded-full border border-lotus/20" />
            <div aria-hidden className="absolute inset-[26%] rounded-full border border-border/60" />
            <div className="absolute inset-0 grid place-items-center text-center">
              <div>
                <p className="deva text-2xl" style={{ color: g.accent }}>
                  {g.deva}
                </p>
                <p className="eyebrow mt-2">{g.name}</p>
              </div>
            </div>
            {mahavidyaOrder.map((slug, i) => {
              const m = goddessBySlug(slug)!;
              const a = (i / mahavidyaOrder.length) * Math.PI * 2 - Math.PI / 2;
              const isActive = slug === active;
              return (
                <button
                  key={slug}
                  type="button"
                  onClick={() => setActive(slug)}
                  aria-pressed={isActive}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-3 py-2 text-center transition-colors"
                  style={{
                    left: `${50 + Math.cos(a) * 44}%`,
                    top: `${50 + Math.sin(a) * 44}%`,
                    borderColor: isActive ? m.accent : "var(--color-border)",
                    background: isActive ? "oklch(0.98 0 0 / 0.06)" : "transparent",
                  }}
                >
                  <span className="deva block text-[11px]" style={{ color: m.accent }}>
                    {m.deva}
                  </span>
                  <span className="block text-[10px] tracking-[0.1em] uppercase">
                    {m.name.split(" / ")[0]}
                  </span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7 }}
            >
              <p className="eyebrow">{world?.world}</p>
              <h2 className="font-display mt-3 text-4xl">{g.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{g.epithet}</p>
              <p className="font-display mt-6 text-xl leading-relaxed text-balance" style={{ color: g.accent }}>
                {world?.caption}
              </p>
              <Prose>
                <p className="mt-6">{g.philosophy}</p>
                <p>{g.iconography}</p>
              </Prose>
              <Link
                to="/goddesses/$slug"
                params={{ slug: active }}
                className="mt-6 inline-block rounded-full border border-gold/40 px-6 py-3 text-xs tracking-[0.2em] uppercase hover:bg-gold/10"
              >
                Enter her portal
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mx-auto mt-20 max-w-2xl">
          <Note kind="tradition">
            <p>
              The set of ten is itself a historical construction, appearing in Tantric compendia of
              roughly the second millennium CE. Lists vary: Ṣoḍaśī and Tripurasundarī are sometimes
              counted as one entry and sometimes as two, Dhūmāvatī is occasionally replaced, and
              regional traditions add or substitute goddesses. Iconographies such as Chinnamastā's
              are described here as symbolic diagrams rather than depicted graphically.
            </p>
          </Note>
        </div>
      </div>
    </section>
  );
}
