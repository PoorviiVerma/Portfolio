import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/wordcloud.png';
import hipsster from '../../assets/bishop.png';
import fitLift from '../../assets/car.png';
import ProjectCard from '../../common/ProjectCard';
import burger from '../../assets/fresh-burger.png';
import sales from '../../assets/salesenselogo.webp';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <p className={styles.description}>
        Following projects showcase my skills through my work. Each project is linked and reflects my ability to work with different technologies and manage projects efficiently.
      </p>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={burger}
          link="https://foodstruck-4e1j7iekf-poorvi-vermas-projects.vercel.app/"
          h3="FoodStruck"
          p="A MERN Stack Restaurant site project"
        />
        <ProjectCard
          src={sales}
          link="https://sale-sense.vercel.app/"
          h3="SaleSense"
          p="Completely responsive React dashboard"
        />
        
        <ProjectCard
          src={freshBurger}
          link="https://github.com/PoorviiVerma/Machine-Learning-Projects.git"
          h3="Suicide Detection"
          p="Machine Learning and NLP project"
        />
       
        
      </div>
    </section>
  );
}

export default Projects;
