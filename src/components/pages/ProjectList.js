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
						<p>Mobile app for scheduling dog and cat photos to be sent to your phone.</p>
						<a href='#projects'>READ MORE</a>
					</div>
					<div className='project'>
						<img src={image} alt='' />
						<h3>Connect'd</h3>
						<p>
							Cofounded AddMe LLC to create an app that lets people share any and all social media platforms at once.
						</p>
						<a href='#projects'>READ MORE</a>
					</div>
					<div className='project'>
						<img src={image} alt='' />
						<h3>Collideascope</h3>
						<p>Mobile game about colors and collisions. Based on a typo I made.</p>
						<a href='#projects'>READ MORE</a>
					</div>
				</div>
				<p>
					Check out this project on github! <a href='#projects'>FORK ME</a>
				</p>
			</section>
		);
	}
}

export default ProjectList;
