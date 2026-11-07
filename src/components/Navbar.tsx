import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { GitHubIcon, NpmIcon } from './Icons'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Commands', href: '#commands' },
    { label: 'Inside', href: '#inside' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Creator', href: '#creator' },
  ]

  return (
    <>
      <header className="site-header">
        <a href="#" className="wordmark" aria-label="FolioKit Home">
          <span>FolioKit</span>
          <span className="wordmark-dot">.</span>
          <span className="wordmark-tag">v1.0.0</span>
        </a>

        {/* Desktop Nav */}
        <nav className="main-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action icons */}
        <div className="nav-actions">
          <a
            href="https://github.com/saurabhhdev/foliokit"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            title="GitHub Repository"
            aria-label="FolioKit on GitHub"
          >
            <GitHubIcon size={14} />
          </a>
          <a
            href="https://www.npmjs.com/package/create-foliokit"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            title="npm Package"
            aria-label="FolioKit on npm"
          >
            <NpmIcon size={14} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-panel">
          <nav className="mobile-nav-links" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mobile-nav-actions">
            <a
              href="https://github.com/saurabhhdev/foliokit"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="FolioKit on GitHub"
            >
              <GitHubIcon size={15} />
            </a>
            <a
              href="https://www.npmjs.com/package/create-foliokit"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="FolioKit on npm"
            >
              <NpmIcon size={15} />
            </a>
            <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'var(--mono-font)' }}>
              v1.0.0 (Node &gt;= 22.12.0)
            </span>
          </div>
        </div>
      )}
    </>
  )
}
