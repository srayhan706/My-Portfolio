export default function Leadership({ leadership }) {
  if (!leadership) return null
  return (
    <section id="leadership" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-2">Leadership & Activities</h2>
        <p className="text-slate-500 mb-12">Beyond the code</p>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-lg font-semibold text-white">{leadership.role}</span>
            <span className="text-slate-500">·</span>
            <span className="text-emerald-400">{leadership.organization}</span>
            <span className="text-slate-500 text-sm">({leadership.period})</span>
          </div>
          <ul className="mt-6 space-y-3">
            {leadership.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-slate-400">
                <span className="text-cyan-400 mt-1">▹</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
