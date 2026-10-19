export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'

  return (
    <header className={`mb-12 md:mb-14 max-w-2xl flex flex-col ${alignClass}`}>
      {eyebrow && (
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-[var(--color-accent)]/70" aria-hidden />
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
            {eyebrow}
          </p>
        </div>
      )}
      <h2 className="font-display text-[2rem] md:text-[2.65rem] leading-[1.12] font-semibold text-white tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[var(--color-muted)] text-base md:text-[1.05rem] leading-relaxed">
          {description}
        </p>
      )}
    </header>
  )
}
