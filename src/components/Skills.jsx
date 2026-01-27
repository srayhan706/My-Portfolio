export default function Skills({ skills }) {
  if (!skills) return null
  const groups = [
    { title: 'Languages', items: skills.languages, color: 'emerald' },
    { title: 'Frameworks & Libraries', items: skills.frameworks, color: 'cyan' },
    { title: 'Concepts', items: skills.concepts, color: 'amber' },
    { title: 'Tools', items: skills.tools, color: 'violet' },
  ]
  const colorMap = {
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    violet: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
  }
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-2">Skills</h2>
        <p className="text-slate-500 mb-12">Technologies and concepts I work with</p>
        <div className="grid sm:grid-cols-2 gap-8">
          {groups.map(({ title, items, color }) => (
            <div key={title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-slate-300 font-medium mb-4">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className={`px-3 py-1 rounded-md border text-sm ${colorMap[color]}`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
