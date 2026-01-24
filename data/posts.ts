export interface Post {
  id: string
  title: string
  excerpt: string
  description: string
  image: string
  date: string
}

export const posts: Post[] = [
  {
    id: 'advices',
    title: 'Advices',
    excerpt:
      'Life can be hard, but if you follow these steps, it can be super easy.',
    description: `

<ul><li>Embrace the suck.<li>Focus on what you can control.<li>Take care of your body and mind.<li>Surround yourself with positive influences.<li>Keep learning and growing.<li>Celebrate small wins.<li>Stay patient and persistent.</ul>
    `,
    image: '/assets/images/cover.jpg',
    date: 'SAT, 24th JAN',
  },
]

// Helper functions
export function getAllPosts(): Post[] {
  return posts
}

export function getPostById(id: string): Post | undefined {
  return posts.find((post) => post.id === id)
}
