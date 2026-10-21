// Shapes of all the content on the site. Components only render these,
// so changing the site's text means editing src/data/cv.ts, not components.

export type Accent = 'coral' | 'lime' | 'sky'

export type IconName =
  | 'location'
  | 'education'
  | 'work'
  | 'learning'
  | 'certificate'
  | 'languages'
  | 'code'
  | 'devices'
  | 'database'
  | 'ml'
  | 'automation'
  | 'process'
  | 'team'

export interface Link {
  label: string
  href: string
}

export interface Profile {
  firstName: string
  lastName: string
  role: string
  /** One sentence shown large in the hero, next to the photo. */
  tagline: string
  intro: string
  /** Path inside /public, e.g. "/photo.jpg". Without it the hero shows initials. */
  photo?: string
  /** Path inside /public to a downloadable CV. */
  cvFile?: string
}

export interface InfoItem {
  icon: IconName
  label: string
  lines: string[]
}

export interface About {
  paragraphs: string[]
  info: InfoItem[]
}

export interface SkillGroup {
  icon: IconName
  title: string
  subtitle: string
  items: string[]
}

export interface Project {
  title: string
  category: string
  period: string
  description: string
  tags: string[]
  accent: Accent
  link?: Link
}

export interface Job {
  role: string
  company: string
  location: string
  period: string
  highlights: string[]
}

export interface Contact {
  heading: string
  text: string
  email: string
  links: Link[]
}

export interface CV {
  profile: Profile
  about: About
  skills: SkillGroup[]
  projects: Project[]
  experience: Job[]
  contact: Contact
}

export interface Post {
  author: string
  /** Shown under the author's name, e.g. their job title */
  authorRole?: string
  /** Display date, e.g. "20 May 2026" */
  date: string
  /** Same date as YYYY-MM-DD, used for <time> and sorting */
  isoDate: string
  /** True when it's someone else's post that I reposted */
  reposted?: boolean
  tag: string
  text: string
  /** Path inside /public */
  image: string
  imageAlt: string
  reactions: number
  comments: number
  reposts: number
  /** Link to the post itself; without it the card links to my LinkedIn activity */
  url?: string
}
