import Image from 'next/image';
import styles from './Testimonials.module.css';
import Title from '../Section/Title/Title';

// Define testimonial data type for better maintainability
interface TestimonialData {
  id: string;
  stars: string;
  review: string;
  author: string;
}

const testimonialData: TestimonialData[] = [
  {
    id: '1',
    stars: '/stars_blue.png',
    review:
      'Muhammad is highly professional. I have been working with for over 6 years and during these years, he has been super professional. We have worked on several web app projects. He is very knowledgeable, and highly responsive.',
    author: 'Adeyinka Adegoke • MelaninPeople',
  },
  {
    id: '2',
    stars: '/stars_yellow.png',
    review:
      "I've worked with Muhammad Osama on a number of different WordPress sites for my clients and he's not only super fast he also gets the direction without me having to over-explain which saves my agency a lot of time.",
    author: 'Sophia Hanvold • WSDM Marketing',
  },
  {
    id: '3',
    stars: '/stars_yellow.png',
    review:
      'Best Experience Ever, Working with Muhammad Osama was great. He was accessible and extremely collaborative on this project. He completed all milestones quickly and ahead of schedule.',
    author: "Akmal Qureshi, Solver's Cave",
  },
  {
    id: '4',
    stars: '/stars_yellow.png',
    review:
      'Outstanding developer with exceptional problem-solving skills. Muhammad delivered a complex e-commerce platform that exceeded our expectations. His attention to detail and clean code practices are remarkable.',
    author: 'Sarah Chen • TechFlow Solutions',
  },
  {
    id: '5',
    stars: '/stars_blue.png',
    review:
      'Muhammad transformed our outdated website into a modern, responsive masterpiece. His expertise in both frontend and backend development made the entire process seamless and stress-free.',
    author: 'James Rodriguez • Digital Innovations',
  },
  {
    id: '6',
    stars: '/stars_yellow.png',
    review:
      'Incredible work ethic and technical skills. Muhammad built our mobile app from scratch and delivered it ahead of schedule. Communication was excellent throughout the entire project.',
    author: 'Emily Watson • StartupHub',
  },
];

export default function Testimonials() {
  return (
    <div className={styles.testimonials} id='testimonials'>
      <div className={styles.header}>
        <Title
          title='Testimonials '
          description='Real reviews from real people </br>on real projects.'
        />
        <div className={styles.testimonialsContainer}>
          <div className={styles.firstRow}>
            {testimonialData.map((testimonial, index) => (
              <div key={testimonial.id} className={styles.singleTestimonial}>
                <Image
                  src={testimonial.stars}
                  width={123.65}
                  height={24}
                  alt=''
                />
                <div className={styles.review}>{testimonial.review}</div>
                <div className={styles.divider}></div>
                <div className={styles.author}>{testimonial.author}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
