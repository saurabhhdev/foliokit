import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface EssentialCommand {
  step: string
  title: string
  command: string
  description: string
}

interface OtherCommand {
  id: string
  syntax: string
  description: string
}

export function CliCommands() {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const essentialCommands: EssentialCommand[] = [
    {
      step: '01',
      title: 'Create your portfolio',
      command: 'npx create-foliokit',
      description: 'Run the interactive setup wizard to scaffold a complete portfolio in seconds.',
    },
    {
      step: '02',
      title: 'Enter project directory',
      command: 'cd my-portfolio',
      description: 'Navigate into your newly generated portfolio workspace.',
    },
    {
      step: '03',
      title: 'Start development server',
      command: 'npm run dev',
      description: 'Launch the Vite dev server with instant hot reload at localhost:5173.',
    },
  ]

  const otherCommands: OtherCommand[] = [
    {
      id: 'help',
      syntax: 'foliokit --help',
      description: 'Display CLI syntax, options, and available flags',
    },
    {
      id: 'version',
      syntax: 'foliokit --version',
      description: 'Output the currently installed version of FolioKit',
    },
    {
      id: 'create',
      syntax: 'foliokit create',
      description: 'Start the project setup wizard explicitly',
    },
    {
      id: 'global',
      syntax: 'npm install -g create-foliokit',
      description: 'Install globally to use foliokit without npx',
    },
    {
      id: 'build',
      syntax: 'npm run build',
      description: 'Compile TypeScript, bundle Vite, and generate SEO',
    },
    {
      id: 'preview',
      syntax: 'npm run preview',
      description: 'Test the production build output locally',
    },
  ]

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    }
  }

  return (
    <section className="content-section section-wrap" id="commands">
      <header className="section-header">
        <h2 className="section-title">
          Commands<span>.</span>
        </h2>
        <p className="section-subtitle">
          Essential CLI workflow and complete command reference.
        </p>
      </header>

      {/* 1. Essential Commands (Visual Focus) */}
      <div className="essential-commands-stack">
        {essentialCommands.map((cmd) => (
          <div key={cmd.step} className="essential-command-card">
            <div className="essential-command-top">
              <div className="essential-command-meta">
                <span className="essential-command-step">{cmd.step}</span>
                <h3 className="essential-command-title">{cmd.title}</h3>
              </div>
              <p className="essential-command-desc">{cmd.description}</p>
            </div>

            <div className="terminal-container">
              <div className="terminal-code-row">
                <span className="terminal-prompt">$</span>
                <code className="terminal-code">{cmd.command}</code>
              </div>
              <button
                type="button"
                className={`copy-button ${copiedId === cmd.step ? 'is-copied' : ''}`}
                onClick={() => handleCopy(cmd.step, cmd.command)}
                aria-label={`Copy ${cmd.command}`}
              >
                {copiedId === cmd.step ? (
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
        ))}
      </div>

      {/* 2. Other Commands & Options (Minimal & User-Friendly) */}
      <div className="other-commands-section">
        <div className="other-commands-header">
          <h3 className="other-commands-title">
            Other commands &amp; options<span>.</span>
          </h3>
          <span className="other-commands-hint">Click any row to copy</span>
        </div>

        <div className="other-commands-list">
          {otherCommands.map((item) => (
            <div
              key={item.id}
              className="other-command-item"
              onClick={() => handleCopy(item.id, item.syntax)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleCopy(item.id, item.syntax)
                }
              }}
              title={`Click to copy: ${item.syntax}`}
              aria-label={`Copy command ${item.syntax}`}
            >
              <div className="other-command-left">
                <code className="other-command-code">{item.syntax}</code>
                <span className="other-command-text">{item.description}</span>
              </div>

              <button
                type="button"
                className={`other-command-copy ${copiedId === item.id ? 'is-copied' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  handleCopy(item.id, item.syntax)
                }}
                aria-label={`Copy ${item.syntax}`}
              >
                {copiedId === item.id ? (
                  <>
                    <Check size={11} aria-hidden="true" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={11} aria-hidden="true" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
