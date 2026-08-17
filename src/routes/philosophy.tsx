import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { CosmicParticles } from "@/components/cosmic/CosmicParticles";
import { Environment, Note, Prose, Reveal, ScholarOnly, Title } from "@/components/cosmic/ui";
import {
  chakraNote,
  chakras,
  philNodes,
  tattvaNote,
  tattvas,
} from "@/data/philosophy";

export const Route = createFileRoute("/philosophy")({
  head: () => ({
    meta: [
      { title: "Śākta Philosophy — Consciousness, Śakti, Tattvas, Kuṇḍalinī" },
      {
        name: "description",
        content:
          "How does reality exist? An animated map of Śākta and Trika philosophy: cit and vimarśa, icchā-jñāna-kriyā, māyā, manifestation, liberation, the tattvas, kuṇḍalinī and competing chakra systems.",
      },
      { property: "og:title", content: "Śākta Philosophy — How Does Reality Exist?" },
      {
        property: "og:description",
        content:
          "Consciousness, power, māyā and liberation, mapped without flattening the disagreements.",
      },
    ],
  }),
  component: PhilosophyMap,
});

function PhilosophyMap() {
  const [node, setNode] = useState(philNodes[0]!.id);
  const active = philNodes.find((n) => n.id === node)!;
  const tattvaRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: tattvaRef,
    offset: ["start end", "end start"],
  });
  const spread = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [chakra, setChakra] = useState(0);
  const [modernChakras, setModernChakras] = useState(true);

  return (
    <>
      {/* 22 — Philosophical map */}
      <Environment gradient="var(--grad-void)" className="py-24">
        <CosmicParticles mode="field" hue={270} count={380} />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal>
            <Title deva="दर्शन" title="How Does Reality Exist?" sub="Śākta Philosophy" />
          </Reveal>
          <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div className="relative aspect-square w-full">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
                {philNodes.flatMap((n) =>
                  n.links.map((l) => {
                    const t = philNodes.find((x) => x.id === l);
                    if (!t) return null;
                    const lit = node === n.id || node === l;
                    return (
                      <line
                        key={`${n.id}-${l}`}
                        x1={n.x}
                        y1={n.y}
                        x2={t.x}
                        y2={t.y}
                        stroke={lit ? "var(--color-gold)" : "var(--color-border)"}
                        strokeWidth={lit ? 0.5 : 0.22}
                      />
                    );
                  }),
                )}
              </svg>
              {philNodes.map((n) => (
                <button
                  key={n.id}
                  type="button"
                  onMouseEnter={() => setNode(n.id)}
                  onFocus={() => setNode(n.id)}
                  onClick={() => setNode(n.id)}
                  aria-pressed={node === n.id}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-3 py-2 text-center transition-colors ${
                    node === n.id
                      ? "border-gold bg-gold/15"
                      : "border-border bg-background/70 hover:border-gold/50"
                  }`}
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                >
                  <span className="deva block text-[11px] text-lotus">{n.deva}</span>
                  <span className="block text-[10px] tracking-[0.12em] uppercase">{n.label}</span>
                </button>
              ))}
            </div>
            <div>
              <p className="deva text-2xl text-gold">{active.deva}</p>
              <h2 className="font-display mt-2 text-3xl">{active.label}</h2>
              <p className="mt-3 text-sm tracking-[0.14em] text-muted-foreground uppercase">
                {active.gloss}
              </p>
              <Prose>
                <p className="mt-6">{active.detail}</p>
              </Prose>
              <ScholarOnly>
                <p>
                  Terminology here follows Pratyabhijñā usage (Utpaladeva, Abhinavagupta) as adopted
                  by non-dual Śrīvidyā exegesis. Sāṃkhya, Advaita Vedānta, Śaiva Siddhānta and
                  dualist Tantric schools assign several of these terms — particularly māyā and
                  śakti — substantially different values.
                </p>
              </ScholarOnly>
            </div>
          </div>
        </div>
      </Environment>

      {/* 23 — Tattvas */}
      <Environment gradient="var(--grad-void)" className="py-24" minHeight="min-h-0">
        <div ref={tattvaRef} className="mx-auto max-w-4xl px-6">
          <Reveal>
            <Title deva="तत्त्व" title="The Tattvas" sub="Consciousness → Matter → Consciousness" />
          </Reveal>
          <ol className="mt-14 space-y-3">
            {tattvas.map((t, i) => (
              <motion.li
                key={t.name}
                style={{
                  x: useTransform(spread, [0, 1], [0, (i % 2 ? 1 : -1) * (i * 2)]),
                  opacity: useTransform(spread, [0, 0.15, 1], [0.35, 1, 1]),
                }}
                className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-l-2 py-3 pl-5"
              >
                <span
                  className="eyebrow"
                  style={{
                    color:
                      t.band === "Pure"
                        ? "var(--color-gold)"
                        : t.band === "Limiting"
                          ? "var(--color-vermilion)"
                          : "var(--color-mist)",
                  }}
                >
                  {t.band}
                </span>
                <span className="deva text-lg text-lotus">{t.deva}</span>
                <span className="font-display text-xl">{t.name}</span>
                <span className="text-sm text-muted-foreground">{t.note}</span>
              </motion.li>
            ))}
          </ol>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Read downward, reality differentiates. Read upward, it is the return: matter → mind →
            subtle reality → consciousness.
          </p>
          <div className="mt-8">
            <Note kind="tradition">
              <p>{tattvaNote}</p>
            </Note>
          </div>
        </div>
      </Environment>

      {/* 20 & 21 — Kuṇḍalinī and the chakras */}
      <Environment
        gradient="radial-gradient(ellipse at 50% 100%, oklch(0.45 0.16 30) 0%, oklch(0.18 0.05 290) 45%, oklch(0.09 0.012 285) 100%)"
        className="py-24"
      >
        <CosmicParticles mode="vertical" hue={40} count={340} />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <Reveal>
            <Title deva="कुण्डलिनी" title="KUṆḌALINĪ" sub="The Subtle Body as Model" />
          </Reveal>
          <div className="mx-auto mt-10 max-w-2xl">
            <Note kind="caution">
              <p>
                Traditional descriptions of the subtle body — nāḍīs, cakras, kuṇḍalinī — are
                religious and yogic models developed within specific traditions. They are not
                descriptions of anatomical or neurological structures, and equating them with
                measurable physiological substances misrepresents both. Nothing here is medical
                advice or practice instruction.
              </p>
            </Note>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-[auto_1fr] md:items-start">
            <div className="relative mx-auto h-[520px] w-40">
              <div
                aria-hidden
                className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.6 0.2 32 / 0.8), oklch(0.83 0.11 88 / 0.6))",
                }}
              />
              {chakras.map((c, i) => {
                const bottomPct = (i / (chakras.length - 1)) * 92 + 2;
                return (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setChakra(i)}
                    aria-pressed={chakra === i}
                    className="absolute left-1/2 -translate-x-1/2 rounded-full border px-3 py-1 text-[10px] tracking-[0.12em] uppercase transition-colors"
                    style={{
                      bottom: `${bottomPct}%`,
                      borderColor: chakra === i ? "var(--color-gold)" : "var(--color-border)",
                      background: chakra === i ? "oklch(0.98 0 0 / 0.07)" : "var(--color-background)",
                    }}
                  >
                    {c.name}
                  </button>
                );
              })}
            </div>

            <div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setModernChakras(false)}
                  aria-pressed={!modernChakras}
                  className={`rounded-full border px-4 py-2 text-[11px] tracking-[0.18em] uppercase ${
                    !modernChakras ? "border-gold/60 bg-gold/15 text-gold" : "border-border text-muted-foreground"
                  }`}
                >
                  Classical systems
                </button>
                <button
                  type="button"
                  onClick={() => setModernChakras(true)}
                  aria-pressed={modernChakras}
                  className={`rounded-full border px-4 py-2 text-[11px] tracking-[0.18em] uppercase ${
                    modernChakras ? "border-gold/60 bg-gold/15 text-gold" : "border-border text-muted-foreground"
                  }`}
                >
                  Modern seven-chakra model
                </button>
              </div>

              {modernChakras ? (
                <div className="mt-8">
                  <p className="deva text-2xl text-gold">{chakras[chakra]!.deva}</p>
                  <h3 className="font-display mt-2 text-3xl">{chakras[chakra]!.name}</h3>
                  <dl className="mt-6 space-y-3 text-sm">
                    {[
                      ["Location", chakras[chakra]!.place],
                      ["Petals", chakras[chakra]!.petals],
                      ["Element in this system", chakras[chakra]!.element],
                      ["Note", chakras[chakra]!.note],
                    ].map(([k, v]) => (
                      <div key={k} className="flex gap-4">
                        <dt className="eyebrow w-40 shrink-0">{k}</dt>
                        <dd className="text-muted-foreground">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ) : (
                <div className="mt-8">
                  <Prose>
                    <p>
                      Classical Tantric sources do not agree on one system. The Kubjikāmata and
                      allied Kaula texts describe different centre-counts; Trika sources emphasise
                      currents and levels of speech (parā, paśyantī, madhyamā, vaikharī) rather than
                      a fixed ladder of seven; Buddhist Tantric systems commonly use four or five.
                      Colour-coded rainbow correspondences are a twentieth-century Western
                      elaboration and are absent from the Sanskrit sources.
                    </p>
                  </Prose>
                  <ScholarOnly>
                    <p>
                      See the Ṣaṭ-cakra-nirūpaṇa (a section of the 16th-c. Śrītattvacintāmaṇi) and its
                      1918 translation as The Serpent Power, which is the principal channel by which
                      one late system became globally normative.
                    </p>
                  </ScholarOnly>
                </div>
              )}

              <div className="mt-8">
                <Note kind="tradition">
                  <p>{chakraNote}</p>
                </Note>
              </div>
            </div>
          </div>
        </div>
      </Environment>

      {/* 24 — Creation and dissolution */}
      <Environment gradient="var(--grad-void)" className="py-24" minHeight="min-h-0">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <Title deva="सृष्टि • स्थिति • संहार" title="Sṛṣṭi · Sthiti · Saṃhāra" sub="Creation · Maintenance · Dissolution" />
          </Reveal>
          <ol className="mt-14 flex flex-wrap items-center justify-center gap-x-3 gap-y-4">
            {[
              "Stillness",
              "Vibration",
              "Manifestation",
              "Complexity",
              "Life",
              "Experience",
              "Dissolution",
              "Stillness",
              "Manifestation again",
            ].map((s, i) => (
              <motion.li
                key={`${s}-${i}`}
                animate={{ opacity: [0.25, 1, 0.25] }}
                transition={{ duration: 9, delay: i * 0.9, repeat: Infinity }}
                className="eyebrow border border-border/60 px-3 py-2"
              >
                {s}
              </motion.li>
            ))}
          </ol>
          <div className="mx-auto mt-10 max-w-2xl text-left">
            <Prose>
              <p>
                Most Śākta cosmologies are cyclical rather than linear: dissolution is a phase, not
                a terminus. Traditions differ over whether the cycle is beginningless, whether
                dissolution is total (mahāpralaya) or partial, and whether the Goddess withdraws the
                world into herself or merely ceases to project it.
              </p>
            </Prose>
          </div>
          <Link
            to="/dissolution"
            className="mt-10 inline-block rounded-full border border-gold/40 px-7 py-3 text-xs tracking-[0.2em] uppercase hover:bg-gold/10"
          >
            Travel to the dissolution
          </Link>
        </div>
      </Environment>
    </>
  );
}
