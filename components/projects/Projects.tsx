import Title from '../title/Title';
import Project from './project/Project';
import ProjectsData from '@/data/projects';
import styles from './styles.module.css';

export default function Projects() {
  return (
    <div className={styles.projects} id='work'>
      <Title sub='' title='Work' description='Collection of my best work.' />
      <div className={styles.list}>
        {ProjectsData?.map((p, index) => {
          return (
            <Project
              key={index}
              image={p.image}
              link={p.link}
              url={p.url}
              title={p.title}
              description={p.description}
              build={p.build}
            />
          );
        })}
      </div>
    </div>
  );
}
