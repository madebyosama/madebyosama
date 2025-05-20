import Image from 'next/image';
import styles from './Work.module.css';
export default function Work() {
  return (
    <div className={styles.work} id='Work'>
      <div className={styles.header}>
        <div className={styles.headerImage}>
          <Image src='/works.png' width={542} height={502} alt='' />
        </div>
        <div className={styles.title}>
          <div>
            My
            <br /> Recent
            <br /> Work
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.details}>
          <div className={styles.detailContainer}>
            <div className={styles.itemTitle}>MacWorld</div>
            <div className={styles.itemDescription}>
              An e-commerce store for user electronics.
            </div>
            <div className={styles.itemDetails}>
              <div className={styles.detailTitle}>Goal:</div>
              <div className={styles.detailDescription}>
                Build a fast, SEO-friendly website with easy content management.
              </div>
            </div>
            <div className={styles.itemDetails}>
              <div className={styles.detailTitle}>Problem:</div>
              <div className={styles.detailDescription}>
                Old site was slow, cluttered, and not mobile-friendly.
              </div>
            </div>
            <div className={styles.itemDetails}>
              <div className={styles.detailTitle}>Solution:</div>
              <div className={styles.detailDescription}>
                Custom WordPress site with minimal plugins, clean code, and
                responsive design.
              </div>
            </div>
            <div className={styles.itemDetails}>
              <div className={styles.detailTitle}>Result:</div>
              <div className={styles.detailDescription}>
                ✅ Page speed: 95+
                <br />
                ✅ SEO optimized
                <br />
                ✅ Easy to update
                <br />
                ✅ Mobile-first UX
                <br />
              </div>
            </div>
            <div className={styles.itemDetails}>
              <div className={styles.detailTitle}>Link:</div>
              <div className={styles.detailDescription}>
                <a
                  href='https://macworld.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.image}>
          <Image src='/work1.png' width={542} height={642} alt='' />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.image}>
          <Image src='/work2.png' width={542} height={642} alt='' />
        </div>
        <div className={styles.details}>
          <div className={styles.detailContainer}>
            <div className={styles.itemTitle}>Saeed Visa Consultants</div>
            <div className={styles.itemDescription}>
              An e-commerce store for user electronics.
            </div>
            <div className={styles.itemDetails}>
              <div className={styles.detailTitle}>Goal:</div>
              <div className={styles.detailDescription}>
                Build a fast, SEO-friendly website with easy content management.
              </div>
            </div>
            <div className={styles.itemDetails}>
              <div className={styles.detailTitle}>Problem:</div>
              <div className={styles.detailDescription}>
                Old site was slow, cluttered, and not mobile-friendly.
              </div>
            </div>
            <div className={styles.itemDetails}>
              <div className={styles.detailTitle}>Solution:</div>
              <div className={styles.detailDescription}>
                Custom WordPress site with minimal plugins, clean code, and
                responsive design.
              </div>
            </div>
            <div className={styles.itemDetails}>
              <div className={styles.detailTitle}>Result:</div>
              <div className={styles.detailDescription}>
                ✅ Page speed: 95+
                <br />
                ✅ SEO optimized
                <br />
                ✅ Easy to update
                <br />
                ✅ Mobile-first UX
                <br />
              </div>
            </div>
            <div className={styles.itemDetails}>
              <div className={styles.detailTitle}>Link:</div>
              <div className={styles.detailDescription}>
                <a
                  href='https://macworld.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.details}>
          <div className={styles.detailContainer}>
            <div className={styles.itemTitle}>GlobeWork</div>
            <div className={styles.itemDescription}>
              An e-commerce store for user electronics.
            </div>
            <div className={styles.itemDetails}>
              <div className={styles.detailTitle}>Goal:</div>
              <div className={styles.detailDescription}>
                Build a fast, SEO-friendly website with easy content management.
              </div>
            </div>
            <div className={styles.itemDetails}>
              <div className={styles.detailTitle}>Problem:</div>
              <div className={styles.detailDescription}>
                Old site was slow, cluttered, and not mobile-friendly.
              </div>
            </div>
            <div className={styles.itemDetails}>
              <div className={styles.detailTitle}>Solution:</div>
              <div className={styles.detailDescription}>
                Custom WordPress site with minimal plugins, clean code, and
                responsive design.
              </div>
            </div>
            <div className={styles.itemDetails}>
              <div className={styles.detailTitle}>Result:</div>
              <div className={styles.detailDescription}>
                ✅ Page speed: 95+
                <br />
                ✅ SEO optimized
                <br />
                ✅ Easy to update
                <br />
                ✅ Mobile-first UX
                <br />
              </div>
            </div>
            <div className={styles.itemDetails}>
              <div className={styles.detailTitle}>Link:</div>
              <div className={styles.detailDescription}>
                <a
                  href='https://macworld.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.image}>
          <Image src='/work3.png' width={542} height={642} alt='' />
        </div>
      </div>
    </div>
  );
}
