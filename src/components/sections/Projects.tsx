import { cv } from '../../data/cv'
import { SectionHeading } from '../ui/SectionHeading'
import { Tag } from '../ui/Tag'
import styles from './Projects.module.css'

export function Projects() {
  return (
    <section id="projects" className="container section">
      <SectionHeading eyebrow="Things I have built" title="Projects" count={cv.projects.length} />
      <ul className={styles.grid}>
        {cv.projects.map(({ title, category, period, description, tags, accent, link }) => (
          <li key={title} className={`${styles.card} ${styles[accent]}`}>
            <div className={styles.meta}>
              <Tag variant="outline">{category}</Tag>
              <span>{period}</span>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.tags}>
              {tags.map((tag) => (
                <Tag key={tag} variant="outline">
                  {tag}
                </Tag>
              ))}
            </div>
            {link && (
              <a
                href={link.href}
                className={styles.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title} on ${link.label}`}
              >
                {link.label} ↗
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
