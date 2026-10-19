import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './ui/SectionHeading'

const asList = (v) => (Array.isArray(v) ? v : v ? [v] : [])

export default function Experience({ experience, education }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.05 })
  const [hover, setHover] = useState(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const rows = [
    ...asList(experience).map((e) => ({
      kind: 'Work',
      title: e.organization,
      subtitle: e.role,
      period: e.period,
      details: [e.location, ...(e.highlights ?? [])].filter(Boolean),
    })),
    ...asList(education).map((e) => ({
      kind: 'Education',
      title: e.institution,
      subtitle: e.degree,
      period: e.period,
      details: [e.location, (e.cgpa || e.gpa) && `CGPA ${e.cgpa || e.gpa}`].filter(Boolean),
    })),
  ]

  if (!rows.length) return null

  const years = rows.flatMap((r) => r.period?.match(/\d{4}/g) ?? []).map(Number)
  const since = years.length ? Math.min(...years) : null

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top })
  }

  const current = hover !== null ? rows[hover] : null

  return (
    <section id="experience" className="dark-section section-shell bg-[var(--color-ink-soft)] text-white">
      <div className="section-inner">
        <SectionHeading
          title="Experience"
          watermark="Experience"
          aside={since ? `Building software since ${since}` : undefined}
        />

        <div ref={ref} className="relative" onMouseMove={onMove} onMouseLeave={() => setHover(null)}>
          <ul>
            {rows.map((row, i) => (
              <li
                key={`${row.title}-${row.subtitle}`}
                onMouseEnter={() => setHover(i)}
                className={`reveal border-b border-[var(--color-line-dark)] ${visible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div
                  className={`flex flex-col gap-2 px-2 py-7 transition-all duration-500 ease-out-expo sm:flex-row sm:items-center sm:justify-between md:px-4 ${
                    hover !== null && hover !== i ? 'opacity-40' : ''
                  } ${hover === i ? 'md:translate-x-3' : ''}`}
                >
                  <div>
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">{row.kind}</p>
                    <h3 className="text-lg md:text-xl font-semibold">{row.title}</h3>
                    <p className="mt-1.5 text-[15px] md:text-base text-white/55">{row.subtitle}</p>
                  </div>
                  <p className="text-[15px] md:text-base text-white/55 sm:text-right">{row.period}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* cursor-following preview card */}
          <div
            aria-hidden
            className={`pointer-events-none absolute left-0 top-0 z-10 hidden w-64 transition-[opacity,scale] duration-500 ease-out-expo md:block ${
              current ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
            }`}
            style={{ translate: `${pos.x + 24}px ${pos.y - 90}px` }}
          >
            <div className="rotate-[6deg] rounded-xl bg-[#d9d9d9] p-4 text-[var(--color-ink)] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]">
              {current && (
                <>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-black/40">{current.kind}</p>
                  <p className="mt-2 text-base font-bold leading-snug">{current.subtitle}</p>
                  <ul className="mt-3 space-y-1.5">
                    {current.details.slice(0, 4).map((d) => (
                      <li key={d} className="flex gap-2 text-xs leading-relaxed text-black/65">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-black/50" />
                        <span className="line-clamp-2">{d}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
