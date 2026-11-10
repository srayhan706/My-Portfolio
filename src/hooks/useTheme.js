import { useEffect, useState } from 'react'

const THEME_COLOR = { light: '#fafafa', dark: '#0a0c10' }

// The initial theme is set on <html> by the inline script in index.html (saved choice, else system preference).
export function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme ?? 'light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[theme])
  }, [theme])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage can be unavailable (private mode); the choice then lasts for this visit only.
    }
  }

  return [theme, toggle]
}
