import Link from 'next/link'
import moment from 'moment'
import styles from './blog.module.css'
import Image from 'next/image'
import { Metadata } from 'next'
import { getAllPosts } from '@/data/posts'

export const metadata: Metadata = {
  title: 'Blog - Muhammad Osama',
  description: '',
}

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className={styles.blogs}>
      <h2>2026</h2>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  )
}

function Post({ post }: any) {
  const { id, image, title, excerpt, date } = post

  return (
    <Link href={`/blog/${id}`} className={styles.post}>
      {/* <div className={styles.image}>
        <Image src={image} height={150} width={150} alt={title} />
      </div> */}
      <div className={styles.details}>
        <div className={styles.date}>{date}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.excerpt}>{excerpt}</div>
      </div>
    </Link>
  )
}
