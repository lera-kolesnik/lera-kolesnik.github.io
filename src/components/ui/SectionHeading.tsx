import styles from './SectionHeading.module.css'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  /** Small number next to the title, e.g. how many projects */
  count?: number
}

export function SectionHeading({ eyebrow, title, count }: SectionHeadingProps) {
  return (
    <header className={styles.heading}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.title}>
        {title}
        {count !== undefined && <sup className={styles.count}>{count}</sup>}
      </h2>
    </header>
  )
}
