export default function Hero({ about, contact, experience }) {
  if (!about) return null

  const role = experience?.[0]
  const quickLinks = [
    contact?.email && {
      label: 'Email',
      href: `mailto:${contact.email}`,
      value: contact.email,
    },
    contact?.linkedin && { label: 'LinkedIn', href: contact.linkedin, value: 'Profile' },
    contact?.github && { label: 'GitHub', href: contact.github, value: '@srayhan706' },
  ].filter(Boolean)

  return (
    <section
      id="about"
      className="relative min-h-[92vh] flex items-center section-shell pt-32 pb-16 md:pt-36 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute top-[-20%] left-[-10%] h-[520px] w-[520px] rounded-full bg-[var(--color-accent-glow)] blur-[120px] opacity-25" />
        <div className="absolute bottom-[-10%] right-[-5%] h-[420px] w-[420px] rounded-full bg-[var(--color-teal)] blur-[130px] opacity-[0.12]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_55%)]" />
      </div>

      <div className="section-inner w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 animate-fade-up">
          <div className="order-2 lg:order-1">
            {role && (
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/[0.03] px-3 py-1.5 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs text-[var(--color-muted)]">
                  {role.role} · {role.organization}
                </span>
              </div>
            )}

            <p className="text-sm font-medium tracking-wide text-[var(--color-teal)] mb-3">
              Software engineer · Dhaka, Bangladesh
            </p>
            <h1 className="font-display text-[2.35rem] sm:text-5xl lg:text-[3.35rem] leading-[1.08] font-medium text-white tracking-tight text-balance">
              {about.name}
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-gradient-gold font-display">{about.title}</p>

            <p className="mt-6 text-lg text-[#d4d4dc] leading-relaxed max-w-xl">{about.tagline}</p>
            <p className="mt-4 text-[var(--color-muted)] leading-relaxed max-w-xl text-[15px] sm:text-base">
              {about.summary}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[#1a160c] hover:brightness-110 transition"
              >
                View featured work
              </a>
              {contact?.resume && (
                <a
                  href={contact.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-border-strong)] px-6 py-3 text-sm font-medium text-white hover:bg-white/[0.04] transition"
                >
                  Open résumé
                </a>
              )}
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-[var(--color-muted)] hover:text-white transition"
              >
                Contact →
              </a>
            </div>

            {quickLinks.length > 0 && (
              <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl">
                {quickLinks.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[var(--color-border)] bg-white/[0.02] px-4 py-3"
                  >
                    <dt className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-sm truncate">
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-white/90 hover:text-[var(--color-accent)] transition-colors"
                      >
                        {item.value}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[22rem]">
              <div
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[var(--color-accent)]/25 via-transparent to-[var(--color-teal)]/20 blur-2xl"
                aria-hidden
              />
              <div className="relative glass-panel rounded-[2rem] p-3 md:p-4">
                <div className="overflow-hidden rounded-[1.4rem] border border-[var(--color-border)] bg-[var(--color-surface)]">
                  <img
                    src="/f.png"
                    alt="Portrait of Md Shariful Islam Rayhan"
                    className="aspect-[4/5] w-full object-cover object-top"
                    width={440}
                    height={550}
                  />
                </div>
                <div className="absolute -bottom-4 left-6 right-6 glass-panel rounded-2xl px-4 py-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-[var(--color-muted)]">Currently</p>
                    <p className="text-sm font-medium text-white truncate">
                      {role?.organization ?? 'Open to opportunities'}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-emerald-500/15 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
