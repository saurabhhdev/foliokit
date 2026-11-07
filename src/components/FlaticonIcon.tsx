interface FlaticonIconProps {
  name: string
  className?: string
}

export function FlaticonIcon({ name, className }: FlaticonIconProps) {
  return (
    <i
      className={['fi', `fi-rr-${name}`, 'flaticon-icon', className].filter(Boolean).join(' ')}
      aria-hidden="true"
    />
  )
}
