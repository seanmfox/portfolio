import Layout from '../components/Layout';
const projectData = [
	{
		projectName: 'Pixel Art Maker',
		projectDescription: 'JavaScript pixel art design app',
		className: 'pixel',
		imageSource: 'pixel.png',
		imageAltText: 'Pixel Art Maker Project',
		projectLink: 'https://protected-beyond-69634.herokuapp.com/',
		sourceCode: 'https://github.com/seanmfox/pixel-art-maker'
	},
	{
		projectName: 'Calculator',
		projectDescription: 'Calculator written in vanilla JavaScript',
		className: 'calculator',
		imageSource: 'calculator.png',
		imageAltText: 'CodePen Calculator',
		projectLink: 'https://codepen.io/geekypghrunner/full/KyaexY/',
		sourceCode: 'https://codepen.io/geekypghrunner/pen/KyaexY'
	}
];

export default () => (
	<Layout>
		<main>
			{projectData.map(project => (
				<div className={`project-wrap pixel ${project.className}`}>
					<img
						src={`../static/img/${project.imageSource}`}
						alt={`${project.imageAltText}`}
						className='project-image'
					/>
					<div
						className='project-details'
						onClick={() => {
							return true;
						}}
					>
						<h3 className='project-name'>{project.projectName}</h3>
						<p className='project-desc'>{project.projectDescription}</p>
						<a
							href={project.projectLink}
							target='_blank'
						>
							Live Demo
						</a>
						<a
							href={project.sourceCode}
							target='_blank'
						>
							Source Cde
						</a>
					</div>
					<div className='overlay' />
				</div>
			))}
		</main>
	</Layout>
);
