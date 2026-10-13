import SectionHeading from './ui/SectionHeading'

export default function Research({ research }) {
  if (!research) return null

  return (
    <section id="research" className="section-shell border-t border-[var(--color-border)]">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Research"
          title="Thesis direction"
          description="Additional depth in machine learning and video understanding."
        />
        <article className="glass-panel rounded-2xl p-6 md:p-8">
          <h3 className="font-display text-xl md:text-2xl text-white leading-snug">{research.title}</h3>
          <p className="text-[var(--color-muted)] mt-4 leading-relaxed">{research.description}</p>
          {research.highlights?.length > 0 && (
            <ul className="mt-6 space-y-2.5">
              {research.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm text-[#c8c8d0] leading-relaxed">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-teal)]" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
          {research.domain?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-[var(--color-border)]">
              {research.domain.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full border border-[var(--color-border)] text-xs text-[var(--color-muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </article>
      </div>
    </section>
  )
}
