import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function Section({ id, index, title, intro, children }) {
  const [ref, visible] = useScrollReveal()

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="shell">
      <div
        ref={ref}
        className={`grid gap-x-16 gap-y-8 border-t border-line py-14 md:py-20 lg:grid-cols-[200px_1fr] ${visible ? 'is-visible' : ''}`}
      >
        <header className="reveal lg:sticky lg:top-28 lg:self-start">
          {index && <p className="font-mono text-xs text-accent">{index}</p>}
          <h2 id={`${id}-title`} className="mt-2 text-2xl font-semibold tracking-tight">
            {title}
          </h2>
          {intro && <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{intro}</p>}
        </header>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  )
}
