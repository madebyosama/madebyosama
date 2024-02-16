import { Metadata } from 'next';
import { Suspense } from 'react';

import Title from '@/components/title/Title';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About - Muhammad Osama',
  description: '',
};

export default async function About() {
  return (
    <div className={styles.about}>
      <Title sub='Get to know about' title='Muhammad Osama' description='' />
      <div className={styles.experience}>
        <div className={styles.title}>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M12 2.75C10.4632 2.75 9.17555 3.81665 8.83697 5.25H15.163C14.8245 3.81665 13.5368 2.75 12 2.75ZM12 1.25C9.63102 1.25 7.66709 2.98423 7.3085 5.25238C6.69385 5.25687 6.16704 5.26979 5.71173 5.30699C4.99835 5.36527 4.39472 5.48688 3.84355 5.76772C2.94978 6.22312 2.22312 6.94978 1.76772 7.84354C1.48688 8.39472 1.36527 8.99834 1.30699 9.71173C1.29192 9.89616 1.28084 10.0923 1.27268 10.3013L1.27975 10.304L1.32027 10.3191C1.35694 10.3327 1.41272 10.3531 1.48649 10.3793C1.63405 10.4318 1.85345 10.5076 2.13569 10.599C2.70038 10.7819 3.51533 11.0267 4.50862 11.2718C5.31979 11.472 6.24638 11.6714 7.25 11.8375V11C7.25 10.5858 7.58579 10.25 8 10.25C8.41421 10.25 8.75 10.5858 8.75 11V12.0506C9.78973 12.1735 10.8848 12.25 12 12.25C13.1152 12.25 14.2103 12.1735 15.25 12.0506V11C15.25 10.5858 15.5858 10.25 16 10.25C16.4142 10.25 16.75 10.5858 16.75 11V11.8375C17.7536 11.6714 18.6802 11.472 19.4914 11.2718C20.4847 11.0267 21.2996 10.7819 21.8643 10.599C22.1465 10.5076 22.3659 10.4318 22.5135 10.3793C22.5873 10.3531 22.6431 10.3327 22.6797 10.3191L22.7203 10.304L22.7273 10.3013C22.7192 10.0923 22.7081 9.89616 22.693 9.71173C22.6347 8.99834 22.5131 8.39472 22.2323 7.84354C21.7769 6.94978 21.0502 6.22312 20.1565 5.76772C19.6053 5.48688 19.0017 5.36527 18.2883 5.30699C17.833 5.26979 17.3062 5.25687 16.6915 5.25238C16.3329 2.98423 14.369 1.25 12 1.25ZM15.25 13.5606V14C15.25 14.4142 15.5858 14.75 16 14.75C16.4142 14.75 16.75 14.4142 16.75 14V13.357C17.8953 13.1758 18.9455 12.9515 19.8507 12.7282C20.8837 12.4733 21.7333 12.2181 22.3265 12.026C22.4867 11.9741 22.6282 11.9268 22.7498 11.8853C22.75 12.0393 22.75 12.1982 22.75 12.3623V12.367V12.4V15.6V15.633C22.75 16.7252 22.75 17.5906 22.693 18.2883C22.6347 19.0017 22.5131 19.6053 22.2323 20.1565C21.7769 21.0502 21.0502 21.7769 20.1565 22.2323C19.6053 22.5131 19.0017 22.6347 18.2883 22.693C17.5906 22.75 16.7252 22.75 15.633 22.75H15.6H8.4H8.36698C7.27485 22.75 6.40935 22.75 5.71173 22.693C4.99835 22.6347 4.39472 22.5131 3.84355 22.2323C2.94978 21.7769 2.22312 21.0502 1.76772 20.1565C1.48688 19.6053 1.36527 19.0017 1.30699 18.2883C1.24999 17.5907 1.24999 16.7252 1.25 15.633V15.633V15.6V12.4V12.367V12.367C1.25 12.2013 1.25 12.0408 1.2502 11.8853C1.37176 11.9268 1.51334 11.9741 1.67352 12.026C2.26672 12.2181 3.11625 12.4733 4.14927 12.7282C5.05452 12.9515 6.10475 13.1758 7.25 13.357V14C7.25 14.4142 7.58579 14.75 8 14.75C8.41421 14.75 8.75 14.4142 8.75 14V13.5606C9.78976 13.6777 10.8835 13.75 12 13.75C13.1165 13.75 14.2102 13.6777 15.25 13.5606Z'
              fill='var(--foreground-color)'
            />
          </svg>
          &nbsp; Experience
        </div>
        <div className={styles.details}>
          <div className={styles.date}>Jan 2023 - Present</div>
          <div className={styles.ditle}>Founder & CEO, Loqaat</div>
          <div className={styles.description}>
            <ul>
              <li>Left Solvers Cave</li>
              <li>Started web development freelancing on upwork.</li>
            </ul>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.date}>Jan 2020 - Dec 2022</div>
          <div className={styles.ditle}>Co-Founder, Solver’s Cave</div>
          <div className={styles.description}>
            <ul>
              <li>
                As my freelancing career excelled, It was becoming difficult to
                work on multiple projects at same time.
              </li>
              <li>So, Co-Founded Solver’s Cave on Jan 2020.</li>
              <li>Opened first office on May 2020.</li>
              <li>Managed over 500+ Projects.</li>
              <li>Help company raised from 0 employees to multiple.</li>
              <li>Helped interns and employees learn new skills.</li>
              <li>Opened second office on July 2022.</li>
            </ul>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.date}>Jan 2018 - Jan 2023</div>
          <div className={styles.ditle}>Freelance Web Designer, Fiverr</div>
          <div className={styles.description}>
            <ul>
              <li>Employement didn’t suit me, so I started freelancing.</li>
              <li>Did my university final year project in MERN Stack.</li>
              <li>
                Was able to land first order in first month of freelancing.
              </li>
              <li>Have designed over 500+ websites for my clients.</li>
            </ul>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.date}>Apr 2017 - Jan 2018</div>
          <div className={styles.ditle}>WordPress Designer, Morosoft</div>
          <div className={styles.description}>
            <ul>
              <li>Hired as a non paid intern as a Graphic Designer.</li>
              <li>
                Learned WordPress Designing while doing Graphic Design work.
              </li>
              <li>Promoted to Paid Employee.</li>
              <li>
                Designed over 35+ Ecommerce, Business, Portfolio WordPress
                Websites.
              </li>
              <li>Was guided by university seniors.</li>
            </ul>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.date}>Apr 2017 - June 2017</div>
          <div className={styles.ditle}>Graphic Designer, AlphaKode</div>
          <div className={styles.description}>
            <ul>
              <li>Hired as an Intern.</li>
              <li>Learn Adobe Photoshop, Adobe Illustrator and Adobe XD.</li>
              <li>
                Designed Social Media Posts, Banners, Flyers, Logo Designs.
              </li>
              <li>Was guided by university seniors.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='aboutExperience'>
        <div className={styles.title}>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M22 1.25H21.9462C19.769 1.24998 18.0461 1.24997 16.4538 1.52913C16.3358 1.54981 16.2186 1.572 16.1021 1.5958C14.7689 1.86799 14.1023 2.00409 13.4262 2.83226C12.75 3.66043 12.75 4.57781 12.75 6.41257V10C12.75 10.4142 12.4142 10.75 12 10.75C11.5858 10.75 11.25 10.4142 11.25 10V6.41257C11.25 4.57781 11.25 3.66043 10.5738 2.83226C9.89766 2.00409 9.23107 1.86799 7.89789 1.5958C7.78136 1.572 7.66418 1.54981 7.54619 1.52913C5.95396 1.24997 4.23099 1.24998 2.0538 1.25H2.05379H2.05378H2.05378H2C1.80109 1.25 1.61033 1.32902 1.46967 1.46967C1.32902 1.61032 1.25 1.80109 1.25 2V12.6571L1.25 12.6866V12.6866V12.6867C1.24999 13.2123 1.24999 13.6501 1.27802 14.0072C1.30718 14.3786 1.37018 14.728 1.53293 15.0585C1.78743 15.5753 2.16945 15.9751 2.67416 16.2528C3.00137 16.4329 3.3604 16.5109 3.74223 16.5568C4.11389 16.6016 4.57637 16.6226 5.13742 16.6482L5.16613 16.6495C7.59527 16.76 9.29896 17.1552 11.5944 18.6309C11.8415 18.7897 12.1585 18.7897 12.4056 18.6309C14.701 17.1552 16.4047 16.76 18.8339 16.6495L18.8626 16.6482C19.4236 16.6226 19.8861 16.6016 20.2578 16.5568C20.6396 16.5109 20.9986 16.4329 21.3258 16.2528C21.8306 15.9751 22.2126 15.5753 22.4671 15.0585C22.6298 14.728 22.6928 14.3786 22.722 14.0072C22.75 13.6501 22.75 13.2123 22.75 12.6866V12.6571V2C22.75 1.58579 22.4142 1.25 22 1.25ZM3 18.75C2.58579 18.75 2.25 19.0858 2.25 19.5C2.25 19.9142 2.58579 20.25 3 20.25C4.97377 20.25 6.39687 20.3743 7.67766 20.7236C8.95056 21.0707 10.1262 21.6522 11.584 22.624C11.8359 22.792 12.1641 22.792 12.416 22.624C13.8738 21.6522 15.0494 21.0707 16.3223 20.7236C17.6031 20.3743 19.0262 20.25 21 20.25C21.4142 20.25 21.75 19.9142 21.75 19.5C21.75 19.0858 21.4142 18.75 21 18.75C18.9738 18.75 17.3969 18.8757 15.9277 19.2764C14.585 19.6426 13.3686 20.2283 12 21.1041C10.6314 20.2283 9.41499 19.6426 8.07234 19.2764C6.60313 18.8757 5.02624 18.75 3 18.75Z'
              fill='var(--foreground-color)'
            />
          </svg>
          &nbsp; Education
        </div>
        <div className={styles.details}>
          <div className={styles.date}>Sep 2016 – Sep 2020</div>
          <div className={styles.ditle}>Bachelor’s in Software Engineering</div>
          <div className={styles.description}>
            <ul>
              <li>Comsats University, Islamabad</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
