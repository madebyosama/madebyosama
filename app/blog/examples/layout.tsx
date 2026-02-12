import styles from '@/styles/blog.module.css'

export default function NewsletterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={styles.content}>{children}</div>
}
