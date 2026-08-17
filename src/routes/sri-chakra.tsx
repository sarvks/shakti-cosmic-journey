import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { CosmicParticles } from "@/components/cosmic/CosmicParticles";
import { SriYantra, yantraLayers, type YantraLayer } from "@/components/cosmic/SriYantra";
import { Environment, Note, Prose, Reveal, ScholarOnly, Title } from "@/components/cosmic/ui";

export const Route = createFileRoute("/sri-chakra")({
  head: () => ({
    meta: [
      { title: "Śrī Chakra Explorer — Enter the Geometry, Reach the Bindu" },
      {
        name: "description",
        content:
          "Rotate, zoom and travel inward through an interactive Śrī Yantra: bhūpura, lotuses, triangle enclosures, the central trikoṇa and the bindu, with the philosophy of each layer.",
      },
      { property: "og:title", content: "Śrī Chakra Explorer" },
      {
        property: "og:description",
        content:
          "Nine enclosures of the Śrī Yantra, travelled inward — into the cosmos and into consciousness at once.",
      },
    ],
  }),
  component: SriChakraExplorer,
});

const geometrySteps = [
  { label: "Point", deva: "बिन्दु", note: "Undivided; without magnitude." },
  { label: "Triangle", deva: "त्रिकोण", note: "The first relation: three, from one." },
  { label: "Interlocking forms", deva: "अर", note: "Opposed triangles generate enclosure." },
  { label: "Lotus", deva: "पद्म", note: "Unfolding; the organic answer to the geometric." },
  { label: "Circle", deva: "वृत्त", note: "Boundary without corner; totality." },
  { label: "Square", deva: "भूपुर", note: "The earth-city; entry and orientation." },
];

function SriChakraExplorer() {
  const [active, setActive] = useState<YantraLayer | null>(null);
  const [depth, setDepth] = useState(0);
  const [bindu, setBindu] = useState(false);
  const layer = yantraLayers.find((l) => l.id === active);

  return (
    <>
      <Environment gradient="var(--grad-tripura)" className="py-24">
        <CosmicParticles mode="converge" hue={350} count={480} />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal>
            <Title deva="श्रीचक्र" title="ŚRĪ CHAKRA" sub="Nine Enclosures · One Point" />
          </Reveal>

          <div className="mt-16 grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <SriYantra
                size={560}
                active={active}
                onSelect={(l) => setActive(l)}
                depth={depth}
                className="mx-auto"
              />
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setDepth((d) => Math.min(d + 90, 360))}
                  className="rounded-full border border-gold/40 px-5 py-2 text-xs tracking-[0.2em] uppercase hover:bg-gold/10"
                >
                  Travel inward
                </button>
                <button
                  type="button"
                  onClick={() => setDepth((d) => Math.max(d - 90, -180))}
                  className="rounded-full border border-border px-5 py-2 text-xs tracking-[0.2em] uppercase hover:text-foreground"
                >
                  Withdraw
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setDepth(0);
                    setActive(null);
                  }}
                  className="rounded-full border border-border px-5 py-2 text-xs tracking-[0.2em] uppercase hover:text-foreground"
                >
                  Reset
                </button>
              </div>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Select any enclosure — by click or keyboard — to read it. Every layer is also listed
                in full text below, so nothing here depends on the animation.
              </p>
            </div>

            <div>
              <ul className="space-y-1">
                {yantraLayers.map((l) => (
                  <li key={l.id}>
                    <button
                      type="button"
                      onClick={() => setActive(l.id)}
                      aria-pressed={active === l.id}
                      className={`w-full rounded-sm border px-4 py-3 text-left transition-colors ${
                        active === l.id
                          ? "border-gold/60 bg-gold/10"
                          : "border-border/60 hover:border-gold/40"
                      }`}
                    >
                      <span className="flex items-baseline justify-between gap-3">
                        <span className="font-display text-lg">{l.name}</span>
                        <span className="deva text-sm text-lotus">{l.deva}</span>
                      </span>
                      <span className="mt-1 block text-xs text-muted-foreground">{l.gloss}</span>
                    </button>
                  </li>
                ))}
              </ul>

              <AnimatePresence mode="wait">
                {layer && (
                  <motion.div
                    key={layer.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 rounded-sm border border-gold/30 bg-card/60 p-5"
                  >
                    <p className="eyebrow">{layer.name}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {layer.detail}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-8">
                <Note>
                  <p>
                    The Śrī Chakra is drawn in several traditional constructions (bhū-pṛṣṭha,
                    kūrma-pṛṣṭha, meru), and the precise placement of its 43 triangles is a real
                    problem in traditional geometry. The figure here is a stylised study for
                    teaching, not a ritually exact drawing, and its interpretation follows Śrīvidyā
                    sources such as the Yoginī Hṛdaya.
                  </p>
                </Note>
                <ScholarOnly>
                  <p>
                    Enclosure names and epithets follow the navacakra scheme of the
                    Nityāṣoḍaśikārṇava with Amṛtānanda's Dīpikā; Bhāskararāya's Setubandha differs on
                    several attributions. Sṛṣṭi-krama (outward) and saṃhāra-krama (inward) worship
                    orders reverse the sequence, and schools disagree over which is primary.
                  </p>
                </ScholarOnly>
              </div>
            </div>
          </div>
        </div>
      </Environment>

      {/* 14 — Yantra */}
      <Environment gradient="var(--grad-void)" className="py-24" minHeight="min-h-0">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <Title deva="यन्त्र" title="What Is a Yantra?" sub="Point → Triangle → Lotus → Square" />
            <div className="mx-auto mt-8 max-w-2xl">
              <Prose>
                <p>
                  In Hindu and Tantric traditions a <strong>yantra</strong> is a geometric diagram
                  used as an instrument — the word shares a root with "to hold, to restrain". It can
                  be a support for visualisation, a ritual body of a deity, a meditative map, or all
                  three. It is not a decorative pattern, and within its traditions it is not a
                  charm whose power is independent of practice, lineage and intention.
                </p>
              </Prose>
            </div>
          </Reveal>
          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {geometrySteps.map((s, i) => (
              <motion.li
                key={s.label}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-sm border border-border/60 p-6"
              >
                <div aria-hidden className="mb-4 grid h-20 place-items-center">
                  <svg viewBox="0 0 80 80" className="h-20 w-20" fill="none" stroke="var(--color-gold)">
                    {i === 0 && <circle cx="40" cy="40" r="3" fill="var(--color-gold)" />}
                    {i === 1 && <path d="M14 26 L66 26 L40 66 Z" />}
                    {i === 2 && (
                      <>
                        <path d="M14 26 L66 26 L40 66 Z" />
                        <path d="M14 54 L66 54 L40 14 Z" />
                      </>
                    )}
                    {i === 3 &&
                      Array.from({ length: 8 }).map((_, k) => (
                        <ellipse
                          key={k}
                          cx="40"
                          cy="40"
                          rx="9"
                          ry="26"
                          transform={`rotate(${k * 22.5} 40 40)`}
                        />
                      ))}
                    {i === 4 && (
                      <>
                        <circle cx="40" cy="40" r="26" />
                        <circle cx="40" cy="40" r="18" />
                      </>
                    )}
                    {i === 5 && (
                      <>
                        <rect x="12" y="12" width="56" height="56" />
                        <rect x="18" y="18" width="44" height="44" />
                      </>
                    )}
                  </svg>
                </div>
                <p className="deva text-sm text-lotus">{s.deva}</p>
                <p className="font-display mt-1 text-xl">{s.label}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.note}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </Environment>

      {/* 15 — Bindu */}
      <section
        className="relative grid min-h-screen place-items-center overflow-hidden"
        style={{ background: bindu ? "var(--color-void)" : "var(--grad-void)" }}
      >
        {!bindu && <CosmicParticles mode="dissolve" hue={60} count={520} />}
        <div className="relative z-10 px-6 text-center">
          <motion.div
            aria-hidden
            animate={{ scale: bindu ? 1 : 1.05 }}
            transition={{ duration: 2 }}
            className="animate-breathe mx-auto size-2 rounded-full bg-gold"
            style={{ boxShadow: "0 0 80px 16px oklch(0.83 0.11 88 / 0.35)" }}
          />
          <p className="deva mt-12 text-5xl text-gold">बिन्दु</p>
          <h2 className="font-display mt-4 text-4xl tracking-[0.3em] uppercase">Bindu</h2>
          <p className="eyebrow mt-4">The Point</p>
          <div className="mx-auto mt-8 max-w-xl">
            <Prose>
              <p>
                At the centre of the Śrī Chakra everything else is withdrawn. What remains has no
                dimension: within Śrīvidyā and allied Tantric traditions the bindu is the Goddess
                herself prior to extension — the condition of manifestation rather than its first
                object. Ritual and contemplative practice moves both ways, contracting the cosmos to
                the point and expanding the point into the cosmos.
              </p>
            </Prose>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setBindu((b) => !b)}
              className="rounded-full border border-gold/40 px-6 py-3 text-xs tracking-[0.2em] uppercase hover:bg-gold/10"
            >
              {bindu ? "Let the universe reappear" : "Contract to the point"}
            </button>
            <Link
              to="/tantra"
              className="rounded-full border border-border px-6 py-3 text-xs tracking-[0.2em] uppercase hover:text-foreground"
            >
              Continue to Tantra
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
