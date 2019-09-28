import React, { Component } from 'react';
import image from './../../statics/images/logo192.png';

class ProjectList extends Component {
	render() {
		return (
			<section className='page project-list' id='projects'>
				<h2>Projects</h2>
				<div className='project-list'>
					<div className='project'>
						<img src={image} alt='' />
						<h3>PupMe</h3>
						<p>Super short description maybe a list of technologies</p>
						<a href='#about'>read more</a>
					</div>
					<div className='project'>
						<img src={image} alt='' />
						<h3>Connect'd</h3>
						<p>Super short description maybe a list of technologies</p>
						<a href='#about'>read more</a>
					</div>
					<div className='project'>
						<img src={image} alt='' />
						<h3>Collideascope</h3>
						<p>Super short description maybe a list of technologies</p>
						<a href='#about'>read more</a>
					</div>
				</div>
			</section>
		);
	}
}

export default ProjectList;
