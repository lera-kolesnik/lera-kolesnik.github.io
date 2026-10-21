import type { Post } from '../types/cv'

/** My LinkedIn activity feed: where cards without their own url point. */
export const LINKEDIN_ACTIVITY = 'https://www.linkedin.com/in/valeriia-kolesnyk/recent-activity/all/'

// To add a new post: put its photo in public/posts/ and add an entry here.
// Order doesn't matter, the section sorts newest first.
export const posts: Post[] = [
  {
    author: 'UCL Chemical Engineering',
    date: '20 May 2026',
    isoDate: '2026-05-20',
    reposted: true,
    tag: 'Graduation',
    text: "A look at today's graduation celebrations at UCL Chemical Engineering. Our MSc and PhD graduates are celebrating this incredible milestone with friends, family, and staff. #UCLGrad #ClassOf2026",
    image: '/posts/ucl-graduation-2026.jpg',
    imageAlt: 'Graduates and staff in academic gowns on a terrace overlooking the Thames',
    reactions: 121,
    comments: 2,
    reposts: 4,
  },
  {
    author: 'UCL Chemical Engineering',
    date: '18 Sep 2025',
    isoDate: '2025-09-18',
    reposted: true,
    tag: 'Community',
    text: 'We recently celebrated our UCL Chemical Engineering MSc students based at UCL East with a farewell gathering to mark the end of the academic year, recognise their hard work, and celebrate their achievements. We wish them every success for the future! #UCLEast #UCLChemEng',
    image: '/posts/ucl-east-farewell-2025.jpg',
    imageAlt: 'Group photo of MSc students and staff at UCL East',
    reactions: 82,
    comments: 1,
    reposts: 5,
  },
  {
    author: 'Vikramjeet Singh',
    authorRole: 'Assistant Professor of Nanoengineering, UCL',
    date: '13 Oct 2024',
    isoDate: '2024-10-13',
    tag: 'Guest lecture',
    text: 'A huge thanks to Mr. Harry Templeman (Summit Medical Group Ltd) for travelling all the way from Gloucester to #UCLEast to deliver a guest lecture to our MSc FMNE students. He enriched our understanding of medical devices manufacturing and sparked meaningful discussions on IP, rapid prototyping and the stages of product development.',
    image: '/posts/guest-lecture-2024.jpg',
    imageAlt: 'MSc students standing with the guest lecturer in a UCL East classroom',
    reactions: 66,
    comments: 0,
    reposts: 4,
  },
]
