import { MessageCircle, Repeat2, ThumbsUp, type LucideIcon } from 'lucide-react'
import { LINKEDIN_ACTIVITY, posts } from '../../data/posts'
import type { Post } from '../../types/cv'
import { SectionHeading } from '../ui/SectionHeading'
import { Tag } from '../ui/Tag'
import styles from './Updates.module.css'

const newestFirst = [...posts].sort((a, b) => b.isoDate.localeCompare(a.isoDate))

function initials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
}

function Stat({ icon: Icon, value, label }: { icon: LucideIcon; value: number; label: string }) {
  return (
    <span className={styles.stat} aria-label={`${value} ${label}`}>
      <Icon size={18} strokeWidth={1.75} color="var(--icon)" aria-hidden="true" />
      <span aria-hidden="true">{value}</span>
    </span>
  )
}

function PostCard({ post }: { post: Post }) {
  const { author, authorRole, date, isoDate, reposted, tag, text, image, imageAlt, reactions, comments, reposts, url } =
    post

  return (
    <li className={styles.card}>
      <img src={image} alt={imageAlt} className={styles.image} loading="lazy" />

      {reposted && (
        <p className={styles.reposted}>
          <Repeat2 size={16} strokeWidth={1.75} color="var(--icon)" aria-hidden="true" />
          Reposted by me
        </p>
      )}

      <div className={styles.author}>
        <span className={styles.avatar} aria-hidden="true">
          {initials(author)}
        </span>
        <div>
          <p className={styles.name}>{author}</p>
          <p className={styles.meta}>
            {authorRole && <>{authorRole} · </>}
            <time dateTime={isoDate}>{date}</time>
          </p>
        </div>
      </div>

      <div className={styles.tagRow}>
        <Tag>{tag}</Tag>
      </div>
      <p className={styles.text}>{text}</p>

      <footer className={styles.footer}>
        <div className={styles.stats}>
          <Stat icon={ThumbsUp} value={reactions} label="reactions" />
          <Stat icon={MessageCircle} value={comments} label="comments" />
          <Stat icon={Repeat2} value={reposts} label="reposts" />
        </div>
        <a href={url ?? LINKEDIN_ACTIVITY} className={styles.link} target="_blank" rel="noreferrer">
          Read on LinkedIn ↗
        </a>
      </footer>
    </li>
  )
}

export function Updates() {
  return (
    <section id="updates" className="container section">
      <SectionHeading eyebrow="From my LinkedIn" title="Updates" count={posts.length} />
      <ul className={styles.grid}>
        {newestFirst.map((post) => (
          <PostCard key={post.isoDate + post.author} post={post} />
        ))}
      </ul>
      <a href={LINKEDIN_ACTIVITY} className={styles.all} target="_blank" rel="noreferrer">
        See all activity on LinkedIn →
      </a>
    </section>
  )
}
