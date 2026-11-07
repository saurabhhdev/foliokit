import { useState } from 'react'
import { Copy, Check, ExternalLink } from 'lucide-react'
import { GitHubIcon, NpmIcon } from './Icons'

export function Hero() {
  const [copied, setCopied] = useState(false)
  const [selectedPm, setSelectedPm] = useState('npm')

  const commands: Record<string, string> = {
    npm: 'npx create-foliokit',
    pnpm: 'pnpm create foliokit',
    bun: 'bun create foliokit',
  }

  const currentCmd = commands[selectedPm] || commands.npm

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentCmd)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = currentCmd
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <section className="section-wrap" style={{ marginTop: '20px' }}>
      <div className="hero-section dotted-frame">
        {/* Subtle status badge */}
        <div className="hero-badge-row">
          <div className="hero-pill">
            <span className="hero-pill-dot" />
            <span>npm package: create-foliokit</span>
          </div>
        </div>

        {/* Tagline */}
        <h1 className="hero-tagline">
          Your portfolio, built with{' '}
          <span className="accent-gold">one command</span>.
        </h1>

        {/* Supporting description */}
        <p className="hero-description">
          FolioKit is a simple CLI that helps developers create their own minimal, customizable portfolio website without starting from scratch.
        </p>

        {/* Command block with package manager tabs */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '22px' }}>
          <div style={{ display: 'inline-flex', gap: '3px', marginBottom: '6px' }}>
            {(['npm', 'pnpm', 'bun'] as const).map((pm) => (
              <button
                key={pm}
                type="button"
                onClick={() => setSelectedPm(pm)}
                style={{
                  fontSize: '10px',
                  fontFamily: 'var(--mono-font)',
                  padding: '2px 8px',
                  borderRadius: '3px',
                  border: '1px solid',
                  borderColor: selectedPm === pm ? 'var(--lime)' : 'var(--border)',
                  color: selectedPm === pm ? 'var(--lime)' : 'var(--text-muted)',
                  background: selectedPm === pm ? 'var(--elevated)' : 'transparent',
                  transition: 'all var(--interaction-duration) var(--interaction-ease)',
                }}
              >
                {pm}
              </button>
            ))}
          </div>

          <div className="hero-cmd-box">
            <span className="hero-cmd-prefix">$</span>
            <code className="hero-cmd-text">{currentCmd}</code>
            <button
              type="button"
              className={`copy-button ${copied ? 'is-copied' : ''}`}
              onClick={handleCopy}
              aria-label={copied ? 'Copied to clipboard' : 'Copy command to clipboard'}
            >
              {copied ? (
                <>
                  <Check size={13} aria-hidden="true" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy size={13} aria-hidden="true" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Minimal external links */}
        <div className="hero-links">
          <a
            href="https://github.com/saurabhhdev/foliokit"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link-btn"
          >
            <GitHubIcon size={13} />
            <span>saurabhhdev/foliokit</span>
            <ExternalLink size={10} style={{ opacity: 0.6 }} />
          </a>

          <a
            href="https://www.npmjs.com/package/create-foliokit"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link-btn"
          >
            <NpmIcon size={13} />
            <span>create-foliokit v1.0.0</span>
            <ExternalLink size={10} style={{ opacity: 0.6 }} />
          </a>
        </div>
      </div>
    </section>
  )
}
