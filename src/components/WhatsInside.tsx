import type { ReactNode } from 'react'
import { LucideIcon } from './Icons'
import { SkillIcon, type SkillIconId } from './SkillIcon'
import { FlaticonIcon } from './FlaticonIcon'

interface FeatureItem {
  icon: ReactNode
  title: string
  description: string
}

interface TechStackItem {
  name: string
  version?: string
  icon?: typeof LucideIcon
  skillId?: SkillIconId
  tagline: string
}

export function WhatsInside() {
  const features: FeatureItem[] = [
    {
      icon: <FlaticonIcon name="user-tag" />,
      title: 'Ready-to-use portfolio',
      description: 'A complete developer profile with bio, headline, local time, and resume support.',
    },
    {
      icon: <FlaticonIcon name="briefcase" />,
      title: 'Project showcase',
      description: 'Present featured projects with demo and repository links in an interactive gallery.',
    },
    {
      icon: <FlaticonIcon name="code-simple" />,
      title: 'Skills and technologies',
      description: 'Group your skills with familiar technology icons and helpful labels.',
    },
    {
      icon: <FlaticonIcon name="share" />,
      title: 'Contact and social profiles',
      description: 'Share your professional profiles and make it easy to get in touch.',
    },
    {
      icon: <FlaticonIcon name="user-speaking" />,
      title: 'Testimonials',
      description: 'Show recommendations and feedback from colleagues, clients, or mentors.',
    },
    {
      icon: <FlaticonIcon name="graduation-cap" />,
      title: 'Experience and education',
      description: 'Present your career history and education in a clear timeline.',
    },
  ]

  const technologies: TechStackItem[] = [
    { name: 'React', version: '19', skillId: 'react', tagline: 'UI framework used by the generated portfolio' },
    { name: 'TypeScript', skillId: 'ts', tagline: 'Language used by the generated portfolio' },
    { name: 'Vite', version: '8', skillId: 'vite', tagline: 'Bundler and development server' },
    { name: 'Lucide React', icon: LucideIcon, tagline: 'Icon library used by the generated portfolio' },
    { name: 'Simple Icons', icon: SimpleIconsMark, tagline: 'Technology and brand icons used in the portfolio' },
    { name: 'Native CSS', skillId: 'css', tagline: 'CSS Grid, Flexbox, variables, and transforms' },
  ]

  return (
    <>
      <section className="content-section section-wrap everything-section" id="inside">
        <header className="section-header">
          <h2 className="section-title">
            Everything You Need<span>.</span>
          </h2>
          <p className="section-subtitle">
            A complete set of sections for telling your professional story.
          </p>
        </header>

        <div className="everything-grid">
          {features.map((item) => {
            return (
              <div key={item.title} className="everything-grid-cell">
                <div className="everything-icon-box" aria-hidden="true">
                  {item.icon}
                </div>
                <div className="everything-cell-content">
                  <h3 className="everything-cell-title">{item.title}</h3>
                  <p className="everything-cell-desc">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="content-section section-wrap built-on-section" aria-labelledby="built-on-title">
        <div className="built-on-bar">
          <div className="built-on-label-wrap">
            <span className="built-on-label" id="built-on-title">Built on</span>
          </div>
          <div className="built-on-chips-row">
            {technologies.map((tech) => {
              const Icon = tech.icon
              return (
                <div key={tech.name} className="built-on-chip" title={tech.tagline}>
                  {tech.skillId ? (
                    <SkillIcon id={tech.skillId} className="built-on-icon built-on-skill-icon" />
                  ) : Icon ? (
                    <Icon size={13} className="built-on-icon" />
                  ) : null}
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
    </>
  )
}

function SimpleIconsMark({ className, size = 14 }: { className?: string; size?: number }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Simple Icons"
    >
      <path d="M4 4h16v4H8v2h12v10H4v-4h12v-2H4z" />
    </svg>
  )
}
