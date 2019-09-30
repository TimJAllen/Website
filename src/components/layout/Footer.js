import React, { Component } from 'react';
import { FaLinkedin, FaAngellist, FaPaperclip } from 'react-icons/fa';

class Footer extends Component {
	render() {
		return (
			<div className='page footer'>
				<p>Always looking for more experience!</p>
				<p>
					<b>Location</b>
					<br />Bay Area, California
				</p>
				<p>
					<b>Email</b>
					<br />TimJAllen.ta@gmail.com
				</p>
				<div className='icons'>
					<a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/timothyallen6/'>
						<FaLinkedin className='icon' />
					</a>
					<a target='_blank' rel='noopener noreferrer' href='https://angel.co/timothy-allen-11'>
						<FaAngellist className='icon' />
					</a>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='http://drive.google.com/uc?export=download&id=1BBra-FdvOusr7yRK1Il-4gtT5gePyxpJ'
					>
						<FaPaperclip className='icon' />
					</a>
				</div>
				{/* <p>Someone please hire me, I want a job. :(</p> */}
			</div>
		);
	}
}

export default Footer;
