import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './ui/SectionHeading'

export default function Education({ education }) {
  const entries = Array.isArray(education) ? education : education ? [education] : []
  const [ref, visible] = useScrollReveal()

  if (!entries.length) return null

  return (
    <section id="education" className="section-shell border-t border-[var(--color-border)]">
      <div
        ref={ref}
        className={`section-inner reveal-base ${visible ? 'reveal-visible' : 'reveal-hidden'}`}
      >
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation"
          description="Formal training in computer science and engineering."
        />
        <div className="space-y-4">
          {entries.map((entry, index) => (
            <div
              key={`${entry.degree}-${entry.institution}`}
              className="glass-panel rounded-xl p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4 group hover:border-[var(--color-border-strong)] hover:shadow-[0_8px_32px_-16px_rgba(157,140,255,0.14)] transition-all duration-300 reveal-base"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: visible ? `${index * 80}ms` : '0ms',
              }}
            >
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-[var(--color-accent-fg)] transition-colors">
                  {entry.degree}
                </h3>
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
