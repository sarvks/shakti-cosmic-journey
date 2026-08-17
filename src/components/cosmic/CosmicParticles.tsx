import { useEffect, useRef } from "react";
import { useShakti } from "@/lib/shakti-context";

type Mode = "field" | "converge" | "dissolve" | "wave" | "vertical";

type Props = {
  mode?: Mode;
  hue?: number;
  count?: number;
  className?: string;
  /** decorative by default; canvas is aria-hidden and content lives in the DOM */
  speed?: number;
};

/**
 * GPU-light canvas particle field. Purely decorative: aria-hidden, and it
 * renders a single static frame when the visitor prefers reduced motion.
 */
export function CosmicParticles({
  mode = "field",
  hue = 32,
  count = 420,
  className,
  speed = 1,
}: Props) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const { density, reducedMotion } = useShakti();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const n = Math.max(40, Math.round(count * (density || 0.3)));

    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number; p: number };
    let parts: P[] = [];

    const seed = () => {
      parts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.5 + 0.3,
        a: Math.random() * 0.6 + 0.15,
        p: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let t = 0;
    const draw = () => {
      t += 0.005 * speed;
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;

      for (const p of parts) {
        if (mode === "field") {
          p.x += p.vx * speed;
          p.y += p.vy * speed;
        } else if (mode === "converge") {
          p.x += (cx - p.x) * 0.0018 * speed + p.vx * 0.5;
          p.y += (cy - p.y) * 0.0018 * speed + p.vy * 0.5;
        } else if (mode === "dissolve") {
          const dx = p.x - cx;
          const dy = p.y - cy;
          p.x += dx * 0.0016 * speed;
          p.y += dy * 0.0016 * speed;
        } else if (mode === "wave") {
          p.x += 0.5 * speed;
          p.y += Math.sin(t * 2 + p.p + p.x * 0.01) * 0.6;
        } else {
          p.y -= 0.5 * speed;
          p.x += Math.sin(t * 3 + p.p) * 0.35;
        }

        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;

        const twinkle = 0.55 + 0.45 * Math.sin(t * 3 + p.p);
        ctx.beginPath();
        ctx.fillStyle = `oklch(0.85 0.12 ${hue} / ${(p.a * twinkle).toFixed(3)})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reducedMotion) raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [count, density, hue, mode, reducedMotion, speed]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={className ?? "pointer-events-none absolute inset-0 h-full w-full"}
    />
  );
}
