'use client';

import { useState } from 'react';
import styles from './page.module.css';

type LinkItem = {
  title: string;
  url: string;
};

const initialLinks: LinkItem[] = [
  { title: 'Fiverr', url: 'https://www.fiverr.com/madebyosama' },
  { title: 'Upwork', url: 'https://www.upwork.com/nx/find-work/best-matches' },
  { title: 'Contra', url: 'https://contra.com/independent/home' },
  { title: 'Zoom', url: 'https://app.zoom.us/wc/3988095546/start' },
  { title: 'Meet', url: 'https://meet.google.com/ugw-khvs-wme' },
  {
    title: 'Linkedin',
    url: 'https://www.linkedin.com/in/madebyosama/recent-activity/all/',
  },
  { title: 'Instagram', url: 'https://www.instagram.com/madebyosama/' },
  { title: 'X', url: 'https://twitter.com/madebyosama' },
  { title: 'Threads', url: 'https://www.threads.net/@madebyosama' },
  { title: 'Facebook', url: 'https://www.facebook.com/' },
  { title: 'Youtube', url: 'https://www.youtube.com/@madebyosama' },
  { title: 'MyMind', url: 'https://access.mymind.com/everything' },
];

export default function Links() {
  const [links] = useState<LinkItem[]>(initialLinks);

  return (
    <div className={styles.page}>
      <div className={styles.links}>
        {links.map((link) => (
          <a
            key={link.title}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.link}
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
}
