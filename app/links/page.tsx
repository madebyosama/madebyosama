'use client';

import Image from 'next/image';
import styles from './page.module.css';

type LinkItem = {
  title: string;
  url: string;
  image: string;
};

const links: LinkItem[] = [
  {
    title: 'Fiverr',
    url: 'https://www.fiverr.com/madebyosama',
    image: '/fiverr.svg',
  },
  {
    title: 'Upwork',
    url: 'https://www.upwork.com/nx/find-work/best-matches',
    image: '/upwork.svg',
  },
  {
    title: 'Contra',
    url: 'https://contra.com/independent/home',
    image: '/contra.svg',
  },
  {
    title: 'Zoom',
    url: 'https://app.zoom.us/wc/3988095546/start',
    image: '/zoom.svg',
  },
  {
    title: 'Meet',
    url: 'https://meet.google.com/ugw-khvs-wme',
    image: '/meet.svg',
  },
  {
    title: 'Linkedin',
    url: 'https://www.linkedin.com/in/madebyosama/recent-activity/all/',
    image: '/linkedin.svg',
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/madebyosama/',
    image: '/instagram.svg',
  },
  {
    title: 'X',
    url: 'https://twitter.com/madebyosama',
    image: '/x.svg',
  },
  {
    title: 'Threads',
    url: 'https://www.threads.net/@madebyosama',
    image: '/threads.svg',
  },
  {
    title: 'Facebook',
    url: 'https://www.facebook.com/',
    image: '/facebook.svg',
  },
  {
    title: 'Youtube',
    url: 'https://www.youtube.com/@madebyosama',
    image: '/youtube.svg',
  },
  {
    title: 'MyMind',
    url: 'https://access.mymind.com/everything',
    image: '/mymind.svg',
  },
];

export default function Links() {
  return (
    <div className={styles.page}>
      <div className={styles.links}>
        {links.map((link) => (
          <div
            key={link.title}
            className={styles.linkItem}
            onClick={() => window.open(link.url, '_blank')}
          >
            <div className={styles.iconContainer}>
              <Image
                src={link.image}
                alt={`${link.title} icon`}
                width={48}
                height={48}
                className={styles.icon}
              />
            </div>
            <div className={styles.linkContainer}>
              <p>{link.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
