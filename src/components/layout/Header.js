import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBarElement extends Component {
	render() {
		const { link, title, path } = this.props;
		let isActive =
			path.substring(1, path.length).indexOf('/') === -1
				? path === link
				: path.substring(0, path.substring(1, path.length).indexOf('/') + 1) === link;
		return (
			<li>
				<Link to={link} className={`link${isActive ? ' active' : ''}`}>
					{title}
				</Link>
			</li>
		);
	}
}

const tabs = [
	{
		link: '/',
		title: 'Home'
	},
	{
		link: '/about',
		title: 'About'
	},
	{
		link: '/projects',
		title: 'Projects'
	},
	{
		link: '/experience',
		title: 'Experience'
	},
	{
		link: '/resume',
		title: 'Resume'
	}
];

export class Header extends Component {
	render() {
		const { pathname } = this.props.location;
		return (
			<div className='Header'>
				<h2 className='title'>
					<div className='brackets'>{'{'}</div>
					TIM'S CODE
					<div className='brackets'>{'}'}</div>
				</h2>
				<ul>{tabs.map((e) => <NavBarElement title={e.title} link={e.link} path={pathname} />)}</ul>
			</div>
		);
	}
}

export default Header;
