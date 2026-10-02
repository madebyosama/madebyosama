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

<ul><li>Throw deep, baby.</li><li>There’s blessing in the breaking.</li><li>To turn your nerves into excitement.</li><li>Cliche as it is, just don’t give up.</li><li>The world won’t always like you, but you can’t count on the world to like you.</li><li>If you are unsure about something, take a moment.</li><li>Embrace the suck.</li><li>Focus on what you can control.</li><li>Take care of your body and mind.</li><li>Surround yourself with positive influences.</li><li>Keep learning and growing.</li><li>Celebrate small wins.</li><li>Stay patient and persistent.</li></ul>
    `,
    image: '/assets/images/cover.jpg',
    date: 'SAT, 25th JAN',
  },
]

// Helper functions
export function getAllPosts(): Post[] {
  return posts
}

export function getPostById(id: string): Post | undefined {
  return posts.find((post) => post.id === id)
}
