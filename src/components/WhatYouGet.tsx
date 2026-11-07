import {
  Terminal,
  FileCode,
  Layers,
  Cpu,
  Share2,
  MessageSquareQuote,
} from 'lucide-react'

export function WhatYouGet() {
  const features = [
    {
      icon: <Terminal size={18} />,
      title: 'One-command setup',
      description: 'Scaffold and install everything with a single npx command.',
    },
    {
      icon: <FileCode size={18} />,
      title: 'Customization via data.ts',
      description: 'Update your bio, skills, projects, and links without touching UI code.',
    },
    {
      icon: <Layers size={18} />,
      title: 'Projects showcase',
      description: 'Featured projects in an interactive 3D magazine carousel with live links.',
    },
    {
      icon: <Cpu size={18} />,
      title: 'Technical skills',
      description: 'Crisp vector technology badges automatically integrated with hover tooltips.',
    },
    {
      icon: <Share2 size={18} />,
      title: 'Social media icons',
      description: 'Branded profile links with custom colors and direct platform URLs.',
    },
    {
      icon: <MessageSquareQuote size={18} />,
      title: 'Testimonials section',
      description: 'Structured quote cards to showcase peer endorsements and recommendations.',
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

      <div className="features-minimal-list">
        {features.map((feature) => (
          <div key={feature.title} className="features-minimal-row">
            <div className="features-minimal-icon-box" aria-hidden="true">
              {feature.icon}
            </div>
            <div className="features-minimal-content">
              <h3 className="features-minimal-title">{feature.title}</h3>
              <p className="features-minimal-desc">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
