import { useScrollReveal } from '../hooks/useScrollReveal'

const DEFAULT_MISSION =
  'My mission is to help teams ship reliable, secure and scalable software, from clean APIs and solid authentication to interfaces people enjoy using.'

export default function Mission({ about, skills }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.25 })
  const text = about?.mission ?? DEFAULT_MISSION
  const tech = [...(skills?.programming_languages ?? []).slice(0, 3), ...(skills?.backend ?? []), ...(skills?.devops ?? []).slice(0, 2)]

  return (
    <section className="shell py-4">
      <div
        ref={ref}
        className={`overflow-hidden rounded-[24px] bg-[var(--color-teal)] px-6 py-10 text-white sm:px-10 md:px-12 md:py-14 ${
          visible ? 'is-visible' : ''
        }`}
      >
        <p className="max-w-5xl text-[1.6rem] font-medium leading-[1.08] tracking-[-0.02em] sm:text-[2.1rem] md:text-[2.6rem]">
          {text.split(' ').map((w, i) => (
            <span key={i} className="reveal inline-block" style={{ transitionDelay: `${i * 35}ms` }}>
              {w}
              {' '}
            </span>
          ))}
        </p>
        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          {tech.map((t, i) => (
            <li
              key={t}
              className="reveal text-lg font-semibold tracking-tight text-white/60 transition-colors hover:text-white"
              style={{ transitionDelay: `${500 + i * 60}ms` }}
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
