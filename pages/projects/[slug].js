import Head from "next/head";
import { Fragment } from "react";
import ProjectContent from "../../components/projects/project-detail/project-content";
import { getProjectData, getProjectFiles } from "../../helpers/projects-utility";

function ProjectDetailPage(props) {
    return(
        <Fragment>
            <Head>
                <title>{props.project.title}</title>
                <meta name="description" content={props.project.excerpt}/>
            </Head>
            <ProjectContent project={props.project}/>
        </Fragment>
        
    );
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const postData = getProjectData(slug);

    return {
        props: {
            project: postData
        },
        revalidate: 600
    };
}

export function getStaticPaths () {
    const projectFilenames = getProjectFiles();

    const slugs = projectFilenames.map(fileName => fileName.replace(/\.md$/, ''));

    return {
        paths: slugs.map((slug) => ({ params: {slug:slug} })),
        fallback: false
    };
}

export default ProjectDetailPage;