'use client'

import Title from '../Title/Title'
import Review from './Review/Review'
import reviews from '@/data/reviews'
import styles from './Reviews.module.css'
import { useState } from 'react'

export default function Reviews() {
  const [visibleReviews, setVisibleReviews] = useState(6)

  const handleLoadMore = () => {
    setVisibleReviews((prev) => prev + 3)
  }

  return (
    <div className={styles.reviews} id='reviews'>
      <Title
        sub=''
        title='Testimonials'
        description='Real reviews from real people on real projects.'
      />
      <div className={styles.list}>
        {reviews.slice(0, visibleReviews).map((r, index) => (
          <div key={index} className={styles.item}>
            <Review
              description={r.description}
              image={r.authorImage}
              name={r.authorName}
              website={r.authorWebsite}
            />
          </div>
        ))}
      </div>
      {visibleReviews < reviews.length && (
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.loadMore} button`}
            onClick={handleLoadMore}
          >
            View More
          </button>
        </div>
      )}
    </div>
  )
}
