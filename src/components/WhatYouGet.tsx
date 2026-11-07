import { FlaticonIcon } from './FlaticonIcon'

export function WhatYouGet() {
  const features = [
    {
      icon: <FlaticonIcon name="file-code" />,
      title: 'TypeScript Ready',
      description: 'Built with TypeScript for a structured, maintainable experience.',
    },
    {
      icon: <FlaticonIcon name="computer" />,
      title: 'Fully Responsive',
      description: 'Adapts smoothly to mobile, tablet, and desktop.',
    },
    {
      icon: <FlaticonIcon name="layout-fluid" />,
      title: 'Modern & Minimal Design',
      description: 'A clean layout focused on readability and simplicity.',
    },
    {
      icon: <FlaticonIcon name="settings-sliders" />,
      title: 'Easy Customization',
      description: 'Personalize your portfolio through a simple data.ts file.',
    },
    {
      icon: <FlaticonIcon name="pencil" />,
      title: 'Ready to Customize',
      description: 'Start with a working structure and make it your own.',
    },
    {
      icon: <FlaticonIcon name="laptop-code" />,
      title: 'Developer Focused',
      description: 'A simple way to showcase your work and online presence.',
    },
  ]

  return (
    <section className="content-section section-wrap" id="features">
      <header className="section-header">
        <h2 className="section-title">
          What You Get<span>.</span>
        </h2>
        <p className="section-subtitle">
          The benefits that make FolioKit a simple foundation for your portfolio.
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
