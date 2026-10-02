import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='not-found'>
      <div>Whoops, this page was not found.</div>
      <h1>404</h1>
      <Link className='button' href='/'>
        Back to home
      </Link>
    </div>
  );
}
