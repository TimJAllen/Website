import React, { Component } from 'react';
import PropTypes from 'prop-types';
import appstore from './../../statics/images/appstore.png';
import playstore from './../../statics/images/playstore.png';

export class AppStoreButton extends Component {
	render() {
		const { available, link, store } = this.props;
		return (
			<img
				className='App-Store-Button'
				src={store === 'appstore' ? appstore : playstore}
				style={{ opacity: available ? 1 : 0.5 }}
				alt={store}
				onClick={() => {
					console.log(link);
				}}
			/>
		);
	}
}

AppStoreButton.propTypes = {
	available: PropTypes.bool.isRequired,
	link: PropTypes.string.isRequired,
	store: PropTypes.oneOf([ 'appstore', 'playstore' ])
};

export default AppStoreButton;
