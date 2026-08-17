import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { CosmicParticles } from "@/components/cosmic/CosmicParticles";
import { Environment, Note, Prose, Reveal, Title } from "@/components/cosmic/ui";
import { useShakti } from "@/lib/shakti-context";

export const Route = createFileRoute("/dissolution")({
  head: () => ({
    meta: [
      { title: "Cosmic Dissolution — Saṃhāra and the Return to Stillness" },
      {
        name: "description",
        content:
          "The closing movement of ŚAKTI: form dissolving back into the bindu, dissolution as a phase rather than an end, and where to continue reading.",
      },
      { property: "og:title", content: "Cosmic Dissolution — Return to the Bindu" },
      {
        property: "og:description",
        content:
          "Everything that appeared withdraws. The point remains. An ending that is also a beginning.",
      },
    ],
  }),
  component: Dissolution,
});

const stages = [
  { deva: "जगत्", label: "World", text: "Names, places, festivals, temples — the visible order." },
  { deva: "रूप", label: "Form", text: "Images and iconography loosen; the many faces recede." },
  { deva: "नाद", label: "Sound", text: "Speech thins into vibration, vibration into pulse." },
  { deva: "शक्ति", label: "Power", text: "Only movement remains, without anything yet moved." },
  { deva: "बिन्दु", label: "Bindu", text: "The point. Undivided, unlocated, unspent." },
];

function Dissolution() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { reducedMotion } = useShakti();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 0.85, 1], [1.6, 0.25, 0.06]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [0.55, 0.9, 1]);
  const veil = useTransform(scrollYProgress, [0, 1], [0, 0.85]);

  return (
    <>
      <div ref={ref} className="relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div aria-hidden className="absolute inset-0" style={{ background: "var(--grad-void)" }} />
          <CosmicParticles mode="dissolve" hue={40} count={520} />
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-background"
            style={{ opacity: reducedMotion ? 0.4 : veil }}
          />
          <div className="absolute inset-0 grid place-items-center">
            <motion.span
              aria-hidden
              className="block size-40 rounded-full"
              style={{
                scale: reducedMotion ? 0.4 : scale,
                opacity: reducedMotion ? 0.9 : opacity,
                background:
                  "radial-gradient(circle, oklch(0.98 0.02 88) 0%, oklch(0.83 0.11 88 / 0.5) 40%, transparent 70%)",
              }}
            />
          </div>
          <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.24em] text-muted-foreground uppercase">
            Scroll — everything withdraws
          </p>
        </div>

        <div className="relative z-10 mx-auto max-w-2xl px-6 pb-24">
          {stages.map((s, i) => (
            <section key={s.label} className="flex min-h-[70vh] flex-col justify-center">
              <Reveal delay={i * 0.03}>
                <p className="deva text-3xl text-lotus/90">{s.deva}</p>
                <h2 className="font-display mt-3 text-4xl md:text-5xl">{s.label}</h2>
                <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </Reveal>
            </section>
          ))}
        </div>
      </div>

      <Environment gradient="var(--grad-void)" className="py-28" minHeight="min-h-0">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <Title
              deva="संहार"
              title="Dissolution Is Not the End"
              sub="Saṃhāra — withdrawal, not annihilation"
            />
          </Reveal>
          <div className="mx-auto mt-10 max-w-xl text-left">
            <Prose>
              <p>
                In most Śākta cosmologies the world is withdrawn rather than destroyed. What was
                projected is reabsorbed into the power that projected it, and the same power will
                project again. Stillness is a phase of the pulse.
              </p>
              <p>
                Traditions disagree about the details — whether dissolution is total or partial,
                whether it is willed or automatic, whether the liberated remain distinct or not — and
                these disagreements have been argued for centuries without resolution.
              </p>
            </Prose>
            <div className="mt-8">
              <Note kind="tradition">
                <p>
                  This site is an educational introduction assembled from published scholarship and
                  from traditions' own accounts of themselves. It is not a religious authority, it
                  offers no initiation or practice instruction, and where traditions conflict it aims
                  to show the conflict rather than resolve it.
                </p>
              </Note>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {[
              { to: "/", label: "Return to the bindu" },
              { to: "/goddesses", label: "The Goddess Atlas" },
              { to: "/texts", label: "The text library" },
              { to: "/sacred-places", label: "Sacred geography" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-full border border-gold/40 px-6 py-3 text-[11px] tracking-[0.2em] uppercase transition-colors hover:bg-gold/10"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </Environment>
    </>
  );
}
