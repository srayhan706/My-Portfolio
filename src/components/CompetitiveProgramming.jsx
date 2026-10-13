import SectionHeading from './ui/SectionHeading'

export default function CompetitiveProgramming({ competitiveProgramming }) {
  if (!competitiveProgramming) return null

  const profiles = [
    {
      label: 'LeetCode',
      url: competitiveProgramming.leetcode?.profile
        ?? (competitiveProgramming.leetcode
          ? `https://leetcode.com/u/${competitiveProgramming.leetcode.username}/`
          : null),
      username: competitiveProgramming.leetcode?.username,
      rating: competitiveProgramming.leetcode?.max_rating,
    },
    {
      label: 'Codeforces',
      url: competitiveProgramming.codeforces?.profile
        ?? (competitiveProgramming.codeforces
          ? `https://codeforces.com/profile/${competitiveProgramming.codeforces.username}`
          : null),
      username: competitiveProgramming.codeforces?.username,
      rating: competitiveProgramming.codeforces?.max_rating,
    },
  ].filter((profile) => profile.username)

  if (!profiles.length) return null

  return (
    <section id="competitive-programming" className="section-shell pb-12">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Problem solving"
          title="Competitive programming"
          description="Consistent practice on algorithmic challenges."
        />
        <div className="grid md:grid-cols-2 gap-4">
          {profiles.map((profile) => (
            <a
              key={profile.label}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel rounded-2xl p-6 transition hover:border-[var(--color-border-strong)] group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#f5ead4] transition-colors">
                    {profile.label}
                  </h3>
                  <p className="text-[var(--color-muted)] mt-1 font-mono text-sm">@{profile.username}</p>
                </div>
                <span className="rounded-full border border-[var(--color-border)] bg-white/[0.03] px-3 py-1 text-xs font-mono text-[var(--color-teal)]">
                  {profile.rating} max
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
