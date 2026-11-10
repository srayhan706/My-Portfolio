export const asList = (v) => (Array.isArray(v) ? v : v ? [v] : [])

// "Dynamic Solution Innovators (DSi)" -> "DSi"
export const shortOrg = (org = '') => org.match(/\(([^)]+)\)\s*$/)?.[1] ?? org

// "https://www.linkedin.com/in/srayhan/" -> "linkedin.com/in/srayhan"
export const prettyUrl = (url = '') => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

// "Sharif Rayhan" -> "SR"
export const initials = (name = '') =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

// 1 -> "01"
export const pad = (n) => String(n).padStart(2, '0')
