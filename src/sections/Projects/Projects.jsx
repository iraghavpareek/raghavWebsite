import styles from "./ProjectsStyles.module.css";
import circle from "../../assets/circle.png";
import magic from "../../assets/magic.png";
import ecommerce from "../../assets/e-commerce.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={circle}
          link="https://github.com/iraghavpareek/StudyCS"
          h3="Study CS"
          p="Study App"
        />
        <ProjectCard
          src={magic}
          link="https://github.com/iraghavpareek/Numeralis-Revelio"
          h3="Numeralis Revelio"
          p="The Guess Game"
        />
        <ProjectCard
          src={ecommerce}
          link="https://github.com/iraghavpareek/Shop-n-Fly/tree/main"
          h3="Shop 'n' Fly"
          p="E- Commerce App"
        />
      </div>
    </section>
  );
}

export default Projects;
