import Image from 'next/image';
import styles from './Testimonials.module.css';
import Title from '../Section/Title/Title';

export default function Testimonials() {
  return (
    <div className={styles.testimonials} id='testimonials'>
      <div className={styles.header}>
        <Title
          title='Testimonials '
          description='Real reviews from real people </br>on real projects.'
        />
        <div className={styles.testimonialsContainer}>
          <div className={styles.firstRow}>
            <div className={styles.singleTestimonial}>
              <Image
                src='/stars_yellow.png'
                width={123.65}
                height={24}
                alt=''
              />
              <div className={styles.review}>
                Within minutes the friendly sales assistant had secured me a
                spectacular rate of £150 at The Pullman Hotel which was right
                slap bang next to the M&S Bank Arena literally a 30 second walk
                !!!
              </div>
              <div className={styles.divider}></div>
              <div className={styles.author}>Akmal Qureshi</div>
            </div>
            <div className={styles.singleTestimonial}>
              <Image src='/stars_blue.png' width={123.65} height={24} alt='' />
              <div className={styles.review}>
                Within minutes the friendly sales assistant had secured me a
                spectacular rate of £150 at The Pullman Hotel which was right
                slap bang next to the M&S Bank Arena literally a 30 second walk
                !!!
              </div>
              <div className={styles.divider}></div>
              <div className={styles.author}>Akmal Qureshi</div>
            </div>
            <div className={styles.singleTestimonial}>
              <Image src='/stars_blue.png' width={123.65} height={24} alt='' />
              <div className={styles.review}>
                Within minutes the friendly sales assistant had secured me a
                spectacular rate of £150 at The Pullman Hotel which was right
                slap bang next to the M&S Bank Arena literally a 30 second walk
                !!!
              </div>
              <div className={styles.divider}></div>
              <div className={styles.author}>Akmal Qureshi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
