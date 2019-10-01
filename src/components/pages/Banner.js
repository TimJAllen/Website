import React, { Component } from 'react';
import { FaLinkedin, FaAngellist, FaGithub } from 'react-icons/fa';

class Banner extends Component {
	render() {
		return (
			<section className='page banner' id='home'>
				<h1>Timothy</h1>
				<h1>Allen</h1>
				<p>Full stack software developer and designer</p>
				<div className='divider medium' />
				<div className='icon-container'>
					<a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/timothyallen6/'>
						<FaLinkedin className='icon' />
					</a>
					<a target='_blank' rel='noopener noreferrer' href='https://angel.co/timothy-allen-11'>
						<FaAngellist className='icon' />
					</a>
					<a target='_blank' rel='noopener noreferrer' href='https://github.com/TimJAllen'>
						<FaGithub className='icon' />
					</a>
					{/* <a target='_blank' rel='noopener noreferrer' href='https://bitbucket.org/timjallen/profile/repositories'>
						<FaBitbucket className='icon' />
					</a> */}
				</div>
			</section>
		);
	}
}

export default Banner;
