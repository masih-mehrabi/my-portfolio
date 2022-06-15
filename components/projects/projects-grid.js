import ProjectItem from './project-item';

import styles from './projects-grid.module.css'

function ProjectsGrid (props) {
    const {projects} = props;
    return(
        <ul className={styles.grid}>
            {projects.map((project) => (
            <ProjectItem key={project.slug} project={project}/>
            ))}
        </ul>
    );
}
export default ProjectsGrid;