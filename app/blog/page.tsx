import Link from 'next/link'
import { Metadata } from 'next'
import styles from '@/styles/blog.module.css'

export const metadata: Metadata = {
  title: 'Blog - Muhammad Osama',
  description: 'Thoughts, tips, and notes by Muhammad Osama.',
}

const posts = [
  {
    category: 'Life',
    items: [
      { title: 'Watchlist', href: '/blog/life/watchlist' },
      {
        title: '9 Dimensions of Health',
        href: '/blog/life/9-health-dimensions',
      },
      {
        title: 'Life advices',
        href: '/blog/life/advices',
      },
      {
        title: 'Something to do',
        href: '/blog/life/something-to-do',
      },
      { title: 'Github Commits', href: '/blog/tech/github-commits' },
    ],
  },
]

export default function Blog() {
  return (
    <>
      {posts.map((group, index) => (
        <div key={index} className={styles.listing}>
          {/* <h2>{group.category}</h2> */}

          <ul>
            {group.items.map((post) => (
              <li key={post.href}>
                <Link className={styles.postLink} href={post.href}>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
