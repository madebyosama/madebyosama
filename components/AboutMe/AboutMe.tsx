'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import ProfilePic from '@/assets/images/profile-pic.png'
import styles from './AboutMe.module.css'

export default function AboutMe() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleVideo = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
  }

  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div>
            <h2 className={styles.name}>Muhammad Osama</h2>
            <div className={styles.role}>Website Designer &amp; Developer</div>
          </div>
          <p className={styles.bio}>
            Hello there! My name is Muhammad Osama and I&apos;m a Website
            Designer &amp; Developer. I live in Wah Cantt, Pakistan. I grew up
            on the internet and love computers and software.
          </p>
          <p className={styles.bio}>
            In my 10 years of experience I have designed User Interfaces and
            experiences, planned, supported, and implemented features and
            roadmaps, and led cross-functional teams at companies like Pitch,
            Microsoft, and Native Instruments.
          </p>
          <div className={styles.links}>
            <a href='/about' className={styles.link} rel='noopener noreferrer'>
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3.5 10.5L10.5 3.5M10.5 3.5H4.5M10.5 3.5V9.5'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              See my journey
            </a>
            {/* <a
              href='https://linkedin.com/in/madebyosama'
              className={styles.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3.5 10.5L10.5 3.5M10.5 3.5H4.5M10.5 3.5V9.5'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              Linkedin
            </a> */}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.circleWrap}>
            {/* Rotating zigzag border */}
            <svg
              className={styles.zigzagBorder}
              viewBox='0 0 320 320'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M180.993 2.32715C186.754 1.11349 192.873 1.19993 198.945 2.82617C204.827 4.40146 210.024 7.2558 214.322 11.0039L214.735 11.3691C226.509 21.9608 240.375 29.9656 255.436 34.8633V34.8623C261.03 36.6913 266.286 39.8263 270.728 44.2715L270.729 44.2725C275.174 48.7135 278.307 53.9701 280.132 59.5635V59.5645C285.034 74.6244 293.04 88.4894 303.631 100.259V100.26C307.559 104.641 310.548 109.983 312.174 116.055C313.749 121.938 313.88 127.863 312.779 133.46L312.669 134.001C309.382 149.494 309.382 165.503 312.673 180.992V180.993C313.887 186.754 313.8 192.873 312.174 198.945C310.548 205.017 307.559 210.358 303.632 214.734C293.371 226.14 285.537 239.51 280.604 254.027L280.137 255.434C278.308 261.028 275.174 266.286 270.729 270.728L270.728 270.729C266.425 275.035 261.357 278.111 255.958 279.958L255.436 280.132C240.375 285.034 226.51 293.039 214.74 303.631C210.359 307.559 205.017 310.548 198.945 312.174C192.873 313.8 186.755 313.887 180.999 312.669H180.998C165.989 309.485 150.494 309.386 135.458 312.375L134.007 312.673C128.246 313.887 122.127 313.8 116.055 312.174C110.173 310.599 104.976 307.744 100.678 303.996L100.265 303.631C88.4912 293.039 74.6257 285.034 59.5654 280.137H59.5664C53.9716 278.308 48.7139 275.174 44.2725 270.729L44.2715 270.728L43.8584 270.31C39.6311 265.958 36.6348 260.855 34.8672 255.436H34.8682C30.1192 240.845 22.4577 227.376 12.3535 215.848L11.3672 214.738C7.43968 210.357 4.45196 205.016 2.82617 198.945C1.19991 192.873 1.11346 186.755 2.33105 180.999L2.33008 180.998C5.51407 165.988 5.61422 150.494 2.625 135.458L2.32617 134.004C1.11307 128.244 1.20017 122.126 2.82617 116.055C4.45225 109.983 7.44012 104.641 11.3682 100.264C21.9597 88.49 29.9656 74.6251 34.8633 59.5645L34.8623 59.5635C36.6914 53.9696 39.8265 48.7133 44.2715 44.2725L44.2725 44.2715C48.7135 39.8263 53.97 36.6918 59.5635 34.8672L59.5645 34.8682C74.6246 29.9663 88.4903 21.9607 100.26 11.3691C104.641 7.44072 109.983 4.45221 116.055 2.82617C122.127 1.19991 128.245 1.11346 134.001 2.33105V2.33008C149.494 5.61674 165.503 5.61688 180.992 2.32617L180.993 2.32715Z'
                stroke='var(--primary-color)'
                strokeWidth='3'
                strokeLinejoin='round'
                strokeLinecap='round'
                fill='none'
              />
            </svg>

            {/* Circle content */}
            <div className={styles.circleContent}>
              <Image
                src={ProfilePic}
                alt='Muhammad Osama'
                fill
                className={`${styles.profileImage} ${isPlaying ? styles.imageHidden : ''}`}
                priority
              />
              <video
                ref={videoRef}
                className={`${styles.video} ${isPlaying ? styles.videoVisible : ''}`}
                onEnded={handleVideoEnd}
                playsInline
                preload='metadata'
              >
                <source src='/assets/videos/intro.mp4' type='video/mp4' />
              </video>
            </div>

            {/* Play/Pause button */}
            <button
              className={styles.playButton}
              onClick={toggleVideo}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? (
                <svg
                  width='16'
                  height='18'
                  viewBox='0 0 20 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect
                    x='2'
                    y='1'
                    width='5'
                    height='20'
                    rx='2'
                    fill='var(--primary-color)'
                  />
                  <rect
                    x='13'
                    y='1'
                    width='5'
                    height='20'
                    rx='2'
                    fill='var(--primary-color)'
                  />
                </svg>
              ) : (
                <svg
                  width='16'
                  height='18'
                  viewBox='0 0 35 38'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M5.85857e-05 18.665C5.85268e-05 8.30734 5.74968e-05 3.12851 3.19926 0.990869C3.46052 0.816305 3.73292 0.659035 4.01472 0.520065C7.46557 -1.18171 11.9506 1.40771 20.9206 6.58653C29.8906 11.7654 34.3756 14.3548 34.6272 18.1942C34.6478 18.5077 34.6478 18.8223 34.6272 19.1358C34.3756 22.9752 29.8906 25.5646 20.9206 30.7435C11.9506 35.9223 7.46558 38.5117 4.01472 36.8099C3.73292 36.671 3.46052 36.5137 3.19926 36.3391C5.78779e-05 34.2015 5.83891e-05 29.0226 5.85857e-05 18.665Z'
                    fill='var(--primary-color)'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
