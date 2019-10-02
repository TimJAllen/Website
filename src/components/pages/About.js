import React, { Component, Fragment } from 'react';
import img1 from './../../statics/images/img1.jpg';
import img2 from './../../statics/images/img2.jpg';
import img3 from './../../statics/images/img3.jpg';
import Media from 'react-media';

const Group = ({ title, text, img, reverse }) => {
	return (
		<Media
			queries={{
				mobile: '(max-width: 640px)'
			}}
		>
			{(matches) => (
				<Fragment>
					{matches.mobile && (
						<div className='grouping'>
							{reverse && <img src={img} alt='' />}
							<div className='mobile-column'>
								<h3>{title}</h3>
								<p>{text}</p>
							</div>
							{!reverse && <img src={img} alt='' />}
						</div>
					)}
					{!matches.mobile && (
						<div className='grouping'>
							{reverse && <img src={img} alt='' />}
							<h3>{title}</h3>
							<p>{text}</p>
							{!reverse && <img src={img} alt='' />}
						</div>
					)}
				</Fragment>
			)}
		</Media>
	);
};

class About extends Component {
	render() {
		return (
			<section className='page about' id='about'>
				<Group
					title='Programmer'
					text='Software development has always been my passion. I started off writing video game bots and web crawlers, moved on to app development and now front-end website dev.'
					img={img1}
				/>
				<Group
					title='Hobbyist'
					text='Outside of the computer, I am an avid foodie and make it a point to try new food every week. I am also a trained body builder, and enjoy working with my hands to build.'
					img={img2}
					reverse
				/>
				<Group
					title='Designer'
					text='Writing code is my skill, but design is my passion. I&#39;ve been drawing digitally for over a decade, and love writing beautiful front end code for websites and apps.'
					img={img3}
				/>
			</section>
		);
	}
}

export default About;
