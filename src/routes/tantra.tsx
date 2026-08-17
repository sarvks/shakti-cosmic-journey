import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { CosmicParticles } from "@/components/cosmic/CosmicParticles";
import { MantraWave } from "@/components/cosmic/MantraWave";
import { Environment, Note, Prose, Reveal, ScholarOnly, Title } from "@/components/cosmic/ui";

export const Route = createFileRoute("/tantra")({
  head: () => ({
    meta: [
      { title: "Tantra Beyond the Modern Myth — Mantra, Yantra, Ritual" },
      {
        name: "description",
        content:
          "What Tantra actually is: initiatory traditions of theology, ritual, mantra, visualisation, yoga and sacred geometry — and how modern Western usage of the word diverged from them.",
      },
      { property: "og:title", content: "TANTRA — Beyond the Modern Myth" },
      {
        property: "og:description",
        content:
          "An interactive knowledge map of Tantra, the universe as sound, Sanskrit and the Goddess, kuṇḍalinī and the chakras.",
      },
    ],
  }),
  component: TantraSection,
});

const mapNodes = [
  { id: "tantra", label: "TANTRA", x: 50, y: 8 },
  { id: "mantra", label: "MANTRA", x: 18, y: 34 },
  { id: "yantra", label: "YANTRA", x: 50, y: 34 },
  { id: "ritual", label: "RITUAL", x: 82, y: 34 },
  { id: "sound", label: "SOUND", x: 18, y: 58 },
  { id: "geometry", label: "GEOMETRY", x: 50, y: 58 },
  { id: "action", label: "ACTION", x: 82, y: 58 },
  { id: "shakti", label: "ŚAKTI", x: 50, y: 78 },
  { id: "cit", label: "CONSCIOUSNESS", x: 50, y: 93 },
];

const edges: [string, string][] = [
  ["tantra", "mantra"],
  ["tantra", "yantra"],
  ["tantra", "ritual"],
  ["mantra", "sound"],
  ["yantra", "geometry"],
  ["ritual", "action"],
  ["sound", "shakti"],
  ["geometry", "shakti"],
  ["action", "shakti"],
  ["shakti", "cit"],
];

const nodeGloss: Record<string, string> = {
  tantra: "A body of initiatory scriptural traditions, Hindu and Buddhist, roughly from the mid first millennium CE onward.",
  mantra: "Formulae understood as sonic bodies of deities, transmitted through lineage and initiation.",
  yantra: "Geometric diagrams used as instruments of visualisation, worship and cosmology.",
  ritual: "Structured action: pūjā, nyāsa, homa, consecration, calendrical and life-cycle rites.",
  sound: "Speech and vibration treated as the medium in which reality is articulated.",
  geometry: "Space treated as intelligible order — enclosure, direction, centre.",
  action: "Practice as knowledge enacted rather than merely held.",
  shakti: "The power in which sound, geometry and action are one movement.",
  cit: "Awareness, in which the whole configuration is finally read.",
};

const mantraTopics = [
  ["Sacred sound", "Many Tantric traditions treat sound as the primary medium of manifestation; the deity's mantra is not a name of the deity but a form of it."],
  ["Vibration as religious metaphor", "Spanda — 'vibration' — is a philosophical figure for the pulse of awareness. It is not a claim about measurable acoustic frequencies."],
  ["Practice", "Japa, nyāsa and visualisation are structured, gradual and normally taught within a lineage."],
  ["Initiation", "Dīkṣā transmits authorisation as much as information; texts insist that an uninitiated mantra is inert or harmful."],
  ["Textual traditions", "Mantra-śāstra is a technical literature with its own grammar of encoding, elision and secrecy."],
];

const vowels = ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ॠ", "ऌ", "ए", "ऐ", "ओ", "औ", "अं", "अः"];
const consonants = [
  "क","ख","ग","घ","ङ","च","छ","ज","झ","ञ","ट","ठ","ड","ढ","ण","त","थ","द","ध","न","प","फ","ब","भ","म","य","र","ल","व","श","ष","स","ह","क्ष",
];

function TantraSection() {
  const [node, setNode] = useState<string | null>(null);
  const [letter, setLetter] = useState<string | null>(null);

  return (
    <>
      <Environment gradient="var(--grad-void)" className="py-24">
        <CosmicParticles mode="field" hue={50} count={420} />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <Reveal>
            <Title deva="तन्त्र" title="TANTRA" sub="Beyond the Modern Myth" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mx-auto mt-10 max-w-2xl">
              <Prose>
                <p>
                  Begin with what Tantra is not. In modern Western usage the word has come to mean,
                  almost exclusively, a set of ideas about sexuality and intimacy. That usage is
                  roughly a century old, largely European and American in origin, and bears little
                  resemblance to the traditions the word names in South Asia.
                </p>
                <p>
                  Historically, <strong>tantra</strong> refers to a vast class of scriptures and to
                  the initiatory traditions that use them — Śaiva, Śākta, Vaiṣṇava and Buddhist.
                  Their contents are overwhelmingly concerned with theology, cosmology, ritual
                  procedure, mantra, visualisation, yoga, temple and image consecration, initiation,
                  and philosophical argument.
                </p>
                <p>
                  Some traditions do include transgressive and erotic ritual elements, and these are
                  historically real and scholarly studied. They are a minority strand within a
                  larger literature, and they are not what most Tantric practitioners across history
                  have spent their time doing.
                </p>
              </Prose>
              <div className="mt-8 space-y-4">
                <Note kind="caution">
                  <p>
                    This site describes practices rather than instructing in them. Where a tradition
                    holds that a practice requires initiation and a qualified teacher, that is stated
                    and respected; restricted mantras and ritual sequences are not reproduced.
                  </p>
                </Note>
                <ScholarOnly>
                  <p>
                    On periodisation and the "Śaiva Age", see Sanderson's work on Tantric
                    exegesis and royal patronage; on the modern reception of the word, see studies of
                    Woodroffe's translations and of later esoteric popularisation. Recent scholarship
                    resists a single definition of Tantra, preferring family-resemblance criteria:
                    initiation, mantra, maṇḍala, deity-identification, and a scriptural corpus
                    claiming revelation beyond the Veda.
                  </p>
                </ScholarOnly>
              </div>
            </div>
          </Reveal>
        </div>
      </Environment>

      {/* 17 — Knowledge map */}
      <Environment gradient="var(--grad-void)" className="py-24" minHeight="min-h-0">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <Title title="Tantra Knowledge Map" sub="Hover or select a node" />
          </Reveal>
          <div className="relative mx-auto mt-14 aspect-[4/5] w-full max-w-2xl sm:aspect-[5/4]">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
              {edges.map(([a, b]) => {
                const A = mapNodes.find((n) => n.id === a)!;
                const B = mapNodes.find((n) => n.id === b)!;
                const lit = node === a || node === b;
                return (
                  <motion.line
                    key={`${a}-${b}`}
                    x1={A.x}
                    y1={A.y}
                    x2={B.x}
                    y2={B.y}
                    stroke={lit ? "var(--color-gold)" : "var(--color-border)"}
                    strokeWidth={lit ? 0.5 : 0.25}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4 }}
                  />
                );
              })}
            </svg>
            {mapNodes.map((n) => (
              <button
                key={n.id}
                type="button"
                onMouseEnter={() => setNode(n.id)}
                onFocus={() => setNode(n.id)}
                onClick={() => setNode(n.id)}
                className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-3 py-2 text-[10px] tracking-[0.16em] uppercase transition-colors ${
                  node === n.id
                    ? "border-gold bg-gold/15 text-gold"
                    : "border-border bg-background/70 text-muted-foreground"
                }`}
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
              >
                {n.label}
              </button>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-xl text-center text-sm leading-relaxed text-muted-foreground">
            {node ? nodeGloss[node] : "Sound, geometry and action are three registers of one power."}
          </p>
        </div>
      </Environment>

      {/* 18 — Mantra */}
      <Environment
        gradient="radial-gradient(ellipse at 50% 50%, oklch(0.36 0.1 250) 0%, oklch(0.15 0.04 270) 55%, oklch(0.09 0.012 285) 100%)"
        className="py-24"
      >
        <MantraWave hue={250} lines={6} />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <Reveal>
            <Title deva="मन्त्र" title="MANTRA" sub="The Universe as Sound" />
          </Reveal>
          <dl className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
            {mantraTopics.map(([t, d]) => (
              <div key={t} className="rounded-sm border border-border/60 bg-background/30 p-5">
                <dt className="font-display text-xl">{t}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</dd>
              </div>
            ))}
          </dl>
          <div className="mx-auto mt-10 max-w-2xl">
            <Note kind="caution">
              <p>
                No initiatory instruction is given here, and mantras are not interchangeable: within
                their traditions each belongs to a specific deity, lineage, and authorisation.
              </p>
            </Note>
          </div>
        </div>
      </Environment>

      {/* 19 — Sanskrit and the Goddess */}
      <Environment gradient="var(--grad-void)" className="py-24" minHeight="min-h-0">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <Title
              deva="मातृका"
              title="Sanskrit and the Goddess"
              sub="Mātṛkā — the letters as mothers"
            />
          </Reveal>
          <div className="mx-auto mt-10 max-w-2xl">
            <Prose>
              <p>
                Several Tantric traditions treat the phonemes of Sanskrit as the mātṛkā — 'little
                mothers' — from whom words, worlds and deities are generated. Kālī's garland of fifty
                heads is read in this light: language itself worn as ornament.
              </p>
            </Prose>
          </div>
          <div className="mt-12">
            <p className="eyebrow mb-4">Vowels · svara</p>
            <div className="flex flex-wrap gap-2">
              {vowels.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setLetter(v)}
                  className="deva grid size-12 place-items-center rounded-sm border border-border/60 text-lg text-gold transition-colors hover:border-gold/60 hover:bg-gold/10"
                >
                  {v}
                </button>
              ))}
            </div>
            <p className="eyebrow mt-8 mb-4">Consonants · vyañjana</p>
            <div className="flex flex-wrap gap-2">
              {consonants.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setLetter(c)}
                  className="deva grid size-12 place-items-center rounded-sm border border-border/60 text-lg text-lotus transition-colors hover:border-lotus/60 hover:bg-lotus/10"
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative mt-10 h-32 overflow-hidden rounded-sm border border-border/60">
              {letter ? <MantraWave hue={88} lines={4} amplitude={1.2} /> : null}
              <div className="absolute inset-0 grid place-items-center">
                <p className="deva text-4xl text-gold">{letter ?? "अ"}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Select a letter to see it as a wave. Sound here is visualised as a metaphor for
              articulation, not as a measurement of any acoustic property.
            </p>
          </div>
        </div>
      </Environment>

      <div className="px-6 pb-20 text-center">
        <Link
          to="/philosophy"
          className="rounded-full border border-gold/40 px-7 py-3 text-xs tracking-[0.2em] uppercase hover:bg-gold/10"
        >
          Continue: Kuṇḍalinī, chakras & philosophy
        </Link>
      </div>
    </>
  );
}
