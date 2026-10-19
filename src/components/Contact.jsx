import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionHeading from './ui/SectionHeading'

export default function Contact({ contact }) {
  const [ref, visible] = useScrollReveal()

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
      <div
        ref={ref}
        className={`section-inner reveal-base ${visible ? 'reveal-visible' : 'reveal-hidden'}`}
      >
        <div className="glass-panel rounded-xl p-8 md:p-12 relative overflow-hidden hover:shadow-[0_12px_48px_-20px_rgba(157,140,255,0.15)] transition-shadow duration-500">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(157,140,255,0.14),transparent_45%)]"
            aria-hidden
          />
          <div className="relative grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let's talk about your team"
                description="Open to software engineering roles, internships, and collaborations. I typically reply within 24–48 hours."
              />
              <a
                href={`mailto:${contact.email}?subject=Opportunity%20%E2%80%94%20Md%20Shariful%20Islam%20Rayhan`}
                className="btn-primary mt-2 !py-3.5 hover:shadow-[0_4px_20px_-6px_rgba(157,140,255,0.5)] transition-shadow"
              >
                Send an email
              </a>
            </div>

            <ul className="grid sm:grid-cols-2 gap-3">
              {channels.map((item, i) => (
                <li
                  key={item.label}
                  className="reveal-base"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(16px)',
                    transitionDelay: visible ? `${i * 60 + 200}ms` : '0ms',
                  }}
                >
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
                    className="group block h-full rounded-2xl border border-[var(--color-border)] bg-black/20 px-4 py-4 hover:border-[var(--color-accent)]/35 hover:bg-white/[0.03] hover:-translate-y-0.5 hover:shadow-[0_4px_16px_-6px_rgba(157,140,255,0.15)] transition-all duration-200"
                  >
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-white group-hover:text-[var(--color-accent-fg)] transition-colors">
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
