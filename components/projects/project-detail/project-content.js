import ReactMarkdown from 'react-markdown';
import ProjectHeader from './project-header';
import Image from 'next/image';
import styles from './project-content.module.css';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import  atomDark  from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';


SyntaxHighlighter.registerLanguage('js', js);

export default function ProjectContent(props) {
	const { project } = props;

	const imagePath = `/images/projects/${project.slug}/${project.image}`;
	const customRenderers = {
		// img(image) {
		//   return (
		//     <Image
		//       src={`/images/posts/${post.slug}/${image.src}`}
		//       alt={image.alt}
		//       width={600}
		//       height={300}
		//     />
		//   );
		// },
		p(paragraph) {
			const { node } = paragraph;

			if (node.children[0].tagName === 'img') {
				const image = node.children[0];

				return (
					<div className={styles.image}>
						<Image
							src={`/images/projects/${project.slug}/${image.properties.src}`}
							alt={image.alt}
							width={600}
							height={300}
						/>
					</div>
				);
			}

			return <p>{paragraph.children}</p>;
		},

		code(code) {
			const { children } = code;

			return (
				<SyntaxHighlighter
					style={atomDark}
					language='javascript'
				>
					{children}
				</SyntaxHighlighter>
			);
		},
	};

	return (
		<article className={styles.content}>
			<ProjectHeader
				title={project.title}
				image={imagePath}
			/>
			<ReactMarkdown components={customRenderers}>
				{project.content}
			</ReactMarkdown>
		</article>
	);
}
