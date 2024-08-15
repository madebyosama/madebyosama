import styles from './Review.module.css';
import Image, { StaticImageData } from 'next/image';

export default function Review({
  description,
  image,
  name,
  website,
}: {
  description: string;
  image: StaticImageData;
  name: string;
  website: string;
}) {
  return (
    <div className={styles.review}>
      <div>
        <div className={styles.stars}>
          <svg
            width='96'
            height='15'
            viewBox='0 0 96 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M3.61065 14.9435C3.22465 15.1415 2.78665 14.7945 2.86465 14.3515L3.69465 9.6215L0.171653 6.2655C-0.157347 5.9515 0.0136537 5.3775 0.454653 5.3155L5.35265 4.6195L7.53665 0.2925C7.73365 -0.0975 8.26665 -0.0975 8.46365 0.2925L10.6477 4.6195L15.5457 5.3155C15.9867 5.3775 16.1577 5.9515 15.8287 6.2655L12.3057 9.6215L13.1357 14.3515C13.2137 14.7945 12.7757 15.1415 12.3897 14.9435L7.99865 12.6875L3.60965 14.9435H3.61065Z'
              fill='#FEBE00'
            />
            <path
              d='M23.6107 14.9435C23.2247 15.1415 22.7867 14.7945 22.8647 14.3515L23.6947 9.6215L20.1717 6.2655C19.8427 5.9515 20.0137 5.3775 20.4547 5.3155L25.3527 4.6195L27.5367 0.2925C27.7337 -0.0975 28.2667 -0.0975 28.4636 0.2925L30.6477 4.6195L35.5457 5.3155C35.9867 5.3775 36.1577 5.9515 35.8287 6.2655L32.3057 9.6215L33.1357 14.3515C33.2137 14.7945 32.7757 15.1415 32.3897 14.9435L27.9987 12.6875L23.6097 14.9435H23.6107Z'
              fill='#FEBE00'
            />
            <path
              d='M43.6107 14.9435C43.2247 15.1415 42.7867 14.7945 42.8647 14.3515L43.6947 9.6215L40.1717 6.2655C39.8427 5.9515 40.0137 5.3775 40.4547 5.3155L45.3527 4.6195L47.5367 0.2925C47.7337 -0.0975 48.2667 -0.0975 48.4636 0.2925L50.6477 4.6195L55.5457 5.3155C55.9867 5.3775 56.1577 5.9515 55.8287 6.2655L52.3057 9.6215L53.1357 14.3515C53.2137 14.7945 52.7757 15.1415 52.3897 14.9435L47.9987 12.6875L43.6097 14.9435H43.6107Z'
              fill='#FEBE00'
            />
            <path
              d='M63.6107 14.9435C63.2247 15.1415 62.7867 14.7945 62.8647 14.3515L63.6947 9.6215L60.1717 6.2655C59.8427 5.9515 60.0137 5.3775 60.4547 5.3155L65.3527 4.6195L67.5367 0.2925C67.7337 -0.0975 68.2667 -0.0975 68.4636 0.2925L70.6477 4.6195L75.5457 5.3155C75.9867 5.3775 76.1577 5.9515 75.8287 6.2655L72.3057 9.6215L73.1357 14.3515C73.2137 14.7945 72.7757 15.1415 72.3897 14.9435L67.9987 12.6875L63.6097 14.9435H63.6107Z'
              fill='#FEBE00'
            />
            <path
              d='M83.6107 14.9435C83.2247 15.1415 82.7867 14.7945 82.8647 14.3515L83.6947 9.6215L80.1717 6.2655C79.8427 5.9515 80.0137 5.3775 80.4547 5.3155L85.3527 4.6195L87.5367 0.2925C87.7337 -0.0975 88.2667 -0.0975 88.4636 0.2925L90.6477 4.6195L95.5457 5.3155C95.9867 5.3775 96.1577 5.9515 95.8287 6.2655L92.3057 9.6215L93.1357 14.3515C93.2137 14.7945 92.7757 15.1415 92.3897 14.9435L87.9987 12.6875L83.6097 14.9435H83.6107Z'
              fill='#FEBE00'
            />
          </svg>
        </div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.author}>
        <div className={styles.image}>
          <Image src={image} height={48} width={48} alt='Author Image' />
        </div>
        <div className={styles.about}>
          <div className={styles.name}>{name}</div>
          <div className={styles.website}>{website}</div>
        </div>
      </div>
    </div>
  );
}
