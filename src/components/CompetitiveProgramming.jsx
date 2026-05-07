export default function CompetitiveProgramming({ competitiveProgramming }) {
  if (!competitiveProgramming) return null

  const profiles = [
    {
      label: 'LeetCode',
      url: competitiveProgramming.leetcode
        ? `https://leetcode.com/u/${competitiveProgramming.leetcode.username}/`
        : null,
      username: competitiveProgramming.leetcode?.username,
      rating: competitiveProgramming.leetcode?.max_rating,
      accent: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
    },
    {
      label: 'Codeforces',
      url: competitiveProgramming.codeforces
        ? `https://codeforces.com/profile/${competitiveProgramming.codeforces.username}`
        : null,
      username: competitiveProgramming.codeforces?.username,
      rating: competitiveProgramming.codeforces?.max_rating,
      accent: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
    },
  ].filter((profile) => profile.username)

  if (!profiles.length) return null

  return (
    <section id="competitive-programming" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-2">Competitive Programming</h2>
        <p className="text-slate-500 mb-12">Problem solving across online judges</p>
        <div className="grid md:grid-cols-2 gap-6">
          {profiles.map((profile) => (
            <a
              key={profile.label}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-slate-700"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{profile.label}</h3>
                  <p className="text-slate-400 mt-1 font-mono text-sm">@{profile.username}</p>
                </div>
                <span className={`rounded-full border px-3 py-1 text-sm ${profile.accent}`}>
                  Max Rating: {profile.rating}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
