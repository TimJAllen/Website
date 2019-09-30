import React, { Component } from 'react';

class Skills extends Component {
	render() {
		return (
			<section className='page skills' id='skills'>
				<h2>Skills</h2>
				<p>
					I have over 10 years of experience in a plethora of languages including JavaScript, C#, Python, Java, and
					PLSQL.
				</p>
				<p>Dedicated code documenter and an excited learner.</p>
				<div className='container'>
					<div className='item'>
						<h3>Front End</h3>
						<div className='divider' />
						<p>React, React Native, CSS3, CSS preprocessor SCSS, Flexbox, Emotion, React Router DOM</p>
						<p>
							node: react-native-elements, react-native-vector-icons, emotion, react-native-qrcode-scanner,
							react-router-dom
						</p>
					</div>
					<div className='item'>
						<h3>Back End</h3>
						<div className='divider' />
						<p>NodeJS, Express, Digital Ocean, Linux command line, nginx, Let's Encrypt</p>
						<p>node: express, graphql, graphql-errors, graphql-tools, firebase-admin, uuid, bcryptjs</p>
					</div>
					<div className='item'>
						<h3>Full Stack</h3>
						<div className='divider' />
						<p>JavaScript, ES6 Frameworks (React, Redux), Babel, PM2, NPM, Yarn</p>
						<p>node: babel, redux, redux-devtools-extension, redux-persist, lodash, PropTypes</p>
					</div>
				</div>
				<div className='container'>
					<div className='item'>
						<h3>Database</h3>
						<div className='divider' />
						<p>PLSQL, SQL, Oracle SQL, Sequelize, MySQL, Microsoft Access </p>
						<p>node: casual, mongoose, mysql2</p>
					</div>
					<div className='item'>
						<h3>Mobile</h3>
						<div className='divider' />
						<p>React Native, Unity3D, LibGDX, Swift, Java</p>
						<p>Published app developer with over 200,000 app impressions and 6,000 downloads</p>
					</div>
					<div className='item'>
						<h3>Extracurricular</h3>
						<div className='divider' />
						<p>SquareSpace, Wix, DigitalOcean, AWS Amplify, PM2 & nginx, git, cmd line, Arduino</p>
						<p>Avid hacker and builder, robot maker in my free time</p>
					</div>
				</div>
			</section>
		);
	}
}

export default Skills;
