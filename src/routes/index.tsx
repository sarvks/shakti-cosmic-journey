import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { CosmicParticles } from "@/components/cosmic/CosmicParticles";
import { useShakti } from "@/lib/shakti-context";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ŚAKTI — The Power Through Which the Universe Becomes" },
      {
        name: "description",
        content:
          "Begin in darkness. A point of light becomes space, matter, life, mind and consciousness — an immersive introduction to Śakti and the Śākta traditions.",
      },
      { property: "og:title", content: "ŚAKTI — The Power Through Which the Universe Becomes" },
      {
        property: "og:description",
        content: "An animated, scholarly journey into the living cosmology of Śakti.",
      },
    ],
  }),
  component: Opening,
});

const layers = [
  { label: "Space", deva: "आकाश" },
  { label: "Light", deva: "ज्योतिः" },
  { label: "Matter", deva: "भूत" },
  { label: "Life", deva: "प्राण" },
  { label: "Mind", deva: "मनस्" },
  { label: "Consciousness", deva: "चित्" },
];

function Opening() {
  const { reducedMotion } = useShakti();
  const [step, setStep] = useState(reducedMotion ? 9 : 0);

  useEffect(() => {
    if (reducedMotion) {
      setStep(9);
      return;
    }
    const marks = [1400, 3200, 5200, 6600, 7800, 9000, 10200, 11400, 12600];
    const timers = marks.map((ms, i) => window.setTimeout(() => setStep(i + 1), ms));
    return () => timers.forEach(clearTimeout);
  }, [reducedMotion]);

  const skip = () => setStep(9);

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ background: step >= 3 ? "var(--grad-void)" : "var(--color-void)" }}
    >
      {step >= 3 && <CosmicParticles mode="field" hue={70} count={520} />}

      {/* the pulsing bindu */}
      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{
            opacity: step === 0 ? 0.9 : step >= 8 ? 0.5 : 0.8,
            scale: step >= 3 ? 1.4 : 1,
          }}
          transition={{ duration: 3 }}
          className={reducedMotion ? "size-2 rounded-full bg-gold" : "animate-breathe size-2 rounded-full bg-gold"}
          style={{ boxShadow: "0 0 90px 18px oklch(0.83 0.11 88 / 0.35)" }}
        />
      </div>

      {/* expanding rings — each pulse a layer of reality */}
      {step >= 3 &&
        layers.map((l, i) => (
          <motion.div
            key={l.label}
            aria-hidden
            initial={{ opacity: 0, scale: 0.05 }}
            animate={{ opacity: [0, 0.45, 0.12], scale: 1 + i * 0.55 }}
            transition={{ duration: 6, delay: i * 0.7, repeat: Infinity, repeatDelay: 2 }}
            className="pointer-events-none absolute top-1/2 left-1/2 aspect-square w-[46vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/25"
          />
        ))}

      <div className="relative z-10 grid min-h-screen place-items-center px-6">
        <div className="text-center">
          <AnimatePresence>
            {step >= 1 && (
              <motion.p
                key="deva"
                initial={{ opacity: 0, filter: "blur(20px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 2.6 }}
                className="deva text-6xl text-gold md:text-8xl"
              >
                शक्ति
              </motion.p>
            )}
          </AnimatePresence>

          {step >= 2 && (
            <motion.h1
              initial={{ opacity: 0, letterSpacing: "0.8em" }}
              animate={{ opacity: 1, letterSpacing: "0.42em" }}
              transition={{ duration: 3 }}
              className="font-display mt-8 text-4xl font-light tracking-[0.42em] md:text-6xl"
            >
              ŚAKTI
            </motion.h1>
          )}

          {step >= 4 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.4 }}
              className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              The Power Through Which the Universe Becomes
            </motion.p>
          )}

          {step >= 5 && (
            <ul className="mt-14 flex flex-wrap justify-center gap-x-6 gap-y-3">
              {layers.map((l, i) => (
                <motion.li
                  key={l.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: step >= 5 + Math.floor(i / 2) ? 1 : 0, y: 0 }}
                  transition={{ duration: 1.6, delay: i * 0.35 }}
                  className="text-center"
                >
                  <span className="deva block text-sm text-lotus/80">{l.deva}</span>
                  <span className="eyebrow">{l.label}</span>
                </motion.li>
              ))}
            </ul>
          )}

          {step >= 8 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              className="mt-16 flex flex-col items-center gap-4"
            >
              <Link
                to="/shakti"
                className="group rounded-full border border-gold/50 px-8 py-4 text-sm tracking-[0.3em] uppercase transition-colors hover:bg-gold/10"
                style={{ boxShadow: "var(--glow-gold)" }}
              >
                Enter Śakti <span aria-hidden className="ml-2 inline-block">↓</span>
              </Link>
              <p className="max-w-md text-xs leading-relaxed text-muted-foreground/80">
                An educational project on the Śākta traditions. Sound is off by default; motion
                respects your system settings.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {step < 8 && (
        <button
          type="button"
          onClick={skip}
          className="eyebrow absolute right-5 bottom-6 z-20 rounded-full border border-border px-4 py-2 hover:text-foreground"
        >
          Skip opening
        </button>
      )}
    </div>
  );
}
