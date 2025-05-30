import styles from './Work.module.css';
import Title from '../Section/Title/Title';
import Image from 'next/image';
export default function Work() {
  type Project = {
    title: string;
    image: string;
  };

  const projects: Project[] = [
    {
      title: 'Project 1',
      image: '/project1.png',
    },
    {
      title: 'Project 2',
      image: '/project2.png',
    },
    {
      title: 'Project 3',
      image: '/project3.png',
    },
    {
      title: 'Project 3',
      image: '/project3.png',
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
          <div key={index} className={styles.project}>
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
