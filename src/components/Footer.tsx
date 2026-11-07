import { GitHubIcon, NpmIcon } from './Icons'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top-row">
        <div className="footer-brand">
          <a href="#" className="nav-wordmark" aria-label="FolioKit Home">
            <span className="brand-text">
              <span className="brand-folio">Folio</span>
              <span className="brand-kit">Kit</span>
            </span>
          </a>
          <p>A minimal, zero-config CLI portfolio generator for modern developers.</p>
        </div>

        <div className="footer-social-links">
          <a
            href="https://github.com/saurabhhdev/foliokit"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="FolioKit GitHub Repository"
          >
            <GitHubIcon size={12} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.npmjs.com/package/create-foliokit"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="FolioKit npm Package"
          >
            <NpmIcon size={12} />
            <span>npm</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom-row">
        <span>&copy; {new Date().getFullYear()} Saurabh Pandey. Distributed under the MIT License.</span>
        <span className="footer-attribution">
          Crafted with{' '}
          <img
            src="/footer-heart.png"
            alt="love"
            className="footer-heart"
            onError={(e) => {
              // Graceful fallback if image is not loaded
              (e.target as HTMLElement).style.display = 'none'
            }}
          />{' '}
          by{' '}
          <a
            href="https://saurabhhdev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--warm-white)', borderBottom: '1px dotted var(--frame-dot)' }}
          >
            Saurabh Pandey
          </a>
        </span>
      </div>
    </footer>
  )
}
