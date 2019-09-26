import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppStoreButton } from './../prefabs';

export class Project extends Component {
	render() {
		const { name, description, fullDescription, links } = this.props.project;
		const { appstore, playstore } = links;

		const Title = () => (name ? <h1 className='title'>{name}</h1> : '');
		const Description = () => (description ? <p>{description}</p> : '');
		const FullDescription = () => (fullDescription ? <p>{fullDescription}</p> : '');
		const Buttons = () =>
			links ? (
				<div className='appstore-buttons'>
					{appstore ? <AppStoreButton store='appstore' link={appstore.link} available={appstore.available} /> : ''}
					{playstore ? <AppStoreButton store='playstore' link={playstore.link} available={playstore.available} /> : ''}
				</div>
			) : (
				''
			);

		return (
			<div className='Project'>
				<Title />
				<Description />
				<FullDescription />
				<Buttons />
			</div>
		);
	}
}

Project.propTypes = {
	project: PropTypes.object.isRequired
};

export default Project;
