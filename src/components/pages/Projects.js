import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import image_pupme from './../../statics/images/pupme.png';
import image_connectd from './../../statics/images/Connectd.png';
import image_collideascope from './../../statics/images/collideascope.png';
import projects from './../../statics/projects';
import { HashLink as Link } from 'react-router-hash-link';
import { scrollWithOffset } from './../functions';

const Project = ({ img, title, text, handleClick }) => {
	return (
		<div className='project'>
			<img src={img} alt='' className='img' />
			<h3>{title}</h3>
			<p>{text}</p>
			<Link smooth to={`#project-detail`} scroll={(el) => scrollWithOffset(el, 84)} onClick={() => handleClick()}>
				READ MORE
			</Link>
		</div>
	);
};

const FullProject = ({ index }) => {
	const item = projects[index];
	const { name, image, text } = item;
	return (
		<div className='project-full'>
			<img src={image} alt='' />
			<h2>{name}</h2>
			{text.map((e) => (
				<React.Fragment>
					{e.heading && <h3>{e.heading}</h3>}
					{e.description && <p>{e.description}</p>}
				</React.Fragment>
			))}
		</div>
	);
};

class Projects extends Component {
	state = {
		height: 0,
		index: 0
	};

	handleClick = (index) => {
		const { height } = this.state;
		this.setState({
			height: index === this.state.index && height === 'auto' ? 0 : 'auto',
			index
		});
	};

	render() {
		const { height, index } = this.state;
		return (
			<section className='page project-list' id='projects'>
				<h2>Projects</h2>
				<div className='project-list'>
					<Project
						img={image_pupme}
						title={'PupMe'}
						text={'Mobile app for scheduling dog and cat photos to be sent to your phone.'}
						link={'#projects/pupme'}
						handleClick={() => {
							this.handleClick(0);
						}}
					/>
					<Project
						img={image_connectd}
						title={"Connect'd"}
						text={'Cofounded AddMe LLC to create an app that can share any and all social media platforms at once.'}
						link={'#projects/connectd'}
						handleClick={() => {
							this.handleClick(1);
						}}
					/>
					<Project
						img={image_collideascope}
						title={'Collideascope'}
						text={'Mobile game about colors and collisions. Based on a typo I made while spelling Kaleidoscope.'}
						link={'#projects/collideascope'}
						handleClick={() => {
							this.handleClick(2);
						}}
					/>
				</div>
				<AnimateHeight duration={500} height={height} id='project-detail'>
					<FullProject index={index} />
				</AnimateHeight>
				<div className='divider' />
				<h3>This website too!</h3>
				<p>
					The best front-end programming portfolio includes the portfolio itself. This website was made from scratch
					using React, SCSS, and hosted on AWS Amplify.
				</p>
				<p>
					This site uses @media queries to create responsive layouts, try resizing the browser or check out the mobile
					site to see it!
				</p>
				<p>
					Simple and elegant animations done using CSS transition properties. I chose to only use these because I
					believe in keeping UIs simple and functional in how information is displayed.
				</p>
				<p>node: react, react-icons, react-router-hash-link</p>
				<p>
					Check out this project on github! |{' '}
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://github.com/TimJAllen/Website'
						aria-label='View the project on Github'
					>
						SEE THE CODE HERE
					</a>
				</p>
				<p>Google Chrome's Audit results: Performance 99%, Accessibility 96%, Best Practices 93%, SEO 100%</p>
			</section>
		);
	}
}

export default Projects;
