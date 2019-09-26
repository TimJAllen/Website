import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaDotCircle } from 'react-icons/fa';

export class TextButton extends Component {
	render() {
		const { icon, text } = this.props;
		return (
			<div className='Button'>
				<FaDotCircle className='icon' />
				<div className='spacing' />
				<div className='text'>{text}</div>
			</div>
		);
	}
}

TextButton.propTypes = {
	// icon: PropTypes.string,
	// iconPosition: PropTypes.oneOf([ 'left', 'right' ]),
	text: PropTypes.string.isRequired
};

export default TextButton;
