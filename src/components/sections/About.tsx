import { cv } from '../../data/cv'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'
import styles from './About.module.css'

export function About() {
  const { paragraphs, info } = cv.about

  return (
    <section id="about" className="container section">
      <SectionHeading eyebrow="About me" title="A bit about me" />
      <div className={styles.grid}>
        <div className={styles.story}>
          {paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
        <dl className={styles.info}>
          {info.map(({ icon, label, lines }) => (
            <div key={label} className={styles.item}>
              <Icon name={icon} className={styles.icon} size={26} />
              <div>
                <dt className={styles.label}>{label}</dt>
                {lines.map((line) => (
                  <dd key={line} className={styles.line}>
                    {line}
                  </dd>
                ))}
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
