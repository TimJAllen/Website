import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Header extends Component {
	render() {
		return (
			<div className='Header'>
				<Link to='/'>Home</Link>
				<Link to='/about'>About</Link>
				<Link to='/topics'>Topics</Link>
			</div>
		);
	}
}

Header.propTypes = {};

export default Header;
