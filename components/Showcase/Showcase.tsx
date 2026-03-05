import Image from 'next/image'
import Link from 'next/link'
import styles from './Showcase.module.css'

const columns = [
  {
    images: [
      '/assets/images/showcase/image.png',
      '/assets/images/showcase/image-5.png',
    ],
    rotation: -12,
    offset: 30,
  },
  {
    images: [
      '/assets/images/showcase/image-1.png',
      '/assets/images/showcase/rectangle-13.png',
    ],
    rotation: -6,
    offset: 10,
  },
  {
    images: [
      '/assets/images/showcase/image-2.png',
      '/assets/images/showcase/image-3.png',
    ],
    rotation: 0,
    offset: 0,
  },
  {
    images: [
      '/assets/images/showcase/image-4.png',
      '/assets/images/showcase/rectangle-9.png',
    ],
    rotation: 6,
    offset: 10,
  },
  {
    images: [
      '/assets/images/showcase/image-6.png',
      '/assets/images/showcase/rectangle-8.png',
    ],
    rotation: 12,
    offset: 30,
  },
]

export default function Showcase() {
  return (
    <div className={styles.showcase}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <svg
            width='42'
            height='22'
            viewBox='0 0 62 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='35'
              y='5'
              width='21.8182'
              height='21.8182'
              rx='10.9091'
              fill='var(--foreground-color)'
            />
            <rect
              x='41.6364'
              y='11.6364'
              width='8.72727'
              height='8.72727'
              rx='4.36364'
              fill='var(--background-color)'
            />
            <path
              d='M9 8.5C9 6.567 10.567 5 12.5 5V5C14.433 5 16 6.567 16 8.5V23.5C16 25.433 14.433 27 12.5 27V27C10.567 27 9 25.433 9 23.5V8.5Z'
              fill='var(--foreground-color)'
            />
            <rect
              x='17'
              y='5'
              width='7'
              height='22'
              rx='3.5'
              fill='var(--foreground-color)'
            />
            <rect
              x='25'
              y='5'
              width='7'
              height='22'
              rx='3.5'
              fill='var(--foreground-color)'
            />
          </svg>
        </div>
        <h2 className={styles.heading}>
          Ready to rebuild your website
          <br />
          the right way?
        </h2>
        <Link href='/contact' className={`button ${styles.button}`}>
          Book a call
        </Link>
      </div>
      <div className={styles.collage}>
        {columns.map((col, colIndex) => (
          <div
            key={colIndex}
            className={styles.column}
            style={{
              transform: `rotate(${col.rotation}deg)`,
              marginTop: `${col.offset}px`,
            }}
          >
            {col.images.map((src, imgIndex) => (
              <div key={imgIndex} className={styles.card}>
                <Image
                  src={src}
                  alt='Project screenshot'
                  width={200}
                  height={260}
                  className={styles.image}
                  unoptimized
                />
              </div>
            ))}
          </div>
        ))}
        <div className={styles.fadeMask} />
      </div>
    </div>
  )
}
