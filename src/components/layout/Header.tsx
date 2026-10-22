import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
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
  // Only used on phones, where the links live in a dropdown
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo} aria-label={`${firstName} ${lastName}, back to top`}>
          {initials}
        </a>
        <nav id="site-nav" className={styles.nav} data-open={menuOpen} aria-label="Sections">
          {NAV.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? 'location' : undefined}
              onClick={() => {
                select(id)
                setMenuOpen(false)
              }}
            >
              {label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          Menu
        </button>
      </div>
    </header>
  )
}
