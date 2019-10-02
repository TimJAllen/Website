import React, { Component } from 'react';
import { FaLinkedin, FaAngellist, FaGithub, FaPaperclip } from 'react-icons/fa';

class Banner extends Component {
	render() {
		return (
			<section className='page banner' id='home'>
				<h1>Timothy</h1>
				<h1>Allen</h1>
				<p>Full stack software developer and designer</p>
				<div className='divider medium' />
				<div className='icon-container'>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://www.linkedin.com/in/timothyallen6/'
						aria-label='View Timothy allen&#39;s LinkedIn profile'
					>
						<FaLinkedin className='icon' />
					</a>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://angel.co/timothy-allen-11'
						aria-label='View Timothy allen&#39;s AngelList profile'
					>
						<FaAngellist className='icon' />
					</a>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://github.com/TimJAllen'
						aria-label='View Github projects'
					>
						<FaGithub className='icon' />
					</a>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='http://drive.google.com/uc?export=download&id=1BBra-FdvOusr7yRK1Il-4gtT5gePyxpJ'
						aria-label='Download resume'
					>
						<FaPaperclip className='icon' />
					</a>
				</div>
			</section>
		);
	}
}

export default Banner;
