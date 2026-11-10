import { asList, shortOrg } from '../utils/format'
import { ArrowUpRight, Codeforces, Download, GitHub, LeetCode, LinkedIn, Mail, MapPin } from './ui/Icons'

export default function Hero({ about, contact, experience, education, skills }) {
  if (!about) return null

  const role = asList(experience)[0]
  const degree = asList(education)[0]
  const location = about.location ?? role?.location
  const portraitAlt = `Portrait of ${about.full_name ?? about.name}`

  const socials = [
    contact?.github && { href: contact.github, label: 'GitHub', Icon: GitHub },
    contact?.linkedin && { href: contact.linkedin, label: 'LinkedIn', Icon: LinkedIn },
    contact?.leetcode && { href: contact.leetcode, label: 'LeetCode', Icon: LeetCode },
    contact?.codeforces && { href: contact.codeforces, label: 'Codeforces', Icon: Codeforces },
    contact?.email && { href: `mailto:${contact.email}`, label: 'Email', Icon: Mail },
  ].filter(Boolean)

  const stack = [skills?.programming_languages?.[0], skills?.backend?.[0]].filter(Boolean)
  const stackMore = [skills?.databases?.[0], ...(skills?.devops ?? []).slice(0, 1), skills?.frontend?.[1]].filter(Boolean)

  const facts = [
    role && { label: 'Currently', value: role.role, sub: role.organization },
    degree && { label: 'Education', value: degree.degree, sub: degree.institution },
    stack.length > 0 && { label: 'Core stack', value: stack.join(' · '), sub: stackMore.join(' · ') },
    location && { label: 'Based in', value: location, sub: about.timezone },
  ].filter(Boolean)

  return (
    <section id="top" className="relative">
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-[34rem]" />

      <div className="shell relative grid items-center gap-12 pb-14 pt-12 md:pt-20 lg:grid-cols-[1fr_340px] lg:gap-20 lg:pb-20">
        <div>
          <img
            src="/f.png"
            alt={portraitAlt}
            width={72}
            height={72}
            className="animate-rise mb-7 h-[72px] w-[72px] rounded-full border border-line bg-white object-cover object-top lg:hidden"
          />

          {(about.availability || role) && (
            <p className="animate-rise inline-flex items-center gap-2.5 rounded-full border border-line bg-surface py-1.5 pl-3 pr-4 text-[13px] text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-positive opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-positive" />
              </span>
              {about.availability ?? (
                <span>
                  {role.role} at <span className="font-medium text-ink">{shortOrg(role.organization)}</span>
                </span>
              )}
            </p>
          )}

          <h1 className="animate-rise mt-6 text-[2.3rem] font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[4.5rem]" style={{ '--i': 1 }}>
            {about.name}
            <span className="block text-faint">{about.title}.</span>
          </h1>

          <p className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-muted" style={{ '--i': 2 }}>
            {about.tagline}
          </p>

          <div className="animate-rise mt-9 flex flex-wrap items-center gap-3" style={{ '--i': 3 }}>
            <a href="#contact" className="btn btn-primary">
              Get in touch
              <ArrowUpRight size={15} />
            </a>
            {contact?.resume && (
              <a href={contact.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <Download size={15} />
                Download CV
              </a>
            )}
          </div>

          {socials.length > 0 && (
            <ul className="animate-rise mt-9 flex flex-wrap items-center gap-2" style={{ '--i': 4 }}>
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="icon-btn"
                  >
                    <s.Icon size={17} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <figure className="animate-rise relative hidden lg:block" style={{ '--i': 2 }}>
          <div className="card p-2 shadow-[0_30px_60px_-40px_rgba(14,17,22,0.45)]">
            <img src="/f.png" alt={portraitAlt} width={500} height={500} className="aspect-square w-full rounded-xl bg-white object-cover object-top" />
          </div>
          {location && (
            <figcaption className="card absolute -bottom-4 -left-5 flex items-center gap-2 px-3.5 py-2 text-[13px] font-medium shadow-[0_14px_30px_-18px_rgba(14,17,22,0.45)]">
              <MapPin size={14} className="text-accent" />
              {location}
            </figcaption>
          )}
        </figure>
      </div>

      {facts.length > 0 && (
        <div className="shell relative pb-16 md:pb-20">
          <dl className="animate-rise grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4" style={{ '--i': 5 }}>
            {facts.map((f) => (
              <div key={f.label} className="bg-surface p-5">
                <dt className="eyebrow">{f.label}</dt>
                <dd className="mt-3 text-[15px] font-medium leading-snug tracking-tight">{f.value}</dd>
                {f.sub && <dd className="mt-1 text-[13px] leading-snug text-muted">{f.sub}</dd>}
              </div>
            ))}
          </dl>
        </div>
      )}
    </section>
  )
}
