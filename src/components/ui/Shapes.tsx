interface ShapesProps {
  className?: string
}

/** Flat geometric composition for the hero background: circle, half-circle, dot. */
export function Shapes({ className }: ShapesProps) {
  return (
    <svg className={className} viewBox="0 0 420 360" aria-hidden="true">
      <circle cx="270" cy="150" r="120" style={{ fill: 'var(--shape-sky)' }} />
      <path d="M 50 340 A 115 115 0 0 1 280 340 Z" style={{ fill: 'var(--shape-lime)' }} />
      <circle cx="386" cy="44" r="14" style={{ fill: 'var(--coral)' }} />
    </svg>
  )
}
