import {
  Layout,
  FileCode,
  Layers,
  Cpu,
  Share2,
  MessageSquareQuote,
} from 'lucide-react'

export function WhatYouGet() {
  const features = [
    {
      icon: <Layout size={14} />,
      title: 'Ready-to-use developer portfolio',
      description: 'Scaffolded in seconds with React 19, TypeScript, and Vite.',
      indicator: 'React 19 + Vite',
    },
    {
      icon: <FileCode size={14} />,
      title: 'Personal information in data.ts',
      description: 'Configure your bio, headline, live clock, and resume in a single file.',
      indicator: 'data.ts',
    },
    {
      icon: <Layers size={14} />,
      title: 'Project showcase & 3D carousel',
      description: 'Showcase work in a perspective cover gallery with live and GitHub links.',
      indicator: '3D Carousel',
    },
    {
      icon: <Cpu size={14} />,
      title: 'Technical skills showcase',
      description: 'Crisp vector badges pulled from skillicons.dev with hover tooltips.',
      indicator: 'skillicons.dev',
    },
    {
      icon: <Share2 size={14} />,
      title: 'Social media & brand icons',
      description: 'Pre-wired profile badges with Simple Icons and customizable links.',
      indicator: 'simpleicons.org',
    },
    {
      icon: <MessageSquareQuote size={14} />,
      title: 'Testimonials & endorsements',
      description: 'Clean quote cards displaying peer reviews, client feedback, and roles.',
      indicator: 'Peer Reviews',
    },
  ]

  return (
    <section className="content-section section-wrap" id="features">
      <header className="section-header">
        <h2 className="section-title">
          What you get<span>.</span>
        </h2>
        <p className="section-subtitle">
          Essential features included out of the box in every FolioKit portfolio.
        </p>
      </header>

      <div className="features-list">
        {features.map((feature, index) => (
          <div key={feature.title} className="feature-row">
            <div className="feature-row-main">
              <div className="feature-row-icon" aria-hidden="true">
                {feature.icon}
              </div>
              <div className="feature-row-body">
                <h3 className="feature-row-title">{feature.title}</h3>
                <span className="feature-row-separator" aria-hidden="true">·</span>
                <p className="feature-row-desc">{feature.description}</p>
              </div>
            </div>
            <span className="feature-row-indicator">
              <span style={{ color: 'var(--lime)', opacity: 0.8 }}>#0{index + 1}</span>
              <span style={{ color: 'var(--frame-dot)' }}>/</span>
              <span>{feature.indicator}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
