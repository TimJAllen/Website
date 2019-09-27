import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaDotCircle } from 'react-icons/fa';

export class TextButton extends Component {
	// onClick = () => {
	// 	const { link, onClick } = this.props;
	// 	if (!!link) {
	// 		//route
	// 	} else {
	// 		onClick();
	// 	}
	// };

	render() {
		const { text, link } = this.props;
		return (
			<Link to={link} className='Button'>
				<FaDotCircle className='icon' />
				<div className='spacing' />
				<div className='text'>{text.toUpperCase()}</div>
			</Link>
		);
	}
}

TextButton.propTypes = {
	// icon: PropTypes.string,
	// iconPosition: PropTypes.oneOf([ 'left', 'right' ]),
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	link: PropTypes.string
};

export default TextButton;
