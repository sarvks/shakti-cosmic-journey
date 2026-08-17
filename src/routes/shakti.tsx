import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { CosmicParticles } from "@/components/cosmic/CosmicParticles";
import { SriYantra } from "@/components/cosmic/SriYantra";
import {
  Environment,
  Note,
  Prose,
  Reveal,
  ScholarOnly,
  DevotionalOnly,
  Title,
} from "@/components/cosmic/ui";

export const Route = createFileRoute("/shakti")({
  head: () => ({
    meta: [
      { title: "What Is Śakti? — Manifestation, Devī, Śiva–Śakti" },
      {
        name: "description",
        content:
          "Śakti as power, capacity and divine manifestation; the Great Goddess; Śiva and Śakti; Ardhanārīśvara — with the difference between metaphysical śakti and scientific energy made explicit.",
      },
      { property: "og:title", content: "What Is Śakti? — Manifestation and the Great Goddess" },
      {
        property: "og:description",
        content:
          "A scroll-driven manifestation sequence: energy, matter, life, mind, form, dissolution.",
      },
    ],
  }),
  component: ShaktiJourney,
});

const transformations = ["Energy", "Matter", "Life", "Mind", "Form", "Dissolution"];

function ShaktiJourney() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const overlap = useTransform(scrollYProgress, [0, 1], ["-22%", "0%"]);

  return (
    <>
      {/* 2 — The central idea */}
      <div ref={ref} className="relative">
        <Environment gradient="var(--grad-void)" className="grid place-items-center py-28">
          <CosmicParticles mode="field" hue={40} count={620} />
          <motion.div style={{ scale }} className="relative z-10 mx-auto max-w-3xl px-6 text-center">
            <Title deva="शक्ति" title="What Is Śakti?" sub="Manifestation · Power · Presence" />
            <Prose>
              <div className="mx-auto mt-10 text-left">
                <p>
                  In its broadest Sanskrit sense <strong>śakti</strong> means power, capacity,
                  potency, ability — the fact that something <em>can</em>. Grammarians used it for
                  the force of a word; medical texts for the strength of a body; philosophers for
                  the capacity of a cause to produce its effect.
                </p>
                <p>
                  Within Śākta traditions this ordinary word becomes a theology. Śakti is the
                  Goddess: not a force that a deity wields, but the divine as activity — the
                  becoming of worlds, the awareness that knows them, and the movement by which they
                  end.
                </p>
                <p>
                  Different schools take this in different directions. Some make Śakti the sole
                  reality, of which consciousness is the still face. Others make her the dynamic
                  aspect of a consciousness-principle named Śiva. Devotional traditions may simply
                  call her Mother and leave the metaphysics to the commentators.
                </p>
              </div>
            </Prose>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {transformations.map((t, i) => (
                <motion.span
                  key={t}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 6, delay: i * 1, repeat: Infinity }}
                  className="eyebrow border border-border/60 px-3 py-2"
                >
                  {t}
                </motion.span>
              ))}
            </div>
            <div className="mx-auto mt-12 max-w-2xl text-left">
              <Note kind="caution">
                <p>
                  Śakti is not a synonym for the physicist's "energy". Physical energy is a
                  measurable, conserved quantity with a precise mathematical definition. Śakti is a
                  metaphysical and theological category concerning consciousness, agency and divine
                  presence. Translating one into the other flatters neither; this site keeps them
                  apart.
                </p>
              </Note>
              <ScholarOnly>
                <p>
                  On the semantic range of <em>śakti</em> see grammatical usage (Bhartṛhari's
                  treatment of expressive power) alongside Śaiva technical usage in Utpaladeva's
                  Īśvarapratyabhijñākārikā, where śakti names the self-referential capacity
                  (vimarśa) of prakāśa. The identification of śakti with a supreme Goddess is a
                  Śākta theological move, not a lexical fact.
                </p>
              </ScholarOnly>
              <DevotionalOnly>
                She is not the power of someone. She is the power that anything at all is.
              </DevotionalOnly>
            </div>
          </motion.div>
        </Environment>

        {/* 3 — Devī */}
        <Environment
          gradient="radial-gradient(ellipse at 50% 60%, oklch(0.4 0.1 320) 0%, oklch(0.16 0.04 300) 55%, oklch(0.09 0.012 285) 100%)"
          className="grid place-items-center py-28"
        >
          <CosmicParticles mode="converge" hue={340} count={520} />
          <motion.div
            aria-hidden
            style={{ rotate }}
            className="pointer-events-none absolute top-1/2 left-1/2 aspect-square w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
          >
            <div className="absolute inset-0 rounded-full border border-lotus/20" />
            <div className="absolute inset-[18%] rounded-full border border-gold/25" />
            <div
              className="absolute inset-[34%] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.9 0.08 350 / 0.35), transparent 70%)",
              }}
            />
          </motion.div>
          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <Title deva="देवी" title="DEVĪ" sub="The Goddess" />
            </Reveal>
            <Reveal delay={0.15}>
              <Prose>
                <div className="mx-auto mt-10 text-left">
                  <p>
                    Rather than a portrait, the Goddess is approached here as light, geometry, lotus
                    and architecture — the way much Śākta art itself approaches her, through the
                    yantra, the lamp, the pot, the unhewn stone.
                  </p>
                  <p>
                    <strong>Mahādevī</strong>, the Great Goddess, names the claim that the divine is
                    ultimately feminine and ultimately one. Individual goddesses are then understood
                    variously: as her deliberate self-limitations, as her powers, as fully
                    independent deities later gathered under her name, or — in some regional
                    traditions — as neighbours rather than aspects.
                  </p>
                  <p>
                    Śākta schools do not agree on this relation, and the histories behind it differ
                    from region to region. That disagreement is part of the subject.
                  </p>
                </div>
              </Prose>
              <div className="mt-10">
                <Link
                  to="/goddesses"
                  className="rounded-full border border-lotus/50 px-7 py-3 text-sm tracking-[0.24em] uppercase hover:bg-lotus/10"
                >
                  Open the Goddess Atlas
                </Link>
              </div>
            </Reveal>
          </div>
        </Environment>

        {/* 11 & 12 — Śiva + Śakti, Ardhanārīśvara */}
        <Environment gradient="var(--grad-void)" className="py-28">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <Title title="Śiva + Śakti" deva="शिवशक्ति" sub="Consciousness · Manifestation" />
            </Reveal>
            <div className="relative mt-16 grid gap-6 md:grid-cols-2">
              <motion.div
                style={{ x: overlap }}
                className="relative grid h-64 place-items-center overflow-hidden rounded-sm border border-border/60"
              >
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 60% 50%, oklch(0.7 0.02 260 / 0.4), transparent 70%)",
                  }}
                />
                <div className="relative text-center">
                  <p className="deva text-2xl text-mist">शिव</p>
                  <p className="font-display mt-2 text-2xl">Śiva</p>
                  <p className="eyebrow mt-2">Consciousness · Prakāśa</p>
                </div>
              </motion.div>
              <motion.div
                style={{ x: useTransform(overlap, (v) => `-${v}`) }}
                className="relative grid h-64 place-items-center overflow-hidden rounded-sm border border-border/60"
              >
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 40% 50%, oklch(0.6 0.2 32 / 0.45), transparent 70%)",
                  }}
                />
                <div className="relative text-center">
                  <p className="deva text-2xl text-vermilion">शक्ति</p>
                  <p className="font-display mt-2 text-2xl">Śakti</p>
                  <p className="eyebrow mt-2">Power · Vimarśa</p>
                </div>
              </motion.div>
            </div>

            <Reveal>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <Prose>
                  <p>
                    A conceptual principle often summarised as{" "}
                    <strong>consciousness without power cannot manifest</strong> runs through
                    Śaiva-Śākta thought: light that cannot recognise itself illuminates nothing;
                    power without awareness has nothing to express. The two are distinguished for
                    analysis, never separated in fact.
                  </p>
                  <p>
                    Where the schools differ is in emphasis and hierarchy. Trika Śaivism tends to
                    read Śakti as Śiva's self-awareness. Strongly Śākta theologies invert this, and
                    Śiva becomes the inert ground upon which the Goddess acts — an image literalised
                    in the icon of Kālī standing upon a supine Śiva.
                  </p>
                </Prose>
                <div>
                  <div
                    aria-hidden
                    className="relative mx-auto h-64 w-40 overflow-hidden rounded-t-full border border-border/60"
                    style={{
                      background:
                        "linear-gradient(90deg, oklch(0.5 0.02 260 / 0.55) 0%, oklch(0.5 0.02 260 / 0.55) 49.5%, oklch(0.55 0.18 32 / 0.55) 50.5%, oklch(0.55 0.18 32 / 0.55) 100%)",
                    }}
                  />
                  <p className="mt-4 text-center">
                    <span className="deva text-lg text-gold">अर्धनारीश्वर</span>
                    <br />
                    <span className="eyebrow">Ardhanārīśvara</span>
                  </p>
                  <Prose>
                    <p className="mt-4">
                      The half-female form figures complementarity and metaphysical unity. Read in
                      context it concerns consciousness and manifestation, not a modern gender
                      binary; classical sources also use it to unsettle fixed identity rather than
                      to confirm it.
                    </p>
                  </Prose>
                </div>
              </div>
              <div className="mt-8">
                <Note kind="tradition">
                  <p>
                    No single Śiva–Śakti metaphysics is "the Hindu view". Trika, Śrīvidyā, Śaiva
                    Siddhānta, Vīraśaiva and Purāṇic traditions each frame the relation differently,
                    and dualist Śaiva schools reject non-dual readings outright.
                  </p>
                </Note>
              </div>
            </Reveal>
          </div>
        </Environment>
      </div>

      {/* Bridge to the Śrī Chakra */}
      <Environment gradient="var(--grad-tripura)" className="grid place-items-center py-24">
        <div className="relative z-10 px-6 text-center">
          <Reveal>
            <SriYantra size={420} className="mx-auto" />
            <p className="eyebrow mt-10">Continue the journey</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {[
                { to: "/mahavidyas", label: "Daśa Mahāvidyā" },
                { to: "/sri-chakra", label: "Śrī Chakra" },
                { to: "/tantra", label: "Tantra · Mantra · Yantra" },
                { to: "/philosophy", label: "Śākta Philosophy" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="rounded-full border border-gold/40 px-6 py-3 text-xs tracking-[0.2em] uppercase hover:bg-gold/10"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </Environment>
    </>
  );
}
