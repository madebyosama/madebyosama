// components/Solution.tsx
import { useEffect, useRef, useState } from 'react';
import styles from './Solution.module.css';
import Title from '../Section/Title/Title';

export default function Solution() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [offsetX, setOffsetX] = useState(0);

  type Steps = {
    title: string;
    description: string;
  };

  const stepsData: Steps[] = [
    {
      title: 'Planning and discovery',
      description:
        'Before I start designing, I take time to learn about your business. I will ask questions, study your goals, and understand your audience. This helps me create a website that truly fits your needs.',
    },
    {
      title: 'Design',
      description:
        'In our Design phase, I turn your vision into a visually engaging layout. I craft a clean, appealing look that not only reflects your brand but also guides your visitors effortlessly through your website.',
    },
    {
      title: 'Development',
      description:
        'During development, I turn the design into a live, fully functioning website. I build the site using clean, optimized code and the latest technologies to ensure it’s fast, secure, and scalable. Every feature is crafted carefully to provide a smooth user experience.',
    },
    {
      title: 'Testing',
      description:
        'Once development is complete, I rigorously test your website across devices and browsers to ensure everything works flawlessly. From performance and responsiveness to functionality and security—every detail is reviewed and refined.',
    },
    {
      title: 'Launch',
      description:
        'When it’s time to launch, I take your website live after thorough testing and fine-tuning. This means final performance checks, security audits, and all the necessary tweaks are completed so your site can perform at its best from day one.',
    },
    {
      title: 'Maintenance',
      description:
        'Maintenance is all about keeping your website in peak condition. I handle regular updates, security checks, and performance optimizations so your site remains fast, secure, and up-to-date—even as your business grows.',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setOffsetX(scrollTop * 0.5); // Adjust speed here
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.solution} id='process'>
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
      <Title
        title='Process'
        description='Here’s how the website should be </br>build. The right way.'
      />
      <div className={styles.process}>
        {stepsData.map((step, index) => (
          <div key={index} className={styles.step}>
            <ol start={index + 1}>
              <li>{step.title}</li>
            </ol>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
