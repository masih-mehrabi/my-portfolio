import { Fragment } from 'react';
import FeaturedProjects from '../components/home-page/featured-projects';
import Hero from '../components/home-page/hero';
import { getFeaturedProjects } from '../helpers/projects-utility';
import Head from 'next/head';

function HomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>Masih projects</title>
				<meta
					name='description'
					content='I am a fulstack web developer with a degree in computer science.'
				/>
			</Head>
			<Hero />
			<FeaturedProjects
				projects={props.projects}
			/>
		</Fragment>
	);
}

export function getStaticProps() {
	const featuredProjects = getFeaturedProjects();

	return {
		props: {
			projects: featuredProjects,
		},
	};
}
export default HomePage;
