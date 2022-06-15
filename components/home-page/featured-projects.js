import ProjectsGrid from '../projects/projects-grid';
import styles from './featured-projects.module.css'

function FeaturedProjects (props) {
    return(
        <section className={styles.latest}>
            <h2>
                Featured Projects
            </h2>
            <ProjectsGrid projects={props.projects}/>
        </section>
    );
}
export default FeaturedProjects;