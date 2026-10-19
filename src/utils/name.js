// "Md Shariful Islam Rayhan" -> ["Shariful", "Rayhan"]
export function splitName(name = '') {
  const words = name.split(/\s+/).filter((w) => w && !/^md\.?$/i.test(w))
  if (words.length < 2) return [words[0] ?? name, '']
  return [words[0], words[words.length - 1]]
}
