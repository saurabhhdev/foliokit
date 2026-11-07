import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

const installCommand = 'npx create-foliokit'

export function FinalCta() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(installCommand)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = installCommand
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }

    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="content-section section-wrap final-cta-section" aria-labelledby="final-cta-title">
      <h2 className="final-cta-title" id="final-cta-title">
        One command away from your <span>own portfolio.</span>
      </h2>
      <p className="final-cta-description">
        Ship your very own portfolio now !
      </p>
      <div className="hero-cmd-box final-cta-command">
        <span className="hero-cmd-prefix" aria-hidden="true">$</span>
        <code className="hero-cmd-text">{installCommand}</code>
        <button
          type="button"
          className={`copy-button${copied ? ' is-copied' : ''}`}
          onClick={handleCopy}
          aria-label={copied ? 'Copied to clipboard' : 'Copy command to clipboard'}
        >
          {copied ? <Check size={12} aria-hidden="true" /> : <Copy size={12} aria-hidden="true" />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
    </section>
  )
}
