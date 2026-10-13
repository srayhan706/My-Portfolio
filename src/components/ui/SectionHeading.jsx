export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <header className={`mb-12 md:mb-14 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)] mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-medium text-white tracking-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[var(--color-muted)] text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </header>
  )
}
