import {
  UserCheck,
  Sliders,
  Layers,
  Cpu,
  Share2,
  MessageSquareQuote,
  Briefcase,
  MonitorSmartphone,
} from 'lucide-react'
import {
  ReactIcon,
  TypeScriptIcon,
  ViteIcon,
  NodeIcon,
  LucideIcon,
  CssIcon,
} from './Icons'

interface FeatureItem {
  icon: typeof UserCheck
  title: string
  description: string
}

interface TechStackItem {
  name: string
  version?: string
  icon: typeof ReactIcon
  tagline: string
}

export function WhatsInside() {
  const features: FeatureItem[] = [
    {
      icon: UserCheck,
      title: 'Ready-to-use portfolio',
      description:
        'Complete developer profile pre-configured with bio summary, headline, real-time IANA clock, and resume trigger.',
    },
    {
      icon: Sliders,
      title: 'Customization via data.ts',
      description:
        'Single central configuration file to update your personal details, links, and content without touching React code.',
    },
    {
      icon: Layers,
      title: 'Projects showcase',
      description:
        'Interactive project showcase supporting live demo badges, repository links, and an optional 3D magazine perspective.',
    },
    {
      icon: Cpu,
      title: 'Technical skills grid',
      description:
        'Categorized technology badges powered by skillicons.dev with built-in floating hover tooltips.',
    },
    {
      icon: Share2,
      title: 'Social media & contact',
      description:
        'Pre-wired branded profiles for GitHub, LinkedIn, X, and Instagram, paired with direct native email drafting.',
    },
    {
      icon: MessageSquareQuote,
      title: 'Testimonials wall',
      description:
        'Structured recommendation cards to highlight peer endorsements, client reviews, and mentor recommendations.',
    },
    {
      icon: Briefcase,
      title: 'Career & education',
      description:
        'Chronological timeline detailing employment milestones, organizations, key responsibilities, and academic degrees.',
    },
    {
      icon: MonitorSmartphone,
      title: 'Responsive portfolio layout',
      description:
        'Fluid mobile-first architecture engineered to read cleanly on smartphones, tablets, and wide desktop displays.',
    },
  ]

  const technologies: TechStackItem[] = [
    { name: 'React 19', icon: ReactIcon, tagline: 'Modern React with fast component rendering' },
    { name: 'TypeScript', icon: TypeScriptIcon, tagline: 'Strict typing and autocomplete in data.ts' },
    { name: 'Vite', icon: ViteIcon, tagline: 'Instant HMR and optimized production bundles' },
    { name: 'Lucide Icons', icon: LucideIcon, tagline: 'Consistent, clean vector iconography' },
    { name: 'Node.js', version: '>=22', icon: NodeIcon, tagline: 'Fast automated SEO & sitemap script execution' },
    { name: 'Modern CSS', icon: CssIcon, tagline: 'Native CSS tokens and 3D perspective gallery styling' },
  ]

  return (
    <section className="content-section section-wrap" id="inside">
      {/* Section Header */}
      <header className="section-header">
        <h2 className="section-title">
          Everything you need<span>.</span>
        </h2>
        <p className="section-subtitle">
          Essential features included out of the box in every FolioKit portfolio, configured cleanly via data.ts.
        </p>
      </header>

      {/* Compact Structured Grid */}
      <div className="everything-grid dotted-frame">
        {features.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.title} className="everything-grid-cell">
              <div className="everything-icon-box" aria-hidden="true">
                <Icon size={16} />
              </div>
              <div className="everything-cell-content">
                <h3 className="everything-cell-title">{item.title}</h3>
                <p className="everything-cell-desc">{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Understated "Built on" Subsection */}
      <div className="built-on-bar">
        <div className="built-on-label-wrap">
          <span className="built-on-label">Built on</span>
        </div>
        <div className="built-on-chips-row">
          {technologies.map((tech) => {
            const Icon = tech.icon
            return (
              <div key={tech.name} className="built-on-chip" title={tech.tagline}>
                <Icon size={13} className="built-on-icon" />
                <span className="built-on-name">{tech.name}</span>
                {tech.version && (
                  <span className="built-on-version">{tech.version}</span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
