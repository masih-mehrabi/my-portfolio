import Head from "next/head";
import { Fragment } from "react";
import AllProjects from "../../components/projects/all-projects";
import { getAllProjects } from "../../helpers/projects-utility";

function Projects(props) {
    return(
      <Fragment>
        <Head>
          <title>All Projects</title>
          <meta 
          name="description"
          content="A list of my projects showcasing my web development skills" 
          />
        </Head>
        <AllProjects projects={props.projects}/>
      </Fragment>
    );


}

export function getStaticProps() {
    const AllProjects = getAllProjects();
  
    return {
      props: {
        projects: AllProjects
      },
    };
  }
export default Projects;