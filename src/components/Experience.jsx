import SectionHeading from './ui/SectionHeading'

export default function Experience({ experience }) {
  const entries = Array.isArray(experience) ? experience : experience ? [experience] : []
  if (!entries.length) return null

  return (
    <section id="experience" className="section-shell border-t border-[var(--color-border)]">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Experience"
          title="Where I build professionally"
          description="Recent role and team context—so you can see how I work in production environments."
        />
        <div className="space-y-4">
          {entries.map((entry, index) => (
            <article
              key={`${entry.role}-${entry.organization}`}
              className="glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-teal)]/60"
                aria-hidden
              />
              <div className="pl-3 md:pl-4 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-muted)] mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-xl font-semibold text-white">{entry.role}</h3>
                  <p className="text-[var(--color-accent)] mt-1 font-medium">{entry.organization}</p>
                  {entry.location && (
                    <p className="text-sm text-[var(--color-muted)] mt-1">{entry.location}</p>
                  )}
                </div>
                <p className="shrink-0 inline-flex self-start rounded-full border border-[var(--color-border)] bg-white/[0.03] px-3 py-1.5 text-xs font-mono text-[var(--color-muted)]">
                  {entry.period}
                </p>
              </div>
              {entry.highlights?.length > 0 && (
                <ul className="mt-6 pl-3 md:pl-4 space-y-2.5">
                  {entry.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm text-[#c8c8d0] leading-relaxed">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
