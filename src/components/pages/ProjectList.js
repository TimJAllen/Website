import React, { Component } from 'react';
import image_pupme from './../../statics/images/pupme.png';
import image_connectd from './../../statics/images/Connectd.png';
import image_collideascope from './../../statics/images/collideascope.png';

const Project = ({ img, title, text, link, handleClick }) => {
	return (
		<div className='project' onClick={() => handleClick()}>
			<img src={img} alt='' />
			<h3>{title}</h3>
			<p>{text}</p>
			<a href={link}>READ MORE</a>
		</div>
	);
};

// const screens = [ 1, 2, 3 ];

class ProjectList extends Component {
	state = {
		visible: false
	};

	handleClick = (index) => {
		this.setState({
			visible: index === this.state.index ? false : true,
			index
		});
	};

	render() {
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
						text={'Mobile game about colors and collisions. Based on a typo I made.'}
						link={'#projects/collideascope'}
						handleClick={() => {
							this.handleClick(2);
						}}
					/>
				</div>
				{/* <div className='project-insight active'>
					<h1>YEET {screens[this.state.index]}</h1>
				</div> */}
				<p>
					Check out this project on github! |{' '}
					<a target='_blank' rel='noopener noreferrer' href='https://github.com/TimJAllen/Website'>
						FORK ME!
					</a>
				</p>
			</section>
		);
	}
}

export default ProjectList;
