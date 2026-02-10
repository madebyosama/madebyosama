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
    title: 'Clock',
    description: 'A minimal clock app',
    url: 'https://clock.madebyosama.com',
    link: 'clock.madebyosama.com',
  },
  {
    title: 'Icons',
    description: 'Icon library for projects',
    url: 'https://icons.madebyosama.com',
    link: 'icons.madebyosama.com',
  },
  {
    title: 'Bookmarks',
    description: 'Curated bookmarks collection',
    url: 'https://bookmarks.madebyosama.com',
    link: 'bookmarks.madebyosama.com',
  },
]

const tools = [
  {
    title: 'Merge My PDFs',
    description: 'Merge PDF files online',
    url: 'https://mergemypdfs.com',
    link: 'mergemypdfs.com',
  },
  {
    title: 'Figma',
    description: 'UI/UX design tool',
    url: 'https://figma.com',
    link: 'figma.com',
  },
]

const apps = [
  {
    title: 'Google Keep',
    description: 'Quick notes & lists',
  },
  {
    title: 'Google Tasks',
    description: 'Task management',
  },
  {
    title: 'Google Calendar',
    description: 'Scheduling & reminders',
  },
  {
    title: 'Notion',
    description: 'All-in-one workspace',
  },
]

const technologies = [
  {
    title: 'Next.js',
    description: 'React framework for production',
  },
  {
    title: 'JavaScript',
    description: 'Core programming language',
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
        <div className={styles.sectionHeader}>
          <svg
            width='22'
            height='22'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42'
              stroke='var(--foreground-color)'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <h2 className={styles.sectionTitle}>Side Projects</h2>
        </div>
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
                <div className={styles.cardLink}>{project.link}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <svg
            width='22'
            height='22'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437'
              stroke='var(--foreground-color)'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <h2 className={styles.sectionTitle}>Tools</h2>
        </div>
        <div className={styles.grid}>
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.url}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.card}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>
                  {tool.title}
                  <span className={styles.arrow}>
                    <ArrowIcon />
                  </span>
                </div>
                <div className={styles.cardDescription}>{tool.description}</div>
                <div className={styles.cardLink}>{tool.link}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Apps */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <svg
            width='22'
            height='22'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-6 18.75h6'
              stroke='var(--foreground-color)'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <h2 className={styles.sectionTitle}>Apps</h2>
        </div>
        <div className={styles.grid}>
          {apps.map((app, index) => (
            <div
              key={index}
              className={styles.card}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>{app.title}</div>
                <div className={styles.cardDescription}>{app.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <svg
            width='22'
            height='22'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5'
              stroke='var(--foreground-color)'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <h2 className={styles.sectionTitle}>Technologies</h2>
        </div>
        <div className={styles.grid}>
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={styles.card}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>{tech.title}</div>
                <div className={styles.cardDescription}>{tech.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
