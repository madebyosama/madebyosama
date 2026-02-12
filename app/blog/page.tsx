import Link from 'next/link'
import { Metadata } from 'next'
import styles from '@/styles/blog.module.css'

export const metadata: Metadata = {
  title: 'Blog - Muhammad Osama',
  description: 'Thoughts, tips, and notes by Muhammad Osama.',
}

const posts = [
  {
    year: '2026',
    items: [{ title: 'Advices', href: '/blog/advices' }],
  },
]

export default function Blog() {
  return (
    <>
      {posts.map((group) => (
        <div key={group.year} className={styles.listing}>
          <h2>{group.year}</h2>
          <ul>
            {group.items.map((post) => (
              <li key={post.href}>
                <Link href={post.href}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
