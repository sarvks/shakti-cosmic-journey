import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { CosmicParticles } from "@/components/cosmic/CosmicParticles";
import { Environment, Note, Prose, Reveal, Title } from "@/components/cosmic/ui";
import { goddesses } from "@/data/goddesses";

export const Route = createFileRoute("/goddesses")({
  head: () => ({
    meta: [
      { title: "The Goddess Atlas — Devī, Durgā, Kālī, Tripurasundarī & More" },
      {
        name: "description",
        content:
          "An interactive constellation of Śākta goddesses: Mahādevī, Durgā, Kālī, Tripurasundarī, Bhuvaneśvarī, Tārā, Chinnamastā and others, each with devotional, philosophical and historical readings.",
      },
      { property: "og:title", content: "The Goddess Atlas — One Śakti, Many Forms" },
      {
        property: "og:description",
        content: "Fifteen luminous paths through the Śākta goddess traditions.",
      },
    ],
  }),
  component: GoddessAtlas,
});

function GoddessAtlas() {
  return (
    <Environment gradient="var(--grad-void)" className="py-24">
      <CosmicParticles mode="field" hue={330} count={480} />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal>
          <Title
            deva="एका शक्तिः अनेकरूपा"
            title="One Śakti — Many Forms"
            sub="The Goddess Atlas"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-2xl">
            <Prose>
              <p>
                The central light divides into paths, and each path becomes a Goddess. Follow any
                one of them: each portal opens into its own environment, with the same figure read
                three ways — devotionally, philosophically and historically.
              </p>
            </Prose>
            <div className="mt-6">
              <Note kind="tradition">
                <p>
                  No Śākta school organises these figures identically. Some treat every goddess as a
                  face of one Mahādevī; others maintain distinct lineages, mantras and theologies for
                  each. Several of these goddesses also have long histories as independent regional
                  deities before any pan-Indian synthesis.
                </p>
              </Note>
            </div>
          </div>
        </Reveal>

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {goddesses.map((g, i) => (
            <motion.li
              key={g.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.7, delay: (i % 6) * 0.06 }}
            >
              <Link
                to="/goddesses/$slug"
                params={{ slug: g.slug }}
                className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-border/70 p-6 transition-colors hover:border-gold/60"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 opacity-25 transition-opacity duration-700 group-hover:opacity-60"
                  style={{ background: g.gradient }}
                />
                <span
                  aria-hidden
                  className="absolute -right-10 -bottom-10 size-32 rounded-full border"
                  style={{ borderColor: g.accent, opacity: 0.25 }}
                />
                <span className="relative">
                  <span className="deva block text-xl" style={{ color: g.accent }}>
                    {g.deva}
                  </span>
                  <span className="font-display mt-2 block text-2xl">{g.name}</span>
                  <span className="mt-2 block text-sm text-muted-foreground">{g.epithet}</span>
                  <span className="eyebrow mt-6 block">Enter portal →</span>
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </Environment>
  );
}
