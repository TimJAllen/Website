import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageSrc from './../../statics/images/logo192.png';

export class ProjectPeak extends Component {
	render() {
		const { displayName, fullDescription } = this.props.project;

		const Title = () => (displayName ? <h1 className='title'>{displayName}</h1> : '');
		const FullDescription = () => (fullDescription ? <p className='description'>{fullDescription}</p> : '');
		const Image = () => <img src={ImageSrc} alt='' className='img' />;

		return (
			<div className='Project-Peak'>
				<Image />
				<div className='text-container'>
					<Title />
					<FullDescription />
				</div>
			</div>
		);
	}
}

ProjectPeak.propTypes = {
	project: PropTypes.object.isRequired
};

export default ProjectPeak;
