import React, { Component } from 'react';

const Group = ({ title, text1, text2 }) => (
	<div className='item'>
		<h3>{title}</h3>
		<div className='divider' />
		<p>{text1}</p>
		<p>{text2}</p>
	</div>
);

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
					<Group
						title='Front End'
						text1='React, React Native, CSS3, HTML, CSS preprocessor SCSS, Flexbox, Emotion, React Router DOM, @media, transitions'
						text2='node: react-native-elements, react-native-vector-icons, emotion, react-native-qrcode-scanner,
							react-router-dom'
					/>
					<Group
						title='Back End'
						text1='NodeJS, Express, Digital Ocean, Linux command line, nginx, Let&#39;s Encrypt'
						text2='node: express, graphql, graphql-errors, graphql-tools, firebase-admin, uuid, bcryptjs'
					/>
					<Group
						title='Full Stack'
						text1='JavaScript, ES6 Frameworks (React, Redux), Babel, PM2, NPM, Yarn'
						text2='node: babel, redux, redux-devtools-extension, redux-persist, lodash, PropTypes'
					/>
					<Group
						title='Database'
						text1='PLSQL, SQL, Oracle SQL, Sequelize, MySQL, Microsoft Access'
						text2='node: casual, mongoose, mysql2'
					/>
					<Group
						title='Mobile'
						text1='React Native, Unity3D, LibGDX, Swift, Java'
						text2='Published app developer with over 200,000 app impressions and 6,000 downloads'
					/>
					<Group
						title='Extracurricular'
						text1='SquareSpace, Wix, DigitalOcean, AWS Amplify, PM2 & nginx, git, cmd line, Arduino'
						text2='Avid hacker and builder, robot maker in my free time'
					/>
				</div>
			</section>
		);
	}
}

export default Skills;
