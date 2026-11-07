import { ExternalLink, MapPin } from 'lucide-react'

export function Creator() {
  return (
    <section className="content-section section-wrap" id="creator">
      <header className="section-header">
        <h2 className="section-title">
          Built by a developer, for developers<span>.</span>
        </h2>
        <p className="section-subtitle">
          Designed and maintained with a focus on simplicity, performance, and craftsmanship.
        </p>
      </header>

      <div className="creator-panel">
        <div className="creator-info">
          <div className="creator-avatar" aria-hidden="true">
            SP
          </div>
          <div className="creator-meta">
            <h3>
              Saurabh Pandey <span className="creator-handle">(@saurabhhdev)</span>
            </h3>
            <p style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <MapPin size={12} style={{ color: 'var(--text-muted)' }} />
              <span>Delhi, India</span>
            </p>
          </div>
        </div>

        <a
          href="https://saurabhhdev.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="creator-portfolio-link"
        >
          <span>View personal portfolio</span>
          <ExternalLink size={12} />
        </a>
      </div>
    </section>
  )
}
