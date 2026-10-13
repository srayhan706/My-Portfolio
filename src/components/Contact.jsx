import SectionHeading from './ui/SectionHeading'

export default function Contact({ contact }) {
  if (!contact) return null

  const channels = [
    {
      href: `mailto:${contact.email}`,
      label: 'Email',
      detail: contact.email,
      hint: 'Fastest way to reach me',
    },
    contact.phone && {
      href: `tel:${contact.phone.replace(/\s/g, '')}`,
      label: 'Phone',
      detail: contact.phone,
      hint: 'Bangladesh (GMT+6)',
    },
    contact.linkedin && {
      href: contact.linkedin,
      label: 'LinkedIn',
      detail: 'Connect professionally',
      hint: 'Open profile',
    },
    contact.github && {
      href: contact.github,
      label: 'GitHub',
      detail: 'Code & projects',
      hint: 'Open profile',
    },
    contact.resume && {
      href: contact.resume,
      label: 'Résumé',
      detail: 'PDF download',
      hint: 'One-page overview',
    },
  ].filter(Boolean)

  return (
    <section id="contact" className="section-shell border-t border-[var(--color-border)]">
      <div className="section-inner">
        <div className="glass-panel rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,185,120,0.12),transparent_45%)]"
            aria-hidden
          />
          <div className="relative grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let’s talk about your team"
                description="Open to software engineering roles, internships, and collaborations. I typically reply within 24–48 hours."
              />
              <a
                href={`mailto:${contact.email}?subject=Opportunity%20%E2%80%94%20Md%20Shariful%20Islam%20Rayhan`}
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-[#1a160c] hover:brightness-110 transition mt-2"
              >
                Send an email
              </a>
            </div>

            <ul className="grid sm:grid-cols-2 gap-3">
              {channels.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={
                      item.href.startsWith('http') || item.href.endsWith('.pdf') ? '_blank' : undefined
                    }
                    rel={
                      item.href.startsWith('http') || item.href.endsWith('.pdf')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="group block h-full rounded-2xl border border-[var(--color-border)] bg-black/20 px-4 py-4 hover:border-[var(--color-accent)]/35 hover:bg-white/[0.03] transition"
                  >
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-white group-hover:text-[#f5ead4] transition-colors">
                      {item.detail}
                    </p>
                    <p className="mt-1 text-xs text-[var(--color-muted)]">{item.hint}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
