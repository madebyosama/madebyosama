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
    <div className={styles.solution}>
      <div className={styles.solution__animation__container}>
        <div
          ref={scrollRef}
          className={styles.solution__animation}
          style={{ transform: `translateX(-${offsetX}px) rotate(-3deg)` }}
        >
          Strategy → Design → Build → Launch → Maintain → Strategy → Design →
          Build → Launch → Maintain → Strategy → Design → Build → Launch →
          Maintain → Strategy → Design → Build → Launch → Maintain
        </div>
      </div>
      <div className={styles.process}></div>
    </div>
  );
}
