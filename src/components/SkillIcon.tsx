export type SkillIconId =
  | 'css'
  | 'github'
  | 'linkedin'
  | 'npm'
  | 'react'
  | 'ts'
  | 'vite'

interface SkillIconProps {
  id: SkillIconId
  label?: string
  className?: string
}

export function SkillIcon({ id, label = '', className }: SkillIconProps) {
  return (
    <img
      src={`https://skillicons.dev/icons?i=${id}&theme=dark`}
      alt={label}
      aria-hidden={label ? undefined : true}
      className={['skill-icon-img', className].filter(Boolean).join(' ')}
      loading="lazy"
    />
  )
}
