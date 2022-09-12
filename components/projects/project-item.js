import Link from 'next/link';
import Image from 'next/image';

import styles from './project-item.module.css';

function ProjectItem(props) {
	const {
		title,
		image,
		excerpt,
		date,
		slug,
		frontendTitle,
		frontendGithubLink,
		frontendWebsiteLink,
		GithubTitle,
		Website,
        BackendTitle,
        BackendGithublink,
		BackendLink,
	} = props.project;
	const formattedDate = new Date(
		date
	).toLocaleDateString('en-us', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	const imagePath = `/images/projects/${slug}/${image}`;
	const linkPath = `/projects/${slug}`;
	const linktoGithub = `${frontendGithubLink}`;
	const linktoWebsite = `${frontendWebsiteLink}`;
    const imagelink = `/images/projects/Bookmark-it/two-arrows.png`;
	const imageTitle = 'two arrows';
    const Backendlink = `${BackendGithublink}`;

	return (
		<li className={styles.project}>
			<Link href={linkPath}>
				<a>
					<div className={styles.image}>
						<Image
							src={imagePath}
							alt={title}
							width={300}
							height={200}
							layout='responsive'
						/>
					</div>
					<div className={styles.content}>
						<h3>{title}</h3>
						<time>{formattedDate}</time>
						<p>{excerpt}</p>
						<Image
							src={imagelink}
							alt={imageTitle}
							width={30}
							height={20}
						></Image>
						<p>{frontendTitle}:</p>
						<p>{GithubTitle}</p>
						<Link href={linktoGithub}>
							<p className={styles.link}>{linktoGithub}</p>
						</Link>
						<p>{Website}</p>
						<Link href={linktoWebsite}>
							<p className={styles.link}>{linktoWebsite}</p>
						</Link>
                        <Image
							src={imagelink}
							alt={imageTitle}
							width={30}
							height={20}
						></Image>
                        <p>{BackendTitle}:</p>
                        {/* <p>{GithubTitle}</p> */}
						<p>{BackendLink}</p>

                        <Link href={Backendlink}>
                            <p className={styles.link}>{Backendlink}</p>
                        </Link>
                        
					</div>
				</a>
			</Link>
		</li>
	);
}
export default ProjectItem;
