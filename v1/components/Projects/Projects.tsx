'use client';

import { useState } from 'react';
import Title from '../Title/Title';
import Project from './Project/Project';
import ProjectsData from '@/data/projects';
import styles from './Projects.module.css';

export default function Projects() {
  const INITIAL_VISIBLE_PROJECTS = 6;
  const LOAD_MORE_COUNT = 3;
  const [visibleProjects, setVisibleProjects] = useState(
    INITIAL_VISIBLE_PROJECTS
  );

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisible) => prevVisible + LOAD_MORE_COUNT);
  };

  return (
    <div className={styles.projects} id='work'>
      <Title sub='' title='Work' description='Collection of my best work.' />
      <div className={styles.list}>
        {ProjectsData?.slice(0, visibleProjects).map((p, index) => (
          <div key={index} className={styles.projectItem}>
            <Project
              image={p.image}
              link={p.link}
              url={p.url}
              title={p.title}
              description={p.description}
              build={p.build}
            />
          </div>
        ))}
      </div>
      {visibleProjects < ProjectsData.length && (
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.loadMore} button`}
            onClick={loadMoreProjects}
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
}
