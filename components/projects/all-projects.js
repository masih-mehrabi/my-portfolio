import ProjectsGrid from "./projects-grid";

import styles from './all-projects.module.css';

function AllProjects (props) {
    return(
        <section className={styles.projects}>
            <h1>All Projects</h1>
            <ProjectsGrid projects={props.projects}/>
        </section>
    );

}
export default AllProjects;