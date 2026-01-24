'use client';

export default function Posts() {
  function openLinks() {
    window.open('https://www.linkedin.com/feed/', '_blank');
    setTimeout(() => {
      window.open('https://www.instagram.com/madebyosama', '_blank');
    }, 300);
    setTimeout(() => {
      window.open('https://www.facebook.com/madebyosamaofficial', '_blank');
    }, 500);
    setTimeout(() => {
      window.open('https://www.threads.net/@madebyosama', '_blank');
    }, 700);
  }

  return (
    <div>
      <button className='button' onClick={openLinks}>
        Open
      </button>
    </div>
  );
}
