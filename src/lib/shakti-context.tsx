import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lens = "devotional" | "philosophical" | "historical";
export type Profile = "cinematic" | "standard" | "lite";

type ShaktiState = {
  scholar: boolean;
  toggleScholar: () => void;
  devotional: boolean;
  toggleDevotional: () => void;
  meditation: boolean;
  toggleMeditation: () => void;
  sound: boolean;
  toggleSound: () => void;
  reducedMotion: boolean;
  profile: Profile;
  /** Particle multiplier derived from the render profile. */
  density: number;
};

const ShaktiContext = createContext<ShaktiState | null>(null);

function detectProfile(): Profile {
  if (typeof window === "undefined") return "standard";
  const cores = navigator.hardwareConcurrency ?? 4;
  const narrow = window.matchMedia("(max-width: 768px)").matches;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  if (narrow || coarse || cores <= 4) return "lite";
  if (cores >= 8 && window.devicePixelRatio <= 2.5) return "cinematic";
  return "standard";
}

export function ShaktiProvider({ children }: { children: ReactNode }) {
  const [scholar, setScholar] = useState(false);
  const [devotional, setDevotional] = useState(false);
  const [meditation, setMeditation] = useState(false);
  const [sound, setSound] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [profile, setProfile] = useState<Profile>("standard");

  useEffect(() => {
    setProfile(detectProfile());
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggleScholar = useCallback(() => {
    setScholar((s) => !s);
    setDevotional(false);
  }, []);
  const toggleDevotional = useCallback(() => {
    setDevotional((d) => !d);
    setScholar(false);
  }, []);
  const toggleMeditation = useCallback(() => setMeditation((m) => !m), []);
  const toggleSound = useCallback(() => setSound((s) => !s), []);

  const density = reducedMotion
    ? 0
    : profile === "cinematic"
      ? 1
      : profile === "standard"
        ? 0.55
        : 0.28;

  const value = useMemo(
    () => ({
      scholar,
      toggleScholar,
      devotional,
      toggleDevotional,
      meditation,
      toggleMeditation,
      sound,
      toggleSound,
      reducedMotion,
      profile,
      density,
    }),
    [
      scholar,
      devotional,
      meditation,
      sound,
      reducedMotion,
      profile,
      density,
      toggleScholar,
      toggleDevotional,
      toggleMeditation,
      toggleSound,
    ],
  );

  return <ShaktiContext.Provider value={value}>{children}</ShaktiContext.Provider>;
}

export function useShakti(): ShaktiState {
  const ctx = useContext(ShaktiContext);
  if (!ctx) {
    return {
      scholar: false,
      toggleScholar: () => {},
      devotional: false,
      toggleDevotional: () => {},
      meditation: false,
      toggleMeditation: () => {},
      sound: false,
      toggleSound: () => {},
      reducedMotion: false,
      profile: "standard",
      density: 0.55,
    };
  }
  return ctx;
}
