import Link from "next/link";
import Image from "next/image";

import styles from './project-item.module.css'

function ProjectItem (props) {
    const { title, image, excerpt, date, slug } = props.project;
    const formattedDate = new Date(date).toLocaleDateString(
        'en-us', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
        });
        
        const imagePath = `/images/projects/${slug}/${image}`;
        const linkPath = `/projects/${slug}`; 

    return(
        <li className={styles.project}>
            <Link href={linkPath}>
                <a>
                    <div className={styles.image}>
                        <Image src={imagePath} alt={title} width={300} height= {200} layout='responsive' />
                    </div>
                    <div className={styles.content}>
                        <h3>{title}</h3>
                        <time>{formattedDate}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    );
}
export default ProjectItem;