import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBarElement extends Component {
	render() {
		const { link, title, path } = this.props;
		let isActive =
			path.substring(1, path.length).indexOf('/') === -1
				? path === link
				: path.substring(0, path.substring(1, path.length).indexOf('/') + 1) === link;
		return <div className={`navbarTab${isActive ? ' active' : ''}`}>{title}</div>;
	}
}

const tabs = [
	{
		link: '/',
		title: 'Home'
	},
	{
		link: '/about',
		title: 'Intro'
	},
	{
		link: '/projects',
		title: 'About'
	},
	{
		link: '/experience',
		title: 'Skills'
	},
	{
		link: '/resume',
		title: 'Background'
	},
	{
		link: '/resume',
		title: 'Projects'
	}
];

class Header extends Component {
	render() {
		const { pathname } = this.props.location;
		return (
			<div className='header'>{tabs.map((e) => <NavBarElement title={e.title} link={e.link} path={pathname} />)}</div>
		);
	}
}

export default Header;
