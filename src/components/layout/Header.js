import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
	render() {
		return (
			<div className='Header'>
				<h2 className='title'>
					{'{'} TIM'S CODE {'}'}
				</h2>
				<ul>
					<li>
						<Link to='/' className='link active'>
							Home
						</Link>
					</li>
					<li>
						<Link to='/about' className='link'>
							About
						</Link>
					</li>
					<li>
						<Link to='/topics' className='link'>
							Topics
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Header;
