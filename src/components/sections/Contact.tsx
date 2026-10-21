import { cv } from '../../data/cv'
import styles from './Contact.module.css'

export function Contact() {
  const { heading, text, email, links } = cv.contact

  return (
    <section id="contact" className={styles.contact}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>Say hello</p>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.text}>{text}</p>
        <div className={styles.actions}>
          <a href={`mailto:${email}`} className={`${styles.button} ${styles.primary}`}>
            Email me
          </a>
          {links.map(({ label, href }) => (
            <a key={href} href={href} className={styles.button} target="_blank" rel="noreferrer">
              {label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
