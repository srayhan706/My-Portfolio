import SectionHeading from './ui/SectionHeading'

export default function Projects({ projects }) {
  if (!projects?.length) return null

  const [featured, ...rest] = projects

  return (
    <section id="projects" className="section-shell border-t border-[var(--color-border)]">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Projects"
          title="Proof of work"
          description="Selected builds that show backend depth, frontend polish, and real-world problem solving."
        />

        {featured && (
          <article className="glass-panel rounded-3xl p-6 md:p-8 mb-6 relative overflow-hidden group">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[var(--color-accent-soft)] blur-3xl"
              aria-hidden
            />
            <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-teal)] mb-3">
                  Featured project
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-white group-hover:text-[#f5ead4] transition-colors">
                  {featured.title}
                </h3>
                <p className="mt-3 text-[var(--color-muted)] leading-relaxed">{featured.description}</p>
                {featured.highlights?.length > 0 && (
                  <ul className="mt-5 space-y-2.5">
                    {featured.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm text-[#c8c8d0] leading-relaxed">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-teal)]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 mt-6">
                  {featured.tech?.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md border border-[var(--color-border)] bg-black/20 text-[11px] font-mono text-[var(--color-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {featured.github && (
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white/[0.04] px-5 py-3 text-sm font-medium text-white hover:border-[var(--color-accent)]/40 hover:text-[#f5ead4] transition"
                >
                  View repository
                </a>
              )}
            </div>
          </article>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          {rest.map((p, i) => (
            <article
              key={p.title}
              className="glass-panel rounded-2xl p-6 flex flex-col h-full hover:border-[var(--color-border-strong)] transition-colors"
            >
              <p className="text-[11px] font-mono text-[var(--color-muted)] mb-2">
                {String(i + 2).padStart(2, '0')}
              </p>
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="text-sm text-[var(--color-muted)] mt-2 leading-relaxed flex-1">{p.description}</p>
              {p.highlights?.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {p.highlights.slice(0, 2).map((highlight) => (
                    <li key={highlight} className="text-xs text-[#b8b8c2] leading-relaxed line-clamp-2">
                      · {highlight}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {p.tech?.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded border border-[var(--color-border)] text-[10px] font-mono text-[var(--color-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-[var(--color-accent)] hover:text-white transition-colors"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
