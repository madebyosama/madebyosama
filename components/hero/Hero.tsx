'use client';

import Link from 'next/link';
import Rive from '@rive-app/react-canvas';
import Client1 from '@/assets/images/clients/client1.png';
import Client2 from '@/assets/images/clients/client2.png';
import Client3 from '@/assets/images/clients/client3.png';
import Client4 from '@/assets/images/clients/client4.png';

import styles from './Hero.module.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <a
        className={styles.reviews}
        href='https://fiverr.com/madebyosama'
        target='_blank'
      >
        <div className={styles.clients}>
          <Image
            className={styles.client}
            src={Client1}
            width={32}
            height={32}
            alt=''
          ></Image>
          <Image
            className={styles.client}
            src={Client4}
            width={32}
            height={32}
            alt=''
          ></Image>
          <Image
            className={styles.client}
            src={Client3}
            width={32}
            height={32}
            alt=''
          ></Image>
        </div>
        <div className={styles.proof}>
          <div>25+ Reviews</div>
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
          </div>
        </div>
      </a>
      <div className={styles.title}>
        I build
        <br />
        websites.
      </div>
      <div className={styles.description}>Fast • Modern • Professional</div>

      <div className={styles.cta}>
        <Link className={`button`} href='/contact'>
          Get in touch
        </Link>
      </div>

      <div className={styles.socials}>
        {/* <div className={styles.socialsTitle}></div> */}
        <div className={styles.social}>
          <a href='https://instagram.com/madebyosama' target='_blank'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clip-path='url(#clip0_10_11)'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M23.3623 6.17314C23.7549 7.90114 24 9.87686 24 12C24 14.1231 23.8037 16.0989 23.3623 17.8766C23.3623 18.0249 22.5771 21.7286 19.0431 23.1111C16.9817 23.9014 13.4477 24 12.0249 24C10.6011 24 7.06714 23.9014 5.00571 23.1111C1.47257 21.7774 0.687429 17.9751 0.637714 17.8269C0.196286 16.0989 0 14.1231 0 12C0 9.87686 0.196286 7.90114 0.637714 6.12343C0.637714 5.97514 1.42371 2.27143 4.95686 0.888857C7.01829 0.0985714 10.5523 0 11.9751 0C13.3989 0 16.9329 0.0985714 18.9943 0.888857C22.4297 2.22257 23.2637 5.778 23.3623 6.17314Z'
                  fill='url(#paint0_radial_10_11)'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M23.3623 6.17314C23.7549 7.90114 24 9.87686 24 12C24 14.1231 23.8037 16.0989 23.3623 17.8766C23.3623 18.0249 22.5771 21.7286 19.0431 23.1111C16.9817 23.9014 13.4477 24 12.0249 24C10.6011 24 7.06714 23.9014 5.00571 23.1111C1.47257 21.7774 0.687429 17.9751 0.637714 17.8269C0.196286 16.0989 0 14.1231 0 12C0 9.87686 0.196286 7.90114 0.637714 6.12343C0.637714 5.97514 1.42371 2.27143 4.95686 0.888857C7.01829 0.0985714 10.5523 0 11.9751 0C13.3989 0 16.9329 0.0985714 18.9943 0.888857C22.4297 2.22257 23.2637 5.778 23.3623 6.17314Z'
                  fill='url(#paint1_radial_10_11)'
                />
                <path
                  d='M9.33107 5.51999C7.23934 5.51999 5.52039 7.23664 5.52039 9.33067V14.6693C5.52039 16.7611 7.23703 18.48 9.33107 18.48H14.6697C16.7615 18.48 18.4804 16.7633 18.4804 14.6693V9.33067C18.4804 7.23894 16.7637 5.51999 14.6697 5.51999H9.33107ZM9.33107 6.69817H14.6697C16.1263 6.69817 17.3022 7.87405 17.3022 9.33067V14.6693C17.3022 16.1259 16.1263 17.3018 14.6697 17.3018H9.33107C7.87445 17.3018 6.69857 16.1259 6.69857 14.6693V9.33067C6.69857 7.87405 7.87445 6.69817 9.33107 6.69817ZM15.4797 7.98681C15.1829 7.98681 14.9458 8.22382 14.9458 8.52067C14.9458 8.81751 15.1829 9.05453 15.4797 9.05453C15.7766 9.05453 16.0136 8.81751 16.0136 8.52067C16.0136 8.22382 15.7766 7.98681 15.4797 7.98681ZM12.0004 8.46545C10.0559 8.46545 8.46584 10.0555 8.46584 12C8.46584 13.9445 10.0559 15.5346 12.0004 15.5346C13.9449 15.5346 15.535 13.9445 15.535 12C15.535 10.0555 13.9449 8.46545 12.0004 8.46545ZM12.0004 9.64362C13.3097 9.64362 14.3567 10.6906 14.3567 12C14.3567 13.3093 13.3097 14.3563 12.0004 14.3563C10.691 14.3563 9.64402 13.3093 9.64402 12C9.64402 10.6906 10.691 9.64362 12.0004 9.64362Z'
                  fill='white'
                />
              </g>
              <defs>
                <radialGradient
                  id='paint0_radial_10_11'
                  cx='0'
                  cy='0'
                  r='1'
                  gradientUnits='userSpaceOnUse'
                  gradientTransform='translate(1.55326 23.4742) scale(30.4711)'
                >
                  <stop offset='0.09' stop-color='#FA8F21' />
                  <stop offset='0.78' stop-color='#D82D7E' />
                </radialGradient>
                <radialGradient
                  id='paint1_radial_10_11'
                  cx='0'
                  cy='0'
                  r='1'
                  gradientUnits='userSpaceOnUse'
                  gradientTransform='translate(16.624 22.7036) scale(26.8148)'
                >
                  <stop offset='0.64' stop-color='#8C3AAA' stop-opacity='0' />
                  <stop offset='1' stop-color='#8C3AAA' />
                </radialGradient>
                <clipPath id='clip0_10_11'>
                  <rect width='24' height='24' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <div className={styles.social}>
          <a href='https://linkedin.com/in/madebyosama' target='_blank'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clip-path='url(#clip0_10_44)'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M23.3623 6.17314C23.7549 7.90114 24 9.87686 24 12C24 14.1231 23.8037 16.0989 23.3623 17.8766C23.3623 18.0249 22.5771 21.7286 19.0431 23.1111C16.9817 23.9014 13.4477 24 12.0249 24C10.6011 24 7.06714 23.9014 5.00571 23.1111C1.47257 21.7774 0.687429 17.9751 0.637714 17.8269C0.196286 16.0989 0 14.1231 0 12C0 9.87686 0.196286 7.90114 0.637714 6.12343C0.637714 5.97514 1.42371 2.27143 4.95686 0.888857C7.01829 0.0985714 10.5523 0 11.9751 0C13.3989 0 16.9329 0.0985714 18.9943 0.888857C22.4297 2.22257 23.2637 5.778 23.3623 6.17314Z'
                  fill='#0A66C2'
                />
                <g clip-path='url(#clip1_10_44)'>
                  <path
                    d='M16.4182 19.4H19.4002V14.124C19.4002 11.535 18.8432 9.54298 15.8212 9.54298C15.2542 9.52098 14.6922 9.65498 14.1942 9.92798C13.6972 10.201 13.2832 10.605 12.9962 11.095H12.9562V9.78098H10.0942V19.4H13.0762V14.642C13.0762 13.386 13.3152 12.171 14.8672 12.171C16.3982 12.171 16.4182 13.607 16.4182 14.723V19.4Z'
                    fill='white'
                  />
                  <path
                    d='M5.76922 8.17498C6.05422 8.36498 6.38822 8.46698 6.73122 8.46598C6.95822 8.46598 7.18322 8.42098 7.39322 8.33398C7.60322 8.24698 7.79322 8.11898 7.95422 7.95798C8.11522 7.79698 8.24222 7.60598 8.32922 7.39598C8.41622 7.18598 8.46022 6.95998 8.46022 6.73298C8.46022 6.38998 8.35922 6.05498 8.16922 5.76998C7.97822 5.48498 7.70822 5.26298 7.39222 5.13198C7.07622 5.00098 6.72822 4.96598 6.39222 5.03298C6.05622 5.09998 5.74822 5.26598 5.50622 5.50798C5.26422 5.75098 5.10022 6.05898 5.03322 6.39598C4.96622 6.73198 5.00122 7.07998 5.13222 7.39698C5.26322 7.71398 5.48522 7.98398 5.76922 8.17498Z'
                    fill='white'
                  />
                  <path
                    d='M5.23718 19.4H8.22218L8.22118 9.78098H5.23718V19.4Z'
                    fill='white'
                  />
                </g>
              </g>
              <defs>
                <clipPath id='clip0_10_44'>
                  <rect width='24' height='24' fill='white' />
                </clipPath>
                <clipPath id='clip1_10_44'>
                  <rect
                    width='15'
                    height='15'
                    fill='white'
                    transform='translate(5 5)'
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <div>
          <a href='https://facebook.com/madebyosama' target='_blank'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clip-path='url(#clip0_10_56)'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M23.3623 6.17314C23.7549 7.90114 24 9.87686 24 12C24 14.1231 23.8037 16.0989 23.3623 17.8766C23.3623 18.0249 22.5771 21.7286 19.0431 23.1111C16.9817 23.9014 13.4477 24 12.0249 24C10.6011 24 7.06714 23.9014 5.00571 23.1111C1.47257 21.7774 0.687429 17.9751 0.637714 17.8269C0.196286 16.0989 0 14.1231 0 12C0 9.87686 0.196286 7.90114 0.637714 6.12343C0.637714 5.97514 1.42371 2.27143 4.95686 0.888857C7.01829 0.0985714 10.5523 0 11.9751 0C13.3989 0 16.9329 0.0985714 18.9943 0.888857C22.4297 2.22257 23.2637 5.778 23.3623 6.17314Z'
                  fill='#0965FE'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M23.3623 6.17314C23.7549 7.90114 24 9.87686 24 12C24 14.1231 23.8037 16.0989 23.3623 17.8766C23.3623 18.0249 22.5771 21.7286 19.0431 23.1111C16.9817 23.9014 13.4477 24 12.0249 24C10.6011 24 7.06714 23.9014 5.00571 23.1111C1.47257 21.7774 0.687429 17.9751 0.637714 17.8269C0.196286 16.0989 0 14.1231 0 12C0 9.87686 0.196286 7.90114 0.637714 6.12343C0.637714 5.97514 1.42371 2.27143 4.95686 0.888857C7.01829 0.0985714 10.5523 0 11.9751 0C13.3989 0 16.9329 0.0985714 18.9943 0.888857C22.4297 2.22257 23.2637 5.778 23.3623 6.17314Z'
                  fill='#0965FE'
                />
                <path
                  d='M9.336 23.9045V16.4185H7V12.9525H9.336V11.4595C9.336 7.5995 11.08 5.8125 14.861 5.8125C15.577 5.8125 16.812 5.9525 17.32 6.0935V9.2325C17.053 9.2055 16.586 9.1915 16.011 9.1915C14.155 9.1915 13.439 9.8945 13.439 11.7275V12.9525H17.139L16.505 16.4175H13.444V24.0305C13.065 24.0455 12.677 24.0525 12.28 24.0525C11.233 24.0525 10.25 24.0015 9.336 23.9045Z'
                  fill='white'
                />
              </g>
              <defs>
                <clipPath id='clip0_10_56'>
                  <rect width='24' height='24' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>

      <link
        rel='preload'
        href='/assets/animations/hero_animation.riv'
        as='fetch'
        crossOrigin='anonymous'
      />

      <Rive
        className={styles.animation}
        src='/assets/animations/hero_animation.riv'
      />
    </div>
  );
}
