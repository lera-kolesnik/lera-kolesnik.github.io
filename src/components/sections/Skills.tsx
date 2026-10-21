import { cv } from '../../data/cv'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'
import { Tag } from '../ui/Tag'
import styles from './Skills.module.css'

export function Skills() {
  return (
    <section id="skills" className="container section">
      <SectionHeading eyebrow="What I work with" title="Skills & tools" count={cv.skills.length} />
      <ul className={styles.grid}>
        {cv.skills.map(({ icon, title, subtitle, items }) => (
          <li key={title} className={styles.card}>
            <Icon name={icon} size={28} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.subtitle}>{subtitle}</p>
            <div className={styles.tags}>
              {items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
