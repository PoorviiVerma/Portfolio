import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/wordcloud.png';
import hipsster from '../../assets/bishop.png';
import fitLift from '../../assets/car.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <p className={styles.description}>
          Following projects showcases my skills through my work. Each project is with links in it that reflects my ability to work with different technologies and manage project efficiently.
        </p>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/PoorviiVerma/Study-Sync.git"
          h3="StydySync"
          p="Frontend - Online learning platform"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/PoorviiVerma/Machine-Learning-Projects.git"
          h3="Suicide Detection"
          p="Machine Learninng and NLP project work"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/PoorviiVerma/Chess.git"
          h3="Chess"
          p="Chess board Game"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/PoorviiVerma/Car-Racing.git"
          h3="Car Race"
          p="Unlimited racing game"
        />
      </div>
    </section>
  );
}

export default Projects;
