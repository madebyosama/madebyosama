import Image from 'next/image';
import styles from './Pricing.module.css';

interface PackageDetail {
  icon: string;
  text: string;
}

interface Package {
  title: string;
  priceTag?: string;
  priceNumber?: string;
  details: PackageDetail[];
  isLast?: boolean;
}

const packages: Package[][] = [
  [
    {
      title: 'Landing Page',
      priceTag: 'Starting at',
      priceNumber: '$1,300',
      details: [
        { icon: '/figma-logo.svg', text: 'Figma design' },
        { icon: '/devices.svg', text: 'Responsive design' },
        { icon: '/slack.svg', text: 'Dedicated slack channel' },
        { icon: '/camera-slash.svg', text: 'Meeting free (optional)' },
        { icon: '/calendar.svg', text: 'Ready in 2 weeks' },
        { icon: '/chat.svg', text: 'Regular updates' },
      ],
    },
  ],
  [
    {
      title: 'Multiple Pages',
      priceTag: 'Starting at',
      priceNumber: '$3,000',
      details: [
        { icon: '/flower.svg', text: 'Every benefits of landing page' },
        { icon: '/calendar.svg', text: 'Ready in 2-6 weeks' },
        { icon: '/database.svg', text: 'CMS Integration' },
      ],
    },
    {
      title: '',
      details: [
        {
          icon: '/eyes.svg',
          text: 'Can’t find what you’re looking for? Custom solutions are also available!',
        },
      ],
      isLast: true,
    },
  ],
];

export default function Pricing() {
  return (
    <div className={styles.pricing} id='Pricing'>
      <div className={styles.header}>
        <div className={styles.title}>Pricing</div>
        <div className={styles.description}>
          No hidden fees, no subscription. Let’s keep it simple!
        </div>
      </div>

      <div className={styles.prices}>
        {packages.map((column, colIdx) => (
          <div className={styles.packageColumn} key={colIdx}>
            {column.map((pkg, pkgIdx) => (
              <div
                className={`${styles.package} ${
                  pkg.isLast ? styles.lastPackage : ''
                }`}
                key={pkgIdx}
              >
                {pkg.title && (
                  <div className={styles.packageHeader}>
                    <div className={styles.packageTitle}>{pkg.title}</div>
                    <div className={styles.price}>
                      <div className={styles.priceTag}>{pkg.priceTag}</div>
                      <div className={styles.priceNumber}>
                        {pkg.priceNumber}
                      </div>
                    </div>
                  </div>
                )}

                <div className={styles.packageDetails}>
                  {pkg.details.map((detail, index) => (
                    <div className={styles.packageDetail} key={index}>
                      <div className={styles.packageDetailIcon}>
                        <Image
                          src={detail.icon}
                          alt='icon'
                          width={32}
                          height={32}
                        />
                      </div>
                      <div className={styles.packageDetailText}>
                        {detail.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
