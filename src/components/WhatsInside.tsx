import { useState } from 'react'
import {
  Compass,
  User,
  Cpu,
  Layers,
  Briefcase,
  Quote,
  Mail,
} from 'lucide-react'

interface PortfolioSection {
  id: string
  title: string
  icon: typeof Compass
  subtitle: string
  description: string
  tags: string[]
  codePreview: string
}

export function WhatsInside() {
  const sections: PortfolioSection[] = [
    {
      id: 'profile',
      title: 'Hero & Profile Bio',
      icon: User,
      subtitle: 'Headline, bio summary, live IANA clock, and resume trigger.',
      description:
        'Displays your headline, location, and an interactive digital clock synced to your IANA time zone. Includes download support for your PDF resume.',
      tags: ['Live IANA Clock', 'Bio Summary', 'Avatar Image', 'Resume Download'],
      codePreview: `profile: {
  name: 'Your Name',
  headline: 'Full Stack Developer',
  introduction: "Hey, there! I'm a",
  about: 'Developer building products people use...',
  location: 'Delhi, India',
  timeZone: 'Asia/Kolkata', // Real-time digital clock
  timeZoneLabel: 'IST',
  profileImage: '/avatar-placeholder.svg',
  quote: 'Build with curiosity. Share what you learn.'
}`,
    },
    {
      id: 'skills',
      title: 'Technical Skills Grid',
      icon: Cpu,
      subtitle: 'Vector technology badges with custom floating hover tooltips.',
      description:
        'Powered by skillicons.dev and simpleicons.org. Simply supply skill keys like "react", "ts", "tailwind", "nodejs", and FolioKit handles icon rendering and tooltips.',
      tags: ['skillicons.dev', 'simpleicons.org', 'Categorized', 'Hover Tooltips'],
      codePreview: `skills: [
  { name: 'React', icon: 'react', category: 'Frontend' },
  { name: 'TypeScript', icon: 'ts', category: 'Frontend' },
  { name: 'Node.js', icon: 'nodejs', category: 'Backend' },
  { name: 'PostgreSQL', icon: 'postgres', category: 'Backend' },
  { name: 'Git', icon: 'git', category: 'Tools' }
]`,
    },
    {
      id: 'projects',
      title: '3D Magazine Carousel & Projects',
      icon: Layers,
      subtitle: 'Perspective cover gallery with mouse-tilt and swipe gestures.',
      description:
        'Projects flagged with "featured: true" render in a custom 3D perspective gallery with mouse tilt and touch swipes. All projects render in a clean grid with live demo and GitHub links.',
      tags: ['3D CSS Perspective', 'Mouse Tilt', 'Touch Swipe', 'Live Demo Badges'],
      codePreview: `projects: [
  {
    name: 'Project One',
    category: 'WEB APPLICATION',
    description: 'A high-performance modern web app.',
    image: '/project-placeholder.svg',
    technologies: [{ name: 'React', icon: 'react' }],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    featured: true // Highlights in 3D carousel
  }
]`,
    },
    {
      id: 'experience',
      title: 'Work Experience & Education',
      icon: Briefcase,
      subtitle: 'Chronological timeline of career milestones and academic degrees.',
      description:
        'Structured cards detailing roles, organizations, timelines, contributions, and outbound verification links.',
      tags: ['Milestone Cards', 'Outbound Links', 'Degree History', 'Timeline'],
      codePreview: `experience: [
  {
    title: 'Software Engineer',
    organization: 'Acme Corp',
    date: '2024 — Present',
    description: 'Built scalable backend microservices and UI design systems.'
  }
]`,
    },
    {
      id: 'testimonials',
      title: 'Testimonials Wall',
      icon: Quote,
      subtitle: 'Peer recommendations, mentor endorsements, and client quotes.',
      description:
        'Showcases endorsements from colleagues and clients with avatar portraits, titles, and company affiliations.',
      tags: ['Peer Reviews', 'Company Badges', 'Client Quotes'],
      codePreview: `testimonials: [
  {
    name: 'Jane Doe',
    role: 'Lead Architect at TechFlow',
    message: 'An outstanding engineer with razor-sharp attention to detail.'
  }
]`,
    },
    {
      id: 'contact',
      title: 'Contact Panel & Social Links',
      icon: Mail,
      subtitle: 'Direct email draft form and branded social network buttons.',
      description:
        'Pre-wired contact panel that opens your visitor’s native email client with pre-filled message data, paired with customizable social icons.',
      tags: ['Native mailto Draft', 'Social Grid', 'Brand Colors', 'No Backend Needed'],
      codePreview: `contact: {
  email: 'hello@example.com'
},
socialIcons: [
  { label: 'GitHub', icon: 'github', url: 'https://github.com/...' },
  { label: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/...' }
]`,
    },
  ]

  const [activeSectionId, setActiveSectionId] = useState(sections[0].id)
  const activeSection = sections.find((s) => s.id === activeSectionId) || sections[0]
  const ActiveIcon = activeSection.icon

  return (
    <section className="content-section section-wrap" id="inside">
      <header className="section-header">
        <h2 className="section-title">
          Everything you need. Nothing you don't<span>.</span>
        </h2>
        <p className="section-subtitle">
          Explore the exact sections generated in every FolioKit portfolio, configured cleanly via data.ts.
        </p>
      </header>

      {/* Interactive Section Inspector */}
      <div className="inside-container">
        {/* Navigation / Selector list */}
        <div className="inside-nav" role="tablist" aria-label="Portfolio sections">
          {sections.map((sec, idx) => {
            const Icon = sec.icon
            const isActive = sec.id === activeSectionId
            return (
              <button
                key={sec.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`inside-tab-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveSectionId(sec.id)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Icon size={14} style={{ color: isActive ? 'var(--lime)' : 'var(--muted)' }} />
                  <span>{sec.title}</span>
                </div>
                <span className="tab-num">0{idx + 1}</span>
              </button>
            )
          })}
        </div>

        {/* Preview & Details panel */}
        <div className="inside-preview-panel">
          <div>
            <div className="preview-badge-row">
              <span className="preview-badge">
                <ActiveIcon size={12} />
                <span>Template Section</span>
              </span>
              <span style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--mono-font)' }}>
                data.ts configuration
              </span>
            </div>

            <h3 className="preview-title">{activeSection.title}</h3>
            <p className="preview-description">{activeSection.description}</p>

            <div className="preview-tags-row">
              {activeSection.tags.map((tag) => (
                <span key={tag} className="preview-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <pre className="preview-code-block">
            <code>{activeSection.codePreview}</code>
          </pre>
        </div>
      </div>

      {/* Clean File Tree Breakdown */}
      <div className="tree-container" id="architecture">
        <h3 className="tree-title">
          Generated Project Architecture
        </h3>
        <p style={{ margin: '0 0 10px', fontSize: '11px', color: 'var(--muted)', fontFamily: 'var(--body-font)' }}>
          Every FolioKit scaffold follows a disciplined, lean directory layout:
        </p>
        <ul className="tree-list">
          <li>├── <span className="highlight-file">data.ts</span> <span style={{ color: 'var(--text-muted)' }}># Central content configuration (edit this!)</span></li>
          <li>├── index.html <span style={{ color: 'var(--text-muted)' }}># Fast HTML entry point with metadata injection</span></li>
          <li>├── package.json <span style={{ color: 'var(--text-muted)' }}># React 19 + TypeScript + Vite scripts</span></li>
          <li>├── vite.config.ts <span style={{ color: 'var(--text-muted)' }}># Bundler setup with automated SEO generation</span></li>
          <li>├── public/ <span style={{ color: 'var(--text-muted)' }}># Avatars, placeholders, and static assets</span></li>
          <li>├── scripts/generate-seo.mjs <span style={{ color: 'var(--text-muted)' }}># Automated sitemap, robots.txt, and metadata script</span></li>
          <li>└── src/</li>
          <li style={{ paddingLeft: '16px' }}>├── App.tsx <span style={{ color: 'var(--text-muted)' }}># Portfolio layout and section renderers</span></li>
          <li style={{ paddingLeft: '16px' }}>├── ProjectMagazineGallery.tsx <span style={{ color: 'var(--text-muted)' }}># 3D perspective carousel</span></li>
          <li style={{ paddingLeft: '16px' }}>├── BrandIcon.tsx <span style={{ color: 'var(--text-muted)' }}># Vector brand logo helper with fallbacks</span></li>
          <li style={{ paddingLeft: '16px' }}>└── styles.css <span style={{ color: 'var(--text-muted)' }}># Dark obsidian theme &amp; responsive styling</span></li>
        </ul>
      </div>
    </section>
  )
}
