import { cv } from '../../data/cv'
import styles from './Footer.module.css'

const YEAR = new Date().getFullYear()

export function Footer() {
  const { firstName, lastName } = cv.profile

  return (
    <footer className={styles.footer}>
      <p>
        © {YEAR} {firstName} {lastName} · Built with React & TypeScript
      </p>
      <p>
        Design inspired by{' '}
        <a href="https://pepelsbey.dev/" target="_blank" rel="noreferrer">
          pepelsbey.dev
        </a>
      </p>
    </footer>
  )
}
