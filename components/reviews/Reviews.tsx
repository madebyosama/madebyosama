import Title from '../title/Title';
import Review from './review/Review';
import reviews from '@/data/reviews';
import styles from './styles.module.css';

export default function Reviews() {
  return (
    <div className={styles.reviews} id='reviews'>
      <Title sub='' title='Reviews' description='Take their word for it.' />
      <div className={styles.list}>
        {reviews?.map((r, index) => {
          return (
            <Review
              key={index}
              description={r.description}
              image={r.authorImage}
              name={r.authorName}
              website={r.authorWebsite}
            />
          );
        })}
      </div>
    </div>
  );
}
