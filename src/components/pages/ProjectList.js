import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import image_pupme from './../../statics/images/pupme.png';
import image_connectd from './../../statics/images/Connectd.png';
import image_collideascope from './../../statics/images/collideascope.png';
import connectd_full from './../../statics/images/Connectd_Full.png';

const Project = ({ img, title, text, link, handleClick }) => {
	return (
		<div className='project' onClick={() => handleClick()}>
			<img src={img} alt='' className='img' />
			<h3>{title}</h3>
			<p>{text}</p>
			<a href={link}>READ MORE</a>
		</div>
	);
};

class ProjectList extends Component {
	state = {
		height: 0
	};

	handleClick = (index) => {
		const { height } = this.state;

		this.setState({
			height: height === 0 ? 'auto' : 0,
			index
		});
	};

	render() {
		const { height } = this.state;
		return (
			<section className='page project-list' id='projects'>
				<h2>Projects</h2>
				<div className='project-peak'>
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
				<AnimateHeight duration={500} height={height}>
					<div className='project-full'>
						<img src={connectd_full} alt='' className='img' />
						<p>
							Meeting someone for the first time can be tricky when you decide to exchange contact information. Phone
							number? Facebook? Instagram? Snapchat? Can't ask for all because it takes too long.
						</p>
						<p>
							Connect'd allows you to create customized cards containing the contact details and social media
							information that you want to share in 1-click.
						</p>
						<p>Met someone while walking across your university campus? Share your Snapchat and Instagram handles.</p>
						<p>At a professional networking event? Share your LinkedIn and work email.</p>
						<p>Never again have to decide which ONE contact you want to exchange.</p>
						<h3>DEVELOPMENT</h3>
						<p>
							Co-founded AddMe LLC and developed an iOS/Android app that allows users to share any amount of contacts,
							social media handles, phone numbers, and profiles on one simple scan.
						</p>
						<p>Project started January of 2018, and was eventually taken down December 2018 to refocus.</p>
						<h3>TECH SPECS</h3>
						<p>
							React Native iOS/Android app using react-native-fire-base for authentication, apollo for GraphQL requests,
							and redux for state management.
						</p>
						<p>
							NodeJS server hosted on DigitalOcean taking in GraphQL request and validating against Firebase Auth.
							Sequelize framework used to translate schematics to secure SQL queries on a separated MySQL server.
						</p>
					</div>
				</AnimateHeight>
				<div className='divider' />
				<h3>This website too!</h3>
				<p>
					The best front-end programming portfolio includes the portfolio itself. This website was made from scratch
					using React, SCSS, and hosted on AWS Amplify.
				</p>
				<p>node: react, react-router-dom, react-icons, react-router-hash-link</p>
				<p>
					Check out this project on github! |{' '}
					<a target='_blank' rel='noopener noreferrer' href='https://github.com/TimJAllen/Website'>
						SEE THE CODE HERE
					</a>
				</p>
			</section>
		);
	}
}

export default ProjectList;
