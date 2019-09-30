import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Quote extends Component {
	render() {
		const { children, speaker } = this.props;
		return (
			<div className='quote'>
				<div className='block'>
					<div className='quotation'>“</div>
					{children}
					<div className='quotation'>”</div>
				</div>
				<p className='speaker'> - {speaker}</p>
			</div>
		);
	}
}

Quote.propTypes = {
	// children: PropTypes.children
	speaker: PropTypes.string.isRequired
};

export default Quote;
