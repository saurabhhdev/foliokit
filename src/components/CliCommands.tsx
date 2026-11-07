import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CommandItem {
  id: string
  name: string
  description: string
  code: string
}

export function CliCommands() {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const commands: CommandItem[] = [
    {
      id: 'npx-run',
      name: 'Interactive Project Scaffolding (Recommended)',
      description: 'Runs the interactive project creation wizard in your current directory without installing anything globally.',
      code: 'npx create-foliokit',
    },
    {
      id: 'explicit-create',
      name: 'Explicit Create Subcommand',
      description: 'Alternative explicit subcommand syntax supported by Commander.js.',
      code: 'foliokit create',
    },
    {
      id: 'global-install',
      name: 'Global Installation',
      description: 'Install FolioKit globally to run the foliokit binary directly from anywhere.',
      code: 'npm install -g create-foliokit\nfoliokit',
    },
    {
      id: 'check-version',
      name: 'Version Flag',
      description: 'Prints the currently installed FolioKit version string.',
      code: 'foliokit --version',
    },
    {
      id: 'help-flag',
      name: 'Help & Syntax Information',
      description: 'Displays all available command options, arguments, and usage syntax in the terminal.',
      code: 'foliokit --help',
    },
    {
      id: 'start-dev',
      name: 'Start Local Development',
      description: 'Navigate into your newly generated portfolio directory and launch the Vite development server.',
      code: 'cd my-portfolio\nnpm run dev',
    },
  ]

  const handleCopy = async (id: string, code: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = code
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
          All documented CLI commands and options supported by the FolioKit binary.
        </p>
      </header>

      <div className="commands-stack">
        {commands.map((cmd) => (
          <div key={cmd.id} className="command-card">
            <div className="command-top-row">
              <span className="command-name">{cmd.name}</span>
            </div>
            <p className="command-desc">{cmd.description}</p>
            <div className="terminal-container">
              <code className="terminal-code">
                {cmd.code.split('\n').map((line, i) => (
                  <span key={i}>
                    {line.startsWith('#') ? (
                      <span className="dim">{line}</span>
                    ) : (
                      line
                    )}
                    {i < cmd.code.split('\n').length - 1 && '\n'}
                  </span>
                ))}
              </code>
              <button
                type="button"
                className={`copy-button ${copiedId === cmd.id ? 'is-copied' : ''}`}
                onClick={() => handleCopy(cmd.id, cmd.code)}
                aria-label={`Copy ${cmd.name}`}
              >
                {copiedId === cmd.id ? (
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

      {/* Interactive Wizard Prompts Explanation */}
      <div className="options-table-wrap">
        <table className="options-table">
          <thead>
            <tr>
              <th style={{ width: '30%' }}>Interactive Wizard Step</th>
              <th style={{ width: '25%' }}>Prompt / Question</th>
              <th>Details &amp; Fallbacks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>Project Name</code>
              </td>
              <td>
                <em>What should your project be called?</em>
              </td>
              <td>
                Defaults to <code>my-portfolio</code>. Supports lowercase alphanumeric letters and single hyphens.
              </td>
            </tr>
            <tr>
              <td>
                <code>Install Dependencies</code>
              </td>
              <td>
                <em>Install dependencies? (Y/n)</em>
              </td>
              <td>
                Runs <code>npm install</code> automatically inside the new folder with an interactive terminal spinner.
              </td>
            </tr>
            <tr>
              <td>
                <code>Overwrite Safety</code>
              </td>
              <td>
                <em>The folder already exists. Replace it?</em>
              </td>
              <td>
                Prevents accidental overwrites. If declined, your existing project files are preserved untouched.
              </td>
            </tr>
            <tr>
              <td>
                <code>Requirements</code>
              </td>
              <td>
                <em>System Engines</em>
              </td>
              <td>
                Node.js <code>&gt;=22.12.0</code> and npm <code>&gt;=10.0.0</code> on macOS, Windows, or Linux.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
