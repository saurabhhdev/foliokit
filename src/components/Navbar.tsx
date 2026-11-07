import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { GitHubIcon } from './Icons'

export function Navbar() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('foliokit-theme')
      if (saved === 'light' || saved === 'dark') return saved
    }
    return 'dark'
  })

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
    localStorage.setItem('foliokit-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <header className="site-header">
      {/* Minimal Brand Wordmark with clean version tag */}
      <a href="#" className="nav-wordmark" aria-label="FolioKit Home">
        <span className="brand-text">
          <span>Folio</span><span className="brand-kit">Kit</span>
        </span>
        <span className="brand-version-tag">v1.0.0</span>
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
