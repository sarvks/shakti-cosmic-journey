import { useEffect, useRef } from "react";
import { useShakti } from "@/lib/shakti-context";

/** Decorative animated sound-field. Text equivalents live beside it in the DOM. */
export function MantraWave({
  hue = 88,
  lines = 5,
  amplitude = 1,
  className,
}: {
  hue?: number;
  lines?: number;
  amplitude?: number;
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const { reducedMotion } = useShakti();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let t = 0;

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const draw = () => {
      t += 0.012;
      ctx.clearRect(0, 0, w, h);
      for (let l = 0; l < lines; l++) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = `oklch(0.82 0.13 ${hue + l * 6} / ${0.5 - l * 0.06})`;
        for (let x = 0; x <= w; x += 3) {
          const k = x / w;
          const env = Math.sin(Math.PI * k);
          const y =
            h / 2 +
            env *
              amplitude *
              (h / 5) *
              (Math.sin(k * (6 + l * 2) * Math.PI + t * (1 + l * 0.35)) * 0.6 +
                Math.sin(k * (13 + l) * Math.PI - t * 1.7) * 0.4);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      if (!reducedMotion) raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [amplitude, hue, lines, reducedMotion]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={className ?? "pointer-events-none absolute inset-0 h-full w-full"}
    />
  );
}
