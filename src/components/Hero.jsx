export default function Hero({ about, contact, experience }) {
  if (!about) return null

  const role = experience?.[0]

  return (
    <section
      id="about"
      className="relative min-h-[92vh] flex items-center section-shell pt-32 pb-16 md:pt-36 overflow-hidden"
    >
      <div className="section-inner w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">

          {/* Left column */}
          <div className="order-2 lg:order-1 border-l border-[var(--color-border-strong)] pl-6 md:pl-8">

            {role && (
              <div
                className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 mb-6 animate-fade-up"
                style={{ animationDelay: '0ms' }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-teal)] animate-pulse" />
                <span className="text-xs text-[var(--color-muted)]">
                  {role.role} · {role.organization}
                </span>
              </div>
            )}

            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)] mb-4 animate-fade-up"
              style={{ animationDelay: '80ms' }}
            >
              Dhaka, Bangladesh
            </p>

            <h1
              className="font-display text-[2.5rem] sm:text-5xl lg:text-[3.5rem] leading-[1.05] font-semibold text-white tracking-tight text-balance animate-fade-up"
              style={{ animationDelay: '160ms' }}
            >
              {about.name}
            </h1>

            <p
              className="mt-3 text-2xl sm:text-3xl text-gradient-display font-display italic animate-fade-up"
              style={{ animationDelay: '260ms' }}
            >
              {about.title}
            </p>

            <p
              className="mt-6 text-lg text-[#d8d8e0] leading-relaxed max-w-xl animate-fade-up"
              style={{ animationDelay: '360ms' }}
            >
              {about.tagline}
            </p>

            <p
              className="mt-4 text-[var(--color-muted)] leading-relaxed max-w-xl text-[15px] sm:text-base animate-fade-up"
              style={{ animationDelay: '440ms' }}
            >
              {about.summary}
            </p>

            <div
              className="mt-8 pt-6 border-t border-[var(--color-border)] max-w-xl animate-fade-up"
              style={{ animationDelay: '540ms' }}
            >
              <a
                href="#projects"
                className="inline-block text-[15px] font-semibold text-white border-b border-[var(--color-accent)] pb-0.5 hover:text-[var(--color-accent-fg)] transition-colors"
              >
                See projects
              </a>

              <ul className="mt-4 space-y-1.5 text-sm">
                {contact?.email && (
                  <li>
                    <span className="text-[var(--color-muted)] w-14 inline-block">Email</span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-white/90 hover:text-white break-all sm:break-normal"
                    >
                      {contact.email}
                    </a>
                  </li>
                )}
                {contact?.resume && (
                  <li>
                    <span className="text-[var(--color-muted)] w-14 inline-block">Resume</span>
                    <a
                      href={contact.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/90 hover:text-white underline-offset-2 hover:underline"
                    >
                      PDF download
                    </a>
                  </li>
                )}
                {contact?.linkedin && (
                  <li>
                    <span className="text-[var(--color-muted)] w-14 inline-block">Social</span>
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/90 hover:text-white underline-offset-2 hover:underline"
                    >
                      LinkedIn
                    </a>
                    {contact.github && (
                      <>
                        <span className="text-[var(--color-muted)] mx-2">·</span>
                        <a
                          href={contact.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/90 hover:text-white underline-offset-2 hover:underline"
                        >
                          GitHub
                        </a>
                      </>
                    )}
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Right column — photo */}
          <div
            className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up"
            style={{ animationDelay: '200ms' }}
          >
            <div className="relative w-full max-w-[21rem]">
              <div
                className="absolute -inset-1 rounded-xl bg-gradient-to-br from-[var(--color-accent)]/30 to-[var(--color-teal)]/10 blur-sm"
                aria-hidden
              />
              <div className="relative glass-panel rounded-xl p-2 hover:shadow-[0_0_40px_-12px_rgba(157,140,255,0.3)] transition-shadow duration-500">
                <div className="overflow-hidden rounded-lg border border-[var(--color-border)]">
                  <img
                    src="/f.png"
                    alt="Portrait of Md Shariful Islam Rayhan"
                    className="aspect-[4/5] w-full object-cover object-top grayscale-[15%] contrast-[1.02] hover:grayscale-0 transition-all duration-700"
                    width={440}
                    height={550}
                  />
                </div>
                <div className="mt-3 flex items-center justify-between gap-3 px-1">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[var(--color-muted)]">Now</p>
                    <p className="text-sm font-medium text-white truncate">
                      {role?.organization ?? 'Available'}
                    </p>
                  </div>
                  <span className="rounded-md bg-[var(--color-accent-soft)] px-2 py-1 text-[10px] font-medium text-[var(--color-accent-fg)]">
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
