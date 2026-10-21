import { cv } from '../../data/cv'
import { useActiveSection } from '../../hooks/useActiveSection'
import { ThemeToggle } from '../ui/ThemeToggle'
import styles from './Header.module.css'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'updates', label: 'Updates' },
  { id: 'contact', label: 'Contact' },
]

const SECTION_IDS = NAV.map(({ id }) => id)

export function Header() {
  const { firstName, lastName } = cv.profile
  const initials = firstName[0] + lastName[0]
  const { active, select } = useActiveSection(SECTION_IDS)

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo} aria-label={`${firstName} ${lastName}, back to top`}>
          {initials}
        </a>
        <nav className={styles.nav} aria-label="Sections">
          {NAV.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? 'location' : undefined}
              onClick={() => select(id)}
            >
              {label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
