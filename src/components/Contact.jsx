import { useEffect, useState } from 'react'
import { prettyUrl } from '../utils/format'
import { ArrowUpRight, Check, Codeforces, Copy, GitHub, LeetCode, LinkedIn, Mail, Phone } from './ui/Icons'
import Section from './ui/Section'

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return undefined
    const t = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(t)
  }, [copied])

  if (!navigator.clipboard) return null

  const copy = () =>
    navigator.clipboard
      .writeText(value)
      .then(() => setCopied(true))
      .catch(() => {})

  return (
    <button type="button" onClick={copy} className="btn btn-ghost">
      {copied ? <Check size={15} className="text-positive" /> : <Copy size={15} />}
      <span aria-live="polite">{copied ? 'Copied' : 'Copy email'}</span>
    </button>
  )
}

export default function Contact({ index, contact }) {
  if (!contact) return null

  const channels = [
    contact.linkedin && { href: contact.linkedin, label: 'LinkedIn', value: prettyUrl(contact.linkedin), Icon: LinkedIn },
    contact.github && { href: contact.github, label: 'GitHub', value: prettyUrl(contact.github), Icon: GitHub },
    contact.phone && { href: `tel:${contact.phone}`, label: 'Phone', value: contact.phone, Icon: Phone },
    contact.leetcode && { href: contact.leetcode, label: 'LeetCode', value: prettyUrl(contact.leetcode), Icon: LeetCode },
    contact.codeforces && { href: contact.codeforces, label: 'Codeforces', value: prettyUrl(contact.codeforces), Icon: Codeforces },
  ].filter(Boolean)

  return (
    <Section id="contact" index={index} title="Contact" intro="Open to conversations about roles, projects, and collaboration.">
      <div className="card reveal overflow-hidden">
        <div className="p-6 md:p-10">
          <h3 className="max-w-lg text-3xl font-semibold leading-[1.08] tracking-[-0.03em] md:text-[2.5rem]">Let’s build something reliable together.</h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            Have a role, a project, or a question? Email is the fastest way to reach me.
          </p>
          {contact.email && (
            <>
              <a
                href={`mailto:${contact.email}`}
                className="mt-8 inline-block break-all text-xl font-medium tracking-tight underline decoration-line decoration-1 underline-offset-8 transition-colors hover:text-accent hover:decoration-accent md:text-2xl"
              >
                {contact.email}
              </a>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={`mailto:${contact.email}`} className="btn btn-primary">
                  <Mail size={15} />
                  Send an email
                </a>
                <CopyButton value={contact.email} />
              </div>
            </>
          )}
        </div>

        {channels.length > 0 && (
          <ul className="grid gap-px border-t border-line bg-line sm:grid-cols-2">
            {channels.map((c, i) => (
              <li key={c.label} className={`bg-surface ${channels.length % 2 === 1 && i === channels.length - 1 ? 'sm:col-span-2' : ''}`}>
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-raised/60 md:px-10"
                >
                  <c.Icon size={18} className="shrink-0 text-muted" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium">{c.label}</span>
                    <span className="block truncate text-[13px] text-muted">{c.value}</span>
                  </span>
                  <ArrowUpRight size={15} className="shrink-0 text-faint transition-colors group-hover:text-accent" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  )
}
