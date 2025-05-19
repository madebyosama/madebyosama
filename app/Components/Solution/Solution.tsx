// components/Solution.tsx
import { useEffect, useRef, useState } from 'react';
import styles from './Solution.module.css';

export default function Solution() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [offsetX, setOffsetX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setOffsetX(scrollTop * 0.5); // Adjust speed here
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.solution} id='Solution'>
      <div className={styles.container}>
        <div
          ref={scrollRef}
          className={styles.animation}
          style={{ transform: `translateX(-${offsetX}px) rotate(-3deg)` }}
        >
          Strategy → Design → Build → Launch → Maintain → Strategy → Design →
          Build → Launch → Maintain → Strategy → Design → Build → Launch →
          Maintain → Strategy → Design → Build → Launch → Maintain
        </div>
      </div>
      <div className={styles.process}>
        <div className={styles.mainHeading}>The right way!</div>
        <div className={styles.mainSubheading}>
          Here’s how the website should be build. The right way.
        </div>
        <div className={styles.secondaryHeading}>Planning and discovery</div>
        <div className={styles.details}>
          Before I start designing, I take time to learn about your business. I
          will ask questions, study your goals, and understand your audience.
          This helps me create a website that truly fits your needs.
        </div>
        <div className={styles.arrow}>↓</div>
        <div className={styles.secondaryHeading}>Design</div>
        <div className={styles.details}>
          In our Design phase, I turn your vision into a visually engaging
          layout. I craft a clean, appealing look that not only reflects your
          brand but also guides your visitors effortlessly through your website.
        </div>
        <div className={styles.arrow}>↓</div>
        <div className={styles.secondaryHeading}>Development</div>
        <div className={styles.details}>
          During development, I turn the design into a live, fully functioning
          website. I build the site using clean, optimized code and the latest
          technologies to ensure it’s fast, secure, and scalable. Every feature
          is crafted carefully to provide a smooth user experience.
        </div>
        <div className={styles.arrow}>↓</div>
        <div className={styles.secondaryHeading}>Launch</div>
        <div className={styles.details}>
          When it’s time to launch, I take your website live after thorough
          testing and fine-tuning. This means final performance checks, security
          audits, and all the necessary tweaks are completed so your site can
          perform at its best from day one.
        </div>
        <div className={styles.arrow}>↓</div>
        <div className={styles.secondaryHeading}>Maintenance</div>
        <div className={styles.details}>
          Maintenance is all about keeping your website in peak condition. I
          handle regular updates, security checks, and performance optimizations
          so your site remains fast, secure, and up-to-date—even as your
          business grows.
        </div>
      </div>
    </div>
  );
}
