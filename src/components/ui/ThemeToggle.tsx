import { useTheme, type Theme } from '../../hooks/useTheme'
import styles from './ThemeToggle.module.css'

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
    </svg>
  )
}

const OPTIONS: { value: Theme; label: string; Icon: typeof SunIcon }[] = [
  { value: 'light', label: 'Light', Icon: SunIcon },
  { value: 'dark', label: 'Dark', Icon: MoonIcon },
]

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className={styles.toggle} data-active={theme} role="group" aria-label="Colour theme">
      {/* Sliding background that sits behind the active option */}
      <span className={styles.thumb} aria-hidden="true" />
      {OPTIONS.map(({ value, label, Icon }) => (
        <button
          key={value}
          type="button"
          className={styles.option}
          aria-pressed={theme === value}
          onClick={() => setTheme(value)}
        >
          <Icon />
          <span className={styles.label}>{label}</span>
        </button>
      ))}
    </div>
  )
}
