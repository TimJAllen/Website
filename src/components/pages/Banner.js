import React, { Component } from 'react';
import { FaLinkedin, FaAngellist, FaGithub } from 'react-icons/fa';

class Banner extends Component {
	render() {
		return (
			<section class='page banner'>
				<h1>Timothy</h1>
				<h1>Allen</h1>
				<p>Full stack software developer and designer</p>
				<divider />
				<div className='icon-container'>
					<FaLinkedin className='icon' />
					<FaAngellist className='icon' />
					<FaGithub className='icon' />
				</div>
			</section>
		);
	}
}

export default Banner;
