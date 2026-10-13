import SectionHeading from './ui/SectionHeading'

export default function Education({ education }) {
  const entries = Array.isArray(education) ? education : education ? [education] : []
  if (!entries.length) return null

  return (
    <section id="education" className="section-shell border-t border-[var(--color-border)]">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation"
          description="Formal training in computer science and engineering."
        />
        <div className="space-y-4">
          {entries.map((entry) => (
            <div
              key={`${entry.degree}-${entry.institution}`}
              className="glass-panel rounded-2xl p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div>
                <h3 className="text-lg font-semibold text-white">{entry.degree}</h3>
                <p className="text-[var(--color-accent)] mt-1">{entry.institution}</p>
                {entry.location && (
                  <p className="text-sm text-[var(--color-muted)] mt-1">{entry.location}</p>
                )}
              </div>
              <div className="md:text-right">
                <p className="text-xs font-mono text-[var(--color-muted)]">{entry.period}</p>
                {(entry.cgpa || entry.gpa) && (
                  <p className="mt-2 text-sm text-[#d0d0d8]">
                    CGPA{' '}
                    <span className="font-mono text-[var(--color-teal)]">{entry.cgpa || entry.gpa}</span>
                    {entry.note && <span className="text-[var(--color-muted)]"> ({entry.note})</span>}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
