import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { scrollWithOffset } from './../functions';
import { FaListUl } from 'react-icons/fa';

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
		return (
			<div className='header'>
				<div className='navBar'>{tabs.map((e) => <NavBarElement title={e} key={e} />)}</div>
				<div className='stack'>
					<FaListUl className='icon' />
				</div>
			</div>
		);
	}
}

export default Header;
