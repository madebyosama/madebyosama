'use client';

import { useState } from 'react';
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
  { title: 'X', url: 'https://twitter.com/madebyosama', image: '/x.svg' },
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
  {
    title: 'Spotify',
    url: 'https://open.spotify.com/playlist/4ZUhRGeWtM5tIsvZz5OX88',
    image: '/spotify.svg',
  },
  {
    title: 'Blinkist',
    url: 'https://www.blinkist.com/en/app/for-you',
    image: '/blinkist.svg',
  },
];

export default function Links() {
  const [query, setQuery] = useState('');

  const filteredLinks = links.filter((link) =>
    link.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (filteredLinks.length === 0 && query.trim() !== '') {
        window.open(
          `https://www.google.com/search?q=${encodeURIComponent(query)}`,
          '_blank'
        );
      }
    }
  };

  return (
    <div className={styles.page}>
      <input
        type='text'
        placeholder='Search links...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className={styles.searchInput}
      />

      <div className={styles.links}>
        {filteredLinks.map((link) => (
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
