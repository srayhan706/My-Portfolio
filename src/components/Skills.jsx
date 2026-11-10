import Section from './ui/Section'

const GROUPS = [
  { keys: ['programming_languages', 'languages'], title: 'Languages' },
  { keys: ['backend', 'frameworks'], title: 'Backend' },
  { keys: ['frontend'], title: 'Frontend' },
  { keys: ['databases'], title: 'Databases' },
  { keys: ['devops', 'platforms'], title: 'DevOps & deployment' },
  { keys: ['scripting_automation'], title: 'Scripting & automation' },
  { keys: ['tools'], title: 'Tools & version control' },
]

export default function Skills({ index, skills }) {
  if (!skills) return null

  const groups = GROUPS.map((g) => ({
    ...g,
    items: g.keys.flatMap((k) => skills[k] ?? []),
  })).filter((g) => g.items.length)

  if (!groups.length) return null

  return (
    <Section id="skills" index={index} title="Skills" intro="The languages, frameworks, and tools I work with.">
      <dl className="card reveal divide-y divide-line">
        {groups.map((g) => (
          <div key={g.title} className="grid gap-3 px-6 py-5 md:grid-cols-[200px_1fr] md:items-baseline md:px-7">
            <dt className="text-[15px] font-medium tracking-tight">{g.title}</dt>
            <dd>
              <ul className="flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
