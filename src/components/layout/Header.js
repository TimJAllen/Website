import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
	render() {
		console.log(this.props.location.pathname);
		return (
			<div className='Header'>
				<h2 className='title'>
					<div className='brackets'>{'{'}</div>
					TIM'S CODE
					<div className='brackets'>{'}'}</div>
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
							Projects
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Header;