import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getAllPosts, getPostById } from '@/data/posts'
import styles from './page.module.css'

// Generate all post pages at build time
export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    id: post.id,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const post = getPostById(id)

  return {
    title: post?.title ? `${post.title} - Muhammad Osama` : 'Blog Post',
    description: post?.excerpt || '',
  }
}

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const post = getPostById(id)

  if (!post) {
    notFound()
  }

  return (
    <div className={styles.post}>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.description }} />
    </div>
  )
}
