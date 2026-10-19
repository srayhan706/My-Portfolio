import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './ui/SectionHeading'
import { ArrowUpRight, Close } from './ui/Icons'

const GROUPS = [
  { key: ['backend', 'frameworks'], title: 'Backend Development', blurb: 'REST APIs, secure auth and modular service architecture.' },
  { key: ['frontend'], title: 'Frontend & Web', blurb: 'Responsive, accessible interfaces wired to real APIs.' },
  { key: ['devops', 'platforms'], title: 'DevOps & Deployment', blurb: 'Containerised services shipped to Linux VPS with CI/CD.' },
  { key: ['programming_languages', 'languages'], title: 'Languages', blurb: 'The languages I reach for, from systems to scripting.' },
  { key: ['databases'], title: 'Databases', blurb: 'Relational schema design, queries and migrations.' },
  { key: ['scripting_automation'], title: 'Scripting & Automation', blurb: 'Bash and Perl tooling that removes repetitive work.' },
  { key: ['tools'], title: 'Tools', blurb: 'Version control, collaboration and documentation.' },
  { key: ['libraries_ml', 'concepts'], title: 'Libraries & ML', blurb: 'Machine learning and research tooling.' },
]

function Row({ group, index, active, onActivate, visible }) {
  const open = active === index

  return (
    <li
      className={`reveal-left border-b border-[var(--color-line)] ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <button
        type="button"
        aria-expanded={open}
        onMouseEnter={() => onActivate(index)}
        onFocus={() => onActivate(index)}
        onClick={() => onActivate(open ? null : index)}
        className={`relative grid w-full grid-cols-[1fr_auto] items-center gap-4 rounded-xl px-4 text-left transition-all duration-500 ease-out-expo md:px-6 ${
          open ? 'my-2 bg-[#4a4a4a] py-8 text-white md:py-10' : 'py-6 md:py-8'
        }`}
      >
        <span>
          <span className="block text-2xl sm:text-4xl md:text-5xl font-semibold uppercase tracking-tight">
            {group.title}
          </span>
          <span
            className={`grid transition-all duration-500 ease-out-expo ${
              open ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <span className="overflow-hidden">
              <span className="block max-w-md text-sm md:text-[15px] text-white/75">{group.blurb}</span>
              {/* inline chips on small screens */}
              <span className="mt-4 flex flex-wrap gap-1.5 md:hidden">
                {group.items.map((s) => (
                  <span key={s} className="rounded-full bg-white/10 px-3 py-1 text-xs">
                    {s}
                  </span>
                ))}
              </span>
            </span>
          </span>
        </span>
        <span className="relative h-7 w-7">
          <ArrowUpRight
            size={28}
            className={`absolute inset-0 transition-all duration-500 ${open ? 'scale-50 opacity-0 rotate-45' : ''}`}
          />
          <Close
            size={28}
            className={`absolute inset-0 transition-all duration-500 ${open ? '' : 'scale-50 opacity-0 -rotate-45'}`}
          />
        </span>

        {/* floating tilted card, like the preview in the design */}
        <span
          aria-hidden
          className={`pointer-events-none absolute right-[14%] top-1/2 z-10 hidden w-72 rounded-xl bg-white p-4 text-[var(--color-ink)] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] transition-all duration-600 ease-out-expo md:block ${
            open ? '-translate-y-1/2 rotate-[6deg] scale-100 opacity-100' : '-translate-y-[30%] rotate-0 scale-75 opacity-0'
          }`}
        >
          <span className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[var(--color-faint)]">
            <span>{String(index + 1).padStart(2, '0')} / stack</span>
            <span>{group.items.length} items</span>
          </span>
          <span className="flex flex-wrap gap-1.5">
            {group.items.map((s) => (
              <span key={s} className="rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] px-2.5 py-1 text-xs font-semibold">
                {s}
              </span>
            ))}
          </span>
        </span>
      </button>
    </li>
  )
}

export default function Skills({ skills }) {
  const [active, setActive] = useState(null)
  const [ref, visible] = useScrollReveal({ threshold: 0.05 })

  if (!skills) return null

  const groups = GROUPS.map((g) => ({ ...g, items: g.key.map((k) => skills[k]).find((v) => v?.length) })).filter(
    (g) => g.items?.length,
  )

  return (
    <section id="stack" className="section-shell bg-[var(--color-paper)]">
      <div className="section-inner">
        <SectionHeading title="Stack" watermark="Skills" aside="What I build with" />
        <ul ref={ref} className="border-t border-[var(--color-line)]" onMouseLeave={() => setActive(null)}>
          {groups.map((g, i) => (
            <Row key={g.title} group={g} index={i} active={active} onActivate={setActive} visible={visible} />
          ))}
        </ul>
      </div>
    </section>
  )
}
