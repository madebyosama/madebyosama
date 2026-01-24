export interface Post {
  id: string
  title: string
  excerpt: string
  description: string
  image: string
  updated_at: string
}

export const posts: Post[] = [
  {
    id: 'quotes',
    title: 'Quotes',
    excerpt:
      'Life can be hard, but if you follow these steps, it can be super easy.',
    description: `

<ul>
<li>Embrace the suck.</li>
<li>Focus on what you can control.</li>
<li>Take care of your body and mind.</li>
<li>Surround yourself with positive influences.</li>
<li>Keep learning and growing.</li>
<li>Celebrate small wins.</li>
<li>Stay patient and persistent.</li>
</ul>
    `,
    image: '/assets/images/cover.jpg',
    updated_at: '2023-12-15T10:00:00Z',
  },
  {
    id: 'quotes2',
    title: 'Quotes',
    excerpt:
      'Life can be hard, but if you follow these steps, it can be super easy.',
    description: `

<ul>
<li>Embrace the suck.</li>
<li>Focus on what you can control.</li>
<li>Take care of your body and mind.</li>
<li>Surround yourself with positive influences.</li>
<li>Keep learning and growing.</li>
<li>Celebrate small wins.</li>
<li>Stay patient and persistent.</li>
</ul>
    `,
    image: '/assets/images/cover.jpg',
    updated_at: '2023-12-15T10:00:00Z',
  },
]

// Helper functions
export function getAllPosts(): Post[] {
  return posts.sort(
    (a, b) =>
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  )
}

export function getPostById(id: string): Post | undefined {
  return posts.find((post) => post.id === id)
}
