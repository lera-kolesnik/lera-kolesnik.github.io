import styles from './Tag.module.css'

interface TagProps {
  children: string
  variant?: 'soft' | 'outline'
}

export function Tag({ children, variant = 'soft' }: TagProps) {
  return <span className={`${styles.tag} ${styles[variant]}`}>{children}</span>
}
