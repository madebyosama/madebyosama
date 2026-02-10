import { Metadata } from 'next'
import Title from '@/components/Title/Title'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Resources - Muhammad Osama',
  description:
    'Side projects, tools, apps & technologies I use on a daily basis.',
}

const sideProjects = [
  {
    title: 'Bookmarks',
    description: 'Curated bookmarks collection',
    url: 'https://bookmarks.madebyosama.com',
    link: 'bookmarks.madebyosama.com',
  },
  {
    title: 'Colors',
    description: 'Colors for projects',
    url: 'https://colors.madebyosama.com',
    link: 'colors.madebyosama.com',
  },
  {
    title: 'Icons',
    description: 'Icon library for projects',
    url: 'https://icons.madebyosama.com',
    link: 'icons.madebyosama.com',
  },

  {
    title: 'Links',
    description: 'Websites for daily use.',
    url: 'https://links.madebyosama.com',
    link: 'links.madebyosama.com',
  },
  {
    title: 'Clock',
    description: 'A minimal clock app',
    url: 'https://clock.madebyosama.com',
    link: 'clock.madebyosama.com',
  },
]

function ArrowIcon() {
  return (
    <svg
      width='14'
      height='14'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7 17L17 7M17 7H7M17 7V17'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default function Resources() {
  return (
    <div className={styles.resources} id='resources'>
      <Title
        sub=''
        title='Resources'
        description='Side projects, tools, apps & technologies I use daily.'
      />

      {/* Side Projects */}
      <div className={styles.section}>
        <div className={styles.grid}>
          {sideProjects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.card}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>
                  {project.title}
                  <span className={styles.arrow}>
                    <ArrowIcon />
                  </span>
                </div>
                <div className={styles.cardDescription}>
                  {project.description}
                </div>
                {/* <div className={styles.cardLink}>{project.link}</div> */}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
