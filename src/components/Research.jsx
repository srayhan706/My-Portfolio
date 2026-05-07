export default function Research({ research }) {
  if (!research) return null

  return (
    <section id="research" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-2">Research</h2>
        <p className="text-slate-500 mb-12">Current thesis and research direction</p>
        <article className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
          <h3 className="text-lg font-semibold text-white">{research.title}</h3>
          <p className="text-slate-400 mt-3 leading-relaxed">{research.description}</p>
          {research.highlights?.length > 0 && (
            <ul className="mt-6 space-y-3">
              {research.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-slate-400">
                  <span className="text-emerald-400 mt-1">▹</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
          {research.domain?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {research.domain.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-md border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </article>
      </div>
    </section>
  )
}
