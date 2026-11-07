import { useState, useEffect, useRef } from 'react'
import { Moon, Sun } from 'lucide-react'
import { GitHubIcon } from './Icons'

type Theme = 'dark' | 'light'

export function Navbar() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return window.localStorage.getItem('foliokit-theme') === 'light' ? 'light' : 'dark'
    } catch {
      return 'dark'
    }
  })
  const themeTransitionTimeout = useRef<number | null>(null)

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
    try {
      window.localStorage.setItem('foliokit-theme', theme)
    } catch {
      // Theme switching still works when browser storage is unavailable.
    }
  }, [theme])

  useEffect(() => () => {
    if (themeTransitionTimeout.current !== null) {
      window.clearTimeout(themeTransitionTimeout.current)
    }
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const transitionDuration = reduceMotion ? 0 : 600

    if (themeTransitionTimeout.current !== null) {
      window.clearTimeout(themeTransitionTimeout.current)
    }

    root.classList.remove('theme-light-enter-down', 'theme-dark-enter-up')
    root.classList.add('theme-transitioning')
    root.classList.add(nextTheme === 'light' ? 'theme-light-enter-down' : 'theme-dark-enter-up')
    setTheme(nextTheme)

    themeTransitionTimeout.current = window.setTimeout(() => {
      root.classList.remove('theme-transitioning', 'theme-light-enter-down', 'theme-dark-enter-up')
      themeTransitionTimeout.current = null
    }, transitionDuration)
  }

  return (
    <header className="site-header">
      {/* Minimal Brand Wordmark with clean version tag */}
      <a href="#" className="nav-wordmark" aria-label="FolioKit Home">
        <span className="brand-text">
          <span>folio</span><span className="brand-kit">kit.</span>
        </span>
      </a>

      {/* Right-aligned minimal action buttons matching reference */}
      <div className="nav-actions-group">
        {/* GitHub Button */}
        <a
          href="https://github.com/saurabhhdev/foliokit"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-btn nav-btn-icon"
          title="GitHub Repository"
          aria-label="FolioKit on GitHub"
        >
          <GitHubIcon size={16} />
        </a>

        {/* npm Button with crisp text label */}
        <a
          href="https://www.npmjs.com/package/create-foliokit"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-btn nav-btn-npm"
          title="npm Package"
          aria-label="FolioKit on npm"
        >
          <span>npm</span>
        </a>

        {/* Theme Toggle Button (Moon / Sun) */}
        <button
          type="button"
          onClick={toggleTheme}
          className="nav-btn nav-btn-icon nav-theme-toggle"
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            <Moon size={15} strokeWidth={2} />
          ) : (
            <Sun size={15} strokeWidth={2} />
          )}
        </button>
      </div>
    </header>
  )
}
