import { useMemo } from "react";

export type YantraLayer =
  | "bhupura"
  | "outerLotus"
  | "innerLotus"
  | "fourteen"
  | "outerTen"
  | "innerTen"
  | "eight"
  | "trikona"
  | "bindu";

export const yantraLayers: {
  id: YantraLayer;
  name: string;
  deva: string;
  gloss: string;
  detail: string;
}[] = [
  {
    id: "bhupura",
    name: "Bhūpura",
    deva: "भूपुर",
    gloss: "The three-lined square earth-city with four gates.",
    detail:
      "The threshold. Ritually the outer enclosure where the worshipper enters; conceptually the boundary of the manifest field.",
  },
  {
    id: "outerLotus",
    name: "Sixteen-petalled lotus",
    deva: "षोडशदल",
    gloss: "Sarvāśāparipūraka — fulfiller of all wishes.",
    detail: "Associated in ritual with sixteen powers of attraction and with the sixteen vowels of Sanskrit.",
  },
  {
    id: "innerLotus",
    name: "Eight-petalled lotus",
    deva: "अष्टदल",
    gloss: "Sarvasaṃkṣobhaṇa — the agitator of all.",
    detail: "The stirring that precedes coherence; eight powers of speech and sense.",
  },
  {
    id: "fourteen",
    name: "Fourteen triangles",
    deva: "चतुर्दशार",
    gloss: "Sarvasaubhāgyadāyaka — giver of all good fortune.",
    detail: "The first triangular enclosure; the field begins to organise into directional forces.",
  },
  {
    id: "outerTen",
    name: "Outer ten triangles",
    deva: "बहिर्दशार",
    gloss: "Sarvārthasādhaka — accomplisher of all aims.",
    detail: "Ten yoginīs; in interior reading, ten vital currents.",
  },
  {
    id: "innerTen",
    name: "Inner ten triangles",
    deva: "अन्तर्दशार",
    gloss: "Sarvarakṣākara — giver of all protection.",
    detail: "The tightening of the field as the centre approaches.",
  },
  {
    id: "eight",
    name: "Eight triangles",
    deva: "अष्टार",
    gloss: "Sarvarogahara — remover of all affliction.",
    detail: "Close to the centre; the eight are described as the Goddess's intimate powers.",
  },
  {
    id: "trikona",
    name: "Central triangle",
    deva: "त्रिकोण",
    gloss: "Sarvasiddhiprada — giver of all attainment.",
    detail:
      "The downward triangle read as the Goddess's own yoni-maṇḍala: knower, knowing and known held as one.",
  },
  {
    id: "bindu",
    name: "Bindu",
    deva: "बिन्दु",
    gloss: "Sarvānandamaya — wholly of bliss.",
    detail:
      "The dimensionless point. Śrīvidyā treats it as the Goddess herself, prior to extension: not small, but without magnitude.",
  },
];

type Props = {
  size?: number;
  active?: YantraLayer | null;
  onSelect?: (l: YantraLayer) => void;
  depth?: number;
  spin?: boolean;
  className?: string;
};

function lotus(cx: number, cy: number, r: number, petals: number) {
  const paths: string[] = [];
  const step = (Math.PI * 2) / petals;
  for (let i = 0; i < petals; i++) {
    const a = i * step - Math.PI / 2;
    const x1 = cx + Math.cos(a) * r;
    const y1 = cy + Math.sin(a) * r;
    const x2 = cx + Math.cos(a + step) * r;
    const y2 = cy + Math.sin(a + step) * r;
    const mx = cx + Math.cos(a + step / 2) * r * 1.3;
    const my = cy + Math.sin(a + step / 2) * r * 1.3;
    paths.push(`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`);
  }
  return paths;
}

function ring(cx: number, cy: number, r: number, n: number, up: boolean, squash = 0.62) {
  const tri: string[] = [];
  const step = (Math.PI * 2) / n;
  for (let i = 0; i < n; i++) {
    const a = i * step - Math.PI / 2;
    const ax = cx + Math.cos(a) * r;
    const ay = cy + Math.sin(a) * r;
    const bx = cx + Math.cos(a + step) * r;
    const by = cy + Math.sin(a + step) * r;
    const inner = r * squash;
    const mid = a + step / 2;
    const px = cx + Math.cos(mid) * (up ? inner : r * 1.02);
    const py = cy + Math.sin(mid) * (up ? inner : r * 1.02);
    tri.push(`M ${ax} ${ay} L ${bx} ${by} L ${px} ${py} Z`);
  }
  return tri;
}

/**
 * Interactive Śrī Yantra rendered as layered SVG with CSS 3D depth so it can be
 * rotated and travelled into without a WebGL dependency. Geometry is a
 * stylised construction, not a ritually exact śilpa drawing.
 */
export function SriYantra({
  size = 620,
  active = null,
  onSelect,
  depth = 0,
  spin = true,
  className,
}: Props) {
  const c = size / 2;
  const layers = useMemo(
    () => [
      { id: "bhupura" as YantraLayer, z: -170, el: "square" as const, r: c * 0.96 },
      { id: "outerLotus" as YantraLayer, z: -140, el: "lotus" as const, r: c * 0.76, petals: 16 },
      { id: "innerLotus" as YantraLayer, z: -110, el: "lotus" as const, r: c * 0.6, petals: 8 },
      { id: "fourteen" as YantraLayer, z: -80, el: "ring" as const, r: c * 0.54, n: 14, up: true },
      { id: "outerTen" as YantraLayer, z: -55, el: "ring" as const, r: c * 0.44, n: 10, up: false },
      { id: "innerTen" as YantraLayer, z: -32, el: "ring" as const, r: c * 0.35, n: 10, up: true },
      { id: "eight" as YantraLayer, z: -14, el: "ring" as const, r: c * 0.26, n: 8, up: false },
      { id: "trikona" as YantraLayer, z: 0, el: "trikona" as const, r: c * 0.17 },
      { id: "bindu" as YantraLayer, z: 14, el: "bindu" as const, r: c * 0.02 },
    ],
    [c],
  );

  return (
    <div
      className={className}
      style={{ perspective: "1400px", width: size, height: size, maxWidth: "100%" }}
    >
      <div
        className={spin ? "animate-spin-slower" : undefined}
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(58deg) translateZ(${depth}px)`,
          width: "100%",
          height: "100%",
          transition: "transform 1.2s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {layers.map((l) => {
          const isActive = active === l.id;
          const stroke = isActive ? "var(--color-gold)" : "var(--color-lotus)";
          const op = active ? (isActive ? 1 : 0.28) : 0.7;
          return (
            <svg
              key={l.id}
              viewBox={`0 0 ${size} ${size}`}
              width="100%"
              height="100%"
              role={onSelect ? "button" : undefined}
              tabIndex={onSelect ? 0 : undefined}
              aria-label={onSelect ? yantraLayers.find((y) => y.id === l.id)?.name : undefined}
              onClick={() => onSelect?.(l.id)}
              onKeyDown={(e) => {
                if (onSelect && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  onSelect(l.id);
                }
              }}
              className="absolute inset-0 cursor-pointer"
              style={{
                transform: `translateZ(${l.z}px)`,
                opacity: op,
                transition: "opacity 0.5s ease",
                filter: isActive ? "drop-shadow(0 0 14px oklch(0.83 0.11 88 / 0.7))" : undefined,
              }}
            >
              <g fill="none" stroke={stroke} strokeWidth={isActive ? 1.8 : 1}>
                {l.el === "square" && (
                  <>
                    {[0, 10, 20].map((pad) => (
                      <rect
                        key={pad}
                        x={c - l.r + pad}
                        y={c - l.r + pad}
                        width={(l.r - pad) * 2}
                        height={(l.r - pad) * 2}
                      />
                    ))}
                    {[
                      [c, c - l.r],
                      [c, c + l.r],
                      [c - l.r, c],
                      [c + l.r, c],
                    ].map(([x, y], i) => (
                      <circle key={i} cx={x} cy={y} r={7} />
                    ))}
                  </>
                )}
                {l.el === "lotus" && (
                  <>
                    <circle cx={c} cy={c} r={l.r} />
                    {lotus(c, c, l.r, l.petals!).map((d, i) => (
                      <path key={i} d={d} />
                    ))}
                  </>
                )}
                {l.el === "ring" &&
                  ring(c, c, l.r, l.n!, l.up!).map((d, i) => <path key={i} d={d} />)}
                {l.el === "trikona" && (
                  <>
                    <path
                      d={`M ${c - l.r} ${c - l.r * 0.8} L ${c + l.r} ${c - l.r * 0.8} L ${c} ${c + l.r} Z`}
                    />
                    <circle cx={c} cy={c - l.r * 0.05} r={l.r * 0.42} />
                  </>
                )}
                {l.el === "bindu" && (
                  <circle cx={c} cy={c} r={Math.max(3, l.r)} fill="var(--color-gold)" stroke="none" />
                )}
              </g>
            </svg>
          );
        })}
      </div>
    </div>
  );
}
