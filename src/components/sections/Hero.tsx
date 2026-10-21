import { cv } from '../../data/cv'
import { Shapes } from '../ui/Shapes'
import styles from './Hero.module.css'

export function Hero() {
  const { firstName, lastName, role, tagline, intro, photo, cvFile } = cv.profile

  return (
    <section id="top" className={`container ${styles.hero}`}>
      <div className={styles.dots} aria-hidden="true" />
      <Shapes className={styles.shapes} />

      <p className={styles.hello}>Hi, my name is</p>
      <h1 className={styles.name}>
        <span>{firstName}</span> <span>{lastName}</span>
      </h1>

      <div className={styles.intro}>
        <div className={styles.photoCard}>
          {photo ? (
            <img src={photo} alt={`${firstName} ${lastName}`} className={styles.photo} />
          ) : (
            <span className={styles.initials} aria-hidden="true">
              {firstName[0]}
              {lastName[0]}
            </span>
          )}
        </div>
        <p className={styles.tagline}>{tagline}</p>
      </div>

      <div className={styles.bottom}>
        <p className={styles.role}>{role}</p>
        <p className={styles.text}>{intro}</p>
        <div className={styles.actions}>
          <a href="#projects" className={`${styles.button} ${styles.primary}`}>
            See my work ↓
          </a>
          <a href="#contact" className={styles.button}>
            Get in touch
          </a>
          {cvFile && (
            <a href={cvFile} className={styles.button} download>
              Download CV
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
