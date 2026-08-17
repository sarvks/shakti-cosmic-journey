import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useShakti } from "@/lib/shakti-context";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/shakti", label: "Śakti" },
  { to: "/goddesses", label: "Goddesses" },
  { to: "/mahavidyas", label: "Mahāvidyās" },
  { to: "/sri-chakra", label: "Śrī Chakra" },
  { to: "/tantra", label: "Tantra" },
  { to: "/philosophy", label: "Philosophy" },
  { to: "/texts", label: "Texts" },
  { to: "/sacred-places", label: "Sacred Places" },
] as const;

const mandalaNodes = [
  { to: "/shakti", label: "Śakti", deva: "शक्ति" },
  { to: "/goddesses", label: "Devī", deva: "देवी" },
  { to: "/mahavidyas", label: "Mahāvidyās", deva: "महाविद्या" },
  { to: "/sri-chakra", label: "Śrī Chakra", deva: "श्रीचक्र" },
  { to: "/tantra", label: "Tantra", deva: "तन्त्र" },
  { to: "/tantra", label: "Mantra", deva: "मन्त्र" },
  { to: "/philosophy", label: "Philosophy", deva: "दर्शन" },
  { to: "/philosophy", label: "Kuṇḍalinī", deva: "कुण्डलिनी" },
  { to: "/texts", label: "Texts", deva: "ग्रन्थ" },
  { to: "/sacred-places", label: "Geography", deva: "पीठ" },
  { to: "/dissolution", label: "Dissolution", deva: "संहार" },
] as const;

function ToggleChip({
  on,
  onClick,
  children,
}: {
  on: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className={cn(
        "rounded-full border px-3 py-1.5 text-[11px] tracking-[0.18em] uppercase transition-colors",
        on
          ? "border-gold/60 bg-gold/15 text-gold"
          : "border-border text-muted-foreground hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}

/** Ambient drone: synthesised, opt-in, never autoplayed. */
function useDrone(enabled: boolean) {
  const ref = useRef<{ ctx: AudioContext; gain: GainNode } | null>(null);
  useEffect(() => {
    if (!enabled) {
      const cur = ref.current;
      if (cur) {
        cur.gain.gain.linearRampToValueAtTime(0, cur.ctx.currentTime + 1.2);
        window.setTimeout(() => void cur.ctx.close().catch(() => {}), 1400);
        ref.current = null;
      }
      return;
    }
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    const gain = ctx.createGain();
    gain.gain.value = 0;
    gain.connect(ctx.destination);
    [110, 165, 220.5, 330].forEach((f, i) => {
      const osc = ctx.createOscillator();
      osc.type = i % 2 ? "sine" : "triangle";
      osc.frequency.value = f;
      const g = ctx.createGain();
      g.gain.value = 0.12 / (i + 1);
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.05 + i * 0.03;
      const lg = ctx.createGain();
      lg.gain.value = 0.05;
      lfo.connect(lg).connect(g.gain);
      osc.connect(g).connect(gain);
      osc.start();
      lfo.start();
    });
    gain.gain.linearRampToValueAtTime(0.16, ctx.currentTime + 3);
    ref.current = { ctx, gain };
    return () => {
      void ctx.close().catch(() => {});
      ref.current = null;
    };
  }, [enabled]);
}

export function Chrome({ children }: { children: ReactNode }) {
  const {
    scholar,
    toggleScholar,
    devotional,
    toggleDevotional,
    meditation,
    toggleMeditation,
    sound,
    toggleSound,
  } = useShakti();
  const [mandala, setMandala] = useState(false);
  const [menu, setMenu] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onOpening = pathname === "/";
  useDrone(sound);

  useEffect(() => {
    setMandala(false);
    setMenu(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMandala(false);
        setMenu(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const hideChrome = onOpening || meditation;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-100 focus:rounded focus:bg-card focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      <AnimatePresence>
        {!hideChrome && (
          <motion.header
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.7 }}
            className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl"
          >
            <div className="mx-auto flex max-w-[1400px] items-center gap-4 px-4 py-3 md:px-8">
              <Link to="/" className="group flex items-baseline gap-2">
                <span className="deva text-lg text-gold">शक्ति</span>
                <span className="font-display text-sm tracking-[0.36em] uppercase">Śakti</span>
              </Link>

              <nav aria-label="Primary" className="ml-auto hidden items-center gap-5 lg:flex">
                {nav.map((n) => (
                  <Link
                    key={n.label}
                    to={n.to}
                    className="text-[12px] tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-foreground"
                    activeProps={{ className: "text-gold" }}
                  >
                    {n.label}
                  </Link>
                ))}
              </nav>

              <div className="ml-auto flex items-center gap-2 lg:ml-4">
                <button
                  type="button"
                  onClick={() => setMandala((m) => !m)}
                  aria-label="Open the Śakti Mandala navigator"
                  aria-expanded={mandala}
                  className="grid size-11 place-items-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold/10"
                >
                  <span aria-hidden className="text-base">
                    ◉
                  </span>
                </button>
                <div className="hidden items-center gap-2 md:flex">
                  <ToggleChip on={scholar} onClick={toggleScholar}>
                    Scholar
                  </ToggleChip>
                  <ToggleChip on={devotional} onClick={toggleDevotional}>
                    Devotional
                  </ToggleChip>
                  <ToggleChip on={meditation} onClick={toggleMeditation}>
                    Meditate
                  </ToggleChip>
                  <ToggleChip on={sound} onClick={toggleSound}>
                    {sound ? "Sound ♫" : "Sound ○"}
                  </ToggleChip>
                </div>
                <button
                  type="button"
                  onClick={() => setMenu((m) => !m)}
                  aria-label="Open menu"
                  aria-expanded={menu}
                  className="grid size-11 place-items-center rounded-full border border-border lg:hidden"
                >
                  <span aria-hidden>{menu ? "×" : "≡"}</span>
                </button>
              </div>
            </div>

            <AnimatePresence>
              {menu && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden border-t border-border/60 lg:hidden"
                >
                  <nav aria-label="Mobile" className="grid grid-cols-2 gap-1 px-4 py-4">
                    {nav.map((n) => (
                      <Link
                        key={n.label}
                        to={n.to}
                        className="rounded px-2 py-3 text-sm text-muted-foreground"
                        activeProps={{ className: "text-gold" }}
                      >
                        {n.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="flex flex-wrap gap-2 px-4 pb-4 md:hidden">
                    <ToggleChip on={scholar} onClick={toggleScholar}>
                      Scholar
                    </ToggleChip>
                    <ToggleChip on={devotional} onClick={toggleDevotional}>
                      Devotional
                    </ToggleChip>
                    <ToggleChip on={meditation} onClick={toggleMeditation}>
                      Meditate
                    </ToggleChip>
                    <ToggleChip on={sound} onClick={toggleSound}>
                      Sound
                    </ToggleChip>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.header>
        )}
      </AnimatePresence>

      {meditation && (
        <div className="fixed inset-x-0 bottom-0 z-50 flex flex-col items-center gap-3 pb-6">
          <div
            aria-hidden
            className="animate-breathe size-3 rounded-full bg-gold"
            style={{ boxShadow: "var(--glow-gold)" }}
          />
          <button
            type="button"
            onClick={toggleMeditation}
            className="eyebrow rounded-full border border-border px-4 py-2 hover:text-foreground"
          >
            Leave meditation
          </button>
        </div>
      )}

      <AnimatePresence>
        {mandala && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 grid place-items-center bg-background/95 backdrop-blur-2xl"
            role="dialog"
            aria-label="Śakti Mandala navigator"
          >
            <button
              type="button"
              onClick={() => setMandala(false)}
              aria-label="Close navigator"
              className="absolute top-4 right-4 grid size-11 place-items-center rounded-full border border-border"
            >
              ×
            </button>
            <div className="relative aspect-square w-[min(88vw,620px)]">
              <div
                aria-hidden
                className="animate-spin-slow absolute inset-0 rounded-full border border-gold/20"
              />
              <div
                aria-hidden
                className="absolute inset-[12%] rounded-full border border-lotus/20"
              />
              <div className="absolute inset-0 grid place-items-center text-center">
                <div>
                  <p className="deva text-3xl text-gold">शक्ति</p>
                  <p className="eyebrow mt-2">Śakti</p>
                </div>
              </div>
              {mandalaNodes.map((n, i) => {
                const a = (i / mandalaNodes.length) * Math.PI * 2 - Math.PI / 2;
                return (
                  <motion.div
                    key={n.label}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 * i, duration: 0.5 }}
                    className="absolute"
                    style={{
                      left: `${50 + Math.cos(a) * 41}%`,
                      top: `${50 + Math.sin(a) * 41}%`,
                      transform: "translate(-50%,-50%)",
                    }}
                  >
                    <Link
                      to={n.to}
                      className="block min-w-24 rounded-full border border-border/70 bg-card/70 px-3 py-2 text-center transition-colors hover:border-gold/60"
                    >
                      <span className="deva block text-xs text-lotus">{n.deva}</span>
                      <span className="block text-[11px] tracking-[0.14em] uppercase">
                        {n.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main id="main" className={hideChrome ? "" : "pt-16"}>
        {children}
      </main>

      {!hideChrome && (
        <footer className="border-t border-border/60 px-6 py-12 text-center md:px-10">
          <p className="deva text-xl text-gold/80">शक्ति</p>
          <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-muted-foreground">
            An independent educational project. Material here distinguishes scripture, theology,
            philosophy, ritual tradition, devotional interpretation and historical scholarship.
            Where traditions and scholars disagree, the disagreement is shown rather than resolved.
            Nothing here substitutes for qualified traditional instruction, and nothing here is
            medical advice.
          </p>
          <div className="mx-auto mt-6 flex max-w-xl flex-wrap justify-center gap-x-5 gap-y-2">
            {nav.map((n) => (
              <Link key={n.label} to={n.to} className="eyebrow hover:text-foreground">
                {n.label}
              </Link>
            ))}
            <Link to="/dissolution" className="eyebrow hover:text-foreground">
              Dissolution
            </Link>
          </div>
        </footer>
      )}
    </>
  );
}
