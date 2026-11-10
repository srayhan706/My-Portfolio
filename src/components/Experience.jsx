import { asList } from '../utils/format'
import { Building, Graduation } from './ui/Icons'
import Section from './ui/Section'

function Entry({ entry, order }) {
  const { title, org, location, period, note, points } = entry
  const current = /present/i.test(period ?? '')

  return (
    <li className="card reveal flex gap-5 p-6 md:p-7" style={{ '--i': order }}>
      <span className="hidden h-11 w-11 shrink-0 place-items-center rounded-xl bg-raised text-muted sm:grid">
        <entry.Icon size={20} />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
          <div>
            <h3 className="text-lg font-semibold leading-snug tracking-tight">{title}</h3>
            <p className="mt-1 text-[15px] text-muted">{[org, location].filter(Boolean).join(' · ')}</p>
          </div>
          <p className="flex items-center gap-2.5 pt-1 font-mono text-xs text-muted">
            {current && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2 py-0.5 font-sans text-[11px] font-medium text-accent">Current</span>
            )}
            {period}
          </p>
        </div>
        {note && <p className="mt-3 text-sm text-muted">{note}</p>}
        {points?.length > 0 && (
          <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                <span aria-hidden className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-accent" />
                {p}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  )
}

export default function Experience({ index, experience, education }) {
  const jobs = asList(experience)
  const schools = asList(education)

  if (!jobs.length && !schools.length) return null

  return (
    <Section id="experience" index={index} title="Experience" intro="Where I work now and where I studied.">
      {jobs.length > 0 && (
        <ol className="space-y-4">
          {jobs.map((e, i) => (
            <Entry
              key={`${e.role}-${e.organization}`}
              entry={{ Icon: Building, title: e.role, org: e.organization, location: e.location, period: e.period, points: e.highlights }}
              order={i}
            />
          ))}
        </ol>
      )}

      {schools.length > 0 && (
        <>
          <h3 className="eyebrow reveal mb-4 mt-12" style={{ '--i': jobs.length }}>
            Education
          </h3>
          <ol className="space-y-4">
            {schools.map((e, i) => (
              <Entry
                key={`${e.degree}-${e.institution}`}
                entry={{
                  Icon: Graduation,
                  title: e.degree,
                  org: e.institution,
                  location: e.location,
                  period: e.period,
                  note: e.cgpa && `CGPA ${e.cgpa}`,
                }}
                order={jobs.length + i + 1}
              />
            ))}
          </ol>
        </>
      )}
    </Section>
  )
}
