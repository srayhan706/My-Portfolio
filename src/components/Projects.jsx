export default function Projects({ projects }) {
  if (!projects?.length) return null
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-2">Projects</h2>
        <p className="text-slate-500 mb-12">Things I&apos;ve built</p>
        <div className="space-y-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group rounded-xl border border-slate-800 bg-slate-900/50 p-6 hover:border-emerald-500/30 transition"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition">
                    {p.title}
                  </h3>
                  <p className="text-slate-400 mt-2 text-sm leading-relaxed">{p.description}</p>
                  {p.highlights?.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {p.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3 text-slate-400 text-sm">
                          <span className="text-cyan-400 mt-1">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tech?.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-xs font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-4 py-2 rounded-lg border border-slate-600 text-slate-400 hover:border-cyan-500/50 hover:text-cyan-400 transition text-sm"
                >
                  GitHub →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
