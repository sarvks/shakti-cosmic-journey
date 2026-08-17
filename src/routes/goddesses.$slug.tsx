import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { CosmicParticles } from "@/components/cosmic/CosmicParticles";
import { MantraWave } from "@/components/cosmic/MantraWave";
import { SriYantra } from "@/components/cosmic/SriYantra";
import { Chip, Environment, Note, Prose, Reveal, ScholarOnly } from "@/components/cosmic/ui";
import { goddessBySlug, goddesses, type Goddess } from "@/data/goddesses";
import type { Lens } from "@/lib/shakti-context";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/goddesses/$slug")({
  loader: ({ params }) => {
    const goddess = goddessBySlug(params.slug);
    if (!goddess) throw notFound();
    return { goddess };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const g = loaderData.goddess;
    const description = `${g.name} (${g.deva}) — ${g.epithet}. Iconography, mythology, philosophical significance, texts, temples and historical development, read devotionally, philosophically and historically.`;
    return {
      meta: [
        { title: `${g.name} — ${g.epithet} | ŚAKTI` },
        { name: "description", content: description },
        { property: "og:title", content: `${g.name} — ${g.epithet}` },
        { property: "og:description", content: description },
      ],
    };
  },
  component: GoddessPortal,
  notFoundComponent: PortalNotFound,
});

function PortalNotFound() {
  return (
    <div className="grid min-h-[70vh] place-items-center px-6 text-center">
      <div>
        <p className="deva text-3xl text-gold">देवी</p>
        <h1 className="font-display mt-4 text-3xl">No portal by that name</h1>
        <Link to="/goddesses" className="eyebrow mt-6 inline-block hover:text-foreground">
          ← Return to the Goddess Atlas
        </Link>
      </div>
    </div>
  );
}

const lenses: { id: Lens; label: string }[] = [
  { id: "devotional", label: "Devotional" },
  { id: "philosophical", label: "Philosophical" },
  { id: "historical", label: "Historical" },
];

function lensText(g: Goddess, lens: Lens) {
  if (lens === "devotional") return g.devotional;
  if (lens === "philosophical") return g.philosophy;
  return g.history;
}

function GoddessPortal() {
  const { goddess: g } = Route.useLoaderData();
  const [lens, setLens] = useState<Lens>("philosophical");
  const hue =
    g.slug === "tara" ? 245 : g.slug === "kali" ? 18 : g.slug === "tripurasundari" ? 350 : 60;

  return (
    <>
      <Environment gradient={g.gradient} className="grid place-items-center py-28">
        {g.slug === "matangi" ? (
          <MantraWave hue={155} lines={6} />
        ) : (
          <CosmicParticles
            mode={g.slug === "kali" ? "dissolve" : g.slug === "tripurasundari" ? "converge" : "field"}
            hue={hue}
            count={520}
          />
        )}
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, filter: "blur(16px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 2 }}
            className="deva text-5xl md:text-7xl"
            style={{ color: g.accent }}
          >
            {g.deva}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.16em" }}
            transition={{ duration: 2.2 }}
            className="font-display mt-6 text-4xl tracking-[0.16em] uppercase md:text-6xl"
          >
            {g.name}
          </motion.h1>
          <p className="mt-5 text-sm tracking-[0.22em] text-muted-foreground uppercase">
            {g.epithet}
          </p>
          {g.slug === "tripurasundari" && <SriYantra size={360} className="mx-auto mt-14" />}
        </div>
      </Environment>

      <div className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <div
            role="group"
            aria-label="Reading lens"
            className="flex flex-wrap gap-2 border-b border-border/60 pb-6"
          >
            {lenses.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => setLens(l.id)}
                aria-pressed={lens === l.id}
                className={cn(
                  "rounded-full border px-4 py-2 text-[11px] tracking-[0.2em] uppercase transition-colors",
                  lens === l.id
                    ? "border-gold/60 bg-gold/15 text-gold"
                    : "border-border text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl">
                {lens === "devotional"
                  ? "As she is loved"
                  : lens === "philosophical"
                    ? "As she is thought"
                    : "As she is dated"}
              </h2>
              <Prose>
                <p className="mt-4">{lensText(g, lens)}</p>
              </Prose>
              {lens === "devotional" && (
                <div className="mt-6">
                  <Note kind="caution">
                    <p>
                      This lens presents how traditions speak of the Goddess from inside devotion.
                      Devotional claims are reported here as belief and practice, not as empirically
                      established fact.
                    </p>
                  </Note>
                </div>
              )}
            </Reveal>

            <Reveal delay={0.05}>
              <dl className="mt-12 space-y-8">
                {[
                  ["Meaning & etymology", g.etymology],
                  ["Iconography", g.iconography],
                  ["Associated mythology", g.mythology],
                  ["Mantra — context only", g.mantraNote],
                ].map(([term, def]) => (
                  <div key={term}>
                    <dt className="eyebrow">{term}</dt>
                    <dd className="mt-2 max-w-prose text-[15px] leading-relaxed text-muted-foreground">
                      {def}
                    </dd>
                  </div>
                ))}
              </dl>
              <ScholarOnly>
                <p>
                  Compare the treatment of {g.name} across the texts listed opposite: Purāṇic
                  hymnody, Tantric iconographic manuals and vernacular devotional corpora often
                  disagree about her attributes, her rank and her relation to the supreme Goddess.
                  Where dates are given anywhere on this site they are scholarly estimates, and
                  contested ranges are marked as such.
                </p>
              </ScholarOnly>
            </Reveal>
          </div>

          <aside className="space-y-8">
            {[
              ["Major texts", g.texts],
              ["Traditions", g.traditions],
              ["Temples & sacred geography", g.places],
              ["Symbols", g.symbols],
            ].map(([label, items]) => (
              <div key={label as string}>
                <p className="eyebrow">{label as string}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(items as string[]).map((it) => (
                    <Chip key={it}>{it}</Chip>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <p className="eyebrow">Related forms</p>
              <ul className="mt-3 space-y-2">
                {g.related.map((slug) => {
                  const r = goddessBySlug(slug);
                  if (!r) return null;
                  return (
                    <li key={slug}>
                      <Link
                        to="/goddesses/$slug"
                        params={{ slug }}
                        className="group flex items-baseline gap-3 text-sm text-muted-foreground hover:text-foreground"
                      >
                        <span className="deva text-lotus">{r.deva}</span>
                        <span>{r.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>

        <div className="hairline my-16" />

        <nav aria-label="Other portals" className="flex flex-wrap gap-2">
          {goddesses
            .filter((o) => o.slug !== g.slug)
            .map((o) => (
              <Link
                key={o.slug}
                to="/goddesses/$slug"
                params={{ slug: o.slug }}
                className="rounded-full border border-border px-4 py-2 text-xs text-muted-foreground hover:border-gold/50 hover:text-foreground"
              >
                {o.name}
              </Link>
            ))}
        </nav>
      </div>
    </>
  );
}
