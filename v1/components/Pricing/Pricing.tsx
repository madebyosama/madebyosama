'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './Pricing.module.css'
import Title from '../Title/Title'
import ContactModal from '@/components/ContactModal/ContactModal'

const landingFeatures = [
  { icon: '/assets/icons/figma.svg', text: 'Figma design' },
  { icon: '/assets/icons/devices.svg', text: 'Responsive design' },
  { icon: '/assets/icons/slack.svg', text: 'Dedicated slack channel' },
  { icon: '/assets/icons/camera-slash.svg', text: 'Meeting free (optional)' },
  { icon: '/assets/icons/calendar-check.svg', text: 'Ready in 2 weeks' },
  { icon: '/assets/icons/eyes.svg', text: 'Regular updates' },
]

const multiFeatures = [
  { icon: '/assets/icons/flower.svg', text: 'Every benefits of landing page' },
  {
    icon: '/assets/icons/calendar-check-2.svg',
    text: 'Ready in 2–6 weeks',
  },
  { icon: '/assets/icons/database.svg', text: 'CMS integration' },
]

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className={styles.pricing} id='pricing'>
      <Title
        sub=''
        title='Pricing'
        description="No hidden fees, no subscription. Let's keep it simple!"
      />
      <div className={styles.cards}>
        {/* Landing Page Card */}
        <div className={styles.card}>
          <div className={styles.badge}>Popular</div>
          <div className={styles.planName}>Landing page</div>
          <div className={styles.startingAt}>Starting at</div>
          <div className={styles.price}>$1,300</div>
          <div className={styles.features}>
            {landingFeatures.map((f, i) => (
              <div key={i} className={styles.feature}>
                <Image
                  src={f.icon}
                  alt=''
                  width={20}
                  height={20}
                  className={styles.featureIcon}
                />
                <span className={styles.featureText}>{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Multiple Pages Card */}
        <div>
          <div className={styles.card}>
            <div className={styles.planName}>Multiple pages</div>
            <div className={styles.startingAt}>Starting at</div>
            <div className={styles.price}>$3,000</div>
            <div className={styles.features}>
              {multiFeatures.map((f, i) => (
                <div key={i} className={styles.feature}>
                  <Image
                    src={f.icon}
                    alt=''
                    width={20}
                    height={20}
                    className={styles.featureIcon}
                  />
                  <span className={styles.featureText}>{f.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.custom}>
            <Image
              src='/assets/icons/chat-dots.svg'
              alt=''
              width={40}
              height={40}
              className={styles.customIcon}
            />
            <span className={styles.customText}>
              <button
                onClick={() => setIsModalOpen(true)}
                className={styles.contact}
              >
                Contact
              </button>{' '}
              for custom solutions!
            </span>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}
