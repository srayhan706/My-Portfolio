import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './ui/SectionHeading'

export default function Skills({ skills }) {
  const [ref, visible] = useScrollReveal()

  if (!skills) return null

  const groups = [
    { title: 'Programming Languages', items: skills.programming_languages || skills.languages },
    { title: 'Scripting & Automation', items: skills.scripting_automation },
    { title: 'Frontend Development', items: skills.frontend },
    { title: 'Backend Development', items: skills.backend || skills.frameworks },
    { title: 'Databases', items: skills.databases },
    { title: 'DevOps & Deployment', items: skills.devops || skills.platforms },
    { title: 'Tools & Version Control', items: skills.tools },
    { title: 'Libraries & ML', items: skills.libraries_ml || skills.concepts },
  ].filter(({ items }) => items?.length)

  return (
    <section id="skills" className="section-shell border-t border-[var(--color-border)] bg-[var(--color-ink-elevated)]/40">
      <div
        ref={ref}
        className={`section-inner reveal-base ${visible ? 'reveal-visible' : 'reveal-hidden'}`}
      >
        <SectionHeading
          eyebrow="Skills"
          title="Technical toolkit"
          description="A quick scan of stacks I use day to day—grouped the way hiring teams evaluate fit."
        />
        <div className="grid sm:grid-cols-2 gap-4">
          {groups.map(({ title, items }, groupIndex) => (
            <div
              key={title}
              className="glass-panel rounded-xl p-5 md:p-6 hover:border-[var(--color-border-strong)] transition-all duration-300 reveal-base"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: visible ? `${groupIndex * 60}ms` : '0ms',
              }}
            >
              <h3 className="text-sm font-semibold text-white mb-4">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full border border-[var(--color-border)] bg-white/[0.02] text-xs text-[#d6d6de] hover:border-[var(--color-accent)]/40 hover:text-white hover:bg-[var(--color-accent-soft)] transition-all duration-200 cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
