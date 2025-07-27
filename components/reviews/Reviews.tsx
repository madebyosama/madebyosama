'use client';

import Title from '../title/Title';
import Review from './review/Review';
import reviews from '@/data/reviews';
import styles from './Reviews.module.css';
import { useState } from 'react';

export default function Reviews() {
  const [visibleReviews, setVisibleReviews] = useState(6); // Show initial 3 reviews

  const handleLoadMore = () => {
    setVisibleReviews((prev) => prev + 3); // Load 3 more reviews when "More" is clicked
  };

  return (
    <div className={styles.reviews} id='reviews'>
      <Title sub='' title='Reviews' description='Take their word for it.' />
      <div className={styles.list}>
        {reviews.slice(0, visibleReviews).map((r, index) => (
          <Review
            key={index}
            description={r.description}
            image={r.authorImage}
            name={r.authorName}
            website={r.authorWebsite}
          />
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
  );
}
