import React, { Component } from 'react';
import image from './../../statics/images/logo192.png';

class About extends Component {
	render() {
		return (
			<section className='page' id='about'>
				<div className='about'>
					<div className='grouping'>
						<h3>Test 1</h3>
						<p>lorem ipsum dolor sit. lorem ipsum dolor sit. lorem ipsum dolor sit.</p>
						<img src={image} alt='' />
					</div>
					<div className='grouping'>
						<img src={image} alt='' />
						<h3>Test 2</h3>
						<p>lorem ipsum dolor sit. lorem ipsum dolor sit. lorem ipsum dolor sit. lorem ipsum dolor sit.</p>
					</div>
					<div className='grouping'>
						<h3>Test 3</h3>
						<p>lorem ipsum dolor sit.</p>
						<img src={image} alt='' />
					</div>
				</div>
			</section>
		);
	}
}

export default About;
