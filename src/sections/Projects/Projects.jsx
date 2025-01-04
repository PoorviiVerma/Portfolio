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
          Following projects showcases my skills through my work. Each project is with links in it that reflects my ability to work with different technologies and manage project efficiently.
        </p>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ burger }
          link="https://foodstruck-4e1j7iekf-poorvi-vermas-projects.vercel.app/"
          h3="FoodStruck"
          p="A MERN Stack Restraunt site Project 
"
        />
        <ProjectCard
          src={sales}
          link="https://sale-sense.vercel.app/"
          h3="SaleSense"
          p="Completely responsive react dashboard"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/PoorviiVerma/Machine-Learning-Projects.git"
          h3="Suicide Detection"
          p="Machine Learninng and NLP project work "
        />
        
        {/* <ProjectCard
          src={fitLift}
          link="https://github.com/PoorviiVerma/Car-Racing.git"
          h3="Car Race"
          p="Unlimited racing game"
        /> */}
      </div>
    </section>
  );
}

export default Projects;
