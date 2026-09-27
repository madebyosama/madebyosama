// Everything you might want to change about the site lives here.

// The URL path the blog is served under on madebyosama.com.
export const BASE_PATH = '/blog';

export const SITE = {
  url: `https://madebyosama.com${BASE_PATH}`,
  title: 'madebyosama/blog',
  author: 'Muhammad Osama',
  tagline: 'Notes on design, development and the work around them.',
  description:
    'Muhammad Osama writes about product design, development, marketing, exercise, communication and networking.',
  footerLine: 'Designing, building, writing it down.',
  email: 'hello@madebyosama.com', // TODO: confirm address
  links: {
    home: 'https://madebyosama.com',
    linkedin: 'https://www.linkedin.com/in/madebyosama', // TODO: confirm handle
    x: 'https://x.com/madebyosama', // TODO: confirm handle
  },
};

// Allowed topics. Add one here and it becomes valid in frontmatter
// and gets its own /topics/<slug> page.
export const TOPICS = {
  design: 'Design',
  development: 'Development',
  product: 'Product',
  marketing: 'Marketing',
  fitness: 'Fitness',
  communication: 'Communication',
  networking: 'Networking',
} as const;

export type Topic = keyof typeof TOPICS;
