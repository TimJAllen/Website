import React, { Component } from 'react';
import image from './../../statics/images/logo192.png';

class About extends Component {
	render() {
		return (
			<section className='page' id='about'>
				<div className='about'>
					<div className='grouping'>
						<h3>Programmer</h3>
						<p>
							Ever since I was a kid I've been interested in computers. From building hobby PCs to mining Bitcoins and
							programming bots in video games, I've had a broad set of experiences with computers.
						</p>
						<img src={image} alt='' />
					</div>
					<div className='grouping'>
						<img src={image} alt='' />
						<h3>Hobbyist</h3>
						<p>
							Outside of the computer, I am an avid foodie and make it a point to try new food every week. I am also a
							trained body builder, and enjoy working with my hands to build.
						</p>
					</div>
					<div className='grouping'>
						<h3>Designer</h3>
						<p>
							Writing code is my skill, but design is my passion. I've been drawing digitally for over a decade, and
							love writing beautiful front end code for websites and apps.
						</p>
						<img src={image} alt='' />
					</div>
				</div>
			</section>
		);
	}
}

export default About;
