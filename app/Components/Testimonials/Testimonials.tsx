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
              <Image src='/stars_blue.png' width={123.65} height={24} alt='' />
              <div className={styles.review}>
                Muhammad is highly professional. I have been working with for
                over 6 years and during these years, he has been super
                professional. We have worked on several web app projects. He is
                very knowledgeable, and highly responsive.
              </div>
              <div className={styles.divider}></div>
              <div className={styles.author}>
                Adeyinka Adegoke • MelaninPeople
              </div>
            </div>
            <div className={styles.singleTestimonial}>
              <Image
                src='/stars_yellow.png'
                width={123.65}
                height={24}
                alt=''
              />
              <div className={styles.review}>
                I've worked with Muhammad Osama on a number of different
                WordPress sites for my clients and he's not only super fast he
                also gets the direction without me having to over-explain which
                saves my agency a lot of time.
              </div>
              <div className={styles.divider}></div>
              <div className={styles.author}>
                Sophia Hanvold • WSDM Marketing
              </div>
            </div>
            <div className={styles.singleTestimonial}>
              <Image
                src='/stars_yellow.png'
                width={123.65}
                height={24}
                alt=''
              />
              <div className={styles.review}>
                Best Experience Ever, Working with Muhammad Osama was great. He
                was accessible and extremely collaborative on this project. He
                completed all milestones quickly and ahead of schedule.
              </div>
              <div className={styles.divider}></div>
              <div className={styles.author}>Akmal Qureshi, Solver's Cave</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
