import { cv } from '../../data/cv'
import { SectionHeading } from '../ui/SectionHeading'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <section id="experience" className="container section">
      <SectionHeading eyebrow="Where I have worked" title="Experience" count={cv.experience.length} />
      <ol className={styles.timeline}>
        {cv.experience.map(({ role, company, location, period, highlights }) => (
          <li key={company + role} className={styles.job}>
            <p className={styles.period}>{period}</p>
            <h3 className={styles.role}>{role}</h3>
            <p className={styles.company}>
              {company} <span className={styles.location}>· {location}</span>
            </p>
            <ul className={styles.highlights}>
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
