import React, { Component } from 'react';
import { FaPaperclip } from 'react-icons/fa';

class Experience extends Component {
	render() {
		return (
			<section className='page experience' id='experience'>
				<h2>Experience</h2>
				<p>Software developer with 10+ years experience in related fields.</p>
				<p>Cofounder of app-first software company, and publisher of multiple iOS/Android apps.</p>
				<div className='jobs'>
					<div className='job'>
						<h3>Cofounder & CTO</h3>
						<h4>AddMe LLC</h4>
						<p>San Jose, CA | 2018</p>
						<p>
							- Cofounder of Connect'd - the social contact, a social media aggregation app designed to allow users to
							share multiple profiles, handles, and contacts with one QR code.
						</p>
						<p>
							- Programmed iOS and Android app using cutting edge React Native + redux and knowledge of XCode and
							Android Studios.
						</p>
						<p>
							- Hosted Ubuntu servers with Node.js frontend to handle GraphQL requests and Firebase authentication, and
							a MySQL backend to securely store user data.
						</p>
					</div>
					<div className='job'>
						<h3>Sales Operations</h3>
						<h4>Shape Security</h4>
						<p>Mountain View, CA | 2019</p>
						<p>
							- Used Python and Excel to parse reports from Salesforce and generate new data-sanitized reports to funnel
							back into Salesforce with Data Loader.
						</p>
						<p>- Wrote JS and Python scripts to scrape information from the web for the sales team to use.</p>
						<p>- Wrote front end for internal sales tools using PugJS, JS, Jade, HTML, and CSS</p>
					</div>
					<div className='job'>
						<h3>Teacher & Tech Director</h3>
						<h4>Digital Media Academy</h4>
						<p>Stanford, CA | 2015-2018</p>
						<p>- Managed software and technical support for over 400 devices including iPads, Macs, and PCs.</p>
						<p>
							- Led a team of 4 individuals to maintain inventory and distribute supplies needed to run the technical
							summer camp.
						</p>
						<p>- Instructed 28 C#, Java, and iOS week long courses attended by up to 30 students aged 8 to 18.</p>
						<p>- Led classrooms through complicated lessons on game design, basic data structure, and data types.</p>
					</div>
				</div>
				<p>
					<b>Degree:</b> B.S. Business MIS (Management Information Systems), San Jose State University
				</p>
				<p>
					<b>Skills and Endorsements:</b> LinkedIn's C# Assessment Certification
				</p>
				<p>
					<b>Class Projects:</b> SJSU BUS4-92 Elite project winner, SJSU BUS4-119a project lead
				</p>
				<p>
					<b>Activities and Societies:</b> IDEAs Incubator & Accelerator program project manager, Delta Sigma Phi
					fraternity property manager, Body Building Club executive officer, Residents Hall Government board executive
					member, Information and Security club member
				</p>
				<p>
					<b>Courses:</b> Intro to Programming, Intro to Data Structures, Computer Tools for Business, Fundamentals of
					Management Information, Systems Analysis and Design, Networking and Data Communications, Advanced Database
					Management Systems, Advanced Networking & Database Communications, Quantitative Business Analysis, MIS
					Practicum, Business Strategy and Information Systems
				</p>
				<div className='divider' />
				<h2>Resume</h2>
				<p>
					<FaPaperclip className='icon' /> Download my{' '}
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='http://drive.google.com/uc?export=download&id=1BBra-FdvOusr7yRK1Il-4gtT5gePyxpJ'
						aria-label='Download resume'
					>
						RESUME
					</a>{' '}
					to see all details
				</p>
			</section>
		);
	}
}

export default Experience;
