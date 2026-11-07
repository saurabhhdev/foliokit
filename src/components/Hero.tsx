import { useState } from 'react'
import { Copy, Check, ExternalLink } from 'lucide-react'
import { GitHubIcon, NpmIcon } from './Icons'

export function Hero() {
  const [copied, setCopied] = useState(false)
  const installCmd = 'npx create-foliokit'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(installCmd)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = installCmd
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <section className="section-wrap" style={{ marginTop: '14px' }}>
      <div className="hero-section dotted-frame">
        {/* Short, prominent tagline */}
        <h1 className="hero-tagline">
          Your portfolio, built with <span className="accent-emerald">one command</span>.
        </h1>

        {/* Concise one-sentence description */}
        <p className="hero-description">
          FolioKit is a simple CLI that helps you to go from an empty folder to your own portfolio in one command .
        </p>

        {/* Prominent installation command with copy button */}
        <div className="hero-cmd-wrapper">
          <div className="hero-cmd-box">
            <span className="hero-cmd-prefix">$</span>
            <code className="hero-cmd-text">{installCmd}</code>
            <button
              type="button"
              className={`copy-button ${copied ? 'is-copied' : ''}`}
              onClick={handleCopy}
              aria-label={copied ? 'Copied to clipboard' : 'Copy command to clipboard'}
            >
              {copied ? (
                <>
                  <Check size={12} aria-hidden="true" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy size={12} aria-hidden="true" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Compact GitHub & npm links */}
        <div className="hero-links">
          <a
            href="https://github.com/saurabhhdev/foliokit"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link-btn"
          >
            <GitHubIcon size={12} />
            <span>GitHub</span>
            <ExternalLink size={9} style={{ opacity: 0.5 }} />
          </a>

          <a
            href="https://www.npmjs.com/package/create-foliokit"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link-btn"
          >
            <NpmIcon size={12} />
            <span>npm v1.0.0</span>
            <ExternalLink size={9} style={{ opacity: 0.5 }} />
          </a>
        </div>
      </div>
    </section>
  )
}
