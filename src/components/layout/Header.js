import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const scrollWithOffset = (el, offset) => {
	const elementPosition = el.offsetTop - offset;
	window.scroll({
		top: elementPosition,
		left: 0,
		behavior: 'smooth'
	});
};

class NavBarElement extends Component {
	render() {
		const { title } = this.props;
		return (
			<Link smooth to={`#${title}`} scroll={(el) => scrollWithOffset(el, 64)} className='navbarTab'>
				{title.toUpperCase()}
			</Link>
		);
	}
}

const tabs = [ 'home', 'intro', 'about', 'skills', 'experience', 'projects' ];

class Header extends Component {
	render() {
		return <div className='header'>{tabs.map((e) => <NavBarElement title={e} key={e} />)}</div>;
	}
}

export default Header;
