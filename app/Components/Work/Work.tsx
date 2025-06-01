import styles from './Work.module.css';
import Title from '../Section/Title/Title';
import Image from 'next/image';
export default function Work() {
  type Project = {
    title: string;
    image: string;
    link: string;
  };

  const projects: Project[] = [
    {
      title: 'Saeed Visa Consultant',
      image: '/saeedvisaconsultant.png',
      link: 'https://saeedvisaconsultants.com/',
    },
    {
      title: 'GlobeWork',
      image: '/globework.png',
      link: 'https://globework.net/',
    },
    {
      title: 'AndreMendez',
      image: '/andremendez.png',
      link: 'https://andremendez.com/',
    },
    {
      title: 'Hidden Track',
      image: '/hiddentrack.png',
      link: 'https://hiddentrackafrica.com/',
    },
  ];
  return (
    <div className={styles.work} id='work'>
      <Title
        title='Recent Work'
        description='Selected projects that showcase </br>my skills and expertise.'
      />
      <div className={styles.projects}>
        {projects?.map((project, index) => (
          <div
            key={index}
            className={styles.project}
            onClick={() => window.open(project.link, '_blank')}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={1000}
              height={1000}
              className={styles.projectImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
