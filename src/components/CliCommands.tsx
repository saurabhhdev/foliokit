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
  name: string
  syntax: string
  description: string
  copyable?: boolean
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
      id: 'explicit-create',
      name: 'Explicit create subcommand',
      syntax: 'foliokit create',
      description: 'Direct subcommand alternative to start the interactive wizard.',
      copyable: true,
    },
    {
      id: 'global-install',
      name: 'Global CLI installation',
      syntax: 'npm install -g create-foliokit',
      description: 'Install globally to run the foliokit command directly from any terminal.',
      copyable: true,
    },
    {
      id: 'version-flag',
      name: 'Print version flag',
      syntax: 'foliokit --version',
      description: 'Output the currently installed version string of the CLI.',
      copyable: true,
    },
    {
      id: 'help-flag',
      name: 'CLI help flag',
      syntax: 'foliokit --help',
      description: 'Display available commands, argument syntax, and usage flags.',
      copyable: true,
    },
    {
      id: 'build-script',
      name: 'Production build script',
      syntax: 'npm run build',
      description: 'Type checks, bundles with Vite, and generates SEO sitemap and robots.txt.',
      copyable: true,
    },
    {
      id: 'preview-script',
      name: 'Local preview script',
      syntax: 'npm run preview',
      description: 'Spin up a local static server to test production build output before deploy.',
      copyable: true,
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

      {/* 2. Other Commands & Options */}
      <div className="other-commands-section">
        <div className="other-commands-header">
          <h3 className="other-commands-title">
            Other commands &amp; options<span>.</span>
          </h3>
          <p className="other-commands-desc">
            Secondary subcommands, runtime flags, and generated project scripts.
          </p>
        </div>

        <div className="other-commands-list">
          {otherCommands.map((item) => (
            <div key={item.id} className="other-command-row">
              <div className="other-command-main">
                <div className="other-command-info">
                  <span className="other-command-name">{item.name}</span>
                  <span className="other-command-sep" aria-hidden="true">·</span>
                  <span className="other-command-desc">{item.description}</span>
                </div>
              </div>

              <div className="other-command-action">
                <code className="other-command-syntax">{item.syntax}</code>
                {item.copyable && (
                  <button
                    type="button"
                    className={`other-copy-btn ${copiedId === item.id ? 'is-copied' : ''}`}
                    onClick={() => handleCopy(item.id, item.syntax)}
                    title={`Copy ${item.syntax}`}
                    aria-label={`Copy ${item.syntax}`}
                  >
                    {copiedId === item.id ? (
                      <Check size={12} aria-hidden="true" />
                    ) : (
                      <Copy size={12} aria-hidden="true" />
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
