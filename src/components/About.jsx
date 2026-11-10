import { asList } from '../utils/format'
import { ArrowUpRight } from './ui/Icons'
import Section from './ui/Section'

export default function About({ index, about, contact }) {
  const [lead, ...rest] = asList(about?.summary)
  if (!lead) return null

  const links = [
    contact?.resume && { href: contact.resume, label: 'Read my CV' },
    contact?.linkedin && { href: contact.linkedin, label: 'Connect on LinkedIn' },
  ].filter(Boolean)

  return (
    <Section id="about" index={index} title="About">
      <p className="reveal max-w-2xl text-xl font-medium leading-snug tracking-tight md:text-2xl md:leading-snug">{lead}</p>
      {rest.map((p, i) => (
        <p key={p} className="reveal mt-5 max-w-2xl text-base leading-relaxed text-muted" style={{ '--i': i + 1 }}>
          {p}
        </p>
      ))}
      {links.length > 0 && (
        <p className="reveal mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm" style={{ '--i': rest.length + 1 }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="link">
              {l.label}
              <ArrowUpRight size={14} />
            </a>
          ))}
        </p>
      )}
    </Section>
  )
}
