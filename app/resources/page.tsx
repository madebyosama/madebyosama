import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources - Muhammad Osama',
  description: '',
};

export default async function Resources() {
  return (
    <div>
      <h1>Resources</h1>
      <a href='/resources/bookmarks'>1000 Useful Websites</a>
      <br />
      <a href='https://icons.madebyosama.com' target='_blank'>
        Free Icons
      </a>
      <br />
      <a href='https://clock.madebyosama.com' target='_blank'>
        Simple Digital Clock
      </a>
    </div>
  );
}
