import React, { Component } from 'react';
import img1 from './../../statics/images/img1.jpg';
import img2 from './../../statics/images/img2.jpg';
import img3 from './../../statics/images/img3.jpg';

class About extends Component {
	render() {
		return (
			<section className='page' id='about'>
				<div className='about'>
					<div className='grouping'>
						<h3>Programmer</h3>
						<p>
							Software development has always been my passion. I started off writing video game bots and web crawlers,
							moved on to app development and now front-end website dev.
						</p>
						<img src={img1} alt='' />
					</div>
					<div className='grouping'>
						<img src={img2} alt='' />
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
						<img src={img3} alt='' />
					</div>
				</div>
			</section>
		);
	}
}

export default About;
